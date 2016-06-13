/**
* @fileOverview
* @name function.js
* @summary dポイント25%キャンペーンLPページ用JS
*/

if(typeof utility === 'undefined') var utility = {};

(function(){
	$(function(){
		rjs.imgPreload([
			'img/main_ttl.gif',
			'img/cloud_1.gif',
			'img/cloud_2.gif',
			'img/poink_1.gif',
			'img/poink_2.gif',
			'img/paper.gif'
		],
		function(){
			new Main();
		});
	});

	/**
	* @class Main
	* @summary 全ページロード時共通処理
	*/
	var Main = (function(){

		/**
		* @constructor
		*/
		function construct(){
			this.checkBrowser();
			this.ios_ver();
			this.and_ver();

			if($('body').hasClass('ie8') || $('body').hasClass('ie9')){
				//null
			} else {
				var _this = this;

				_this.boundEmt();

				fadeTime = setTimeout(function(){
					_this.fadeIn();
					_this.fade2();
				}, 1300);

				window.addEventListener("scroll", function(){
					_this.slidePop();
					_this.fadeIn();
					_this.fade2();
				});
			}
		};// ▲ construct ▲

		/**
		* @summary ブラウザ判別Class
		*/
		construct.prototype.checkBrowser = function () {
			if(rjs.checkUA.iOS || rjs.checkUA.android){
				$('body').addClass('mobile');
			}
			else if(rjs.checkUA.ie8){
				$('body').addClass('ie8');
			}
			else if(rjs.checkUA.ie9){
				$('body').addClass('ie9');
			}
			else if(rjs.checkUA.firefox){
				$('body').addClass('firefox');
			}

			if(rjs.checkUA.ie){
				$('body').addClass('ie');
			}
		};

		// iOSのバージョン判断
		construct.prototype.ios_ver = function () {
			var ios_ua = navigator.userAgent;
			if( ios_ua.indexOf("iPhone") > 0 ) {
				ios_ua.match(/iPhone OS (\w+){1,3}/g);
				var version = (RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
				return version;
				alert(version);
			}
		};

		// Androidのバージョン判断
		construct.prototype.and_ver = function () {
			var and_ua = navigator.userAgent;
			if( and_ua.indexOf("Android") > 0 ) {
				var version = parseFloat(and_ua.slice(and_ua.indexOf("Android")+8));
				return version;
				alert(version);
			}
		};

		/**
		* @boundElement 要素をバウンスさせて表示
		*/
		construct.prototype.boundEmt = function(){
			$(window).on('load', function(){
				// 上から下に出てくる
				$.each($('#container .bound_down'), function(){
					var $tgt = $(this);
					var tgtHeight = $tgt.height();
					var tgtcssTop = $tgt.css('top');
					var tgtTop = $tgt.position().top;
					$tgt.css('top', tgtTop - tgtHeight + 'px');
					$tgt.css('visibility', 'visible');

					loadTtl = setTimeout(function(){
						$tgt.animate({
							top: tgtTop + 20
						}, 200, function(){
							$tgt.animate({
								top: tgtcssTop
							}, 200, function(){
								$tgt.css('top', '');
							});
						});
					}, 800);
				});

				// 下から上に出てくる
				$.each($('#container .bound_up'), function(){
					var $tgt = $(this);
					var tgtHeight = $tgt.height();
					var tgtTop = $tgt.position().top;
					$tgt.css('top', tgtTop + tgtHeight + 'px');

					loadTtl = setTimeout(function(){
						$tgt.animate({
							top: tgtTop - 20
						}, 200, function(){
							$tgt.animate({
								top: tgtTop
							}, 200, function(){
								$tgt.css('top', '');
							});
						});
					}, 800);
				});
			});
		};

		/**
		* @fadeIn 少し上からふわっと出現
		*/
		construct.prototype.fadeIn = function(){
			$.each($('#container .fade'), function(){
				var $fadeTgt = $(this);
				var fadeTop = $fadeTgt.position().top;
				var offTop = $fadeTgt.offset().top;
				var winTop = $(window).scrollTop();
				var winHeight = $(window).height();

				if($fadeTgt.hasClass('show')){
					//null
				} else {
					if(winTop > offTop - winHeight + winHeight/4){
						var prevalue = function(callback){
							$fadeTgt.css('top', fadeTop - 15 + 'px');
							callback();
						};

						prevalue(function(){
							$fadeTgt.animate({
								'opacity': '0.1'
							}, 100, function(){
								$fadeTgt.animate({
									'top': fadeTop + 'px',
									'opacity': '1'
								}, 1800, function(){
									$fadeTgt.css('top', '');
								});
							});
							$fadeTgt.addClass('show');
						});
					}
				}
			});
		};

		/**
		* @fade2 その場でフェイドイン
		*/
		construct.prototype.fade2 = function(){
			$.each($('#container .fade2'), function(){
				var $fadeTgt = $(this);
				var offTop = $fadeTgt.offset().top;
				var winTop = $(window).scrollTop();
				var winHeight = $(window).height();

				if($fadeTgt.hasClass('show')){
					//null
				} else {
					$(function(){
						if(winTop > offTop - winHeight + winHeight/4){
							$fadeTgt.animate({
								'opacity': '1'
							}, 2000);
							$fadeTgt.addClass('show');
						}
					});
				}
			});
		};

		/**
		* @slidePop 左右から棒付きイラストが出現
		*/
		construct.prototype.slidePop = function(){
			$.each($('#container .bar'), function(){
				var $popTgt = $(this);
				var popTop = $(this).offset().top;
				var winTop = $(window).scrollTop();
				var winHeight = $(window).height();

				if(winTop > popTop - winHeight + winHeight/5){
					if($popTgt.hasClass('show')){
						//null
					} else {
						$popTgt.addClass('show');
						//mobile限定処理 transform-originが効かない端末があるため
						if($('body').hasClass('mobile') && $popTgt.hasClass('bar_l')){
							$popTgt.animate({
								'left': '0'
							}, 1200, 'swing');
						} else if($('body').hasClass('mobile') && $popTgt.hasClass('bar_r')){
							$popTgt.animate({
								'right': '0'
							}, 1200, 'swing');
						} else {
							//null
						}
					}
				}
			});
		};

		return construct;
	})();

})(utility);