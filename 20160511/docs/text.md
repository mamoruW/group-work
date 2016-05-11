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


## webcomponentsについて。
・通常だと、同じタブ機能を作成するには、

- html
- css
- js

などのセットで全て読み込まないと期待通りの動きにならないが、WebComponentsであれば  

` <com-tab></com-tab>`

上記の記述のみでhtml・css・jsまで入っているので、他の要素と切り離すことができる。  

## shadow DOM
・DOMに対してカプセル化を提供する仕組み  
→webcomponentsは独自タブでcssからjsまで読み込んでくれるが、これはどこのhtmlに持って行ってもコンポーネントのみにスタイルやjsが効くようにする必要がある。  
このために必要となるのがshadow DOM。