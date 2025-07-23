export function useScoreRecords(){
  
  const scoreRecords: Record<string, Record<string, Record<string, {score: number, status: 'great' | 'good', date: string, replay: string | null, detail: string}>>>={
    'WEF': {
      'th13': {
        'Marisa': {
          'score': 600404860,
          'status': 'great',
          'date': '2022-06-15T15:30:00',
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
    '***YZ***': {
      'th11': {
        'ReimuA': {
          'score': 1067602750,
          'status': 'good',
          'date': '2012-02-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '240': {
      'th10': {
        'ReimuA': {
          'score': 957011160,
          'status': 'good',
          'date': '2010-12-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '3123': {
      'th07Ph': {
        'ReimuB': {
          'score': 1345888480,
          'status': 'good',
          'date': '2010-12-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1330871860,
          'status': 'good',
          'date': '2011-01-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1369793900,
          'status': 'good',
          'date': '2011-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '3sama': {
      'th10': {
        'ReimuA': {
          'score': 952066940,
          'status': 'good',
          'date': '2008-09-27T15:30:00',
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
          'date': '2007-10-31T15:30:00',
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
      'th10': {
        'ReimuA': {
          'score': 961113610,
          'status': 'good',
          'date': '2007-10-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 952447040,
          'status': 'good',
          'date': '2007-09-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1101675500,
          'status': 'great',
          'date': '2008-11-23T15:30:00',
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
    'Anemia': {
      'th11': {
        'ReimuA': {
          'score': 1022055100,
          'status': 'good',
          'date': '2009-09-30T15:30:00',
          'replay': null,
          'detail': '2009年9月1週',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 700366290,
          'status': 'great',
          'date': '2017-05-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ANK': {
      'th06': {
        'MarisaB': {
          'score': 602257610,
          'status': 'great',
          'date': '2009-11-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Apo': {
      'th11': {
        'ReimuA': {
          'score': 1131597980,
          'status': 'great',
          'date': '2025-05-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1102669070,
          'status': 'great',
          'date': '2024-05-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1093743800,
          'status': 'great',
          'date': '2025-07-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1048491000,
          'status': 'good',
          'date': '2024-03-16T15:30:00',
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
    'ark': {
      'th10': {
        'ReimuA': {
          'score': 959416410,
          'status': 'good',
          'date': '2012-08-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 966295350,
          'status': 'good',
          'date': '2012-08-17T15:30:00',
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
      'th06': {
        'ReimuA': {
          'score': 536185430,
          'status': 'good',
          'date': '2009-04-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 571941380,
          'status': 'good',
          'date': '2009-11-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 553746540,
          'status': 'good',
          'date': '2009-01-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 611725420,
          'status': 'great',
          'date': '2009-07-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
      'th10': {
        'ReimuA': {
          'score': 969370200,
          'status': 'good',
          'date': '2009-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1126846180,
          'status': 'great',
          'date': '2017-09-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1101316000,
          'status': 'great',
          'date': '2013-04-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1076628060,
          'status': 'great',
          'date': '2013-06-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1113194290,
          'status': 'great',
          'date': '2012-07-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1102183510,
          'status': 'great',
          'date': '2012-06-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1081890510,
          'status': 'great',
          'date': '2013-03-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ATA': {
      'th10': {
        'ReimuA': {
          'score': 968708640,
          'status': 'good',
          'date': '2007-12-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Aten': {
      'th12': {
        'ReimuA': {
          'score': 500120660,
          'status': 'good',
          'date': '2010-03-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Atu': {
      'th07Ex': {
        'ReimuB': {
          'score': 1264076720,
          'status': 'good',
          'date': '2008-05-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'B': {
      'th10': {
        'ReimuB': {
          'score': 954436110,
          'status': 'good',
          'date': '2009-02-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'BAAGE': {
      'th06': {
        'ReimuB': {
          'score': 551292560,
          'status': 'good',
          'date': '2006-06-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 531787820,
          'status': 'good',
          'date': '2006-01-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 558932650,
          'status': 'good',
          'date': '2006-02-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ex': {
        'ReimuB': {
          'score': 1303825140,
          'status': 'good',
          'date': '2008-01-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1122296250,
          'status': 'good',
          'date': '2008-01-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1221017080,
          'status': 'good',
          'date': '2008-01-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1520161930 ,
          'status': 'good',
          'date': '2008-03-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1212214520 ,
          'status': 'good',
          'date': '2007-10-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1329307980 ,
          'status': 'good',
          'date': '2007-07-12T15:30:00',
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
          'replay': 'th17_ud0015.rpy',
          'detail': '-',
        },
        'MarisaO': {
          'score': 1915477960,
          'status': 'good',
          'date': '2024-02-16T15:30:00',
          'replay': 'th17_ud0013.rpy',
          'detail': '-',
        },
        'YoumuO': {
          'score': 2372788200,
          'status': 'good',
          'date': '2025-07-09T15:30:00',
          'replay': 'th17_ud0005.rpy',
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
    'BCF': {
      'th10': {
        'ReimuA': {
          'score': 958692290,
          'status': 'good',
          'date': '2008-07-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 954090340,
          'status': 'good',
          'date': '2008-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 964238000,
          'status': 'good',
          'date': '2008-07-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 956130220,
          'status': 'good',
          'date': '2008-08-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 972255800,
          'status': 'good',
          'date': '2008-07-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'MarisaB': {
          'score': 1005887120,
          'status': 'good',
          'date': '2009-07-15T15:30:00',
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
    'blahblah': {
      'th11': {
        'ReimuA': {
          'score': 1028349320,
          'status': 'good',
          'date': '2009-07-30T15:30:00',
          'replay': null,
          'detail': '2009年7月2週',
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
          'status': 'good',
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
          'replay': 'th17_ud0017.rpy',
          'detail': '-',
        },
        'ReimuO': {
          'score': 2626874070,
          'status': 'great',
          'date': '2024-03-13T15:30:00',
          'replay': 'th17_ud0011.rpy',
          'detail': '-',
        },
        'ReimuE': {
          'score': 1716115870,
          'status': 'great',
          'date': '2024-03-08T15:30:00',
          'replay': 'th17_ud0018.rpy',
          'detail': '-',
        },
        'MarisaW': {
          'score': 1674917360,
          'status': 'great',
          'date': '2024-02-25T15:30:00',
          'replay': 'th17_ud0019.rpy',
          'detail': '-',
        },
        'MarisaE': {
          'score': 1715772140,
          'status': 'great',
          'date': '2024-02-26T15:30:00',
          'replay': 'th17_ud0020.rpy',
          'detail': '-',
        },
        'YoumuW': {
          'score': 1634018620,
          'status': 'great',
          'date': '2024-02-27T15:30:00',
          'replay': 'th17_ud0021.rpy',
          'detail': '-',
        },
        'YoumuO': {
          'score': 1573599210,
          'status': 'good',
          'date': '2019-10-14T15:30:00',
          'replay': 'th17_ud0016.rpy',
          'detail': '-',
        },
        'YoumuE': {
          'score': 1721961600,
          'status': 'great',
          'date': '2024-03-01T15:30:00',
          'replay': 'th17_ud0022.rpy',
          'detail': '-',
        },
      },
      'th18': {
        'Reimu': {
          'score': 3666491590,
          'status': 'great',
          'date': '2022-03-15T15:30:00',
          'replay': 'th18_ud0016.rpy',
          'detail': '-',
        },
        'Marisa': {
          'score': 3716911230,
          'status': 'great',
          'date': '2022-03-15T15:30:00',
          'replay': 'th18_ud0015.rpy',
          'detail': '-',
        },
        'Sakuya': {
          'score': 7371092700,
          'status': 'great',
          'date': '2021-10-14T15:30:00',
          'replay': 'th18_ud0002.rpy',
          'detail': '-',
        },
        'Sanae': {
          'score': 3464672660,
          'status': 'good',
          'date': '2022-02-27T15:30:00',
          'replay': 'th18_ud0017.rpy',
          'detail': '-',
        },
      },
    },
    'Cactu': {
      'th06': {
        'ReimuB': {
          'score': 615234480,
          'status': 'great',
          'date': '2014-11-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'CAL': {
      'th06': {
        'MarisaB': {
          'score': 527254090,
          'status': 'good',
          'date': '2008-07-31T15:30:00',
          'replay': null,
          'detail': '2008年7月1週',
        },
      },
    },
    'Captured': {
      'th10': {
        'ReimuB': {
          'score': 959198820,
          'status': 'good',
          'date': '2012-11-15T15:30:00',
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
      'th06': {
        'MarisaB': {
          'score': 588082700,
          'status': 'good',
          'date': '2008-08-31T15:30:00',
          'replay': null,
          'detail': '2008年8月3週',
        },
      },
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
      'th10': {
        'ReimuA': {
          'score': 971519910  ,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月4週',
        },
      },
    },
    'chrono': {
      'th07Ph': {
        'ReimuA': {
          'score': 1378006650,
          'status': 'good',
          'date': '2006-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1565992430,
          'status': 'good',
          'date': '2006-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuC': {
          'score': 971519910 ,
          'status': 'good',
          'date': '2007-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'chum': {
      'th128': {
        'Cirno': {
          'score': 98888170,
          'status': 'good',
          'date': '2015-06-15T15:30:00',
          'replay': 'th128_ud0004.rpy',
          'detail': '-',
        },
      },
    },
    'Clio': {
      'th11': {
        'MarisaA': {
          'score': 1003331910,
          'status': 'good',
          'date': '2009-10-09T15:30:00',
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
          'replay': 'th128_ud0008.rpy',
          'detail': '-',
        },
      },
    },
    'CHEM31': {
      'th06': {
        'ReimuB': {
          'score': 515939650,
          'status': 'good',
          'date': '2005-08-31T15:30:00',
          'replay': null,
          'detail': '2005年8月4週',
        },
      },
    },
    'Cherry^^': {
      'th07Ex': {
        'MarisaA': {
          'score': 1156650340,
          'status': 'good',
          'date': '2004-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'MarisaA': {
          'score': 1342174630,
          'status': 'good',
          'date': '2004-08-15T15:30:00',
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
          'replay': 'th128_ud0007.rpy',
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
    'coco': {
      'th06': {
        'ReimuB': {
          'score': 587822150,
          'status': 'good',
          'date': '2009-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1023546070,
          'status': 'good',
          'date': '2010-02-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      }
    },
    'coic': {
      'th10': {
        'ReimuA': {
          'score': 970665900,
          'status': 'good',
          'date': '2011-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 974913650,
          'status': 'good',
          'date': '2011-06-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 953605510,
          'status': 'good',
          'date': '2011-07-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Crispy': {
      'th12': {
        'ReimuA': {
          'score': 541731650,
          'status': 'good',
          'date': '2025-03-15T15:30:00',
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
    'ct9a': {
      'th06': {
        'MarisaB': {
          'score': 541143550,
          'status': 'good',
          'date': '2009-08-31T15:30:00',
          'replay': null,
          'detail': '2009年8月3週',
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
    'CWC': {
      'th11': {
        'ReimuA': {
          'score': 1051729290,
          'status': 'good',
          'date': '2020-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'coa': {
      'th10': {
        'ReimuA': {
          'score': 985720850,
          'status': 'great',
          'date': '2010-07-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 994458150,
          'status': 'great',
          'date': '2010-07-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 989133300,
          'status': 'good',
          'date': '2010-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1000020760,
          'status': 'great',
          'date': '2009-05-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1008536640,
          'status': 'good',
          'date': '2012-11-18T15:30:00',
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
          'replay': 'th128_ud0002.rpy',
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
    'despair(絶望)': {
      'th07Ex': {
        'ReimuB': {
          'score': 1309354340,
          'status': 'good',
          'date': '2013-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1321845540,
          'status': 'good',
          'date': '2012-12-16T15:30:00',
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
          'replay': 'th18_ud0012.rpy',
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
    'DOS': {
      'th11': {
        'ReimuA': {
          'score': 1018744630,
          'status': 'good',
          'date': '2011-03-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'dot_asp': {
      'th07Ex': {
        'ReimuB': {
          'score': 1421550150,
          'status': 'great',
          'date': '2013-04-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1339609020,
          'status': 'great',
          'date': '2012-11-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'MarisaA': {
          'score': 665674050,
          'status': 'good',
          'date': '2012-04-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 687806130,
          'status': 'good',
          'date': '2011-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Dual': {
      'th07Ex': {
        'MarisaA': {
          'score': 1155302950,
          'status': 'good',
          'date': '2006-07-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1104450650,
          'status': 'good',
          'date': '2005-09-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'dxk': {
      'th10': {
        'MarisaC': {
          'score': 1002022800,
          'status': 'great',
          'date': '2022-10-20T15:30:00',
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
    'EQ': {
      'th07Ex': {
        'ReimuB': {
          'score': 1232634800,
          'status': 'good',
          'date': '2008-09-30T15:30:00',
          'replay': null,
          'detail': '2008年9月1週',
        },
      },
    },
    'Eternal': {
      'th07Ph': {
        'MarisaB': {
          'score': 1262817640,
          'status': 'good',
          'date': '2006-07-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'EVE': {
      'th07Ph': {
        'ReimuA': {
          'score': 1260669390,
          'status': 'good',
          'date': '2008-01-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1252662130,
          'status': 'good',
          'date': '2007-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Fe': {
      'th10': {
        'ReimuB': {
          'score': 964121810,
          'status': 'good',
          'date': '2011-03-18T15:30:00',
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
    'Fulde': {
      'th10': {
        'ReimuA': {
          'score': 957275480,
          'status': 'good',
          'date': '2008-08-10T15:30:00',
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
    'franniss': {
      'th12': {
        'SanaeB': {
          'score': 553512750,
          'status': 'good',
          'date': '2010-09-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Frost': {
      'th07Ph': {
        'ReimuB': {
          'score': 1420326890,
          'status': 'good',
          'date': '2007-07-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 959639700,
          'status': 'good',
          'date': '2008-02-04T15:30:00',
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
          'replay': 'th128_ud0011.rpy',
          'detail': '-',
        },
      },
    },
    'garm': {
      'th07Ex': {
        'ReimuB': {
          'score': 1241472040,
          'status': 'good',
          'date': '2024-01-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1546212470,
          'status': 'good',
          'date': '2024-03-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'gatsguts': {
      'th12': {
        'SanaeB': {
          'score': 694067370,
          'status': 'good',
          'date': '2012-05-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Genkai': {
      'th07Ph': {
        'ReimuA': {
          'score': 1357213060,
          'status': 'good',
          'date': '2012-07-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'GEPPO': {
      'th10': {
        'ReimuB': {
          'score': 966819750,
          'status': 'good',
          'date': '2009-03-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 961273360,
          'status': 'good',
          'date': '2009-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 969310230,
          'status': 'good',
          'date': '2009-07-30T15:30:00',
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
      'th12': {
        'ReimuA': {
          'score': 643538430,
          'status': 'good',
          'date': '2012-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 610210230,
          'status': 'good',
          'date': '2012-10-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 605635390,
          'status': 'good',
          'date': '2012-04-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 628212900,
          'status': 'good',
          'date': '2012-07-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 623770210,
          'status': 'good',
          'date': '2011-12-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 711266970,
          'status': 'great',
          'date': '2012-06-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'haru': {
      'th10': {
        'ReimuA': {
          'score': 965068440,
          'status': 'good',
          'date': '2007-10-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'harukara': {
      'th12': {
        'ReimuA': {
          'score': 658198670,
          'status': 'great',
          'date': '2017-07-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 614037600,
          'status': 'good',
          'date': '2015-10-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 633225120,
          'status': 'good',
          'date': '2017-04-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 609148460,
          'status': 'good',
          'date': '2015-10-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Heartbeam': {
      'th06': {
        'ReimuA': {
          'score': 510843100,
          'status': 'good',
          'date': '2011-07-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 530174200,
          'status': 'good',
          'date': '2011-01-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ex': {
        'ReimuA': {
          'score': 1319163920,
          'status': 'great',
          'date': '2011-11-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1374889790,
          'status': 'good',
          'date': '2011-11-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1224654940,
          'status': 'great',
          'date': '2011-11-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1194581350,
          'status': 'good',
          'date': '2011-10-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1207559680,
          'status': 'great',
          'date': '2011-10-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1328868780,
          'status': 'great',
          'date': '2012-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1283962270,
          'status': 'good',
          'date': '2011-01-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1502658090,
          'status': 'good',
          'date': '2011-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1047520960,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1004773940,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1012453310,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1019558540,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1008841220,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1008213550,
          'status': 'good',
          'date': '2011-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 671587540,
          'status': 'good',
          'date': '2011-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'HHY': {
      'th11': {
        'ReimuA': {
          'score': 1040379230,
          'status': 'good',
          'date': '2011-08-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Himusy': {
      'th11': {
        'ReimuA': {
          'score': 1104094890,
          'status': 'great',
          'date': '2015-06-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'HIR': {
      'th10': {
        'MarisaC': {
          'score': 958434540,
          'status': 'good',
          'date': '2007-10-31T15:30:00',
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
    'HS参謀': {
      'th07Ex': {
        'ReimuA': {
          'score': 1368382510,
          'status': 'great',
          'date': '2011-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1412815750,
          'status': 'great',
          'date': '2011-09-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1257244350,
          'status': 'great',
          'date': '2012-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1242595110,
          'status': 'great',
          'date': '2012-08-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1269037930,
          'status': 'great',
          'date': '2011-08-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1389203040,
          'status': 'great',
          'date': '2011-09-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1578013890,
          'status': 'great',
          'date': '2011-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1652531160,
          'status': 'great',
          'date': '2011-10-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1438372650,
          'status': 'great',
          'date': '2011-07-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1424064450,
          'status': 'great',
          'date': '2011-07-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1451877270,
          'status': 'great',
          'date': '2011-07-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1565933740,
          'status': 'great',
          'date': '2010-02-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'htrn': {
      'th07Ex': {
        'ReimuB': {
          'score': 1289245720,
          'status': 'good',
          'date': '2015-12-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'I.K': {
      'th06': {
        'ReimuB': {
          'score': 535593380,
          'status': 'good',
          'date': '2011-09-30T15:30:00',
          'replay': null,
          'detail': '2011年9月4週',
        },
        'MarisaB': {
          'score': 511956890,
          'status': 'good',
          'date': '2011-06-30T15:30:00',
          'replay': null,
          'detail': '2011年6月3週',
        },
      },
    },
    'Ia': {
      'th10': {
        'ReimuA': {
          'score': 954051070,
          'status': 'good',
          'date': '2009-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'IBUKI': {
      'th06': {
        'MarisaB': {
          'score': 557900410,
          'status': 'good',
          'date': '2009-12-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 962399370,
          'status': 'good',
          'date': '2010-01-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1122028280,
          'status': 'great',
          'date': '2014-04-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1071750900,
          'status': 'good',
          'date': '2012-04-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1050290580,
          'status': 'great',
          'date': '2011-12-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1100919060,
          'status': 'great',
          'date': '2012-07-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1070171250,
          'status': 'good',
          'date': '2010-06-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1060139700,
          'status': 'great',
          'date': '2012-04-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 539534530,
          'status': 'good',
          'date': '2009-12-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'idtn': {
      'th06': {
        'ReimuA': {
          'score': 501293410,
          'status': 'good',
          'date': '2024-11-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 502198880,
          'status': 'good',
          'date': '2020-09-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 512470600,
          'status': 'good',
          'date': '2020-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th08': {
        'Border': {
          'score': 2540185530,
          'status': 'good',
          'date': '2023-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 977499600,
          'status': 'good',
          'date': '2023-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1125007070,
          'status': 'great',
          'date': '2024-01-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1094091630,
          'status': 'good',
          'date': '2023-06-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1050844300,
          'status': 'great',
          'date': '2023-05-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1133521770,
          'status': 'great',
          'date': '2023-07-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1106846610,
          'status': 'great',
          'date': '2023-06-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1065708540,
          'status': 'great',
          'date': '2023-04-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 637311450,
          'status': 'good',
          'date': '2023-08-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 712165610,
          'status': 'great',
          'date': '2021-11-07T15:30:00',
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
          'date': '2024-03-25T15:30:00',
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
          'replay': 'th17_ud0029.rpy',
          'detail': '-',
        },
        'ReimuO': {
          'score': 2458140000,
          'status': 'good',
          'date': '2024-01-12T15:30:00',
          'replay': 'th17_ud0004.rpy',
          'detail': '-',
        },
        'ReimuE': {
          'score': 1324598310,
          'status': 'good',
          'date': '2021-10-08T15:30:00',
          'replay': 'th17_ud0030.rpy',
          'detail': '-',
        },
        'MarisaO': {
          'score': 2681944850,
          'status': 'great',
          'date': '2024-01-08T15:30:00',
          'replay': 'th17_ud0002.rpy',
          'detail': '-',
        },
      },
      'th18': {
        'Reimu': {
          'score': 3809186550,
          'status': 'great',
          'date': '2023-04-13T15:30:00',
          'replay': 'th18_ud0011.rpy',
          'detail': '-',
        },
        'Marisa': {
          'score': 3818046440,
          'status': 'great',
          'date': '2023-04-12T15:30:00',
          'replay': 'th18_ud0010.rpy',
          'detail': '-',
        },
        'Sakuya': {
          'score': 8467415250,
          'status': 'great',
          'date': '2025-07-01T15:30:00',
          'replay': 'th18_ud0001.rpy',
          'detail': '-',
        },
        'Sanae': {
          'score': 3862839840,
          'status': 'great',
          'date': '2023-04-09T15:30:00',
          'replay': 'th18_ud0007.rpy',
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
    'inoopy': {
      'th07Ph': {
        'SakuyaA': {
          'score': 1201339940,
          'status': 'good',
          'date': '2006-02-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Indigo': {
      'th12': {
        'ReimuA': {
          'score': 563997020,
          'status': 'good',
          'date': '2009-10-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'int': {
      'th06': {
        'ReimuA': {
          'score': 643092740,
          'status': 'great',
          'date': '2024-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 668332780,
          'status': 'great',
          'date': '2024-07-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 616890460,
          'status': 'great',
          'date': '2019-12-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 632464440,
          'status': 'great',
          'date': '2022-02-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'iomark': {
      'th06': {
        'ReimuB': {
          'score': 532333540,
          'status': 'good',
          'date': '2013-03-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 976279340,
          'status': 'good',
          'date': '2011-07-31T15:30:00',
          'replay': null,
          'detail': '2011年7月1週',
        },
      },
    },
    'ior': {
      'th11': {
        'ReimuA': {
          'score': 1115415220,
          'status': 'great',
          'date': '2019-05-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'isi': {
      'th06': {
        'MarisaB': {
          'score': 520527150,
          'status': 'good',
          'date': '2025-07-20T15:30:00',
          'replay': null,
          'detail': '日付不明',
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
          'status': 'good',
          'date': '2020-10-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'IVSTITIA': {
      'th11': {
        'ReimuA': {
          'score': 1017319160,
          'status': 'good',
          'date': '2013-10-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'IXU': {
      'th06': {
        'MarisaB': {
          'score': 538200110,
          'status': 'good',
          'date': '2011-06-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'izanze': {
      'th07Ex': {
        'MarisaA': {
          'score': 1227756190,
          'status': 'great',
          'date': '2011-02-28T15:30:00',
          'replay': null,
          'detail': '2011年2月1週',
        },
      },
    },
    'IZUNA': {
      'th07Ph': {
        'ReimuB': {
          'score': 1318107360,
          'status': 'good',
          'date': '2011-07-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'J2': {
      'th08': {
        'Magic': {
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
    'Jack': {
      'th10': {
        'ReimuA': {
          'score': 986051230,
          'status': 'great',
          'date': '2010-11-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 995337990,
          'status': 'great',
          'date': '2012-01-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 992275980,
          'status': 'great',
          'date': '2012-04-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 988560820,
          'status': 'great',
          'date': '2010-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 986704560,
          'status': 'great',
          'date': '2011-10-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1002801340,
          'status': 'great',
          'date': '2010-10-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Jespa': {
      'th11': {
        'ReimuA': {
          'score': 1019429930,
          'status': 'good',
          'date': '2011-07-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'JUNK': {
      'th07Ex': {
        'ReimuB': {
          'score': 1266132550,
          'status': 'good',
          'date': '2009-03-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'SakuyaB': {
          'score': 1483030690,
          'status': 'good',
          'date': '2009-06-20T15:30:00',
          'replay': null,
          'detail': '-',
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
    'Kaede': {
      'th07Ph': {
        'ReimuB': {
          'score': 1305944670,
          'status': 'good',
          'date': '2010-08-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 550612100,
          'status': 'good',
          'date': '2010-08-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kana_th6': {
      'th06': {
        'ReimuA': {
          'score': 605822850,
          'status': 'great',
          'date': '2025-06-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 626170860,
          'status': 'great',
          'date': '2025-02-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 605186930,
          'status': 'great',
          'date': '2025-06-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 629820130,
          'status': 'great',
          'date': '2025-02-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
          'replay': 'th18_ud0024.rpy',
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
    'kaz-穹': {
      'th10': {
        'ReimuA': {
          'score': 981691190,
          'status': 'good',
          'date': '2013-05-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 978791150,
          'status': 'good',
          'date': '2013-03-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1086394820,
          'status': 'good',
          'date': '2012-10-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kedama': {
      'th06': {
        'ReimuA': {
          'score': 509464630,
          'status': 'good',
          'date': '2023-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 551927260,
          'status': 'good',
          'date': '2023-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 505577120,
          'status': 'good',
          'date': '2023-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 562040090,
          'status': 'good',
          'date': '2023-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kag': {
      'th07Ph': {
        'ReimuB': {
          'score': 1411802930,
          'status': 'good',
          'date': '2009-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'katu': {
      'th12': {
        'SanaeB': {
          'score': 698827590,
          'status': 'good',
          'date': '2011-09-30T15:30:00',
          'replay': null,
          'detail': '2011年9月4週',
        },
      },
    },
    'keen': {
      'th06': {
        'MarisaB': {
          'score': 527569310,
          'status': 'good',
          'date': '2008-11-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kisara': {
      'th07Ph': {
        'ReimuA': {
          'score': 1305552080,
          'status': 'good',
          'date': '2012-06-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
          'replay': 'th128_ud0003.rpy',
          'detail': '-',
        },
      },
      'th17': {
        'MarisaO': {
          'score': 2015744690,
          'status': 'good',
          'date': '2019-08-30T15:30:00',
          'replay': 'th17_ud0012.rpy',
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
    'koske': {
      'th10': {
        'ReimuA': {
          'score': 955962400,
          'status': 'good',
          'date': '2012-04-17T15:30:00',
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
    'krr': {
      'th12': {
        'SanaeB': {
          'score': 679847440,
          'status': 'good',
          'date': '2011-09-30T15:30:00',
          'replay': null,
          'detail': '2011年9月4週',
        },
      },
    },
    'kurezo': {
      'th10': {
        'ReimuA': {
          'score': 980056650,
          'status': 'good',
          'date': '2009-05-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 979478550,
          'status': 'good',
          'date': '2008-11-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1040216960,
          'status': 'good',
          'date': '2008-11-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'kuro': {
      'th12': {
        'ReimuA': {
          'score': 639431090,
          'status': 'good',
          'date': '2015-08-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 527497000,
          'status': 'good',
          'date': '2025-07-22T15:30:00',
          'replay': null,
          'detail': '日付不明',
        },
        'MarisaB': {
          'score': 632809400,
          'status': 'good',
          'date': '2015-09-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 584441750,
          'status': 'good',
          'date': '2013-06-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'KURO': {
      'th07Ex': {
        'MarisaB': {
          'score': 1116024250,
          'status': 'good',
          'date': '2009-06-30T15:30:00',
          'replay': null,
          'detail': '2009年6月4週',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1418850490,
          'status': 'good',
          'date': '2009-05-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1254259620,
          'status': 'good',
          'date': '2010-09-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1327493190,
          'status': 'good',
          'date': '2009-04-19T15:30:00',
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
          'replay': 'th128_ud0006.rpy',
          'detail': '-',
        },
      },
    },
    'kuro_38': {
      'th07Ph': {
        'ReimuB': {
          'score': 1404055010,
          'status': 'good',
          'date': '2018-07-15T15:30:00',
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
      'th07Ph': {
        'ReimuB': {
          'score': 1482586870,
          'status': 'good',
          'date': '2008-09-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'LAHsty': {
      'th07Ex': {
        'ReimuA': {
          'score': 1237229180,
          'status': 'good',
          'date': '2006-09-30T15:30:00',
          'replay': null,
          'detail': '2006年9月3週',
        },
        'ReimuB': {
          'score': 1246494810,
          'status': 'good',
          'date': '2008-12-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1416757840,
          'status': 'good',
          'date': '2007-02-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1241393140,
          'status': 'good',
          'date': '2008-08-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1315654510,
          'status': 'good',
          'date': '2006-09-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Len': {
      'th06': {
        'MarisaB': {
          'score': 508213720,
          'status': 'good',
          'date': '2007-04-09T15:30:00',
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
    'lia': {
      'th12': {
        'SanaeB': {
          'score': 554451910,
          'status': 'good',
          'date': '2010-01-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Lily m3': {
      'th11': {
        'ReimuA': {
          'score': 1030810930,
          'status': 'good',
          'date': '2009-09-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Lim': {
      'th11': {
        'ReimuA': {
          'score': 1074884280,
          'status': 'good',
          'date': '2010-05-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Lorenzo': {
      'th12': {
        'ReimuB': {
          'score': 637570100,
          'status': 'great',
          'date': '2025-05-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 701301150,
          'status': 'great',
          'date': '2023-08-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'lot': {
      'th12': {
        'MarisaA': {
          'score': 532609470,
          'status': 'good',
          'date': '2011-06-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 500323530,
          'status': 'good',
          'date': '2011-05-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'lua': {
      'th07Ex': {
        'ReimuB': {
          'score': 1449881250,
          'status': 'great',
          'date': '2024-07-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'LYX': {
      'th10': {
        'ReimuA': {
          'score': 957494910,
          'status': 'good',
          'date': '2009-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 981720940,
          'status': 'good',
          'date': '2007-10-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'M@': {
      'th10': {
        'ReimuA': {
          'score': 974223650,
          'status': 'good',
          'date': '2011-09-18T15:30:00',
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
    'mael': {
      'th07Ex': {
        'MarisaA': {
          'score': 1256644060,
          'status': 'great',
          'date': '2006-05-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Maribel Hearn': {
      'th06': {
        'MarisaB': {
          'score': 502276420,
          'status': 'good',
          'date': '2017-03-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'maru3': {
      'th10': {
        'ReimuB': {
          'score': 951962560,
          'status': 'good',
          'date': '2012-07-08T15:30:00',
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
    'May_lily': {
      'th12': {
        'SanaeB': {
          'score': 669182310,
          'status': 'good',
          'date': '2013-05-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MB': {
      'th10': {
        'ReimuB': {
          'score': 975303690,
          'status': 'good',
          'date': '2008-10-31T15:30:00',
          'replay': null,
          'detail': '2008年10月4週',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1091342390,
          'status': 'good',
          'date': '2019-01-31T15:30:00',
          'replay': null,
          'detail': '2009年1月1～2週',
        },
        'MarisaA': {
          'score': 1080545050,
          'status': 'good',
          'date': '2009-01-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 626843550,
          'status': 'good',
          'date': '2011-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'MDAL': {
      'th10': {
        'ReimuA': {
          'score': 966772160,
          'status': 'good',
          'date': '2007-10-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'mekemeke': {
      'th10': {
        'ReimuB': {
          'score': 957815140,
          'status': 'good',
          'date': '2012-03-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Melis': {
      'th07Ex': {
        'ReimuB': {
          'score': 1224133600,
          'status': 'good',
          'date': '2017-11-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'mengo': {
      'th12': {
        'SanaeB': {
          'score': 634714200,
          'status': 'good',
          'date': '2017-08-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'metal': {
      'th10': {
        'ReimuB': {
          'score': 975272180,
          'status': 'good',
          'date': '2008-03-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'miluky': {
      'th11': {
        'ReimuA': {
          'score': 1009494210,
          'status': 'good',
          'date': '2009-06-19T15:30:00',
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
    'Mint': {
      'th06': {
        'MarisaB': {
          'score': 571579450,
          'status': 'good',
          'date': '2008-10-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'mk': {
      'th10': {
        'MarisaA': {
          'score': 967819040,
          'status': 'good',
          'date': '2009-01-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'mkr': {
      'th06': {
        'MarisaB': {
          'score': 505408690,
          'status': 'good',
          'date': '2018-11-14T15:30:00',
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
    'monkey': {
      'th07Ph': {
        'ReimuB': {
          'score': 1423217660,
          'status': 'good',
          'date': '2008-07-27T15:30:00',
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
      'th12': {
        'SanaeB': {
          'score': 542089160,
          'status': 'good',
          'date': '2009-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
          'replay': 'th18_ud0006.rpy',
          'detail': '-',
        },
      },
    },
    'mys': {
      'th16': {
        'Reimu': {
          'score': 2143910400,
          'status': 'good',
          'date': '2017-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'NAG': {
      'th10': {
        'ReimuA': {
          'score': 952860940,
          'status': 'good',
          'date': '2009-03-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'NALIS': {
      'th07Ex': {
        'ReimuA': {
          'score': 1163856490,
          'status': 'good',
          'date': '2011-07-31T15:30:00',
          'replay': null,
          'detail': '2011年7月5週',
        },
        'ReimuB': {
          'score': 1329591520,
          'status': 'good',
          'date': '2011-11-30T15:30:00',
          'replay': null,
          'detail': '2011年11月4週',
        },
        'MarisaA': {
          'score': 1177154610,
          'status': 'good',
          'date': '2011-06-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1174931660,
          'status': 'good',
          'date': '2012-08-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1152838630,
          'status': 'good',
          'date': '2011-04-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1202340040,
          'status': 'good',
          'date': '2011-08-31T15:30:00',
          'replay': null,
          'detail': '2011年8月1週',
        },
      },
    },
    'NAPPA': {
      'th11': {
        'ReimuA': {
          'score': 1036106460,
          'status': 'good',
          'date': '2010-06-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Nereid': {
      'th10': {
        'ReimuA': {
          'score': 959416410,
          'status': 'good',
          'date': '2011-10-31T15:30:00',
          'replay': null,
          'detail': '2011年10月1週',
        },
      },
    },
    'NIA': {
      'th12': {
        'ReimuA': {
          'score': 594658180,
          'status': 'good',
          'date': '2012-07-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'NIL': {
      'th12': {
        'SanaeB': {
          'score': 606507320,
          'status': 'good',
          'date': '2010-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'NKS': {
      'th06': {
        'MarisaB': {
          'score': 505466330,
          'status': 'good',
          'date': '2009-07-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'NMST': {
      'th11': {
        'ReimuA': {
          'score': 1005103990,
          'status': 'good',
          'date': '2011-03-26T15:30:00',
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
          'replay': 'th18_ud0020.rpy',
          'detail': '-',
        },
        'Marisa': {
          'score': 3269976250,
          'status': 'good',
          'date': '2025-06-01T15:30:00',
          'replay': 'th18_ud0022.rpy',
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
          'replay': 'th18_ud0021.rpy',
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
      'th10': {
        'ReimuA': {
          'score': 965591520,
          'status': 'good',
          'date': '2010-01-31T15:30:00',
          'replay': null,
          'detail': '2010年1月1～2週',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 608159010,
          'status': 'good',
          'date': '2025-07-21T15:30:00',
          'replay': null,
          'detail': '日付不明',
        },
        'SanaeA': {
          'score': 607704640,
          'status': 'good',
          'date': '2011-02-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 712449110,
          'status': 'great',
          'date': '2010-12-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'nnh': {
      'th10': {
        'MarisaB': {
          'score': 964506520,
          'status': 'good',
          'date': '2012-08-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Nylilsa': {
      'th12': {
        'ReimuA': {
          'score': 590211840,
          'status': 'good',
          'date': '2025-03-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'OGA': {
      'th11': {
        'ReimuB': {
          'score': 1009105560,
          'status': 'good',
          'date': '2011-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'OGASA': {
      'th07Ph': {
        'MarisaA': {
          'score': 1247736790,
          'status': 'good',
          'date': '2006-10-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'OHMORI': {
      'th10': {
        'ReimuA': {
          'score': 951772720,
          'status': 'good',
          'date': '2010-04-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'omega': {
      'th12': {
        'ReimuA': {
          'score': 651364160,
          'status': 'great',
          'date': '2013-07-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 615200470,
          'status': 'good',
          'date': '2013-07-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 681606020,
          'status': 'good',
          'date': '2013-09-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 630651970,
          'status': 'good',
          'date': '2013-12-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 639197870,
          'status': 'good',
          'date': '2013-11-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 712183120,
          'status': 'great',
          'date': '2013-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'OOSAKA': {
      'th06': {
        'ReimuA': {
          'score': 629609710,
          'status': 'great',
          'date': '2014-06-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 654356450,
          'status': 'great',
          'date': '2018-01-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 641990230,
          'status': 'great',
          'date': '2022-06-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 663244220,
          'status': 'great',
          'date': '2015-02-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 957882520,
          'status': 'good',
          'date': '2009-03-12T15:30:00',
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
    'Oriens': {
      'th11': {
        'ReimuA': {
          'score': 1124018370,
          'status': 'great',
          'date': '2025-04-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1121814290,
          'status': 'great',
          'date': '2025-07-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1012413380,
          'status': 'good',
          'date': '2023-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1017182820,
          'status': 'good',
          'date': '2023-04-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1011171940,
          'status': 'good',
          'date': '2023-04-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1009886400,
          'status': 'good',
          'date': '2023-04-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'OYM': {
      'th11': {
        'ReimuA': {
          'score': 1034623660,
          'status': 'good',
          'date': '2011-10-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'PARU': {
      'th11': {
        'ReimuA': {
          'score': 1019339100,
          'status': 'good',
          'date': '2009-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 558641310,
          'status': 'good',
          'date': '2012-12-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Payne': {
      'th10': {
        'ReimuA': {
          'score': 962925440,
          'status': 'good',
          'date': '2009-05-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1044068190,
          'status': 'good',
          'date': '2009-01-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Phar': {
      'th10': {
        'ReimuA': {
          'score': 983372440,
          'status': 'good',
          'date': '2009-08-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'purple': {
      'th11': {
        'ReimuA': {
          'score': 1032339650,
          'status': 'good',
          'date': '2016-03-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Qronism': {
      'th10': {
        'MarisaA': {
          'score': 959498460,
          'status': 'good',
          'date': '2008-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'QsyaN': {
      'th10': {
        'ReimuA': {
          'score': 956259070,
          'status': 'good',
          'date': '2009-06-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'R/': {
      'th07Ex': {
        'SakuyaB': {
          'score': 1253947840,
          'status': 'good',
          'date': '2005-11-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1355766970,
          'status': 'good',
          'date': '2004-02-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Radet': {
      'th06': {
        'MarisaB': {
          'score': 584527580,
          'status': 'good',
          'date': '2019-12-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'rafin': {
      'th07Ph': {
        'ReimuB': {
          'score': 1509272800,
          'status': 'good',
          'date': '2008-03-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Raharl': {
      'th06': {
        'ReimuB': {
          'score': 536008990,
          'status': 'good',
          'date': '2010-10-05T15:30:00',
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
    'raiu': {
      'th12': {
        'SanaeB': {
          'score': 506790060,
          'status': 'good',
          'date': '2011-11-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'raiuraiu': {
      'th10': {
        'ReimuA': {
          'score': 973019240,
          'status': 'good',
          'date': '2010-06-30T15:30:00',
          'replay': null,
          'detail': '2010年6月4週',
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
    'Rb': {
      'th06': {
        'MarisaB': {
          'score': 573453620,
          'status': 'good',
          'date': '2009-07-12T15:30:00',
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
          'replay': 'th18_ud0014.rpy',
          'detail': '-',
        },
      },
    },
    'Rem': {
      'th10': {
        'ReimuA': {
          'score': 960497890,
          'status': 'good',
          'date': '2010-01-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Reprise': {
      'th06': {
        'MarisaB': {
          'score': 513237810,
          'status': 'good',
          'date': '2009-01-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'rikue471': {
      'th11': {
        'ReimuA': {
          'score': 1001364970,
          'status': 'good',
          'date': '2020-04-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Rix': {
      'th11': {
        'ReimuA': {
          'score': 1032773790,
          'status': 'good',
          'date': '2010-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Riz': {
      'th12': {
        'ReimuB': {
          'score': 615909690,
          'status': 'good',
          'date': '2015-11-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Roby': {
      'th12': {
        'ReimuA': {
          'score': 530622760,
          'status': 'good',
          'date': '2025-03-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'ROLL': {
      'th07Ph': {
        'ReimuB': {
          'score': 1304527100,
          'status': 'good',
          'date': '2012-01-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ROMAS': {
      'th11': {
        'ReimuA': {
          'score': 1020124590,
          'status': 'good',
          'date': '2013-07-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ROS': {
      'th06': {
        'MarisaB': {
          'score': 531081720,
          'status': 'good',
          'date': '2009-05-31T15:30:00',
          'replay': null,
          'detail': '2009年5月4週',
        },
      },
    },
    'rose': {
      'th12': {
        'ReimuA': {
          'score': 528917010,
          'status': 'good',
          'date': '2013-05-11T15:30:00',
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
          'replay': 'th18_ud0005.rpy',
          'detail': '-',
        },
      },
    },
    'rrrrrrrr': {
      'th07Ex': {
        'SakuyaA': {
          'score': 1221832860,
          'status': 'great',
          'date': '2008-08-31T15:30:00',
          'replay': null,
          'detail': '2008年8月4週',
        },
      },
    },
    'Ryo': {
      'th07Ph': {
        'ReimuA': {
          'score': 1222373430,
          'status': 'good',
          'date': '2006-03-31T15:30:00',
          'replay': null,
          'detail': '2006年3月1週',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 953468670,
          'status': 'good',
          'date': '2011-02-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1014382170,
          'status': 'good',
          'date': '2010-02-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'S.K': {
      'th10': {
        'ReimuA': {
          'score': 971368680,
          'status': 'good',
          'date': '2025-02-18T15:30:00',
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
        'Marisa': {
          'score': 2393635340,
          'status': 'good',
          'date': '2013-03-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SeunKey': {
      'th07Ph': {
        'ReimuB': {
          'score': 1326147420,
          'status': 'good',
          'date': '2005-11-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'seventh': {
      'th10': {
        'ReimuA': {
          'score': 986510810,
          'status': 'great',
          'date': '2017-11-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 995609930,
          'status': 'great',
          'date': '2017-07-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 993681350,
          'status': 'great',
          'date': '2010-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 990867060,
          'status': 'great',
          'date': '2017-08-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 988226530,
          'status': 'great',
          'date': '2018-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1002420580,
          'status': 'great',
          'date': '2018-09-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'shigure': {
      'th10': {
        'ReimuB': {
          'score': 978037330,
          'status': 'good',
          'date': '2008-12-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'shin': {
      'th06': {
        'ReimuB': {
          'score': 521089490,
          'status': 'good',
          'date': '2009-04-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1004793000,
          'status': 'good',
          'date': '2008-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ShiN': {
      'th07Ph': {
        'ReimuB': {
          'score': 1348938660,
          'status': 'good',
          'date': '2012-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Sir雁木': {
      'th06': {
        'MarisaB': {
          'score': 608183070,
          'status': 'great',
          'date': '2015-03-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SK': {
      'th11': {
        'ReimuA': {
          'score': 1018034010,
          'status': 'good',
          'date': '2011-08-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 615029380,
          'status': 'good',
          'date': '2011-08-11T15:30:00',
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
          'date': '2025-06-11T15:30:00',
          'replay': 'th18_ud0019.rpy',
          'detail': '-',
        },
      },
    },
    'SOC': {
      'th12': {
        'SanaeB': {
          'score': 728529380,
          'status': 'great',
          'date': '2017-10-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Sphere': {
      'th10': {
        'ReimuB': {
          'score': 951700730,
          'status': 'good',
          'date': '2009-02-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SR': {
      'th10': {
        'ReimuB': {
          'score': 962442730,
          'status': 'good',
          'date': '2008-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'SRT': {
      'th10': {
        'ReimuA': {
          'score': 959021870,
          'status': 'good',
          'date': '2021-01-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'stera': {
      'th07Ex': {
        'ReimuA': {
          'score': 1149582130,
          'status': 'good',
          'date': '2009-06-30T15:30:00',
          'replay': null,
          'detail': '2009年6月1週',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 965694930,
          'status': 'good',
          'date': '2009-03-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'STI': {
      'th06': {
        'MarisaB': {
          'score': 531172150,
          'status': 'good',
          'date': '2024-02-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuC': {
          'score': 1056453880,
          'status': 'great',
          'date': '2024-07-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1108671250,
          'status': 'great',
          'date': '2024-06-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1060690130,
          'status': 'great',
          'date': '2024-07-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'SUKIMA': {
      'th06': {
        'MarisaB': {
          'score': 592043080,
          'status': 'good',
          'date': '2010-07-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1501016830,
          'status': 'good',
          'date': '2008-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 990271160,
          'status': 'great',
          'date': '2010-06-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1070411550,
          'status': 'good',
          'date': '2009-01-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'T': {
      'th12': {
        'ReimuA': {
          'score': 647986940,
          'status': 'good',
          'date': '2012-08-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'T3': {
      'th06': {
        'ReimuB': {
          'score': 524923440,
          'status': 'good',
          'date': '2012-04-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 580941290,
          'status': 'good',
          'date': '2012-04-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 988582160,
          'status': 'good',
          'date': '2012-04-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 993400310,
          'status': 'good',
          'date': '2012-04-19T15:30:00',
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
    'TA': {
      'th06': {
        'ReimuB': {
          'score': 518002620,
          'status': 'good',
          'date': '2010-07-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 513532640,
          'status': 'good',
          'date': '2010-07-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'tabi': {
      'th10': {
        'MarisaC': {
          'score': 960683900,
          'status': 'good',
          'date': '2007-12-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'take4': {
      'th10': {
        'ReimuA': {
          'score': 950942290,
          'status': 'good',
          'date': '2013-09-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'tatu': {
      'th12': {
        'ReimuA': {
          'score': 506458510,
          'status': 'good',
          'date': '2009-10-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'TEN': {
      'th11': {
        'ReimuA': {
          'score': 1031391630,
          'status': 'good',
          'date': '2010-02-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Tera': {
      'th07Ph': {
        'MarisaA': {
          'score': 1237474350,
          'status': 'good',
          'date': '2003-09-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'TESLA': {
      'th12': {
        'SanaeB': {
          'score': 535898150,
          'status': 'good',
          'date': '2009-10-09T15:30:00',
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
    'TOK@CHI': {
      'th07Ex': {
        'ReimuB': {
          'score': 1274806880,
          'status': 'good',
          'date': '2008-07-30T15:30:00',
          'replay': null,
          'detail': '2008年7月4週',
        },
      },
    },
    'TOMOAKI': {
      'th12': {
        'SanaeB': {
          'score': 514293780,
          'status': 'good',
          'date': '2011-03-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'tos': {
      'th11': {
        'ReimuA': {
          'score': 1016200830,
          'status': 'good',
          'date': '2013-02-16T15:30:00',
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
          'replay': 'th128_ud0009.rpy',
          'detail': '-',
        },
      },
    },
    'TrickOfHat': {
      'th06': {
        'ReimuB': {
          'score': 520842340,
          'status': 'good',
          'date': '2022-07-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 503622300,
          'status': 'good',
          'date': '2025-06-06T15:30:00',
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
          'replay': 'th17_ud0007.rpy',
          'detail': '-',
        },
        'YoumuO': {
          'score': 1834783090,
          'status': 'good',
          'date': '2020-03-01T15:30:00',
          'replay': 'th17_ud0014.rpy',
          'detail': '-',
        },
      },
      'th18': {
        'Sakuya': {
          'score': 7125171680,
          'status': 'great',
          'date': '2022-03-13T15:30:00',
          'replay': 'th18_ud0003.rpy',
          'detail': '-',
        },
      },
    },
    'tsuki': {
      'th11': {
        'ReimuA': {
          'score': 1003236760,
          'status': 'good',
          'date': '2008-09-19T15:30:00',
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
    'TYSI': {
      'th07Ph': {
        'ReimuB': {
          'score': 1487572920,
          'status': 'good',
          'date': '2007-01-31T15:30:00',
          'replay': null,
          'detail': '2007年1月1～2週',
        },
      },
    },
    'unfair': {
      'th10': {
        'ReimuA': {
          'score': 962256580,
          'status': 'good',
          'date': '2010-04-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'URARA': {
      'th12': {
        'SanaeB': {
          'score': 550552180,
          'status': 'good',
          'date': '2011-06-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'USK': {
      'th07Ex': {
        'ReimuB': {
          'score': 1228843090,
          'status': 'good',
          'date': '2006-11-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1112946110,
          'status': 'good',
          'date': '2007-05-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Vrea': {
      'th06': {
        'ReimuB': {
          'score': 528849980,
          'status': 'good',
          'date': '2015-01-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'VX': {
      'th07Ph': {
        'ReimuB': {
          'score': 1364594660,
          'status': 'good',
          'date': '2006-10-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1347620750,
          'status': 'good',
          'date': '2006-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1298803760,
          'status': 'good',
          'date': '2007-01-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1315215660,
          'status': 'good',
          'date': '2006-09-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1364860520,
          'status': 'good',
          'date': '2007-02-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'wal': {
      'th11': {
        'ReimuA': {
          'score': 1061292790,
          'status': 'good',
          'date': '2016-11-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 725648860,
          'status': 'great',
          'date': '2017-06-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Watan': {
      'th06': {
        'MarisaA': {
          'score': 610750670,
          'status': 'great',
          'date': '2010-08-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 648082420,
          'status': 'great',
          'date': '2010-11-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Waterricekiller': {
      'th06': {
        'ReimuB': {
          'score': 513042270,
          'status': 'good',
          'date': '2020-01-13T15:30:00',
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
    'WingZero520': {
      'th10': {
        'MarisaC': {
          'score': 956556200,
          'status': 'good',
          'date': '2009-03-08T15:30:00',
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
      'th10': {
        'ReimuA': {
          'score': 986075910,
          'status': 'great',
          'date': '2012-03-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 995566970,
          'status': 'great',
          'date': '2013-06-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 991157800,
          'status': 'great',
          'date': '2011-04-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 990797120,
          'status': 'great',
          'date': '2010-08-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 982177620,
          'status': 'good',
          'date': '2011-07-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1002284650,
          'status': 'great',
          'date': '2010-10-09T15:30:00',
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
    'XJL': {
      'th11': {
        'ReimuA': {
          'score': 1010801990,
          'status': 'good',
          'date': '2011-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'xrk': {
      'th06': {
        'ReimuB': {
          'score': 552773940,
          'status': 'good',
          'date': '2010-08-31T15:30:00',
          'replay': null,
          'detail': '2010年8月4週',
        },
      },
    },
    'YABU': {
      'th06': {
        'MarisaB': {
          'score': 501098260,
          'status': 'good',
          'date': '2011-02-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
      'th10': {
        'ReimuA': {
          'score': 956742900,
          'status': 'good',
          'date': '2010-06-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1031645050,
          'status': 'good',
          'date': '2010-06-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'yahoobb': {
      'th16': {
        'Reimu': {
          'score': 2148870360,
          'status': 'good',
          'date': '2018-01-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
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
    'YM': {
      'th11': {
        'ReimuA': {
          'score': 1021348370,
          'status': 'good',
          'date': '2012-03-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'You': {
      'th11': {
        'ReimuA': {
          'score': 1009381240,
          'status': 'good',
          'date': '2011-10-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YS': {
      'th06': {
        'MarisaB': {
          'score': 517007960,
          'status': 'good',
          'date': '2010-03-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Y.S': {
      'th11': {
        'ReimuA': {
          'score': 1090464910,
          'status': 'good',
          'date': '2013-07-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'YSZK': {
      'th11': {
        'ReimuC': {
          'score': 1000686060,
          'status': 'good',
          'date': '2013-03-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'yuiel': {
      'th10': {
        'ReimuA': {
          'score': 977518020,
          'status': 'good',
          'date': '2020-10-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuB': {
          'score': 1007328740,
          'status': 'good',
          'date': '2020-10-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'yukarin': {
      'th11': {
        'ReimuA': {
          'score': 1056433100,
          'status': 'good',
          'date': '2009-09-30T15:30:00',
          'replay': null,
          'detail': '2009年9月1週',
        },
      },
    },
    'yuki': {
      'th12': {
        'ReimuA': {
          'score': 533754870,
          'status': 'good',
          'date': '2015-08-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 508481310,
          'status': 'good',
          'date': '2015-08-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 536006290,
          'status': 'good',
          'date': '2015-08-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 509017260,
          'status': 'good',
          'date': '2015-08-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 509723090,
          'status': 'good',
          'date': '2015-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 528553320,
          'status': 'good',
          'date': '2015-08-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'yume': {
      'th10': {
        'MarisaC': {
          'score': 986073850,
          'status': 'good',
          'date': '2011-03-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Yuriko': {
      'th07Ph': {
        'ReimuB': {
          'score': 1480126460,
          'status': 'good',
          'date': '2020-08-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Yyk': {
      'th06': {
        'MarisaB': {
          'score': 552705160,
          'status': 'good',
          'date': '2009-04-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1029943440,
          'status': 'good',
          'date': '2009-03-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'Zenmaister': {
      'th10': {
        'ReimuA': {
          'score': 984145920,
          'status': 'good',
          'date': '2025-06-11T15:30:00',
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
    'zjt': {
      'th11': {
        'ReimuA': {
          'score': 1000014490,
          'status': 'good',
          'date': '2019-08-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ＥＢＩ': {
      'th10': {
        'ReimuB': {
          'score': 967537530,
          'status': 'good',
          'date': '2009-11-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ＥＳＣ': {
      'th10': {
        'ReimuA': {
          'score': 962576640,
          'status': 'good',
          'date': '2011-05-31T15:30:00',
          'replay': null,
          'detail': '2011年5月4週',
        },
      },
    },
    'ＫＡＳＳ': {
      'th12': {
        'MarisaB': {
          'score': 513745080,
          'status': 'good',
          'date': '2009-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 532299220,
          'status': 'good',
          'date': '2009-10-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'K・G': {
      'th06': {
        'ReimuB': {
          'score': 510485380,
          'status': 'good',
          'date': '2016-09-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 505301660,
          'status': 'good',
          'date': '2015-01-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 960868520,
          'status': 'good',
          'date': '2016-02-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 954410310,
          'status': 'good',
          'date': '2016-06-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 965996030,
          'status': 'good',
          'date': '2017-11-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1100554220,
          'status': 'great',
          'date': '2019-07-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1045778130,
          'status': 'good',
          'date': '2024-10-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1008935100,
          'status': 'good',
          'date': '2016-05-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1039534280,
          'status': 'good',
          'date': '2021-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1037096390,
          'status': 'good',
          'date': '2020-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1008252680,
          'status': 'good',
          'date': '2018-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 611086390,
          'status': 'good',
          'date': '2014-06-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 540546990,
          'status': 'good',
          'date': '2023-09-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 635333190,
          'status': 'good',
          'date': '2023-09-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 605559990,
          'status': 'good',
          'date': '2017-04-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 610641670,
          'status': 'good',
          'date': '2023-09-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 701644660,
          'status': 'great',
          'date': '2018-08-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th128': {
        'Cirno': {
          'score': 90042950,
          'status': 'good',
          'date': '2017-03-23T15:30:00',
          'replay': 'th128_ud0014.rpy',
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
          'date': '2018-04-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 749377630,
          'status': 'good',
          'date': '2023-09-30T15:30:00',
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
          'status': 'good',
          'date': '2022-01-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 816484120,
          'status': 'great',
          'date': '2016-11-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th15': {
        'Reimu': {
          'score': 809292250,
          'status': 'good',
          'date': '2024-05-10T15:30:00',
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
          'replay': 'th17_ud0023.rpy',
          'detail': '-',
        },
        'ReimuE': {
          'score': 1379151480,
          'status': 'good',
          'date': '2023-04-30T15:30:00',
          'replay': 'th17_ud0024.rpy',
          'detail': '-',
        },
        'MarisaW': {
          'score': 1199399640,
          'status': 'good',
          'date': '2023-04-27T15:30:00',
          'replay': 'th17_ud0025.rpy',
          'detail': '-',
        },
        'MarisaO': {
          'score': 2044820040,
          'status': 'good',
          'date': '2023-04-22T15:30:00',
          'replay': 'th17_ud0009.rpy',
          'detail': '-',
        },
        'MarisaE': {
          'score': 1150410950,
          'status': 'good',
          'date': '2023-04-23T15:30:00',
          'replay': 'th17_ud0026.rpy',
          'detail': '-',
        },
        'YoumuW': {
          'score': 1161941880,
          'status': 'good',
          'date': '2023-04-25T15:30:00',
          'replay': 'th17_ud0027.rpy',
          'detail': '-',
        },
        'YoumuO': {
          'score': 2152018890,
          'status': 'good',
          'date': '2023-05-07T15:30:00',
          'replay': 'th17_ud0008.rpy',
          'detail': '-',
        },
        'YoumuE': {
          'score': 1118202850,
          'status': 'good',
          'date': '2023-04-24T15:30:00',
          'replay': 'th17_ud0028.rpy',
          'detail': '-',
        },
      },
      'th18': {
        'Marisa': {
          'score': 3163509820,
          'status': 'good',
          'date': '2022-12-25T15:30:00',
          'replay': 'th18_ud0023.rpy',
          'detail': '-',
        },
        'Sakuya': {
          'score': 5412611850,
          'status': 'good',
          'date': '2023-08-14T15:30:00',
          'replay': 'th18_ud0013.rpy',
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
    'Ｓ２': {
      'th06': {
        'MarisaB': {
          'score': 604187480,
          'status': 'great',
          'date': '2009-10-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '２': {
      'th12': {
        'ReimuB': {
          'score': 551408730,
          'status': 'good',
          'date': '2010-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 601470080,
          'status': 'good',
          'date': '2010-07-14T15:30:00',
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
    'あねみ': {
      'th10': {
        'MarisaC': {
          'score': 1000000780,
          'status': 'great',
          'date': '2022-03-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1114825350,
          'status': 'great',
          'date': '2022-12-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1071865750,
          'status': 'good',
          'date': '2020-11-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1054179620,
          'status': 'great',
          'date': '2021-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1091925300,
          'status': 'good',
          'date': '2022-06-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1082918330,
          'status': 'good',
          'date': '2022-08-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1056154670,
          'status': 'great',
          'date': '2022-05-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'あみじゃ+': {
      'th10': {
        'ReimuA': {
          'score': 951962560,
          'status': 'good',
          'date': '2010-03-31T15:30:00',
          'replay': null,
          'detail': '2010年3月2週',
        },
      },
    },
    'いそじん': {
      'th11': {
        'ReimuA': {
          'score': 1005562410,
          'status': 'good',
          'date': '2011-07-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'いな': {
      'th07Ex': {
        'ReimuA': {
          'score': 1400641310,
          'status': 'great',
          'date': '2017-09-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1504562180,
          'status': 'great',
          'date': '2021-10-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1306020210,
          'status': 'great',
          'date': '2025-03-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1244834970,
          'status': 'great',
          'date': '2015-12-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1323591150,
          'status': 'great',
          'date': '2018-06-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1412782710,
          'status': 'great',
          'date': '2016-07-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1231583680,
          'status': 'good',
          'date': '2016-03-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'いむ': {
      'th10': {
        'ReimuA': {
          'score': 963419700,
          'status': 'good',
          'date': '2010-11-13T15:30:00',
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
    'えすか': {
      'th11': {
        'ReimuA': {
          'score': 1012028160,
          'status': 'good',
          'date': '2018-06-09T15:30:00',
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
    'おいたん': {
      'th11': {
        'ReimuA': {
          'score': 1135696210,
          'status': 'great',
          'date': '2025-03-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おさらぎ': {
      'th10': {
        'MarisaC': {
          'score': 1000325780,
          'status': 'great',
          'date': '2016-11-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おすろのこ': {
      'th11': {
        'ReimuA': {
          'score': 1066819350,
          'status': 'good',
          'date': '2025-02-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おとど': {
      'th13': {
        'Youmu': {
          'score': 587938010,
          'status': 'good',
          'date': '2016-11-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'おレモン': {
      'th11': {
        'ReimuA': {
          'score': 1053167040,
          'status': 'good',
          'date': '2019-05-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
      'th07Ph': {
        'ReimuB': {
          'score': 1334483640,
          'status': 'good',
          'date': '2009-12-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th128': {
        'Cirno': {
          'score': 96925700,
          'status': 'good',
          'date': '2012-09-11T15:30:00',
          'replay': 'th128_ud0005.rpy',
          'detail': '-',
        },
      },
    },
    'かふか': {
      'th07Ph': {
        'ReimuB': {
          'score': 1573517240,
          'status': 'good',
          'date': '2011-10-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'かも猫': {
      'th11': {
        'ReimuA': {
          'score': 1024187170,
          'status': 'good',
          'date': '2021-08-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'きゅーめい': {
      'th06': {
        'ReimuB': {
          'score': 537864590,
          'status': 'good',
          'date': '2009-01-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 975018860,
          'status': 'good',
          'date': '2008-11-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 984954900,
          'status': 'good',
          'date': '2009-05-18T15:30:00',
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
    'ぐるぼう': {
      'th07Ex': {
        'ReimuB': {
          'score': 1238041760,
          'status': 'good',
          'date': '2025-07-20T15:30:00',
          'replay': null,
          'detail': '日付不明',
        },
      },
    },
    'けいと': {
      'th12': {
        'ReimuA': {
          'score': 601774970,
          'status': 'good',
          'date': '2015-08-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'こーりん': {
      'th11': {
        'ReimuA': {
          'score': 1000728120,
          'status': 'good',
          'date': '2018-12-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'こあ': {
      'th12': {
        'SanaeB': {
          'score': 560623620,
          'status': 'good',
          'date': '2014-01-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'こてっち!!': {
      'th11': {
        'ReimuA': {
          'score': 1029415110,
          'status': 'good',
          'date': '2009-06-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ごぼう': {
      'th06': {
        'ReimuB': {
          'score': 615965190,
          'status': 'great',
          'date': '2025-05-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1084103090,
          'status': 'good',
          'date': '2019-05-04T15:30:00',
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
    'さとりのメジロ': {
      'th11': {
        'ReimuA': {
          'score': 1070114950,
          'status': 'good',
          'date': '2021-12-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1025086640,
          'status': 'good',
          'date': '2021-08-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1003261400,
          'status': 'good',
          'date': '2021-09-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1021902940,
          'status': 'good',
          'date': '2021-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1018710690,
          'status': 'good',
          'date': '2021-09-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1010006890,
          'status': 'good',
          'date': '2021-08-09T15:30:00',
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
    'しえすたチャンネル': {
      'th10': {
        'ReimuA': {
          'score': 959328350,
          'status': 'good',
          'date': '2021-01-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'したじき': {
      'th06': {
        'ReimuB': {
          'score': 522674610,
          'status': 'good',
          'date': '2012-03-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'しもしもしも': {
      'th10': {
        'ReimuB': {
          'score': 967803700,
          'status': 'good',
          'date': '2009-09-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'すいれん': {
      'th10': {
        'ReimuA': {
          'score': 984266660,
          'status': 'good',
          'date': '2021-02-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 540727560,
          'status': 'good',
          'date': '2013-08-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th17': {
        'ReimuW': {
          'score': 1054209460,
          'status': 'good',
          'date': '2020-08-23T15:30:00',
          'replay': 'th17_ud0031.rpy',
          'detail': '-',
        },
        'ReimuO': {
          'score': 2479160420,
          'status': 'good',
          'date': '2020-07-30T15:30:00',
          'replay': 'th17_ud0003.rpy',
          'detail': '-',
        },
        'MarisaW': {
          'score': 1148007840,
          'status': 'good',
          'date': '2020-04-19T15:30:00',
          'replay': 'th17_ud0032.rpy',
          'detail': '-',
        },
        'MarisaO': {
          'score': 2774430020,
          'status': 'great',
          'date': '2020-09-23T15:30:00',
          'replay': 'th17_ud0001.rpy',
          'detail': '-',
        },
        'YoumuW': {
          'score': 1071337250,
          'status': 'good',
          'date': '2020-04-18T15:30:00',
          'replay': 'th17_ud0033.rpy',
          'detail': '-',
        },
        'YoumuO': {
          'score': 2346367160,
          'status': 'good',
          'date': '2019-11-30T15:30:00',
          'replay': 'th17_ud0006.rpy',
          'detail': '-',
        },
      },
      'th18': {
        'Sakuya': {
          'score': 6931475560,
          'status': 'good',
          'date': '2021-08-22T15:30:00',
          'replay': 'th18_ud0004.rpy',
          'detail': '-',
        },
      },
    },
    'たなかさつ': {
      'th12': {
        'MarisaB': {
          'score': 614010570,
          'status': 'good',
          'date': '2011-03-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'たろー': {
      'th06': {
        'ReimuA': {
          'score': 517440800,
          'status': 'good',
          'date': '2008-02-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1265593510,
          'status': 'good',
          'date': '2007-08-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1528586370,
          'status': 'good',
          'date': '2008-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th08': {
        'Youmu': {
          'score': 2466877810,
          'status': 'good',
          'date': '2006-12-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 974161940,
          'status': 'good',
          'date': '2007-12-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 985820900,
          'status': 'good',
          'date': '2007-12-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 990074570,
          'status': 'good',
          'date': '2007-12-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1098956450,
          'status': 'good',
          'date': '2008-11-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1001763180,
          'status': 'good',
          'date': '2008-10-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1025315690,
          'status': 'good',
          'date': '2008-10-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1062018710,
          'status': 'good',
          'date': '2008-10-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1017550010,
          'status': 'good',
          'date': '2008-10-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 582691420,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 508188950,
          'status': 'good',
          'date': '2009-09-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 536549100,
          'status': 'good',
          'date': '2009-09-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 526553320,
          'status': 'good',
          'date': '2009-09-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 606211860,
          'status': 'good',
          'date': '2009-10-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 703008050,
          'status': 'great',
          'date': '2009-10-04T15:30:00',
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
    'てつの部屋': {
      'th07Ph': {
        'SakuyaB': {
          'score': 1320623090,
          'status': 'good',
          'date': '2010-08-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 642995700,
          'status': 'good',
          'date': '2010-04-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'とくそん': {
      'th10': {
        'MarisaC': {
          'score': 976627020,
          'status': 'good',
          'date': '2009-06-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'とっくり': {
      'th07Ph': {
        'ReimuA': {
          'score': 1373113670,
          'status': 'good',
          'date': '2004-04-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1432884780,
          'status': 'good',
          'date': '2004-07-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'とん': {
      'th11': {
        'ReimuA': {
          'score': 1038126130,
          'status': 'good',
          'date': '2009-11-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ななまる': {
      'th10': {
        'ReimuA': {
          'score': 987343680,
          'status': 'great',
          'date': '2012-05-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1003229380,
          'status': 'great',
          'date': '2012-06-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'にぼし': {
      'th06': {
        'ReimuA': {
          'score': 521987940,
          'status': 'good',
          'date': '2008-07-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 565070680,
          'status': 'good',
          'date': '2008-07-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 541740150,
          'status': 'good',
          'date': '2008-07-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 575153530,
          'status': 'good',
          'date': '2006-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ex': {
        'ReimuA': {
          'score': 1367691480,
          'status': 'great',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1301526570,
          'status': 'good',
          'date': '2006-05-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1234089110,
          'status': 'great',
          'date': '2008-12-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1216258280,
          'status': 'great',
          'date': '2008-12-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1264549750,
          'status': 'great',
          'date': '2009-01-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1351758420,
          'status': 'great',
          'date': '2008-12-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1444178740,
          'status': 'good',
          'date': '2010-07-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1617800080,
          'status': 'great',
          'date': '2010-07-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1434787470,
          'status': 'great',
          'date': '2010-07-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1321815630,
          'status': 'good',
          'date': '2006-09-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1434152010,
          'status': 'great',
          'date': '2010-07-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1514564150,
          'status': 'great',
          'date': '2007-03-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'にゃんこ': {
      'th10': {
        'ReimuA': {
          'score': 984490850,
          'status': 'good',
          'date': '2024-06-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1005967030,
          'status': 'good',
          'date': '2008-11-30T15:30:00',
          'replay': null,
          'detail': '2008年11月1週',
        },
        'ReimuB': {
          'score': 1016345360,
          'status': 'good',
          'date': '2012-09-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1011877090,
          'status': 'good',
          'date': '2012-09-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1019929710,
          'status': 'good',
          'date': '2012-09-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1006600880,
          'status': 'good',
          'date': '2012-09-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1007713930,
          'status': 'good',
          'date': '2012-09-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th18': {
        'Reimu': {
          'score': 3845087960,
          'status': 'great',
          'date': '2025-06-28T15:30:00',
          'replay': 'th18_ud0009.rpy',
          'detail': '-',
        },
        'Marisa': {
          'score': 3857820910,
          'status': 'great',
          'date': '2025-06-17T15:30:00',
          'replay': 'th18_ud0008.rpy',
          'detail': '-',
        },
        'Sanae': {
          'score': 3738774220,
          'status': 'great',
          'date': '2025-06-07T15:30:00',
          'replay': 'th18_ud0018.rpy',
          'detail': '-',
        },
      }
    },
    'ぬまた': {
      'th128': {
        'Cirno': {
          'score': 91055090,
          'status': 'good',
          'date': '2024-09-16T15:30:00',
          'replay': 'th128_ud0015.rpy',
          'detail': '-',
        },
      },
    },
    'のっぽん': {
      'th11': {
        'ReimuA': {
          'score': 1027323490,
          'status': 'good',
          'date': '2019-05-04T15:30:00',
          'replay': null,
          'detail': '-',
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
    'はし＠水銀党': {
      'th12': {
        'SanaeB': {
          'score': 515406430,
          'status': 'good',
          'date': '2010-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'はやて': {
      'th07Ex': {
        'ReimuB': {
          'score': 1247990590,
          'status': 'good',
          'date': '2008-10-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'はらぴょん': {
      'th10': {
        'ReimuA': {
          'score': 984864880,
          'status': 'good',
          'date': '2024-07-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1000943080,
          'status': 'great',
          'date': '2025-07-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1041072410,
          'status': 'good',
          'date': '2024-05-11T15:30:00',
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
      'th11': {
        'ReimuA': {
          'score': 1020252870,
          'status': 'good',
          'date': '2019-04-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th128': {
        'Cirno': {
          'score': 90413200,
          'status': 'good',
          'date': '2021-03-05T15:30:00',
          'replay': 'th128_ud0013.rpy',
          'detail': '-',
        },
      },
    },
    'ひろなex': {
      'th11': {
        'ReimuC': {
          'score': 1018308530,
          'status': 'good',
          'date': '2009-05-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1019753230,
          'status': 'good',
          'date': '2009-06-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1014116190,
          'status': 'good',
          'date': '2009-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ふすま': {
      'th11': {
        'ReimuA': {
          'score': 1027931150,
          'status': 'good',
          'date': '2021-08-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ふみさん': {
      'th07Ph': {
        'ReimuB': {
          'score': 1310401640,
          'status': 'good',
          'date': '2008-05-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ぶーる': {
      'th12': {
        'ReimuA': {
          'score': 611796360,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 582691420,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 602425140,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 588726150,
          'status': 'good',
          'date': '2010-02-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 607609940,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 692455090,
          'status': 'good',
          'date': '2011-09-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'ぺろぺろ': {
      'th06': {
        'ReimuB': {
          'score': 553233090,
          'status': 'good',
          'date': '2011-12-31T15:30:00',
          'replay': null,
          'detail': '2011年',
        },
        'MarisaA': {
          'score': 530657650,
          'status': 'good',
          'date': '2011-04-30T15:30:00',
          'replay': null,
          'detail': '2011年4月1週',
        },
        'MarisaB': {
          'score': 521318570,
          'status': 'good',
          'date': '2009-11-30T15:30:00',
          'replay': null,
          'detail': '2009年11月3週',
        },
      },
    },
    'ぺん太': {
      'th06': {
        'ReimuB': {
          'score': 510166480,
          'status': 'good',
          'date': '2011-06-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ほーし': {
      'th10': {
        'ReimuA': {
          'score': 964944440,
          'status': 'good',
          'date': '2012-03-01T15:30:00',
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
    'まさき': {
      'th07Ex': {
        'ReimuB': {
          'score': 1222711850,
          'status': 'good',
          'date': '2019-03-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'まどか': {
      'th06': {
        'ReimuA': {
          'score': 639939430,
          'status': 'great',
          'date': '2018-02-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 678104400,
          'status': 'great',
          'date': '2018-01-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 645089160,
          'status': 'great',
          'date': '2018-06-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 676158100,
          'status': 'great',
          'date': '2018-06-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
        'Sanae': {
          'score': 538631060,
          'status': 'good',
          'date': '2020-01-06T15:30:00',
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
          'replay': 'th128_ud0001.rpy',
          'detail': '-',
        },
      },
    },
    'みみあて': {
      'th12': {
        'SanaeB': {
          'score': 513745080,
          'status': 'good',
          'date': '2009-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'みやの': {
      'th06': {
        'ReimuB': {
          'score': 533248410,
          'status': 'good',
          'date': '2009-05-31T15:30:00',
          'replay': null,
          'detail': '2009年5月2週',
        },
      },
    },
    'みょん吉': {
      'th11': {
        'ReimuA': {
          'score': 1007236990,
          'status': 'good',
          'date': '2019-04-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'むいれ': {
      'th12': {
        'ReimuA': {
          'score': 545668930,
          'status': 'good',
          'date': '2011-03-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'もこさめ': {
      'th10': {
        'ReimuC': {
          'score': 974099630,
          'status': 'good',
          'date': '2012-06-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'もなか': {
      'th10': {
        'MarisaA': {
          'score': 965844880,
          'status': 'good',
          'date': '2009-09-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 980626840,
          'status': 'good',
          'date': '2009-08-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'もみぢ': {
      'th10': {
        'ReimuA': {
          'score': 967612810,
          'status': 'good',
          'date': '2011-12-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'SanaeB': {
          'score': 543292850,
          'status': 'good',
          'date': '2010-06-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'もりそば': {
      'th07Ex': {
        'ReimuA': {
          'score': 1241574150,
          'status': 'good',
          'date': '2009-11-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1351277420,
          'status': 'good',
          'date': '2009-11-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ゆ～すけ': {
      'th07Ex': {
        'ReimuB': {
          'score': 1509003300,
          'status': 'great',
          'date': '2017-06-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuA': {
          'score': 1580640510,
          'status': 'great',
          'date': '2012-08-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 1727261160,
          'status': 'great',
          'date': '2024-06-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1515839630,
          'status': 'great',
          'date': '2014-11-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1507090340,
          'status': 'great',
          'date': '2014-11-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaA': {
          'score': 1524310930,
          'status': 'great',
          'date': '2014-09-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SakuyaB': {
          'score': 1671913330,
          'status': 'great',
          'date': '2014-07-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ゆーみや': {
      'th06': {
        'MarisaA': {
          'score': 526143820,
          'status': 'good',
          'date': '2017-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1021123930,
          'status': 'good',
          'date': '2019-01-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'よしだ': {
      'th11': {
        'ReimuA': {
          'score': 1002465090,
          'status': 'good',
          'date': '2020-05-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'らおー': {
      'th11': {
        'ReimuA': {
          'score': 1011853630,
          'status': 'good',
          'date': '2011-10-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'らぶか': {
      'th10': {
        'ReimuA': {
          'score': 955849110,
          'status': 'good',
          'date': '2021-05-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1017021820,
          'status': 'good',
          'date': '2021-04-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'りぃふ': {
      'th06': {
        'ReimuB': {
          'score': 521898670,
          'status': 'good',
          'date': '2012-04-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'れもな': {
      'th06': {
        'ReimuA': {
          'score': 593348130,
          'status': 'good',
          'date': '2024-06-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 622392030,
          'status': 'great',
          'date': '2024-06-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 581367590,
          'status': 'good',
          'date': '2024-06-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 639876670,
          'status': 'great',
          'date': '2024-05-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 957023210,
          'status': 'good',
          'date': '2021-03-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
          'replay': 'th17_ud0010.rpy',
          'detail': '-',
        },
      },
    },
    'わい': {
      'th11': {
        'ReimuA': {
          'score': 1001742440,
          'status': 'good',
          'date': '2009-01-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'わんわの': {
      'th12': {
        'MarisaA': {
          'score': 646518120,
          'status': 'good',
          'date': '2011-12-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 615662420,
          'status': 'good',
          'date': '2012-02-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 629913430,
          'status': 'good',
          'date': '2012-09-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'アイスプライス': {
      'th12': {
        'ReimuA': {
          'score': 575573290,
          'status': 'good',
          'date': '2010-12-31T15:30:00',
          'replay': null,
          'detail': '2010年12月2週',
        },
        'ReimuB': {
          'score': 553817910,
          'status': 'good',
          'date': '2012-04-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'アベル': {
      'th06': {
        'ReimuB': {
          'score': 532820260,
          'status': 'good',
          'date': '2009-08-31T15:30:00',
          'replay': null,
          'detail': '2009年8月2週',
        },
      },
    },
    'アラヤ': {
      'th07Ph': {
        'SakuyaB': {
          'score': 1380734280,
          'status': 'good',
          'date': '2009-03-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'アリエス': {
      'th06': {
        'ReimuA': {
          'score': 585761680,
          'status': 'good',
          'date': '2012-07-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 958470950,
          'status': 'good',
          'date': '2012-03-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'エンプル': {
      'th11': {
        'ReimuA': {
          'score': 1005203120,
          'status': 'good',
          'date': '2017-09-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'MarisaA': {
          'score': 582779030,
          'status': 'good',
          'date': '2019-07-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'ガンダールヴ': {
      'th11': {
        'ReimuA': {
          'score': 1013198360,
          'status': 'good',
          'date': '2009-06-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 625701590,
          'status': 'good',
          'date': '2010-05-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 625701590,
          'status': 'good',
          'date': '2010-05-03T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ギョウちゃん': {
      'th11': {
        'ReimuA': {
          'score': 1010158320,
          'status': 'good',
          'date': '2019-05-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th128': {
        'Cirno': {
          'score': 92569180,
          'status': 'good',
          'date': '2017-04-14T15:30:00',
          'replay': 'th128_ud0010.rpy',
          'detail': '-',
        },
      },
    },
    'ゴッダ': {
      'th12': {
        'MarisaA': {
          'score': 525504230,
          'status': 'good',
          'date': '2010-02-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'スイナ': {
      'th06': {
        'MarisaB': {
          'score': 504052550,
          'status': 'good',
          'date': '2008-03-03T15:30:00',
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
    'チョコ': {
      'th06': {
        'MarisaB': {
          'score': 556253400,
          'status': 'good',
          'date': '2009-02-28T15:30:00',
          'replay': null,
          'detail': '2009年2月2週',
        },
      },
    },
    'チョリソー': {
      'th07Ph': {
        'ReimuB': {
          'score': 1300398490,
          'status': 'good',
          'date': '2008-02-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 969895810,
          'status': 'good',
          'date': '2008-09-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'テン': {
      'th10': {
        'ReimuB': {
          'score': 982785170,
          'status': 'good',
          'date': '2011-06-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ドラえもん太': {
      'th06': {
        'ReimuB': {
          'score': 554645140,
          'status': 'good',
          'date': '2009-01-31T15:30:00',
          'replay': null,
          'detail': '2009年1月1～2週',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 972696590,
          'status': 'good',
          'date': '2008-08-31T15:30:00',
          'replay': null,
          'detail': '2008年8月2週',
        },
        'ReimuB': {
          'score': 986675210,
          'status': 'good',
          'date': '2008-11-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 979554100,
          'status': 'good',
          'date': '2009-03-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1082973210,
          'status': 'good',
          'date': '2008-11-30T15:30:00',
          'replay': null,
          'detail': '2008年11月1週',
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
    'ナヤ': {
      'th06': {
        'MarisaB': {
          'score': 517195360,
          'status': 'good',
          'date': '2009-01-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ニャムニャム': {
      'th12': {
        'ReimuA': {
          'score': 670462130,
          'status': 'great',
          'date': '2017-03-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 630584000,
          'status': 'great',
          'date': '2016-08-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 710608440,
          'status': 'great',
          'date': '2016-12-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 698041780,
          'status': 'great',
          'date': '2025-05-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 653845970,
          'status': 'great',
          'date': '2017-07-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 776144040,
          'status': 'great',
          'date': '2022-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ハズレ': {
      'th12': {
        'ReimuA': {
          'score': 572660180,
          'status': 'good',
          'date': '2009-10-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ポンデスイカ': {
      'th12': {
        'ReimuA': {
          'score': 606714600,
          'status': 'good',
          'date': '2010-06-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 557010320,
          'status': 'good',
          'date': '2010-06-30T15:30:00',
          'replay': null,
          'detail': '2010年6月4週',
        },
      },
    },
    'マリオ課長': {
      'th06': {
        'MarisaB': {
          'score': 565008750,
          'status': 'good',
          'date': '2024-05-31T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ex': {
        'ReimuB': {
          'score': 1316039360,
          'status': 'good',
          'date': '2024-07-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1321636140,
          'status': 'good',
          'date': '2024-07-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 966332270,
          'status': 'good',
          'date': '2023-09-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1052287370,
          'status': 'good',
          'date': '2024-05-17T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    'ハスカール': {
      'th10': {
        'ReimuA': {
          'score': 965290920,
          'status': 'good',
          'date': '2010-08-28T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ハル義兄': {
      'th11': {
        'ReimuA': {
          'score': 1025969460,
          'status': 'good',
          'date': '2019-06-21T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ピンクだま': {
      'th12': {
        'MarisaA': {
          'score': 680848870,
          'status': 'good',
          'date': '2013-06-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ベアトリス': {
      'th07Ex': {
        'ReimuB': {
          'score': 1242356400,
          'status': 'good',
          'date': '2011-04-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'メアSR': {
      'th11': {
        'ReimuB': {
          'score': 1062510860,
          'status': 'good',
          'date': '2011-05-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuC': {
          'score': 1047056920,
          'status': 'good',
          'date': '2011-05-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 1079970870,
          'status': 'good',
          'date': '2011-03-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1061622170,
          'status': 'good',
          'date': '2011-02-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1042825630,
          'status': 'good',
          'date': '2010-12-15T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'モグ': {
      'th06': {
        'MarisaB': {
          'score': 536665340,
          'status': 'good',
          'date': '2008-03-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ヤエハ': {
      'th12': {
        'ReimuB': {
          'score': 527775350,
          'status': 'good',
          'date': '2011-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'ラヴァル': {
      'th12': {
        'SanaeB': {
          'score': 703659790,
          'status': 'great',
          'date': '2012-05-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    'リデラ': {
      'th12': {
        'SanaeB': {
          'score': 622837890,
          'status': 'good',
          'date': '2009-09-14T15:30:00',
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
    'ﾍﾟﾍﾟﾍﾟ': {
      'th11': {
        'ReimuA': {
          'score': 1016108710,
          'status': 'good',
          'date': '2008-09-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '案山子': {
      'th10': {
        'ReimuB': {
          'score': 958903860,
          'status': 'good',
          'date': '2009-02-04T15:30:00',
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
      'th12': {
        'ReimuA': {
          'score': 671921550,
          'status': 'great',
          'date': '2022-01-25T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 632257630,
          'status': 'great',
          'date': '2022-01-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 720371100,
          'status': 'great',
          'date': '2021-12-26T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 664423020,
          'status': 'great',
          'date': '2021-12-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeA': {
          'score': 654737910,
          'status': 'great',
          'date': '2021-12-09T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'SanaeB': {
          'score': 762165700,
          'status': 'great',
          'date': '2022-01-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    '蚊': {
      'th10': {
        'ReimuA': {
          'score': 957847150,
          'status': 'good',
          'date': '2009-02-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '邂逅': {
      'th07Ph': {
        'ReimuA': {
          'score': 1215117650,
          'status': 'good',
          'date': '2011-06-18T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '霞音': {
      'th06': {
        'ReimuA': {
          'score': 621344740,
          'status': 'great',
          'date': '2013-04-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '火力発電所': {
      'th07Ph': {
        'ReimuB': {
          'score': 1354558990,
          'status': 'good',
          'date': '2005-08-11T15:30:00',
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
    '源ノ壬 環': {
      'th10': {
        'ReimuB': {
          'score': 956955690,
          'status': 'good',
          'date': '2012-07-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1059595950,
          'status': 'good',
          'date': '2014-02-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '古明地筍': {
      'th11': {
        'ReimuA': {
          'score': 1119679950,
          'status': 'great',
          'date': '2025-04-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '高槻やよい': {
      'th07Ex': {
        'ReimuB': {
          'score': 1285756270,
          'status': 'good',
          'date': '2008-10-30T15:30:00',
          'replay': null,
          'detail': '2008年10月4週',
        },
      },
    },
    '黒砂糖': {
      'th06': {
        'ReimuB': {
          'score': 531018780,
          'status': 'good',
          'date': '2009-08-31T15:30:00',
          'replay': null,
          'detail': '2009年8月2週',
        },
        'MarisaA': {
          'score': 561570620,
          'status': 'good',
          'date': '2009-11-30T15:30:00',
          'replay': null,
          'detail': '2009年11月3週',
        },
      },
    },
    '紙G': {
      'th07Ph': {
        'ReimuB': {
          'score': 1524825210,
          'status': 'good',
          'date': '2008-03-14T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '四季映夢': {
      'th11': {
        'ReimuA': {
          'score': 1005386950,
          'status': 'good',
          'date': '2019-01-27T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    '織守': {
      'th10': {
        'ReimuA': {
          'score': 975396300,
          'status': 'good',
          'date': '2008-05-09T15:30:00',
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
        'Border': {
          'score': 2487905940,
          'status': 'good',
          'date': '2012-07-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '朱鷺戸': {
      'th10': {
        'ReimuA': {
          'score': 972535470,
          'status': 'good',
          'date': '2009-05-31T15:30:00',
          'replay': null,
          'detail': '2009年5月2週',
        },
      },
    },
    '将軍': {
      'th10': {
        'ReimuA': {
          'score': 958404180,
          'status': 'good',
          'date': '2016-08-22T15:30:00',
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
    '水月': {
      'th11': {
        'ReimuA': {
          'score': 1046329880,
          'status': 'good',
          'date': '2009-02-28T15:30:00',
          'replay': null,
          'detail': '2009年2月3週',
        },
        'ReimuB': {
          'score': 1021562850,
          'status': 'good',
          'date': '2009-02-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 1003793870,
          'status': 'good',
          'date': '2008-11-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 1007752600,
          'status': 'good',
          'date': '2009-02-28T15:30:00',
          'replay': null,
          'detail': '2009年2月2週',
        },
      },
      'th12': {
        'ReimuA': {
          'score': 635654450,
          'status': 'good',
          'date': '2011-12-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'ReimuB': {
          'score': 581531420,
          'status': 'good',
          'date': '2009-10-30T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 640990180,
          'status': 'good',
          'date': '2010-04-04T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 592074570,
          'status': 'good',
          'date': '2010-03-12T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '水性すらいむ': {
      'th06': {
        'MarisaB': {
          'score': 620862040,
          'status': 'great',
          'date': '2008-08-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th07Ph': {
        'ReimuB': {
          'score': 1309066530,
          'status': 'good',
          'date': '2008-02-23T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 952744390,
          'status': 'good',
          'date': '2007-12-02T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th11': {
        'ReimuA': {
          'score': 1039149500,
          'status': 'good',
          'date': '2008-10-16T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '生きる化石『Ｔ』': {
      'th07Ph': {
        'ReimuB': {
          'score': 1500239840,
          'status': 'good',
          'date': '2007-03-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '石田聖実': {
      'th11': {
        'ReimuA': {
          'score': 1023863760,
          'status': 'good',
          'date': '2008-10-29T15:30:00',
          'replay': null,
          'detail': '-',
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
    '蒼乃': {
      'th07Ph': {
        'SakuyaA': {
          'score': 1209995910,
          'status': 'good',
          'date': '2010-05-01T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '鉄アレイ': {
      'th10': {
        'ReimuA': {
          'score': 951579520,
          'status': 'good',
          'date': '2009-12-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '飛萃': {
      'th10': {
        'ReimuB': {
          'score': 957679210,
          'status': 'good',
          'date': '2010-10-10T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '摩耗': {
      'th07Ex': {
        'ReimuB': {
          'score': 1201640880,
          'status': 'good',
          'date': '2014-01-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '茉莉花': {
      'th06': {
        'ReimuB': {
          'score': 635300680,
          'status': 'great',
          'date': '2013-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '霧海': {
      'th10': {
        'ReimuB': {
          'score': 958779860,
          'status': 'good',
          'date': '2007-12-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '名前': {
      'th06': {
        'MarisaB': {
          'score': 509231970,
          'status': 'good',
          'date': '2013-04-29T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
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
    '木村圭': {
      'th06': {
        'MarisaB': {
          'score': 504411110,
          'status': 'good',
          'date': '2007-11-08T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuB': {
          'score': 976277540,
          'status': 'good',
          'date': '2008-03-13T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '由希＠hisui': {
      'th11': {
        'ReimuA': {
          'score': 1028130580,
          'status': 'good',
          'date': '2008-09-22T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '幽々公': {
      'th12': {
        'MarisaB': {
          'score': 604055600,
          'status': 'good',
          'date': '2025-06-07T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '優さん＠': {
      'th10': {
        'MarisaA': {
          'score': 960487120,
          'status': 'good',
          'date': '2010-01-06T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '葉ーちゃん': {
      'th06': {
        'ReimuB': {
          'score': 534760540,
          'status': 'good',
          'date': '2011-09-05T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '慮': {
      'th07Ex': {
        'SakuyaA': {
          'score': 1117659630,
          'status': 'good',
          'date': '2016-03-20T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
    },
    '惑惑': {
      'th12': {
        'ReimuA': {
          'score': 523810510,
          'status': 'good',
          'date': '2009-09-26T15:30:00',
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
          'replay': 'th128_ud0012.rpy',
          'detail': '-',
        },
      },
    },
    '＜―＞': {
      'th11': {
        'ReimuA': {
          'score': 1002993430,
          'status': 'good',
          'date': '2011-08-31T15:30:00',
          'replay': null,
          'detail': '2011年8月4週',
        },
      },
    },
    '∩(･ω･)∩': {
      'th07Ex': {
        'MarisaB': {
          'score': 1118659720,
          'status': 'good',
          'date': '2009-01-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
      },
      'th10': {
        'ReimuA': {
          'score': 977876250,
          'status': 'good',
          'date': '2009-08-31T15:30:00',
          'replay': null,
          'detail': '2009年8月3週',
        },
        'ReimuC': {
          'score': 981276280,
          'status': 'good',
          'date': '2009-09-24T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaA': {
          'score': 970725300,
          'status': 'good',
          'date': '2010-02-19T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaB': {
          'score': 971329440,
          'status': 'good',
          'date': '2009-12-11T15:30:00',
          'replay': null,
          'detail': '-',
        },
        'MarisaC': {
          'score': 984382860,
          'status': 'good',
          'date': '2009-12-31T15:30:00',
          'replay': null,
          'detail': '2009年12月3週',
        },
      },
    },

  }

  return scoreRecords
}