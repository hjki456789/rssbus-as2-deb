var receivedItems = [];
var sentItems = [];

var showTips = false;
var uncheckUnsave = false;

var settings = [];
var advanced = [];
var inSetting = false;
var inAdvanced = false;
var removeRowCount = 0;

// = String Tools ======== 
String.prototype.trim = function(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}

// = Update Tab ========
function updateTab() {
  if(location.hash && location.hash.length > 0) {
    var tab = location.hash.substring(1);
    
    var goOn = true;
    if(inSetting && tab != "settings") goOn = checkUnsave("settings");
    else if(inAdvanced && tab != "advanced") goOn = checkUnsave("advanced");

    if(goOn) {
      inSetting = false;
      inAdvanced = false;
      
      switchTab(tab);
      
      var hashT = $("input[name='urlHash']:not(#fmPartners-new *)")
      for(var i = 0; i < hashT.length; i++) {
        $(hashT[i]).val(location.hash);
      }
    }
  } else if(typeof(tabs) != 'undefined' && tabs.length > 0) {
    location.hash = "#" + tabs[0];
  }
}

// = Save Inputs ================
function saveInputs(page) {
  var inputs = $("#p" + page + " input");
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "radio" && !inputs[i].checked)
      continue;
    
    var flag = inputs[i].value;
    if(inputs[i].type == "checkbox") flag = inputs[i].checked;
    else if(inputs[i].type == "radio") flag = inputs[i].id;
    
    if(page == "settings") settings[inputs[i].name] = flag;
    else advanced[inputs[i].name] = flag;
  }
  
  var selects = $("#p" + page + " select");
  for(var i = 0; i < selects.length; i++) {
    if(page == "settings") settings[selects[i].name] = selects[i].value;
    else advanced[selects[i].name] = selects[i].value;
  }
  
  var textareas = $("#p" + page + " textarea");
  for(var i = 0; i < textareas.length; i++) {
    if(page == "settings") settings[textareas[i].name] = textareas[i].value;
    else advanced[textareas[i].name] = textareas[i].value;
  }
}

// = Check Unsave =========================
function checkUnsave(page, withoutConfirm, checkRadio){
  if(uncheckUnsave) return true;
  var nochange = 0;
  
  var inputs = $("#p" + page + " input");
  inputs.unbind("change").unbind("click").removeClass("unsave");
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "radio" && !inputs[i].checked) {
      if(!checkRadio) $(inputs[i]).bind("click", function(){checkUnsave(page, true, true);});
      continue;
    }
    
    var flag = inputs[i].value;
    if(inputs[i].type == "checkbox") flag = inputs[i].checked;
    else if(inputs[i].type == "radio") flag = inputs[i].id;
  
    var value = page == "advanced" ? advanced[inputs[i].name] : settings[inputs[i].name];
    
    if(value != flag) {
      nochange++;
      $(inputs[i]).addClass("unsave");
    }
  }
  
  var selects = $("#p" + page + " select");
  selects.unbind("change").unbind("click").removeClass("unsave");
  for(var i = 0; i < selects.length; i++) {
    var value = page == "advanced" ? advanced[selects[i].name] : settings[selects[i].name];
    
    if(value != selects[i].value) {
      nochange++;
      $(selects[i]).addClass("unsave");
    }
  }
  
  var textareas = $("#p" + page + " textarea");
  textareas.unbind("change").unbind("click").removeClass("unsave");
  for(var i = 0; i < textareas.length; i++) {
    var value = page == "advanced" ? advanced[textareas[i].name] : settings[textareas[i].name];
    
    if(value != textareas[i].value) {
      nochange++;
      $(textareas[i]).addClass("unsave");
    }
  }
  
  if(nochange > 0 || removeRowCount > 0) {
    var leave = !withoutConfirm ? confirm(lang("changeUnsaved", nochange + removeRowCount, new Array("" + (nochange + removeRowCount)))) : false;
    
    $(".unsave").bind("change", function(){checkUnsave(page, true)}).bind("click", function(){checkUnsave(page, true)});
    
    if(leave) return true;
    else {
      location.hash = "#" + page;
      return false;
    }
  } else {
    inputs.unbind("click");//For input radio.
    return true;
  }
}

