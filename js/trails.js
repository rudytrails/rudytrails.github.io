var map = new BMapGL.Map('container');
var point = new BMapGL.Point(116.404, 39.925);
map.centerAndZoom(point, 5);
map.enableScrollWheelZoom(true);

var points = [
	{"lng":116.404, "lat":39.925, "title":"故宫", "img":"img/place/tianAnMen.jpg", "content":"第一次去北京跟我哥一起去的，很多人排队，当时有租学生证的，买票会便宜不少，哈哈！"} 
	]
function addMarker(point){
	var pointObj = new BMapGL.Point(point.lng, point.lat);
	var marker = new BMapGL.Marker(pointObj);
	
	map.addOverlay(marker);
	// 创建图文信息窗口
	if (point.title !== "") {
		// 创建小车图标
		var myIcon = new BMapGL.Icon("./img/custom/sign.png", new BMapGL.Size(52, 26));
		// 创建Marker标注
		// var marker = new BMapGL.Marker(pointObj, {icon: myIcon});
		var marker = new BMapGL.Marker(pointObj);
		map.addOverlay(marker);
		var sContent = `<h4 style='margin:0 0 5px 0;'>`+point.title+`</h4>
			<img style='float:right;margin:0 4px 22px' id='imgDemo' src='`+point.img+`' width='139' height='104'/>
			<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
			`+point.content+`
			</p></div>`;
		var infoWindow = new BMapGL.InfoWindow(sContent); // 创建信息窗口对象
		marker.addEventListener("click", function(){
			this.openInfoWindow(infoWindow);
		});
	}
}

for (var i = 0; i < points.length; i++) {
	addMarker(points[i]);
}