document.addEventListener("DOMContentLoaded", function(){
	"use strict";

/*==================================================
	ステージ・オブジェクトの作成
==================================================*/
	//ステージ作成
	var stage = new createjs.Stage("canvas");//canvasのid名

	//スプライトシート設定
	var frame_width = 600;
	var frame_height = 400;
	var data = {
		images: ['/img/sprite/toaster_sprite01.png'],
		frames: {
			width: frame_width,
			height: frame_height,
		},
		animations: {
			toaster: [
				0,//開始フレーム
				76,//終了フレーム
				"popup1",//次のアニメーション名(true,falseでループ設定)
				0.5,//再生スピード
			],
			popup1: [
				46,
				76,
				"popup2",
				0.5,
			],
			popup2: [
				46,
				76,
				"popup3",
				0.5,
			],
			popup3: [
				46,
				76,
				"toaster",
				0.5,
			]
		}
	};

	//スプライトシート作成
	var spriteSheet = new createjs.SpriteSheet(data);
	//オブジェクト(スプライトアニメーション)作成
	var animation = new createjs.Sprite(spriteSheet,"toaster");
	//ステージに追加
	stage.addChild(animation);



/*==================================================
	描画用のループ
==================================================*/
	//ステージを更新
	(function loop(){
		stage.update();
		requestAnimationFrame(loop);
	})();

}, false);
