console.log('images loaded');
vaccineZom=new Image;vaccineZom.src="images/wheatfield_zombies2.jpg";
disClose=new Image;disClose.src="images/disneylandClosing2.jpg";
tuckerberg=new Image;tuckerberg.src="images/mariontuckerberg.jpg"

const vacZom={name:'vacZom',img:vaccineZom,width:canv.width-20,height:canv.height-20,x:10,y:10,headline:'Vaccine Causes Zombie Event'};
const dClosed={name:'disneyClosed',img:disClose,width:canv.width-20,height:canv.height-20,x:10,y:10,headline:'The Scariest place on Earth'};
const mTuck={name:'Marion Tuckerberg',img:tuckerberg,width:canv.width-20,height:canv.height-20,x:10,y:10,headline:'Instaface Suspends President'};

const slides=[vacZom,dClosed,mTuck]
