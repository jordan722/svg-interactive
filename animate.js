var s = document.getElementById("vimage");
var height = s.getAttribute("height");
var width = s.getAttribute("width");

var clear = function(){
    while(s.lastChild){
	s.removeChild(s.lastChild);
    }
};

var circleClick = function(e){
    console.log("CIRCLE" + this);
    this.setAttribute("fill","purple");
    e.stopPropagation();
}

var makeDot = function(x,y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("fill","blue");
    c.setAttribute("r", 20);
    c.addEventListener("click", circleClick);
    return c
};



var drawDot = function(e){
    s.appendChild(makeDot(e.offsetX, e.offsetY));
}

var moveCircle = function(){
    var x = Math.floor(Math.random() * 480);
    var y = Math.floor(Math.random() * 280);
    var xinc = 1;
    var yinc = 1;
    window.cancelAnimationFrame(rid);
    
    var DVDfunc = function(){
	x += xinc;
	y += yinc;
	
	var circles = document.getElementsByTagName('circle');
	var circle;

	for (circle in circles) {
	    var x = circle.getAttribute("x");
	    if (x == -10 || x == width - 120)
		xinc *= -1;
	    if (y == -15 || y == height - 60)
		yinc *= -1;
	    i.setAttribute("x",x);
	    i.setAttribute("y",y);
	    s.appendChild(i);
	}
	
	rid = window.requestAnimationFrame( DVDfunc );
    };
    DVDfunc();
}
    

s.addEventListener("click", drawDot);

var moveb = document.getElementById("move");
moveb.addEventListener("click", move);

var clearb = document.getElementById("clear");
clearb.addEventListener("click", clear);
