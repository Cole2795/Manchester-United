function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
window.onload = function() {
	var imgs = document.getElementById('slideshow').children;
	interval = 2000;
	currentPic = 0;
	imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
	imgs[currentPic].style.animation = 'fadey '+interval+'ms';
	var infiniteLoop = setInterval(function(){
		imgs[currentPic].removeAttribute('style');
		if ( currentPic == imgs.length - 1) {
			currentPic = 0;
		} else {
			currentPic++;
		}
	imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
	imgs[currentPic].style.animation = 'fadey '+interval+'ms';
}, interval);
}// end function 
var img = new Image();
img.src = 'images/wallpaper.jpg';
var CanvasXSize = 1200;
var CanvasYSize = 950;
var speed = 60; //lower is faster
var scale = 1.00;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { 
		x = CanvasXSize-imgW; 
    } // image larger than canvas
    if (imgW > CanvasXSize) { 
		clearX = imgW; 
	} // image larger than canvas
    else { 
		clearX = CanvasXSize; 
	}
    if (imgH > CanvasYSize) { 
		clearY = imgH; 
	} // image larger than canvas
    else {
		clearY = CanvasYSize; 
	}
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
	//Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) {
			x = 0; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) {
			ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
		}
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { 
			x = CanvasXSize-imgW; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { 
			ctx.drawImage(img,x-imgW+1,y,imgW,imgH);			
	    }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}// end function draw
function browserDetection() { 
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.write('Chrome');
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.write('Opera');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        document.write('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.write('IE'); 
    }  
    else{
       document.write('unknown');
    }
}// end function browserDetection
function emailVerification(myForm) {
	re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (re.test(myForm.emailAddr.value)) {
		return true
	}
	alert("Invalid email address")
	myForm.emailAddr.focus()
	myForm.emailAddr.select()
	return false

}//end function emailVerification 
function mouseOver() {
    document.getElementById("text").style.color = "red";
    document.getElementById("text2").style.color = "green";
}// end function

function mouseOut() {
    document.getElementById("text").style.color = "black";
   
}// end function
function dynamicFrame() {
    var frames = window.frames;
    frames[0].location = "http://www.manutd.com/en/Club/Club-Contacts.aspx";
}// end dynamicFrame
function pasuser(form) {
    if (form.id.value=="admin") { 
        if (form.pass.value=="1234") {              
            location="logincorrect.html" 
        } else {
            alert("Invalid Password")
        }
    } else {  
	     alert("Invalid UserID")
    }
}// end function
function newWindows() {
    window.open("http://store.manutd.com/stores/manutd/en");
}//end newWindow
function newWindow() {
    window.open("https://www.eticketing.co.uk/muticketsandmembership/Events/Index");
}//end newWindow
function writeCookie(){
    if( document.myform.customer.value == "" ){
	    alert("Enter some name!");
        return;
    }
    cookievalue= escape(document.myform.customer.value) + ";";
    document.cookie="name=" + cookievalue;
    alert ("Cookies : " + "name=" + cookievalue );
}
function readCookie(){
	document.write ("name=" + cookievalue );
}

 
function timeDigtal(){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	document.write("<b>" + hours + ":" + minutes + " " + "</b>");
	document.write("<b>:" + seconds + "</b>");
	
}//end function timeDigtal
