//判断是不是数组
function isArray(arr){
 if(arr.constructor == Array){
 	console.log(arr+'数组')//  	return true;
 }else{
 	console.log(arr+'不是数组')
 	return false;
 }
}
// var arr = [];
// var arr1 = 123;
// isArray(arr);
// isArray(arr1);
//判断是不是函数
function isFountion(fn){

	if(fn.constructor ==  Function){
		console.log(fn+'是函数');
		return true
	}else{
		console.log(fn+'不是函数');
		return false;
		
	}
}
// var a = function(){};
// var b = [1,2,3];
// isFountion(a);
// isFountion(b);

//深克隆
function clone(srcObj) {
var o = (srcObj.constructor === Array ? [] : {});
for(var e in srcObj) {
	o[e] = typeof srcObj[e] === "object" ? clone(srcObj[e]) : srcObj[e];
 }
 return o;
}

// var srcObj = {
// 	a:1,
// 	b:{
// 		b1:["hello","hi"],
// 		b2:"JavaScript"
// 	},
// 	c:'jajaj'
// };
// var abObj = srcObj;
// var tarObj = clone(srcObj);
// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"
//数组去重
function uniqArray(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]===arr[j]){
				arr[j] = '';
			}
		}
	}
	var str = [];
	var j=0;
	for(var k=0;k<arr.length;k++){
		if (arr[k]) {
			str[j] = arr[k];
			j++;
		};
	}
	return str;
}
// var a = [1, 3, 5, 7, 5, 3];
// var b = uniqArray(a);
// console.log(b); // [1, 3, 5, 7]
// //trim去空格
function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}
// var str = '   hi!  ';
// console.log(str+'原长度是'+str.length)
// str = trim(str);
// console.log(str+'去掉空格后的长度是'+str.length); // 'hi!'
// //each遍历数组
function each(arr, fn) {
	for(var i=0;i<arr.length;i++){
		fn(arr[i],i);
	}
}
// var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index+':'+item);
}
// each(arr, output);  // java, c, php, html
//获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(o) {
	// var o = (obj.constructor === Array ? [] : {});
	var i=0;
	for(var e in o) {
		i++;
 	}
 	return i;
}
// var obj = {
//     a: 1,
//     b: 2,
//     c: {
//         c1: 3,
//         c2: 4
//     }
// };
// console.log(getObjectLength(obj)); // 3
//正则表达式判断邮箱地址
function isEmail(emailStr) {
	var tegmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(tegmail.test(emailStr)){
		console.log(emailStr+'是邮箱地址');
	}else{
		console.log(emailStr+'不是邮箱地址')
	}
}
// var mail1 = '444444444@qq.com';
// var mail2 = 123;
// isEmail(mail1);
// isEmail(mail2);
// 判断是否为手机号
function isMobilePhone(phone) {
	var regphone = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|18[0-9]\d{8}/;
    	if(regphone.test(phone)){
		console.log(phone+'是手机号');
	}else{
		console.log(phone+'不是手机号');
	}
}
// var p1=18245011473;
// var p2= 111;
// isMobilePhone(p1);
// isMobilePhone(p2);
//为DOM增加一个样式名为newCLASSNAME
function addClass(element, newClassName) {
	if(!newClassName || newClassName.constructor !=String)
		return;
	var re = new RegExp('\\b'+newClassName+'\\b');
	var x = document.getElementsByTagName(element);
	for(var i=0;i<x.length;i++){
		if(!re.test(x[i].className)){
			x[i].className = x[i].className+' '+newClassName;
		} else{ 

		//x[i].className = x[i].className+''+newClassName;
		}
	}
}
// addClass('a','yes');

//移除dom中的样式oldClassName
function removeClass(element, oldClassName) {
    if(!oldClassName || oldClassName.constructor !=String)
		return;
		var re = new RegExp('\\b'+oldClassName+'\\b');
		var x = document.getElementsByTagName(element);
		for(var i=0;i<x.length;i++){
		if(re.test(x[i].className)){
			x[i].className=trim(x[i].className.replace(oldClassName,' '));//替换函数
		}
	}

}
// removeClass('li','no');
// X判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
	var efather = document.getElementsByTagName(element)[0].parentNode;
	var sfather = document.getElementsByTagName(siblingNode)[0].parentNode;
	console.log(efather);
	console.log(sfather);
	// if(efather == sfather){
	// 	return true;
	// }
}
// isSiblingNode('a','li')

