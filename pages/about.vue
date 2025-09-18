<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">サイト概要</h1>
    <UCard class="my-5">
      <template #header>
      <p>はじめに</p>
      </template>
      <p>このサイトでは東方原作STGのExtra及びPhantasmモードで基準スコア以上を出した記録を掲載しています。
      
    </p>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>記録掲載について</p>
      </template>
      <p><NuxtLink href="https://www.silentselene.net/" target="_blank">サイレントセレナ</NuxtLink>などで一般公開された記録を管理人が収集して掲載しています。<br />
      原則的にはリプレイやstream配信、動画が公開されている記録を掲載対象とします。<br />
      スクリーンショットやスコア情報のみでも記録として掲載する場合がありますが、管理人の判断で掲載しない場合もあるので、ご了承願います。<br />
      スコアが有効数字4桁しか判明していないなど曖昧な記録については記録の正当性を保証できないため掲載対象とはしません。<br />
      処理落ち率3%以上や不正ツールの使用が疑われる記録については掲載せず参考記録としても扱いません。<br />
      プレイヤー本人から要望があった一部の記録についても掲載しません。<br />
      記録の修正・新規記録追加・リプレイ削除などを希望される方は全て管理人の<NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink>に連絡してください。
      </p>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>外部ツール使用について</p>
      </template>
      <p>多くのリーダーボードと同様に原則的に外部ツールの使用は禁止です。<br />
      ただし動作改善を目的としたVpatchの使用は許可します。（バグ修正などを目的とした使用は不可）<br />
      練習におけるthpracの使用は可能です。ただし本番でのバックエンドモード（いわゆるチート機能）使用は不可です。<br />
      th18東方虹龍洞ではthpracを利用した市場操作(Shop Manip)を許可します。<br />
      ただし正規のタイミング以外でカードを購入したプレイは無効とします。
      </p>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>対応作品</p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }">{{ gamesMap[gameThreshold.game].name }}</UBadge>
        </li>
      </ul>
    </UCard>
    <UCard class="my-5">
      <template #header>
      <p>基準スコア
        <UBadge class="capitalize" variant="subtle" color="neutral">大台</UBadge>
      </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThreshold in gameThresholds" :key="gameThreshold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThreshold.game].color.txt,
              backgroundColor: gamesMap[gameThreshold.game].color.bg,
            }">{{ gamesMap[gameThreshold.game].name }}</UBadge>
            ：{{ gameThreshold.good }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>
        <UBadge class="capitalize" variant="subtle" color="neutral">大台</UBadge>
        スコア基本方針
      </p>
      </template>
      <p>大台スコアはスコアアタック入門プレイヤーが目標スコアとした際に簡単過ぎず難しすぎず、程々に苦労してかつ達成感を得られるくらいの達成難易度を想定して設定された基準スコアです。<br />
        基本的な稼ぎ方を理解していないと出せないスコアなので、この基準値をクリアしたら一人前のスコアラーです。<br />
        実力差が結果に反映されやすいSTGの性質上、達成にかかる労力は人それぞれとなりますが、その点につきましてはご了承願います。<br />
        機体格差が無視できないほど大きい作品では例外的に複数の基準スコアを設定しています。<br/>
        鬼形獣についてはあまりにもプレイヤー・情報が少なく、妥当な基準設定が不可能であるため全機体共通の基準スコアとします。<br/>
        大台スコアは下記の条件を満たす中でなるべくキリの良い数字に設定します。<br/>
      </p>
      <ul class="list-disc pl-5 space-y-0.5">
        <li>NNFSして点符上部回収しただけでは絶対に出ないスコア</li>
        <li>スコアタ未経験者が一通りスコアタの動きを勉強して時間をかけて練習すれば十分狙えるスコア</li>
        <li>既に大台達成の実績のある実力者でも他人のリプレイを一度見て軽くプレイしただけでは達成できない難易度のスコア</li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>
        <UBadge class="capitalize" variant="subtle" color="neutral">大台</UBadge>
        スコアFAQ
      </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>Q. 妖々夢10億では駄目なのですか？</li>
        <li>A. 駄目です。理由はNNFSしただけで容易に達成可能だから</li>
        <li>Q. 永夜抄20億では駄目なのですか？</li>
        <li>A. 駄目です。理由はNMFSしただけで容易に達成可能だから</li>

        <li>Q. 風神録9.5億は簡単過ぎませんか？</li>
        <li>A. キリが良い数字であることを考慮してこの数値に設定しています</li>
        <li>Q. 地霊殿10億は簡単過ぎませんか？</li>
        <li>A. キリが良い数字であることを考慮してこの数値に設定しています</li>

        <li>Q. 天空璋20億の難易度高くないですか？</li>
        <li>A. ある程度は達成に労力がかかるスコアに設定しています</li>
        <li>Q. 鬼形獣notカワウソ15億は厳しすぎませんか？</li>
        <li>A. 情報が乏しく基準設定が困難であるため全機体共通のスコアに設定しています。有識者の意見があれば下方修正される可能性があります</li>
        <li>Q. 虹龍洞30億の難易度高くないですか？</li>
        <li>A. クリア難易度自体は他作と比較してかなり低いので大台スコアを高めに設定しています</li>

        <li>Q. 残念機体に対する配慮はしないのですか？</li>
        <li>A. 全機体現実的に達成可能な大台スコアに設定しています。ただしスコアを稼ぎやすい機体よりは達成難易度が高くなります</li>
        <li>Q. 錦上京への対応はいつですか？</li>
        <li>A. PIVバグの関係で集計方法が定まらず見通しが立ちません</li>

        <li>Q. 私の記録が追加されないのですが？</li>
        <li>A. <NuxtLink href="https://github.com/thex-score/thex-score/issues" target="_blank">github</NuxtLink>もしくは<NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink>にご報告お願いします。気付き次第追加します。</li>
        <li>Q. 更新頻度はどのくらいですか？</li>
        <li>A. 週に1回は必ずチェックしますが、即日更新は確約できません</li>

        <li>Q. ズバリどの作品がおすすめですか？</li>
        <li>A. 達成難易度が良心的と思われるのは達成者が多い作品ですが、自分がプレイしたい作品の方がモチベを保ちやすいです</li>
      </ul>      
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>
        基準スコア
        <UBadge class="capitalize" variant="subtle" color="success">超大台</UBadge>
      </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li v-for="gameThresold in gameThresholds" :key="gameThresold.game">
          <UBadge
            class="capitalize inline-block px-2 py-0.5 rounded font-semibold"
            :style="{
              color: gamesMap[gameThresold.game].color.txt,
              backgroundColor: gamesMap[gameThresold.game].color.bg,
            }">{{ gamesMap[gameThresold.game].name }}</UBadge>
            ：{{ gameThresold.great }}
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>
        <UBadge class="capitalize" variant="subtle" color="success">超大台</UBadge>
        スコア基本方針
      </p>
      </template>
      <p> 超大台スコアはその作品をやり込んだプレイヤーが大目標として掲げるような非常に達成難易度の高い基準スコアです。こちらについてはスコアアタック上級者以外が目標とすることを想定してはいません。そのため大台スコアよりも基準スコアが細かく設定されています。この基準スコアをクリアしたら上級者を名乗っても恥ずかしくないスコアです。
      
    </p>
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>
        <UBadge class="capitalize" variant="subtle" color="success">超大台</UBadge>
        スコアFAQ
      </p>
      </template>
      <ul class="pl-5 space-y-0.5">
        <li>Q. 超大台が達成できない機体があるので基準スコアを下げてくれませんか？</li>
        <li>A. 超大台スコアについては上級者が目指す大目標として設定しているので難易度を理由に基準スコアを下げることはありません。ただし現実的に不可能と考えられる基準スコアについては修正する可能性があります</li>
      </ul>      
    </UCard>

    <UCard class="my-5">
      <template #header>
      <p>補足</p>
      </template>
      <p>
      大台・超大台の達成難易度は作品内での整合性・数字のキリの良さを重視していて、異なる作品間での整合性は重視していません。<br />
      例えば紅魔郷5億と地霊殿10億と神霊廟5億は同じ達成難易度ではありませんが、そこは問題視していません。<br />
      機体ごとに基準スコアを設定しているのは難易度格差が極端に広がらないようにするための救済措置であって、全ての機体の達成難易度を揃えるためではありません。<br /> 
      例えば紅魔郷ではスコアを稼ぎやすい霊夢B・魔理沙Bとスコアを稼ぎにくい霊夢A・魔理沙Aでは達成難易度が異なりますが全ての機体の達成難易度を同程度にする必要はないと考えています。<br />
      </p>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>運営者</p>
      </template>

      <p><NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink></p>

    </UCard>
    <UCard class="my-5">
      <template #header>
        <p>運用方針</p>
      </template>

      <p>
        このサイトは<NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink>が運営しているものです。<br/>
        <NuxtLink href="https://wefma.net" target="_blank">ゑふまいか</NuxtLink>に作成を依頼し、氏名表示権を除く全ての権利/責任/義務を<NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink>に譲渡することによって成り立っています。<br/>
        よってこのサイトで何か不都合があれば<NuxtLink href="https://x.com/flower874_" target="_blank">にゃんこ</NuxtLink>に問い合わせてください。<br/>
        このサイトのソースコードはMITライセンスにて<NuxtLink href="https://github.com/thex-score/thex-score" target="_blank">github</NuxtLink>で公開されています。ただし弊サイトに著作権がないリプレイファイルやスコアデータに関してはMITライセンスを適用できません。
      </p>

    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
  import { useGames } from '#imports';
  const gamesMap=useGames()

  const gameThresholds: Ref<Array<{"game": string, "great": string, "good": string}>>=ref([
    {
      "game": "th06",
      "great": "6億",
      "good": "5億"
    },
    {
      "game": "th07Ex",
      "great": "14億",
      "good": "12億"
    },
    {
      "game": "th07Ph",
      "great": "16億",
      "good": "13億"
    },
    {
      "game": "th08",
      "great": "ペア・人間単騎 28億 / 妖怪単騎 20億",
      "good": "ペア・人間単騎 25億 / 妖怪単騎 18億"
    },
    {
      "game": "th10",
      "great": "10億",
      "good": "9.5億"
    },
    {
      "game": "th11",
      "great": "11億",
      "good": "10億"
    },
    {
      "game": "th12",
      "great": "7億",
      "good": "5億"
    },
    {
      "game": "th128",
      "great": "1億",
      "good": "9000万"
    },
    {
      "game": "th13",
      "great": "6億",
      "good": "5億"
    },
    {
      "game": "th14",
      "great": "魔理沙B 12億 / その他 8億",
      "good": "魔理沙B 10億 / その他 7.5億"
    },
    {
      "game": "th15",
      "great": "9億",
      "good": "7億"
    },
    {
      "game": "th16",
      "great": "30億",
      "good": "20億"
    },
    {
      "game": "th17",
      "great": "25億",
      "good": "15億"
    },
    {
      "game": "th18",
      "great": "咲夜 70億 / その他 35億",
      "good": "咲夜 50億 / その他 30億"
    },
  ])

</script>
