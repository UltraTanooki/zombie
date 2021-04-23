console.log('objects connected');

let foreLeft=new Image();foreLeft.src='gameImages/foreLeft.png';
let foreRight=new Image();foreRight.src='gameImages/foreRight.png';

let playerIdle=new Image();playerIdle.src='gameImages/playerIdle.png';

let pIdle={x:400,y:300,w:82,y:115,currFrame:1,speed:3}
let player={srcX:0,srcY:0,sheetW:820,sheetH:127,framecount:10,cols:10,currFrame:1,w:82,h:115}

const foreGroundLeft={image:foreLeft,w:355,h:350,x:-10,y:454,location:'fore'}
const foreGroundRight={image:foreRight,w:355,h:350,x:1210,y:454,location:'fore'}
const midGroundLeft={image:foreLeft,w:355,h:350,x:100,y:200,location:'mid'}
const midGroundRight={image:foreRight,w:355,h:350,x:1100,y:200,location:'mid'}
const backGroundLeft={image:foreLeft,w:355,h:350,x:210,y:-50,location:'back'}
const backGroundRight={image:foreRight,w:355,h:350,x:990,y:-50,location:'back'}

const zomRight=new Image();zomRight.src="gameImages/zombiewalkright.png";
const zomLeft=new Image();zomLeft.src="gameImages/zombiewalkLeft.png";

let zom={x:0,y:233,w:48,h:95,dir:'right',currFrame:1,location:'back',speed:2,update:7};
let zom2={x:1000,y:483,w:48,h:95,dir:'left',currFrame:5,location:'mid',speed:3,update:5}
let zombie={srcX:0,srcY:0,sheetW:785,sheetH:127,framecount:12,cols:12,currFrame:1,w:65,h:127,zX:500,zY:130}

const zoms=[zom,zom2];


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
  moveZoms();
  drawItems(back);
  for(i of zoms){
    if(i.location=='back'){
      drawZom(i);
    }
  }
  drawItems(mid);
  for(i of zoms){
    if(i.location=='mid'){
      drawZom(i);
    }
  }
  drawItems(fore);
  drawPlayer();
}

const drawItems=(x)=>{
  gamectx.save();
  for(i of x){
    gamectx.drawImage(i.image,i.x,i.y,i.w,i.h);
  }
  gamectx.restore();
}

let testX=0
// const drawZoms=(x)=>{
//   ctx.save();
// if(testX%3==0){
//   updateFrame();
// };
// testX++;
// if(zom.dir=='right'){
//   ctx.drawImage(zomRight,zombie.srcX,zombie.srcY,zombie.w,zombie.h,x.x,x.y,x.w,x.h);
//   x.x+=5;
//   if(x.x>gcanv.width-65){
//     x.dir='left';
//   }
// }else{
//   ctx.drawImage(zomLeft,zombie.srcX,zombie.srcY,zombie.w,zombie.h,x.x,x.y,x.w,x.h);
//   x.x-=5;
//   if(x.x<0){
//     x.dir='right';
//   }
// }
//
// ctx.restore();
// }
const moveZoms=()=>{
  for(i of zoms){
    if(i.dir=='right'){
      if(i.x>gcanv.width-65){
        i.dir='left';
        i.x-=i.speed;
      }else{
        i.x+=i.speed;
      }
    }else{
      if(i.x<0){
        i.dir='right';
        i.x+=i.speed;
      }else{
        i.x-=i.speed;
      }
    }
  }
}

const drawPlayer=()=>{console.log('hit')
  if(testX%4==0){
    updateFrame(pIdle,player);
    console.log(pIdle.currFrame);
  };
  ctx.drawImage(playerIdle,600,300,82,115);
}

const drawZom=(x)=>{
  ctx.save();
   if(testX%4==0){
     updateFrame(x,zombie);
   };
   testX++;
   if(x.dir=='right'){
     ctx.drawImage(zomRight,zombie.srcX,zombie.srcY,zombie.w,zombie.h,x.x,x.y,x.w,x.h);
   }else{
     ctx.drawImage(zomLeft,zombie.srcX,zombie.srcY,zombie.w,zombie.h,x.x,x.y,x.w,x.h);
   }
   ctx.restore();
 }


const updateFrame=(x,y)=>{
  x.currFrame=++x.currFrame%y.cols;
  y.srcX=x.currFrame*y.w;
  y.srcY=0;
}
