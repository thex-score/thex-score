<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.data.title") }}</h1>

    <UCard class="my-5">
      <template #header>
        <h2>{{ $t("pages.data.achievement_status.title") }}</h2>
      </template>

      <p class="text-sm text-gray-500 mb-2">
        {{ $t("pages.data.achievement_status.note.replay_count_format") }}
      </p>

      <div v-if="scoreSummary.length" class="overflow-x-auto">
        <table class="min-w-full border-collapse">
          <thead class="text-sm border-b border-gray-300">
            <tr>
              <th class="px-6 py-4 pl-10 text-left">
                <UBadge class="capitalize" variant="subtle" color="neutral">
                  {{ $t("pages.data.achievement_status.content.table_headers.game") }}
                </UBadge>
              </th>
              <th class="px-6 py-4 text-left">
                <UBadge class="capitalize" variant="subtle" color="neutral">
                  {{ $t("pages.data.achievement_status.content.table_headers.total") }}
                </UBadge>
              </th>
              <th class="px-6 py-4 text-left">
                <UBadge class="capitalize" variant="subtle" color="info">
                  {{ $t("global.threshold_score_names.good") }}
                </UBadge>
              </th>
              <th class="px-6 py-4 text-left">
                <UBadge class="capitalize" variant="subtle" color="secondary">
                  {{ $t("global.threshold_score_names.great") }}
                </UBadge>
              </th>
              <th class="px-6 py-4 text-left">
                <UBadge class="capitalize" variant="subtle" color="success">
                  {{ $t("global.threshold_score_names.excellent") }}
                </UBadge>
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(row, index) in scoreSummary" :key="row.game">
              <!-- ゲーム行 -->
              <tr class="cursor-pointer border-t border-gray-200 dark:border-gray-700" @click="toggleRow(index)">
                <td class="px-4 py-2">
                  <span class="ml-2 text-gray-400 text-xs">
                    {{ expandedRows.includes(index) ? "▲" : "▼" }}
                  </span>
                  <UBadge
                    class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
                    :style="{
                      color: gamesMap[row.game]?.color?.txt ?? '#000',
                      backgroundColor: gamesMap[row.game]?.color?.bg ?? '#eee',
                    }"
                  >
                    {{ t(gamesMap[row.game]?.name ?? row.game) }}
                  </UBadge>
                </td>
                <td class="px-6 py-4">{{ row.total_count }}</td>
                <td class="px-6 py-4">{{ row.good_count }}</td>
                <td class="px-6 py-4">{{ row.great_count }}</td>
                <td class="px-6 py-4">{{ row.excellent_count }}</td>
              </tr>

              <!-- 展開行：機体ごとの集計 -->
                <tr
                  v-for="shot in row.shottypeSorted"
                  :key="shot.shotType"
                  v-if="expandedRows.includes(index)"
                  class="text-sm border-t border-gray-200 dark:border-gray-700"
                >
                <td class="px-6 py-3 pl-10">
                    {{ t(gamesMap[row.game]?.shot_types[shot.shotType]?.name ?? shot.shotType) }}
                </td>
                <td class="px-6 py-3">{{ shot.total }}</td>
                <td class="px-6 py-3">{{ shot.good }}</td>
                <td class="px-6 py-3">{{ shot.great }}</td>
                <td class="px-6 py-3">{{ shot.excellent }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <p v-else class="text-gray-400">データがありません</p>
    </UCard>
  </UContainer>
</template>

<script setup>
import { h, resolveComponent, computed, ref } from 'vue'
import { useGames } from '~/composables/Games'
import { useScoreRecords } from '~/composables/ScoreRecords'

const { t } = useI18n()
const UBadge = resolveComponent("UBadge")

const gamesMap = useGames()
const scoreRecordMap = useScoreRecords?.() ?? {}

const expandedRows = ref([])

// 作品ごとの集計
const scoreSummary = computed(() => {
  const tally = {}  // 型注釈なし

  // 集計
  for (const [playerName, games] of Object.entries(scoreRecordMap)) {
    if (!games) continue;

    for (const [gameId, shots] of Object.entries(games)) {
      if (!shots) continue;

      if (!tally[gameId]) {
        tally[gameId] = {
          excellent: { total: 0, players: new Set() },
          great: { total: 0, players: new Set() },
          good: { total: 0, players: new Set() },
          total: { total: 0, players: new Set() },
          shottype: {},
        };
      }

      for (const [shotType, record] of Object.entries(shots)) {
        if (!record || !record.status) continue;

        const status = record.status;

        tally[gameId][status].total++;
        tally[gameId][status].players.add(playerName);

        tally[gameId].total.total++;
        tally[gameId].total.players.add(playerName);

        if (!tally[gameId].shottype[shotType]) {
          tally[gameId].shottype[shotType] = { total: 0, good: 0, great: 0, excellent: 0 };
        }

        tally[gameId].shottype[shotType].total++;
        if (status === 'good') tally[gameId].shottype[shotType].good++;
        if (status === 'great') tally[gameId].shottype[shotType].great++;
        if (status === 'excellent') tally[gameId].shottype[shotType].excellent++;
      }
    }
  }

  // 出力用に整形
  return Object.entries(tally)
    .map(([gameId, data]) => {
      const gameShots = gamesMap[gameId]?.shot_types ?? {};

      // Games.ts の機体順に従い、達成者0でも表示
      const shottypeSorted = Object.keys(gameShots).map((key) => {
        const counts = data.shottype[key] ?? { total: 0, good: 0, great: 0, excellent: 0 }
        return {
          shotType: key,
          name: t(gameShots[key].name), // 翻訳を復活
          ...counts
        }
      });

      // th128だけユニーク人数を表示しない
      const showUnique = gameId !== 'th128';

      return {
        game: gameId,
        excellent_count: showUnique ? `${data.excellent.total} (${data.excellent.players.size})` : `${data.excellent.total}`,
        great_count: showUnique ? `${data.great.total} (${data.great.players.size})` : `${data.great.total}`,
        good_count: showUnique ? `${data.good.total} (${data.good.players.size})` : `${data.good.total}`,
        total_count: showUnique ? `${data.total.total} (${data.total.players.size})` : `${data.total.total}`,
        shottypeSorted
      };
    })
    .sort((a, b) => {
      const gamesOrder = Object.keys(gamesMap);
      return (gamesOrder.indexOf(a.game) ?? 99) - (gamesOrder.indexOf(b.game) ?? 99);
    });
});

function toggleRow(index) {
  const i = expandedRows.value.indexOf(index)
  if (i >= 0) expandedRows.value.splice(i, 1)
  else expandedRows.value.push(index)
}
</script>
