soundBlogTag = new Sound(Blob_tag);
var thePlay = document.querySelector('#play');
var theStop = document.querySelector('#stop');
thePlay.addEventListener('click', 
			function(){
				myContext = playTheSound(soundBlogTag);

				// check the playbackState in order to set the play button 
				// back to its original state when the sound finishes playing
				/*
				var myPlayback = setInterval(function() {
					if (myContext.playbackState == 3) {
						killTheSound(myContext);
					}
				},100);
				*/
			}
		, false);

theStop.addEventListener('click',function(e){
		killTheSound(myContext);
},false);

