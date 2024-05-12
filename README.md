# practice_storybook

## storybookが解決する課題
### デザイナーとの連携
- デザイナーが意図するコンポーネントの切り方・スタイルとエンジニアが実装するそれに認識齟齬が起こり得る
	- コンポーネントをカタログ化し、Storybookを用いてレビューを行うことにより認識齟齬による手戻りを防ぐ
### どの共通コンポーネントを使えば良いかわからない
- エンジニアが実装するときの話

## storybookを活用したintegration test
https://blog.cybozu.io/entry/2023/05/29/090000

## storybookを活用したVRT
https://tech.medpeer.co.jp/entry/2020/04/10/160000

## storybookコードの自動生成
https://zenn.dev/sum0/articles/9463d16d9d40e2

## 本番デプロイ
- アプリケーションとは別のホスティングで
https://qiita.com/TakuyaHara/items/af5bbc0f590ca897350c

- Chromatic
https://storybook.js.org/tutorials/intro-to-storybook/react/ja/deploy/

Chromaticを使えばVRTもできるし、一石二鳥だね

と思ったけど共通コンポーネントの単体レベルでVRTすることって意味ありそうかな？

専属コンポーネントと結合して行うことがほとんどのイメージ

## VRT
- スナップショットテスト
	- スナップショットテスト: HTMLの出力結果を比較する
	- CSSのグローバル指定の変化は検知できず(単体テストでは見つからなかった問題が結合テストで明らかになったことと同じ)
	- CSS Modulesを使用している場合、CSSの指定内容はスナップショットテストには現れず

- UIコンポーネント単位のビジュアルリグレッションテスト
	- 小粒度UIコンポーネント、中粒度UIコンポーネントに対して行う
	- 画像キャプチャがUIコンポーネント単位であれば、影響の及んだ中粒度のUIコンポーネントを検出可能
	- これを実現可能にするのがStorybook
		- 小粒度UIコンポーネント、中粒度UIコンポーネントをStoryとして登録しておくことにより、VRTの基盤として活用可能
		- 専属コンポーネント内で小粒度UIコンポーネントを使用していると検知できなさそう...
			- 専属コンポーネントもmolecules配下はStory化する？
			- こうなる状況はそもそも設計に改善の余地あり？(専属コンポーネント内で直接小粒度コンポーネントを使用するのを避けるようにすべき？)

## コマンド類
Storybookの立ち上げ
```
// appコンテナに入る
docker-compose exec app sh

npm run storybook
```

Storybookの公開
```
npx chromatic --project-token=<project_token>
```
