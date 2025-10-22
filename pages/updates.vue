<script setup lang="ts">
import { UseReleases, type ReleaseChange } from '~/composables/ReleaseNotes'
import { useI18n } from 'vue-i18n'  // ← コメントを外す

const releases = UseReleases()
const { t, locale } = useI18n()    // ← 追加

// SSR安全なロケール取得
function getLocale(): 'ja' | 'en' {
  try {
    const val = typeof locale === 'string' ? locale : locale.value
    return val === 'ja' || val === 'en' ? val : 'ja'
  } catch {
    return 'ja'
  }
}

// 🌐 多言語対応を戻すときはコメントアウトを外す
// const { t, locale } = useI18n()

// function getLocale(): 'ja' | 'en' {
//   try {
//     const val = typeof locale === 'string' ? locale : locale.value
//     return val === 'ja' || val === 'en' ? val : 'ja'
//   } catch {
//     return 'ja'
//   }
// }

// 🗓 日本語固定フォーマット
function fmtDate(dateStr: string): string {
  try {
    // const loc = getLocale() // ← 多言語化時に戻す
    const loc = 'ja'
    return new Intl.DateTimeFormat(loc, { dateStyle: 'medium' }).format(new Date(dateStr))
  } catch {
    return new Date(dateStr).toISOString().slice(0, 10)
  }
}

function shotKey(s: string) {
  // ReimuO -> reimu_o のように変換
  return s
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
}

function renderChange(change: ReleaseChange): string {
  const loc = getLocale();

  if (change.type === 'tpl') {
    // 変更種別を翻訳
    const actionText = t(`ReleaseNotes.${change.id}`);

    if (change.id === 'add_record' || change.id === 'modify_record') {
      // ゲーム名の取得
      let gameTitle = '';
      switch (change.game) {
        case 'th07EX':
          gameTitle = t('composables.Games.th07.title.ex');
          break;
        case 'th07Ph':
          gameTitle = t('composables.Games.th07.title.ph');
          break;
        default:
          gameTitle = t(`composables.Games.${change.game}.title`);
          break;
      }

    // ショット名の取得（複数対応）
    const shotNames = change.shot
      .split('/')
      .map(s => {
        // ReimuA → reimu_a などに変換
        const key = s
          .replace(/([A-Z]+)(\d*)$/, (_, char, num) => '_' + char.toLowerCase() + (num || ''))
          .replace(/^([A-Za-z]+)/, (_, name) => name.toLowerCase());

        // th07EX / th07Ph の場合は YAML 上は th07 に統一
        const gameKey = change.game.startsWith('th07') ? 'th07' : change.game;

        return t(`composables.Games.${gameKey}.shot_types.${key}`);
      })
      .join('/');

      // 最終出力
      return `${actionText} : ${gameTitle} ${shotNames} ${change.player}`;
    }

    // add_record / modify_record 以外の tpl は翻訳のみ
    return actionText;
  }

  // text 型は多言語対応（ja / en）
  if (change.type === 'text') {
    if (typeof change.text === 'object' && change.text !== null) {
      return change.text[loc] ?? change.text.ja ?? change.text.en ?? '';
    }
    return change.text;
  }

  return '';
}
</script>

<template>
  <UContainer class="py-8">
    <!-- 💬 多言語化時は {{ $t('pages.updates.title') }} に戻す -->
    <h1 class="text-xl font-bold mb-6">更新履歴</h1>

    <div class="space-y-4">
      <UCard
        v-for="release in releases"
        :key="release.version"
        class="relative overflow-hidden"
      >
        <div class="absolute inset-y-0 left-0 w-1 bg-primary-500/80 dark:bg-primary-400/80" />

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