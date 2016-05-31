"use strict";

document.addEventListener("DOMContentLoaded", function(){


/*==================================================
    レンダラー・ステージ・オブジェクトの作成
==================================================*/
    //レンダラー作成
	var width = 1000;
    var height = 600;
    var renderer = new PIXI.autoDetectRenderer(width, height, {backgroundColor: 0x448888});
    //レンダラーのviewをDOMに追加
	document.getElementById('pixi-area').appendChild(renderer.view);


    //テキストオブジェクト作成
    var textobj = new PIXI.Text("Hello World!", {font: 'bold 60px Arial', fill: 'white', dropShadow: true, dropShadowDistance: 10, align: 'center'});
    textobj.position.x = 100;//top基点
    textobj.position.y = 100;//left基点


	//ステージ作成
    var stage = new PIXI.Container();
    //テキストオブジェクトをステージにのせる
    stage.addChild(textobj);


/*==================================================
    アニメーションの設定
==================================================*/
    //アニメーション関数定義
    function animate(){
        requestAnimationFrame(animate);
        textobj.rotation += 0.05;
        renderer.render(stage);
    }

    //次のアニメーションフレームでanimate()を呼び出す
    requestAnimationFrame(animate);
});
