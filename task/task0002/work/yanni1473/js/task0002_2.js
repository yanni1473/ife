addEvent($('.btn'),'click',time)
var interval = 1000; 
function ShowCountDown(year,month,day,divname) 
{ 
	var now = new Date(); 
var endDate = new Date(year, month-1, day); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
var cc = document.getElementById(divname); 
cc.innerHTML = year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
} 
function time(){
	window.setInterval(function(){
		var str = val($('.ipt'));
var array = str.split('-');
var now = new Date(); 
var year = array[0];
var month = array[1];
var day = array[2];
var divname = 'divdown1';
		ShowCountDown(year,month,day,divname);
	}, interval); 
}
