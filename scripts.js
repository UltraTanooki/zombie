console.log('scripts Connected');

const ctx=document.getElementById('canvas').getContext('2d');
const canv=document.getElementById('canvas');

fauxLogo=new Image();fauxLogo.src='images/faux-Logo.png';
let fLogo={name:'Faux Logo',width:120,height:120,x:600,y:340,img:fauxLogo};

let fps=30,fpsInterval,startTime,now,then,elapsed;

const intialize=()=>{
  fpsInterval=1000/fps;
  then=Date.now();
  startTime=then;
  mainEngine();
}

const mainEngine=()=>{
  now=Date.now();
  elapsed=now-then;
  if(elapsed>fpsInterval){
  ctx.save();
  ctx.clearRect(0,0,750,500);
  drawBorder();
  drawBG();
  drawBanner();
  writeHeadline();
  ctx.restore();
  console.log(1);
  then=now-(elapsed%fpsInterval);
  window.requestAnimationFrame(mainEngine);
}else{
  window.requestAnimationFrame(mainEngine);
}
}