/**
 * 获取浏览器可视区高度
 * @return 浏览器可视区高度，不带单位
 */
// Find the height of the viewport
function windowHeight() {
    // A shortcut, in case we’re using Internet Explorer 6 in Strict Mode
    var de = document.documentElement;

    // If the innerHeight of the browser is available, use that
    return self.innerHeight ||

        // Otherwise, try to get the height off of the root node
        ( de && de.clientHeight ) ||

        // Finally, try to get the height off of the body element
        document.body.clientHeight;
}
/**
 * 获取浏览器可视区宽度
 * @return 浏览器可视区宽度，不带单位
 */
function windowWidth() {
    // A shortcut, in case we’re using Internet Explorer 6 in Strict Mode
    var de = document.documentElement;

    // If the innerWidth of the browser is available, use that
    return self.innerWidth ||

        // Otherwise, try to get the width off of the root node
        ( de && de.clientWidth ) ||

        // Finally, try to get the width off of the body element
        document.body.clientWidth;
}
// 获取dom相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
	var e = document.getElementsByTagName(element)
	var x = e[0].offsetLeft;
	var y = e[0].offsetTop;
	var position = {
		xx:x,
		yy:y
	};
	return position;
}
// var p = getPosition('a'); 
/*根据元素的ID选择*/
/*
*@param(参数)的SID就是元素传过来的ID
*/
function id(sId){
	return document.getElementById(sId);
}
/*
*根据元素标签选定元素
*/
function tag(sTagName,context){
	context =context||document;
	return context.getElementsByTagName(sTagName);
}
/*
*根据元素类选定元素
@param context （上下文）（标签）
*/
function byClass(sName,context,stype){
	var result =[];
	context =context||document;
	if(document.getElementsByClassName&&!stype){
		return document.getElementsByClassName(sName);
	}
	
	stype = stype || '*';
	var aElem = document.getElementsByTagName(stype);
	
	for(var i=0;i<aElem.length;i++){
		var re = new RegExp("\\b" + sName +"\\b");
		if(re.test(aElem[i].className.indexOf(sName))){
			result.push(aElem[i]);
		}
	}
	return result;
}
function $(selector,context,stype){
		switch(selector.charAt(0)){
			case '#':
				return [id(selector.substr(1))];
				break;
			case '.':
				return byClass(selector.substr(1))[0];
				break;
			default:
				return tag(selector,context)[0];
		}

}
// var k = $("#li ");
// var j = $('.ipt');
// // console.log(k);
// console.log(j);
// 可以通过attribute匹配获取DOM对象，例如
//$("[data-log]"); // 返回第一个包含属性data-log的对象
function attr(elem, name, value) {
    if ( !name || name.constructor != String ) 
    	return '';
    name = { 'for': 'htmlFor', 'class': 'className' }[name] || name;
    if ( value != null ) {
        elem[name] = value;
        if ( elem.setAttribute )
            elem.setAttribute(name,value);
    }else{
    	return elem.getAttribute(name);
    }
}
 // var att = attr(document.getElementsByTagName('a')[0],'data-log');
 // console.log(att);
////////////判断浏览器是不是IE/////////////////
function isIE() {
	var explorer = window.navigator.userAgent ;
	if (explorer.indexOf("MSIE") >= 0) {
			console.log("是ie");
		}else{
			console.log('不是IE')
		}
}
// isIE();
/************判断浏览器类型***********************/
function getExplorer() {
	var explorer = window.navigator.userAgent ;
//ie 
	if (explorer.indexOf("MSIE") >= 0) {
			console.log("ie");
		}
//firefox 
	else if (explorer.indexOf("Firefox") >= 0) {
		console.log("Firefox");
		}
//Chrome
	else if(explorer.indexOf("Chrome") >= 0){
		console.log("Chrome");
	}
//Opera
	else if(explorer.indexOf("Opera") >= 0){
		aconsole.log("Opera");
	}
//Safari
	else if(explorer.indexOf("Safari") >= 0){
		console.log("Safari");
	}
}
getExplorer();
// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var now= new Date();//当前系统时间
		//得到几天后的时间
	now.setDate(now.getDate()+expiredays)
	var sCookie =cookieName+"="+value;
			if(expiredays){
				document.cookie = cookieName+"="+value+';expires='+now;
			}else{
				document.cookie = cookieName+"="+value;
			}
}

