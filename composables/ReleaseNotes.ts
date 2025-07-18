export function UseReleases(){
  // 要素番号が小さいものほど最新であるようにすること
  
  // リリースのナンバリングは
  // 1桁目: サイトの枠組みが大きく変わったら上げる
  // 2桁目: ZUNが新作を出して新しい作品に対応したら上げる
  // 3桁目: 新しい記録を追加したら上げる
  const releases=[
    {
      version: "0.9.1",
      date: "2025-07-19",
      changes: [
        "大枠の完成aa"
      ]
    },
    {
      version: "0.9.0",
      date: "2025-07-19",
      changes: [
        "大枠の完成"
      ]
    },
  ]
  return releases
}