# 裏スコボみたいなメモ書き EX

## 目次

- [裏スコボみたいなメモ書き EX](#裏スコボみたいなメモ書き-ex)
  - [目次](#目次)
  - [セットアップ](#セットアップ)
  - [新規記録追加](#新規記録追加)
  - [新規作品追加](#新規作品追加)
  - [Author](#author)

## セットアップ

最初に[nvm公式サイト](https://github.com/nvm-sh/nvm)に従って `nvm` を入れておく.

```bash
$ git clone https://github.com/thex-score/thex-score.git
$ cd thex-score
$ nvm install 22
$ nvm use 22
$ npm install
$ npx nuxt generate
$ npx serve dist
# 以降 http://localhost:3000 でお試しウェブサーバが動く.
# 停止したければ Ctrl + C とかで停止させること.
```


## 新規記録追加

- 全てカレントディレクトリは以下の作業が終わった直後のディレクトリとする
```bash
$ git clone https://github.com/thex-score/thex-score.git
$ cd thex-score
```

1. `git checkout main` した後, `git pull origin main` し、 `git branch feature/{任意のブランチ名}` としてブランチを切ってから `git checkout feature/{今さっきのブランチ名}` をしてブランチを移動する
2. `composables/ScoreRecords.ts` に記録を追加/更新する
   1. `th06` といったゲームIDや `ReimuA` といった機体IDは `composables/Game.ts` を参照すること
   2. `status` は超大台を超えたものは `great` , 大台を超えたものは `good` と記載する
   3. `date` は[RFC3339](https://tex2e.github.io/rfc-translater/html/rfc3339.html)にて定義されるタイムスタンプフォーマットを使用すること
   4. `replay` は入手できずウェブアプリとしてユーザにダウンロードさせることができないものは `null` を記載すること. 入手できたものは `public/replays/{ゲームID}/{リプレイファイル名}` に保存し、 `composables/ScoreRecords.ts` 側にはリプレイファイル名を記載すること
   5. `detail` は備考であり、記載することがなければ `-` と入れる
3. `composables/ReleaseNotes.ts` に変更履歴を記載する
   1. 先頭要素に追加すること
   2. `version` は上から3番目の桁を1上げる
   3. `date` は `yyyy-mm-dd` 形式とする
   4. `changes` は文字列配列として追加した記録を複数書く
      1. 1個のみ記録を追加するのであれば要素1の文字列配列になる
4. お試しウェブサーバを local で動かして大丈夫そうか確認する
   1. [セットアップ](#セットアップ)の項参照
5. `git add composable/ScoreRecords.ts composables/ReleaseNotes.ts` で変更したファイルを追加したのち `git commit -m "{後からログを追いやすい名前}` でコミットした後 `git push origin feature/{1.で作ったブランチ名}` でpushする
6. githubの画面でプルリクエストを作成
7. プルリクエストを作成したら自動でテスト用CIが走るので、テストが通ったら最終チェック実施後mainへマージする
8. mainへマージされるとデプロイのCIが回るので、少し待つと反映される


## 新規作品追加

- 全てカレントディレクトリは以下の作業が終わった直後のディレクトリとする
```bash
$ git clone https://github.com/thex-score/thex-score.git
$ cd thex-score
```

1. `git checkout main` した後, `git pull origin main` し、 `git branch feature/{任意のブランチ名}` としてブランチを切ってから `git checkout feature/{今さっきのブランチ名}` をしてブランチを移動する
2. `composables/Games.ts` にゲームを追加する
   1. 最初のキーは追加する作品のナンバリングとする
      1. 紅魔郷なら `th06` , 風神録なら `th10` , 妖精大戦争なら `th128`
   2. `name` はその作品の名称である
   3. `color` はテーブル上でその作品がどのように表示されるかのデザインを定義する色であり、16進数方式で定義される
      1. `bg` は背景色
      2. `txt` は文字色
   4. `shot_types` はその作品に含まれている機体を定義する
      1. 最初のキーは機体IDを示す
      2. 機体IDの下には `name` だけがキーの辞書があり、`name` には機体名を入れる
3. `composables/ReleaseNotes.ts` に変更履歴を記載する
   1. 先頭要素に追加すること
   2. `version` は上から2番目の桁を1上げる
   3. `date` は `yyyy-mm-dd` 形式とする
   4. `changes` は文字列配列として追加したゲームを書く
      1. 1個のみゲームを追加するのであれば要素1の文字列配列になる
4. お試しウェブサーバを local で動かして大丈夫そうか確認する
   1. [セットアップ](#セットアップ)の項参照
5. `git add composable/ScoreRecords.ts composables/ReleaseNotes.ts` で変更したファイルを追加したのち `git commit -m "{後からログを追いやすい名前}` でコミットした後 `git push origin feature/{1.で作ったブランチ名}` でpushする
6. githubの画面でプルリクエストを作成
7. プルリクエストを作成したら自動でテスト用CIが走るので、テストが通ったら最終チェック実施後mainへマージする
8. mainへマージされるとデプロイのCIが回るので、少し待つと反映される


## Author

Created by [Wefmaika](https://wefma.net)