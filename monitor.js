let timer=0;
let showing=0;
let len=slides.length-1;

const checkTimer=()=>{
  if(timer==150){
    if(showing==len){
      showing=0;
    }else{
      showing += 1;
    }
    timer=0;
  }
  timer += 1;

}

const drawBG=()=>{
  checkTimer();
  let x=slides[showing]
  ctx.save();
  ctx.drawImage(x.img,x.x,x.y,x.width,x.height);
  ctx.restore;
}

const writeHeadline=()=>{
  ctx.save();
  ctx.fillStyle="black";
  ctx.font="24px Arial bolder";
  ctx.fillText(slides[showing].headline,70,455);
  ctx.restore();
}

const drawBanner=()=>{
  ctx.fillStyle='black';
  ctx.fillRect(595,335,130,60);
  ctx.fillRect(10,365,730,10);
  ctx.fillStyle="rgba(0,0,0,.7)";
  ctx.fillRect(10,370,730,150);
  ctx.fillStyle="red";
  ctx.fillRect(10,370,730,60);
  ctx.fillStyle="white";
  ctx.font="50px Arial bolder";
  ctx.fillText('HEADLINES',30,415);
  ctx.drawImage(fLogo.img,fLogo.x,fLogo.y,120,120);
  ctx.fillRect(60,430,310,40);
}

const drawBorder=()=>{
  ctx.fillStyle="black";
  ctx.fillRect(0,0,canv.width,canv.height);
}
