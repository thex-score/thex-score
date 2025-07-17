<template>
  <UContainer>
    <UCard class="my-5">
      <template #header>
        <p>ようこそ</p>
      </template>

      <p>このページはほげふがなページです！</p>

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

  // import { GamesMapFunc } from '~/composables/Games'
  const value = ref('Backlog')
  const inputtedPlayer = ref('')
  const selectedPlayer = ref('')
  const selectedGameId = ref('')
  const selectedShotTypeId=ref('')
  const gamesMap = useGames()
  const scoreRecordMap = useScoreRecords()

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
            rank: 1,
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
            game: selectedGameId,
            rank: 1,
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
    return returning
  })


  // テーブル定義
  const UBadge = resolveComponent('UBadge')
  const columns = [
    {
      accessorKey: 'game',
      header: 'ゲーム名'
    },
    {
      accessorKey: 'rank',
      header: '順位'
    },
    {
      accessorKey: 'score',
      header: 'スコア'
    },
    {
      accessorKey: 'shot_type',
      header: '機体'
    },
    {
      accessorKey: 'status',
      header: 'ステータス',
      cell: ({ row }) => {
        const color = {
          great: 'success',
          good: 'neutral'
        }[row.getValue('status')]

        return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
          row.getValue('status')
        )
      }
    },
    {
      accessorKey: 'player',
      header: 'プレイヤー',
    },
    {
      accessorKey: 'date',
      header: '日付',
      cell: ({ row }) => {
        return new Date(row.getValue('date')).toLocaleString('ja', {
          year: 'numeric',
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      }
    },
    {
      accessorKey: 'replay',
      header: 'リプレイ'
    },
    {
      accessorKey: 'detail',
      header: '備考'
    },

  ]


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

</script>