/* >>>>>>>>>> BEGIN source/media_capabilities.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
 * @class
 * 
 * An easy-to-reference list of media capabilities which the current running
 * browser supports such as HTML5 and Plugin detection. It is modeled after
 * Flash Player's browser capabilities class, with all the non-media related
 * properties removed. Rather than performing specific browser checks, we
 * instead test by creating some basic DOM elements. It's both more reliable and
 * easier to maintain than browser version checks.
 * 
 * To see whether your target browser will support what you're trying to do,
 * check http://caniuse.com/
 * 
 * @see http://caniuse.com/
 * @since SproutCore 1.8.1
 * @author Michael Krotscheck
 */
SC.mediaCapabilities = SC.Object.create({});

/**
 * Automatic detection of various browser media capabilities.
 */
(function() {
  /**
   * Specifies whether the browser supports the HTML5 <audio> tag.
   * 
   * @name SC.mediaCapabilities.isHTML5AudioSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isHTML5AudioSupported = NO;
  try {
    // Firefox 3.6 doesn't support the W3C API. Disable support.
    if(SC.browser.isMozilla && SC.browser.compare(SC.browser.mozilla, "3.6") <= 0) {
      throw new Error('Browser not supported');
    }
    
    var doc = document.createElement('audio');
    isAudioSupported = !!doc.canPlayType;
    delete doc;
    SC.mediaCapabilities.isHTML5AudioSupported = YES;
    
  } catch(e) {
  }
  
  /**
   * Specifies whether the browser supports the HTML5 <video> tag.
   * 
   * @name SC.mediaCapabilities.isHTML5AudioSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isHTML5VideoSupported = NO;
  try {
    // Firefox 3.6 doesn't support the W3C API. Disable support.
    if(SC.browser.isMozilla && SC.browser.compare(SC.browser.mozilla, "3.6") <= 0) {
      throw new Error('Browser not supported');
    }
    
    var doc = document.createElement('video');
    isVideoSupported = !!doc.canPlayType;
    delete doc;
    SC.mediaCapabilities.isHTML5VideoSupported = YES;
  } catch(e) {
  }
  
  /**
   * Specifies whether the browser supports the Adobe Flash plugin.
   * 
   * @name SC.mediaCapabilities.isHTML5AudioSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isFlashSupported = NO;
  // Non-IE detection
  if(navigator.plugins) {
    for( var i = 0; i < navigator.plugins.length; i++) {
      if(navigator.plugins[i].name.indexOf("Shockwave Flash") >= 0) {
        SC.mediaCapabilities.isFlashSupported = YES;
      }
    }
  }
  // IE ActiveX detection
  if(window.ActiveXObject) {
    try {
      var control = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      delete control;
      SC.mediaCapabilities.isFlashSupported = YES;
    } catch(e) {
      // Do nothing- The ActiveX object isn't available.
    }
  }
  
  /**
   * Specifies whether the browser supports quicktime media playback.
   * 
   * @type Boolean
   */
  SC.mediaCapabilities.isQuicktimeSupported = NO;
  
  // Non-IE detection
  if(navigator.plugins) {
    for( var i = 0; i < navigator.plugins.length; i++) {
      if(navigator.plugins[i].name.indexOf("QuickTime") >= 0) {
        SC.mediaCapabilities.isQuicktimeSupported = YES;
      }
    }
  }
  // IE ActiveX detection
  if(window.ActiveXObject) {
    var control = null;
    try {
      control = new ActiveXObject('QuickTime.QuickTime');
      delete control;
      SC.mediaCapabilities.isQuicktimeSupported = YES;
    } catch(e) {
      // Do nothing- the ActiveX object isn't available.
    }
    
    try {
      // This generates a user prompt in Internet Explorer 7
      control = new ActiveXObject('QuickTimeCheckObject.QuickTimeCheck');
      delete control;
      SC.mediaCapabilities.isQuicktimeSupported = YES;
    } catch(e) {
      // Do nothing- The ActiveX object isn't available.
    }
  }
  
  /**
   * Specifies whether the browser supports the HTML5 getUserMedia/Stream API.
   * 
   * NOTE: As of February 2012, this feature is still in Draft status and is
   * likely to change frequently. It's included here for the sake of
   * completeness, however concrete implementations don't yet exist.
   * 
   * @name SC.mediaCapabilities.isHTML5StreamApiSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isHTML5StreamApiSupported = !!navigator.getUserMedia;
  
  /**
   * Specifies whether the browser supports audio recording via the HTML5 stream
   * API or the Adobe Flash plugin.
   * 
   * @name SC.mediaCapabilities.hasMicrophone
   * @type Boolean
   */
  SC.mediaCapabilities.hasMicrophone = SC.mediaCapabilities.isHTML5StreamApiSupported || SC.mediaCapabilities.isFlashSupported;
  
  /**
   * Specifies whether the browser supports video recording via the HTML5 stream
   * API or the Adobe Flash Plugin.
   * 
   * @name SC.mediaCapabilities.hasMicrophone
   * @type Boolean
   */
  SC.mediaCapabilities.hasVideoCamera = SC.mediaCapabilities.isHTML5StreamApiSupported || SC.mediaCapabilities.isFlashSupported;
  
  /**
   * Specifies whether the browser has audio playback capabilities.
   * 
   * @name SC.mediaCapabilities.hasAudioPlayback
   * @type Boolean
   */
  SC.mediaCapabilities.hasAudioPlayback = SC.mediaCapabilities.isHTML5AudioSupported || SC.mediaCapabilities.isQuicktimeSupported || SC.mediaCapabilities.isFlashSupported;
  
  /**
   * Specifies whether the browser has video playback capabilities.
   * 
   * @name SC.mediaCapabilities.hasVideoPlayback
   * @type Boolean
   */
  SC.mediaCapabilities.hasVideoPlayback = SC.mediaCapabilities.isHTML5VideoSupported || SC.mediaCapabilities.isQuicktimeSupported || SC.mediaCapabilities.isFlashSupported;
  
  /**
   * Specifies whether the browser supports Ogg Vorbis.
   * 
   * @name SC.mediaCapabilities.isOggSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isOggSupported = SC.mediaCapabilities.hasVideoPlayback && (SC.browser.isMozilla || SC.browser.isChrome || SC.browser.isOpera);
  
  /**
   * Specifies whether the browser supports the WebM/VP8 Video format.
   * 
   * @name SC.mediaCapabilities.isWebMSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isWebMSupported = SC.mediaCapabilities.hasVideoPlayback && (SC.browser.isMozilla || SC.browser.isChrome || SC.browser.isOpera);
  
  /**
   * Specifies whether the browser supports the Adobe FLV compression format.
   * 
   * @name isFLVSupported
   * @type Boolean
   */
  SC.mediaCapabilities.isFLVSupported = SC.mediaCapabilities.isFlashSupported;
  
  /**
   * Specifies whether the browser supports the MPEG-4/H.264 Video format
   * 
   * @name isMP4Supported
   * @type Boolean
   */
  SC.mediaCapabilities.isMP4Supported = SC.mediaCapabilities.hasVideoPlayback && (SC.browser.isIE || SC.browser.isChrome || SC.browser.isSafari);
  
})();

