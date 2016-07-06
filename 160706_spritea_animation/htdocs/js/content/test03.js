document.addEventListener("DOMContentLoaded", function(){
	"use strict";

/*==================================================
	汎用関数
==================================================*/
//傾き取得
function getSlope(point1, point2){
	var x = Math.abs(point1.x - point2.x);
	var y = Math.abs(point1.y - point2.y);
	return y/x;
}

//min〜maxの範囲内でランダムに1つ取得
function randomSelect(min,max){
	return (Math.random() * (max - min) + min);
}

//正規分布
function gaussian(min,max,repeat){
	var i;
	var sum = 0;

	for( i=0; i<repeat; i++ ){
		sum += randomSelect(min,max);
	}
	return sum / repeat;
}

function crossPoint(p1,p2,p3,p4,cp){
	var s1　= ( (p4.x - p2.x) * (p1.y - p2.y) - (p4.y - p2.y) * (p1.x - p2.x) ) * 0.5;
	var s2　= ( (p4.x - p2.x) * (p2.y - p3.y) - (p4.y - p2.y) * (p2.x - p3.x) ) * 0.5;

	cp.x　= p1.x + (p3.x - p1.x) * s1 / (s1 + s2);
	cp.Y　= p1.y + (p3.y - p1.y) * s1 / (s1 + s2);
}



/*==================================================
	ステージ・オブジェクトの作成
==================================================*/
	//ステージ作成
	var stage = new createjs.Stage("canvas");//canvasのid名

	var dline01 = {
		x: 80,
		y: 0,
	};
	var dline02 = {
		x: 50,
		y: 150,
	};
	var vline01 = {
		x: 130,
		y: 200,
	};
	var vline02 = {
		x: 250,
		y: 250,
	};
	var cpoint = {};


	//オブジェクト作成
	var shape1 = new createjs.Shape();
	shape1.graphics
		.beginStroke('#f55')
		.moveTo(dline01.x, dline01.y)
		.lineTo(vline01.x , vline01.y)
		// .lineTo(vline01.x, vline01.y)
		.closePath ();
		// .endStroke();

		// var r = 400;
		// var degree = 110;
		// var radian = degree * Math.PI / 180;
		// var x = r * Math.cos(radian) + dline01.x;
		// var y = r * Math.sin(radian) + dline01.y;
		// console.log("x=",x, ",y=",y);

		// shape1.x = 50;
		// shape1.y = 50;

		shape1.regX = dline01.x;
		shape1.regY = dline01.y;
		shape1.x = dline01.x;
		shape1.y = dline01.y;

	stage.addChild(shape1);
	stage.update();


	var shape2 = new createjs.Shape();
	shape2.graphics
		.beginStroke('#cc5')
		.moveTo(dline02.x, dline02.y)
		.lineTo(vline02.x , vline02.y)
		.closePath ();

		shape2.regX = dline02.x;
		shape2.regY = dline02.y;
		shape2.x = dline02.x;
		shape2.y = dline02.y;

	stage.addChild(shape2);
	stage.update();


	var shape3 = new createjs.Shape();
	shape3.graphics
		.beginFill("darkred")
		.drawCircle(0, 0, 15)
		.endFill();

	stage.addChild(shape3);
	stage.update();


// var vx = 200;

	//ステージを更新
	(function loop(){

		crossPoint(dline01,vline01,shape2.x,shape2.y,cpoint);
		console.log(shape2.x,shape2.y);
		shape3.x = cpoint.x;
		shape3.y = cpoint.y;

		// shape1.graphics
		// 	.setStrokeDash([20,20], 0)
		// 	.setStrokeStyle(2)
		// 	.moveTo(dline01.x, dline01.y)
		// 	.lineTo(x,y);
			// vx += 1;
			// shape1.rotation -= 1;
			shape2.rotation += 1;


		stage.update();
		requestAnimationFrame(loop);
	})();

}, false);
