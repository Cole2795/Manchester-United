<!DOCTYPE html><!--Project files-->
<html>
	<head>
		<title>Manchester United FC</title>
		<link rel="stylesheet" href="css/style.css"/>
		<script src = "js/main.js"> </script>
	</head>
	
	<body><!--This is the start of the web page-->

	<header>
	<figure id="detect">
	<input type="button" onclick ="browserDetection() " value =" Detect Browser">
	</figure>
			<figure id="logo">
			 <img src="images/ManchesterUnited.png" height="180" width="180">
			</figure>	 
		
		       <h1> Manchester United FC</h1>  
			   <li><a class="active" href="sign.html">Sign in</a></li>
				<li><a class="active" href="login.html">Login</a></li>
				 
	</header>	
	<ul>
  <li><a class="active" href="index.html">Home</a></li>
  <li class="dropdown">
    <a href="team.html" class="dropbtn">Team</a>
    <div class="dropdown-content">
      <a href="player.html">Player</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="matches.html" class="dropbtn">Matches</a>
    <div class="dropdown-content">
      <a href="fixture.html">Fixture and Results</a>
	  <a href="league.html">League Table</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="ticketandm.html" class="dropbtn">Ticket and Membership</a>
    <div class="dropdown-content">
      <a href="ticket.html">Ticket</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="shops.html" class="dropbtn">Shop</a>
    <div class="dropdown-content">
       <button onclick="newWindows()">Shop Online</button>
    </div>
  </li>
  <li class="dropdown">
    <a href="videos.html" class="dropbtn">Video</a>
    <div class="dropdown-content">
      <a href="video.html">Video Online</a>
    </div>
  </li>
  
 </ul>
  <main>
		<h1>Thank We will get back to you</h1>
	
		
		
		 <script type="text/javascript">
		       {
                document.write(myForm.emailAddr);
		        }
               </script>
		<figure id="click">
		<div class="homeSocialBar">
  <div class="homeMoreNews screen-only">
	<button onclick="newWindow()"><h2>Click Me</h2></button>
   
  </div>
	</figure>	
</main>	
		
		<footer> <!-- This is the Footer bar-->
		
  <!--<div class="homeSocialBox">-->
    <ul>
      <li><a class="social-item" href="https://www.facebook.com/" target="social"><span class="icon facebook-sm" title="Visit Manchester United FC's Facebook page"><img src="images/facebook-white.png" alt="" height="15" width="15"/></span></a></li>
      <li><a class="social-item" href="https://twitter.com/?lang=en" target="social"><span class="icon twitter-sm" title="Visit Manchester United FC's Twitter page"><img src="images/twitter-white.png" alt=""height="15" width="15"/></span></a></li>
	  <li><a class="social-item" href="https://www.youtube.com/" target="social"><span class="icon youtube-sm" title="Visit Manchester United FC's Youtube channel"><img src="images/youtube-white.png" alt=""/height="15" width="15"></span></a></li>
    <figure id="name">
			&copy;Nicole Campbell 2016
		</figure>
	</ul>
  </div>

		        
		</footer>
		<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

</body>

</html>

		
		