/* >>>>>>>>>> BEGIN source/render_delegates/media_slider.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/**
 * Renders and updates the DOM representation of a media slider.
 * 
 * Parameters ------------------------- Requires the following parameters: -
 * `value` -- a value from 0 to 1. - `frame` -- containing the frame in which
 * the slider is being drawn.
 */

SC.BaseTheme.mediaSliderRenderDelegate = SC.RenderDelegate.create({
  
  className: 'sc-media-slider-view',
  
  render: function(dataSource, context) {
    this.addSizeClassName(dataSource, context);
    
    var blankImage = SC.BLANK_IMAGE_URL;
    var valueMax = dataSource.get('maximum');
    var valueMin = dataSource.get('minimum');
    var valueNow = dataSource.get('ariaValue');
    
    // addressing accessibility
    context.attr({
      'aria-valuemax': valueMax,
      'aria-valuemin': valueMin,
      'aria-valuenow': valueNow,
      'aria-orientation': 'horizontal'
    });
    if(valueMin !== 0 || valueMax !== 100) {
      context.attr('aria-valuetext', valueNow);
    }
    
    context = context.begin('span').addClass('track');
    this.includeSlices(dataSource, context, SC.THREE_SLICE);
    context.push('<span class="sc-loaded-ranges"></span>');
    context.push('<img src="' + blankImage + '" class="sc-handle" style="left: ' + dataSource.get('value') + '%" />' + '</span>');
    
    context = context.end();
    
    dataSource.get('renderState')._cachedHandle = null;
  },
  
  update: function(dataSource, context) {
    this.updateSizeClassName(dataSource, context);
    
    var valueMax = dataSource.get('maximum');
    var valueMin = dataSource.get('minimum');
    var valueNow = dataSource.get('ariaValue');
    
    // addressing accessibility
    context.attr({
      'aria-valuemax': valueMax,
      'aria-valuemin': valueMin,
      'aria-valuenow': valueNow,
      'aria-orientation': 'horizontal'
    });
    if(valueMin !== 0 || valueMax !== 100) {
      context.attr('aria-valuetext', valueNow);
    }
    
    if(dataSource.didChangeFor('sliderRenderDelegate', 'value')) {
      var handle = dataSource.get('renderState')._cachedHandle;
      if(!handle) {
        handle = dataSource.get('renderState')._cachedHandle = context.find('.sc-handle');
      }
      
      var value = dataSource.get('value');
      handle.css('left', value + "%");
    }
  }

});

/* >>>>>>>>>> BEGIN source/views/media_slider.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC */

/**
 * @class
 * 
 * The MediaSlider element takes the original SC.SliderView and adds an
 * indicator of which ranges of the media have been loaded.
 * 
 * @extends SC.SliderView
 */
SC.MediaSlider = SC.SliderView.extend(
/** @scope SC.MediaSlider.prototype */
{
  /**
   * The media view which this slider should attach itself to.
   */
  // TODO: Deprecate, bind to loadedTimeRanges instead.
  mediaView: null,
  
  /**
   * The name of our render delegate
   */
  renderDelegateName: 'mediaSliderRenderDelegate',
  
  /**
   * @private
   * 
   * Appends a loaded ranges span to the div element.
   * 
   * @param context
   * @param firstTime
   */
  render: function(context, firstTime) {
    arguments.callee.base.apply(this,arguments);
    
    // Render the loaded time ranges.
    this.renderLoadedTimeRanges();
  },
  
  renderLoadedTimeRanges: function() {
    var ranges = this.getPath('mediaView.loadedTimeRanges');
    var rangesElement = this.$('.sc-loaded-ranges');
    var max = this.get('maximum');
    // TODO: Remove support for mediaView, simply bind to loadedTimeRanges.
    
    // Read the ranges element, kick out if it doesn't exist yet.
    if(SC.empty(rangesElement)) {
      return;
    }
    // Scrub all children.
    rangesElement.empty(".sc-loaded-range");
    
    // If there are no ranges, exit.
    if(SC.empty(ranges)) {
      return;
    }
    
    var width = rangesElement.width();
    for( var i = 0; i < ranges.length; i += 2) {
      try {
        // Ranges are reported as an array of numbers. Odds are start indexes,
        // evens are end indexes of the previous start index.
        var startRange = ranges[i];
        var endRange = ranges[i + 1];
        
        var pixelLeft = width * (startRange / max);
        var pixelWidth = width * ((endRange - startRange) / max);
        
        var tag = $('<span class="sc-loaded-range" />');
        tag.css('left', pixelLeft);
        tag.css('width', pixelWidth);
        
        rangesElement.append(tag);
        
      } catch(e) {
      }
    }
  }.observes('*mediaView.loadedTimeRanges'),
});

/* >>>>>>>>>> BEGIN source/views/controls.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC */

sc_require('views/media_slider');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
SC.MediaControlsView = SC.View.extend(
/** @scope SC.MediaControlsView.prototype */{

  target: null,
  
  childViews: ['playButton', 'progressView', 'timeView', 'minusLabelView', 'volumeView', 'plusLabelView', 'theaterButton'],
  classNames: ['sc-media-controls'],
  
  playObserver: function(){
    if(this.getPath('target.paused')){
      this.get('playButton').set('icon', 'play');
    }else{
      this.get('playButton').set('icon', 'stop');
    }
  }.observes('*target.paused'),
  
  playButton: SC.ButtonView.extend({
    title: '',
    icon: 'play',
    layout: { top: 0, left: 0, width: 20, height:20},
    action: "playPause",
    targetBinding: "*owner.target"
  }),
  
  progressView: SC.MediaSlider.extend({
    layout: { top: 0, left: 25, right: 230, height:20},
    value:0,
    minimum: 0,
    step:0.1,
    valueBinding: "*owner.target.currentTime" ,
    maximumBinding: "*owner.target.duration",
    mediaViewBinding: "*owner.target"
  }),
  
  timeView: SC.LabelView.extend({
    layout: { top: 0, right: 160, width: 60, height:20},
    classNames: 'time',
    textAlign: SC.ALIGN_CENTER,
    valueBinding: '*owner.target.time'
  }),
  
  theaterButton: SC.ButtonView.extend({
    title: '',
    icon: 'theater',
    titleMinWidth: 35,
    layout: { top: 0, right: 140, width: 20, height:20},
    action: "fullScreen",
    targetBinding: "*owner.target"
  }),
  
  minusLabelView: SC.LabelView.extend({
    layout: { top: 0, right: 120, width: 20, height:20},
    value: '',
    icon: 'minus'
  }),
  
  volumeView: SC.MediaSlider.extend({
    layout: { top: 0, right: 25, width: 90, height:20},
    value:0,
    valueBinding: "*owner.target.volume" ,
    minimum: 0,
    maximum: 1,
    step: 0.01
  }),
  
  plusLabelView: SC.LabelView.extend({
    layout: { top: 0, right: 0, width: 20, height:20},
    value: '',
    icon: 'plus'
  })  
});

