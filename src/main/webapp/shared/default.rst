<rsb:include file="config.rst"/>
<rsb:include file="../shared/header.rst"/>

<rsb:set attr="path" value=".."/>
<rsb:set attr="fileordir" value="dirs"/>
<rsb:call op="fileListDir" save="filesfeed" />

<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:check attr="origconnector">
      <rsb:check attr="duplconnector">
        <rsb:set attr="tmp.origconnector" value="[origconnector]"/>
        <rsb:set attr="tmp.duplconnector" value="[duplconnector | urlencode]"/>
        <rsb:call op="[service.duplicateConnector]" in="tmp" />
        <rsb:set attr="_response.redirect" value="[_rsb.script | urlresolve]" />
      </rsb:check>
      <rsb:check attr="renaconnector">
        <rsb:set attr="tmp.origconnector" value="[origconnector]"/>
        <rsb:set attr="tmp.renaconnector" value="[renaconnector | urlencode]"/>
        <rsb:call op="[service.renameConnector]" in="tmp" />
        <rsb:set attr="_response.redirect" value="[_rsb.script | urlresolve]" />
      </rsb:check>
    </rsb:check>
    <rsb:check attr="delconnector">
      <rsb:set attr="tmp.delconnector" value="[delconnector]"/>
      <rsb:call op="[service.deleteConnector]" in="tmp" />
      <rsb:set attr="_response.redirect" value="[_rsb.script | urlresolve]" />
    </rsb:check>
  </rsb:equals>
</rsb:check>

<script language="javascript">
  function deleteConnector($delconnector) {
    if(confirm("WARNNING: This action will remove the connector permanently, are you sure you want to do this?")) {
      var form = $("#deleteconnector");
      form.find("input\[name=delconnector\]").val($delconnector);
      form.submit();
    }
  }

  function duplicateConnector($conname, $origconnector, $defconnector) {
    var duplconnector;
    do {
      duplconnector = prompt("Please specify a location for the copy of your " + $conname + ".", $defconnector);
      if(duplconnector == null) {
        return;
      } else if(!duplconnector) {
        alert("ERROR: The connector name can't be empty.");
      } else {
        duplconnector = duplconnector.toLowerCase();
        for(var i = 0; i < duplconnector.length; i++) {
          var c = duplconnector.charAt(i);
          if((c < 'a' || c > 'z') && (c < '0' || c > '9') && c != '_' && c != '-' ) {
            alert("ERROR: The character '" + c + "' is not available in location, please try another one. Available characters: \[a-z, 0-9, -, _\]");
            duplconnector = "";
            break;
          }
        }

        if(duplconnector == "app_data" || duplconnector == "bin" || duplconnector == "events" 
        || duplconnector == "shared" || duplconnector == "WEB-INF") {
          alert("ERROR: The connector location '" + duplconnector + "' is illegal, please try another one.");
          duplconnector = "";
        } else if(duplconnector) {
          var form = $("#duplicateconnector");
          form.find("input\[name=origconnector\]").val($origconnector);
          form.find("input\[name=duplconnector\]").val(duplconnector);
          form.submit();
        }
      }  
    } while(!duplconnector)
  }

  function renameConnector($conname, $origconnector) {
    var renaconnector;
    do {
      renaconnector = prompt("Please specify a new location for your " + $conname + ".", $origconnector);
      if(renaconnector == null) {
        return;
      } else if(!renaconnector) {
        alert("ERROR: The connector name can't be empty.");
      } else {
        renaconnector = renaconnector.toLowerCase();
        for(var i = 0; i < renaconnector.length; i++) {
          var c = renaconnector.charAt(i);
          if((c < 'a' || c > 'z') && (c < '0' || c > '9') && c != '_' && c != '-' ) {
            alert("ERROR: The character '" + c + "' is not available in location, please try another one. Available characters: \[a-z, 0-9, -, _\]");
            renaconnector = "";
            break;
          }
        }

        if(renaconnector == "app_data" || renaconnector == "bin" || renaconnector == "events" 
        || renaconnector == "shared" || renaconnector == "WEB-INF") {
          alert("ERROR: The connector location '" + renaconnector + "' is illegal, please try another one.");
          renaconnector = "";
        } else if(renaconnector) {
          var form = $("#renameconnector");
          form.find("input\[name=origconnector\]").val($origconnector);
          form.find("input\[name=renaconnector\]").val(renaconnector);
          form.submit();
        }
      }  
    } while(!renaconnector)
  }
