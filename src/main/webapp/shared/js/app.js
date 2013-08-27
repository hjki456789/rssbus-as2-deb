var _appname = "appserver";
var _isdebug = false;

// == RSSBus contructor for all app
var RSSBus = function($appname, $debug) {
  var _self = this; // Copy self from *this*
  this.appname = $appname;
  this.DEBUG = $debug;
  
  // >>> Open RSSBus Methods
  this.run = {
    init: function($args) { // Init for all
      _self.log(_self.logType.INFO, "run.init", "IN");
      
      
      _self.log(_self.logType.INFO, "run.init", "OUT");
    },
    showServiceIntro: function($args) {
      _self.log(_self.logType.INFO, "run.showServiceIntro", "IN");
      _self.clearSelection();
      _self.showContent("servicesIntro");
      _self.log(_self.logType.INFO, "run.showServiceIntro", "OUT");
    },
    showEventIntro: function($args) {
      _self.log(_self.logType.INFO, "run.showEventIntro", "IN");
      _self.clearSelection();
      _self.showContent("eventsIntro");
      _self.log(_self.logType.INFO, "run.showEventIntro", "OUT");
    },
    showServicesToggle: function($list, $target) { // Toggle left services & events list
      _self.log(_self.logType.INFO, "run.showServicesToggle", "IN");
      var list = $("#" + $list);
      if(list.hasClass("hide")) {
        list.removeClass("hide");
        $($target).children(".ui-icon").css("background-position","-64px -16px");
      } else {
        list.addClass("hide");
        $($target).children(".ui-icon").css("background-position","-30px -16px");
      }
      _self.log(_self.logType.INFO, "run.showServicesToggle", "OUT");
    },
    showServiceInfo: function($args) {
      _self.log(_self.logType.INFO, "run.showServiceInfo", "IN");
      
      _self.showContent("serviceInfo");
      _self.log(_self.logType.INFO, "run.showServiceInfo", "OUT");
    },
    showEventInfo: function($args) {
      _self.log(_self.logType.INFO, "run.showEventInfo", "IN");
      
      _self.showContent("eventInfo");
      _self.log(_self.logType.INFO, "run.showEventInfo", "OUT");
    },
    addInput: function($args) {
      _self.log(_self.logType.INFO, "run.addInput", "IN");
      var para = $($args.elem).parent().parent().parent().clone();
      var paras = $("#svcRequired tbody span[name='" + $args.sname + "']");
      if(paras.length > 0 && $args.multipleName == "") {
        _self.log(_self.logType.INFO, "run.addInput", "Parameter already exist.");
        return false;
      }
      
      if($args.multipleName == "*") {
        var sname = para.find("[name='" + $args.sname + "']");
        popupWindow("#addMapInput");
        $(window).unbind("addNewAttrName").bind("addNewAttrName", function($event, $newName){ // Bind 'addNewAttrName' Event
          _self.log(_self.logType.INFO, "Event - addNewAttrName", "IN");
          var newName = $args.sname + $newName;
          sname.attr("name", newName);
          for(var i = 0; i < sname.length; i++) {
            if(sname[i].nodeName.toLowerCase() == "span")
              $(sname[i]).text(newName);
          }
          $("#svcRequired tbody").append(para);
          _self.log(_self.logType.INFO, "Event - addNewAttrName", "OUT");
        });
      } else $("#svcRequired tbody").append(para);
      _self.log(_self.logType.INFO, "run.addInput", "OUT");
    },
    addNewAttrName: function($attrName) {
      _self.log(_self.logType.INFO, "run.addNewAttrName", "IN");
      $(window).trigger("addNewAttrName", $("#" + $attrName).val()); // Trigger 'addNewAttrName' Event
      $("#" + $attrName).val('');
      closeWindow("addMapInput");
      _self.log(_self.logType.INFO, "run.addNewAttrName", "OUT");
    },
    removeInput: function($args) {
      _self.log(_self.logType.INFO, "run.removeInput", "IN");
      $($args.elem).parent().parent().remove();
      _self.log(_self.logType.INFO, "run.removeInput", "OUT");
    },
    deleteAllowedUser: function($user, $script) {
      _self.log(_self.logType.INFO, "run.deleteAllowedUser", "IN");
      $.post("../shared/priv/admin/deleteAccess.rsb", {"script": $script, "username": $user, "@json" : "", "@fmtoptions": "exparen"}, 
        function() {
          location.reload();
        }
      );
      _self.log(_self.logType.INFO, "run.deleteAllowedUser", "OUT");
    },
    addAllowedUser: function($user, $script, $dialogMsg) {
      _self.log(_self.logType.INFO, "run.addAllowedUser", "IN");
      if (confirm($dialogMsg)) {
        $.post("../shared/priv/admin/addAccess.rsb", {"script": $script, "username": $user, "@json" : "", "@fmtoptions": "exparen"},
          function($data) {
            if (!$data.items || $data.items.length == 0 || !$data.items[0]["rsb:ecode"])
              location.reload();
          }
        );
      }
      _self.log(_self.logType.INFO, "run.addAllowedUser", "OUT");
    },
    runSvc: function($istest, $type) {
      _self.log(_self.logType.INFO, "run.runSvc", "IN");
      if($istest) {
        $('#hiddenInputs').append($('#svcType'));
        $('#svcForm').append($('#svcPath')).append($('#svcName')).append($('#svcAppName')).attr('action', '../shared/view/testsvc.rst?ts=' + Math.random()).submit();
      } else {
        $('#hiddenInputs').append($('#svcPath')).append($('#svcName'));
        $('#svcType').attr('name', $type);
        $('#svcForm').append($('#svcType')).attr('action', $('#svcLink').val() + '?ts=' + Math.random()).submit();
      }
      _self.log(_self.logType.INFO, "run.runSvc", "OUT");
    }
  };
  // <<< Open RSSBus Methods
  
  // >>> Public Methods
  this.showContent = function($content) {
    _self.log(_self.logType.INFO, "showContent:" + $content, "IN");
    $("div.wrap-content").not("#" + $content).hide();
    $("#" + $content).show();
    _self.log(_self.logType.INFO, "showContent:" + $content, "OUT");
  };
  
  this.clearSelection = function() {
    _self.log(_self.logType.INFO, "clearSelection", "IN");
    $(".selectedItem").removeClass("selectedItem");
    _self.log(_self.logType.INFO, "clearSelection", "OUT");
  };
  // <<< Public Methods
  
  // >>> Private Methods
  // <<< Private Methods
  
  // >>> Debug Console (Use for browser debug console. For example: Firebug)
  this.logType = {INFO: 0, ERROR: 1, WARN: 2};
  this.log = function($logType, $method, $msg) {
    if(this.DEBUG && typeof(console) != 'undefined') {
      switch($logType) {
        case 0:
          console.info($method + ":" + $msg); break;
        case 1:
          console.error($method + ":" + $msg); break;
        case 2:
          console.warn($method + ":" + $msg); break;
      }
    }
  };
  // <<< Debug Console
};