/* >>>>>>>>>> BEGIN source/views/mini_controls.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC */

sc_require('views/media_slider');
/** @class
  @extends SC.View
*/
SC.MiniMediaControlsView = SC.View.extend(
/** @scope SC.MiniMediaControlsView.prototype */{

  target: null,
  
  childViews: ['playButton', 'timeView', 'minusLabelView', 'volumeView'],
  classNames: ['sc-media-controls'],
  
  playObserver: function(){
    if(this.getPath('target.paused')){
      this.get('playButton').set('icon', 'play');
    }else{
      this.get('playButton').set('icon', 'stop');
    }
  }.observes('*target.paused'),
  
  
  playButton: SC.ButtonView.design({
    title: '',
    titleMinWidth: 35,
    icon: 'play',
    noStyle: YES,
    layout: { top: 0, left: 0, width: 20, height:20},
    action: "playPause",
    targetBinding: "*owner.target",
    renderStyle: 'renderImage',
    theme: ''
  }),
  
  timeView: SC.LabelView.design({
    layout: { top: 0, left: 20, width: 60, height:20},
    classNames: 'time',
    textAlign: SC.ALIGN_CENTER,
    valueBinding: '*owner.target.time'
  }),
  
  minusLabelView: SC.LabelView.design({
    layout: { top: 0, left: 80, width: 20, height:20},
    value: '',
    icon: 'minus'
  }),
  
  volumeView: SC.MediaSlider.design({
    layout: { top: 0, left: 100, right: 10, height:20},
    value:0,
    valueBinding: "*owner.target.volume" ,
    minimum: 0,
    maximum: 1,
    step: 0.01
  })
});

/* >>>>>>>>>> BEGIN source/views/audio.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

sc_require('views/controls');
sc_require('views/mini_controls');
sc_require('media_capabilities');

/** 
  @class

  Renders a audioView using different technologies like HTML5 audio tag,
  quicktime and flash.

  This view wraps the different technologies so you can use one standard and
  simple API to play audio.

  You can specify and array with the order of how the technologies will degrade
  depending on availability. For example you can set degradeList to be
  ['html5', 'flash'] and it will load your audio in an audio tag if the
  technology is available otherwise flash and if neither of the technologies
  are available it will show a message saying that your machine needs to install
  one of this technologies.

  @extends SC.View
  @since SproutCore 1.1
*/

