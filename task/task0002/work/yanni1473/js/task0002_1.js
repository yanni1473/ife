addEvent($('.btn'),'click',fn);
function fn(){
	var v= val($('.ipt'));
	var array = v.split(',');
	if(array.length<11 && array.length>-1 && array[0]!=''){
		uniqArray(array);
		for(var i=0;i<array.length;i++){
			array[i] = '<input type="checkbox">'+'<label>'+trim(array[i])+'</label>'+'&nbsp;';
		}
		append($('.check'),array);
		val($('.ipt'),' ');
	}else{
		addClass('span','tip');
		val($('.ipt'),' ');
	}
}
	
	
 // });
