console.log('connected');
const gamectx=document.getElementById('canvas').getContext('2d');
let gcanv=document.getElementById('canvas');

const gameint=()=>{
  testScreenSize();
  convertObjects();
  convertDOM();
  fpsInterval=1000/fps;
  then=Date.now();
  startTime=then;
  gameEngine();
}

const gameEngine=()=>{
  now=Date.now();
  elapsed=now-then;
  if(elapsed>fpsInterval){
  gamectx.save();
  gamectx.clearRect(0,0,gcanv.width,gcanv.height);
  gamectx.restore();
  drawScene();
  then=now-(elapsed%fpsInterval);
  window.requestAnimationFrame(gameEngine);
}else{
  window.requestAnimationFrame(gameEngine);
}
}
