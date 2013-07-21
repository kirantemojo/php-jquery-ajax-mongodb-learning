function Sound(source,level)
{
	if(!window.audioContext)
	{	
		audioContext = new webkitAudioContext();
	}
	var that = this;
	that.source = source;
	that.buffer = null;
	that.isLoaded = false;
	that.panner = audioContext.createPanner();
	that.volume = audioContext.createGainNode();
	if(!level)
	{
		that.volume.gain.value = 1;
	}
	else
	{
		that.volume.gain.value = level;
	}
	/*
	var request = new XMLHttpRequest();
	request.open('GET', source , true);
	request.responseType = 'arraybuffer';
	
	request.onload = function() {
	audioContext.decodeAudioData(request.response, function(buffer) {
		that.buffer = buffer;
		that.isLoaded = true;
	  });
	}
	request.send();
	*/
	
	var getSound = Base64Binary.decodeArrayBuffer(that.source);
	audioContext.decodeAudioData(getSound,function(buffer){
		that.buffer = buffer;
		that.isLoaded = true;
	});
	
}
Sound.prototype.play = function(playbackRate){
	if(!playbackRate)
	{
		playbackRate = 1;
	}
	if(this.isLoaded === true)
	{
		var playSound = audioContext.createBufferSource();
		playSound.buffer = this.buffer;
		playSound.connect(this.panner);
		playSound.playbackRate.value = playbackRate;
		this.panner.connect(this.volume);
		this.volume.connect(audioContext.destination);
		playSound.noteOn(0);
	}
	return playSound;
}

Sound.prototype.setVolume = function(level)
{
	this.volume.gain.value = level;
}

Sound.prototype.setPan = function(xValue,yValue,zValue)
{
	this.panner.setPosition(xValue,yValue,zValue);
}
Sound.prototype.killSound = function(audioContext)
{
	audioContext.noteOff(0);
}