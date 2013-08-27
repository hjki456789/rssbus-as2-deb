<!--suppress ALL -->
<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
  <!--Process password mask firstly-->
  <rsb:call op="[service.getSelf]">
    <rsb:set item='self' copyfrom='_out1'/>
  </rsb:call>
  <rsb:check value="[certpassword | def('') | equals('[site.passwordMask]')]">
    <rsb:set attr="certpassword" value="[self.a2p:certpassword]"/>
  </rsb:check>
  <rsb:unset item="self"/>
  
  <!--verify private and public cert-->
  <rsb:check attr="certpfx">
    <rsb:set attr="certpfx" value="[certpfx | replace('[site.profilesPath]', '')]"/>
    <rsb:set attr="tmpcert.store" value="[certpfx]"/>
    <rsb:set attr="tmpcert.password" value="[certpassword | def('')]"/>
    <rsb:call op="[service.verifyCert]" input="tmpcert">
      <rsb:set item='certpfxinfo' copyfrom='_out1'/>
    </rsb:call>
    <rsb:set attr='encryptioncertsubject' value='[certpfxinfo.fa:subject | def()]'/>    
    <rsb:unset item="tmpcert"/>
  </rsb:check>
  <rsb:check attr="publiccert">
    <rsb:set attr="publiccert" value="[publiccert | replace('[site.profilesPath]', '')]"/>
    <rsb:set attr="tmpcert.store" value="[publiccert]"/>
    <rsb:call op="[service.verifyCert]" input="tmpcert">
      <rsb:set item='publiccertinfo' copyfrom='_out1'/>
    </rsb:call>
    <rsb:unset item="tmpcert"/>
  </rsb:check>
  
  <rsb:check attr="prop:publicdomain">
    <rsb:match pattern="*://localhost:*/as2connector/pub/ReceiveMDN.rsb" value="[asyncmdnurl]" type="glob">
     <rsb:set attr="asyncmdnurl" value="http[_request.server:HTTPS | equals('OFF', '', 's')]://[prop:publicdomain]:[_request.server:SERVER_PORT]/as2connector/pub/ReceiveMDN.rsb"/>
    </rsb:match>
  </rsb:check>
  <!--handle postbacks, save self info-->
  <rsb:call op="[service.setSelf]">
    <rsb:set item='selfUpdate' copyfrom='_out1'/>
  </rsb:call>
  <rsb:call op="[service.setLocalSettings]">
    <rsb:set item='localUpdate' copyfrom='_out1'/>
  </rsb:call>
  
  <rsb:set attr="setarchive.TaskName" value="ArchiveLogs"/>
  <rsb:set attr="setarchive.Script" value="[service.archiveLogs]"/>
  <rsb:check attr="archiveinterval">
    <rsb:set attr="setarchive.RunInterval" value="1.00:00:00"/>
    <rsb:set attr="setarchive.ScriptInput:FileAge" value="[archiveinterval]"/>
    <rsb:else>
      <rsb:set attr="setarchive.RunInterval" value="00:00:00"/>
    </rsb:else>
  </rsb:check>
  <rsb:call op="[service.setTask]" in="setarchive">
    <rsb:set item='archiveUpdate' copyfrom='_out1'/>
  </rsb:call>
  
  <rsb:set attr="setcheckcert.TaskName" value="CheckCert"/>
  <rsb:set attr="setcheckcert.Script" value="[service.checkCert]"/>
  <rsb:check attr="propc:NotifyCertExpiry">
    <rsb:set attr="setcheckcert.RunInterval" value="1.00:00:00"/>
    <rsb:else>
      <rsb:set attr="setcheckcert.RunInterval" value="00:00:00"/>
    </rsb:else>
  </rsb:check>
  <rsb:call op="[service.setTask]" in="setcheckcert"/>

  <rsb:check attr="heartbeatinterval">
    <rsb:set attr="_profile.as2connector_heartbeat_interval" value="[heartbeatinterval]"/>
    <rsb:call op="[service.startTimer]"/>
  </rsb:check>
</rsb:equals>

<!--call service to fetch self info-->
<rsb:call op="[service.getSelf]">
  <rsb:set item='self' copyfrom='_out1'/>
