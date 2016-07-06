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
			def: [
				0
			],
			bake: [
				1,
				25,
				"bakekeep",
				0.5,
			],
			bakekeep: {
				frames: [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26],
				next: true,
				speed: 0.3,
			},
			popup: [
				46,
				76,
				"def",
				0.5,
			],
			toaster: [
				0,
				76,
				"def",
				0.5,
			]
		}
	};

	//スプライトシート作成
	var spriteSheet = new createjs.SpriteSheet(data);
	//オブジェクト(スプライトアニメーション)作成
	var animation = new createjs.Sprite(spriteSheet, "def");
	//ステージに追加
	stage.addChild(animation);



/*==================================================
	イベントの設定
==================================================*/
	/* クリックイベント */
	$('.btn1')[0].addEventListener('click', function(){
		animation.gotoAndPlay("bake");
	}, false);

	$('.btn2')[0].addEventListener('click', function(){
		animation.gotoAndPlay("popup");
	}, false);

	$('.btn3')[0].addEventListener('click', function(){
		animation.gotoAndPlay("toaster");
	}, false);


	/* キーダウンイベント */
	window.addEventListener('keydown', function(e){
		var keyCode = e.keyCode;

		switch (keyCode) {
			case 66: animation.gotoAndPlay("bake"); break;//「B」を押した時
			case 80: animation.gotoAndPlay("popup"); break;//「P」を押した時
			case 84: animation.gotoAndPlay("toaster"); break;//「T」を押した時
		}
	});


/*==================================================
	描画用のループ
==================================================*/
	//ステージを更新
	(function loop(){
		stage.update();
		requestAnimationFrame(loop);
	})();

}, false);
