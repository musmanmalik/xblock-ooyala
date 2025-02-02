{
  "general": {
    "watermark": {"imageResource": {"url": "","androidResource" : "logo","iosResource" : "logo"  },
                  "position": "bottomRight",
                  "clickUrl": "",
                  "target": "_blank",
                  "transparency": 1,
                  "scalingOption": "default",
                  "scalingPercentage": 20
    },
    "bufferingSpinnerDelay": 750,
    "loadingImage": {"imageResource": {"url": "//player.ooyala.com/static/v4/candidate/latest/skin-plugin/assets/images/loader_svg.svg" } },
    "accentColor":"#448aff"
  },
  "localization": {
    "defaultLanguage": "en",
    "availableLanguageFile": [
      {
        "language": "en",
        "languageFile": "",
        "androidResource": "skin-config/languageFiles/en.json",
        "iosResource": "en"
      },
      {
        "language": "es",
        "languageFile": "",
        "androidResource": "skin-config/languageFiles/es.json",
        "iosResource": "es"
      },
      {
        "language": "zh",
        "languageFile": "",
        "androidResource": "skin-config/languageFiles/zh.json",
        "iosResource": "zh"
      },
      {
        "language": "ja",
        "languageFile": "",
        "androidResource": "skin-config/languageFiles/ja.json",
        "iosResource": "ja"
      },
      {
        "language": "ko",
        "languageFile": "",
        "androidResource": "skin-config/languageFiles/ko.json",
        "iosResource": "ko"
      }
    ]
  },
  "languageDirections": {
    "ar": "rtl",
    "dv": "rtl",
    "he": "rtl",
    "fa": "rtl",
    "ks": "rtl",
    "ku": "rtl",
    "pa": "rtl",
    "ps": "rtl",
    "sd": "rtl",
    "tk": "rtl",
    "ug": "rtl",
    "ur": "rtl",
    "yi": "rtl"
  },
  "responsive": {
    "breakpoints": {
      "audio-only-xs": {"id": "audio-only-xs", "name": "oo-xsmall", "multiplier": 0.7},
      "xs": {"id": "xs", "name": "oo-xsmall", "maxWidth": 559, "multiplier": 0.7},
      "sm": {"id": "sm", "name": "oo-small", "minWidth": 560, "maxWidth": 839, "multiplier": 1},
      "md": {"id": "md", "name": "oo-medium", "minWidth": 840, "maxWidth": 1279, "multiplier": 1},
      "lg": {"id": "lg", "name": "oo-large", "minWidth": 1280, "multiplier": 1.2}
    },
    "aspectRatio": "auto"
  },
  "startScreen": {
    "promoImageSize": "default",
    "showPlayButton": true,
    "playButtonPosition": "center",
    "playIconStyle": {
      "color": "white",
      "opacity": 1
    },
    "showTitle": false,
    "showDescription": false,
    "titleFont": {
      "color": "white"
    },
    "descriptionFont": {
      "color": "white"
    },
    "infoPanelPosition": "topLeft",
    "showPromo": false
  },
  "pauseScreen": {
    "showPauseIcon": true,
    "pauseIconPosition": "center",
    "PauseIconStyle": {
      "color": "white",
      "opacity": 1
    },
    "showTitle": false,
    "showDescription": false,
    "infoPanelPosition": "topLeft",
    "screenToShowOnPause": "default"
  },
  "endScreen": {
    "screenToShowOnEnd": "discovery",
    "showReplayButton": true,
    "replayIconStyle": {
      "color": "white",
      "opacity": 1
    },
    "showTitle": false,
    "showDescription": false,
    "infoPanelPosition": "topLeft"
  },
  "adScreen": {
    "showAdMarquee": true,
    "showAdCountDown": true,
    "showControlBar": false
  },
  "discoveryScreen": {
    "panelTitle": {
      "titleFont": {
        "fontFamily": "Roboto Condensed",
        "color": "white"
      }
    },
    "contentTitle": {
      "show": false,
      "font": {
        "fontFamily": "Roboto Condensed",
        "color": "white"
      }
    },
    "showCountDownTimerOnEndScreen": true,
    "countDownTime": 10
  },
  "moreOptionsScreen": {
    "brightOpacity": 1.0,
    "darkOpacity": 0.4,
    "iconSize": 30,
    "color": "white",
    "iconStyle": {
      "active": {
        "color": "#FFFFFF",
        "opacity": 1.0
      },
      "inactive": {
        "color": "#FFFFFF",
        "opacity": 0.95
      }
    }
  },
  "closedCaptionOptions": {
    "enabled": true,
    "language": "en",
    "textColor": "White",
    "windowColor": "Transparent",
    "backgroundColor": "Black",
    "textOpacity": 1,
    "backgroundOpacity": 0.6,
    "windowOpacity": 0,
    "fontType": "Proportional Sans-Serif",
    "fontSize": "Medium",
    "textEnhancement": "Uniform"
  },
  "upNext": {
    "showUpNext": false,
    "timeToShow": 10
  },
  "playbackSpeed": {
    "enabled": true,
    "options": [ 0.5, 0.75, 1, 1.25, 1.5, 2 ]
  },
  "skipControls": {
    "enabled": false,
    "skipBackwardTime": 10,
    "skipForwardTime": 10,
    "buttons": {
      "previousVideo": {
        "enabled": true,
        "index": 1
      },
      "skipBackward": {
        "enabled": true,
        "index": 2
      },
      "skipForward": {
        "enabled": true,
        "index": 3
      },
      "nextVideo": {
        "enabled": true,
        "index": 4
      }
    },
    "controlBarSkipControls": {
      "previousVideo": {
        "enabled": true,
        "index": 1
      },
      "skipBackward": {
        "enabled": true,
        "index": 2
      },
      "playPause": {
        "enabled": true,
        "index": 3
      },
      "skipForward": {
        "enabled": true,
        "index": 4
      },
      "nextVideo": {
        "enabled": true,
        "index": 5
      }
    }
  },
  "controlBar": {
    "enabled": true,
    "volumeControl": {
      "color": ""
    },
    "iconStyle": {
      "active": {
        "color": "#FFFFFF",
        "opacity": 1.0
      },
      "inactive": {
        "color": "#FFFFFF",
        "opacity": 0.95
      }
    },
    "autoHide": true,
    "height": 90,
    "logo": {
      "imageResource": {"url": "","androidResource": "logo","iosResource": "logo"},
      "clickUrl": "http://www.ooyala.com",
      "target": "_blank",
      "width": 96,
      "height": 24
    },
    "adScrubberBar": {
      "backgroundColor": "rgba(175,175,175,1)",
      "bufferedColor": "rgba(127,127,127,1)",
      "playedColor": "rgba(255,63,128,1)",
      "scrubberHandleColor": "rgba(67,137,255,1)",
      "scrubberHandleBorderColor": "rgba(255,255,255,1)"
    },
    "scrubberBar": {
      "backgroundColor": "rgba(175,175,175,0.5)",
      "bufferedColor": "rgba(175,175,175,0.7)",
      "playedColor": "",
      "playHeadColor": "#e17331",
      "scrubberHandleColor": "rgba(67,137,255,1)",
      "scrubberHandleBorderColor": "rgba(255,255,255,1)",
      "thumbnailPreview": true
    },
    "tooltips":{
      "enabled":false
    },
    "qualitySelection":{
      "format": "bitrate"
    }
  },
  "live": {
    "forceDvrDisabled": false
  },
  "isVrAnimationEnabled": {
    "vrNotification": true,
    "vrIcon": false
  },
  "audio": {
    "audioLanguage": "none"
  },
  "animationDurations": {
    "vrNotification": 5,
    "vrIcon": 4
  },
  "buttons": {
    "desktopContent": [
      {"name":"playPause", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45 },
      {"name":"playbackSpeed", "location":"controlBar", "whenDoesNotFit":"drip", "minWidth":45 },
      {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":240 },
      {"name":"timeDuration", "location":"controlBar", "whenDoesNotFit":"drop", "minWidth":145 },
      {"name":"flexibleSpace", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":1 },
      {"name":"closedCaption", "location":"controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":45 },
      {"name":"fullscreen", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45 }
    ],
    "desktopAd": [
      {"name":"playPause", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45 },
      {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":240 },
      {"name":"flexibleSpace", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":1 },
      {"name":"logo", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":125 },
      {"name":"fullscreen", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45 },
      {"name":"moreOptions", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45 }
    ],
    "mobileContent": [
      {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":28 },
      {"name":"live", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":45},
      {"name":"timeDuration", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":60 },
      {"name":"flexibleSpace", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":1 },
      {"name":"chromecast", "location": "controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"airPlay", "location": "controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"discovery", "location":"moreOptions" },
      {"name":"closedCaption", "location":"moreOptions" },
      {"name":"stereoscopic", "location":"controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"audioAndCC", "location": "controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"fullscreen", "location":"controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"moreOptions", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":28 }
    ],
    "mobileAd": [
      {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":28 },
      {"name":"flexibleSpace", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":1 },
      {"name":"fullscreen", "location":"controlBar", "whenDoesNotFit":"moveToMoreOptions", "minWidth":28 },
      {"name":"moreOptions", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":28 }
    ],
    "audioOnly": {
      "desktop": [
        {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":200 },
        {"name":"skipControls", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":200 },
        {"name":"moreOptions", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":50 },
        {"name":"playbackSpeed", "location":"moreOptions" }
      ],
      "mobile": [
        {"name":"volume", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":60 },
        {"name":"seekBackwards", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":60 },
        {"name":"playPause", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":60 },
        {"name":"seekForward", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":60 },
        {"name":"moreOptions", "location":"controlBar", "whenDoesNotFit":"keep", "minWidth":50 },
        {"name":"playbackSpeed", "location":"moreOptions" }
      ]
    }
  },
  "icons": {
    "play": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u003e", "fontStyleClass": "oo-icon oo-icon-play-slick"},
    "pause": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0067", "fontStyleClass": "oo-icon oo-icon-pause-slick"},
    "volume": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0062", "fontStyleClass": "oo-icon oo-icon-volume-on-ooyala-default"},
    "volumeOff": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0070", "fontStyleClass": "oo-icon oo-icon-volume-mute-ooyala-default"},
    "expand": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0069", "fontStyleClass": "oo-icon oo-icon-system-fullscreen"},
    "compress": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006a", "fontStyleClass": "oo-icon oo-icon-system-minimizescreen"},
    "ellipsis": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0066", "fontStyleClass": "oo-icon oo-icon-system-menu"},
    "replay": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0063", "fontStyleClass": "oo-icon oo-icon-system-replay"},
    "next": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0044", "fontStyleClass": "oo-icon oo-icon-next"},
    "previous": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u003c", "fontStyleClass": "oo-icon oo-icon-previous"},
    "forward": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0028", "fontStyleClass": "oo-icon oo-icon-forward"},
    "share": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006f", "fontStyleClass": "oo-icon oo-icon-share"},
    "cc": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006B", "fontStyleClass": "oo-icon oo-icon-cc"},
    "stereoscopic": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0057", "fontStyleClass": "oo-icon"},
    "discovery": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006C", "fontStyleClass": "oo-icon oo-icon-discovery-binoculars"},
    "quality": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006D", "fontStyleClass": "oo-icon oo-icon-bitrate"},
    "setting": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u006E", "fontStyleClass": "oo-icon oo-icon-system-settings"},
    "dismiss": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0065", "fontStyleClass": "oo-icon oo-icon-system-close"},
    "toggleOn": {"fontFamilyName": "fontawesome", "fontString": "\uf205", "fontStyleClass": ""},
    "toggleOff": {"fontFamilyName": "fontawesome", "fontString": "\uf204", "fontStyleClass": ""},
    "left": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0072", "fontStyleClass": "oo-icon oo-icon-system-left-arrow"},
    "right": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0073", "fontStyleClass": "oo-icon oo-icon-system-right-arrow"},
    "learn": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0074", "fontStyleClass": "oo-icon oo-icon-system-more-information"},
    "skip": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0075", "fontStyleClass": "oo-icon oo-icon-skip-slick"},
    "warning": {"fontFamilyName": "fontawesome", "fontString": "\uf06a", "fontStyleClass": ""},
    "auto": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0064", "fontStyleClass": "oo-icon oo-icon-system-auto"},
    "arrowsBlack": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0052", "fontStyleClass": "oo-icon"},
    "arrowsWhite": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0052", "fontStyleClass": "oo-icon"},
    "circleArrowsBlack": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u005D", "fontStyleClass": "oo-icon"},
    "circleArrowsWhite": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u005D", "fontStyleClass": "oo-icon"},
    "stereoOn": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0057", "fontStyleClass": "oo-icon oo-icon-system-auto"},
    "stereoOff": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0057", "fontStyleClass": "oo-icon oo-icon-system-auto"},
    "vrIcon": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0059", "fontStyleClass": "oo-icon"},
    "audioAndCC": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u005F", "fontStyleClass": "oo-icon oo-icon-audio-and-cc"},
    "selected": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u0040", "fontStyleClass": "oo-icon oo-icon-selected"},
    "chromecast-connected": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u003B", "fontStyleClass": "oo-icon"},
    "chromecast-disconnected": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u003A", "fontStyleClass": "oo-icon"},
    "airPlay-connected": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u007C", "fontStyleClass": "oo-icon"},
    "airPlay-disconnected": {"fontFamilyName": "ooyala-slick-type", "fontString": "\u007B", "fontStyleClass": "oo-icon"}
  }
}
