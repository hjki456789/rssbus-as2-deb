// == RSSBus table for all app
var RSBTable = function($tabid, $args) {
  var _self = this;
  this.tabid = $tabid;
  this.tabname = "_" + $tabid.replace("-", "_");
  this.tab = $("#" + $tabid);
  this.tabhead = $("#" + $tabid + "-head");
  this.tabbody = $("#" + $tabid + "-body");
  this.tabpaging = $("#" + $tabid + "-paging");
  this.tabpagenav = $("#" + $tabid + "-pagenav");
  this.tabloading = $("#" + $tabid + "-loading");
  this.args = $args;
  this.bodyurl = '../shared/templates/table/tablebody.rst';

  // Init
  this.init = function() {
    var checker = setInterval(function() {
      if(_self.tab.is(":visible")) {
        clearInterval(checker);
        _self.refresh();
      }
    }, 500);
  };
  
  // Refresh
  this.refresh = function() {
    this.tab.trigger("RSBTableRefresh"); // Custom RSBTableRefresh event
    this.tabloading.removeClass("hide");
    $.ajax({
      async: true,
      type: "POST",
      url:this.bodyurl,
      data:this.args
    }).success(function(data) {
      if(data && typeof(data) == "string") {
        $(window).resize(function() {
          checkCells();
        });
        _self.tabbody.html(data);
        
        initRows();
      } else
        _self.tabbody.html("");
    }).error(function(xhr) {
      _self.tab.parent().html(xhr.responseText);
    }).complete(function(xhr) {
      _self.tabloading.addClass("hide");
      var count = xhr.getResponseHeader("count");
      if(count)
        pagesNav(count);
        
      _self.tab.trigger("RSBTableRefreshed"); // Custom RSBTableRefreshed event
    });
  };
  
  var initRows = function() {
    _self.tabhead.find("input[type='checkbox']").unbind("click").bind("click", function(e) {
      e.stopPropagation();
      toggleChks(e.target);
    });
    
    _self.tabbody.find("tr").die("click").live("click", function() {
      if(!$(this).hasClass("full") && !$(this).hasClass("wraptext"))
        $(this).toggleClass("expand");
    });
    
    _self.tabbody.find("input[type='checkbox']").die("click").live("click", function(e) {
      e.stopPropagation();
      checkChks(e.target);
    });
    
    _self.tabbody.find("td.deleteRow").die("click").live("click", function(e) {
      e.stopPropagation();
      _self.deleteRowEvent(e.target);
    });
    
    _self.tabbody.find("tr").die("mouseenter mouseleave").live("mouseenter", function(e) {
      var obj = $(e.target);
      while(!obj.is("tr"))
        obj = obj.parent();
      obj = obj.find(".deleteRow div");
      obj.stop(true, true).fadeIn(220);
    }).live("mouseleave", function(e) {
      var obj = $(e.target);
      while(!obj.is("tr"))
        obj = obj.parent();
      obj = obj.find(".deleteRow div");
      obj.stop(true, true).fadeOut(260);
    });
    
    checkCells();
    checkChks();
  };
  
  var toggleChks = function(target) {
    var obj = $(target);
    var id = obj.attr("id");
    var chks = _self.tabbody.find("input[type='checkbox']");
    if(obj.is(":checked"))
      chks.attr("checked", "checked");
    else
      chks.removeAttr("checked");
  };
  
  var checkChks = function(target) {
    var ids = new Array();
    if(target) {
      var obj = $(target);
      var classes = obj.attr('class').split(" ");
      for(var i = 0; i < classes.length; i++) {
        if(classes[i].indexOf("chk-") == 0) {
          ids.push(classes[i]);
          break;
        }
      }
    } else {
      var chks = _self.tabhead.find("input[type='checkbox']");
      for(var i = 0; i < chks.length; i++) {
        ids.push($(chks[i]).attr('id'));
      }
    }

    for(var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var chks = _self.tabbody.find("." + id);
      var chksSelected = _self.tabbody.find("." + id + ":checked");
      if(chks.length == chksSelected.length) {
        $("#" + id).attr("checked", "checked");
      } else {
        $("#" + id).removeAttr("checked");
      }
    }
  };
  
  var checkCells = function() {
    var rows = _self.tabbody.children("tr");
    rows.each(function() {
      var row = $(this);
      row.addClass("full");
      var cells = row.children("td");
      cells.each(function() {
        var cellWidth = $(this).width();
        var contentWidth = $($(this).children("span")[0]).width();
        if(cellWidth <= contentWidth && !row.hasClass("wraptext")) {
          row.removeClass("full");
          if($.browser.msie) // For IE
            $(this).css("text-overflow", "ellipsis");
          else
            return false;
        }
      });
    });
  };
  
  var pagesNav = function($count) {
    var count = $count;
    var pagingSize = _self.args.pagesize;
    var currentPage = _self.args.startindex / pagingSize + 1;
    var pagingCount = parseInt(count / pagingSize) + (count % pagingSize > 0 ? 1 : 0)
    
    var pagingSelect = "";
    if(currentPage > 1)
      pagingSelect += "<a href='javascript:void(0);' onclick='" + _self.tabname + ".page(" + (currentPage - 1) + ");'>&lt;</a>"; 
  
    var pageColoum = 10;
    if(pagingCount >= pageColoum) {
      for(var i = 1; i <= pagingCount; i++) {
        var pageTemp = "<a href='javascript:void(0);' onclick='" + _self.tabname + ".page(" + i + ");'>" + i + "</a>";
        
        if(currentPage < 4) {
          if(i < 5) {
            if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='page-selected'>" + i + "</a>";
            else pagingSelect += pageTemp;
          } else if(i == pagingCount) pagingSelect += pageTemp;
          else if(i == 5) pagingSelect += "<a href='javascript:void(0);'>...</a>";
        } else if(currentPage > (pagingCount - 3)) {
          if(i > (pagingCount - 4)) {
            if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='page-selected'>" + i + "</a>";
            else pagingSelect += pageTemp;
          } else if(i == 1) pagingSelect += pageTemp;
          else if(i == (pagingCount - 4)) pagingSelect += "<a href='javascript:void(0);'>...</a>";
        } else {
          if(i == 1 || i == pagingCount || i == (currentPage - 1) || i == (currentPage + 1)) {
            pagingSelect += pageTemp;
          } else if(i == 2 || i == (pagingCount - 1)) pagingSelect += "<a href='javascript:void(0);'>...</a>";
          else if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='page-selected'>" + i + "</a>";
        }
      }
    } else if(pagingCount > 1) {
      for(var i = 1; i <= pagingCount; i++) {
        if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='page-selected'>" + i + "</a>";
        else pagingSelect += "<a href='javascript:void(0);' onclick='" + _self.tabname + ".page(" + i + ");'>" + i + "</a>"; 
      }
    }
    
    if(currentPage < pagingCount)
      pagingSelect += "<a href='javascript:void(0);' onclick='" + _self.tabname + ".page(" + (currentPage + 1) + ");'>&gt;</a>"; 
    
    _self.tabpagenav.html(pagingSelect);
  };
  
  // Sort
  this.sort = function($sortname, $target) {
    if(this.args.sort == $sortname) {
      this.args.desc = this.args.desc == 'true' ? 'false' : 'true';
    } else {
      this.args.sort = $sortname
    }
    this.refresh();
    this.tab.find("th span").removeClass("asc").removeClass("desc");
    $($target).find("span").addClass(this.args.desc == 'true' ? 'desc' : 'asc');
  };
  
  // Paging
  this.paging = function($pagesize, $target) {
    this.args.pagesize = $pagesize;
    this.args.startindex = 0;
    this.refresh();
    this.tabpaging.find("a").removeClass("paging-selected");
    $($target).addClass("paging-selected");
  };
  
  // Filter
  this.filter = function($target) {
    var select = $($target).children(":selected");
    if(select.val() != this.args.filter) {
      this.args.filter = select.val();
      this.args.startindex = 0;
      this.refresh();
    }
  };
  
  // Change page
  this.page = function($page) {
    this.args.startindex = ($page - 1) * this.args.pagesize
    this.refresh();
  };
  
  // Add row
  this.addRow = function($row) {
    if($.trim(_self.tabbody.html()) == "") {
      this.tabbody.append($row);
      initRows();
    } else 
      this.tabbody.append($row);
    
    this.tab.trigger("RSBTableAddRow"); // Custom RSBTableAddRow event
  };
  
  // Add row event
  this.addRowEvent = function($row) {
    this.addRow($row);
  };
  
  // Delete row 
  this.deleteRow = function($target) {
    var row = $($target).parent().parent();
    if(!row.is("tr"))
      row = row.parent();
      
    if(row.is("tr"))
      row.remove();
    
    this.tab.trigger("RSBTableDeleteRow"); // Custom RSBTableDeleteRow event
  };
  
  // Delete row event
  this.deleteRowEvent = function($target) {
    this.deleteRow($target);
  };
};
