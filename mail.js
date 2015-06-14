window.onload = function(){

	var txt = document.getElementById('txt');
	var tmBut = document.getElementById('tmBut');
	var oBut = document.getElementById('oBut');
	var ul = document.getElementById('ul');
	var form = document.getElementById('form');
	var state = document.getElementById('state');

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
		},30);
	};
	console.log('shaw@xwlong.com')
};