SC.AudioView = SC.View.extend(
/** @scope SC.AudioView.prototype */{

  /**
    Audio view className.
    @property {String}
  */
  classNames: 'sc-audio-view',

  /**
    Properties that trigger a re render of the view. If the value changes, it
    means that the audio url changed.

    @property {Array}
  */
  displayProperties: ['value', 'shouldAutoResize'],

  /**
    Reference to the audio object once is created.
    @property {Object}
  */

  audioObject:null,

  /**
    Array containing the technologies and the order to load them depending
    availability

    @property {Array}
  */
  degradeList: ['html5','quicktime', 'flash'],

  /**
     Current time in secs
     
     @property {Number}
   */
  currentTime : function(key, value) {
    if (!SC.empty(value) && this._currentTime != value) {
      this._currentTime = value;
      this.seek(value);
    }

    return this._currentTime;
  }.property('_currentTime'),

  /**
     Current time in secs
     
     @property {Number}
     @private
   */
  _currentTime : 0,
  
  /** 
    Duration in secs
    @property {Number}
  */
  duration: 0, //audio duration in secs

  /**
    Volume. The value should be between 0 and 1
    @property {Number}
  */
  volume:0, //volume value from 0 to 1

  /**
    Tells you if the audio is paused or not.
    @property {Boolean}
  */
  paused: YES, //is the audio paused

  /**
    Tells you if the audio is loaded.
    @property {Boolean}
  */

  loaded: NO, //has the audio loaded

  /**
    Indicates if the audio has reached the end
    @property {Boolean}
  */

  ended: NO, //did the audio finished playing

  /**
    Indicates if the audio is ready to be played.
    @property {Boolean}
  */

  canPlay: NO, //can the audio be played

  loadedTimeRanges:[], //loaded bits

  /**
    Formatted currentTime. (00:00)
    @property {String}
  */
  time: function(){
    var currentTime=this.get('currentTime'),
        totaltimeInSecs = this.get('duration');
    var formattedTime = this._addZeros(Math.floor(currentTime/60))+':'+this._addZeros(Math.floor(currentTime%60))+"/"+this._addZeros(Math.floor(totaltimeInSecs/60))+':'+this._addZeros(Math.floor(totaltimeInSecs%60));
    return formattedTime;
  }.property('currentTime', 'duration').cacheable(),

  /**
    Renders the appropriate HTML according for the technology to use.

    @param {SC.RenderContext} context the render context
    @param {Boolean} firstTime YES if this is creating a layer
    @returns {void}
  */
  render: function(context, firstTime) {
    var i, j, listLen, pluginsLen, id = SC.guidFor(this);
    if(firstTime){
      for(i=0, listLen = this.degradeList.length; i<listLen; i++){
        switch(this.degradeList[i]){
        case "html5":
          if(!SC.mediaCapabilities.get('isHTML5AudioSupported'))
          {
            break;
          }
          context.push('<audio src="'+this.get('value')+'"');
          if(this.poster){
            context.push(' poster="'+this.poster+'"');
          }
          context.push('/>');
          this.loaded='html5';
          return;
        case "quicktime":
          if(!SC.mediaCapabilities.get('isQuicktimeSupported'))
          {
            break;
          }
          // TODO: this doesn't seem like the best way to determine what tags to use!
          if(SC.browser.name === SC.BROWSER.ie){
            context.push('<object id="qt_event_source" '+
                        'classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" '+
                        'codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"> '+
                        '</object> ');
          }
          context.push('<object width="100%" height="100%"');
          if(SC.browser.name === SC.BROWSER.ie){
            context.push('style="behavior:url(#qt_event_source);"');
          }
          context.push('classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" '+
                      'id="qt_'+id+'" '+
                      'codebase="http://www.apple.com/qtactivex/qtplugin.cab">'+
                      '<param name="src" value="'+this.get('value')+'"/>'+
                      '<param name="autoplay" value="false"/>'+
                      '<param name="loop" value="false"/>'+
                      '<param name="controller" value="false"/>'+
                      '<param name="postdomevents" value="true"/>'+
                      '<param name="kioskmode" value="true"/>'+
                      '<param name="bgcolor" value="000000"/>'+
                      '<param name="scale" value="aspect"/>'+
                      '<embed width="100%" height="100%" '+
                      'name="qt_'+id+'" '+
                      'src="'+this.get('value')+'" '+
                      'autostart="false" '+
                      'EnableJavaScript="true" '+
                      'postdomevents="true" '+
                      'kioskmode="true" '+
                      'controller="false" '+
                      'bgcolor="000000"'+
                      'scale="aspect" '+
                      'pluginspage="www.apple.com/quicktime/download">'+
                      '</embed></object>'+
                      '</object>');
          this.loaded='quicktime';
          return;
        case "flash":
          if(!SC.mediaCapabilities.get('isFlashSupported'))
          {
            break;
          }
          var flashURL= '/static/sproutcore/media/en/current/resources/videoCanvas.swf?1372933692';

          var movieURL = this.get('value');
          if (!movieURL) return;

          if(movieURL.indexOf('http:')==-1){
            movieURL=location.protocol+'//'+location.host+movieURL;
          }
          if(movieURL.indexOf('?')!=-1){
            movieURL=movieURL.substring(0, movieURL.indexOf('?'));
          }
          movieURL = encodeURI(movieURL);
          context.push('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '+
                        'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" '+
                        'width="100%" '+
                        'height="100%" '+
                        'id="flash_'+id+'" '+
                        'align="middle">'+
        	              '<param name="allowScriptAccess" value="sameDomain" />'+
        	              '<param name="allowFullScreen" value="true" />'+
        	              '<param name="movie" value="'+flashURL+'&src='+movieURL+'&scid='+id+'" />'+
        	              '<param name="quality" value="autohigh" />'+
        	              '<param name="scale" value="default" />'+
        	              '<param name="wmode" value="transparent" />'+
        	              '<param name="menu" value="false" />'+
                        '<param name="bgcolor" value="#000000" />	'+
        	              '<embed src="'+flashURL+'&src='+movieURL+'&scid='+id+'" '+
        	              'quality="autohigh" '+
        	              'scale="default" '+
        	              'wmode="transparent" '+
        	              'bgcolor="#000000" '+
        	              'width="100%" '+
        	              'height="100%" '+
        	              'name="flash_'+id+'" '+
        	              'align="middle" '+
        	              'allowScriptAccess="sameDomain" '+
        	              'allowFullScreen="true" '+
        	              'menu="false" '+
        	              'type="application/x-shockwave-flash" '+
        	              'pluginspage="http://www.adobe.com/go/getflashplayer" />'+
        	              '</object>');
          this.loaded='flash';
          SC.AudioView.addToAudioFlashViews(this);
          return;
        default:
          context.push('audio is not supported by your browser');
          return;
        }
      }
    }
  },

  valueObserver:function(){
    this.set('currentTime', 0);
    this.set('duration', 0);
    this.set('volume', 0);
    this.set('paused', YES);
    this.set('loaded', NO);
    this.set('ended', NO);
    this.set('canPlay', NO);
    this.set('loadedTimeRanges', []);
    this.replaceLayer();
  }.observes('value'),

  /**
    In didCreateLayer we add DOM events for audio tag or quicktime.

    @returns {void}
  */
  didCreateLayer :function(){
    if(this.loaded==="html5"){
      this.addAudioDOMEvents();
    }
    if(this.loaded==="quicktime"){
      this.addQTDOMEvents();
    }
  },

  didAppendToDocument :function(){
    if(this.loaded==="quicktime"){
      this.addQTDOMEvents();
    }
  },

  /**
    Adds all the necessary audio DOM elements.

    @returns {void}
  */
  addAudioDOMEvents: function() {
    var audioElem, view=this;
    audioElem = this.$('audio')[0];
    this.set('audioObject', audioElem);
    SC.Event.add(audioElem, 'durationchange', this, function () {
      SC.run(function() {
        view.set('duration', audioElem.duration);
      });
    }) ;

    SC.Event.add(audioElem, 'timeupdate', this, function() {
      SC.run(function() {
        view._currentTime = audioElem.currentTime;
        view.propertyDidChange('currentTime');
      });
    });

    SC.Event.add(audioElem, 'loadstart', this, function () {
      SC.run(function() {
        view.set('volume', audioElem.volume);
      });
    });

    SC.Event.add(audioElem, 'play', this, function () {
      SC.run(function() {
        view.set('paused', NO);
      });
    });

    SC.Event.add(audioElem, 'pause', this, function () {
      SC.run(function() {
        view.set('paused', YES);
      });
    });

    SC.Event.add(audioElem, 'canplay', this, function () {
      SC.run(function() {
        view.set('canPlay', YES);
      });
    });

    SC.Event.add(audioElem, 'ended', this, function () {
      SC.run(function() {
        view.set('ended', YES);
      });
    });

    SC.Event.add(audioElem, 'progress', this, function (e) {
      SC.run(function() {
        this.loadedTimeRanges=[];
        for (var j=0, jLen = audioElem.seekable.length; j<jLen; j++){
          this.loadedTimeRanges.push(audioElem.seekable.start(j));
          this.loadedTimeRanges.push(audioElem.seekable.end(j));
        }

        try {
          var trackCount=view.GetTrackCount(),i;
          for (i=1; i<=trackCount;i++){
            if ("Closed Caption"===this.GetTrackType(i)){
              view._closedCaptionTrackIndex=i;
            }
          }
        } catch (f) {}
      }, this);

    });
  },

  /**
     Adds all the necessary quicktime DOM elements.

     @returns {void}
   */
  addQTDOMEvents: function() {
    var media=this._getAudioObject(),
        audioElem = this.$()[0],
        view=this,
        dimensions;
    try{
      media.GetVolume();
    }catch(e){
//      SC.Logger.log('loaded fail trying later');
      this.invokeLater(this.didAppendToDocument, 100);
      return;
    }
    this.set('audioObject', media);
    view.set('duration', media.GetDuration()/media.GetTimeScale());
    view.set('volume', media.GetVolume()/256);

    SC.Event.add(audioElem, 'qt_durationchange', this, function () {
      SC.run(function() {
        view.set('duration', media.GetDuration()/media.GetTimeScale());
      });
    });

    SC.Event.add(audioElem, 'qt_begin', this, function () {
      SC.run(function() {
        view.set('volume', media.GetVolume()/256);
      });
    });

    SC.Event.add(audioElem, 'qt_loadedmetadata', this, function () {
      SC.run(function() {
        view.set('duration', media.GetDuration()/media.GetTimeScale());
      });
    });

    SC.Event.add(audioElem, 'qt_canplay', this, function () {
      SC.run(function() {
        view.set('canPlay', YES);
      });
    });

    SC.Event.add(audioElem, 'qt_ended', this, function () {
      SC.run(function() {
        view.set('ended', YES);
      });
    });

    SC.Event.add(audioElem, 'qt_pause', this, function () {
      SC.run(function() {
        view._currentTime = media.GetTime() / media.GetTimeScale();
        view.propertyDidChange('currentTime');
        view.set('paused', YES);
      });
    });

    SC.Event.add(audioElem, 'qt_play', this, function () {
      SC.run(function() {
        view._currentTime = media.GetTime() / media.GetTimeScale();
        view.propertyDidChange('currentTime');
        view.set('paused', NO);
      });
    });
  },


  /**
     For Quicktime we need to simulated the timer as there is no data,
     coming back from the plugin that reports back the currentTime of the
     audio.

     @returns {void}
   */
  _qtTimer:function(){
    if (this.loaded === 'quicktime' && !this.get('paused')) {
      this.incrementProperty('_currentTime');
      this.propertyDidChange('currentTime');
      this.invokeLater(this._qtTimer, 1000);
    }
  }.observes('paused'),

  /**
    Called when currentTime changes. Notifies the different technologies 
    then new currentTime.

    @returns {void}
  */
  seek:function(){
    var timeInSecs, totaltimeInSecs, formattedTime, media=this._getAudioObject();
    if(this.loaded==='html5'){
      // also check for media && media.currentTime, because media.currentTime doesn't exist on value change
      if(media && media.currentTime) media.currentTime=this.get('currentTime');
    }
    if(this.loaded==='quicktime'){
      media.SetTime(this.get('currentTime')*media.GetTimeScale());
    }
    if(this.loaded==='flash'){
      media.setTime(this.get('currentTime'));
    }
  },

  /**
    Set the volume of the audio.

    @returns {void}
  */
  setVolume:function(){
    var media=this._getAudioObject();
    if(this.loaded==="html5") media.volume=this.get('volume');
    if(this.loaded==="quicktime") media.SetVolume(this.get('volume')*256);
    if(this.loaded==="flash") media.setVolume(this.get('volume'));
  }.observes('volume'),

  /**
    Calls the right play method depending on the technology.
    @returns {void}
  */
  play: function(){
    var media=this._getAudioObject();
    if(this.loaded==="html5") media.play();
    if(this.loaded==="quicktime") media.Play();
    if(this.loaded==="flash") media.playVideo();
    this.set('paused', NO);
  },

  /**
    Calls the right stop method depending on the technology.
    @returns {void}
  */
  stop: function(){
    var media=this._getAudioObject();
    if(this.loaded==="html5")  media.pause();
    if(this.loaded==="quicktime")  media.Stop();
    if(this.loaded==="flash")  media.pauseVideo();
    this.set('paused', YES);
  },

  /**
    Plays or stops the audio.
    @returns {void}
  */
  playPause: function(){
    if(this.get('paused')){
      this.play();
    }else{
      this.stop();
    }
  },

  /**
    Enables captions if available
    @returns {void}
  */
  closedCaption:function(){
    if(this.loaded==="html5"){
      try{
        if(this.get('captionsEnabled')){
          if(this._closedCaptionTrackIndex){
            this.SetTrackEnabled(this._closedCaptionTrackIndex,true);
            this.set('captionsEnabled', YES);
          }
        }else{
          this.SetTrackEnabled(this._closedCaptionTrackIndex,false);
          this.set('captionsEnabled', NO);
        }
      }catch(a){}
    }
    return;
  },

  /*private*/


  /**
    Gets the right audio object depending on the browser.
    @returns {void}
  */
  _getAudioObject:function(){
    if(this.loaded==="html5") return this.get('audioObject');
    if(this.loaded==="quicktime") return document['qt_'+SC.guidFor(this)];
    if(this.loaded==="flash") {
      var movieName='flash_'+SC.guidFor(this);
      if (window.document[movieName])
      {
        return window.document[movieName];
      }
      if (navigator.appName.indexOf("Microsoft Internet")==-1)
      {
        if (document.embeds && document.embeds[movieName]) {
          return document.embeds[movieName];
        }
      }
      else
      {
        return document.getElementById(movieName);
      }
    }
  },

  _addZeros:function(value){
    if(value.toString().length<2) return "0"+value;
    return value;
  }

});