// 获取cookie值
function getCookie(cookieName) {
 	var arr=document.cookie.split(';');
			//便利数组中每一个元素
			for(var i=0;i<arr.length;i++){
				var arr2=arr[i].split('=');//[,]
				if (arr2[0]==cookieName) {
					return arr2[1];
				};
			}
			return "";
}
//X给一个dom绑定一个针对event事件的响应，响应函数为listener
function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    }else if(elem.attachEvent){
        elem['temp' + type + handler] = handler;
        elem[type + handler] = function(){
            elem['temp' + type + handler].call(elem);
        };
        elem.attachEvent('on' + type, elem[type + handler]);
        
    }else{
        elem['on' + type] = handler;
    }
}

// 移除dom对象对于event事件发生时执行listener的响应，当listener为空时，移除所有响应函数
function removeEvent(elem, type, handler){
    if(elem.removeEventListener){
        elem.removeEventListener(type, handler);
    }else if(elem.detachEvent){
        elem.detachEvent('on' + type, elem[type + handler]);
    }else{
        elem['on' + type]  = null;
    }
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
     if(element.addEventListener){
        element.addEventListener('click', listener, false);
    }else if(element.attachEvent){
        element['temp'+'click'+listener] = listener;
        element['click' + listener] = function(){
            element['temp' + 'click' + listener].call(element);
        };
        element.attachEvent('on' + 'click', elem['click' + listener]);
        
    }else{
        elem['on' + 'click'] = listener;
    }
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
      if(element.addEventListener){
        element.addEventListener('enter', listener, false);
    }else if(element.attachEvent){
        element['temp'+'enter'+listener] = listener;
        element['enter' + listener] = function(){
            element['temp' + 'enter' + listener].call(element);
        };
        element.attachEvent('on' + 'enter', elem['enter' + listener]);
        
    }else{
        elem['on' + 'enter'] = listener;
    }
}
// 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
// - addEvent(element, event, listener) -> $.on(element, event, listener);
// - removeEvent(element, event, listener) -> $.un(element, event, listener);
// - addClickEvent(element, listener) -> $.click(element, listener);
// - addEnterEvent(element, listener) -> $.enter(element, listener);
/**
 * ajax函数
 * @param type 请求的类型：GET/POST
 * @param url 请求的地址
 * @param data 提交的数据
 * @param callback 回调函数
 */
function ajax(options){

    options = {
        type: options.type || 'GET',
        url: options.url,
        data: options.data || {}, //????
        callback: options.callback || function(){}
    };

    var xmlHttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //"xxx.php?name=zs&age=34&sex=male"
    xmlHttp.open(options.type, options.url + "?" + serialize(options.data) ,true);
    xmlHttp.send();


    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
            options.callback(xmlHttp.responseText);          
        }
    };

    //return "name=zs&age=34&"
    //data {name:'zs', age:34}
    function serialize(data){
        var t = "";
        for(var prop in data){
            t += prop + '=' + data[prop] + '&'
        }
        return t?t.substring(0, t.length - 1):"";
    }

}
//****************获取元素VALUE值******
function val(elem, value){
    if(!value) 
    return elem.value || "";
    if(typeof value != "string" 
        && typeof value != "number" 
        && typeof value != "boolean")
        return "";
    elem.value = value;
}
function append( parent, elem ) {
    // Get the array of elements
    var elems = checkElem( elem );

    // Append them all to the element
    for ( var i = 0; i < elems.length; i++ ) {
        parent.appendChild( elems[i] );
    }
}
function checkElem(a) {
    var r = [];
    // Force the argument into an array, if it isn’t already
    if ( a.constructor != Array ) 
        a = [ a ];//["<p>1111</p><strong>2222</strong>"]

    for ( var i = 0; i < a.length; i++ ) {
        // If there’s a String
        if ( a[i].constructor == String ) {
            // Create a temporary element to house the HTML
            var div = document.createElement("div");

            // Inject the HTML, to convert it into a DOM structure
            div.innerHTML = a[i];// <p>1111<strong>2222</strong></p>

             // Extract the DOM structure back out of the temp DIV
             for ( var j = 0; j < div.childNodes.length; j++ )
                 r[r.length] = div.childNodes[j];
        } else if ( a[i].length ) { // If it’s an array
            // Assume that it’s an array of DOM Nodes
            for ( var j = 0; j < a[i].length; j++ )
                r[r.length] = a[i][j];
        } else { // Otherwise, assume it’s a DOM Node
            r[r.length] = a[i];
        }
    }
    return r;
} 
