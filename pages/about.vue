<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.about.title") }}</h1>

    <!-- intro -->
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.intro.title") }}</p>
      </template>
      <p class="whitespace-pre-line">{{ $t("pages.about.intro.content") }}</p>
    </UCard>

    <!-- publish record -->
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.publish_record.title") }}</p>
      </template>
      <i18n-t keypath="pages.about.publish_record.content" tag="p">
        <template #silentselene>
          <NuxtLink href="https://www.silentselene.net/" target="_blank" class="text-primary underline">
            {{ $t("pages.about.publish_record.tags.silentselene") }}
          </NuxtLink>
        </template>
        <template #nyanko>
          <NuxtLink href="https://x.com/flower874_" target="_blank" class="text-primary underline">
            {{ $t("pages.about.publish_record.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #br><br /></template>
      </i18n-t>
    </UCard>

    <!-- compatible games -->
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.compatible_games.title") }}</p>
      </template>

      <ul class="pl-5 space-y-0.5">
        <li v-for="gt in gameThresholds" :key="gt.game">
          <UBadge
            v-if="gamesMap[gt.game]"
            class="capitalize px-2 py-0.5 font-semibold"
            :style="{
              color: gamesMap[gt.game].color.txt,
              backgroundColor: gamesMap[gt.game].color.bg,
            }"
          >
            {{ $t(gamesMap[gt.game].name) }}
          </UBadge>

          <span v-else class="text-red-500 text-xs">
            Unknown game: {{ gt.game }}
          </span>
        </li>
      </ul>
    </UCard>

    <!-- GOOD -->
    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge variant="subtle" color="info">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
          {{ $t("pages.about.threshold_scores.title") }}
        </p>
      </template>

      <ul class="pl-5 space-y-0.5">
        <li v-for="gt in gameThresholds" :key="gt.game">
          <template v-if="gamesMap[gt.game]">
            <UBadge
              class="capitalize px-2 py-0.5 font-semibold"
              :style="{
                color: gamesMap[gt.game].color.txt,
                backgroundColor: gamesMap[gt.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gt.game].name) }}
            </UBadge>
            ：{{ $t(gt.good) }}
          </template>
        </li>
      </ul>
    </UCard>

    <!-- GREAT -->
    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge variant="subtle" color="secondary">
            {{ $t("global.threshold_score_names.great") }}
          </UBadge>
          {{ $t("pages.about.threshold_scores.title") }}
        </p>
      </template>

      <ul class="pl-5 space-y-0.5">
        <li v-for="gt in gameThresholds" :key="gt.game">
          <template v-if="gamesMap[gt.game]">
            <UBadge
              class="capitalize px-2 py-0.5 font-semibold"
              :style="{
                color: gamesMap[gt.game].color.txt,
                backgroundColor: gamesMap[gt.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gt.game].name) }}
            </UBadge>
            ：{{ $t(gt.great) }}
          </template>
        </li>
      </ul>
    </UCard>

    <!-- EXCELLENT -->
    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge variant="subtle" color="success">
            {{ $t("global.threshold_score_names.excellent") }}
          </UBadge>
          {{ $t("pages.about.threshold_scores.title") }}
        </p>
      </template>

      <ul class="pl-5 space-y-0.5">
        <li v-for="gt in gameThresholds" :key="gt.game">
          <template v-if="gamesMap[gt.game]">
            <UBadge
              class="capitalize px-2 py-0.5 font-semibold"
              :style="{
                color: gamesMap[gt.game].color.txt,
                backgroundColor: gamesMap[gt.game].color.bg,
              }"
            >
              {{ $t(gamesMap[gt.game].name) }}
            </UBadge>
            ：{{ $t(gt.excellent) }}
          </template>
        </li>
      </ul>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useGames } from "#imports";

const gamesMap = useGames();

type GameThreshold = {
  game: string;
  good: string;
  great: string;
  excellent: string;
};

const gameThresholds: Ref<GameThreshold[]> = ref([
  {
    game: "th06",
    good: "pages.about.thresholds.th06.good",
    great: "pages.about.thresholds.th06.great",
    excellent: "pages.about.thresholds.th06.excellent",
  },
  {
    game: "th07Ex",
    good: "pages.about.thresholds.th07_ex.good",
    great: "pages.about.thresholds.th07_ex.great",
    excellent: "pages.about.thresholds.th07_ex.excellent",
  },
  {
    game: "th07Ph",
    good: "pages.about.thresholds.th07_ph.good",
    great: "pages.about.thresholds.th07_ph.great",
    excellent: "pages.about.thresholds.th07_ph.excellent",
  },
  {
    game: "th08",
    good: "pages.about.thresholds.th08.good",
    great: "pages.about.thresholds.th08.great",
    excellent: "pages.about.thresholds.th08.excellent",
  },
  {
    game: "th10",
    good: "pages.about.thresholds.th10.good",
    great: "pages.about.thresholds.th10.great",
    excellent: "pages.about.thresholds.th10.excellent",
  },
  {
    game: "th11",
    good: "pages.about.thresholds.th11.good",
    great: "pages.about.thresholds.th11.great",
    excellent: "pages.about.thresholds.th11.excellent",
  },
  {
    game: "th12",
    good: "pages.about.thresholds.th12.good",
    great: "pages.about.thresholds.th12.great",
    excellent: "pages.about.thresholds.th12.excellent",
  },
  {
    game: "th13",
    good: "pages.about.thresholds.th13.good",
    great: "pages.about.thresholds.th13.great",
    excellent: "pages.about.thresholds.th13.excellent",
  },
  {
    game: "th14",
    good: "pages.about.thresholds.th14.good",
    great: "pages.about.thresholds.th14.great",
    excellent: "pages.about.thresholds.th14.excellent",
  },
  {
    game: "th15",
    good: "pages.about.thresholds.th15.good",
    great: "pages.about.thresholds.th15.great",
    excellent: "pages.about.thresholds.th15.excellent",
  },
  {
    game: "th16",
    good: "pages.about.thresholds.th16.good",
    great: "pages.about.thresholds.th16.great",
    excellent: "pages.about.thresholds.th16.excellent",
  },
  {
    game: "th17",
    good: "pages.about.thresholds.th17.good",
    great: "pages.about.thresholds.th17.great",
    excellent: "pages.about.thresholds.th17.excellent",
  },
  {
    game: "th18",
    good: "pages.about.thresholds.th18.good",
    great: "pages.about.thresholds.th18.great",
    excellent: "pages.about.thresholds.th18.excellent",
  },
  {
    game: "th20",
    good: "pages.about.thresholds.th20.good",
    great: "pages.about.thresholds.th20.great",
    excellent: "pages.about.thresholds.th20.excellent",
  },
]);
</script>
