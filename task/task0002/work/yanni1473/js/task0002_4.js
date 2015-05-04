		// $('#active').on('click',function(){
		// 		$.post('activity/add_activity_index ',{
		// 			activity_id:$(this).prev().val()
		// 		},function(data){
		// 			if(data == 'yes'){
		// 				alert('报名成功');
		// 			}else if(data == 'yonghuyibaoming'){
		// 				alert('用户已报名');
		// 			}else if(data == 'ninbushimote'){
		// 				alert('您不是模特');
		// 			}else if(data == 'man'){
		// 				alert("报名人数已满");
		// 			}
		// 		});
		// 	});		
		var data=['ana','cindy','baby','andy','creazy'];
		var oSearch=document.getElementById('search');
		var oResult=document.getElementById('result');
		oSearch.onkeyup=function(){
			var str=this.value;
			oResult.innerHTML="";
			var sHtml="";//字符串拼接
			if(str!=""){
				oResult.style.display="block";
			for(var i=0;i<data.length;i++){
				if(data[i].substr(0,str.length)==str){
					sHtml+="<li>"+data[i]+"</li>";//拼字符串的方式
					// var oLi=document.createElement('li');
					// oLi.innerHTML=data[i];
					// oResult.appendChild(oLi);       
				}
		}
		oResult.innerHTML=sHtml;
	}
	else{
		oResult.style.display="none";
		

	}
};