</rsb:call>
<rsb:call op="[service.getLocalSettings]">
  <rsb:set item='local' copyfrom='_out1'/>
</rsb:call>
<rsb:set attr="getarchive.TaskName" value="ArchiveLogs"/>
<rsb:call op="[service.getTask]" in="getarchive">
  <rsb:set item='archive' copyfrom='_out1'/>
</rsb:call>

<!-- import old smtp settings to the profile -->
<rsb:check attr="_profile.smtpserver_global">
  <rsb:else>
    <rsb:check attr="self.a2p:smtpserver">
      <rsb:set attr="_profile.smtpserver_global" value="[self.a2p:smtpserver]"/>
    </rsb:check>
  </rsb:else>
</rsb:check>
<rsb:check attr="_profile.smtpuser_global">
  <rsb:else>
    <rsb:check attr="self.a2p:smtpuser">
      <rsb:set attr="_profile.smtpuser_global" value="[self.a2p:smtpuser]"/>
    </rsb:check>
  </rsb:else>
</rsb:check>
<rsb:check attr="_profile.smtppassword_global">
  <rsb:else>
    <rsb:check attr="self.a2p:smtppassword">
      <rsb:set attr="_profile.smtppassword_global" value="[self.a2p:smtppassword]"/>
    </rsb:check>
  </rsb:else>
</rsb:check>
<rsb:check attr="_profile.[site.root]_emailto_global">
  <rsb:else>
    <rsb:check attr="self.a2p:Email">
      <rsb:set attr="_profile.[site.root]_emailto_global" value="[self.a2p:Email]"/>
    </rsb:check>
  </rsb:else>
</rsb:check>

<script type="text/javascript">
  function clickPaid() {
    var answer = confirm ("[lang.self_not_available_popup]");
    if (answer)	
      window.open('http://www.rssbus.com/order/'); 
  }
</script>