/**
  Hash to store references to the different flash audios.
*/
SC.AudioView.flashViews={};

/**
  Adds the flash view to the flashViews hash.
*/
SC.AudioView.addToAudioFlashViews = function(view) {
  SC.AudioView.flashViews[SC.guidFor(view)]=view;
} ;

/**
  This function is called from flash to update the properties of the corresponding
  flash view.
*/
SC.AudioView.updateProperty = function(scid, property, value) {
  var view = SC.AudioView.flashViews[scid];
  if(view){
    SC.run(function() {
      view.set(property, value);
    });
  }
} ;

/**
  Function to log events coming from flash.
*/
SC.AudioView.logFlash = function(message) {
  SC.Logger.log("FLASHLOG: "+message);
} ;


SC.AudioPlayerView = SC.View.extend({
  classNames: 'sc-audio-view',

  childViews: ['audioView', 'mini'],

  value: null,

  degradeList: null,

  audioView:SC.AudioView.design({
    layout: { top: 0, left:0, width:100, height:100},
    degradeListBinding: '*parentView.degradeList',
    valueBinding: '*parentView.value'
  }),

  mini: SC.MiniMediaControlsView.design({
     layout: { bottom:0, left: 0, right: 0, height: 20 },
     targetBinding: '*parentView.audioView'
   })
});

/* >>>>>>>>>> BEGIN source/views/simple_controls.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC */

sc_require('views/media_slider');
/** @class
  @extends SC.View
*/
SC.SimpleMediaControlsView = SC.View.extend(
/** @scope SC.SimpleMediaControlsView.prototype */{

  target: null,
  
  childViews: ['playButton', 'progressView'],
  
  classNames: ['sc-media-controls'],
  
  playObserver: function(){
    if(this.getPath('target.paused')){
      this.get('playButton').set('icon', 'play');
    }else{
      this.get('playButton').set('icon', 'stop');
    }
  }.observes('*target.paused'),
  
  playButton: SC.ButtonView.design({
    title: '',
    titleMinWidth: 35,
    icon: 'play',
    layout: { top: 0, left: 0, width: 20, height:20 },
    action: "playPause",
    targetBinding: "*owner.target"
  }),
  
  progressView: SC.MediaSlider.design({
    layout: { top: 0, left: 25, right: 10, height:20 },
    value:0,
    minimum: 0,
    step:0.1,
    valueBinding: "*owner.target.currentTime" ,
    maximumBinding: "*owner.target.duration",
    mediaViewBinding: "*owner.target"
  })
});

/* >>>>>>>>>> BEGIN source/views/video.js */
// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


sc_require('views/controls');
sc_require('views/mini_controls');
sc_require('media_capabilities');

