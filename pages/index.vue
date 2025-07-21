<template>
  <UContainer>
    <UCard class="my-5">
      <template #header>
        <h1 class="text-xl font-bold">ようこそ</h1>
      </template>

      <p>このページはほげふがなページです！</p>
      <template #footer>
        <p class="text-sm mb-1 font-medium">
          最新アップデート
          <span class="text-primary-600 dark:text-primary-400 font-semibold">
            v{{ latest.version }}
          </span>
          <span class="text-xs text-gray-500 ml-1">
            {{ formatDate(latest.date) }}
          </span>
        </p>

        <ul class="list-disc pl-5 space-y-0.5 text-sm">
          <li v-for="(change, idx) in latest.changes" :key="idx">
            {{ change }}
          </li>
        </ul>
      </template>

    </UCard>

    <div class="grid grid-cols-12 gap-4 my-5">
      <!-- 左側（UInput + UButton） -->
      <div class="col-span-12 md:col-span-6 flex gap-2">
        <UInput
          placeholder="プレイヤー名を入れる"
          class="flex-1 max-w-[12rem]"
          v-model="inputtedPlayer"
        />
        <UButton
          icon="i-lucide-search"
          size="md"
          color="primary"
          variant="solid"
          @click="searchPlayer"
        />
      </div>

      <!-- 右側（USelect x2） -->
      <div class="col-span-12 md:col-span-6 flex gap-2">
        <USelect
          class="w-1/2"
          v-model="selectedGameId"
          :items="gameOptions"
          placeholder="ゲームを選択"
        />

        <USelect
          class="w-1/2"
          v-model="selectedShotTypeId"
          :items="shotTypeOptions"
          placeholder="機体を選択"
        />
      </div>
    </div>
    <USeparator class="mb-5"/>
    <UTable :data="scoreRecords" :columns="columns" class="flex-1" />
  </UContainer>
</template>

