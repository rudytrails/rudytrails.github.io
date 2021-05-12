mapboxgl.accessToken = 'pk.eyJ1IjoicnVkeW1lbW8iLCJhIjoiY2tuZmVwMWMyMXB4azJvb281amRlN2xwYyJ9.zy0U0Y3QC3aJe_SAOfjRWg';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [115.425807,34.986443],
	minZoom: 2,
	zoom: 1
});
mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
map.addControl(new MapboxLanguage({
  defaultLanguage: 'zh-Hans'
}));

map.on('load', function () {
	map.loadImage(
		'./img/custom/sign.png',
		function (error, image) {
			if (error) throw error;
			 
			// Add the image to the map style.
			map.addImage('sign', image);
			
			// Add a layer showing the places.
			map.addLayer({
				"id": "places",
				"type": "symbol",
				"source": {
					"type": "geojson",
					"data": {
						"type": "FeatureCollection",
						"features": [
							// 北京
							{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>故宫（2011-07-18）</strong>
										<p>第一次去北京跟我哥一起去的，很多人排队，当时有租学生证的，买票会便宜不少，哈哈！</p>`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.404, 39.925]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>圆明园遗址</strong>
										<p></p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.303548, 40.007763]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>香山（2015-10-24）</strong>
										<p>🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁呢？</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.188382, 39.990412]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>盛辉公寓（2015-08-11）</strong>
										<p>刚来北京时候的落脚点。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.296524, 40.154127]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>莽山森林公园（2016夏天）</strong>
										<p>自由总是与痛苦相伴，幸福却往往失去自由。大多数人都是选择走第二条路。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.294679, 40.264869]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>十三陵水库（2017-02-25）</strong>
										<p>曾驾驭小黄车绕水库骑行，与别人的山地车和公路自行车格格不入，回头率反正不低，贼尴尬~然后傻傻的去追逐落日。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.262774, 40.259433]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>古北水镇（2015-09-12）</strong>
										<p>来北京第一年公司组织团建去的地方，风景不错，有古北水镇、司马台长城。第一次玩三国杀，现在完全忘记怎么玩了。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [117.277318, 40.654251]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>北戴河（2017-07-09）</strong>
										<p>汪国真在《假如你不够快乐》中写到：假如你不够快乐，也不要把眉头深锁，人生本来短暂，为什么还要栽培苦涩？打开尘封的门窗，让阳光雨露洒遍每个角落，走向生命的原野，让风儿熨平前额。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [119.541332, 39.826987]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>居庸关（2016-08-27）</strong>
										<p>天下第一雄关</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.079159, 40.296972]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>乌兰布统风景区（2017-07-16）</strong>
										<p>好朋友来北京玩，带去草原转了一圈，这是他辞职创业的开始，祝好。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [117.227612, 42.602345]
								}
							}
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>雾灵山风景区（2015-09-13）</strong>
										<p>天然氧吧。下山的时候不注意滑了一跤，摔的不轻，不过没事，那时候还年轻呢！</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [117.464597, 40.594467]
								}
							}
							// 大连
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>星海湾（2017-11-26）</strong>
										<p>我们所有人的当下，都只是行走在未来的飘忽不定的记忆中罢了。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [121.588799, 38.876344]
								}
							},{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>猫の天空之城（2017-11-27）</strong>
										<p>猫の天空之城概念书店，可以撸猫哦。类似的还有喵星球、猫小院～～</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [121.693195, 38.932155]
								}
							}
							// 日本
							,{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>名古屋电视塔（2018-01-03）</strong>
										<p>附近转悠了一圈，在商场帮朋友买了一个YSL口红。去HYSTERIC MINI店里帮嫂子问了一下包没找到。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [136.908344, 35.172324]
								}
							},{
								"type": "Feature",
								"properties": {
									"description": 
										`<strong>热田神宫（2018-01-04）</strong>
										<p>独自出门坐地铁按照地图去了热田神宫，回来在松屋吃了碗拉面，然后去超市买了点东西，算是没有障碍吧。</p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [136.909072, 35.125538]
								}
							}
						]
					}
				},
				"layout": {
				"icon-image": "sign",
				"icon-allow-overlap": true
				}
			});
		}
	)
	 
	// When a click event occurs on a feature in the places layer, open a popup at the
	// location of the feature, with description HTML from its properties.
	map.on('click', 'places', function (e) {
		var coordinates = e.features[0].geometry.coordinates.slice();
		var description = e.features[0].properties.description;
		 
		// Ensure that if the map is zoomed out such that multiple
		// copies of the feature are visible, the popup appears
		// over the copy being pointed to.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
		
		new mapboxgl.Popup({closeButton: false})
		.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);
	});
	 
	// Change the cursor to a pointer when the mouse is over the places layer.
	map.on('mouseenter', 'places', function () {
		map.getCanvas().style.cursor = 'pointer';
	});
	 
	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', function () {
		map.getCanvas().style.cursor = '';
	});
});