var s = document.getElementById("vimage");
var height = s.getAttribute("height");
var width = s.getAttribute("width");
var rid;

var clear = function(){
    while(s.lastChild){
	s.removeChild(s.lastChild);
    }
};

var circleClick = function(e){
    console.log("CIRCLE" + this);
    if (this.getAttribute("fill") == "blue"){
	this.setAttribute("fill","purple");
	e.stopPropagation();
    }
    else {
	this.remove();
	var x = Math.floor(Math.random() * 480);
	var y = Math.floor(Math.random() * 280);

	var c = makeDot(x,y);
	s.appendChild(c);
	e.stopPropagation();
    }
}

var makeDot = function(x,y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("dx", "1");
    c.setAttribute("dy","1");
    c.setAttribute("fill","blue");
    c.setAttribute("r", "20");
    c.addEventListener("click", circleClick);
    return c;
};



var drawDot = function(e){
    s.appendChild(makeDot(e.offsetX, e.offsetY));
}

var move = function(){
    window.cancelAnimationFrame(rid);
   
    var moveCircle = function(){
	
	var circles = document.getElementsByTagName('circle');

	for (var i = 0; i < circles.length; i++) {
	    var x = parseInt(circles[i].getAttribute("cx"));
	    var y = parseInt(circles[i].getAttribute("cy"));
	    var dx = parseInt(circles[i].getAttribute("dx"));
	    var dy = parseInt(circles[i].getAttribute("dy"));
	    if (x < 20 || x > width - 20)
		dx *= -1;
	    if (y < 20 || y > height - 20)
		dy *= -1;
	    x += dx;
	    y += dy;
	    circles[i].setAttribute("cx", x);
	    circles[i].setAttribute("cy",y);
	    circles[i].setAttribute("dx",dx);
	    circles[i].setAttribute("dy",dy);
	    console.log(x);
	}
	
	rid = window.requestAnimationFrame( moveCircle );
    };
    moveCircle();
}


s.addEventListener("click", drawDot);

var moveb = document.getElementById("move");
moveb.addEventListener("click", move);

var clearb = document.getElementById("clear");
clearb.addEventListener("click", clear);
