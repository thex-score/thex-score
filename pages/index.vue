<template>
  <UContainer>
    <UCard class="my-5">
      <template #header>
        <p>ようこそ</p>
      </template>

      <p>このページはほげふがなページです！</p>

    </UCard>

    <div class="flex flex-row gap-4 my-5">
      <template class="gap-10">
        <UInput
          placeholder="プレイヤー名を入れる"
        />
        <UButton
          icon="i-lucide-search"
          size="md"
          color="primary"
          variant="solid"
        />
      </template>
      <USelect
        class="w-48"
        v-model="selectedGameId"
        :items="gameOptions"
        placeholder="ゲームを選択"
      />

      <USelect
        class="w-48"
        v-model="selectedShotTypeId"
        :items="shotTypeOptions"
        placeholder="ショットタイプを選択"
      />
    </div>
    <USeparator class="mb-5"/>
    <UTable :data="scoreRecords" :columns="columns" class="flex-1" />
  </UContainer>
</template>

<script setup>
  import { h, resolveComponent } from 'vue'
  import { useGames } from '~/composables/Games';

  // import { GamesMapFunc } from '~/composables/Games'
  const value = ref('Backlog')
  const selectedGameId = ref('')
  const gamesMap = useGames()

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

    return Object.entries(game.shot_types).map(([id, st]) => ({
      label: st.name,
      value: id
    }))
  })


  const scoreRecords = ref([
    {
      rank: '1',
      score: '100',
      shot_type: '霊夢A',
      status: '超大台',
      player: 'WEF',
      date: '2024-03-11T15:30:00',
      replay: 'リンク',
      detail: '-',
    },
    {
      rank: '2',
      score: '90',
      shot_type: '霊夢B',
      status: '超大台',
      player: 'WEF',
      date: '2024-03-11T15:30:00',
      replay: 'リンク',
      detail: '-',
    },
  ])

  const UBadge = resolveComponent('UBadge')

  const columns = [
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
          超大台: 'success',
          大台: 'neutral'
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

</script>