// = Switch Tab ============================
function switchTab(tab){
  var selectedTab = $("#tabs-" + tab);
  
  if((typeof(tabs) != "undefined") && (tabs.length == tabContent.length)) {
    var findTab = false;
    for (var i = 0;i < tabs.length; i++) {
      if(tabs[i] == tab) {
        findTab = true;
        selectedTab.addClass("ui-tabs-selected ui-state-active");
        
        var selectedContent = $("#" + tabContent[i]);
        if (selectedContent.css("display") == "none") {
          selectedContent.show();
        } 
      } else {
        $("#tabs-" + tabs[i]).removeClass("ui-tabs-selected ui-state-active");
        
        $("#" + tabContent[i]).hide();
      }
    }
     
    if(!findTab) {
      location.hash = "#" + tabs[0];
    } else {
      if(tab == "incoming") refreshLogsTable("in-cb");
      else if(tab == "outgoing") refreshLogsTable("out-cb");
      else if(tab == "settings") inSetting = true;
      else if(tab == "advanced") inAdvanced = true;
    }
  }
}

// = add/remove table row ============================
function addRow(tbId, rowTemplate){
  var inputs = $("#" + tbId + " input");
  //i = 2, ignore the template inputs
  for(var i = 2; i < inputs.length; i++) {
    var input = $(inputs[i]);
    input.attr('name', input.attr('name').replace(/#[0-9]*/, "#" + Math.floor(i/2)));
  }
  
  var rowCount = $("#" + tbId + " tr").length - 1;
  var tmp = $("#" + rowTemplate).clone();
  tmp.attr("id", "row" + rowCount);
  var tinputs = tmp.find("input");
  for(var i = 0; i < tinputs.length; i++)
    $(tinputs[i]).attr("name", tinputs[i].name + rowCount);
  tmp.appendTo("#" + tbId).fadeIn();

  removeRowCount--;
  $("#" + tbId).find(".noRowTip").hide();
}

function removeRow(row){
  removeRowCount++;
  row.parent().parent().remove();
}

// = show up cert manager ===========================
function showCert(certfile, isPaid) {
  if(isPaid) return false;

  $('#certfile_id').val(certfile);
  
  popupWindow('#addCertificate');
}

// = show cert creater =========================
function showCreateCert(privCert, privPwd, pubCert, isPaid) {
  if(isPaid) return false;
  
  $('#createcert-priv').val(privCert);
  $('#createcert-priv-pwd').val(privPwd);
  $('#createcert-pub').val(pubCert);
  
  popupWindow('#createCertificate');
}

// = Toggle showTips =========================
function toggleShowTips() {
  if(showTips) {
    showTips = false;
    $(".saveT .hideTips").css("display", "none");
    $(".saveT .showTips").css("display", "inline-block");
  } else {
    showTips = true;
    $(".saveT .hideTips").css("display", "inline-block");
    $(".saveT .showTips").css("display", "none");
  }
  
  $(".descInfo").slideToggle("slow", function(){
    if(!showTips) 
      $(".descInfo").css("display", "none");
  });
}

// = Toggle log table ============================
function toggleLogTable(mainId, url, target, event) {
  var e = window.event || event;
  var o = e.srcElement || e.target;

  var tag = o.tagName.toLowerCase()
  if(tag != 'a' && tag != 'input') {
    var tr = $(target).next(".tlog");
    if(tr.css('display') == 'none') {
      tr.show(30);
      $(target).addClass('fileShow'); 
      $(target).children('td').eq(1).addClass('firstShow');
      var refreshUrl = url + "&" + Math.random();//Random for ignoring IE cache.
      $.get(refreshUrl, function(data) {
        if ($("#loginform", data).length > 0) {
          top.location.href="../shared/login.rst";//redirection
        } else {
          var table = tr.find("." + mainId + '-logtable');
          table.html(data);   
        }
      });
    } else {
      tr.hide(30); 
      $(target).removeClass('fileShow'); 
      $(target).children('td').eq(1).removeClass('firstShow');
    }
  }
}

//Files upload ============================
function showUploadFiles(orgname) {
 $('#orgname_id').val(orgname);
  
  popupWindow('#uploadFiles');
}

function addfileUpload() {
  var filesCount = $("#testfile table tr").length;
  if(filesCount == 9) 
    $("#testfile .addfileupload").addClass("hide");

  var fileupload = '<tr><td /><td><input type="file" size="12" name="testfile"/><a href="javascript:void(0);" onclick="javascript:return removefileUpload(this);">[-]</a></td></tr>';
  $("#testfile table").append(fileupload);
}

function removefileUpload(target) {
  $(target).parent().parent().remove();
  $("#testfile .addfileupload").removeClass("hide");
}

function filesUpload() {
  var orgname = $("#orgname_id").val();
  var uploadimg = $("#uploadFiles .save img");
  uploadimg.removeClass("hide");

  $.ajaxFileUpload({
    url:'uploadFiles.rst?orgname=' + orgname,
    secureuri:false,
    fileContainerId:'testfile',
    dataType: 'undefined',
    success: function (data, status)
    {
      uploadimg.addClass("hide");
      $('#darkNight').hide();
      $('#uploadFiles').hide();
      $("#testfile input[type=file]").val("");

      refreshLogsTable('out-cb');
    },
    error: function (data, status, e)
    {
      uploadimg.addClass("hide");
      alert(e);
    }
  });

  return false;
}

//Partner type chooser =========================
function partnerChooser() {
  $("#fmPartners-new")[0]["partnerType"].value = $("#partnertype")[0].value;
  $('#fmPartners-new').submit();
}

//Cert file upload =============================
function certUpload() {
  var certFile = $('#certfile').val();
  if(certFile == "") {
    alert(lang("certificateSpecified"));
    return false;
  }
  
  var pos = certFile.lastIndexOf("/");
  if (pos == -1) pos = certFile.lastIndexOf("\\");
  certFile = certFile.substr(pos +1);
  var filename = certFile;
  if (checkCertExist(certFile)) {
    exfilename = certFile;
    while (true) {
      filename = prompt("A certificate file with the same name (" + filename + ") already exists, please input a new name for this file. \r\nNOTE: If you want to overwrite the existing certificate, please do not change the file name below.", filename);
      if (filename.trim() == "") {
        filename=exfilename;
        alert("File name cannot be empty.");
        continue;
      }
      if (filename == null) return false;
      // if new file name equals with exfilename, we will overwrite the existed cert file.
      if (filename == exfilename || !checkCertExist(filename)) break;
      exfilename=filename;
    }
  }
  
  $.ajaxFileUpload({
    url:'uploadCert.rst',
    secureuri: false,
    fileElementId:'certfile',
    dataType: 'undefined',
    data: { 'filename': filename },
    success: function (data, status)
    {
      if (data.trim() == filename) {
        if($('#certfile_id').val() != "") $($('#certfile_id').val()).val(data.trim());
      }
      else { 
        alert("Error: " + data.trim());
      }
      $('#darkNight').hide();
      $('#addCertificate').hide();
    },
    error: function (data, status, e)
    {
      alert(e);
    }
  });
  return false;
}

function checkCertExist(certFile) {
  var url = "priv/checkCertExsit.rsb?certfile=" + certFile + "&@json";
  var result = $.ajax({ 
    url: url,
    async: false
  }).responseText;
  if (eval(result).items[0]["result"] == "true") return true;
  else                                           return false;
}

//Cert file create =============================
function certCreate(mainId) {
  var priv = $($("#" + mainId + "-priv").val());
  var pwd = $($("#" + mainId + "-priv-pwd").val());
  var pub = $($("#" + mainId + "-pub").val());
  var url = $("#" + mainId + "-url").val() + "?" + Math.random();//Random for ignoring IE cache.;
  
  var inputs = $("#" + mainId + " .infoInput");
  
  var ps = {};
  for(var i = 0; i < inputs.length; i++) {
    var input = $(inputs[i]);
    
    if(input.val() != '')
      ps[input.attr("name")] = input.val();
  }
  
  var result = $.ajax({ 
      url: url, 
      async: false,
      data: ps
    }).responseText;
  
  if(result.indexOf("<fa:error>") > 0) {
    var errorMsg = result.substring(result.indexOf("<fa:error>") + 10, result.indexOf("</fa:error>"));
    if(errorMsg.indexOf("Could not acquire CSP") >= 0) {
      $('#createCertificate').hide(50);
      popupWindow("#cspTip");
    } else alert(errorMsg);
  } else {
    alert(lang("certCreateSuccessful"));
    
    pwd.val(ps["password"]);
    priv.val(ps["filename"]);
    pub.val(ps["filename"].slice(0, -4) + ".cer");
    
    $('#darkNight').hide();
    $('#createCertificate').hide();
  }
  
  return false;
}

//Exchange cert =============================
function certExchange(mainId) {
  var url = $("#" + mainId + "-url").val() + "?" + Math.random();//Random for ignoring IE cache.;
  
  var inputs = $("#" + mainId + " .certInput");
  
  var ps = {};
  for(var i = 0; i < inputs.length; i++) {
    var input = $(inputs[i]);
    
    if(input.val() != '')
      ps[input.attr("name")] = input.val();
  }
  
  $.ajax({
      url: url,
      async: true,
      data: ps
    }).responseText;
  
  $('#darkNight').hide();
  $("#" + mainId).hide();
  refreshLogsTable('out-cb');
  
  return false;
}

//Log Checkbox Tool ====================================
function toggleAllLogs(mainId) {
  if($("#" + mainId).prop("checked")) {
    $("." + mainId).prop("checked", "checked");
    lightButtons(mainId);
  } else {
    $("." + mainId + ":checked").prop("checked", "");
    lightButtons(mainId);
  }
}

// Delete Selected Logs
function deleteSelectedLogs(mainId) {
  var queueUrl = new Array();
  var queueFilename = new Array();
  var slCount = $("." + mainId + ":checked").length;

  $(window).bind("deletelogs", function(){
    refreshLogsTable(mainId);
    $(window).unbind("deletelogs");
    $('#darkNight').hide(50);
    $('#actionStatus').hide(50);
  });
  
  $(window).bind("deletequeuestart", function(event, url, filename){
    if(filename) $("#actionStatusMsg").text(lang("deleting") + filename);
    $.get(url, function(){
      if(queueUrl.length == 0) {
        $(window).trigger("deletelogs").unbind("deletequeuestart");
      } else $(window).trigger("deletequeuestart", [queueUrl.pop(), queueFilename.pop()]);
    });
  });
  
  for(var i = 0; i < slCount; i++) {
    var urls = $($("." + mainId + ":checked")[i]).val().split(',');
    for(var j = 0; j < urls.length; j++) {
      var url = urls[j];
      queueUrl.push(url);
      var filename = "";
      if(url.indexOf("fileName") > 0 && url.indexOf("deleteLog.rsb?") < 0) 
        filename = url.substring(url.indexOf("&fileName=") + 10);
      queueFilename.push(filename);
    }
    
    if(i == (slCount - 1)) {
      popupWindow("#actionStatus");
      $(window).trigger("deletequeuestart", [queueUrl.pop(), queueFilename.pop()]);
    }
  }
}

// Send or Restart Selected Files
function sendOrRestartSelectedFiles(mainId, tableMainId) {
  var slCount = $("." + mainId + ":checked").length;
  var errIndexs = new Array();
  var errData = new Array();
  var data = '';
  var cItem = 0;
  var eItem = 0;
  var msgBox = $('#logResponseMsg');
  var queueUrl = new Array();
  var queueId = new Array();
  var files = new Array();
  
  $(window).bind("sendorrestart", function(){
    if(cItem > 0) data += '<span class="correct">' + lang("transSuccess", cItem, new Array("" + cItem)) + '</span>';
    if(eItem > 0) data += '<span class="error">' + lang("transFailed", eItem, new Array("" + eItem)) + '</span>';
    if(!data) data = '<span>' + lang("noFile")  + '</span>';
    msgBox.html(data);
    refreshLogsTable(tableMainId, errIndexs);
    $(window).unbind("sendorrestart");
    $('#darkNight').hide(50);
    $('#actionStatus').hide(50);
  });
  
  $(window).bind("sendorrestartqueuestart", function(event, url, id){
    $("#actionStatusMsg").text(lang("sending") + files[id]);
    $.get(url, function(msgData) {
      if(msgData && msgData.indexOf('class="correct"') < 0) {
        errIndexs[id] = url;
        eItem++;
        if(!errData[msgData]) {
          errData[msgData] = 1;
          data += msgData;
        }
      } else if(msgData) {
        cItem++;
      }
      
      if(queueUrl.length == 0) {
        $(window).unbind("sendorrestartqueuestart").trigger("sendorrestart");
      } else $(window).trigger("sendorrestartqueuestart", [queueUrl.pop(), queueId.pop()]);
    });
  });
  
  for(var i = 0; i < slCount; i++) {
    var id = $($("." + mainId + ":checked")[i]).next().next('.' + mainId + '-id').val();
    queueId[i] = id;
    var sendUrl = $($("." + mainId + ":checked")[i]).next('.' + mainId + '-url').val();
    queueUrl[i] = sendUrl + "&" + Math.random();//Random for ignoring IE cache.
    if(sendUrl.indexOf("&fileName=") > 0) {
      var filename = sendUrl.substring(sendUrl.indexOf("&fileName=") + 10);
      files[id] = filename;
    } else files[id] = id;
     
    if(i == (slCount - 1)) {
      popupWindow("#actionStatus");
      $(window).trigger("sendorrestartqueuestart", [queueUrl.pop(), queueId.pop()]);
    }
  }
}

// Check check-box selected
function checkBoxSelected(mainId) {
  $("." + mainId).bind('click', function(){
    lightButtons(mainId);
  });
}

function lightButtons(mainId) {
  var deleteButton = $("#" + mainId + "-delete");
  var sendButton = $("#" + mainId + "-send");
  var restartButton = $("#" + mainId + "-restart");
  if(deleteButton.length != 0) {
    deleteButton.unbind("click");
    var dl = $("." + mainId + ":checked").length;
    if(dl > 0) {
      deleteButton.removeClass("graybtn");
      deleteButton.bind("click", function(){
        if(confirm(lang("deleteSelected", null, new Array("" + dl)))) {
          deleteSelectedLogs(mainId);
        }
      });
    } else deleteButton.addClass("graybtn");
  } 
  
  if(sendButton.length != 0) {
    var sl = $("." + mainId + "-send:checked").length;
    sendButton.unbind("click");
    if(sl > 0) {
      sendButton.removeClass("graybtn");
      sendButton.bind("click", function(){
        if(sl == 1 || confirm(lang("sendSelected", null, new Array("" + sl)))) {
          sendOrRestartSelectedFiles(mainId + "-send", mainId);
        }
      });
    } else sendButton.addClass("graybtn");
  }
  
  if(restartButton.length != 0) {
    var rl = $("." + mainId + "-restart:checked").length;
    restartButton.unbind("click");
    if(rl > 0) {
      restartButton.removeClass("graybtn");
      restartButton.bind("click", function(){
        if(rl == 1 || confirm(lang("restartSelected", null, new Array("" + rl)))) {
          sendOrRestartSelectedFiles(mainId + "-restart", mainId);
        }
      });
    } else restartButton.addClass("graybtn");
  }
  
  if($("." + mainId).length > 0 && $("." + mainId + ":checked").length == $("." + mainId).length) {
    $("#" + mainId).prop("checked", "checked");
  } else $("#" + mainId).prop("checked", "");
}

//Refresh Logs Table ====================================
function refreshLogsTable(mainId, errIndexs) {
  if($("#" + mainId + "-loadtable").length == 0)
    $("#" + mainId + "-load").show();
  var refreshUrl = $("#" + mainId + "-refresh").val() + "&" + Math.random();//Random for ignoring IE cache.
  
  $.get(refreshUrl, function(data) {
    if ($("#loginform", data).length > 0) {
      top.location.href="../shared/login.rst";//redirection
    } else {
      $('#' + mainId + "-table").html(data);
      
      var rows = $('#' + mainId + "-table").children(".file");
    
      eval($("#" + mainId + "-items").val());
      
      if(mainId == "in-cb") {
        receivedItems = [];
        for(var i = 0; i < items.length; i++) {
          receivedItems.push({
            filename:items[i].filename, 
            timestamp:items[i].timestamp, 
            filesize:items[i].filesize, 
            status:items[i].status, 
            row:rows[i], 
            log:$(rows[i]).next(".tlog")});
        }
      } else if(mainId == "out-cb") {
        sentItems = [];
        for(var i = 0; i < items.length; i++) {
          sentItems.push({
            filename:items[i].filename, 
            timestamp:items[i].timestamp, 
            filesize:items[i].filesize, 
            status:items[i].status, row:rows[i], 
            log:$(rows[i]).next(".tlog")});
        }
      }
      
      if(errIndexs) {
        for(var i = 0; i < rows.length; i++) {
          var row = $(rows[i]);
          var firstInput = row.children('td').eq(0).children('input').eq(0);
          var id = row.children('td').eq(0).children('input').eq(2).val();
          if(errIndexs[id]) {
            row.css("color", "red");
            firstInput.prop("checked", "checked");
          }
        }
      } else {// Clean up log error message tip from UI.
        $("#logResponseMsg").html("");
      }

      checkBoxSelected(mainId);
      lightButtons(mainId);
      tablePaging(mainId);
      
      $("#" + mainId + "-load").hide();
    }
  });
}

// Table Sort
function tableSort(mainId, sortParameters, target) {
  var input = $("#" + mainId + "-refresh");
  var refreshUrl = input.val();
  var refreshUrls = refreshUrl.split("?");
  var pagingParameters = '';
  var filterParameters = "&filter=All";
  var orgname = "?";
  if(refreshUrls.length == 2) {
    sortParameters = refreshUrls[1].indexOf('desc=true') > 0 ? sortParameters.replace('desc=true', 'desc=false') : sortParameters.replace('desc=false', 'desc=true');
    var pindex = refreshUrls[1].indexOf("&first=");
    if(pindex >= 0) pagingParameters = refreshUrls[1].substring(pindex);
    var findex = refreshUrls[1].indexOf("&filter=");
    if(findex >= 0) {
      if(pindex > findex)
        filterParameters = refreshUrls[1].substring(findex, pindex);
      else 
        filterParameters = refreshUrls[1].substring(findex);
    }
    
    var params = refreshUrls[1].split("&");
    for(var i = 0; i < params.length; i++) {
      if(params[i].indexOf("orgname=") == 0) {
        orgname = "?" + params[i] + "&";
        break;
      }
    }
  }
  
  $("." + mainId + "-sort span").removeClass("table-sort-asc").removeClass("table-sort-desc");
  
  var r;
  if(sortParameters.indexOf('desc=true') > 0) {
    r = -1;
    $(target).children("span").addClass("table-sort-desc");
  } else {
    r = 1;
    $(target).children("span").addClass("table-sort-asc");
  }
  
  refreshUrl = refreshUrls[0] + orgname + sortParameters + filterParameters + pagingParameters;
  input.val(refreshUrl);
  
  refreshLogsTable(mainId);
}

// Table Paging
function tablePaging(mainId) {
  var pagingSize = parseInt($("#" + mainId + "-paging-size").val());
  var count = parseInt($("#" + mainId + "-count").val());
  var currentPage = parseInt($("#" + mainId + "-paging-current").val());
  var pagingCount = parseInt(count / pagingSize) + (count % pagingSize > 0 ? 1 : 0)
  
  var pagingSelect = "";
  if(currentPage > 1) {
    var first = (currentPage - 2) * pagingSize;
    var last = (currentPage - 1) * pagingSize - 1;
    pagingSelect += "<a class='paging' href='javascript:void(0);' onclick='javascript:changePaging(\"" + mainId + "\", \"&first=" + first + "&last=" + last + "\", " + (currentPage - 1) + ");'>&lt;</a>"; 
  }
  
  var pageColoum = 10;
  if(pagingCount >= pageColoum) {
    for(var i = 1; i <= pagingCount; i++) {
      var first = (i - 1) * pagingSize;
      var last = i * pagingSize - 1;
      var pageTemp = "<a class='paging' href='javascript:void(0);' onclick='javascript:changePaging(\"" + mainId + "\", \"&first=" + first + "&last=" + last + "\", " + i + ");'>" + i + "</a>";
      
      if(currentPage < 4) {
        if(i < 5) {
          if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='paging paging-selected'>" + i + "</a>";
          else pagingSelect += pageTemp;
        } else if(i == pagingCount) pagingSelect += pageTemp;
        else if(i == 5) pagingSelect += "<a href='javascript:void(0);' class='paging'>...</a>";
      } else if(currentPage > (pagingCount - 3)) {
        if(i > (pagingCount - 4)) {
          if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='paging paging-selected'>" + i + "</a>";
          else pagingSelect += pageTemp;
        } else if(i == 1) pagingSelect += pageTemp;
        else if(i == (pagingCount - 4)) pagingSelect += "<a href='javascript:void(0);' class='paging'>...</a>";
      } else {
        if(i == 1 || i == pagingCount || i == (currentPage - 1) || i == (currentPage + 1)) {
          pagingSelect += pageTemp;
        } else if(i == 2 || i == (pagingCount - 1)) pagingSelect += "<a href='javascript:void(0);' class='paging'>...</a>";
        else if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='paging paging-selected'>" + i + "</a>";
      }
    }
  } else if(pagingCount > 1) {
    for(var i = 1; i <= pagingCount; i++) {
      var first = (i - 1) * pagingSize;
      var last = i * pagingSize - 1;
      if(i == currentPage) pagingSelect += "<a href='javascript:void(0);' class='paging paging-selected'>" + i + "</a>";
      else pagingSelect += "<a class='paging' href='javascript:void(0);' onclick='javascript:changePaging(\"" + mainId + "\", \"&first=" + first + "&last=" + last + "\", " + i + ");'>" + i + "</a>"; 
    }
  }
  
  if(currentPage < pagingCount) {
    var first = currentPage * pagingSize;
    var last = (currentPage + 1) * pagingSize - 1;
    pagingSelect += "<a class='paging' href='javascript:void(0);' onclick='javascript:changePaging(\"" + mainId + "\", \"&first=" + first + "&last=" + last + "\", " + (currentPage + 1) + ");'>&gt;</a>"; 
  }
  
  $("#" + mainId + "-paging-num").html(pagingSelect);
}

function changePaging(mainId, pagingParameters, num) {
  var input = $("#" + mainId + "-refresh");
  var current = $("#" + mainId + "-paging-current");
  var refreshUrl = input.val();
  var pindex = refreshUrl.indexOf("&first=");
  if(pindex >= 0) {
    refreshUrl = refreshUrl.substring(0, pindex) + pagingParameters;
  } else refreshUrl += pagingParameters;
  
  current.val(num);
  input.val(refreshUrl);
  refreshLogsTable(mainId);
}

function changePagingSize(size, mainId, pagingParameters, target) {
  if(size != $("#" + mainId + "-paging-size").val()) {
    $("#" + mainId + "-paging-size-selecter .paging-selected").removeClass("paging-selected");
    $(target).addClass("paging-selected");
    $("#" + mainId + "-paging-size").val(size);
    changePaging(mainId, pagingParameters, 1);
  }
}

function changeFilter(mainId, target) {
  var input = $("#" + mainId + "-refresh");
  var refreshUrl = input.val();
  var oldfilter = "";
  var s = refreshUrl.indexOf("filter=");
  if(s >= 0) {
    var e = refreshUrl.indexOf("&", s);
    if(e >= 0) {
      oldfilter = refreshUrl.substring(s, e);
    } else {
      oldfilter = refreshUrl.substring(s);
    }
  }
  
  var select = $(target).children(":selected");
  var filter = "filter=" + select.val();
  if(filter != oldfilter) {
    if(oldfilter) 
      refreshUrl = refreshUrl.replace(oldfilter, filter);
    else
      refreshUrl = refreshUrl + "&" + filter;
      
    input.val(refreshUrl);
    refreshLogsTable(mainId);
  }
}

// Update Personal Config Drop-down
function updateDropdown(tr) {
  var str='';
  $("#" + tr).find('select[name="prop-name"] option:selected').each(function () {
    str = $('#desc-' + $(this).text()).html();
  });
  $("#" + tr).children(".prop-description").html(str);
}