<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">{{ $t("pages.links.title") }}</h1>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.links.uploaders.title") }}</p>
      </template>
      <ul class="list-disc pl-5 space-y-0.5">
        <li v-for="(link, idx) in links.uploaders" :key="idx">
          <NuxtLink :to="link.url" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.links.strategy_sites.title") }}</p>
      </template>
      <ul class="list-disc pl-5 space-y-0.5">
        <li v-for="(link, idx) in links.strategySites" :key="idx">
          <NuxtLink :to="link.url" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.links.strategy_movies.title") }}</p>
      </template>
      <ul class="list-disc pl-5 space-y-0.5">
        <li v-for="(link, idx) in links.strategyMovies" :key="idx">
          <NuxtLink :to="link.url" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </UCard>

    <UCard class="my-5">
      <template #header>
        <p>{{ $t("pages.links.twc_archives.title") }}</p>
      </template>

      <ul class="list-disc pl-5 space-y-0.5">
        <li v-for="(link, idx) in links.twcArchives" :key="idx">
          <NuxtLink :to="link.url" target="_blank" class="hover:underline hover:underline-offset-2 hover:text-primary transition-colors">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const links = ref({
  uploaders: [
    {
      label: "Silent Selene（現東方スコアボード）",
      url: "https://www.silentselene.net/",
    },
    {
      label: "えるろだ",
      url: "https://l-uploader.puresign.tokyo/",
    },
    {
      label: "LunarCast",
      url: "https://replay.lunarcast.net/",
    },
  ],
  strategySites: [
    {
      label: "つめたいレモネードはいかが？（れもな氏の攻略サイト）",
      url: "http://www.coldlemonade.net/",
    },
    {
      label:
        "東方風神録Extraスコアアタック概論（管理人にゃんこの風EX攻略記事）",
      url: "https://note.com/flower874_/n/n6cde241eab41",
    },
    {
      label: "地霊殿Extraスコアアタック10億解説(霊夢A)（Apo氏の地EX攻略記事）",
      url: "https://apo-adipic.hatenablog.com/entry/2023/02/08/152158",
    },
    {
      label:
        "東方虹龍洞Extraスコアアタック概論（管理人にゃんこの虹EX攻略記事）",
      url: "https://note.com/flower874_/n/nd49da8a540f9",
    },
  ],
  strategyMovies: [
    {
      label:
        "ゆっくり椛の紅魔郷Exスコアアタック5億解説（マリオ課長氏の紅EX解説動画）",
      url: "https://www.youtube.com/watch?v=3b4mIJk9vy0",
    },
    {
      label: "東方妖々夢Extra夢符14億解説（lua氏の妖EX解説動画）",
      url: "https://www.youtube.com/watch?v=eGuC1P60lN8",
    },
    {
      label: "ゆっくり椛の妖々夢Extra13億解説（マリオ課長氏の妖EX解説動画）",
      url: "https://www.youtube.com/watch?v=_JOZApRRHF8",
    },
    {
      label:
        "【東方原作】東方風神録EXTRAスコアアタック9.5~9.6億解説（はらぴょん氏の風EX解説動画）",
      url: "https://www.youtube.com/watch?v=TdfoB6N1sFc",
    },
    {
      label:
        "ゆっくり椛の風神録Exスコアアタック　9.5～6億解説（マリオ課長氏の風EX解説動画）",
      url: "https://www.youtube.com/watch?v=-SYnKyqusC4",
    },
    {
      label:
        "東方地霊殿 Extra スコアアタック入門10億完全解説（Apo氏の地EX解説動画）",
      url: "https://www.youtube.com/watch?v=YDFMb4_f8Pc",
    },
    {
      label:
        "東方地霊殿Extraスコアアタック大台11億完全解説（Apo氏の地EX解説動画）",
      url: "https://www.youtube.com/watch?v=ILwCH8_GlXs",
    },
    {
      label:
        "ゆっくり椛の東方星蓮船Ex5億解説動画！（マリオ課長氏の星EX解説動画）",
      url: "https://www.youtube.com/watch?v=MltdODCzBjA",
    },
    {
      label: "神霊廟EXスコアアタック解説（WEF氏の神EX解説動画）",
      url: "https://www.youtube.com/watch?v=7qBydYEyb8o",
    },
    {
      label:
        "東方輝針城extra魔理沙Bスコアアタック解説（あせび氏の輝EX解説動画）",
      url: "https://www.youtube.com/watch?v=oAiQA-c2QUk",
    },
  ],
  twcArchives: [
    {
      label:
        "Touhou World Cup 2021 第二十二試合 紅魔郷EXスコアアタック OOSAKA(日) vs TrickOfHat(西)",
      url: "https://www.youtube.com/watch?v=RLrrRWKYtEM",
    },
    {
      label:
        "【TWC2023】第二十六試合 紅魔郷Exスコアタ SWH(霊) vs ASAGI MUTSUKI(蓮) vs INT(和)",
      url: "https://www.youtube.com/watch?v=yr1ry2gNIPw",
    },
    {
      label:
        "【TWC2024】第5試合 紅魔郷 Extra Scoring　int🌠 vs Rio Mikoshiba🌙 vs Rea Mikoshiba🔆",
      url: "https://www.youtube.com/watch?v=FzZoAnNqnNg",
    },
    {
      label:
        "【TWC2024】第5試合 紅魔郷 Extra Scoring　int🌠 vs Rio Mikoshiba🌙 vs Rea Mikoshiba🔆",
      url: "https://www.youtube.com/watch?v=VwDJlgBzOeY",
    },
    {
      label: "【TWC2025】第14試合 紅魔郷 Extra Scoring int📱 vs TrickOfHat🍁",
      url: "https://www.youtube.com/watch?v=ara2YnZweto",
    },
    {
      label:
        "Touhou World Cup 2022 第十五試合 妖々夢EXスコアアタック いな(Mind) vs lua(Heart)",
      url: "https://www.youtube.com/watch?v=655F0crBnRo",
    },
    {
      label: "【TWC2023】第十四試合 妖々夢Exスコアタ LUA(蓮) vs INA(和)",
      url: "https://www.youtube.com/watch?v=kA4kQk03OsQ",
    },
    {
      label: "【TWC2024】第32試合 妖々夢 Extra Scoring　ina🌠 vs lua🔆",
      url: "https://www.youtube.com/watch?v=SbyWvnGawYM",
    },
    {
      label: "【TWC2024】第18試合 妖々夢 Phantasm Scoring　Garm🌙 vs Yusuke🔆",
      url: "https://www.youtube.com/watch?v=7nsej02N0Lg",
    },
    {
      label: "【TWC2025】第2試合 妖々夢 Extra Scoring INACON📱 vs lua🍁",
      url: "https://www.youtube.com/watch?v=KPMtZtf01no",
    },
    {
      label:
        "Touhou World Cup 2021 第二十六試合 永夜抄EXスコアアタック Ping値(日) vs SAKUREI(西)",
      url: "https://www.youtube.com/watch?v=r8bjr6ju1GE",
    },
    {
      label: "【TWC2023】第三十試合 永夜抄Exスコアタ PINGVAL(霊) vs LEVEA(和)",
      url: "https://www.youtube.com/watch?v=2qIQSNkBYjE",
    },
    {
      label:
        "【TWC2025】第12試合 永夜抄 Extra Scoring Turbo📷 vs pingval/LET🍁",
      url: "https://www.youtube.com/watch?v=wcRebJJ1KpU",
    },
    {
      label: "【TWC2023】第十試合 花映塚Exスコアタ PIGEON(蓮) vs MASATAKA(和)",
      url: "https://www.youtube.com/watch?v=yCMoSDUOBFw",
    },
    {
      label:
        "【TWC2024】第23試合 風神録 Extra Scoring　WONDERFUL CAT🌠 vs harapyon9711🌙",
      url: "https://www.youtube.com/watch?v=Q6m5Qr9bheA",
    },
    {
      label:
        "【TWC2025】第21試合 風神録 Extra Scoring Zenmaister📷 vs はらぴょん🍁",
      url: "https://www.youtube.com/watch?v=k4rfkYk5HdY",
    },
    {
      label:
        "Touhou World Cup 2022 第一試合 地霊殿EXスコアアタック たけのこ(Rose) vs KagLun(Mind) vs ムラサイレブン(Heart)",
      url: "https://www.youtube.com/watch?v=RHnrsQ2QKXE",
    },
    {
      label:
        "【TWC2023】予選第二試合 地霊殿Exスコアタ部門 Oriens vs Apo vs KTT vs IDTN",
      url: "https://www.youtube.com/watch?v=lsHOyNG1kDA",
    },
    {
      label:
        "【TWC2023】第十一試合 地霊殿Exスコアタ APO(霊) vs KTT(蓮) vs IDTN(和)",
      url: "https://www.youtube.com/watch?v=xAELQKyL70E",
    },
    {
      label:
        "【TWC2024】第20試合 地霊殿 Extra Scoring　Apo🌠 vs KTT🌙 vs Oriens🔆",
      url: "https://www.youtube.com/watch?v=_KqbbAxBaHM",
    },
    {
      label:
        "【TWC2025】第30試合 地霊殿 Extra Scoring Oriens📷 vs Apo📱 vs oitan🍁",
      url: "https://www.youtube.com/watch?v=0YO7uIe5jGU",
    },
    {
      label:
        "【TWC2025】第10試合 星蓮船 Extra Scoring Lorenzo📱 vs 286nyamu(ニャムニャム)🍁",
      url: "https://www.youtube.com/watch?v=rQSZkg2Fi8Y",
    },
    {
      label:
        "Touhou World Cup 2021 第十一試合 神霊廟EXスコアアタック idtn(日) vs XBH(中) vs MORTH(西)",
      url: "https://www.youtube.com/watch?v=FLYDomThZ6w",
    },
    {
      label:
        "Touhou World Cup 2022 第十試合 神霊廟EXスコアアタック Morth(Rose) vs idtn(Mind)",
      url: "https://www.youtube.com/watch?v=_PGLv0tON3g",
    },
    {
      label:
        "【TWC2024】第2試合 神霊廟 Extra Scoring　Hoi(ほーらい)🌠 vs Morth🌙",
      url: "https://www.youtube.com/watch?v=gZqgtQfs6LE",
    },
    {
      label:
        "Touhou World Cup 2021 第十七試合 輝針城EXスコアアタック 湯豆腐(日) vs FENG(中) vs THK573(西)",
      url: "https://www.youtube.com/watch?v=T68HccKDtis",
    },
    {
      label:
        "Touhou World Cup 2022 第十四試合 輝針城EXスコアアタック Feng(Rose) vs Ray(Mind) vs あせび(Heart)",
      url: "https://www.youtube.com/watch?v=mbMvJxIp8yY",
    },
    {
      label:
        "【TWC2023】第十五試合 輝針城Exスコアタ ASEB(霊) vs MARISA(蓮) vs MORTH(和)",
      url: "https://www.youtube.com/watch?v=HsRi_m_u9OU",
    },
    {
      label:
        "【TWC2024】第25試合 輝針城 Ex-Scoring　Nylilsa(はるか)🌠 vs ASEB🌙 vs Marisa🔆",
      url: "https://www.youtube.com/watch?v=uzin7ot6oDA",
    },
    {
      label:
        "【TWC2025】第4試合 東方輝針城 Extra Scoring ASEB(あせび)📷️ vs Marisa📱 vs Balisman🍁",
      url: "https://www.youtube.com/watch?v=Pj_HNzIk7fo",
    },
    {
      label:
        "【TWC2024】第17試合 天空璋 Extra Scoring　Rabuka🌠 vs kicyo(吉)🌙 vs idtn🔆",
      url: "https://www.youtube.com/watch?v=SrRobkraF-0",
    },
    {
      label: "【TWC2025】第18試合 紺珠伝 Extra Scoring Borealis📷 vs Roby📱",
      url: "https://www.youtube.com/watch?v=Sj1-cZQnNYU",
    },
    {
      label:
        "【TWC2025】第16試合 虹龍洞 Extra Scoring notlol📷 vs smilelkj📱 vs CAT🍁",
      url: "https://www.youtube.com/watch?v=_dR2yM10jno",
    },
  ],
});
</script>
