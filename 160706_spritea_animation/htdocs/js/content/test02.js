document.addEventListener("DOMContentLoaded", function(){
	"use strict";



/*==================================================
	ステージ・オブジェクトの作成
==================================================*/
	//ステージ作成
	var stage = new createjs.Stage("canvas");//canvasのid名


	//オブジェクト作成
	var bmp1 = new createjs.Bitmap("/img/cached.jpg");
	stage.addChild(bmp1);

	var bmp2 = new createjs.Bitmap("/img/cached.jpg");
	bmp2.x = 100;
	bmp2.y = 200;
	stage.addChild(bmp2);

	var bmp3 = new createjs.Bitmap("/img/cached.jpg");
	bmp3.regX = 250;
	bmp3.regY = 140;
	bmp3.x = 600;
	bmp3.y = 200;
	stage.addChild(bmp3);


	//グループ化
	var container = new createjs.Container();
	container.regX = 300;
	container.regY = 200;
	container.x = 100;
	container.y = 100;
	container.addChild(bmp2, bmp3);
	stage.addChild(container);


	//ステージを更新
	// createjs.Ticker.on("tick", function(){
	// 	stage.update();
	// });
	(function loop(){
		bmp2.rotation += 2;
		bmp3.rotation += 2;
		container.rotation += 1;

		stage.update();
		requestAnimationFrame(loop);
	})();

}, false);
