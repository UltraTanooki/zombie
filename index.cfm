<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>News Page</title>
     <script defer src="stories.js"></script>
    <script defer src="scripts.js"></script>
    <script defer src="images.js"></script>
    <script defer src="monitor.js"></script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body onload="intialize()">

    <div id="filter" class="filter" style=""></div>

    <header>
      <div style="display:inline-block;color:red;">FAUX</div>
      <div style="display:inline-block;color:aniquewhite;font-size:3rem;">&nbspNews</div>
    </header>

    <div id="storyHolder" class="storyHolder" style="">
      <div style="float:right;margin-right:15px;margin-top:5px;border:.5px solid red;box-sizing:border-box;hieght:50px;width:30px;text-align:center;cursor:pointer;background-color:blue;color:white" onclick="closeStory()">X</div>
      <div class="storyTitle" id="storyTitle" style="line-height:75px;height:75px;border-bottom:5px solid blue;color:white;background-color:dimgray;font-size:3REM;font-weight:bold;text-align:center"></div>

      <div id="story" style="height:68vh;padding:15px;columns:2;background-color:rgba(192,192,192,.5);border-left:2px solid black; border-bottom:2px solid black;border-right:2px solid black;column-rule:1px solid black;"></div>
    </div>

    <div class="container">

      <div class="walkea" style="">
        <div style="grid-column:1/2;">
          <img src='images\walkea-logo.png' style="height:120px;">
        </div>

          <div style="grid-column:2/3;display:grid">
            <div style="align-self:center;font-size:3.5rem">
              <div style="color:white;display:inline-block">Save Money and</div>
               <div style="color:Gold;display:inline-block">Create a better everyday life</div>
             </div>
          </div>

      </div>


      <div class="leadStory">
        <div class="img">
        </div>
        <div class="titleBox">
          <div class="title" id="leadTitle"></div>
        </div>
        <div class="words" id="lead" onClick="storyOpen('lead')">
         </div>
      </div>


      <div class="video">
        <canvas id="canvas" width="750" height="500"></canvas>
      </div>




      <div class="ad" style="">
        <img src="images/muskRat-logo.png" alt="" style="grid-column:1/2;width:325px;height:200px;">
        <div class="" style="grid-column:2/3;font-size:2.5rem;color:red;">
            <div style="grid-row:1/2;border:.5px solid balck;">Muskrat communications</div>
            <div style="grid-row:2/3; font-size:2.2rem;color:white">The happiest cell phones on earth</div>
            <img src="images/earth.png" alt="" style="grid-row:3/4;align-self:end;border:.5px solid black">
        </div></div>
      <!--- <div class="ad two">Musk-Rat</div> --->


      <div class="subStory">
        <div class="image2"></div>
        <div class="titleContainer2">
          <div class="titleWords2" id="story2Title"></div>
        </div>
        <div class="story2" id="story2" onClick="storyOpen('story2')">
        </div>
      </div>


      <div class="subStory subTwo">
        <div class="image">
        </div>
        <div class="titleContainer">
          <div class="titlewords" id="story3Title"></div>
        </div>
        <div class="story" id="story3" onClick="storyOpen('story3')">
          <!--- <blockquote>
            <p>“Mr. Stark, I’m not feeling so good…..”</p>
            <p>“I hate them.  I hate them all.  They are dead to me, every single one of them.  And not just the men, but the women and children too….”</p>
            <p>“Uuuuhhhhhuuuuummmmm. Clouds. Dinner. squirrel.”</p>
            <p>“Brains. Brains.  I have to find myself some brains”</p>
          </blockquote>
          These are just a few samples of posts by POTUS earlier this month on the popular Instaface social media platform.  Concern for the leader’s wellbeing has rippled across the nation and left citizens wondering
           if he has started making “the change”.  It has been confirmed that POTUS --->
        </div>
      </div>

      <div class="classifieds" style="grid-column:2/4;grid-row:3/5;border:.5px solid black;overflow:hidden">
        <div class="" style='width:100%;height:50px;line-height:50px;background-color:black;color:white;font-weight:bold;'>
          Classifieds
        </div>
        <div class="" style="column-count:4;padding:3px;">
          <div style="margin-top:5px;background-color:dimgray;color:black;border:.5px solid black;font-size:1rem;font-weight:bolder">
            For Sale or Trade
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Boat for Sale</strong> 2018 17ft bowrider, great condition.  Dry docked since March. Asking $18,250. Serious inquiries only.  One owner, meticulously cleaned. 555-856-9652
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>2006 Ford Mustang Conv</strong> One owner, green with tan interior. Maintenance records included.  $7,500.  555-865-9256
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Looking for a working motorcycle</strong> Will trade for 2007 truck. Some issues ok, depends on severity. Willlng to pay up tp $750.00.  555-625-5296
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Aquarium lights for sale</strong> 2 250W metal halide lamps, perfect for SPS coral.  Comes with 10k bulb. Perfiect condition.  Asking $300.00.  Call Mavimillion at 625-5218.
          </div>
          <div style="margin-top:5px;background-color:dimgray;color:black;border:.5px solid black;font-size:1rem;font-weight:bolder">
            Personals
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Looking to fight isolation?</strong> In search of a friend group to met weekly for online hangout. 22-26 year old. If interested sign up at ffforlife.com
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Do you like pi&#241a coladas?</strong> And getting caught in the rain?  Not into yoga? Bring me your brains. 111-158-2890
          </div>
          <div style="margin-top:5px;background-color:dimgray;color:black;border:.5px solid black;font-size:1rem;font-weight:bolder">
            Service
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>House Cleaning</strong> Team of two will clean your house from top to bottom. No job too small or too large. Cleanings start at 60.00  for two hours. Call for estimate. 326-956-9856
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Room for Rent</strong> Four bedroom, two bath house shared amongst 3 individuals. <strong>W</strong>e are looking for a fourth. Do you need a pl<strong>a</strong>ce to stay? E<strong>l</strong>ectric and water e<strong>x</strong>cluded from rent amount. Shared livng areas and <strong>k</strong>itchen. Clean bill of health required to apply. <strong>I</strong>f interested cont<strong>a</strong>ct RETLAW immediately.
          </div>
          <div style="text-align:left;margin-top:5px;background-color:transparent;font-size:.8rem">
            <strong>Printing Services</strong> If you need anything printed, we are your people! All types of paper, all types of printers. We are the best!
          </div>
        </div>
      </div>


    <!--- </div> --->
    <div class="footer">
      AMDEKAI ©2021
    </div>
          </div>
  </body>
</html>
