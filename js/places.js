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
										`<strong>故宫</strong>
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
										`<strong>居庸关长城</strong>
										<p>从下面看很雄伟，也很陡，最陡的地方几乎要直上直下了。</p>
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
										`<strong>香山</strong>
										<p></p>
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
										`<strong>盛辉公寓</strong>
										<p></p>
										`,
									"icon": "music"
								},
								"geometry": {
									"type": "Point",
									"coordinates": [116.296524, 40.154127]
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