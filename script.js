var c = document.getElementById('canvas');
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(100,155);
ctx.quadraticCurveTo(190,30,195,155);
ctx.fillStyle="red";
ctx.fill();
ctx.beginPath();
ctx.moveTo(100,155);
ctx.lineTo(150,300);
ctx.lineTo(200,155);
ctx.closePath();
ctx.fillStyle = "peru";
ctx.fill();
