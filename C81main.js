canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color1="Blue";

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

color2="Black";

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=5;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

color3="red";

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=5;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

color4="Yellow";

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

color5="Green";

ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();
