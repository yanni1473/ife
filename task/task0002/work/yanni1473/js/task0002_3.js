
		var oTab=document.getElementById('tab');
		var aLi=oTab.getElementsByTagName('li');
		var oPane=document.getElementById('pane');
		var aimg=oPane.getElementsByTagName('img');
		var oArrow=document.getElementById('arrow');
		var aSpan=oArrow.getElementsByTagName('span');
		var oContainer=document.getElementById('container');
		var t=0;
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;//记录索引
			aLi[i].onclick=function(){
				switchimg(this.index);
				t=this.index;
			};
			}
		aSpan[0].onclick=function(){
			t--;
			if(t<0)
			{
				t=aLi.length-1;
			}
			switchimg(t);
		}
		aSpan[1].onclick=function(){
			t++;
			if(t>aLi.length-1){
				t=0
			}
			switchimg(t);
		}
		function switchimg(oi)
		{
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";
				aimg[i].className='';
			}
			aLi[oi].className="active";
			aimg[oi].className="active"
		}
		var timer;
		function start(){
			timer=setInterval(function(){aSpan[1].onclick();},2000);
		}
		start();
		oContainer.onmouseover=function(){
			clearInterval(timer);
		}
		oContainer.onmouseout=function(){
			start();
		}