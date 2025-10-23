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

      <UTable v-if="scoreSummary.length" :data="scoreSummary" :columns="columns" class="flex-1" />
      <p v-else class="text-gray-400">データがありません</p>
    </UCard>
  </UContainer>
</template>

<script setup>
import { h, resolveComponent, computed } from 'vue'
import { useGames } from '~/composables/Games'
import { useScoreRecords } from '~/composables/ScoreRecords'

const { t } = useI18n()
const UBadge = resolveComponent("UBadge")

const gamesMap = useGames()

// SSR対応: useScoreRecordsがundefinedでも空オブジェクトに
const scoreRecordMap = useScoreRecords?.() ?? {}

const scoreSummary = computed(() => {
  const tally = {}

  for (const [playerName, games] of Object.entries(scoreRecordMap)) {
    for (const [gameId, shots] of Object.entries(games)) {
      for (const [shotType, record] of Object.entries(shots)) {
        if (!record || !record.status) continue

        if (!tally[gameId]) {
          tally[gameId] = {
            excellent: { total: 0, players: new Set() },
            great: { total: 0, players: new Set() },
            good: { total: 0, players: new Set() },
            total: { total: 0, players: new Set() },
          }
        }

        const status = record.status

        tally[gameId][status].total++
        tally[gameId][status].players.add(playerName)

        tally[gameId].total.total++
        tally[gameId].total.players.add(playerName)
      }
    }
  }

  return Object.entries(tally)
    .map(([gameId, data]) => ({
      game: gameId,
      excellent_count: `${data.excellent.total} (${data.excellent.players.size})`,
      great_count: `${data.great.total} (${data.great.players.size})`,
      good_count: `${data.good.total} (${data.good.players.size})`,
      total_count: `${data.total.total} (${data.total.players.size})`,
    }))
    .sort((a, b) => {
      const baseA = a.game.match(/^th\d+/)?.[0] ?? a.game
      const baseB = b.game.match(/^th\d+/)?.[0] ?? b.game
      const diffBase = baseA.localeCompare(baseB, 'en')
      if (diffBase !== 0) return diffBase

      const variantA = a.game.slice(baseA.length)
      const variantB = b.game.slice(baseB.length)
      const priority = { '': 0, Ex: 1, Ph: 2 }
      return (priority[variantA] ?? 99) - (priority[variantB] ?? 99)
    })
})

const columns = [
  {
    accessorKey: "game",
    header: t("pages.data.achievement_status.content.table_headers.game"),
    cell: ({ row }) =>
      h(
        UBadge,
        {
          class: "capitalize inline-block px-2 py-0.5 rounded font-semibold",
          style: {
            color: gamesMap[row.getValue("game")]?.color?.txt ?? '#000',
            backgroundColor: gamesMap[row.getValue("game")]?.color?.bg ?? '#eee',
          },
        },
        () => t(gamesMap[row.getValue("game")]?.name ?? row.getValue("game"))
      ),
  },
  {
    accessorKey: "total_count",
    header: ({ column }) =>
      h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "neutral" },
        t("pages.data.achievement_status.content.table_headers.total")
      ),
  },
  {
    accessorKey: "good_count",
    header: ({ column }) =>
      h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "neutral" },
        t("global.threshold_score_names.good")
      ),
  },
  {
    accessorKey: "great_count",
    header: ({ column }) =>
      h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "secondary" },
        t("global.threshold_score_names.great")
      ),
  },
  {
    accessorKey: "excellent_count",
    header: ({ column }) =>
      h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "primary" },
        t("global.threshold_score_names.excellent")
      ),
  },
]
</script>