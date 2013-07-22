/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

/**
 * @namespace
 * 
 * A small demonstration app that shows different ways of consuming media. Also
 * a convenient testbed for those of us who are working on improving the media
 * framework.
 * 
 * @extends SC.Object
 * @author Michael Krotscheck
 */
MediaExamples = SC.Application.create(
/** @scope MediaExamples.prototype */
{
  
  NAMESPACE: 'MediaExamples',
  VERSION: '0.1.0',
  
  init: function() {
    arguments.callee.base.apply(this,arguments);
    SC.ready(function() {
      MediaExamples.main();
    });
  },
  
  main: function() {
    this.getPath('mainPage.mainPane').append();
  }
});

/* >>>>>>>>>> BEGIN source/views/capabilities_view.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

/**
 * @class
 * 
 * (Document Your View Here)
 * 
 * @extends SC.View
 */
MediaExamples.CapabilitiesView = SC.View.extend(SC.FlowedLayout,
/** @scope MediaExamples.CapabilitiesView.prototype */
{
  layoutDirection: SC.LAYOUT_VERTICAL,
  
  childViews: ['hasAudioPlayback', 'hasVideoPlayback', 'hasMicrophone', 'hasVideoCamera', 'isHTML5AudioSupported', 'isHTML5VideoSupported',
               'isHTML5StreamApiSupported', 'isQuicktimeSupported', 'isFlashSupported', 'isOggSupported', 'isWebMSupported', 'isFLVSupported',
               'isMP4Supported'],
  
  fillWidth: YES,
  
  hasAudioPlayback: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Audio Playback: " + SC.mediaCapabilities.get("hasAudioPlayback")
  }),
  
  hasVideoPlayback: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Video Playback: " + SC.mediaCapabilities.get("hasAudioPlayback")
  }),
  
  hasMicrophone: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Microphone: " + SC.mediaCapabilities.get("hasMicrophone")
  }),
  
  hasVideoCamera: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Video Camera: " + SC.mediaCapabilities.get("hasVideoCamera")
  }),
  
  isHTML5AudioSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "HTML5 Audio: " + SC.mediaCapabilities.get("isHTML5AudioSupported")
  }),
  
  isHTML5VideoSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "HTML5 Video: " + SC.mediaCapabilities.get("isHTML5VideoSupported")
  }),
  
  isHTML5StreamApiSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Stream API: " + SC.mediaCapabilities.get("isHTML5StreamApiSupported")
  }),
  
  isQuicktimeSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Quicktime Plugin: " + SC.mediaCapabilities.get("isQuicktimeSupported")
  }),
  
  isFlashSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "Flash Plugin: " + SC.mediaCapabilities.get("isFlashSupported")
  }),
  
  isOggSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "OGG/Theora: " + SC.mediaCapabilities.get("isOggSupported")
  }),
  
  isWebMSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "WebM/VP8: " + SC.mediaCapabilities.get("isWebMSupported")
  }),
  
  isFLVSupported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "FLV Video: " + SC.mediaCapabilities.get("isFLVSupported")
  }),
  
  isMP4Supported: SC.LabelView.extend({
    layout: {
      height: 22
    },
    value: "MPEG-4/H.264: " + SC.mediaCapabilities.get("isMP4Supported")
  }),
});

/* >>>>>>>>>> BEGIN source/views/audio_view.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

sc_require('views/capabilities_view');

/**
 * @class
 * 
 * (Document Your View Here)
 * 
 * @extends SC.View
 */
MediaExamples.AudioView = SC.View.extend(
/** @scope MediaExamples.AudioView.prototype */
{
  childViews: ['infoBox', 'mediaControlsContainer'],
  
  infoBox: MediaExamples.CapabilitiesView.extend({
    layout: {
      right: 10,
      top: 10,
      height: 200,
      width: 150
    }
  }),
  
  mediaControlsContainer: SC.View.extend(SC.FlowedLayout, {
    
    defaultFlowSpacing: {
      bottom: 10
    },
    
    layout: {
      left: 10,
      top: 10,
      right: 320,
      bottom: 10,
    },
    
    layoutDirection: SC.LAYOUT_VERTICAL,
    
    fillWidth: YES,
    
    childViews: ['audioPlayer', 'mediaControlsLabel', 'mediaControls', 'miniControlsLabel', 'miniControls', 'simpleControlsLabel', 'simpleControls'],
    
    audioPlayer: SC.AudioView.extend({
      value: 'http://www.hyperion-records.co.uk/audiotest/8bec43dfc57e3cd7/1%20Sullivan%20The%20Lost%20Chord,%20Seated%20one%20day%20at%20the%20organ.MP3',
      layout: {
        height: 0,
      },
    }),
    
    mediaControlsLabel: SC.LabelView.extend({
      value: "SC.MediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    mediaControls: SC.MediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.audioPlayer'),
      layout: {
        height: 20,
      },
    }),
    
    miniControlsLabel: SC.LabelView.extend({
      value: "SC.MiniMediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    miniControls: SC.MiniMediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.audioPlayer'),
      layout: {
        height: 20,
      },
    }),
    
    simpleControlsLabel: SC.LabelView.extend({
      value: "SC.SimpleMediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    simpleControls: SC.SimpleMediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.audioPlayer'),
      layout: {
        height: 20,
      },
    }),
  })

});

