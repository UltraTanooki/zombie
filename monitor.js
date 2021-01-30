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
  ctx.font=24*s+"px Arial bolder";
  ctx.fillText(slides[showing].headline,70*s,455*s);
  ctx.restore();
}

const drawBanner=()=>{
  ctx.fillStyle='black';
  ctx.fillRect(595*s,335*s,130*s,60*s);
  ctx.fillRect(10*s,365*s,730*s,10*s);
  ctx.fillStyle="rgba(0,0,0,.7)";
  ctx.fillRect(10*s,370*s,730*s,150*s);
  ctx.fillStyle="red";
  ctx.fillRect(10*s,370*s,730*s,60*s);
  ctx.fillStyle="white";
  ctx.font=50*s+"px Arial bolder";
  ctx.fillText('HEADLINES',30*s,415*s);
  ctx.drawImage(fLogo.img,fLogo.x,fLogo.y,120*s,120*s);
  ctx.fillRect(60*s,430*s,310*s,40*s);
}

const drawBorder=()=>{
  ctx.fillStyle="black";
  ctx.fillRect(0,0,canv.width,canv.height);
}
