<script setup lang="ts">
import { UseReleases, type ReleaseChange } from '~/composables/ReleaseNotes'
import { useI18n } from 'vue-i18n'

const releases = UseReleases()
const { t, locale } = useI18n()

// SSR安全なロケール取得
function getLocale(): 'ja' | 'en' {
  try {
    const val = typeof locale === 'string' ? locale : locale.value
    return val === 'ja' || val === 'en' ? val : 'ja'
  } catch {
    return 'ja'
  }
}

// SSR安全な日付フォーマット
function fmtDate(dateStr: string): string {
  try {
    const loc = getLocale()
    return new Intl.DateTimeFormat(loc, { dateStyle: 'medium' }).format(new Date(dateStr))
  } catch {
    return new Date(dateStr).toISOString().slice(0, 10)
  }
}

// SSR安全な変更テキスト描画
function renderChange(change: ReleaseChange): string {
  const loc = getLocale()

  if (change.type === 'tpl') {
    const key = `ReleaseNotes.${change.id}`
    console.log('i18n key:', key)
    console.log('locale.value:', locale.value)
    try {
      const translated = t(key) // 翻訳だけ取得
      console.log('translated:', translated)

      // 翻訳がない場合はフォールバックで自動生成
      if (translated === key) {
        if (change.id === 'add_record' || change.id === 'modify_record') {
          return `${change.id} : ${change.game} ${change.shot} ${change.player[locale.value]}`
        }
        return change.id
      }

      // 翻訳済みの文字列とゲーム情報を結合
      if (change.id === 'add_record' || change.id === 'modify_record') {
        return `${translated} : ${change.game} ${change.shot} ${change.player[locale.value]}`
      }

      return translated
    } catch {
      // エラー時もフォールバック
      if (change.id === 'add_record' || change.id === 'modify_record') {
        return `${change.id} : ${change.game} ${change.shot} ${change.player[locale.value]}`
      }
      return change.id
    }
  }

  if (change.type === 'text') {
    const text = change.text[loc] ?? change.text['ja'] ?? change.text['en']
    if (text) return text
    const vals = Object.values(change.text)
    return vals.length > 0 ? vals[0]! : ''
  }

  return ''
}

console.log(t('ReleaseNotes.add_record'))

</script>

<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t('pages.updates.title') }}</h1>

    <div class="space-y-4">
      <UCard
        v-for="release in releases"
        :key="release.version"
        class="relative overflow-hidden"
      >
        <div
          class="absolute inset-y-0 left-0 w-1 bg-primary-500/80 dark:bg-primary-400/80"
        />

        <!-- ヘッダ -->
        <template #header>
          <div class="flex items-baseline justify-between">
            <span class="font-semibold">v{{ release.version }}</span>
            <span class="text-xs text-gray-500">{{ fmtDate(release.date) }}</span>
          </div>
        </template>

        <!-- 変更点リスト -->
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(c, i) in release.changes" :key="i">
            {{ renderChange(c) }}
          </li>
        </ul>
      </UCard>
    </div>
  </UContainer>
</template>
