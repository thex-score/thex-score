// ~/composables/ReleaseNotes.ts

// 再利用できるパターン（テンプレ型）
export type TplChange =
  | { type: 'tpl'; id: 'en_support' }
  | { type: 'tpl'; id: 'add_record'; game: string; shot: string; player: string }
  | { type: 'tpl'; id: 'modify_record'; game: string; shot: string; player: string };

// 単発・例外・長文（自由文型）
export type FreeTextChange = {
  type: 'text';
  text: Partial<Record<'ja' | 'en', string>>;
  format?: 'plain' | 'markdown';
};

// ReleaseChange はどちらか
export type ReleaseChange = TplChange | FreeTextChange;

// Release 本体
export type Release = {
  version: string;
  date: string; // ISO
  changes: ReleaseChange[];
};

// データ例
export function UseReleases(): Release[] {
  return [
    {
      version: "1.1.25",
      date: "2025-09-27",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "更新履歴の多言語対応", 
            en: "Update History Support for English" 
          } 
        },
      ],
    },
    {
      version: "1.1.24",
      date: "2025-09-25",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player: "Altair" },
        { 
          type: "text", 
          text: { 
            ja: "th16の機体表記を修正", 
            en: "Modified the shot type notation for th16" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "英語翻訳の追加", 
            en: "Added English translations" 
          } 
        },
      ],
    },
    {
      version: "1.1.23",
      date: "2025-09-23",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "ReimuA", player: "おんなのこ" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player: "Balisman" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player: "wimirei" },
      ],
    },
    {
      version: "1.1.22",
      date: "2025-09-20",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "英語に対応", 
            en: "Added English support" 
          } 
        },
      ],
    },
    {
      version: "1.1.21",
      date: "2025-09-18",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "ReimuA", player: "int" },
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player: "Oscar" },
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player: "Oscar" },
      ],
    },
    {
      version: "1.1.20",
      date: "2025-09-04",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player: "幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th16", shot: "Cirno/Aya/Marisa", player: "幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th17", shot: "ReimuO/MarisaO", player: "幽谷もこ" },
      ],
    },
    {
      version: "1.1.19",
      date: "2025-09-02",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player: "Altair" },
      ],
    },
    {
      version: "1.1.18",
      date: "2025-08-25",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "リンク周りの修正", 
            en: "Fixed link issues" 
          } 
        },
      ],
    },
    {
      version: "1.1.17",
      date: "2025-08-15",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player: "Oscar" },
      ],
    },
    {
      version: "1.1.16",
      date: "2025-08-13",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player: "Oscar" },
      ],
    },
    {
      version: "1.1.15",
      date: "2025-08-13",
      changes: [
        { type: "tpl", id: "add_record", game: "th11", shot: "ReimuA", player: "WEF" },
      ],
    },
    {
      version: "1.1.14",
      date: "2025-08-08",
      changes: [
        { type: "tpl", id: "add_record", game: "th14", shot: "MarisaB", player: "Balisman" },
      ],
    },
    {
      version: "1.1.13",
      date: "2025-08-05",
      changes: [
        { type: "tpl", id: "add_record", game: "th12", shot: "ReimuA", player: "w1theR" },
        { type: "tpl", id: "modify_record", game: "th08", shot: "Youmu", player: "Sakurei" },
      ],
    },
    {
      version: "1.1.12",
      date: "2025-08-04",
      changes: [
        { type: "tpl", id: "add_record", game: "th15", shot: "Reisen", player: "Add4567" },
      ],
    },
    {
      version: "1.1.11",
      date: "2025-08-03",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "基準スコア変更 : 永夜抄 ペア・人間単騎 24億→25億", 
            en: "Changed threshold score : th08 Teams and Solo Human 2.4B→2.5B" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "基準スコア変更 : 鬼形獣 nonカワウソ 10億→15億", 
            en: "Changed threshold score : th17 non Otter 1B→1.5B" 
          } 
        },
      ],
    },
    {
      version: "1.1.10",
      date: "2025-07-31",
      changes: [
        { type: "tpl", id: "modify_record", game: "th12", shot: "SanaeB", player: "あねみ" },
      ],
    },
    {
      version: "1.1.9",
      date: "2025-07-28",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "最近の記録を追加", 
            en: "Added recent records" 
          } 
        },
      ],
    },
    {
      version: "1.1.8",
      date: "2025-07-28",
      changes: [
        { type: "tpl", id: "add_record", game: "th10", shot: "MarisaC", player: "もち" },
      ],
    },
    {
      version: "1.1.7",
      date: "2025-07-28",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "データに達成者合計を追加", 
            en: "Added total achievers to data" 
          } 
        },
      ],
    },
    {
      version: "1.1.6",
      date: "2025-07-28",
      changes: [
        { type: "tpl", id: "add_record", game: "th16", shot: "Reimu", player: "幽谷もこ" },
        { type: "tpl", id: "add_record", game: "th18", shot: "Sakuya", player: "工藤氏。" },
      ],
    },
    {
      version: "1.1.5",
      date: "2025-07-28",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "掲載対象となる記録について明記", 
            en: "Clarified which records are listed" 
          } 
        },
      ],
    },
    {
      version: "1.1.4",
      date: "2025-07-27",
      changes: [
        { type: "tpl", id: "add_record", game: "th13/th14/th16/th17", shot: "", player: "" },
      ],
    },
    {
      version: "1.1.3",
      date: "2025-07-26",
      changes: [
        { type: "tpl", id: "add_record", game: "th06", shot: "Pearl", player: "MarisaB" },
      ],
    },
    {
      version: "1.1.2",
      date: "2025-07-25",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "記録掲載について追記", 
            en: "Added notes about record listings" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "一部記録の修正", 
            en: "Corrected some records" 
          } 
        },
      ],
    },
    {
      version: "1.1.1",
      date: "2025-07-25",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "サイト公開", 
            en: "Site launched" 
          } 
        },
      ],
    },
    {
      version: "0.9.5",
      date: "2025-07-25",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "リプレイファイルの一斉登録", 
            en: "Batch uploaded replay files" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "ページ概要更新", 
            en: "Updated page overview" 
          } 
        },
      ],
    },
    {
      version: "0.9.4",
      date: "2025-07-23",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "サイト概要に運営方針掲載", 
            en: "Added policy to site overview" 
          } 
        },
      ],
    },
    {
      version: "0.9.3",
      date: "2025-07-23",
      changes: [
        { type: "tpl", id: "modify_record", game: "th13", shot: "MarisaB", player: "WEF" },
      ],
    },
    {
      version: "0.9.2",
      date: "2025-07-23",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "favicon更新", 
            en: "Updated favicon" 
          } 
        },
      ],
    },
    {
      version: "0.9.1",
      date: "2025-07-22",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "現存の記録を一斉登録", 
            en: "Batch registered existing records" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "ページ概要・リンク一覧更新", 
            en: "Updated page overview and links" 
          } 
        },
      ],
    },
    {
      version: "0.9.0",
      date: "2025-07-19",
      changes: [
        { 
          type: "text", 
          text: { 
            ja: "サイト大枠の完成", 
            en: "Overall framework completed" 
          } 
        },
        { 
          type: "text", 
          text: { 
            ja: "運用方針の策定", 
            en: "Established operational policy" 
          } 
        },
      ],
    },
  ];
}