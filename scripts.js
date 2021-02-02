console.log('scripts Connected');

const ctx=document.getElementById('canvas').getContext('2d');
let canv=document.getElementById('canvas');

// scalefor Images
let s=1;
let fps=30,fpsInterval,startTime,now,then,elapsed;

const intialize=()=>{
  convertStories();
  testScreenSize();
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

const testScreenSize=()=>{
  if(window.devicePixelRatio != 1){
			switch(window.devicePixelRatio){
				case 1.25:
					canv.width=canv.width*.75;canv.height=canv.height*.75;
					s=.75;
					break;
				case 1.5:
					canv.width=canv.width*.6;canv.height=canv.height*.6;
					s=.6;
					break;
				case 1.75:
					canv.width=canv.width*.5;canv.height=canv.height*.5;
					s=.5;
					break;
				case 2:
					canv.width=canv.width*.5;canv.height=canv.height*.5;
					s=.5;
					break;

			}
			adjustImgSizes();
		}
    if(window.innerWidth != 1920){
			let x=window.innerWidth/1920;
			x=Math.round(100*x)/100;
			s=x;
			canv.width=canv.width*s;canv.height=canv.height*s;
			adjustImgSizes();
		}
}

 const adjustImgSizes=()=>{console.log('here');
 console.log('allItems',allItems)
  for(i of allItems){
    i.width=i.width*s;
    i.height=i.height*s;
    i.x=i.x*s;
    i.y=i.y*s;
    console.log('allItems',allItems)
  }
  for(i of slides){
    i.width=canv.width-20*s;
    i.height=canv.height-20*s;
    i.x=i.x*s;
    i.x=i.x*s;
  }
  console.log('width',canv.width)
  console.log('width',canv.width)
}

const convertStories=()=>{
  let edited="";
  for(i of stories){
      x=i.story;
  let arrayX=x.split(". ")
  for(index of arrayX){
    if(edited.length>i.length){
      edited=edited + "<br> <strong> More... </strong>";
      break;
    }else{
      edited += index+". ";
    }
  }
  document.getElementById(i.name+'Title').innerHTML=i.title;
  document.getElementById(i.name).innerHTML=edited;
  edited="";
  }
  //convert story into an array
  // ad array into new string to be displayed
  //if arrayX.length between 450-550. and add &nbsp MORE...
  //write to innerHTML of 'lead'
}

const storyOpen=(x)=>{
  for(i of stories){
    if(i.name==x){console.log('hello')
    document.getElementById('storyTitle').innerHTML=i.title;
      document.getElementById('story').innerHTML=i.story;
      document.getElementById('storyHolder').style.display='block';
      document.getElementById('filter').style.display='block';
      window.scrollTo(0,0);
      break;
    }
  }

}

const closeStory=()=>{console.log('closing')
  document.getElementById('storyHolder').style.display='none';
  document.getElementById('filter').style.display='none';
}
