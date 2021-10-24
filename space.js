var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var oldHeight = ctx.canvas.height;
if (oldHeight < window.innerHeight * 0.75) {
    ctx.canvas.height = window.innerHeight * 0.75;
}
else if (oldHeight > window.innerHeight * 1.3) {
    ctx.canvas.height = 1.3 * window.innerHeight;
}
var ratio = ctx.canvas.height / oldHeight;
ctx.canvas.width = ctx.canvas.width * ratio;


function isInRect(rx, ry, rw, rh, x, y){
	return x >= rx && x <= rx + rw && y >= ry && y <= ry + rh;
}
rects = [
    {x: 68, y: 87, w: 52, h: 52, info: {link: "https://www.youtube.com/user/startalkradio", text: "Listen to my favourite space podcast"}},
    {x: 808, y: 262, w: 40, h: 40, info: {link: "https://james.darpinian.com/satellites/", text: "See a bunch of satellites tonight"}},
    {x: 621, y: 363, w: 40, h: 40, info: {link: "https://play.google.com/store/apps/details?id=com.vitotechnology.StarWalk2Free&hl=en_US", text: "Get an app for exploring the sky"}},
    {x: 780, y: 455, w: 36, h: 36, info: {link: "band.html", text: "Learn about my favourite band"}},
    {x: 1327, y: 276, w: 40, h: 40, info: {link: "https://www.iflscience.com/space/", text: "Read space news"}},
    {x: 1439, y: 404, w: 43, h: 43, info: {link: "index.html", text: "Go home"}},
    {x: 814, y: 79, w: 40, h: 40, info: {link: "https://www.nasa.gov/mission_pages/hubble/multimedia/index.html", text: "See Hubble's photos"}},
    {x: 195, y: 691, w: 47, h: 40, info: {link: "cat.html", text: "Meet my cat"}}
];

var r, i = 0;
// ctx.strokeStyle = "red";
while (r = rects[i++]) {
    r.x *= ratio; r.y *= ratio; r.w *= ratio; r.h *= ratio;
    // ctx.strokeRect(r.x, r.y, r.w, r.h);
}


document.onclick = function(e) {
    console.log(e);

    var x = e.clientX + window.scrollX,
      y = e.clientY + window.scrollY,
      i = 0, r;

  	while (r = rects[i++]) {
      if (isInRect(r.x, r.y, r.w, r.h, x, y)) on(r.info);
  	}

};

function on(info) {
    var link = document.getElementById("link");
    link.setAttribute("href", info.link);
    link.textContent = info.text;
    document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