<script setup>
  import { h, resolveComponent } from 'vue'
  import { useGames } from '~/composables/Games';
  import { useScoreRecords } from '~/composables/ScoreRecords';
  import { UseReleases } from '~/composables/ReleaseNotes';

  // import { GamesMapFunc } from '~/composables/Games'
  const value = ref('Backlog')
  const inputtedPlayer = ref('')
  const selectedPlayer = ref('')
  const selectedGameId = ref('')
  const selectedShotTypeId=ref('')
  const gamesMap = useGames()
  const scoreRecordMap = useScoreRecords()
  const latest = UseReleases()[0]

  const gameOptions = computed(() =>
    (Object.entries(gamesMap)).map(
      ([id, game]) => ({
        label: game.name,
        value: id
      })
    )
  )

  const shotTypeOptions = computed(() => {
    if (!selectedGameId.value) {
      return []
    }
    const game = gamesMap[selectedGameId.value]

    let returning = Object.entries(game.shot_types).map(([id, st]) => ({
      label: st.name,
      value: id
    }))
    returning.unshift({label: '全機体', value: 'all'})
    return returning
  })


  const scoreRecords = computed(()=>{
    let returning=[]

    // プレイヤーソートモード
    if (selectedPlayer.value !== ''){
      let playerRecords
      playerRecords = scoreRecordMap[selectedPlayer.value]
      if (!playerRecords){
        return []
      }

      Object.entries(playerRecords).forEach(([gameId, shotTypeRecords]) =>{
        Object.entries(shotTypeRecords).forEach(([shotTypeId, record])=>{
          returning.push({
            game: gameId,
            rank: "-",
            score: record.score,
            shot_type: shotTypeId,
            status: record.status,
            player: selectedPlayer.value,
            date: record.date,
            replay: record.replay,
            detail: record.detail
          })
        })
      })
      return returning

    }

    // ゲームソートモード
    if (!selectedGameId.value){
      return []
    }

    Object.entries(scoreRecordMap).forEach(([player, games]) =>{
      const game = games[selectedGameId.value]
      if (!game) return

      Object.entries(game).forEach(([shotTypeId, record])=>{
        if(!selectedShotTypeId.value || selectedShotTypeId.value==='all' || selectedShotTypeId.value===shotTypeId){
          returning.push({
            game: selectedGameId.value,
            score: record.score,
            shot_type: shotTypeId,
            player: player,
            status: record.status,
            date: record.date,
            replay: record.replay,
            detail: record.detail
          })
        }
      })
    })
    // スコアで降順にソート
    returning.sort((a, b) => b.score - a.score)

    // rankを付与（同スコアの順位は飛ばさずに単純順位）
    returning.forEach((item, index) => {
      item.rank = index + 1
    })
    return returning
  })


  // テーブル定義
  const UBadge = resolveComponent('UBadge')
  const UButton = resolveComponent('UButton')
  const columns = [
    {
      accessorKey: 'game',
      header: 'ゲーム名',
      cell: ({ row }) => {
        return h(
          UBadge,
          {
            // 形状は Tailwind、色は動的に style で上書き
            class: 'capitalize inline-block px-2 py-0.5 rounded font-semibold',
            style: {
              color: gamesMap[row.getValue('game')].color.txt,
              backgroundColor: gamesMap[row.getValue('game')].color.bg,
            }
          },
          () => gamesMap[row.getValue('game')].name
        )
      }
    },
    {
      accessorKey: 'rank',
      header: '順位',
    },
    {
      accessorKey: 'score',
      header: ({ column }) => {
        const isSorted = column.getIsSorted()

        return h(UButton, {
          color: 'neutral',
          variant: 'ghost',
          label: 'スコア',
          icon: isSorted
            ? isSorted === 'asc'
              ? 'i-lucide-arrow-up-narrow-wide'
              : 'i-lucide-arrow-down-wide-narrow'
            : 'i-lucide-arrow-up-down',
          class: '-mx-2.5',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        })
      },
      cell: ({ row }) => {
        return new Number(row.getValue('score')).toLocaleString('ja')
      }
    },
    {
      accessorKey: 'shot_type',
      header: '機体',
      cell: ({row}) =>{
        return gamesMap[row.getValue('game')].shot_types[row.getValue('shot_type')].name
      }
    },
    {
      accessorKey: 'status',
      header: 'ステータス',
      cell: ({ row }) => {
        const color = {
          great: 'success',
          good: 'neutral'
        }[row.getValue('status')]
        
        const txt = {
          great: '超大台',
          good: '大台'
        }[row.getValue('status')]

        return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
          txt
        )
      }
    },
    {
      accessorKey: 'player',
      header: 'プレイヤー',
    },
    {
      accessorKey: 'date',
      header: ({ column }) => {
        const isSorted = column.getIsSorted()

        return h(UButton, {
          color: 'neutral',
          variant: 'ghost',
          label: '日付',
          icon: isSorted
            ? isSorted === 'asc'
              ? 'i-lucide-arrow-up-narrow-wide'
              : 'i-lucide-arrow-down-wide-narrow'
            : 'i-lucide-arrow-up-down',
          class: '-mx-2.5',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        })
      },
      cell: ({ row }) => {
        return new Date(row.getValue('date')).toLocaleString('ja', {
          year: 'numeric',
          day: '2-digit',
          month: '2-digit',
        })
      }
    },
    {
      accessorKey: 'replay',
      header: 'リプレイ',
      cell: ({ row }) => {
        if (row.getValue('replay') === null){
          return 'N/A'
        }
        return h(
          'a',
          {
            href: `https://thex-score.github.io/thex-score/replays/${row.getValue('game')}/${row.getValue('replay')}`,
            download: row.getValue('replay'),
            target: '_blank',
            rel: 'noopener',
            class: 'text-primary underline hover:text-primary-600'
          },
          row.getValue('replay')
        )
      }
    },
    {
      accessorKey: 'detail',
      header: '備考',
    },

  ]

  function formatDate(isoDateStr) {
    return new Date(isoDateStr).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }

  watch(selectedGameId, () => {
    if (selectedGameId.value!==''){
      inputtedPlayer.value = ''
      selectedPlayer.value = ''
    }
  })

  const searchPlayer = ()=>{
    selectedGameId.value = ''
    selectedPlayer.value = inputtedPlayer.value
  }

  useSeoMeta({
    title: '裏スコボEX – 東方スコアタリプレイ掲載',
    description: '東方Project の基準値以上のスコアのリプレイを記載',
    ogImage: '/ogp/twittercard.png',
    twitterCard: 'summary_large_image'
  })

</script>