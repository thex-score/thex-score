<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.about.title") }}</h1>
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.intro.title") }}</p>
      </template>
      <p class="whitespace-pre-line">{{ $t("pages.about.intro.content") }}</p>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.publish_record.title") }}</p>
      </template>
      <i18n-t keypath="pages.about.publish_record.content" tag="p">
        <template #silentselene>
          <NuxtLink href="https://www.silentselene.net/" target="_blank">
            {{ $t("pages.about.publish_record.tags.silentselene") }}
          </NuxtLink>
        </template>
        <template #nyanko>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.publish_record.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #br>
          <br />
        </template>
      </i18n-t>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.using_tools.title") }}</p>
      </template>
      <i18n-t keypath="pages.about.using_tools.content" tag="p">
        <template #br>
          <br />
        </template>
      </i18n-t>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.compatible_games.title") }}</p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }"
          >
            {{ $t(gamesMap[gameThreshold.game].name) }}
          </UBadge>
        </li>
      </ul>
    </UCard>
    <UCard class="my-5">
      <template #header>
        <p>
          {{ $t("pages.about.threshold_scores.title") }}
          <UBadge class="capitalize" variant="subtle" color="neutral">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }"
          >
            {{ $t(gamesMap[gameThreshold.game].name) }}
          </UBadge>
          ：{{ $t(`pages.about.thresholds.${gameThreshold.game}.good`) }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="neutral">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
          {{ $t("pages.about.threshold_score_policy.title") }}
        </p>
      </template>
      <i18n-t keypath="pages.about.threshold_score_policy.good.content" tag="p">
        <template #br>
          <br />
        </template>
      </i18n-t>
      <ul class="list-disc pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.not_nnfs"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.for_beginners"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.threshold_score_policy.good.condition_lists.for_experienced"
            )
          }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="neutral">
            {{ $t("global.threshold_score_names.good") }}
          </UBadge>
          {{ $t("pages.about.score_FAQ.title") }}
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th07_100mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th07_100mil.answer")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th08_200mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th08_200mil.answer")
          }}
        </li>

        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th10_950mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th10_950mil.answer")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th11_100mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th11_100mil.answer")
          }}
        </li>

        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th16_200mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th16_200mil.answer")
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.th17_not_otter_150mil.question"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.th17_not_otter_150mil.answer"
            )
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th18_300mil.question")
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.th18_300mil.answer")
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.garbage_shot_type.question"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.garbage_shot_type.answer"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.th20_compatible.question"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.th20_compatible.answer"
            )
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.publish_my_record.question"
            )
          }}
        </li>
        <i18n-t
          keypath="pages.about.score_FAQ.good.content.lists.publish_my_record.answer"
          tag="li"
        >
          <template #github>
            <NuxtLink
              href="https://github.com/thex-score/thex-score/issues"
              target="_blank"
            >
              {{
                $t(
                  "pages.about.score_FAQ.good.content.lists.publish_my_record.tags.github"
                )
              }}
            </NuxtLink>
          </template>
          <template #nyanko>
            <NuxtLink href="https://x.com/flower874_" target="_blank">
              {{
                $t(
                  "pages.about.score_FAQ.good.content.lists.publish_my_record.tags.nyanko"
                )
              }}
            </NuxtLink>
          </template>
        </i18n-t>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.update_frequency.question"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.update_frequency.answer"
            )
          }}
        </li>

        <li>
          {{
            $t(
              "pages.about.score_FAQ.good.content.lists.recommendation.question"
            )
          }}
        </li>
        <li>
          {{
            $t("pages.about.score_FAQ.good.content.lists.recommendation.answer")
          }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          {{ $t("pages.about.threshold_scores.title") }}
          <UBadge class="capitalize" variant="subtle" color="success">{{
            $t("global.threshold_score_names.great")
          }}</UBadge>
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }"
          >
            {{ $t(gamesMap[gameThreshold.game].name) }}
          </UBadge>
          ：{{ $t(`pages.about.thresholds.${gameThreshold.game}.great`) }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="success">
            {{ $t("global.threshold_score_names.great") }}
          </UBadge>
          {{ $t("pages.about.threshold_score_policy.title") }}
        </p>
      </template>

      <i18n-t
        keypath="pages.about.threshold_score_policy.great.content"
        tag="p"
      >
        <template #br>
          <br />
        </template>
      </i18n-t>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>
          <UBadge class="capitalize" variant="subtle" color="success">
            {{ $t("global.threshold_score_names.great") }}
          </UBadge>
          {{ $t("pages.about.score_FAQ.title") }}
        </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>
          {{
            $t(
              "pages.about.score_FAQ.great.content.lists.score_decrease.question"
            )
          }}
        </li>
        <li>
          {{
            $t(
              "pages.about.score_FAQ.great.content.lists.score_decrease.answer"
            )
          }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.additional_info.title") }}</p>
      </template>
      <i18n-t keypath="pages.about.additional_info.content" tag="p">
        <template #br>
          <br />
        </template>
      </i18n-t>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.operator.title") }}</p>
      </template>

      <i18n-t keypath="pages.about.operator.content" tag="p">
        <template #br>
          <br />
        </template>
        <template #nyanko>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.operator.tags.nyanko") }}
          </NuxtLink>
        </template>
      </i18n-t>
    </UCard>
    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.about.operation_policy.title") }}</p>
      </template>

      <i18n-t keypath="pages.about.operation_policy.content" tag="p">
        <template #br>
          <br />
        </template>
        <template #wefmaika>
          <NuxtLink href="https://wefma.net" target="_blank">
            {{ $t("pages.about.operation_policy.tags.wefmaika") }}
          </NuxtLink>
        </template>
        <template #nyanko1>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.operation_policy.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #nyanko2>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.operation_policy.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #nyanko3>
          <NuxtLink href="https://x.com/flower874_" target="_blank">
            {{ $t("pages.about.operation_policy.tags.nyanko") }}
          </NuxtLink>
        </template>
        <template #github>
          <NuxtLink
            href="https://github.com/thex-score/thex-score"
            target="_blank"
          >
            {{ $t("pages.about.operation_policy.tags.github") }}
          </NuxtLink>
        </template>
      </i18n-t>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useGames } from "#imports";
const gamesMap = useGames();

const gameThresholds: Ref<
  Array<{ game: string; great: string; good: string }>
> = ref([
  {
    game: "th06",
    great: "pages.about.thresholds.th06.great",
    good: "pages.about.thresholds.th06.good",
  },
  {
    game: "th07Ex",
    great: "pages.about.thresholds.th07_ex.great",
    good: "pages.about.thresholds.th07_ex.good",
  },
  {
    game: "th07Ph",
    great: "pages.about.thresholds.th07_ph.great",
    good: "pages.about.thresholds.th07_ph.good",
  },
  {
    game: "th08",
    great: "pages.about.thresholds.th08.great",
    good: "pages.about.thresholds.th08.good",
  },
  {
    game: "th10",
    great: "pages.about.thresholds.th10.great",
    good: "pages.about.thresholds.th10.good",
  },
  {
    game: "th11",
    great: "pages.about.thresholds.th11.great",
    good: "pages.about.thresholds.th11.good",
  },
  {
    game: "th12",
    great: "pages.about.thresholds.th12.great",
    good: "pages.about.thresholds.th12.good",
  },
  {
    game: "th128",
    great: "pages.about.thresholds.th128.great",
    good: "pages.about.thresholds.th128.good",
  },
  {
    game: "th13",
    great: "pages.about.thresholds.th13.great",
    good: "pages.about.thresholds.th13.good",
  },
  {
    game: "th14",
    great: "pages.about.thresholds.th14.great",
    good: "pages.about.thresholds.th14.good",
  },
  {
    game: "th15",
    great: "pages.about.thresholds.th15.great",
    good: "pages.about.thresholds.th15.good",
  },
  {
    game: "th16",
    great: "pages.about.thresholds.th16.great",
    good: "pages.about.thresholds.th16.great",
  },
  {
    game: "th17",
    great: "pages.about.thresholds.th17.great",
    good: "pages.about.thresholds.th17.good",
  },
  {
    game: "th18",
    great: "pages.about.thresholds.th18.great",
    good: "pages.about.thresholds.th08.good",
  },
]);
</script>