/**
  @class

  Renders a videoView using different technologies like HTML5 video tag,
  quicktime and flash.

  This view wraps the different technologies so you can use one standard and
  simple API to play videos.

  You can specify and array with the order of how the technologies will degrade
  depending on availability. For example you can set degradeList to be
  ['html5', 'flash'] and it will load your video in a video tag if the
  technology is available otherwise flash and if neither of the technologies
  are available it will show a message saying that your machine needs to install
  one of this technologies.

  @extends SC.View
  @since SproutCore 1.1
*/
SC.VideoView = SC.View.extend(
/** @scope SC.VideoView.prototype */{

  /**
    Video view className.
    @property {String}
  */
  classNames: 'sc-video-view',

  /**
    Properties that trigger a re render of the view. If the value changes, it
    means that the video url changed.

    @property {Array}
  */
  displayProperties: ['value', 'shouldAutoResize'],

  /**
    Reference to the video object once is created.
    @property {Object}
  */

  videoObject:null,

  /**
    Array containing the technologies and the order to load them depending
    availability

    @property {Array}
  */
  degradeList: ['html5','quicktime', 'flash'],

  /**
     Current time in secs
     
     @property {Number}
   */
  currentTime : function(key, value) {
    if (!SC.empty(value) && this._currentTime != value) {
      this._currentTime = value;
      this.seek(value);
    }

    return this._currentTime;
  }.property('_currentTime'),

  /**
     Current time in secs
     
     @property {Number}
     @private
   */
  _currentTime : 0,
  
  /** 
    Duration in secs
    @property {Number}
  */
  duration: 0, //video duration in secs

  /**
    Volume. The value should be between 0 and 1
    @property {Number}
  */
  volume:0, //volume value from 0 to 1

  /**
    Tells you if the video is paused or not.
    @property {Boolean}
  */
  paused: YES, //is the video paused

  /**
    Tells you if the video is loaded.
    @property {Boolean}
  */

  loaded: NO, //has the video loaded

  /**
    Indicates if the video has reached the end
    @property {Boolean}
  */

  ended: NO, //did the video finished playing

  /**
    Indicates if the video is ready to be played.
    @property {Boolean}
  */

  canPlay: NO, //can the video be played

  /**
    Width of the video in pixels.
    @property {Number}
  */
  videoWidth:0,

  /**
    Width of the video in pixels.
    @property {Number}
  */
  videoHeight:0,

  /**
    Flag to enable captions if available.
    @property {Boolean}
  */
  captionsEnabled: NO,

  loadedTimeRanges:[], //loaded bits

  poster: null,

  /**
    Formatted currentTime. (00:00)
    @property {String}
  */
  time: function(){
    var currentTime=this.get('currentTime'),
        totaltimeInSecs = this.get('duration');
    var formattedTime = this._addZeros(Math.floor(currentTime/60))+':'+this._addZeros(Math.floor(currentTime%60))+"/"+this._addZeros(Math.floor(totaltimeInSecs/60))+':'+this._addZeros(Math.floor(totaltimeInSecs%60));
    return formattedTime;
  }.property('currentTime', 'duration').cacheable(),

  /**
    Renders the appropriate HTML according for the technology to use.

    @param {SC.RenderContext} context the render context
    @param {Boolean} firstTime YES if this is creating a layer
    @returns {void}
  */
  render: function(context, firstTime) {
    var i, j, listLen, pluginsLen, id = SC.guidFor(this);
    if(firstTime){
      for(i=0, listLen = this.degradeList.length; i<listLen; i++){
        switch(this.degradeList[i]){
        case "html5":
          if(!SC.mediaCapabilities.get('isHTML5VideoSupported'))
          {
            break;
          }
          context.push('<video src="'+this.get('value')+'"');
          if(this.poster){
            context.push(' poster="'+this.poster+'"');
          }
          context.push('/>');
          this.loaded='html5';
          return;
        case "quicktime":
          if(!SC.mediaCapabilities.get('isQuicktimeSupported'))
          {
            break;
          }
          // TODO: this doesn't seem like the best way to determine what tags to use!
          if(SC.browser.name === SC.BROWSER.ie){
            context.push('<object id="qt_event_source" '+
                        'classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598" '+
                        'codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"> '+
                        '</object> ');
          }
          context.push('<object width="100%" height="100%"');
          if(SC.browser.name === SC.BROWSER.ie){
            context.push('style="position: absolute; top:0px; left:0px; behavior:url(#qt_event_source);"');
          }
          context.push('classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" '+
                      'id="qt_'+id+'" '+
                      'codebase="http://www.apple.com/qtactivex/qtplugin.cab">'+
                      '<param name="src" value="'+this.get('value')+'"/>'+
                      '<param name="autoplay" value="false"/>'+
                      '<param name="loop" value="false"/>'+
                      '<param name="controller" value="false"/>'+
                      '<param name="postdomevents" value="true"/>'+
                      '<param name="kioskmode" value="true"/>'+
                      '<param name="bgcolor" value="000000"/>'+
                      '<param name="scale" value="aspect"/>'+
                      '<embed width="100%" height="100%" '+
                      'name="qt_'+id+'" '+
                      'src="'+this.get('value')+'" '+
                      'autostart="false" '+
                      'EnableJavaScript="true" '+
                      'postdomevents="true" '+
                      'kioskmode="true" '+
                      'controller="false" '+
                      'bgcolor="000000"'+
                      'scale="aspect" '+
                      'pluginspage="www.apple.com/quicktime/download">'+
                      '</embed></object>'+
                      '</object>');
          this.loaded='quicktime';
          return;
        case "flash":
          if(!SC.mediaCapabilities.get('isFlashSupported'))
          {
            break;
          }
          var flashURL= '/static/sproutcore/media/en/current/resources/videoCanvas.swf?1372933692';

          var movieURL = this.get('value');
          if (!movieURL) return;

          if(movieURL.indexOf('http:')==-1){
            movieURL=location.protocol+'//'+location.host+movieURL;
          }
          if(movieURL.indexOf('?')!=-1){
            movieURL=movieURL.substring(0, movieURL.indexOf('?'));
          }
          movieURL = encodeURI(movieURL);
          context.push('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '+
                        'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" '+
                        'width="100%" '+
                        'height="100%" '+
                        'id="flash_'+id+'" '+
                        'align="middle">'+
        	              '<param name="allowScriptAccess" value="sameDomain" />'+
        	              '<param name="allowFullScreen" value="true" />'+
        	              '<param name="movie" value="'+flashURL+'&src='+movieURL+'&scid='+id+'" />'+
        	              '<param name="quality" value="autohigh" />'+
        	              '<param name="scale" value="default" />'+
        	              '<param name="wmode" value="transparent" />'+
        	              '<param name="menu" value="false" />'+
                        '<param name="bgcolor" value="#000000" />	'+
        	              '<embed src="'+flashURL+'&src='+movieURL+'&scid='+id+'" '+
        	              'quality="autohigh" '+
        	              'scale="default" '+
        	              'wmode="transparent" '+
        	              'bgcolor="#000000" '+
        	              'width="100%" '+
        	              'height="100%" '+
        	              'name="flash_'+id+'" '+
        	              'align="middle" '+
        	              'allowScriptAccess="sameDomain" '+
        	              'allowFullScreen="true" '+
        	              'menu="false" '+
        	              'type="application/x-shockwave-flash" '+
        	              'pluginspage="http://www.adobe.com/go/getflashplayer" />'+
        	              '</object>');
          this.loaded='flash';
          SC.VideoView.addToVideoFlashViews(this);
          return;
        default:
          context.push('video is not supported by your browser');
          return;
        }
      }
    }
  },

  valueObserver:function(){
    this.set('currentTime', 0);
    this.set('duration', 0);
    this.set('volume', 0);
    this.set('paused', YES);
    this.set('loaded', NO);
    this.set('ended', NO);
    this.set('canPlay', NO);
    this.set('loadedTimeRanges', []);
    this.replaceLayer();
  }.observes('value'),


  /**
    This function is called everytime the frame changes. This is done to get
    the right video dimensions for HTML5 video tag.

    @returns {void}
  */
  frameDidChange: function() {
    if(this.loaded==="html5"){
      var fr= this.get('frame'),
          elem = this.$('video');
      elem.attr('width', fr.width);
      elem.attr('height', fr.height);
    }
  }.observes('frame'),

  /**
    In didCreateLayer we add DOM events for video tag or quicktime.

    @returns {void}
  */
  didCreateLayer :function(){
    if(this.loaded==="html5"){
      this.addVideoDOMEvents();
      this.frameDidChange();
    }
    if(this.loaded==="quicktime"){
      this.addQTDOMEvents();
    }
  },

  didAppendToDocument :function(){
    if(this.loaded==="quicktime"){
      this.addQTDOMEvents();
    }
  },

  /**
    Adds all the necessary video DOM elements.

    @returns {void}
  */
  addVideoDOMEvents: function() {
    var videoElem, view=this;
    videoElem = this.$('video')[0];
    this.set('videoObject', videoElem);
    SC.Event.add(videoElem, 'durationchange', this, function () {
      SC.RunLoop.begin();
      view.set('duration', videoElem.duration);
      SC.RunLoop.end();
    }) ;
    SC.Event.add(videoElem, 'timeupdate', this, function () {
      SC.RunLoop.begin();
      view._currentTime = videoElem.currentTime;
      view.propertyDidChange('currentTime');
      SC.RunLoop.end();
    }) ;
    SC.Event.add(videoElem, 'loadstart', this, function () {
      SC.RunLoop.begin();
      this.updateVideoElementLoadedTimeRanges(videoElem);
      view.set('volume', videoElem.volume);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'play', this, function () {
      SC.RunLoop.begin();
      view.set('paused', NO);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'pause', this, function () {
      SC.RunLoop.begin();
      view.set('paused', YES);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'loadedmetadata', this, function () {
      SC.RunLoop.begin();
      view.set('videoWidth', videoElem.videoWidth);
      view.set('videoHeight', videoElem.videoHeight);
      SC.RunLoop.end();
    });

    SC.Event.add(videoElem, 'canplay', this, function () {
      SC.RunLoop.begin();
      this.updateVideoElementLoadedTimeRanges(videoElem);
      view.set('canPlay', YES);
      SC.RunLoop.end();
    });

    SC.Event.add(videoElem, 'ended', this, function () {
      SC.RunLoop.begin();
      view.set('ended', YES);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'progress', this, function (e) {
      SC.RunLoop.begin();
      this.updateVideoElementLoadedTimeRanges(videoElem);
       try{
          var trackCount=view.GetTrackCount(),i;
          for(i=1; i<=trackCount;i++){
            if("Closed Caption"===this.GetTrackType(i)){
              view._closedCaptionTrackIndex=i;
            }
          }
        }catch(f){}
      SC.RunLoop.end();
    });

  },

  updateVideoElementLoadedTimeRanges: function(videoElem) {
    if(!videoElem) videoElem = this.$('video')[0];
    if(!this.loadedTimeRanges) this.loadedTimeRanges=[];
    else this.loadedTimeRanges.length=0;
    for (var j=0, jLen = videoElem.buffered.length; j<jLen; j++){
      this.loadedTimeRanges.push(videoElem.buffered.start(j));
      this.loadedTimeRanges.push(videoElem.buffered.end(j));
    }
    this.notifyPropertyChange('loadedTimeRanges');
  },

  /**
     Adds all the necessary quicktime DOM elements.

     @returns {void}
   */
  addQTDOMEvents: function() {
    var vid=this._getVideoObject(),
        videoElem = this.$()[0],
        view=this,
        dimensions;
    try{
      vid.GetVolume();
    }catch(e){
      SC.Logger.log('loaded fail trying later');
      this.invokeLater(this.didAppendToDocument, 100);
      return;
    }
    this.set('videoObject', vid);
    this._setDurationFromQTVideoObject();
    this.set('volume', vid.GetVolume()/256);
    this._setDimensionsFromQTVideoObject();

    SC.Event.add(videoElem, 'qt_durationchange', this, function () {
      SC.RunLoop.begin();
      this._setDurationFromQTVideoObject();
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_begin', this, function () {
      SC.RunLoop.begin();
      this.updateQTVideoObjectLoadedTimeRanges(vid);
      view.set('volume', vid.GetVolume()/256);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_loadedmetadata', this, function () {
      SC.RunLoop.begin();
      this._setDurationFromQTVideoObject();
      this.updateQTVideoObjectLoadedTimeRanges(vid);
      var dimensions=vid.GetRectangle().split(',');
      view.set('videoWidth', dimensions[2]);
      view.set('videoHeight', dimensions[3]);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_canplay', this, function () {
      SC.RunLoop.begin();
      this.updateQTVideoObjectLoadedTimeRanges(vid);
      view.set('canPlay', YES);
      SC.RunLoop.end();
    });

    SC.Event.add(videoElem, 'qt_ended', this, function () {
      view.set('ended', YES);
    });
    SC.Event.add(videoElem, 'qt_pause', this, function () {
      SC.RunLoop.begin();
      view._currentTime = vid.GetTime()/vid.GetTimeScale();
      view.propertyDidChange('currentTime');
      view.set('paused', YES);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_play', this, function () {
      SC.RunLoop.begin();
      view.set('currentTime', vid.GetTime()/vid.GetTimeScale());
      view.set('paused', NO);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_load', this, function () {
      SC.RunLoop.begin();
      this.updateQTVideoObjectLoadedTimeRanges(vid);
      SC.RunLoop.end();
    });
    SC.Event.add(videoElem, 'qt_progress', this, function () {
      SC.RunLoop.begin();
      this.updateQTVideoObjectLoadedTimeRanges(vid);
      SC.RunLoop.end();
    });
  },

  updateQTVideoObjectLoadedTimeRanges: function(vid) {
    vid = vid || this._getVideoObject();
    if(!this.loadedTimeRanges) this.loadedTimeRanges=[];
    else this.loadedTimeRanges.length = 0;
    this.loadedTimeRanges.push(0);
    this.loadedTimeRanges.push(vid.GetMaxTimeLoaded()/vid.GetTimeScale());
    this.notifyPropertyChange('loadedTimeRanges');
  },

  _setDurationFromQTVideoObject: function(vid) {
    if(!vid) vid = this._getVideoObject();
    try{ this.set('duration', vid.GetDuration()/vid.GetTimeScale()); }
    catch(e) { this.invokeLater('_setDurationFromQTVideoObject',100); }
  },

  _setDimensionsFromQTVideoObject: function(vid) {
    if(!vid) vid = this._getVideoObject();
    try{
      var dimensions=vid.GetRectangle().split(',');
      this.set('videoWidth', dimensions[2]);
      this.set('videoHeight', dimensions[3]);
    } catch(e) { this.invokeLater('_setDimensionsFromQTVideoObject',100); }
  },

  /**
     For Quicktime we need to simulated the timer as there is no data,
     coming back from the plugin that reports back the currentTime of the
     video.

     @returns {void}
   */
  _qtTimer:function(){
    if(this.loaded==='quicktime' && !this.get('paused')){
      this.incrementProperty('_currentTime');
      this.propertyDidChange('currentTime');
      this.invokeLater(this._qtTimer, 1000);
    }
  }.observes('paused'),

  /**
    Called when currentTime changes. Notifies the different technologies 
    then new currentTime.

    @returns {void}
  */
  seek:function(){
    var timeInSecs, totaltimeInSecs, formattedTime, vid=this._getVideoObject();
    if(this.loaded==='html5'){
      vid.currentTime=this.get('currentTime');
    }
    if(this.loaded==='quicktime'){
      vid.SetTime(this.get('currentTime')*vid.GetTimeScale());
    }
    if(this.loaded==='flash'){
      vid.setTime(this.get('currentTime'));
    }
  },
  
  /** 
    Set the volume of the video.

    @returns {void}
  */
  setVolume:function(){
    var vid=this._getVideoObject();
    if(this.loaded==="html5") vid.volume=this.get('volume');
    if(this.loaded==="quicktime") vid.SetVolume(this.get('volume')*256);
    if(this.loaded==="flash") vid.setVolume(this.get('volume'));
  }.observes('volume'),

  /**
    Calls the right play method depending on the technology.
    @returns {void}
  */
  play: function(){
    try{
      var vid=this._getVideoObject();
      if(this.loaded==="html5") vid.play();
      if(this.loaded==="quicktime") vid.Play();
      if(this.loaded==="flash") vid.playVideo();
      this.set('paused', NO);
    }catch(e){
      SC.Logger.warn('The video cannot play!!!! It might still be loading the plugging');
    }
  },

  /**
    Calls the right stop method depending on the technology.
    @returns {void}
  */
  stop: function(){
    var vid=this._getVideoObject();
    if(this.loaded==="html5")  vid.pause();
    if(this.loaded==="quicktime")  vid.Stop();
    if(this.loaded==="flash")  vid.pauseVideo();
    this.set('paused', YES);
  },

  /**
    Plays or stops the video.
    @returns {void}
  */
  playPause: function(){
    if(this.get('paused')){
      this.play();
    }else{
      this.stop();
    }
  },

  /**
    Goes into fullscreen mode if available
    @returns {void}
  */
  fullScreen: function(){
    var vid=this._getVideoObject();
    if(this.loaded==="html5") this.$('video')[0].webkitEnterFullScreen();
    if(this.loaded==="flash") vid.fullScreen();
    return;
  },

  /**
    Enables captions if available
    @returns {void}
  */
  closedCaption:function(){
    if(this.loaded==="html5"){
      try{
        if(this.get('captionsEnabled')){
          if(this._closedCaptionTrackIndex){
            this.SetTrackEnabled(this._closedCaptionTrackIndex,true);
            this.set('captionsEnabled', YES);
          }
        }else{
          this.SetTrackEnabled(this._closedCaptionTrackIndex,false);
          this.set('captionsEnabled', NO);
        }
      }catch(a){}
    }
    return;
  },

  /*private*/


  /**
    Gets the right video object depending on the browser.
    @returns {void}
  */
  _getVideoObject:function(){
    if(this.loaded==="html5") return this.get('videoObject');
    if(this.loaded==="quicktime") return document['qt_'+SC.guidFor(this)];
    if(this.loaded==="flash") {
      var movieName='flash_'+SC.guidFor(this);
      if (window.document[movieName])
      {
        return window.document[movieName];
      }
      if (navigator.appName.indexOf("Microsoft Internet")==-1)
      {
        if (document.embeds && document.embeds[movieName]) {
          return document.embeds[movieName];
        }
      }
      else
      {
        return document.getElementById(movieName);
      }
    }
  },

  _addZeros:function(value){
    if(value.toString().length<2) return "0"+value;
    return value;
  }

});

/** 
  Hash to store references to the different flash videos.
*/
SC.VideoView.flashViews={};

/**
  Adds the flash view to the flashViews hash.
*/
SC.VideoView.addToVideoFlashViews = function(view) {
  SC.VideoView.flashViews[SC.guidFor(view)]=view;
} ;

/**
  This function is called from flash to update the properties of the corresponding
  flash view.
*/
SC.VideoView.updateProperty = function(scid, property, value) {
  var view = SC.VideoView.flashViews[scid];
  if(view){
    SC.RunLoop.begin();
    view.set(property, value);
    SC.RunLoop.end();
  }
} ;

/**
  Function to log events coming from flash.
*/
SC.VideoView.logFlash = function(message) {
  SC.Logger.log("FLASHLOG: "+message);
} ;


SC.VideoPlayerView = SC.View.extend({
  classNames: 'sc-video-player-view',

  childViews: ['videoView', 'regular'],

  value: null,

  degradeList: null,

  videoView:SC.VideoView.design({
    layout: { top: 0, bottom:20, right:0, left:0},
    degradeListBinding: '*parentView.degradeList',
    valueBinding: '*parentView.value'
  }),

  regular: SC.MediaControlsView.design({
     layout: { bottom:0, left: 0, right: 0, height: 20 },
     targetBinding: '*parentView.videoView'
   }),

  mini: SC.MiniMediaControlsView.design({
     layout: { bottom:0, left: 0, right: 0, height: 20 },
     targetBinding: '*parentView.videoView'
   })
});


