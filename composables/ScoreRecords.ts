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
        },
      },
      'th07': {
        'SakuyaA': {
          'score': 1200000,
          'status': 'great',
          'date': '2024-03-11T15:30:00',
          'replay': 'th7_ud0001.rpy',
          'detail': '-',
        },
      },
      'th13': {
        'Youmu': {
          'score': 562172930,
          'status': 'good',
          'date': '2016-12-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'MarisaB': {
          'score': 1108862870,
          'status': 'good',
          'date': '2021-04-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'A.War': {
      'th08': {
        'Border': {
          'score': 2637262760,
          'status': 'good',
          'date': '2018-02-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Magic': {
          'score': 2633042840,
          'status': 'good',
          'date': '2016-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2509753990,
          'status': 'good',
          'date': '2016-01-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 2515850420,
          'status': 'good',
          'date': '2015-01-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2414594510,
          'status': 'good',
          'date': '2008-05-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yukari': {
          'score': 1935975550,
          'status': 'good',
          'date': '2016-01-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2476686760,
          'status': 'good',
          'date': '2019-08-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Alice': {
          'score': 1805579270,
          'status': 'good',
          'date': '2017-03-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 2413169400,
          'status': 'good',
          'date': '2018-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Remilia': {
          'score': 1873083230,
          'status': 'good',
          'date': '2015-09-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 2647062500,
          'status': 'good',
          'date': '2016-07-07T15:30:00',
          'replay': null,
          'detail': '-',
          },
        'Yuyuko': {
          'score': 1947264680,
          'status': 'good',
          'date': '2015-08-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'AM': {
      'th08': {
        'Border': {
          'score': 2812651840,
          'status': 'great',
          'date': '2008-10-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Magic': {
          'score': 2908319100,
          'status': 'great',
          'date': '2008-10-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2766871330,
          'status': 'good',
          'date': '2008-10-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 2874012860,
          'status': 'great',
          'date': '2008-04-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2418721020,
          'status': 'good',
          'date': '2008-05-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yukari': {
          'score': 2078417910,
          'status': 'great',
          'date': '2008-10-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2573353360,
          'status': 'good',
          'date': '2008-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Alice': {
          'score': 1971775680,
          'status': 'good',
          'date': '2008-10-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 2423578490,
          'status': 'good',
          'date': '2008-05-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Remilia': {
          'score': 2041353990,
          'status': 'great',
          'date': '2008-10-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 3010565950,
          'status': 'great',
          'date': '2009-09-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yuyuko': {
          'score': 2001929660,
          'status': 'great',
          'date': '2008-10-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th15': {
        'Sanae': {
          'score': 1008302770,
          'status': 'great',
          'date': '2015-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ARF': {
      'th14': {
        'MarisaB': {
          'score': 1010713440,
          'status': 'good',
          'date': '2013-08-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ASAPIN': {
      'th08': {
        'Reimu': {
          'score': 2310715730,
          'status': 'good',
          'date': '2005-05-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2509098720,
          'status': 'good',
          'date': '2005-05-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 2357010670,
          'status': 'good',
          'date': '2005-05-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ASL': {
      'th08': {
        'Border': {
          'score': 2957550150,
          'status': 'great',
          'date': '2013-11-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Magic': {
          'score': 3021639920,
          'status': 'great',
          'date': '2009-06-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 3000284220,
          'status': 'great',
          'date': '2012-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 3001994340,
          'status': 'great',
          'date': '2009-06-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2435204430,
          'status': 'good',
          'date': '2009-08-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yukari': {
          'score': 2112244750,
          'status': 'great',
          'date': '2009-10-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2600855470,
          'status': 'great',
          'date': '2010-12-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Alice': {
          'score': 2092010760,
          'status': 'great',
          'date': '2009-07-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 2525295090,
          'status': 'great',
          'date': '2012-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Remilia': {
          'score': 2221694800,
          'status': 'great',
          'date': '2011-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 3104449400,
          'status': 'great',
          'date': '2009-09-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yuyuko': {
          'score': 2179007270,
          'status': 'great',
          'date': '2015-08-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Balisman': {
      'th14': {
        'MarisaB': {
          'score': 1241990690,
          'status': 'great',
          'date': '2025-04-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'ReimuO': {
          'score': 1689540500,
          'status': 'good',
          'date': '2025-01-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaO': {
          'score': 1915477960,
          'status': 'good',
          'date': '2024-02-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuO': {
          'score': 2372788200,
          'status': 'good',
          'date': '2025-07-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Bat Mox': {
      'th13': {
        'Marisa': {
          'score': 577384650,
          'status': 'good',
          'date': '2024-06-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'BDH': {
      'th08': {
        'Youmu': {
          'score': 2514468690,
          'status': 'good',
          'date': '2012-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Borealis': {
      'th14': {
        'MarisaB': {
          'score': 1101562070,
          'status': 'good',
          'date': '2020-11-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 782233950,
          'status': 'great',
          'date': '2022-01-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th15': {
        'Marisa': {
          'score': 719130180,
          'status': 'good',
          'date': '2025-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 848268930,
          'status': 'good',
          'date': '2025-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'ReimuW': {
          'score': 1819343220,
          'status': 'great',
          'date': '2024-03-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuO': {
          'score': 2626874070,
          'status': 'great',
          'date': '2024-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuE': {
          'score': 1716115870,
          'status': 'great',
          'date': '2024-03-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaW': {
          'score': 1674917360,
          'status': 'great',
          'date': '2024-02-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaE': {
          'score': 1715772140,
          'status': 'great',
          'date': '2024-02-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuW': {
          'score': 1634018620,
          'status': 'great',
          'date': '2024-02-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuO': {
          'score': 1573599210,
          'status': 'good',
          'date': '2019-10-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuE': {
          'score': 1721961600,
          'status': 'great',
          'date': '2024-03-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
        'Sanae': {
          'score': 3464672660,
          'status': 'good',
          'date': '2022-02-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CCO': {
      'th14': {
        'MarisaB': {
          'score': 1042914990,
          'status': 'good',
          'date': '2016-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Chal': {
      'th08': {
        'Magic': {
          'score': 2433195690,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月1週',
        },
        'Scarlet': {
          'score': 2518378830,
          'status': 'good',
          'date': '2008-10-31T15:30:00',
          'replay': null,
          'detail': '2008年10月1週',
        },
        'Netherworld': {
          'score': 2582327930,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月2週',
        },
        'Yukari': {
          'score': 1828285190,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月3週',
        },
        'Remilia': {
          'score': 1838448940,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月4週',
        },
        'Yuyuko': {
          'score': 1848668950,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月5週',
        },
      },
    },
    'chum': {
      'th128': {
        'Cirno': {
          'score': 98888170,
          'status': 'good',
          'date': '2015-06-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'clock_eu26': {
      'th128': {
        'Cirno': {
          'score': 94779240,
          'status': 'good',
          'date': '2012-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CherryLog': {
      'th08': {
        'Yukari': {
          'score': 1876024620,
          'status': 'good',
          'date': '2011-03-31T15:30:00',
          'replay': null,
          'detail': '2011年3月1週',
        },
        'Youmu': {
          'score': 2880133970,
          'status': 'great',
          'date': '2011-05-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CID': {
      'th128': {
        'Cirno': {
          'score': 95104150,
          'status': 'good',
          'date': '2010-10-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'MarisaB': {
          'score': 1003752640,
          'status': 'good',
          'date': '2013-08-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CSP': {
      'th14': {
        'MarisaB': {
          'score': 1125093960,
          'status': 'good',
          'date': '2014-05-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Cueto': {
      'th14': {
        'MarisaB': {
          'score': 1108574030,
          'status': 'good',
          'date': '2016-10-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CV:○○○○': {
      'th08': {
        'Border': {
          'score': 2654779270,
          'status': 'good',
          'date': '2013-08-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Dagoth': {
      'th14': {
        'MarisaB': {
          'score': 1088255260,
          'status': 'good',
          'date': '2020-11-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Data': {
      'th128': {
        'Cirno': {
          'score': 100509890,
          'status': 'great',
          'date': '2014-06-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'dcBlah': {
      'th08': {
        'Magic': {
          'score': 2786960340,
          'status': 'good',
          'date': '2009-11-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Dean': {
      'th14': {
        'MarisaB': {
          'score': 1044477760,
          'status': 'good',
          'date': '2021-12-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'dd': {
      'th14': {
        'SakuyaB': {
          'score': 785859360,
          'status': 'good',
          'date': '2015-04-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Diamenciory': {
      'th13': {
        'Youmu': {
          'score': 570999750,
          'status': 'good',
          'date': '2021-10-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Sanae': {
          'score': 3818932860,
          'status': 'great',
          'date': '2025-06-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Dide': {
      'th16': {
        'Reimu': {
          'score': 2340348650,
          'status': 'good',
          'date': '2017-11-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'dy/dt': {
      'th15': {
        'Reisen': {
          'score': 753533270,
          'status': 'good',
          'date': '2017-02-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'EBG': {
      'th13': {
        'Marisa': {
          'score': 543605120,
          'status': 'good',
          'date': '2016-07-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'eclipse': {
      'th13': {
        'Marisa': {
          'score': 511891630,
          'status': 'good',
          'date': '2012-09-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'EEg': {
      'th14': {
        'MarisaB': {
          'score': 1208334620,
          'status': 'great',
          'date': '2022-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'E.G.I.': {
      'th16': {
        'Reimu': {
          'score': 2913202670,
          'status': 'good',
          'date': '2018-04-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 2362267770,
          'status': 'good',
          'date': '2018-04-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2298043270,
          'status': 'good',
          'date': '2018-04-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Eternal': {
      'th08': {
        'Border': {
          'score': 2548205610,
          'status': 'good',
          'date': '2006-02-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Feng': {
      'th14': {
        'MarisaB': {
          'score': 1206047710,
          'status': 'great',
          'date': '2021-03-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'fon': {
      'th16': {
        'Reimu': {
          'score': 3336378300,
          'status': 'great',
          'date': '2018-04-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 3319395440,
          'status': 'great',
          'date': '2018-03-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'FutaAi': {
      'th128': {
        'Cirno': {
          'score': 90768220,
          'status': 'good',
          'date': '2010-11-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'garm': {
      'th08': {
        'Netherworld': {
          'score': 2598571690,
          'status': 'good',
          'date': '2017-10-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'GmbRuby!': {
      'th16': {
        'Reimu': {
          'score': 2288262210,
          'status': 'good',
          'date': '2017-09-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 2267459510,
          'status': 'good',
          'date': '2017-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 2208042510,
          'status': 'good',
          'date': '2017-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2078531550,
          'status': 'good',
          'date': '2017-09-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'guran': {
      'th14': {
        'MarisaB': {
          'score': 1127796090,
          'status': 'good',
          'date': '2016-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Hline': {
      'th14': {
        'MarisaB': {
          'score': 1180828970,
          'status': 'good',
          'date': '2018-12-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'idtn': {
      'th08': {
        'Border': {
          'score': 2540185530,
          'status': 'good',
          'date': '2023-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th13': {
        'Reimu': {
          'score': 583256930,
          'status': 'great',
          'date': '2022-11-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 650964660,
          'status': 'great',
          'date': '2022-06-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 570844450,
          'status': 'great',
          'date': '2023-10-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'ReimuA': {
          'score': 772433890,
          'status': 'good',
          'date': '2021-04-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1203433630,
          'status': 'great',
          'date': '2020-12-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th15': {
        'Reimu': {
          'score': 963262690,
          'status': 'great',
          'date': '2023-03-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 922287660,
          'status': 'great',
          'date': '2024-03-25 T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 940384770,
          'status': 'great',
          'date': '2022-01-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th16': {
        'Reimu': {
          'score': 3507478380,
          'status': 'great',
          'date': '2024-06-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 3518461940,
          'status': 'great',
          'date': '2024-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 3549454900,
          'status': 'great',
          'date': '2024-07-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3519680200,
          'status': 'great',
          'date': '2024-07-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'ReimuW': {
          'score': 1159096890,
          'status': 'good',
          'date': '2021-10-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuO': {
          'score': 2458140000,
          'status': 'good',
          'date': '2024-01-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuE': {
          'score': 1324598310,
          'status': 'good',
          'date': '2021-10-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaO': {
          'score': 2681944850,
          'status': 'great',
          'date': '2024-01-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Reimu': {
          'score': 3809186550,
          'status': 'great',
          'date': '2023-04-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3818046440,
          'status': 'great',
          'date': '2023-04-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 8467415250,
          'status': 'great',
          'date': '2025-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 3862839840,
          'status': 'great',
          'date': '2023-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      }
    },
    'inatami': {
      'th14': {
        'MarisaB': {
          'score': 1038566070,
          'status': 'good',
          'date': '2013-08-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ISN': {
      'th14': {
        'ReimuB': {
          'score': 737583410,
          'status': 'good',
          'date': '2020-09-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 733524100,
          'status': 'good',
          'date': '2020-09-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 778156990,
          'status': 'great',
          'date': '2020-10-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'J2': {
      'th08': {
        'Border': {
          'score': 2434329520,
          'status': 'good',
          'date': '2004-10-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2399589960,
          'status': 'good',
          'date': '2005-01-31T15:30:00',
          'replay': null,
          'detail': '2005年1月5週',
        },
      },
    },
    'Jy': {
      'th14': {
        'MarisaB': {
          'score': 1146925460,
          'status': 'good',
          'date': '2014-03-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kana_th6': {
      'th18': {
        'Reimu': {
          'score': 3085175090,
          'status': 'good',
          'date': '2025-05-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 3284339610,
          'status': 'good',
          'date': '2025-05-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kanaechaniidx': {
      'th14': {
        'ReimuA': {
          'score': 771715890,
          'status': 'good',
          'date': '2013-11-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kasakasa': {
      'th16': {
        'Reimu': {
          'score': 2029552750,
          'status': 'good',
          'date': '2018-05-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kisara': {
      'th15': {
        'Reimu': {
          'score': 928380670,
          'status': 'great',
          'date': '2017-03-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 923555520,
          'status': 'great',
          'date': '2016-05-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 1009636890,
          'status': 'great',
          'date': '2017-03-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 1016971530,
          'status': 'great',
          'date': '2016-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kkkn': {
      'th128': {
        'Cirno': {
          'score': 100160720,
          'status': 'great',
          'date': '2023-08-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'MarisaO': {
          'score': 2015744690,
          'status': 'good',
          'date': '2019-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'KMK': {
      'th14': {
        'MarisaB': {
          'score': 1011820090,
          'status': 'good',
          'date': '2014-02-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'KOTARO': {
      'th08': {
        'Border': {
          'score': 2428484930,
          'status': 'good',
          'date': '2004-10-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kuro19': {
      'th128': {
        'Cirno': {
          'score': 95941710,
          'status': 'good',
          'date': '2011-07-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'KYM': {
      'th14': {
        'MarisaB': {
          'score': 1067085910,
          'status': 'good',
          'date': '2016-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'la': {
      'th08': {
        'Border': {
          'score': 2446256860,
          'status': 'good',
          'date': '2008-09-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'lame': {
      'th08': {
        'Netherworld': {
          'score': 2478195150,
          'status': 'good',
          'date': '2010-10-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'leo': {
      'th13': {
        'Marisa': {
          'score': 660499000,
          'status': 'great',
          'date': '2020-12-31T15:30:00',
          'replay': null,
          'detail': '2020年?月?日',
        },
      },
    },
    'LET': {
      'th08': {
        'Border': {
          'score': 2624654270,
          'status': 'good',
          'date': '2007-12-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Magic': {
          'score': 2556875270,
          'status': 'good',
          'date': '2006-02-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2501123270,
          'status': 'good',
          'date': '2006-02-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 2530283450,
          'status': 'good',
          'date': '2006-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2501958550,
          'status': 'great',
          'date': '2025-06-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2639609600,
          'status': 'great',
          'date': '2021-05-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Levea': {
      'th08': {
        'Netherworld': {
          'score': 3024418500,
          'status': 'great',
          'date': '2023-03-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'LYX': {
      'th14': {
        'ReimuB': {
          'score': 762237990,
          'status': 'great',
          'date': '2022-08-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 765467890,
          'status': 'great',
          'date': '2022-08-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 826846180,
          'status': 'great',
          'date': '2022-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 891349080,
          'status': 'great',
          'date': '2022-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MACOTO': {
      'th14': {
        'MarisaB': {
          'score': 1059274780,
          'status': 'good',
          'date': '2016-05-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Maribel Hearn': {
      'th13': {
        'Marisa': {
          'score': 537659780,
          'status': 'good',
          'date': '2019-12-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Marisa': {
      'th14': {
        'MarisaB': {
          'score': 1260747270,
          'status': 'great',
          'date': '2025-05-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'maruku': {
      'th08': {
        'Youmu': {
          'score': 2988004160,
          'status': 'great',
          'date': '2007-08-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MASA': {
      'th14': {
        'MarisaB': {
          'score': 1120777740,
          'status': 'good',
          'date': '2015-01-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Mima': {
      'th14': {
        'MarisaB': {
          'score': 1092368490,
          'status': 'good',
          'date': '2016-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Moko Mope': {
      'th16': {
        'Reimu': {
          'score': 3133527090,
          'status': 'great',
          'date': '2022-12-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 3039375630,
          'status': 'great',
          'date': '2022-11-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 3037045430,
          'status': 'great',
          'date': '2022-11-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3007342500,
          'status': 'great',
          'date': '2022-11-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'morth': {
      'th13': {
        'Reimu': {
          'score': 579189210,
          'status': 'great',
          'date': '2021-07-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 664795430,
          'status': 'great',
          'date': '2022-05-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 560674340,
          'status': 'great',
          'date': '2021-05-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 631603380,
          'status': 'great',
          'date': '2021-05-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'ReimuB': {
          'score': 752768230,
          'status': 'great',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 759382180,
          'status': 'great',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1173863560,
          'status': 'good',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 792750400,
          'status': 'great',
          'date': '2022-01-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 876669670,
          'status': 'great',
          'date': '2022-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MOZAN': {
      'th13': {
        'Reimu': {
          'score': 537619110,
          'status': 'good',
          'date': '2012-01-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MTR': {
      'th16': {
        'Reimu': {
          'score': 2575209060,
          'status': 'good',
          'date': '2020-03-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 2087825070,
          'status': 'good',
          'date': '2018-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'mun': {
      'th15': {
        'Reimu': {
          'score': 886316160,
          'status': 'good',
          'date': '2017-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MY^2': {
      'th18': {
        'Sakuya': {
          'score': 5044048750,
          'status': 'good',
          'date': '2021-05-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'No Name': {
      'th08': {
        'Youmu': {
          'score': 2532264780,
          'status': 'good',
          'date': '2010-09-30T15:30:00',
          'replay': null,
          'detail': '2010年9月2週',
        },
      },
    },
    'notlol': {
      'th18': {
        'Reimu': {
          'score': 3481137180,
          'status': 'good',
          'date': '2025-06-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3269976250,
          'status': 'good',
          'date': '2025-06-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 6115987950,
          'status': 'good',
          'date': '2024-09-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 3420354640,
          'status': 'good',
          'date': '2025-06-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      }
    },
    'nyamu': {
      'th08': {
        'Border': {
          'score': 2649851390,
          'status': 'good',
          'date': '2009-10-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2532529490,
          'status': 'good',
          'date': '2009-10-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 2691608320,
          'status': 'good',
          'date': '2010-02-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yukari': {
          'score': 1866135310,
          'status': 'good',
          'date': '2009-11-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Remilia': {
          'score': 1949613690,
          'status': 'good',
          'date': '2010-02-24T15:30:00',
          'replay': null,
          'detail': '2010年5月4週',
        },
        'Youmu': {
          'score': 2848766270,
          'status': 'great',
          'date': '2009-11-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Yuyuko': {
          'score': 1813178110,
          'status': 'good',
          'date': '2009-08-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Nylilsa': {
      'th13': {
        'Marisa': {
          'score': 529117150,
          'status': 'good',
          'date': '2023-06-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'ReimuA': {
          'score': 823169540,
          'status': 'great',
          'date': '2024-08-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'omega': {
      'th13': {
        'Reimu': {
          'score': 558906970,
          'status': 'great',
          'date': '2012-10-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 590252710,
          'status': 'good',
          'date': '2012-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 532111870,
          'status': 'good',
          'date': '2012-12-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 603783460,
          'status': 'great',
          'date': '2012-08-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'OPON': {
      'th13': {
        'Reimu': {
          'score': 551254140,
          'status': 'great',
          'date': '2014-05-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 560768450,
          'status': 'good',
          'date': '2014-05-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Radet': {
      'th14': {
        'MarisaB': {
          'score': 1077701790,
          'status': 'good',
          'date': '2013-08-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Random': {
      'th08': {
        'Alice': {
          'score': 1821528370,
          'status': 'good',
          'date': '2012-04-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Raymario Pokénic': {
      'th14': {
        'MarisaB': {
          'score': 1056133020,
          'status': 'good',
          'date': '2020-11-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'RB': {
      'th14': {
        'ReimuA': {
          'score': 813712140,
          'status': 'great',
          'date': '2023-06-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Marisa': {
          'score': 3794145150,
          'status': 'great',
          'date': '2022-03-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Roby': {
      'th15': {
        'Reimu': {
          'score': 909597600,
          'status': 'great',
          'date': '2025-06-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'RPRB': {
      'th18': {
        'Sakuya': {
          'score': 5489680910,
          'status': 'good',
          'date': '2021-07-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SaiTO': {
      'th14': {
        'MarisaB': {
          'score': 1051353980,
          'status': 'good',
          'date': '2016-05-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Sakurei': {
      'th08': {
        'Youmu': {
          'score': 3159508570,
          'status': 'great',
          'date': '2016-01-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SEA': {
      'th13': {
        'Youmu': {
          'score': 573745800,
          'status': 'good',
          'date': '2011-09-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Seppo Hovi': {
      'th08': {
        'Youmu': {
          'score': 2393635340,
          'status': 'good',
          'date': '2013-03-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'smilelkj': {
      'th18': {
        'Reimu': {
          'score': 3713416670,
          'status': 'great',
          'date': '2025-06-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'STI': {
      'th13': {
        'Marisa': {
          'score': 547045360,
          'status': 'good',
          'date': '2024-02-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'T': {
      'th13': {
        'Reimu': {
          'score': 566200720,
          'status': 'great',
          'date': '2013-09-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 575358540,
          'status': 'good',
          'date': '2012-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 527881420,
          'status': 'good',
          'date': '2012-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    't1100': {
      'th08': {
        'Youmu': {
          'score': 3100836620,
          'status': 'great',
          'date': '2016-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'thk573': {
      'th14': {
        'MarisaB': {
          'score': 1042025810,
          'status': 'good',
          'date': '2021-04-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'TOSH': {
      'th128': {
        'Cirno': {
          'score': 94738120,
          'status': 'good',
          'date': '2011-08-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'TSG': {
      'th10': {
        'ReimuA': {
          'score': 963185340,
          'status': 'good',
          'date': '2025-07-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'MarisaO': {
          'score': 2303252170,
          'status': 'good',
          'date': '2023-07-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuO': {
          'score': 1915477960,
          'status': 'good',
          'date': '2020-03-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Sakuya': {
          'score': 7125171680,
          'status': 'great',
          'date': '2022-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'TurboOven9000': {
      'th08': {
        'Reimu': {
          'score': 2488651730,
          'status': 'good',
          'date': '2025-05-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'WDSea': {
      'th13': {
        'Youmu': {
          'score': 504668780,
          'status': 'good',
          'date': '2012-04-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'wreath': {
      'th08': {
        'Marisa': {
          'score': 2351482900,
          'status': 'good',
          'date': '2010-09-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'XBH': {
      'th13': {
        'Marisa': {
          'score': 623028030,
          'status': 'great',
          'date': '2021-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YABU': {
      'th08': {
        'Border': {
          'score': 2657021130,
          'status': 'good',
          'date': '2011-03-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2400873270,
          'status': 'good',
          'date': '2008-10-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Netherworld': {
          'score': 2745122790,
          'status': 'good',
          'date': '2010-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2276409280,
          'status': 'good',
          'date': '2010-07-31T15:30:00',
          'replay': null,
          'detail': '2010年7月2週',
        },
        'Yukari': {
          'score': 1817410330,
          'status': 'good',
          'date': '2010-08-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2549422900,
          'status': 'good',
          'date': '2011-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Remilia': {
          'score': 1822033810,
          'status': 'good',
          'date': '2010-05-31T15:30:00',
          'replay': null,
          'detail': '2010年5月4週',
        },
        'Youmu': {
          'score': 2597230200,
          'status': 'good',
          'date': '2010-06-30T15:30:00',
          'replay': null,
          'detail': '2010年6月3週',
        },
        'Yuyuko': {
          'score': 1977266880,
          'status': 'good',
          'date': '2010-09-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'yahoobb': {
      'th16': {
        'Cirno': {
          'score': 2098351820,
          'status': 'good',
          'date': '2018-01-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 2085697440,
          'status': 'good',
          'date': '2018-01-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YASU': {
      'th08': {
        'Border': {
          'score': 2550614200,
          'status': 'good',
          'date': '2006-02-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Magic': {
          'score': 2667998370,
          'status': 'good',
          'date': '2006-03-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Scarlet': {
          'score': 2532280780,
          'status': 'good',
          'date': '2006-02-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reimu': {
          'score': 2355244880,
          'status': 'good',
          'date': '2006-04-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2589768890,
          'status': 'good',
          'date': '2010-08-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 2402347880,
          'status': 'good',
          'date': '2006-05-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YDH': {
      'th14': {
        'MarisaB': {
          'score': 1010412410,
          'status': 'good',
          'date': '2021-04-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'yeswill': {
      'th08': {
        'Magic': {
          'score': 2741980300,
          'status': 'good',
          'date': '2007-04-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 2958771750,
          'status': 'great',
          'date': '2007-07-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YSZK': {
      'th14': {
        'ReimuA': {
          'score': 800680870,
          'status': 'great',
          'date': '2017-07-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Zigzagwolf': {
      'th14': {
        'MarisaB': {
          'score': 1015572990,
          'status': 'good',
          'date': '2016-08-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'K・G': {
      'th128': {
        'Cirno': {
          'score': 90042950,
          'status': 'good',
          'date': '2017-03-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th13': {
        'Reimu': {
          'score': 567754510,
          'status': 'great',
          'date': '2021-03-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 609777820,
          'status': 'great',
          'date': '2021-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 539213970,
          'status': 'good',
          'date': '2021-03-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Youmu': {
          'score': 606651730,
          'status': 'great',
          'date': '2017-10-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th14': {
        'ReimuA': {
          'score': 780112600,
          'status': 'good',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 731175210,
          'status': 'good',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 749377630,
          'status': 'good',
          'date': '2023-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1203735700,
          'status': 'great',
          'date': '2016-11-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 767279680,
          'status': 'great',
          'date': '2022-01-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 816484120,
          'status': 'great',
          'date': '2022-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th15': {
        'Reimu': {
          'score': 809292250,
          'status': 'good',
          'date': '2024-05-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 731624250,
          'status': 'good',
          'date': '2025-05-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 790319250,
          'status': 'good',
          'date': '2023-05-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 836991390,
          'status': 'good',
          'date': '2024-05-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th16': {
        'Reimu': {
          'score': 2053360840,
          'status': 'good',
          'date': '2023-08-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'ReimuW': {
          'score': 1383653020,
          'status': 'good',
          'date': '2023-04-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuE': {
          'score': 1379151480,
          'status': 'good',
          'date': '2023-04-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaW': {
          'score': 1199399640,
          'status': 'good',
          'date': '2023-04-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaO': {
          'score': 2044820040,
          'status': 'good',
          'date': '2023-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaE': {
          'score': 1150410950,
          'status': 'good',
          'date': '2023-04-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuW': {
          'score': 1161941880,
          'status': 'good',
          'date': '2023-04-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuO': {
          'score': 2152018890,
          'status': 'good',
          'date': '2023-05-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuE': {
          'score': 1118202850,
          'status': 'good',
          'date': '2023-04-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Marisa': {
          'score': 3163509820,
          'status': 'good',
          'date': '2022-12-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sakuya': {
          'score': 5412611850,
          'status': 'good',
          'date': '2023-08-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ｔｇ': {
      'th14': {
        'ReimuA': {
          'score': 754161080,
          'status': 'good',
          'date': '2014-04-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'あせび': {
      'th14': {
        'MarisaB': {
          'score': 1227232520,
          'status': 'great',
          'date': '2023-04-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'うどんしゅん': {
      'th16': {
        'Cirno': {
          'score': 3011218850,
          'status': 'great',
          'date': '2022-01-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 3028954650,
          'status': 'great',
          'date': '2022-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3028252130,
          'status': 'great',
          'date': '2022-01-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'えなめる': {
      'th15': {
        'Reimu': {
          'score': 759793680,
          'status': 'good',
          'date': '2015-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 715299120,
          'status': 'good',
          'date': '2015-09-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 832106430,
          'status': 'good',
          'date': '2015-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おとど': {
      'th13': {
        'Marisa': {
          'score': 587938010,
          'status': 'good',
          'date': '2016-11-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おレモン': {
      'th16': {
        'Reimu': {
          'score': 2210837330,
          'status': 'good',
          'date': '2019-03-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'がそりん': {
      'th128': {
        'Cirno': {
          'score': 96925700,
          'status': 'good',
          'date': '2012-09-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'くどう': {
      'th13': {
        'Marisa': {
          'score': 620130060,
          'status': 'great',
          'date': '2022-06-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'けいと': {
      'th13': {
        'Reimu': {
          'score': 559865500,
          'status': 'great',
          'date': '2015-06-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 574358790,
          'status': 'good',
          'date': '2015-06-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 507451140,
          'status': 'good',
          'date': '2015-06-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ざざぼーん': {
      'th13': {
        'Youmu': {
          'score': 545219570,
          'status': 'good',
          'date': '2017-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'じいさん': {
      'th16': {
        'Reimu': {
          'score': 2011522930,
          'status': 'good',
          'date': '2018-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'すいれん': {
      'th17': {
        'ReimuW': {
          'score': 1054209460,
          'status': 'good',
          'date': '2020-08-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuO': {
          'score': 2479160420,
          'status': 'good',
          'date': '2020-07-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaW': {
          'score': 1148007840,
          'status': 'good',
          'date': '2020-04-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaO': {
          'score': 2774430020,
          'status': 'great',
          'date': '2020-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuW': {
          'score': 1071337250,
          'status': 'good',
          'date': '2020-04-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'YoumuO': {
          'score': 2346367160,
          'status': 'good',
          'date': '2019-11-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Sakuya': {
          'score': 6931475560,
          'status': 'good',
          'date': '2021-08-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'たろー': {
      'th08': {
        'Youmu': {
          'score': 2466877810,
          'status': 'good',
          'date': '2006-12-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th13': {
        'Youmu': {
          'score': 571926350,
          'status': 'good',
          'date': '2011-09-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'とっくり': {
      'th08': {
        'Youmu': {
          'score': 2410739420,
          'status': 'good',
          'date': '2004-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'にゃんこ': {
      'th18': {
        'Reimu': {
          'score': 3845087960,
          'status': 'great',
          'date': '2025-06-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3857820910,
          'status': 'great',
          'date': '2025-06-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 3738774220,
          'status': 'great',
          'date': '2025-06-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      }
    },
    'ぬまた': {
      'th128': {
        'Cirno': {
          'score': 91055090,
          'status': 'good',
          'date': '2024-09-30T15:30:00',
          'replay': null,
          'detail': '2024年9月3週',
        },
      },
    },
    'ばくだん': {
      'th14': {
        'MarisaB': {
          'score': 1051321670,
          'status': 'good',
          'date': '2015-02-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ひなぶ': {
      'th14': {
        'MarisaB': {
          'score': 1135071980,
          'status': 'good',
          'date': '2013-08-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ひろ♪☆': {
      'th128': {
        'Cirno': {
          'score': 90413200,
          'status': 'good',
          'date': '2021-03-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ぶーる': {
      'th14': {
        'SakuyaB': {
          'score': 782148470,
          'status': 'good',
          'date': '2013-08-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ほーらい': {
      'th13': {
        'Marisa': {
          'score': 607790180,
          'status': 'great',
          'date': '2024-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'まどか': {
      'th16': {
        'Reimu': {
          'score': 3252215310,
          'status': 'great',
          'date': '2017-10-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 3442485180,
          'status': 'great',
          'date': '2018-10-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3302327700,
          'status': 'great',
          'date': '2018-10-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'みかみ': {
      'th13': {
        'Reimu': {
          'score': 578830350,
          'status': 'great',
          'date': '2021-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 616751980,
          'status': 'great',
          'date': '2020-02-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'みすみ': {
      'th08': {
        'Netherworld': {
          'score': 2624330780,
          'status': 'good',
          'date': '2004-11-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'みぞる': {
      'th128': {
        'Cirno': {
          'score': 102027380,
          'status': 'great',
          'date': '2020-06-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'みょん吉': {
      'th16': {
        'Reimu': {
          'score': 3459416680,
          'status': 'great',
          'date': '2022-04-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 3466214630,
          'status': 'great',
          'date': '2022-04-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 3485097930,
          'status': 'great',
          'date': '2022-03-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 3483906090,
          'status': 'great',
          'date': '2022-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'らぶか': {
      'th16': {
        'Reimu': {
          'score': 3282356430,
          'status': 'great',
          'date': '2024-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2793935440,
          'status': 'good',
          'date': '2024-08-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'れもな': {
      'th16': {
        'Reimu': {
          'score': 2305772560,
          'status': 'good',
          'date': '2021-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Cirno': {
          'score': 2670887210,
          'status': 'good',
          'date': '2023-08-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 2445244120,
          'status': 'good',
          'date': '2021-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2322889190,
          'status': 'good',
          'date': '2021-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'MarisaO': {
          'score': 1556724350,
          'status': 'good',
          'date': '2023-08-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'エンプル': {
      'th16': {
        'Cirno': {
          'score': 2158531730,
          'status': 'good',
          'date': '2018-06-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Aya': {
          'score': 2074055840,
          'status': 'good',
          'date': '2018-06-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ギョウちゃん': {
      'th128': {
        'Cirno': {
          'score': 92569180,
          'status': 'good',
          'date': '2017-04-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'スタまつ': {
      'th14': {
        'MarisaB': {
          'score': 1033836750,
          'status': 'good',
          'date': '2015-07-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ナギマイ': {
      'th08': {
        'Scarlet': {
          'score': 2565231200,
          'status': 'good',
          'date': '2004-10-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'マリオ課長': {
      'th15': {
        'Reisen': {
          'score': 775653470,
          'status': 'good',
          'date': '2024-05-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ロリー': {
      'th13': {
        'Youmu': {
          'score': 567443980,
          'status': 'good',
          'date': '2014-05-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ワカメスープ': {
      'th16': {
        'Reimu': {
          'score': 2015919550,
          'status': 'good',
          'date': '2021-05-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '王可飞': {
      'th14': {
        'MarisaB': {
          'score': 1086465390,
          'status': 'good',
          'date': '2013-08-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '岩魚穣娘': {
      'th14': {
        'MarisaB': {
          'score': 1217785610,
          'status': 'great',
          'date': '2023-05-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '宮燐': {
      'th16': {
        'Reimu': {
          'score': 2413506730,
          'status': 'good',
          'date': '2021-06-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 2326749150,
          'status': 'good',
          'date': '2021-07-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '九条アリス': {
      'th13': {
        'Sanae': {
          'score': 507448700,
          'status': 'good',
          'date': '2017-02-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '四季映夢': {
      'th16': {
        'Reimu': {
          'score': 2009442310,
          'status': 'good',
          'date': '2019-02-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '真黒': {
      'th15': {
        'Reimu': {
          'score': 803551840,
          'status': 'good',
          'date': '2017-12-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Marisa': {
          'score': 798972690,
          'status': 'good',
          'date': '2019-01-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Sanae': {
          'score': 846931760,
          'status': 'good',
          'date': '2018-10-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'Reisen': {
          'score': 905933460,
          'status': 'great',
          'date': '2019-01-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '七': {
      'th08': {
        'Border': {
          'score': 2574898180,
          'status': 'good',
          'date': '2009-07-31T15:30:00',
          'replay': null,
          'detail': '2009年7月1週',
        },
      },
    },
    '松松打虎': {
      'th08': {
        'Reimu': {
          'score': 2487905940,
          'status': 'good',
          'date': '2012-07-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '人識': {
      'th08': {
        'Youmu': {
          'score': 2993248780,
          'status': 'great',
          'date': '2010-03-31T15:30:00',
          'replay': null,
          'detail': '2010年3月2週',
        },
      },
    },
    '専属メイド': {
      'th08': {
        'Remilia': {
          'score': 1852942870,
          'status': 'good',
          'date': '2014-01-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '名前': {
      'th14': {
        'ReimuA': {
          'score': 773374720,
          'status': 'good',
          'date': '2013-11-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 789970750,
          'status': 'good',
          'date': '2013-09-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '萨诺': {
      'th14': {
        'MarisaB': {
          'score': 1206283660,
          'status': 'great',
          'date': '2021-01-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '（前略）メイルさん': {
      'th128': {
        'Cirno': {
          'score': 90466010,
          'status': 'good',
          'date': '2011-10-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },

  }

  return scoreRecords
}