/* >>>>>>>>>> BEGIN source/views/camera_view.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

/**
 * @class
 * 
 * (Document Your View Here)
 * 
 * @extends SC.View
 */
MediaExamples.CameraView = SC.View.extend(
/** @scope MediaExamples.CameraView.prototype */
{
  childViews: ['infoBox', 'labelView'],
  
  infoBox: MediaExamples.CapabilitiesView.extend({
    layout: {
      right: 10,
      top: 10,
      height: 200,
      width: 150
    }
  }),
  
  labelView: SC.LabelView.extend({
    tagName: "h1",
    layout: {
      top: 10,
      left: 10,
      bottom: 10,
      right: 170
    },
    value: "This feature is not yet supported"
  })
});

/* >>>>>>>>>> BEGIN source/views/microphone_view.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

/**
 * @class
 * 
 * (Document Your View Here)
 * 
 * @extends SC.View
 */
MediaExamples.MicrophoneView = SC.View.extend(
/** @scope MediaExamples.MicrophoneView.prototype */
{
  childViews: ['infoBox', 'labelView'],
  
  infoBox: MediaExamples.CapabilitiesView.extend({
    layout: {
      right: 10,
      top: 10,
      height: 200,
      width: 150
    }
  }),
  
  labelView: SC.LabelView.extend({
    tagName: "h1",
    layout: {
      top: 10,
      left: 10,
      bottom: 10,
      right: 170
    },
    value: "This feature is not yet supported"
  })

});

/* >>>>>>>>>> BEGIN source/views/video_view.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

/**
 * @class
 * 
 * (Document Your View Here)
 * 
 * @extends SC.View
 */
MediaExamples.VideoView = SC.View.extend(
/** @scope MediaExamples.VideoView.prototype */
{
  
  childViews: ['infoBox', 'mediaControlsContainer'],
  
  infoBox: MediaExamples.CapabilitiesView.extend({
    layout: {
      right: 10,
      top: 10,
      height: 200,
      width: 150
    }
  }),
  
  mediaControlsContainer: SC.View.extend(SC.FlowedLayout, {
    
    defaultFlowSpacing: {
      bottom: 10
    },
    
    layout: {
      left: 10,
      top: 10,
      right: 320,
      bottom: 10,
    },
    
    layoutDirection: SC.LAYOUT_VERTICAL,
    
    fillWidth: YES,
    
    childViews: ['videoPlayer', 'mediaControlsLabel', 'mediaControls', 'miniControlsLabel', 'miniControls', 'simpleControlsLabel', 'simpleControls'],
    
    videoPlayer: SC.VideoView.extend({
      value: (function() {
        if(SC.mediaCapabilities.isOggSupported) {
          return 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv';
        } else {
          return 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
        }
      })(),
      
      layout: {
        height: 204,
        width: 480
      },
    }),
    
    mediaControlsLabel: SC.LabelView.extend({
      value: "SC.MediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    mediaControls: SC.MediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.videoPlayer'),
      layout: {
        height: 20,
      },
    }),
    
    miniControlsLabel: SC.LabelView.extend({
      value: "SC.MiniMediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    miniControls: SC.MiniMediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.videoPlayer'),
      layout: {
        height: 20,
      },
    }),
    
    simpleControlsLabel: SC.LabelView.extend({
      value: "SC.SimpleMediaControlsView",
      layout: {
        height: 22
      }
    }),
    
    simpleControls: SC.SimpleMediaControlsView.extend({
      targetBinding: SC.Binding.oneWay('.parentView.videoPlayer'),
      layout: {
        height: 20,
      },
    }),
  })

});

/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Media Examples - A Media Playback sandbox.
// Copyright: ©2012 Michael Krotscheck and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals MediaExamples */

MediaExamples.mainPage = SC.Page.design({
  
  mainPane: SC.MainPane.design({
    childViews: 'workspaceView'.w(),
    
    workspaceView: SC.WorkspaceView.design({
      topToolbar: SC.ToolbarView.extend({
        childViews: ['mediaToggle'],
        
        mediaToggle: SC.SegmentedView.design({
          layout: {
            height: 28,
            left: 20,
            centerY: 0
          },
          align: SC.ALIGN_LEFT,
          controlSize: SC.LARGE_CONTROL_SIZE,
          items: [SC.Object.create({
            title: "Audio Playback",
            value: "MediaExamples.AudioView",
            isEnabled: SC.mediaCapabilities.get('hasAudioPlayback')
          }), SC.Object.create({
            title: "Video Playback",
            value: "MediaExamples.VideoView",
            isEnabled: SC.mediaCapabilities.get('hasVideoPlayback')
          }), SC.Object.create({
            title: "Video Recording",
            value: "MediaExamples.CameraView",
            isEnabled: SC.mediaCapabilities.get('hasVideoCamera')
          }), SC.Object.create({
            title: "Microphone Recording",
            value: "MediaExamples.MicrophoneView",
            isEnabled: SC.mediaCapabilities.get('hasMicrophone')
          })],
          itemTitleKey: "title",
          itemValueKey: "value",
          itemIsEnabledKey: 'isEnabled',
          value: "MediaExamples.AudioView"
        })
      }),
      contentView: SC.ContainerView.extend({
        nowShowingBinding: SC.Binding.oneWay(".parentView.topToolbar.mediaToggle.value")
      })
    })
  })
});

