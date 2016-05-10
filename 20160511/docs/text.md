# 2016/05/11 第5回JS勉強会
## Vue.jsでサンプルを作成（楽天の）
サンプルurl：[http://plumping.heteml.jp/js-a/sample/](http://plumping.heteml.jp/js-a/sample/)
楽天の商品検索APIを使用して、検索ボタンを押すとそのワードで検索。


## Vue.jsでサンプルを作成（SVGグラフ：Vueのサイトにあるもの）
サンプルurl：[http://plumping.heteml.jp/js-a/svggraph/](http://plumping.heteml.jp/js-a/svggraph/)


## コンポーネントについて
コンポーネントの定義方法は2種類ある。  
(1)vue.extendでコンストラクタを登録→componentで定義  
(2)vue.componentでコンストラクタとともに一気に定義  
サンプルではVueのサンプルを元に作ったので(2)の方法で記述していますが  
本来はきちんと登録と定義を分けた方がたぶん汎用性はあると思う。