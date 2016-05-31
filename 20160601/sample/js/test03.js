"use strict";

document.addEventListener("DOMContentLoaded", function(){

/*==================================================
    レンダラー・ステージ・オブジェクトの作成
==================================================*/
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



/*==================================================
    レンダラー・ステージ・オブジェクトの作成
==================================================*/
    //レンダラー作成
	var width = 1000;
    var height = 600;
    var bg_color = 0x234566;
    var renderer = new PIXI.autoDetectRenderer(width, height, {backgroundColor: bg_color});
    //レンダラーのviewをDOMに追加
	document.getElementById('pixi-area').appendChild(renderer.view);


    //ステージ作成
    var stage = new PIXI.Container();


    //スプライトオブジェクト作成
	var texture = PIXI.Texture.fromImage('../img/snow.png');//ベース画像の設定
	var MAX_SNOW = 100;//オブジェクト数
	var k = {//変化率
		x_min: 0.8,
		x_max: 1.4,
		y_min: 0.9,
		y_max: 1.4,
	};
	var range = {//描画範囲上限
		left: 10,
		right: 10,
		top: 10,
		bottom: 10,
	}
	var snowimgs = [];
	var vx = 0, windX = 0;
	var vy = 0, windY = 0;
	var obj_size = {
		min: 5,
		max: 15,
	}
	var obj_speed = {//雪が吹くスピード
		x_min: 0.8,
		x_max: 1.2,
		y_min: 0.8,
		y_max: 1.6,
	}

	//雪
	for( var i=0; i<MAX_SNOW; i++ ){
		snowimgs.push(new PIXI.Sprite(texture));
		snowimgs[i].position.x = Math.random() * width;//left基準で横方向の配置範囲指定
		snowimgs[i].position.y = Math.random() * height;//top基準で縦方向の配置範囲指定
		snowimgs[i].anchor.x = 0.5;//オブジェクトの横方向中心点[0〜1]
		snowimgs[i].anchor.y = 0.5;//オブジェクトの縦方向中心点[0〜1]
		snowimgs[i].alpha = Math.random()/2 + 0.4;//透過率[0〜1]
		// var scale = Math.random() * 1.5;//サイズ
		// snowimgs[i].scale.x = scale;
		// snowimgs[i].scale.y = scale;
		var size = Math.floor(randomSelect(obj_size.min,obj_size.max));//サイズ
		snowimgs[i].width = size;
		snowimgs[i].height = size;
		var wind_k = {
			x: Math.random() * (k.x_max - k.x_min) + k.x_min,//[今回は0.8〜1.2]
			y: Math.random() * (k.y_max - k.y_min) + k.y_min//[今回は0.9〜1.1]
		};
		snowimgs[i].wind_kx = wind_k.x;//縦方向の風影響率
		snowimgs[i].wind_ky = wind_k.y;//横方向の風影響率
		stage.addChild(snowimgs[i]);
	}



/*==================================================
    アニメーションの設定
==================================================*/
    //アニメーション関数定義
    function animate(){
        requestAnimationFrame(animate);

		vx = randomSelect(obj_speed.x_min,obj_speed.x_max);
		vy = randomSelect(obj_speed.y_min,obj_speed.y_max);
		windX = gaussian(-10,12,3)/100;
		windY = gaussian(0,3,3)/100;

		for( i = 0 ; i < MAX_SNOW ; i++ ){

			snowimgs[i].position.x += vx * snowimgs[i].wind_kx + windX;
			snowimgs[i].position.y += vy * snowimgs[i].wind_ky + windY;

			//右に行き過ぎたら左に再配置
			if( snowimgs[i].position.x > width + range.right ){
				snowimgs[i].position.x = -(range.left);
			}
			//左に行き過ぎたら右に再配置
			if( snowimgs[i].position.x < -(range.left) ){
				snowimgs[i].position.x = width + range.right;
			}
			//下まで落ちたら上に再配置
			if( snowimgs[i].position.y > height + range.bottom ){
				snowimgs[i].position.y = -(range.top);
			}
		}
        renderer.render(stage);
    }

    //次のアニメーションフレームでanimate()を呼び出す
    requestAnimationFrame(animate);
});
