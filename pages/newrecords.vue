<template>
  <UContainer class="py-8">
    <h1 class="text-xl font-bold mb-6">最近追加された記録</h1>

    <USeparator class="mb-5"/>
    <UTable :data="ScoreRecords" :columns="columns" class="flex-1" />

</UContainer>
</template>

<script setup>
  import { h, resolveComponent } from 'vue'
  import { useGames } from '~/composables/Games';
  import { useNewScoreRecords } from '~/composables/NewScoreRecords';

  const gamesMap = useGames()
  const ScoreRecords = useNewScoreRecords()

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
      accessorKey: 'score',
      header: 'スコア',
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
      cell: ({ row }) => row.getValue('player')
    },
    {
      accessorKey: 'date',
      header: '日付',
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
      cell: ({ row }) => row.getValue('detail')
    },

  ]

</script>