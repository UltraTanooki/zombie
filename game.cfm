<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Level One</title>
    <script defer src="scripts.js"></script>
    <script defer src="gameObjects.js"></script>
    <script defer src="gameEngine.js"></script>
    <style media="screen">
      body{
        background-image:linear-gradient(darkslateblue,black,black,black);
        background-repeat:no-repeat;
        height:100vh;
        width:99%;
        display:grid;
        grid-template-columns:13% 3% 66% 4% auto;
        grid-template-rows:60px 90px 560px 150px 1fr;
      }
      canvas{
        border:5px solid black;
        border-radius:20px;
        background-image:linear-gradient(black,darkslategray);
        grid-column:2/5;
        grid-row:2/5;
      }
      .logo{
        grid-column:1/3;
        grid-row:1/3;
        z-index:10;
        margin-left:auto;
        margin-right:0px;
      }
      .amdekaiLogo{
        grid-column:4/6;
        grid-row:4/6;
        z-index:10;
        align-self:center;
        background-color:rgba(0,0,0,0.75)
      }
    </style>
  </head>
  <body onload=" gameint()">
    <img id="logo" src="images\elogo2.png" width="300" height="150" class="logo">
    <canvas id="canvas" width="1400" height="800"></canvas>
    <img id="logo2" src="images\amdekaiLogo.png" width="250" height="120" class="amdekaiLogo">
  </body>
</html>
