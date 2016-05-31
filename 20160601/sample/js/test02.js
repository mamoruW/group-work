"use strict";

document.addEventListener("DOMContentLoaded", function(){


/*==================================================
    レンダラー・ステージ・オブジェクトの作成
==================================================*/
    //レンダラー作成
	var width = 1000;
    var height = 600;
    var bg_color = 0x511247;
    var renderer = new PIXI.autoDetectRenderer(width, height, {backgroundColor: bg_color});
    //レンダラーのviewをDOMに追加
	document.getElementById('pixi-area').appendChild(renderer.view);


    //ステージ作成
    var stage = new PIXI.Container();


    //テキストオブジェクト作成
	var word1 = "Hello World!";
	var font_style1 = 'bold 60px Arial';
    var text_color1 = 'white';
    var style1 = {font: font_style1, fill: text_color1};
    var textobj1 = new PIXI.Text(word1, style1);
    textobj1.position.x = 60;
    textobj1.position.y = height / 2;
	textobj1.anchor.x = 0.5;//
	textobj1.anchor.y = 0.5;//

	var word2 = "Hello World!!!";
	var font_style2 = 'bold 100px Georgia';
    var text_color2 = '#f00';
    var style2 = {font: font_style2, fill: text_color2};
    var textobj2 = new PIXI.Text(word2, style2);
    textobj2.position.x = 60;
    textobj2.position.y = height / 2;



    //テキストオブジェクトをステージにのせる
    stage.addChild(textobj1,textobj2);


/*==================================================
    アニメーションの設定
==================================================*/
    //アニメーション関数定義
    function animate(){
        requestAnimationFrame(animate);
		textobj1.rotation += 0.05;//テキスト1を回転

        textobj2.position.x += 5;//テキスト2を横移動
		if(textobj2.position.x > width){
			textobj2.position.x = -(width);
		}
        renderer.render(stage);
    }

    //次のアニメーションフレームでanimate()を呼び出す
    requestAnimationFrame(animate);
});
