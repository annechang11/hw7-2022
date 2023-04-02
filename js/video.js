// var video = document.querySelector("#player1");
var video = document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// play, update volume
document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('#volume').innerHTML = '100%';
 	console.log("Play Video");
	video.play();
 });

//  pause video
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
   console.log(video.currentTime);
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old Video Speed is " + video.playbackRate);
   video.playbackRate = video.playbackRate * 0.9;
   console.log("New Video Speed is " + video.playbackRate);

});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old Video Speed is " + video.playbackRate);
   video.playbackRate = video.playbackRate * 1.1;
   console.log("New Video Speed is " + video.playbackRate);

});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= video.duration) {
	 skip = (time) => video.currentTime=video.currentTime + time;
	 skip(10);
	 console.log(video.currentTime)
	} 
	 
	 else {
	  video.currentTime = 0;
	  video.play();
	 };

   });

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
	 video.muted = true;
	 document.querySelector("#mute").innerHTML = 'Unmute';
	} 
	
	else {
	 video.muted = false;
	 document.querySelector('#mute').innerHTML = 'Mute';
	}

   });

// volume slider
var volumeControl = document.getElementById('slider');
   volumeControl.addEventListener('change',function(e){
	   video.volume = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = (video.volume)*100 + "%";
   });


// old school style
var oldschoolBtn = document.getElementById('vintage');
   oldschoolBtn.addEventListener('click', function() {
    video.className = "oldSchool";
   });
   
// original
var originalBtn = document.getElementById('orig');
   originalBtn.addEventListener('click', function() {
    if (video.classList.contains("oldSchool"))
     video.classList.remove("oldSchool");
   });
