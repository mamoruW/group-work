# 2016/05/11 第5回JS勉強会
## Vue.jsでサンプルを作成
サンプルurl：[http://plumping.heteml.jp/js-a/sample/](http://plumping.heteml.jp/js-a/sample/)
楽天の商品検索APIを使用して、検索ボタンを押すとそのワードで検索。

## Vue.jsのクセ
- jsonデータはかなり書き換えられてしまうので、consoleで確認するときはJSON.stringify(...)で出力しないと全て[Object]になってしまって中身が確認できない。