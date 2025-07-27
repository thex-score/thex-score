export function UseReleases(){
  // 要素番号が小さいものほど最新であるようにすること
  // 変更があった時は必ず更新すること
  //   サイトの枠組み周りの軽微なものであればchangesに『軽微な変更1』とでもここ入れておくこと.
  
  // リリースのナンバリングは
  // 1桁目: サイトの枠組みが大きく変わったら上げる
  // 2桁目: ZUNが新作を出して新しい作品に対応したら上げる
  // 3桁目: 新しい記録を追加したら上げる
  const releases=[
    {
      version: "1.1.6",
      date: "2025-07-28",
      changes: [
        "記録追加：th16 幽谷もこ Reimu",
      ]
    },
    {
      version: "1.1.5",
      date: "2025-07-28",
      changes: [
        "掲載対象となる記録について明記",
      ]
    },
    {
      version: "1.1.4",
      date: "2025-07-27",
      changes: [
        "過去記録追加：th13/th14/th16/th17",
      ]
    },
    {
      version: "1.1.3",
      date: "2025-07-26",
      changes: [
        "記録追加：th06 Pearl MarisaB",
      ]
    },
    {
      version: "1.1.3",
      date: "2025-07-25",
      changes: [
        "一部記録の修正",
      ]
    },
    {
      version: "1.1.2",
      date: "2025-07-25",
      changes: [
        "記録掲載について追記",
      ]
    },
    {
      version: "1.1.1",
      date: "2025-07-25",
      changes: [
        "サイト公開",
      ]
    },
    {
      version: "0.9.5",
      date: "2025-07-25",
      changes: [
        "リプレイファイルの一斉登録",
        "ページ概要更新"
      ]
    },
    {
      version: "0.9.4",
      date: "2025-07-23",
      changes: [
        "サイト概要に運営方針掲載"
      ]
    },
    {
      version: "0.9.3",
      date: "2025-07-23",
      changes: [
        "WEF th13記録修正"
      ]
    },
    {
      version: "0.9.2",
      date: "2025-07-23",
      changes: [
        "favicon更新"
      ]
    },
    {
      version: "0.9.1",
      date: "2025-07-22",
      changes: [
        "現存の記録を一斉登録",
        "ページ概要・リンク一覧更新"
      ]
    },
    {
      version: "0.9.0",
      date: "2025-07-19",
      changes: [
        "大枠の完成",
        "運用方針の策定"
      ]
    },
  ]
  return releases
}