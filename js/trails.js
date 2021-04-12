var map = new BMapGL.Map('container');
var point = new BMapGL.Point(116.404, 39.925);
map.centerAndZoom(point, 5);
map.enableScrollWheelZoom(true);
var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
map.addControl(navi3DCtrl);
// 创建城市选择控件
var cityControl = new BMapGL.CityListControl({
	// 控件的停靠位置（可选，默认左上角）
	anchor: BMAP_ANCHOR_TOP_LEFT,
	// 控件基于停靠位置的偏移量（可选）
	offset: new BMapGL.Size(10, 5)
});
// 将控件添加到地图上
map.addControl(cityControl);


var points = [
	// 北京
	{"lng":116.404, "lat":39.925, "title":"故宫", "img":"img/place/tianAnMen.jpg", "content":"第一次去北京跟我哥一起去的，很多人排队，当时有租学生证的，买票会便宜不少，哈哈！"} 
	,{"lng":116.303548, "lat":40.007763, "title":"圆明园遗址", "img":"img/place/beijing/tianAnMen.jpg", "content":""}
	,{"lng":116.188382, "lat":39.990412, "title":"香山公园", "img":"img/place/beijing/tianAnMen.jpg", "content":"香山红叶红满天..."}
	,{"lng":116.296524, "lat":40.154127, "title":"盛辉公寓", "img":"img/place/beijing/tianAnMen.jpg", "content":"刚来北京时候的落脚点，地铁站那叫一个挤啊"}
	,{"lng":116.264333, "lat":40.165005, "title":"北街家园", "img":"img/place/beijing/tianAnMen.jpg", "content":"从盛辉公寓搬到北街家园，听说郭德纲姚明在前面的玫瑰园有房子，可惜没时间去拜访~~"}
	,{"lng":116.294679, "lat":40.264869, "title":"莽山森林公园", "img":"img/place/beijing/tianAnMen.jpg", "content":"美好的回忆"}
	,{"lng":116.262774, "lat":40.259433, "title":"十三陵水库", "img":"img/place/beijing/tianAnMen.jpg", "content":"曾驾驭小黄车绕水库骑行，与别人的山地车和公路自行车格格不入，回头率反正不低，贼尴尬~"}
	,{"lng":117.277318, "lat":40.654251, "title":"古北水镇", "img":"img/place/beijing/tianAnMen.jpg", "content":"来北京第一年公司组织团建去的地方，风景不错，有古北水镇、司马台长城。第一次玩三国杀，现在完全忘记怎么玩了。"}
	// 秦皇岛
	,{"lng":119.516368, "lat":39.815773, "title":"北戴河", "img":"img/place/dalian/theairofcat.jpg", "content":"跟俩二黑去沙滩玩了两天，回来之后耳朵发炎了，估计是海水的原因，持续了很长时间。。。"}
	// 内蒙古
	,{"lng":117.14279, "lat":42.58022, "title":"将军泡子景区", "img":"img/place/dalian/theairofcat.jpg", "content":"好朋友来北京玩，带去草原转了一圈，这是他辞职创业的开始，祝好。"}
	// 承德
	,{"lng":117.464597, "lat":40.594467, "title":"雾灵山风景区", "img":"img/place/dalian/theairofcat.jpg", "content":"天然氧吧。下山的时候不注意滑了一跤，摔的不轻 - -"}
	
	// 大连
	,{"lng":121.588799, "lat":38.876344, "title":"星海湾", "img":"img/place/dalian/xinghaiwan.jpg", "content":"美好的回忆"}
	,{"lng":121.68679, "lat":38.925774, "title":"猫の天空之城", "img":"img/place/dalian/theairofcat.jpg", "content":"猫の天空之城概念书店，可以撸猫哦"}
	
	// 济南
	
	// 青岛
	
	// 老家
	
	// 南京
	
	// 上海
	
	// 苏州
	
	// 杭州
	
	// 佛山
	
	// 东莞
	
	// 深圳
	
	// 香港
	
	// **************にほん*****************
	// 名古屋市
	,{"lng":136.908344, "lat":35.172324, "title":"名古屋电视塔", "img":"img/place/dalian/theairofcat.jpg", "content":"附近转悠了一圈，在商场帮朋友买了一个YSL口红。去HYSTERIC MINI店里帮嫂子问了一下包没找到。"}
	,{"lng":136.909072, "lat":35.125538, "title":"热田神宫", "img":"img/place/dalian/theairofcat.jpg", "content":"独自出门坐地铁按照地图去了热田神宫，回来在松屋吃了碗拉面，然后去超市买了点东西，算是没有障碍吧。"}
	
	// 京都府
	
	// 大阪府
	
	// 神戸市
	
	
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