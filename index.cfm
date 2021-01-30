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
    <header>
      <div style="display:inline-block;color:red;">FAUX</div>
      <div style="display:inline-block;color:aniquewhite;font-size:3rem;">&nbspNews</div>
    </header>

    <div class="container">

      <div class="walkea" style="grid-column:2/6;grid-row:1/2;display:grid;grid-display-columns:40% 1Fr;box-sizing:border-box;border:.5px solid black;background:linear-gradient(127deg,rgb(0,0,102),rgb(0,0,102),blue);">
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
          <div class="title">VACCINE CAUSES ZOMBIE EVENT</div>
        </div>
        <div class="words" id="lead">
         </div>
      </div>


      <div class="video">
        <canvas id="canvas" width="750" height="500"></canvas>
      </div>




      <div class="ad" style="display:grid;grid-display-columns:600px 1fr;grid-display-rows:95px 1fr 125px;background:linear-gradient(-55deg,rgba(0,0,0,.95),rgba(0,0,0,.95),rgba(0,0,139,.75));overflow:none">
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
          <div class="titlewords2">The Scariest Place on Earth</div>
        </div>
        <div class="story2" id="story2">
        </div>
      </div>


      <div class="subStory subTwo">
        <div class="image">
        </div>
        <div class="titleContainer">
          <div class="titlewords">INSTAFACE SUSPENDS PRESIDENT</div>
        </div>
        <div class="story">
          <blockquote>
            <p>“Mr. Stark, I’m not feeling so good…..”</p>
            <p>“I hate them.  I hate them all.  They are dead to me, every single one of them.  And not just the men, but the women and children too….”</p>
            <p>“Uuuuhhhhhuuuuummmmm. Clouds. Dinner. squirrel.”</p>
            <p>“Brains. Brains.  I have to find myself some brains”</p>
          </blockquote>
          These are just a few samples of posts by POTUS earlier this month on the popular Instaface social media platform.  Concern for the leader’s wellbeing has rippled across the nation and left citizens wondering
           if he has started making “the change”.  It has been confirmed that POTUS
        </div>
      </div>

      <div class="classifieds" style="grid-column:2/4;grid-row:3/5;border:.5px solid black">
        <div class="" style='width:100%;height:50px;line-height:50px;background-color:black;color:white;font-weight:bold;'>
          Classifieds
        </div>
      </div>


    <!--- </div> --->
    <div class="footer">
      AMDEKAI ©2021
    </div>
          </div>
  </body>
</html>