<rsb:set attr="tmp.alert" value="onclick='javascript:clickPaid();'"/>
<rsb:set attr="page.isPaid" value="[local.fa:errorcode | isless(1,'[tmp.alert]','')]" />
<div id="tabs" class="ui-tabs">
  <h3 class="infoNameDiv">
    <span>[lang.self]</span>
  </h3>
  <script language="javascript">
    var tabs = new Array('settings','advanced');

    var tabContent = new Array('psettings','padvanced');
  </script>
  
  <div class="trans tabs-container">
    <ul id="tabs-caption" class="ui-tabs-nav ui-widget-header">
      <li id="tabs-advanced" class="ui-state-default"><a href="#advanced">[lang.partner_advanced]</a></li>
      <li id="tabs-settings" class="ui-state-default ui-tabs-selected ui-state-active"><a href="#settings">[lang.partner_settings]</a></li>
    </ul>
  </div>

  <rsb:check item="selfUpdate" attr="a2p:warning#">
    <rsb:enum item="selfUpdate" attr="a2p:warning#">
      <span class="error">[_value]</span>
    </rsb:enum>
    
    <rsb:else>
      <rsb:check attr="selfUpdate.rss:title">
        <div class="correct" id="PersonalSuccess">[lang.self_successSaved]</div>
      </rsb:check>
    </rsb:else>
  </rsb:check>
  <rsb:check item="certpfxinfo" attr="fa:error">
    <span class="error">[certpfxinfo.fa:error]</span>
  </rsb:check>
  <rsb:check attr="local.fa:publicdomain">
    <rsb:set attr="page.publicdomain" value="[local.fa:publicdomain]"/>
    <rsb:else>
      <rsb:set attr="page.publicdomain" value="&amp;lt;domain name or ip address&amp;gt;"/>
    </rsb:else>
  </rsb:check>
  
  
  <form id="infoForm" method="post">
    <input type="hidden" name="urlHash" value=""/>
    <rsb:include file="[view.saveChanges]"/>
    
    <div id="psettings" class="config-section">
      
      <!--id & email-->
      <div id="localsetup" class="configInfo">
        <h3>[lang.selfTitle_localSetup]</h3>
        <table>
          <colgroup>
            <col width=""/>
            <col width="250px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_AS2Identifier]</span>
                <rsb:set attr="tooltip.message" value="If your organization requires the use of multiple AS2 Identifiers, you can configure a different AS2 Identifier for each partner in the Advanced section for that partner."/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td nowrap="">
                <input class="infoInput" value="[orgname | def('[self.a2p:orgname | def]') | htmlencode]" name="orgname" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_emailAddress]</span></td>
              <td>
                <input class="infoInput" value="[email | def('[self.a2p:email | def]')]" name="email" />
              </td>
              <td class="last" colspan="2"><em><span>[lang.self_required]</span></em></td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>Public Domain:</span>
                <rsb:set attr="tooltip.message" value="This should be set to the publicly accessible domain or IP address for your server."/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <input class="infoInput" value="[publicdomain | def('[local.fa:publicdomain | def]')]" name="prop:publicdomain" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--certificate-->
      <div class="configInfo" id="cpServerPrivCertificate">
        <h3>[lang.selfTitle_personalCertificate]</h3>
        
        <table width="100%">
          <colgroup>
            <col width="200px"/>
            <col width="250px"/>
            <col width="*"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td colspan="4">
                <rsb:check item="certpfxinfo" attr="fa:expdays">
                  <rsb:check item="certpfxinfo" attr="fa:subject">
                    <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span>[certpfxinfo.fa:subject | def('')]</span>
                  </rsb:check>
                  <span class="correct">[lang.certificateExpires | replace('{0}', '[certpfxinfo.fa:expdays]')]</span>
                </rsb:check>
                <rsb:check item="certpfxinfo" attr="fa:error">
                  <span class="error">[certpfxinfo.fa:error]</span>
                </rsb:check>
              </td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_privateCertificate]</span>
                <rsb:set attr="tooltip.message" value="[lang.self_personalCertificateInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <textarea id="profile_personal_privKey" class="infoInput long" name="certpfx">[self.a2p:certpfx | def('') | replace('[site.profilesPath]', '')]</textarea>
              </td>
              <td style="white-space: nowrap">
                <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#profile_personal_privKey');return false;"><span>[lang.importCertificate]</span></a>
                <a class="btn" href="javascript:void(0);" onclick="javascript:showCreateCert('#profile_personal_privKey', '#txtCertPassword', '#profile_personal_publicKey');return false;"><span>[lang.self_createCertificate]</span></a>
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_certificatePassword]</span></td>
              <td>
                <input type="password" value="[self.a2p:certpassword | def('','[site.passwordMask]')]" class="infoInput" name="certpassword" id="txtCertPassword" />
              </td>
              <td class="last"></td>
            </tr>
            <tr>
              <td colspan="3">
                <rsb:check item="publiccertinfo" attr="fa:subject">
                  <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span>[publiccertinfo.fa:subject | def('')]</span>
                </rsb:check>
                <rsb:check item="publiccertinfo" attr="fa:error">
                  <span class="error">[publiccertinfo.fa:error]</span>
                </rsb:check>
              </td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_publicKey]</span>
                <rsb:set attr="tooltip.message" value="[lang.self_publicKeyInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <textarea class="infoInput long" name="publiccert" id="profile_personal_publicKey">[self.a2p:publiccert | def('') | replace('[site.profilesPath]', '')]</textarea>
              </td>
              <td class="last">
                <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#profile_personal_publicKey');return false;"><span>[lang.importCertificate]</span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--async-->
      <div class="configInfo" id="cpAsynch">
        <h3>[lang.selfTitle_asynchronousReceipts]</h3>
        
        <table width="100%">
          <colgroup>
            <col width=""/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_asynchronousMDNURL]</span>
                <rsb:set attr="tooltip.message" value="[lang.self_asynchronousReceiptsInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td class="last">
                <input type="text" class="infoInput long" value="[self.a2p:asyncmdnurl | def('')]" name="asyncmdnurl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--application settings-->
      <div class="configInfo" id="cpAppSettingsReceiving">
        <h3>[lang.selfTitle_applicationSettings]</h3>

        <table>
          <colgroup>
            <col width=""/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_receivingURL]</span>
                <rsb:set attr="tooltip.message" value="[lang.self_applicationSettingsInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td class="last">
                <b><span>http://[page.publicdomain]:[_request.server:SERVER_PORT]/as2connector/pub/ReceiveFile.rsb</span></b>
              </td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_receivingURL_SSL | def("Receiving URL (SSL):")]</span>
              </td>
              <td class="last">
                <rsb:check attr="page.isPaid">
                  <span>[lang.self_SSL_unavailable | def('SSL is not available in the free version.')]</span>
                  <rsb:else>
                    <span>https://[page.publicdomain]:[_request.server:SERVER_PORT]/as2connector/pub/ReceiveFile.rsb</span>
                  </rsb:else>
                </rsb:check>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--public profile-->
      <div class="configInfo" id="cpPublicProfile">
        <h3>
          [lang.selfTitle_publicProfileSettings]
          <rsb:set attr="tooltip.message" value="[lang.self_publicProfileSettingsInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        
        <table>
          <colgroup>
            <col width=""/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td class="wholerow"><span class='formlabel'>[lang.self_publicUrl]</span></td>
              <td><b><span>http[_request.server:HTTPS | equals('OFF', '', 's')]://[page.publicdomain]:[_request.server:SERVER_PORT]/as2connector/pub/Public.rst</span></b></td>
            </tr>
            <tr>
              <td class="wholerow"><span class='formlabel'>[lang.self_localUrl]</span></td>
              <rsb:set item="page" attr="publicurl" value="pub/public.rst"/>
              <rsb:set item="page" attr="publicurl" value="[page.publicurl | tourl(false)]"/>
              <td><a href="pub/public.rst">[page.publicurl]</a></td>
            </tr>
            <tr>
              <td class="wholerow" colspan="2">
                <input type="checkbox"  name="enablepublicprofile" id="chkPublishProfile" [self.a2p:enablepublicprofile | def('') | toupper | equals("TRUE","checked='checked'","")] />
                <label for="chkPublishProfile"><span>[lang.self_chkPublishProfile]</span></label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <rsb:check value="[site.net]">
        <rsb:include file="appAccess.rst"/>
      </rsb:check>
      
    </div>
    
    <div id="padvanced" class="config-section" style="display: none;">
      <span class="small"><i>[lang.self_not_available_free]</i></span>
      
      <!--reliability-->
      <div id="reliability" class="configInfo">
        <h3>[lang.selfTitle_reliability]*</h3>
        
        <table>
          <tbody>
            <tr>
              <td class="wholerow" colspan="3">
                <input type="checkbox" name="isreliability" id="chkIsReliability" [self.a2p:isreliability | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid] />
                <label for="chkIsReliability"><span>[lang.self_chkIsReliability]</span></label>
                <rsb:set attr="tooltip.message" value="[lang.self_reliabilityInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--archiving-->
      <div id="archiving" class="configInfo">
        <h3>
          [lang.self_autoarchive]
          <rsb:set attr="tooltip.message" value="[lang.self_autoarchive_desc]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        
        <table>
          <colgroup>
            <col width="250px"/>
            <col width="250px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_autoarchive_log]</span>
              </td>
              <td>
                <rsb:check attr="archive.param:fileage">
                  <rsb:set attr="archiveinterval" value="[archive.param:fileage | regex('\[0-9\]*')]"/>
                </rsb:check>
                <input type="text" class="infoInput" value="[archiveinterval | def('30')]" name="archiveinterval" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--performance-->
      <div id="performance" class="configInfo">
        <h3>[lang.selfTitle_performance]*</h3>
        
        <table>
          <colgroup>
            <col width="250px"/>
            <col width="250px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <span class='formlabel'>Application Polling Interval:</span>
                <rsb:set attr="tooltip.message" value="The interval in which the application will perform scheduled tasks such as sending files to your trading partners. This value is specified in minutes."/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td class="last">
                <input class="infoInput" value="[_profile.as2connector_heartbeat_interval | def('1')]" name="heartbeatinterval">
              </td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>[lang.self_maxFiles]</span>
                <rsb:set attr="tooltip.message" value="[lang.self_maxFilesInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td class="last">
                <rsb:unset item="renderSelect" />
                <rsb:set attr="renderSelect.options#" value="5"/>
                <rsb:set attr="renderSelect.values#" value="5"/>
                <rsb:set attr="renderSelect.options#" value="10"/>
                <rsb:set attr="renderSelect.values#" value="10"/>
                <rsb:set attr="renderSelect.options#" value="20"/>
                <rsb:set attr="renderSelect.values#" value="20"/>
                <rsb:set attr="renderSelect.options#" value="50"/>
                <rsb:set attr="renderSelect.values#" value="50"/>
                <rsb:set attr="renderSelect.options#" value="100"/>
                <rsb:set attr="renderSelect.values#" value="100"/>
                <rsb:set attr="renderSelect.options#" value="Unlimited"/>
                <rsb:set attr="renderSelect.values#" value="-1"/>
                
                <rsb:set attr="renderSelect.id" value="prop_maxfilesperpartnerperthread" />
                <rsb:set attr="renderSelect.name" value="prop:maxfilesperpartnerperthread" />
                <rsb:set attr="renderSelect.selectedValue" value="[local.fa:maxfilesperpartnerperthread | def(5)]" />
                <rsb:set attr="renderSelect.isPaid" value="[page.isPaid]"/>
                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
            <tr>
              <td>
                <span class='formlabel'>
                  [lang.self_maxThreads]
                </span>
                <rsb:set attr="tooltip.message" value="[lang.self_maxThreadsInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <rsb:unset item="renderSelect" />
                <rsb:set attr="renderSelect.options#" value="1"/>
                <rsb:set attr="renderSelect.options#" value="5"/>
                <rsb:set attr="renderSelect.options#" value="10"/>
                <rsb:set attr="renderSelect.options#" value="20"/>
                
                <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
                <rsb:set attr="renderSelect.id" value="prop_maxconcurrentthreads" />
                <rsb:set attr="renderSelect.name" value="prop:maxconcurrentthreads" />
                <rsb:set attr="renderSelect.selectedValue" value="[local.fa:maxconcurrentthreads | def('1')]" />
                <rsb:set attr="renderSelect.isPaid" value="[page.isPaid]" />
                
                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!--advanced notifications-->
      <rsb:set attr="pg.notification">
        <tr>
          <td colspan="3">
           <input type="checkbox" name="propc:NotifyCertExpiry" id="chkNotifyCertExpiry" [local.fa:notifycertexpiry | def('') | toupper | equals("TRUE","checked='checked'","")] />
           <label for="chkNotifyCertExpiry"><span>[lang.self_chkNotifyCertExpiry]</span></label>
          </td>
        </tr>
      </rsb:set>
      <rsb:include file="[view.notification]"/>
      
      <!--custom headers-->
      <div class="configInfo" id="cpCustomHeaders">
        <h3 class='configInfo'>
          [lang.selfTitle_customHeaders]*
          <rsb:set attr="tooltip.message" value="[lang.self_customHeadersInfo1] [lang.self_customHeadersInfo2] %AS2To%, %AS2From%, %MessageID%, %FileName%, %ShortDate%, %LongDate%."/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        <table id="tbCustomHeader">
          <colgroup>
            <col width="250px"/>
            <col width="250px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr class="listHeader">
              <td><span>[lang.self_customHeaders_name]</span></td>
              <td colspan="2"><span>[lang.self_customHeaders_value]</span></td>
            </tr>
            <tr id="tpCustomHeader" class="hide">
              <td>
                <input type="text" class="infoInput" name="headername#" value="" [page.isPaid]/>
              </td>
              <td>
                <input type="text" class="infoInput" name="headervalue#" value="" [page.isPaid]/>
              </td>
              <td>
                <a href="javascript:void(0);" onclick="javascript:removeRow($(this));return false;">\[x\]</a>
              </td>
            </tr>
            <rsb:enum item="self" attr="a2p:headername#">
              <tr>
                <td>
                  <input type="text" class="infoInput" name="headername#[_index]" value="[self.a2p:headername#[_index]]" />
                </td>
                <td>
                  <input type="text" class="infoInput" name="headervalue#[_index]" value="[self.a2p:headervalue#[_index]]" />
                </td>
                <td>
                  <a href="javascript:void(0);" onclick="javascript:removeRow($(this));return false;">\[x\]</a>
                </td>
              </tr>
            </rsb:enum>
          </tbody>
        </table>
        <a href="javascript:void(0);" onclick="javascript:addRow('tbCustomHeader','tpCustomHeader');return false;">
          <span class="small" id='AddHeader'>\[[lang.self_addHeader]\]</span>
        </a>
      </div>
      
      <!--firewall settings-->
      <div class="configInfo" id="cpFirewall">
        <h3 class='configInfo'>[lang.selfTitle_proxySettings]*</h3>
        <table>
          <colgroup>
            <col width="250px"/>
            <col width="250px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyType]</span></td>
              <td class="last">
                <rsb:unset item="renderSelect" />
                <rsb:set attr="renderSelect.options#" value="None"/>
                <rsb:set attr="renderSelect.options#" value="Tunnel"/>
                <rsb:set attr="renderSelect.options#" value="SOCKS4"/>
                <rsb:set attr="renderSelect.options#" value="SOCKS5"/>
                <rsb:set attr="renderSelect.options#" value="HTTP"/>
                
                <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
                <rsb:set attr="renderSelect.id" value="fwtype" />
                <rsb:set attr="renderSelect.name" value="fwtype" />
                <rsb:set attr="renderSelect.selectedValue" value="[self.a2p:fwtype | def]" />
                <rsb:set attr="renderSelect.isPaid" value="[page.isPaid]" />
                
                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyHost]</span></td>
              <td class="last">
                <input type="text" class="infoInput" value="[self.a2p:fwhost | def('')]" name="fwhost" [page.isPaid] />
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyPort]</span></td>
              <td class="last">
                <input type="text" class="infoInput" value="[self.a2p:fwport | def('')]" name="fwport" [page.isPaid] />
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyUser]</span></td>
              <td class="last">
                <input type="text" class="infoInput" value="[self.a2p:fwuser | def('')]" name="fwuser" [page.isPaid] />
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyPassword]</span></td>
              <td class="last">
                <input type="password" value="[self.a2p:fwpassword | def('')]" class="infoInput" name="fwpassword" [page.isPaid] />
              </td>
            </tr>
            <tr>
              <td><span class='formlabel'>[lang.self_proxyAuthScheme]</span></td>
              <td class="last">
                <rsb:unset item="renderSelect" />
                <rsb:set attr="renderSelect.options#" value="None"/>
                <rsb:set attr="renderSelect.options#" value="Basic"/>
                <rsb:set attr="renderSelect.options#" value="Digest"/>
                <rsb:set attr="renderSelect.options#" value="NTLM"/>
                
                <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
                <rsb:set attr="renderSelect.id" value="pxauthscheme" />
                <rsb:set attr="renderSelect.name" value="pxauthscheme" />
                <rsb:set attr="renderSelect.selectedValue" value="[self.a2p:pxauthscheme | def]" />
                <rsb:set attr="renderSelect.isPaid" value="[page.isPaid]" />
                
                <rsb:match pattern="[self.a2p:fwtype | def]" value="http">
                  <rsb:set attr="renderSelect.isDisabled" value="false"/>
                  <rsb:else>
                    <rsb:set attr="renderSelect.isDisabled" value="true"/>
                    <rsb:set attr="renderSelect.selectedValue" value="Basic"/>
                  </rsb:else>
                </rsb:match>
                
                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
            <script type="text/javascript">
              $(function() {
                /*
                1) Proxy Authentication Scheme only works if Proxy Type set to HTTP.
                2) Proxy Authentication Scheme default value is "Basic".
                3) Proxy Authentication Scheme selected to "None" disable the User and Password fields.
                */
              
                var _fwuser = $("input\[name=fwuser\]");
                var _fwpassword = $("input\[name=fwpassword\]");
                var _fwtype = $("#fwtype");
                var _pxauthscheme = $("#pxauthscheme");
              
                _fwtype.bind("change" ,function(){
                  if(_fwtype.val() == "HTTP") {
                    _pxauthscheme.removeAttr("disabled");
                  } else {
                    _pxauthscheme.attr("disabled", "disabled").val("Basic");
                    _fwuser.removeAttr("disabled");
                    _fwpassword.removeAttr("disabled");
                  }
                });
                
                _pxauthscheme.bind("change" ,function(){
                  if(_pxauthscheme.val() == "None") {
                    _fwuser.val("").attr("disabled", "disabled");
                    _fwpassword.val("").attr("disabled", "disabled");
                  } else {
                    _fwuser.removeAttr("disabled");
                    _fwpassword.removeAttr("disabled");
                  }
                });
              });
            </script>
          </tbody>
        </table>
      </div>
      
      <!--Advanced Configurations-->
      <div id="configs" class="configInfo">
        <h3 class='configInfo'>
          [lang.selfTitle_otherSettings]
          <rsb:set attr="tooltip.message" value="[lang.self_otherSettings]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        
        
        <rsb:set attr="info.name" value="[pubservice.SetLocalSettings]"/>
        <rsb:set attr="info.type" value="input"/>
        <rsb:call op="rsbGetInfo" in="info" save="localfeed">
          <span id="desc-[info:name]" class="hide">[info:description]</span>
        </rsb:call>
        <rsb:call op="rsbGetInfo?name=[pubservice.SetPersonalProfile]" save="personalfeed">
          <rsb:equals attr="info:type" value="input">
            <span id="desc-[info:name]" class="hide">[info:description]</span>
          </rsb:equals>
        </rsb:call>
        <rsb:set attr="concat.feed#" value="[_feeds.localfeed]"/>
        <rsb:set attr="concat.feed#" value="[_feeds.personalfeed]"/>
        <rsb:call op="feedConcat" in="concat" save="catfeed"/>
        <rsb:set attr="sort.feed" value="[_feeds.catfeed]"/>
        <rsb:set attr="sort.sort" value="info:name"/>
        <rsb:call op="feedSort" in="sort" save="sortfeed"/>
        <rsb:set attr="search.feed" value="[_feeds.sortfeed]"/>
        <rsb:set attr="search.scheme" value="REGEX"/>
        <rsb:set attr="search.attrs" value="info:name"/>
        <rsb:set attr="search.query" value="AllowNonFIPSCompliantAlgorithms|ExtensionMap|Localhost|LogDebug|NotifyStopStart|PublicProfileBanner"/>
        <rsb:call op="feedSearch" in="search" save="searchfeed"/>
        
        <table id="otherSettings">
          <colgroup>
            <col width="250px" />
            <col width="250px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <rsb:call op="[_feeds.searchfeed]">
              <tr>
                <td>
                  <span class='formlabel'>
                    [info:name]
                  </span>
                  <rsb:set attr="tooltip.message" value="[info:description]"/>
                  <rsb:include file="[ui.toolTips:bubble]" />
                </td>
                <td>
                  <rsb:equals attr="feed:title" value="Set Personal Profile">
                    <rsb:set attr="tmp.value" value="[self.a2p:[info:name | tolower] | def('')]"/>
                    <rsb:set attr="tmp.name" value="[info:name | tolower]"/>
                    <rsb:else>
                      <rsb:set attr="tmp.value" value="[local.fa:[info:name | tolower] | def('')]"/>
                      <rsb:set attr="tmp.name" value="prop:[info:name | tolower]"/>
                    </rsb:else>
                  </rsb:equals>
                  <rsb:check attr="info:value#">
                    <rsb:unset item="renderSelect" />
                    <rsb:set attr="renderSelect.values#" />
                    <rsb:set attr="renderSelect.options#" value="[lang.self_notSpecified]" />
                    
                    <rsb:enum attr="info:value">
                      <rsb:set attr="renderSelect.values#"  value="[_value]" /> 
                      <rsb:set attr="renderSelect.options#" value="[_value]" /> 
                    </rsb:enum>
                    
                    <rsb:set attr="renderSelect.id" value="[tmp.name | replace(':','_')]" />
                    <rsb:set attr="renderSelect.name" value="[tmp.name]" />
                    <rsb:set attr="renderSelect.selectedValue" value="[tmp.value]" />
                    
                    <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
                    
                    <rsb:else>
                      <input type="text" class="infoInput" value="[tmp.value]" name="[tmp.name]">
                    </rsb:else>
                  </rsb:check>
                </td>
              </tr>
            </rsb:call>
          </tbody>
        </table>
      </div>
    
      <br/>
      <span class="small"><i>[lang.self_not_available_free]</i></span>
      
    </div>
  </form>
</div>