interface ReleaseChange {
  key: string;
  text: string;
  translate?: boolean;
}

interface Release {
  version: string;
  date: string;
  changes: ReleaseChange[];
}

export function UseReleases(): Release[] {
  // 要素番号が小さいものほど最新であるようにすること
  // 変更があった時は必ず更新すること
  //   サイトの枠組み周りの軽微なものであればchangesに『軽微な変更1』とでもここ入れておくこと.

  // リリースのナンバリングは
  // 1桁目: サイトの枠組みが大きく変わったら上げる
  // 2桁目: ZUNが新作を出して新しい作品に対応したら上げる
  // 3桁目: 新しい記録を追加したら上げる
  const releases: Release[] = [
    {
      version: "1.1.24",
      date: "2025-09-25",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th11 ReimuA Altair" , translate: false},
        { key: "", text: "th16の機体表記を修正"  , translate: false},
        { key: "", text: "英語翻訳の追加"  , translate: false},
      ],
    },
    {
      version: "1.1.23",
      date: "2025-09-23",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th10 ReimuA おんなのこ"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th11 ReimuA Balisman"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th14 MarisaB wimirei"  , translate: false},
      ],
    },
    {
      version: "1.1.22",
      date: "2025-09-20",
      changes: [
        { key: "", text: "英語に対応"  , translate: false},
      ]
    },
    {
      version: "1.1.21",
      date: "2025-09-18",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th06 ReimuA int"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th11 ReimuA Oscar"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th14 MarisaB Oscar"  , translate: false},
      ],
    },
    {
      version: "1.1.20",
      date: "2025-09-04",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th14 MarisaB 幽谷もこ"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th16 Cirno/Aya/Marisa 幽谷もこ"  , translate: false},
        { key: "composables.ReleaseNotes.add_record", text: " ： th17 ReimuO/MarisaO 幽谷もこ"  , translate: false},
      ],
    },
    {
      version: "1.1.19",
      date: "2025-09-02",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th11 ReimuA Altair"  , translate: false},
      ],
    },
    {
      version: "1.1.18",
      date: "2025-08-25",
      changes: [
        { key: "", text: "リンク周りの修正"  , translate: false},
      ]
    },
    {
      version: "1.1.17",
      date: "2025-08-15",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th15 Reisen Oscar"  , translate: false},
      ],
    },
    {
      version: "1.1.16",
      date: "2025-08-13",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th15 Reisen Oscar"  , translate: false},
      ],
    },
    {
      version: "1.1.15",
      date: "2025-08-13",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th11 ReimuA WEF"  , translate: false},
      ],
    },
    {
      version: "1.1.14",
      date: "2025-08-08",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th14 MarisaB Balisman"  , translate: false},
      ],
    },
    {
      version: "1.1.13",
      date: "2025-08-05",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " ： th12 ReimuA w1theR"  , translate: false},
        { key: "composables.ReleaseNotes.modify_record", text: " ： th08 Youmu Sakurei"  , translate: false},
      ],
    },
    {
      version: "1.1.12",
      date: "2025-08-04",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " : th15 Reisen Add4567"  , translate: false},
      ],
    },
    {
      version: "1.1.11",
      date: "2025-08-03",
      changes: [
        { key: "composables.ReleaseNotes.change_threshold", text: "composables.ReleaseNotes.change_threshold_th08_24to25"  , translate: true},
        { key: "composables.ReleaseNotes.change_threshold", text: "composables.ReleaseNotes.change_threshold_th17_10to15"  , translate: true},
      ]
    },
    {
      version: "1.1.10",
      date: "2025-07-31",
      changes: [
        { key: "composables.ReleaseNotes.modify_record", text: " : th12 あねみ SanaeB"  , translate: false},
      ],
    },
    {
      version: "1.1.9",
      date: "2025-07-28",
      changes: [
        { key: "", text: "最近の記録を追加"  , translate: false},
      ]
    },
    {
      version: "1.1.8",
      date: "2025-07-28",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " : th10 もち MarisaC"  , translate: false},
      ],
    },
    {
      version: "1.1.7",
      date: "2025-07-28",
      changes: [
        { key: "", text: "データに達成者合計を追加"  , translate: false},
      ]
    },
    {
      version: "1.1.6",
      date: "2025-07-28",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " : th16 幽谷もこ Reimu"  , translate: true},
        { key: "composables.ReleaseNotes.add_record", text: " : th18 工藤氏。 Sakuya"  , translate: true},
      ],
    },
    {
      version: "1.1.5",
      date: "2025-07-28",
      changes: [
        { key: "", text: "掲載対象となる記録について明記"  , translate: false},
      ]
    },
    {
      version: "1.1.4",
      date: "2025-07-27",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " : th13/th14/th16/th17"  , translate: false},
      ]
    },
    {
      version: "1.1.3",
      date: "2025-07-26",
      changes: [
        { key: "composables.ReleaseNotes.add_record", text: " : th06 Pearl MarisaB"  , translate: false},
      ]
    },
    {
      version: "1.1.2",
      date: "2025-07-25",
      changes: [
        { key: "", text: "記録掲載について追記"  , translate: false},
        { key: "", text: "一部記録の修正"  , translate: false},
      ]
    },
    {
      version: "1.1.1",
      date: "2025-07-25",
      changes: [
        { key: "", text: "サイト公開"  , translate: false},
      ]
    },
    {
      version: "0.9.5",
      date: "2025-07-25",
      changes: [
        { key: "", text: "リプレイファイルの一斉登録"  , translate: false},
        { key: "", text: "ページ概要更新"  , translate: false},
      ]
    },
    {
      version: "0.9.4",
      date: "2025-07-23",
      changes: [
        { key: "", text: "サイト概要に運営方針掲載"  , translate: false},
      ]
    },
    {
      version: "0.9.3",
      date: "2025-07-23",
      changes: [
        { key: "composables.ReleaseNotes.modify_record", text: " : th13 WEF"  , translate: false},
      ],
    },
    {
      version: "0.9.2",
      date: "2025-07-23",
      changes: [
        { key: "", text: "favicon更新"  , translate: false},
      ]
    },
    {
      version: "0.9.1",
      date: "2025-07-22",
      changes: [
        { key: "", text: "現存の記録を一斉登録"  , translate: false},
        { key: "", text: "ページ概要・リンク一覧更新"  , translate: false},
      ]
    },
    {
      version: "0.9.0",
      date: "2025-07-19",
      changes: [
        { key: "", text: "大枠の完成"  , translate: false},
        { key: "", text: "運用方針の策定"  , translate: false},
      ]
    },
  ];
  return releases;
}