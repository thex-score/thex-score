export function useGames(){
  const gamesMap: Record<string, {name: string, color: {bg: string, txt: string}, shot_types: Record<string, {name: string}>}> = {
    'th06': {
      'name': '東方紅魔郷',
      'color': {
        'bg': '#993333',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
      }
    },
    'th07Ex': {
      'name': '東方妖々夢Ex',
      'color': {
        'bg': '#FF75DD',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'SakuyaA': {'name': '咲夜A'},
        'SakuyaB': {'name': '咲夜B'},
      }
    },
    'th07Ph': {
      'name': '東方妖々夢Ph',
      'color': {
        'bg': '#FF75DD',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'SakuyaA': {'name': '咲夜A'},
        'SakuyaB': {'name': '咲夜B'},
      }
    },
    'th08': {
      'name': '東方永夜抄',
      'color': {
        'bg': '#333399',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Border': {'name': '結界組'},
        'Magic': {'name': '詠唱組'},
        'Scarlet': {'name': '紅魔組'},
        'Netherworld': {'name': '幽冥組'},
        'Reimu': {'name': '霊夢'},
        'Yukari': {'name': '紫'},
        'Marisa': {'name': '魔理沙'},
        'Alice': {'name': 'アリス'},
        'Sakuya': {'name': '咲夜'},
        'Remilia': {'name': 'レミリア'},
        'Youmu': {'name': '妖夢'},
        'Yuyuko': {'name': '幽々子'},
      }
    },
    'th10': {
      'name': '東方風神録',
      'color': {
        'bg': '#96B300',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'ReimuC': {'name': '霊夢C'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'MarisaC': {'name': '魔理沙C'},
      }
    },
    'th11': {
      'name': '東方地霊殿',
      'color': {
        'bg': '#591400',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'ReimuC': {'name': '霊夢C'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'MarisaC': {'name': '魔理沙C'},
      }
    },
    'th12': {
      'name': '東方星蓮船',
      'color': {
        'bg': '#4169E1',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'SanaeA': {'name': '早苗B'},
        'SanaeB': {'name': '早苗B'},
      }
    },
    'th128': {
      'name': '妖精大戦争',
      'color': {
        'bg': '#009898',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Cirno': {'name': 'チルノ'},
      }
    },
    'th13': {
      'name': '東方神霊廟',
      'color': {
        'bg': '#4A808C',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Reimu': {'name': '霊夢'},
        'Marisa': {'name': '魔理沙'},
        'Sanae': {'name': '早苗'},
        'Youmu': {'name': '妖夢'},
      }
    },
    'th14': {
      'name': '東方輝針城',
      'color': {
        'bg': '#AA7777',
        'txt': '#FFFFFF'
      },
      'shot_types': {
        'ReimuA': {'name': '霊夢A'},
        'ReimuB': {'name': '霊夢B'},
        'MarisaA': {'name': '魔理沙A'},
        'MarisaB': {'name': '魔理沙B'},
        'SakuyaA': {'name': '咲夜A'},
        'SakuyaB': {'name': '咲夜B'},
      }
    },
    'th15': {
      'name': '東方紺珠伝',
      'color': {
        'bg': '#6A47BE',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Reimu': {'name': '霊夢'},
        'Marisa': {'name': '魔理沙'},
        'Sanae': {'name': '早苗'},
        'Reisen': {'name': '鈴仙'},
      }
    },
    'th16': {
      'name': '東方天空璋',
      'color': {
        'bg': '#176E0E',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Reimu': {'name': '霊夢(土用)'},
        'Cirno': {'name': 'チルノ(土用)'},
        'Aya': {'name': '文(土用)'},
        'Marisa': {'name': '魔理沙(土用)'},
      }
    },
    'th17': {
      'name': '東方鬼形獣',
      'color': {
        'bg':'#190E0E',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'ReimuW': {'name': '霊夢オオカミ'},
        'ReimuO': {'name': '霊夢カワウソ'},
        'ReimuE': {'name': '霊夢オオワシ'},
        'MarisaW': {'name': '魔理沙オオカミ'},
        'MarisaO': {'name': '魔理沙カワウソ'},
        'MarisaE': {'name': '魔理沙オオワシ'},
        'YoumuW': {'name': '妖夢オオカミ'},
        'YoumuO': {'name': '妖夢カワウソ'},
        'YoumuE': {'name': '妖夢オオワシ'},
      }
    },
    'th18': {
      'name': '東方虹龍洞',
      'color': {
        'bg': '#1DD294',
        'txt': '#FFFFFF',
      },
      'shot_types': {
        'Reimu': {'name': '霊夢'},
        'Marisa': {'name': '魔理沙'},
        'Sakuya': {'name': '咲夜'},
        'Sanae': {'name': '早苗'},
      }
    },
  }
  return gamesMap
}