</script>

<form id="duplicateconnector" method="post">
  <input name="origconnector" value="" type="hidden"/>
  <input name="duplconnector" value="" type="hidden"/>
</form>
<form id="renameconnector" method="post">
  <input name="origconnector" value="" type="hidden"/>
  <input name="renaconnector" value="" type="hidden"/>
</form>
<form id="deleteconnector" method="post">
  <input name="delconnector" value="" type="hidden"/>
</form>

<!-- headline -->
<div id="headline" class="trans">
  <span class='trans headline-right'>
    <div id="menu">
      <ul class="navigation level1" id="tab-partners">
        <li>
          <a href="default.rst" class="trans">[lang.default_apps]</a>
        </li>
      </ul>
    </div>
  </span>
</div>
<div class="appsection">  
  <h2>[lang.defaultTitle_currently]</h2>
  <hr /><br />
  <div>
    <rsb:call op="[_feeds.filesfeed]">
      <rsb:select attr="file:name">
        <rsb:case value="shared"/>
        <rsb:default>
          <rsb:set attr="aboutfile" value="[file:fullname | pathcombine('about.rsb')]"/>
          <rsb:check value="[aboutfile | fileexists]">
            <rsb:call op="[aboutfile]">
              <div class="app window-hover">
                <rsb:equals attr="site.java" value="true">
                  <rsb:set attr="connectorencoded" value="[file:name | urlencode]"/>
                  <rsb:else>
                    <rsb:set attr="connectorencoded" value="[file:name | urlencode | urlencode]"/>
                  </rsb:else>
                </rsb:equals>
                <a href="../[connectorencoded]/default.rst">
                  <div class="small">
                    <rsb:set attr="img" value="/[file:name]/app.png"/>
                    <div class="app-img" style="background:url('[img | toabsolutepath | fileexists('../[connectorencoded]/app.png', 'img/app-base.png')]') no-repeat;"></div>
                    
                    <p>
                      <b>[name]</b>
                      <br />[lang.default_version]: [version | def('')]
                      <br />[lang.default_installed]: [file:mtime | todate('MMMM dd, yyyy', "yyyy-MM-dd'T'HH:mm:ss")]
                      <br/>Location: /[file:name | urldecode | htmlencode]
                    </p>
                    
                  </div>
                </a>
                <div class="app-options">
                  <img src="img/tools.png" border="0"/>
                  <ul class="app-options-dropdown">
                    <rsb:check attr="canduplicate">
                      <rsb:set attr="tmp.defconnector" value=""/>
                      <rsb:set attr="tmp.curconnector" value="[rolename | def | replace('_user', '') | replace('rssbus_', '')]"/>
                      <rsb:enum range="1..100">
                        <rsb:set attr="file" value="~/"/>
                        <rsb:set attr="file" value="[file | toabsolutepath | pathcombine('[tmp.curconnector][_value]')]"/>
                        <rsb:set attr="isexists" value="[file | fileexists]" />
                        <rsb:equals attr="isexists" value="false">
                          <rsb:set attr="tmp.defconnector" value="[tmp.curconnector][_value]"/>
                          <rsb:break/>
                        </rsb:equals>
                      </rsb:enum>
                      <li><a href="javascript:void(0);" onclick="duplicateConnector('[name]', '[file:name]', '[tmp.defconnector]')" class="app-options-item">Duplicate</a></li>
                      <li><a href="javascript:void(0);" onclick="renameConnector('[name]', '[file:name]')" class="app-options-item">Rename</a></li>
                    </rsb:check>
                    <li><a href="javascript:void(0);" onclick="deleteConnector('[file:name]')" class="app-options-item">Delete</a></li>
                  </ul>
                </div>
              </div>
            </rsb:call>
          </rsb:check>
        </rsb:default>
      </rsb:select>
    </rsb:call>
  </div>
</div>

<div class="appsection">  
  <h2>[lang.defaultTitle_findMore]...</h2>
  <hr /><br />
  <div>
    [lang.default_moreApplications]
  </div>
</div>

<rsb:include file="footer.rst"/>
