<script setup lang="ts">
import { UseReleases } from "~/composables/ReleaseNotes";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const releases = UseReleases();

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(locale.value, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
</script>

<template>
  <UContainer class="py-8">
    <!-- 見出しだけ独立させてカード外にする -->
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.updates.title") }}</h1>

    <!-- カードの一覧 -->
    <div class="space-y-4">
      <UCard
        v-for="release in releases"
        :key="release.version"
        class="relative overflow-hidden"
      >
        <!-- 左側の色帯（任意のアクセント） -->
        <div
          class="absolute inset-y-0 left-0 w-1 bg-primary-500/80 dark:bg-primary-400/80"
        />

        <!-- ヘッダ -->
        <template #header>
          <div class="flex items-baseline justify-between">
            <span class="font-semibold">v{{ release.version }}</span>
            <span class="text-xs text-gray-500">
              {{ formatDate(release.date) }}
            </span>
          </div>
        </template>

        <!-- 変更点リスト -->
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(change, idx) in release.changes" :key="idx">
            {{ t(change.key) }}
            <span v-if="change.translate">: {{ t(change.text) }}</span>
            <span v-else>{{ change.text }}</span>
          </li>
        </ul>
      </UCard>
    </div>
  </UContainer>
</template>