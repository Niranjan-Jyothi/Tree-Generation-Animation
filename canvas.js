const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const treeBut = document.getElementById('ohh');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
let curve;
function drawTree(x,y,len,angle,branchWidth,c1,c2){
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle=c1;
  ctx.fillStyle=c2;
  ctx.shadowBlur=10;
  ctx.shadowColor= 'rgba(255,255,255,0.5)';
  ctx.lineWidth=branchWidth;
  ctx.translate(x,y);
  ctx.rotate(angle*Math.PI/180);
  ctx.moveTo(0,0);
//  ctx.lineTo(0,-len);
if(angle>0){
  ctx.bezierCurveTo(50, -len/2, 25, -len/2 , 0, -len);
} else {
  ctx.bezierCurveTo(10, -len/2, -50, -len/2, 0, -len);
}

  ctx.stroke();

  if(len<10){
//leafs
    ctx.beginPath();
    ctx.arc(0,-len,10,0,Math.PI/2);
    ctx.fill();
    ctx.restore();
    return;
  }
  curve = Math.random()*10 + 10;

drawTree(0, -len,len*0.75 ,angle+curve,branchWidth*0.6);
drawTree(0,-len, len*0.75,angle-curve,branchWidth*0.6);

ctx.restore();


}
drawTree(canvas.width/2,canvas.height-80,150,0,30,'brown','green');


function newTree(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //strat points
  let x= canvas.width/2;
  let len = Math.floor(Math.random()*40 +100);
  let branchWidth=Math.random()*85 +1;
  let c1= 'rgba(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ',' +Math.random()*255 + ')';
  let c2= 'rgba(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ',' +Math.random()*255 + ')';

  treeBut.style.background = c1;
drawTree(x , canvas.height-80, len, 0 , branchWidth , c1, c2);
}

treeBut.addEventListener("click",newTree);
