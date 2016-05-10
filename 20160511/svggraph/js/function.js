(function(window, undefined){


	$(function(){
		var stats = [//この情報は親・子に落ちる
			{label : 'A', value: 100},
			{label : 'B', value: 100},
			{label : 'C', value: 100},
			{label : 'D', value: 100},
			{label : 'E', value: 100},
			{label : 'F', value: 100},
		];

		//▼extendでコンストラクタ作らずに直接定義するパターン
		Vue.component('polygraph', {//親コンポーネント
			props:['stats'],//親から子へデータを渡す場合はpropsを使用
			template: '#polygraph-template',
			replace: true,
			computed: {//基本ゲッターで使用
				//ポリゴンの支点をreturnしたものをhtmlに出力
				points: function(){
					var total = this.stats.length;
					return this.stats.map(function(stat, i ){
						var point = valueToPoint(stat.value, i, total);
						return point.x + ',' + point.y;
					}).join(' ');
				}
			},
			components: {//←componentsで登録するとローカルスコープになる。polygraphの子コンポーネント

				'axis-label': {
					props: {//渡すデータの型を決めてられる
						stat: Object,
						index: Number,
						total: Number
					},
					template: '#axis-label-template',
					replace: true,
					computed: {
						point: function () {
						return valueToPoint(
							+this.stat.value + 10,
							this.index,
							this.total
						)
					}
					}
				}
			}
		});
	

	function valueToPoint(value, index, total){
		var x = 0;
		var y = -value * 0.8;
		var angle = Math.PI * 2/total * index;
		var cos = Math.cos(angle);
		var sin = Math.sin(angle);
		var tx    = x * cos - y * sin + 100;
		var ty    = x * sin + y * cos + 100;
		return {
			x : tx,
			y : ty
		}
	}

	new Vue({
		el : "#demo",
		data: {
			newlabel: '',
			stats: stats
		},
		methods: {
			add: function(e){
				e.preventDefault();
				if(!this.newlabel) return
				this.stats.push({
					label: this.newlabel,
					value: 100
				});
				this.newlabel ='';
			},
			remove: function(stat){
				if(this.stats.length > 3) {
					this.stats.$remove(stat)
				}else {
					alert('これ以上削除できん！');
				}
			}
		}
	});



	});
})(this);