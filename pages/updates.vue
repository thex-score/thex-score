<template>
  <UContainer class="py-8">
    <!-- 見出しだけ独立させてカード外にする -->
    <h1 class="text-xl font-bold mb-6">更新履歴</h1>

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
            {{ change }}
          </li>
        </ul>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
/* composable からデータ取得 */
import { UseReleases } from '~/composables/ReleaseNotes'

const releases = UseReleases()

/* 日付を日本語表記にフォーマット（例: 2025/07/19）*/
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>