<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.data.title") }}</h1>

    <UCard class="my-5">
      <template #header>
        <h2>{{ $t("pages.data.achievement_status.title") }}</h2>
      </template>
      <UTable :data="scoreSummary" :columns="columns" class="flex-1" />
    </UCard>
  </UContainer>
</template>

<script setup>
import { useGames } from "~/composables/Games";
import { h, resolveComponent } from "vue";
const { t } = useI18n();

const gamesMap = useGames();
const scoreRecordMap = useScoreRecords();

const scoreSummary = computed(() => {
  // 中間テーブル: { gameId: { great: number, good: number } }
  const tally = {};

  for (const games of Object.values(scoreRecordMap)) {
    for (const [gameId, shots] of Object.entries(games)) {
      for (const record of Object.values(shots)) {
        // 初期化
        if (!tally[gameId]) tally[gameId] = { great: 0, good: 0, total: 0 };

        // カウント
        if (record.status === "great") tally[gameId].great++;
        if (record.status === "good") tally[gameId].good++;
        tally[gameId].total = tally[gameId].great + tally[gameId].good;
      }
    }
  }

  return Object.entries(tally)
    .map(([gameId, { great, good, total }]) => ({
      game: gameId,
      great_count: great,
      good_count: good,
      total_count: total,
    }))
    .sort((a, b) => {
      // 作品番号（th\d+ 部分）で降順
      const baseA = a.game.match(/^th\d+/)?.[0] ?? a.game;
      const baseB = b.game.match(/^th\d+/)?.[0] ?? b.game;
      const diffBase = baseA.localeCompare(baseB, "en"); // 逆順で降順
      if (diffBase !== 0) return diffBase;

      // 同じ番号ならバリアント優先度で
      const variantA = a.game.slice(baseA.length); // '', 'Ex', 'Ph', …
      const variantB = b.game.slice(baseB.length);

      const priority = { "": 0, Ex: 1, Ph: 2 };
      return (priority[variantA] ?? 99) - (priority[variantB] ?? 99);
    });
});

const UBadge = resolveComponent("UBadge");
const columns = [
  {
    accessorKey: "game",
    header: t("pages.data.achievement_status.content.table_headers.game"),
    cell: ({ row }) => {
      return h(
        UBadge,
        {
          // 形状は Tailwind、色は動的に style で上書き
          class: "capitalize inline-block px-2 py-0.5 rounded font-semibold",
          style: {
            color: gamesMap[row.getValue("game")].color.txt,
            backgroundColor: gamesMap[row.getValue("game")].color.bg,
          },
        },
        () => t(gamesMap[row.getValue("game")].name)
      );
    },
  },
  {
    accessorKey: "total_count",
    header: ({ column }) => {
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "neutral" },
        t("pages.data.achievement_status.content.table_headers.total")
      );
    },
  },
  {
    accessorKey: "great_count",
    header: ({ column }) => {
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "success" },
        t("global.threshold_score_names.great")
      );
    },
  },
  {
    accessorKey: "good_count",
    header: ({ column }) => {
      return h(
        UBadge,
        { class: "capitalize", variant: "subtle", color: "neutral" },
        t("global.threshold_score_names.good")
      );
    },
  },
];
</script>
