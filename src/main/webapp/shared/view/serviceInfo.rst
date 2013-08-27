<rsb:check attr="svc">
  <rsb:set attr="tmp.rInCount" value="0"/>
  <rsb:set attr="tmp.oInCount" value="0"/>
  <rsb:set attr="tmp.nsCount" value="0"/>
  <rsb:set attr="tmp.outCount" value="0"/>
  <rsb:set attr="tmp.noInfo" value=""/>
  <rsb:set attr="tmp.svcId" value="[site.servicePath | pathcombine('[svc]')]"/>
  <rsb:set attr="info.id" value="[tmp.svcId]"/>
  <rsb:call op="../priv/getInfo.rsb" in="info">
    <rsb:check attr="rsb:emessage">
      <rsb:set attr="tmp.noInfo" value="true"/>
    </rsb:check>
    <rsb:check attr="type">
      <rsb:select value="[type]">
        <rsb:case match="exact" value="summary">
          <rsb:set attr="summary.description" value="[description]"/>
        </rsb:case>
        <rsb:case match="exact" value="input">
          <rsb:equals attr="required" value="true">
            <rsb:set attr="tmp.rInCount" value="[tmp.rInCount | add('1')]"/>
            <rsb:set attr="reqInput.default#[tmp.rInCount]" value="[default | def('')]"/>
            <rsb:set attr="reqInput.defaultdesc#[tmp.rInCount]" value="[defaultdesc | def('')]"/>
            <rsb:set attr="reqInput.description#[tmp.rInCount]" value="[description | def('')]"/>
            <rsb:set attr="reqInput.name#[tmp.rInCount]" value="[name]"/>
            <rsb:set attr="reqInput.required#[tmp.rInCount]" value="[required]"/>
            <rsb:set attr="reqInput.sourcedesc#[tmp.rInCount]" value="[sourcedesc]"/>
            <rsb:set attr="reqInput.style#[tmp.rInCount]" value="[style | def('input')]"/>
            <rsb:set attr="reqInput.options#[tmp.rInCount]" value=""/>
            <rsb:check attr="value#1">
              <rsb:set attr="reqInput.style#[tmp.rInCount]" value="select"/>
              <rsb:set attr="tmp.options" value=""/>
              <rsb:enum attr="value">
                <rsb:equals attr="reqInput.default#[tmp.rInCount]" value="[_value]">
                  <rsb:set attr="tmp.options" value="[tmp.options]<option selected='selected'>[_value]</option>"/>
                  <rsb:else>
                    <rsb:set attr="tmp.options" value="[tmp.options]<option>[_value]</option>"/>
                  </rsb:else>
                </rsb:equals>
              </rsb:enum>
              <rsb:set attr="reqInput.options#[tmp.rInCount]" value="[tmp.options]"/>
            </rsb:check>
            <rsb:else>
              <rsb:set attr="tmp.oInCount" value="[tmp.oInCount | add('1')]"/>
              <rsb:set attr="optInput.default#[tmp.oInCount]" value="[default | def('')]"/>
              <rsb:set attr="optInput.defaultdesc#[tmp.oInCount]" value="[defaultdesc | def('')]"/>
              <rsb:set attr="optInput.description#[tmp.oInCount]" value="[description | def('')]"/>
              <rsb:set attr="optInput.name#[tmp.oInCount]" value="[name]"/>
              <rsb:set attr="optInput.required#[tmp.oInCount]" value="[required]"/>
              <rsb:set attr="optInput.sourcedesc#[tmp.oInCount]" value="[sourcedesc]"/>
              <rsb:set attr="optInput.style#[tmp.oInCount]" value="[style | def('input')]"/>
              <rsb:set attr="optInput.options#[tmp.oInCount]" value=""/>
              <rsb:check attr="value#1">
                <rsb:set attr="optInput.style#[tmp.oInCount]" value="select"/>
                <rsb:set attr="tmp.options" value=""/>
                <rsb:enum attr="value">
                  <rsb:equals attr="optInput.default#[tmp.oInCount]" value="[_value]">
                    <rsb:set attr="tmp.options" value="[tmp.options]<option selected='selected'>[_value]</option>"/>
                    <rsb:else>
                      <rsb:set attr="tmp.options" value="[tmp.options]<option>[_value]</option>"/>
                    </rsb:else>
                  </rsb:equals>
                </rsb:enum>
                <rsb:set attr="optInput.options#[tmp.oInCount]" value="[tmp.options]"/>
              </rsb:check>
            </rsb:else>
          </rsb:equals>
        </rsb:case>
        <rsb:case match="exact" value="namespace">
          <rsb:set attr="tmp.nsCount" value="[tmp.nsCount | add('1')]"/>
          <rsb:set attr="namespace.prefix#[tmp.nsCount]" value="[prefix]"/>
          <rsb:set attr="namespace.namespace#[tmp.nsCount]" value="[namespace]"/>
        </rsb:case>
        <rsb:case match="exact" value="output">
          <rsb:set attr="tmp.outCount" value="[tmp.outCount | add('1')]"/>
          <rsb:set attr="output.name#[tmp.outCount]" value="[name]"/>
          <rsb:set attr="output.description#[tmp.outCount]" value="[description]"/>
        </rsb:case>
      </rsb:select>
    </rsb:check>
  </rsb:call>

  <div class="trans tabs-container">
    <h3 class="infoTitle">
      <span class="svcName">[svc]</span>
    </h3>
  </div>
  
  <rsb:check attr="tmp.noInfo">
    <div id="svcInfoError">
      <p class="noinfoError ui-state-error">
        [lang.svcinfo_noInfo]
      </p>
    </div>
    <rsb:else>
      <div id="hiddenInputs">
        <input id="svcPath" name="rsb:svcp" type="hidden" value="[tmp.svcId | toabsolutepath]" />
        <input id="svcName" name="rsb:svcn" type="hidden" value="[svc]" />
        <input id="svcAppName" name="rsb:svcappname" type="hidden" value="[pg.appname]" />
      </div>
      <input id="svcLink" type="hidden" value="[tmp.svcId | urlresolve]"/>
      
      <div class="configInfo">
        <h3>[lang.svcinfoTitle_description]</h3>
        <p id="svcDescription">[summary.description | def()]</p>
      </div>

      <div class="configInfo">
        <h3>[lang.svcinfoTitle_url | def("Service URL")]</h3>
        <p id="svcURL">[tmp.svcId | tourl(false)]</p>
      </div>

      <div class="configInfo">
        <h3>
          [lang.svcinfoTitle_requiredParameters]
          <rsb:set attr="tooltip.message" value="[lang.svcinfo_requiredParametersInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        <rsb:exists item="reqInput">
          <rsb:else>
            <p id="svcNoRequired">&lt; [lang.svcinfo_noRequiredParameters] &gt;</p>
          </rsb:else>
        </rsb:exists>
      
        <form id="svcForm" action="" target="_blank" method="GET">
          <input id="svcType" type="hidden" name="@rss" />
          
          <table id="svcRequired" class='ca-props'>
            <colgroup>
              <col width="15%" />
              <col width="20" />
              <col width="*" />
            </colgroup>
            <tbody>
              <rsb:exists item="reqInput">
                <rsb:enum range="1..[tmp.rInCount]">
                  <rsb:set attr="para.default" value="[reqInput.default#[_value]]"/>
                  <rsb:set attr="para.defaultdesc" value="[reqInput.defaultdesc#[_value]]"/>
                  <rsb:set attr="para.description" value="[reqInput.description#[_value]]"/>
                  <rsb:set attr="para.name" value="[reqInput.name#[_value]]"/>
                  <rsb:set attr="para.required" value="[reqInput.required#[_value]]"/>
                  <rsb:set attr="para.sourcedesc" value="[reqInput.sourcedesc#[_value]]"/>
                  <rsb:set attr="para.style" value="[reqInput.style#[_value]]"/>
                  <rsb:set attr="para.options" value="[reqInput.options#[_value]]"/>
                  <rsb:set attr="para.multiplename" value="[para.name | regex('#|\*')]"/>
                  <rsb:check attr="para.multiplename">
                    <rsb:else>
                      <rsb:set attr="para.multiple" value="false"/>
                      <rsb:render template="~/shared/view/infoParameter.rst" in="para"/>
                    </rsb:else>
                  </rsb:check>
                  <rsb:unset item="para"/>
                </rsb:enum>
              </rsb:exists>
            </tbody>
          </table>
        </form>
        <table id="svcMultiRequired" class="ca-props">
          <colgroup>
            <col width="15%" />
            <col width="20" />
            <col width="*" />
          </colgroup>
          <tbody>
            <rsb:exists item="reqInput">
              <rsb:enum range="1..[tmp.rInCount]">
                <rsb:set attr="para.default" value="[reqInput.default#[_value]]"/>
                <rsb:set attr="para.defaultdesc" value="[reqInput.defaultdesc#[_value]]"/>
                <rsb:set attr="para.description" value="[reqInput.description#[_value]]"/>
                <rsb:set attr="para.name" value="[reqInput.name#[_value]]"/>
                <rsb:set attr="para.required" value="[reqInput.required#[_value]]"/>
                <rsb:set attr="para.sourcedesc" value="[reqInput.sourcedesc#[_value]]"/>
                <rsb:set attr="para.style" value="[reqInput.style#[_value]]"/>
                <rsb:set attr="para.options" value="[reqInput.options#[_value]]"/>
                <rsb:set attr="para.multiplename" value="[para.name | regex('#|\*')]"/>
                <rsb:check attr="para.multiplename">
                  <rsb:set attr="para.multiple" value="true"/>
                  <rsb:render template="~/shared/view/infoParameter.rst" in="para"/>
                </rsb:check>
                <rsb:unset item="para"/>
              </rsb:enum>
            </rsb:exists>
          </tbody>
        </table>
      
        <div class='clear'>&nbsp;</div>
        <table class='ca-props'>
          <colgroup>
            <col width="15%" />
            <col width="20" />
            <col width="130" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td/>
              <td/>
              <td>
                <div class="splitBtn">
                  <a onclick="javascript:rsbcall.runSvc(true);" title="Run Service." class="primaryAction">[lang.svcinfo_callService]</a>
                  <span class="dropdownTrigger">
                    <div class="svcFmts">
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@rss');" title="Format the results as an RSS Feed.">
                        <span class='svc svc-rss'></span> RSS</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@html');" title="Format the results as an HTML table.">
                        <span class='svc svc-html'></span> HTML</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@csv');" title="Format the results as a comma separated file.">
                        <span class='svc svc-csv'></span> CSV</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@atom');" title="Format the results as an ATOM Feed.">
                        <span class='svc svc-atom'></span> ATOM</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@wsdl');" title="Show the WSDL that defines the service for SOAP.">
                        <span class='svc svc-soap'></span> SOAP</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@json');" title="Format the results as an JSON object.">
                        <span class='svc svc-json'></span> JSON</a>
                      <a href="javascript:void(0);" onclick="javascript:rsbcall.runSvc(false, '@tsv');" title="Format the results as a tab separated file.">
                        <span class='svc svc-tsv'></span> TSV</a>
                    </div>
                  </span>
                </div> 
                
                
              </td>
              <td>
                <p class="tips">[lang.svcinfo_callServiceInfo]</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <rsb:match pattern="[tmp.oInCount | greaterthan(0)]" value="true">
        <div class="svcInfo configInfo">
          <h3>
            [lang.svcinfoTitle_optionalParameters]
            <rsb:set attr="tooltip.message" value="[lang.svcinfo_optionalParametersInfo]"/>
            <rsb:include file="[ui.toolTips:bubble]" />
          </h3>
          <rsb:exists item="optInput">
            <table id="svcOptional" class='ca-props'>
              <colgroup>
                <col width="220" />
                <col width="20" />
                <col width="*" />
              </colgroup>
              <tbody>
                <rsb:enum range="1..[tmp.oInCount]">
                  <rsb:set attr="para.default" value="[optInput.default#[_value]]"/>
                  <rsb:set attr="para.defaultdesc" value="[optInput.defaultdesc#[_value]]"/>
                  <rsb:set attr="para.description" value="[optInput.description#[_value]]"/>
                  <rsb:set attr="para.name" value="[optInput.name#[_value]]"/>
                  <rsb:set attr="para.required" value="[optInput.required#[_value]]"/>
                  <rsb:set attr="para.sourcedesc" value="[optInput.sourcedesc#[_value]]"/>
                  <rsb:set attr="para.style" value="[optInput.style#[_value]]"/>
                  <rsb:set attr="para.options" value="[optInput.options#[_value]]"/>
                  <rsb:set attr="para.multiplename" value="[para.name | regex('#|\*')]"/>
                  <rsb:render template="~/shared/view/infoParameter.rst" in="para"/>
                  <rsb:unset item="para"/>
                </rsb:enum>
              </tbody>
            </table>
            <rsb:else>
              <p id="svcNoOptional">&lt; [lang.svcinfo_noParameters] &gt;</p>
            </rsb:else>
          </rsb:exists>
        </div>
      </rsb:match>
      
