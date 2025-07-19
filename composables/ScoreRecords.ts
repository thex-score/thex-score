export function useScoreRecords(){
  
  const scoreRecords: Record<string, Record<string, Record<string, {score: number, status: 'great' | 'good', date: string, replay: string | null, detail: string}>>>={
    'WEF': {
      'th06': {
        'ReimuA': {
          'score': 1000000,
          'status': 'great',
          'date': '2024-03-11T15:30:00',
          'replay': 'th6_ud0001.rpy',
          'detail': '-',
        },
        'ReimuB': {
          'score': 1100000,
          'status': 'good',
          'date': '2024-03-11T15:30:00',
          'replay': 'th6_ud0002.rpy',
          'detail': '-',
        }
      },
      'th07': {
        'SakuyaA': {
          'score': 1200000,
          'status': 'great',
          'date': '2024-03-11T15:30:00',
          'replay': 'th7_ud0001.rpy',
          'detail': '-',
        }
      }
    },
    'Borealis': {
      'th18': {
        'Reimu': {
          'score': 3666491590,
          'status': 'great',
          'date': '2022-03-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3716911230,
          'status': 'great',
          'date': '2022-03-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 7371092700,
          'status': 'great',
          'date': '2021-10-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
  }

  return scoreRecords
}