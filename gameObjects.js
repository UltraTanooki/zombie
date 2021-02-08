console.log('objects connected');

let foreLeft=new Image();foreLeft.src='gameImages/foreLeft.png';
let foreRight=new Image();foreRight.src='gameImages/foreRight.png';

const foreGroundLeft={image:foreLeft,w:355,h:350,x:-10,y:454,location:'fore'}
const foreGroundRight={image:foreRight,w:355,h:350,x:1210,y:454,location:'fore'}
const midGroundLeft={image:foreLeft,w:355,h:350,x:100,y:200,location:'mid'}
const midGroundRight={image:foreRight,w:355,h:350,x:1100,y:200,location:'mid'}
const backGroundLeft={image:foreLeft,w:355,h:350,x:210,y:-50,location:'back'}
const backGroundRight={image:foreRight,w:355,h:350,x:990,y:-50,location:'back'}

const zomRight=new Image();zomRight.src="gameImages/zombiewalkright.png";
const zomLeft=new Image();zomLeft.src="gameImages/zombiewalkLeft.png";

let zom={x:0,y:233,w:48,h:95,dir:'right'};
let zom2={x:1000,y:483,w:48,h:95,dir:'left'}
let zombieRight={srcX:0,srcY:0,sheetW:785,sheetH:127,framecount:12,cols:12,currFrame:1,w:65,h:127,zX:500,zY:130}

const zoms=[zom];


const setObjects=[foreGroundLeft,foreGroundRight,midGroundLeft,midGroundRight,backGroundLeft,backGroundRight]

const convertObjects=()=>{
  for(i of setObjects){
    i.w=i.w*s;
    i.h=i.h*s;
    i.x=i.x*s;
    i.y=i.y*s;
  }
}

const convertDOM=()=>{
  let logos=['logo','logo2']
  gcanv.width=gcanv.width*s;gcanv.height=gcanv.height*s;
  for(i of logos){
    let x=document.getElementById(i);
    x.width=x.width*s;x.height=x.height*s;
  }
}

const drawScene=()=>{
  let fore=[];
  let mid=[];
  let back=[];

  for(i of setObjects){
    switch(i.location){
      case 'fore':
        fore.push(i);
        break;
      case 'mid':
        mid.push(i);
        break;
      case 'back':
        back.push(i);
        break;
      default:
        console.log('location not found');
        break;
    }
  }
  drawItems(back);
    for(i of zoms){
      if(i.y>=223 && i.y<=273){
          drawZoms(i);
      }
    }
  drawItems(mid);
    for(i of zoms){
      if(i.y>=463 && i.y<=533){console.log('i',i)
      drawZoms(i);
      }
    }
  drawItems(fore);
}

const drawItems=(x)=>{
  gamectx.save();
  for(i of x){
    gamectx.drawImage(i.image,i.x,i.y,i.w,i.h);
  }
  gamectx.restore();
}

let testX=0
const drawZoms=(x)=>{
  ctx.save();
if(testX%3==0){
  updateFrame();
};
testX++;
if(zom.dir=='right'){
  ctx.drawImage(zomRight,zombieRight.srcX,zombieRight.srcY,zombieRight.w,zombieRight.h,x.x,x.y,x.w,x.h);
  x.x+=5;
  if(x.x>gcanv.width-65){
    x.dir='left';
  }
}else{
  ctx.drawImage(zomLeft,zombieRight.srcX,zombieRight.srcY,zombieRight.w,zombieRight.h,x.x,x.y,x.w,x.h);
  x.x-=5;
  if(x.x<0){
    x.dir='right';
  }
}

ctx.restore();
}


const updateFrame=()=>{
  zombieRight.currFrame=++zombieRight.currFrame%zombieRight.cols;
  zombieRight.srcX=zombieRight.currFrame*zombieRight.w;
  zombieRight.srcY=0;
}