<script language="javascript">
  $(function() {
    $("#svcSecurity").find("tr").die("mouseenter mouseleave").live("mouseenter", function(e) {
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
  });
</script>

      <div class="configInfo">
        <rsb:set item="site" attr="isadmin" value="false"/>
        <rsb:call op="~/shared/priv/isAdmin.rsb">
          <rsb:set item="site" attr="isadmin" value="[isadmin]"/>
        </rsb:call>
        <rsb:equals attr="site.isadmin" value="true">
          <h3>
            [lang.svcinfoTitle_security]
            <rsb:set attr="tooltip.message" value="<p>[lang.svcinfo_securityInfo1]</p> <p>[lang.svcinfo_securityInfo2]</p>"/>
            <rsb:include file="[ui.toolTips:bubble]" />
          </h3>
          
          <link href="../shared/templates/table/table.css?#[site.buildno | def]" type="text/css" rel="stylesheet" />
          <table width="100%" id="svcSecurity" class="app-table">
            <colgroup>
              <col width="200px" />
              <col width="200px" />
              <col width="22px"/>
            </colgroup>
            <thead>
              <tr>
                <th><span>[lang.svcinfo_user]</span></th>
                <th><span>[lang.svcinfo_authtoken]</span></th>
              </tr>
            </thead>
            <tbody>
              <rsb:set attr="in.script" value="[tmp.svcId]" />
              <rsb:call op="~/shared/priv/admin/getAllowedUsers.rsb" input="in" output="out">
                <rsb:set attr="tmp.allowedUser#[_index]" value="[out.user]"/>
                <rsb:match pattern="true" value="[_index | modulus('2') | equals('0','true','false')]">
                  <rsb:set attr="style" value="separate"/>
                  <rsb:else>
                    <rsb:set attr="style" value=""/>
                  </rsb:else>
                </rsb:match>
                <tr class='full [style]'>
                  <td>[out.user]</td>
                  <td>[out.authtoken]</td>
                  <td class="deleteRow">
                    <div onclick="rsbcall.deleteAllowedUser('[out.user | replace(\\, \\\\)]', '[tmp.svcId]'); return false;" style="display: none;">
                      <span>X</span>
                    </div>
                  </td>
                </tr>
              </rsb:call>
            </tbody>
          </table>
          <rsb:set attr="in.script" value="[tmp.svcId]" />
          <rsb:call op="~/shared/priv/admin/listUsers.rsb" input="in" output="out">
            <rsb:first>
              <span id="security-new-user-list">
                <a href="javascript:void(0);" title="New User."><span class="small">\[+\] [lang.svcinfo_addUser]</span></a>
                <span id="security-new-user">
            </rsb:first>
            <rsb:set attr="tmp.allow" value="false"/>
            <rsb:enum attr="tmp.allowedUser">
              <rsb:equals attr="out.username" value="[_value]">
                <rsb:set attr="tmp.allow" value="true"/>
                <rsb:break />
              </rsb:equals>
            </rsb:enum>
            <rsb:equals attr="tmp.allow" value="false">
              <a href="javascript:void(0);" onclick="javascript:rsbcall.addAllowedUser('[out.username | replace(\\, \\\\)]', '[tmp.svcId]', '[lang.svcinfo_giveAccess | replace('{0}', '[out.username | htmlencode | replace(\\, \\\\)]')]');">[out.username]</a>
            </rsb:equals>
            <rsb:last>
              </span>
              </span>
              |&nbsp;&nbsp;<a href="../shared/users.rst"><span class="small">[lang.svcinfo_manageUsers]</span></a>
            </rsb:last>
          </rsb:call>

        </rsb:equals>
      </div>
      
      <rsb:equals attr="site.isadmin" value="true">
        <div class="configInfo">
          <h3>
            Scheduling
          </h3>
          <rsb:check value="[site.java]">
            <rsb:set item="site" attr="appdatadir" value="[_about.approot | pathcombine('WEB-INF')]"/>
            <rsb:else>
              <rsb:set item="site" attr="appdatadir" value="[_about.approot | pathcombine('app_data')]"/>
            </rsb:else>
          </rsb:check>
          <rsb:set item="site" attr="profiledb" value="[site.appdatadir | pathcombine('Profile.db')]"/>
          
          <rsb:set attr="tmp.scheduled" value="There are no scheduled tasks for this service."/>
          <rsb:set attr="tasks.database" value="[site.profiledb]"/>
          <rsb:set attr="tasks.query" value="SELECT COUNT(*) AS count FROM scheduled_tasks WHERE URL LIKE '%[tmp.svcId]%'"/>
          <rsb:call op="sqliteQuery" in="tasks">
            <rsb:check attr="sqlite:count">
              <rsb:set attr="tmp.scheduled" value="[sqlite:count] scheduled task(s) exist for this service."/>
            </rsb:check>
          </rsb:call>
          [tmp.scheduled]
          <br/>
          <br/>
          <a class="btn" href="javascript:void(0);" onclick="javascript:scheduleService();return false;">
            <span id="SaveChanges">Schedule Now</span>
          </a>
        </div>
        
        <script>
          function scheduleService() {
            var $inputs = $('#svcForm :input');
            var queryStr = "";
            $inputs.each(function() {
              if (this.name) {
                queryStr += "%26" + this.name + "=" + $(this).val();
              }
            });
            
            <rsb:set attr="token.authtoken" value=""/>
            <rsb:set attr="intoken.username" value="[_request.server:AUTH_USER]"/>
            <rsb:call op="~/shared/priv/admin/getAuthToken.rsb" in="intoken">
              <rsb:set attr="token.authtoken" value="[authtoken]"/>
            </rsb:call>
            window.location.replace("../shared/scheduler.rst?addnew=configure&URL=[tmp.svcId]?@x-http-method=GET%26@authtoken=[token.authtoken | def]" + queryStr);
          }
        </script>
      </rsb:equals>
      
      
      <rsb:exists item="output">
        <div class="svcInfo configInfo">
          <h3>[lang.svcinfo_output]</h3>
          <table width="100%" id="svcDescOutput" class="app-table">
            <colgroup>
              <col width="200" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th><span>[lang.svcinfo_name]</span></th>
                <th><span>[lang.svcinfo_description]</span></th>
              </tr>
            </thead>
            <tbody>
              <rsb:enum range="1..[tmp.outCount]">
                <rsb:match pattern="true" value="[_value | modulus('2') | equals('0','true','false')]">
                  <rsb:set attr="style" value="separate"/>
                  <rsb:else>
                    <rsb:set attr="style" value=""/>
                  </rsb:else>
                </rsb:match>
                <tr class='full [style]'>
                  <td>[output.name#[_value]]</td>
                  <td>[output.description#[_value]]</td>
                </tr>
              </rsb:enum>
            </tbody>
          </table>
        </div>
      </rsb:exists>
      
    </rsb:else>
  </rsb:check>
  
</rsb:check>

