var drag = document.getElementById('a'); 
// var inputX = document.getElementById('x');  
// var inputY = document.getElementById('y');  
if(document.attachEvent){  
drag.attachEvent('onmousedown',dragHandle);  
}else{  
drag.addEventListener('mousedown', dragHandle,false);  
}  
function dragHandle(event){  
    var event = event||window.event;  
    var startX = drag.offsetLeft;  
    var startY = drag.offsetTop;  
    var mouseX = event.clientX;  
    var mouseY = event.clientY;  
    var deltaX = mouseX - startX;  
    var deltaY = mouseY - startY;  
    if(document.attachEvent){  
        drag.attachEvent('onmousemove',moveHandle);  
        drag.attachEvent('onmouseup',upHandle);  
        drag.attachEvent('onlosecapture',upHandle);  
        drag.setCapture();  
    }else{  
        document.addEventListener('mousemove',moveHandle,true);  
        document.addEventListener('mouseup',upHandle,true);  
    }  
    function moveHandle(event){  
        var event = event||window.event;  
        drag.style.left = (event.clientX - deltaX)+"px";  
        drag.style.top = (event.clientY - deltaY)+"px";  
        if (event.clientX - deltaX > 530 || event.clientY - deltaY >150 || event.clientY - deltaY <80) {
            drag.style.left = 540 +"px";  
            drag.style.top = 100 +"px";  
        }else if(event.clientX - deltaX <380 || event.clientY - deltaY >150 || event.clientY - deltaY <80){
            drag.style.left = 370 +"px";  
            drag.style.top = 100 +"px";
        }
        // inputX.value=drag.style.left;  
        // inputY.value=drag.style.top;  
    }  
    function upHandle(){  
        if(document.attachEvent){  
            drag.detachEvent('onmousemove',moveHandle);  
            drag.detachEvent('onmouseup',upHandle);  
            drag.detachEvent('onlosecapture',upHandle);  
            drag.releaseCapture();  
        }else{  
            document.removeEventListener('mousemove',moveHandle,true);  
            document.removeEventListener('mouseup',upHandle,true);  
        }  
    }  
  
}  