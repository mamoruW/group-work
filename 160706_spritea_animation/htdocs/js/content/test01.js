document.addEventListener("DOMContentLoaded", function(){
	"use strict";



/*==================================================
	ステージ・オブジェクトの作成
==================================================*/
	//ステージ作成
	var stage = new createjs.Stage("canvas");//canvasのid名


	//オブジェクト作成
	/* 円 */
	var shape1 = new createjs.Shape();
	shape1.graphics.beginFill("darkred");
	shape1.graphics.drawCircle(0, 0, 100);
	shape1.graphics.endFill();//endFillしないと同じオブジェクトを使って次の図形を描画する際に引き継いでしまう

	shape1.graphics.beginStroke("darkblue");
	shape1.graphics.setStrokeStyle(5);
	shape1.graphics.drawCircle(100, 50, 100);
	shape1.graphics.endStroke();

	shape1.graphics.beginFill("darkgreen");
	shape1.graphics.drawCircle(50, 100, 100);
	shape1.graphics.endFill();//endFillしないと同じオブジェクトを使って次の図形を描画する際に引き継いでしまう

	shape1.x = 250;
	shape1.y = 250;

	stage.addChild(shape1);


	/* 四角形 */
	var shape2 = new createjs.Shape();
	shape2.graphics.beginFill("purple");
	shape2.graphics.drawRect(0, 0, 200, 100);
	shape2.graphics.endFill();

	shape2.graphics.beginStroke("skyblue");
	shape2.graphics.setStrokeStyle(10);
	shape2.graphics.drawRect(100, 100, 50, 50);
	shape2.graphics.endStroke();

	shape2.graphics.beginFill("pink");
	shape2.graphics.drawRoundRect(0, 150, 150, 150, 30);
	shape2.graphics.endFill();

	shape2.x = 600;
	shape2.y = 200;

	stage.addChild(shape2);


	/* 多角形 */
	var shape3 = new createjs.Shape();
	shape3.graphics.beginFill("yellow");
	shape3.graphics.drawPolyStar(0, 0, 75, 5, 0.5, -90);
	shape3.graphics.endFill();

	shape3.graphics
		.beginStroke("orange")
		.setStrokeStyle(5)
		.moveTo(0, 0)
		.lineTo(200, 0)
		.lineTo(100, 120)
		.lineTo(0, 0)
		.endStroke();

	shape3.x = 500;
	shape3.y = 400;

	stage.addChild(shape3);

	//ステージを更新
	stage.update();

}, false);
