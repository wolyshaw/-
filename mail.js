window.onload = function(){

	var txt = document.getElementById('txt');
	var tmBut = document.getElementById('tmBut');
	var oBut = document.getElementById('oBut');
	var ul = document.getElementById('ul');
	var div = document.getElementById('div');
	var form = document.getElementById('form');
	var state = document.getElementById('state');

	function setCookie (cooName,cooVal,cooDate){

		var oDate = new Date();
		oDate.setDate(oDate.getDate()+cooDate);

		var nowCoo = getCookie(cooName).split(',');
		
		// if(nowCoo.length <= 1){
			
		// 	alert(3)
		// 	document.cookie = cooName+'='+cooVal+';expires='+oDate;
		// 	} else if(nowCoo.length >1){
		// 		for(var i = 1;i < nowCoo.length;i++){
		// 			if (cooVal == nowCoo[i]) {
		// 				alert(2)
		// 				break;
		// 			} else{	
		// 				alert(1)
		// 				var newCooVal = cooVal+','+getCookie(cooName)
		// 				document.cookie = cooName+'='+newCooVal+';expires='+oDate;
		// 			};
		// 		}
		// 	}
		//通过search方法查询是否有相同的记录存在，如果是－1或0说明没有，如果存在会返回正数
		if (getCookie(cooName).search(cooVal) <= 0) {
			var newCooVal = getCookie(cooName)+','+cooVal
			document.cookie = cooName+'='+newCooVal+';expires='+oDate;
			
		} else{
			return false;
		};

	};

	function getCookie(cooName){
		var cooArr = document.cookie.split('; ');

		for(var i = 0;i < cooArr.length;i++){
			var arrName = cooArr[i].split('=');
			if (arrName[0] == cooName) {
				return arrName[1];
			};
		};

		return '';
	};



	tmBut.onclick = function(){

		var li = document.createElement('li');
		var re = txt.value.match(/id=[0-9]{11}/g);
		txt.value=re;
		var id = txt.value.match(/[0-9]{11}/g);
		txt.value = id;
			if (id == null) {
				li.innerHTML='<p>好像网址输错了，不是详情页的链接吧！</p>';
			}
			else
			{
				li.innerHTML='<a data-type="0" biz-itemid="'+id+'" data-tmpl="628x100" data-tmplid="7" data-rd="2" data-style="2" data-border="1" href=http://item.taobao.com/item.htm?id='+id+' target="_blank">'+id+'</a>';

				setCookie('tm',id,3);
			};
		
		ul.appendChild(li);
		txt.value = '';

	};

	oBut.onclick = function () {

		var li = document.createElement('li');
		var i = txt.value;
		li.innerHTML='<a href='+i+' target="_blank">'+i+'</a>';
		ul.appendChild(li);
		txt.value = '';
	};

	form.onsubmit = function(){
		return false;
	};

	txt.onkeydown = function(ev){

		var ev = window.event || ev;
	    if(ev.keyCode==13){//如果取到的键值是回车

	    	var li = document.createElement('li');
			var i = txt.value;
			li.innerHTML='<a href='+i+' target="_blank">'+i+'</a>';
			ul.appendChild(li);
			txt.value = '';
		};
	};

	txt.onfocus = function(){
		state.style.display = 'block';
		setAp (100)
	};

	txt.onblur = function(){
		setAp (0)
	};

    	var alpha = null;//事先定义
    	var timer = null;//放在函数里面会导致数据错误

	function setAp (utarget){

		clearInterval(timer);

		timer = setInterval(function(){
			var speed = 0;
			if (alpha < utarget) {
				speed = 10;
			} else {
				speed = -10;
			};
			alpha = alpha + speed;
			if(alpha == utarget){
				clearInterval(timer);
			};
			state.style.filter = 'alpha(opacity:'+alpha+')';
			state.style.opacity = parseInt(alpha)/100;
			if (state.style.opacity==0) {state.style.display = 'none'};
		},30);
	};

		var oArr = getCookie('tm').split(',');

		for(var i = 1;i < oArr.length; i++){
			var span = document.createElement('span');
			span.innerHTML='<a data-type="0" biz-itemid="'+oArr[i]+'" data-tmpl="628x100" data-tmplid="7" data-rd="2" data-style="2" data-border="1" href=http://item.taobao.com/item.htm?id='+oArr[i]+' target="_blank">'+oArr[i]+'</a>';
			div.appendChild(span);
		}

	console.log('shaw@xwlong.com')
};