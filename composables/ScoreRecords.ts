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
    'にゃんこ': {
      'th07': {
        'MarisaA': {
          'score': 13000000,
          'status': 'good',
          'date': '2024-03-11T15:30:00',
          'replay': 'th7_ud00002.rpy',
          'detail': '-',
        }
      }
    }
  }

  return scoreRecords
}