//Bubble Tips
function preloadImage(imageUrl) {
  try {
    $('<img/>')[0].src = imageUrl;
  } catch (err) {
    console.log(err);
  }
}

var rsb = new RSSBus(_appname, _isdebug); //New RSSBus object for all
var rsbcall = rsb.run; // Wrap open methods

//Bubble Tips
$(function() {
  $(".formlabel").parent().addClass("formLabelWrapper");
  
  /* preload hidden background images */
  $(':hidden').each(function() {
    var backgroundImage = $(this).css("background-image");
    if (backgroundImage != 'none') {
      var imgUrl = backgroundImage.replace(/"/g,"").replace(/url\(|\)$/ig, "");
      preloadImage(imgUrl);
    }
  });
  
  initializeBubbleKit();
  
  if ($.livequery) {
    $(".bubble").livequery(function() {
      instantiateBubbles(this);
    });
  } else {
    $(".bubble").each(function() {
      instantiateBubbles(this);
    });
  }
});

function initializeBubbleKit() {
  var distance = 10;
  var time = 250;

  var allBubbles = [];
  
  $.fn.displayBubble = function() {
    if (!this.hasClass("bubble"))
      return;

    var bubble = this;
    bubble.hoverTarget = $(this).siblings(".bubbleHoverTarget");
    
    bubble.show();
    this.offset({
        top: bubble.hoverTarget.offset().top - this.height() + 20,
        left: bubble.hoverTarget.offset().left - (bubble.find(".topleft").width() + bubble.find(".bottom img").width())/2
      });
      
    if ( $.browser.msie && $.browser.version == "7.0" )
      this.animate({
        top: '-=' + distance + 'px'
      }, time, 'linear');
    else 
      this.animate({
        top: '-=' + distance + 'px', 
        opacity: 1
      }, time, 'linear');
    
    allBubbles.push(bubble);
    
    return this;
  }
  
  $.fn.dismissBubble = function() {
    allBubbles.pop(this);
    
    if ( $.browser.msie && $.browser.version == "7.0" )
      this.animate({ 
        top: '-=' + distance + 'px'
      }, time, 'linear', function() { $(this).hide() } );
    else
      this.animate({ 
        top: '-=' + distance + 'px', 
        opacity: 0 
      }, time, 'linear').hide(time);
      
    return this;
  }
  
  $.dismissAllBubbles = function() {
    for(bubble in allBubbles)
      allBubbles[bubble].dismissBubble();
  }
}

function instantiateBubbles(bubbleElement) {
  var bubble = $(bubbleElement);
  var triggers = $.merge($(bubbleElement).parent(), $(bubbleElement).siblings());

  if ( $.browser.msie && $.browser.version == "7.0" )  
    if ($.trim($(bubbleElement).text()).length > 100)
      $(bubbleElement).width(400);

  bubble.hasFirstResponder = function() {
    return (bubble.data("firstResponder") != null);
  }
  
  triggers.isMouseReentering = function() {
    return (bubble.data("mouseleaveTimeout") != null);
  }
  
  triggers.mouseenter(function() {
    if (triggers.isMouseReentering()) {
      clearTimeout( bubble.data("mouseleaveTimeout") );
      bubble.removeData("mouseleaveTimeout");
    }
    
    if (bubble.hasFirstResponder())
      return;
      
    bubble.data("firstResponder", this);
    bubble.data("mouseenterTimeout", setTimeout(
      function() { 
        $.dismissAllBubbles();
        bubble.displayBubble(); 
        bubble.removeData("mouseenterTimeout");
      }, 500)
    );
  
  });
  
  $(bubbleElement).parent().mouseleave(function(){
    if (bubble.data("mouseenterTimeout") != null) {
      clearTimeout( bubble.data("mouseenterTimeout") );
      bubble.removeData("mouseenterTimeout");
      bubble.removeData("firstResponder");
    }
    
    bubble.data("mouseleaveTimeout", setTimeout(
      function() {
        bubble.removeData("firstResponder");
        bubble.dismissBubble(); 
        bubble.removeData("mouseleaveTimeout");
      }, 500)
    );
  });
}

// = popup window ===============================
function popupWindow(pwindow) {
  var sTop = $(document).scrollTop();
  var wHeight = $(window).height();
  var wrapHeight = $('#wrapper').height();
  
  var offsetTop = sTop + wHeight/2;
  var maxTop = - parseInt($(pwindow).css("margin-top"));
  offsetTop = offsetTop < maxTop ? maxTop : offsetTop;
  $('#darkNight').css('height', wrapHeight + 'px').show(50);
  $(pwindow).css('top', offsetTop + 'px').show(50);  
}

