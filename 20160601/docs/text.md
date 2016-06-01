# 第7回JS勉強会 Pixi.jsを使って簡単なアニメーションを実装する
2016/06/01

## Pixi.jsを使った2Dアニメーションの動かし方

### Pixi.jsとは
Goodboy Digital社が配布しているWebGLを使った2D描写ライブラリ。

特徴  
・2D描画で最速  
・ブラウザがWebGLに未対応の場合はCanvasで描画  
・ActionScriptに似たAPI。  
・ビットマップやWebフォントの文字表示をサポート  


▼公式  
http://www.pixijs.com/　(サイト)  
https://github.com/pixijs/pixi.js　(Github)  

▼公式サンプル  
http://pixijs.github.io/examples/  
http://pixijs.github.io/examples/index.html?s=basics&f=spritesheet.js&title=SpriteSheet%20Animation  
http://www.goodboydigital.com/pixijs/bunnymark/  

▼参照した記事  
http://qiita.com/tadfmac/items/3684489e133320cd9d75 (記法V2なので注意)  
http://blog.aquaring.co.jp/501 (記法V3)  
http://labo.project-nya.jp/pixijs/magiclight/ver4/ (Androidで見た感じとても軽い)  
https://ics.media/entry/201 (パフォーマンス検証)  

▼公式V3ドキュメント  
http://pixijs.github.io/docs/ (実装に追いついてないみたいでまだ書かれてないものも。。。)  


▼対応ブラウザ(公式より抜粋)  
Browsers supported by the CanvasRenderer:(Canvas対応ブラウザとほぼ一緒)  
・IE 9+,  
・FF 10+,  
・Chrome 11+,  
・Safari 2.0+,  
・Opera 12+  

Browsers supported by the WebGLRenderer:(WebGL対応ブラウザとほぼ一緒)  
・IE 11+,  
・FF 15+,  
・Chrome 11+,  
・Safari 5.1+,  
・Opera 19+  

We also try very hard to include support for:(サポート激ムズとのこと)  
・Ejecta,  
・CocoonJS  



### 結論  
・現状2D描画系で最速っぽいので2Dアニメーションを実装するにはいいかも  
・3Dの場合、PCの全プラウザで動作するFlashに対してWebGLは一部の環境でしか使えないためPixi.jsのように処理が早くても案件向きでない  
・Pixi.jsに関しては記事がそんなに多くない(?)のと公式ドキュメントもまだ途中のため進めにくいかも  
