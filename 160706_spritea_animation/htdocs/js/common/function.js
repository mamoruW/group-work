(function (){
	"use strict";

	window.addEventListener('DOMContentLoaded', function(){

		/*
		*	@gnav active change
		*/
		var gnav = {
			tgtClass: 'wrp-gnav',
			actClass: 'act',
		};

		var pathname = location.pathname;

		var tgtGnav = $('.'+gnav.tgtClass);
		setTimeout(function(){
			if(tgtGnav.length){
				var tgtListAll = tgtGnav.find('li');
				for( var i = 0; i < tgtListAll.length; i++ ){
					var tgtList = tgtListAll.eq(i);
					var tgtHref = tgtList.find('a').attr('href');
					if( pathname === tgtHref ){
						tgtList.addClass(gnav.actClass);
					}
				}
			}
		},1000);
	});

})();
