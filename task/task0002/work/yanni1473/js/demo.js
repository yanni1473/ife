	function $(id){

			return document.getElementById(id);
		}
		function add(num1,num2){
			return num1 + num2;
		}
		function renderResult(result){
			$('result').innerHTML = result;
		}
		function addEventHandle(){
			
			var num1 = $('number1').value;
			var num2 = $('number2').value;
			num1 = parseInt(num1);
			num2 = parseInt(num2);
			var result = add(num1,num2);
			alert(result);
			renderResult(result);
		}		
		function initEvent(){
			// <!-- if IE8 -->
			// $('addbtn').attachEventListener('click',addEventHandle,false);
			// <!--END-->
			$('addbtn').addEventListener('click',addEventHandle,false);
		}
initEvent();