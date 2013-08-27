<rsb:check attr="_session.[site.supportPartnerType]currentpartner">
  <rsb:else>
    <script language="javascript">
      uncheckUnsave = true;
    </script>
  </rsb:else>
</rsb:check>

<!--download files-->
<rsb:check attr="download">
  <rsb:call op="[service.ftpReceiveFile]">
    <rsb:set item="receive" copyfrom="_out1"/>
  </rsb:call>
</rsb:check>

<form id="infoForm" method="post">
  <input type="hidden" name="urlHash" value=""/>
  <input type="hidden" name="save" value="True" />
  <input type="hidden" name="type" value="FTP" />
  <input type="hidden" name="orgname" value="[orgname | def('') | htmlencode]" />
  <rsb:check attr="newPartner">
    <input type="hidden" name="AddPartner" value="True" />
  </rsb:check>
  
  <div id="psettings" class="config-section" style="display: none;">
    <rsb:check item="update" attr="a2p:warning#">
      <rsb:enum item="update" attr="a2p:warning#">
        <span class="error">[_value]</span>
      </rsb:enum>
      
      <rsb:else>
        <rsb:check attr="update.rss:title">
          <br/>
          <div class="correct" id="PartnerSuccess">[lang.partner_successSaved]</div>
        </rsb:check>
      </rsb:else>
    </rsb:check>
        
    <rsb:include file="[view.saveChanges]"/>
    
    <!--trading partner info-->
    <div id="partnerinfo" class="configInfo">
      <rsb:check attr="newPartner">
        <h3 class='configInfo'>[lang.partnerTitle_addNew]</h3>
        <rsb:else>
          <h3 class='configInfo'>[lang.ftp_partnerTitle_tradingPartner]</h3>
        </rsb:else>
      </rsb:check>
      
      <table class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.ftp_partner_organizationName]</span>
            </td>
            <td>
              <rsb:check attr="_session.[site.supportPartnerType]currentpartner">
                <input type="text" readonly="readonly" class="infoInput" value="[partner.a2p:orgname | def('') | htmlencode]" name="neworgname" />
                <rsb:else>
                  <input type="text" class="infoInput" value="[partner.a2p:orgname | def('') | htmlencode]" name="neworgname" />
                </rsb:else>
              </rsb:check>
            </td>
            <td><i>[lang.required]</i></td>
          </tr>
          <tr>
            <td><span class='requiredParam formlabel'>[lang.ftpPartner_remoteHost]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpremotehost | def('')]" name="ftpremotehost"/>
            </td>
            <td><i>[lang.required]</i></td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.ftpPartner_port]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpport | def('21')]" name="ftpport"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.ftpPartner_user]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpuser | def('')]" name="ftpuser"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.ftpPartner_password]</span>
            </td>
            <td>
              <input type="password"  class="infoInput" maxlength="128" value="[partner.a2p:ftppassword | def('','[site.passwordMask]')]" name="ftppassword" autocomplete="off"/>
            </td>
          </tr>
        </tbody>  
      </table>
    </div>
    
    <!--action-->
    <rsb:include file="[view.ftpActions]"/>

    <!--automation-->
    <rsb:include file="[view.automation]"/>
    
    <!--ssl-->
    <div id="sslsettings" class="configInfo">
      <h3 class='configInfo'>[lang.ftpPartnerTitle_SSLSettings]</h3>
      <table class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td><span class="formlabel">[lang.ftpPartner_SSLType]</span></td>
            <td>
              <table border="0" id="_ctl3_cDynControl_rblSSLMode">
                <tbody>
                  <tr>
                    <td>
                      <input type="radio" value="None" name="ftpssltype" id="rblSSLMode_0" [partner.a2p:ftpssltype | def('None') | toupper | equals("NONE","checked='checked'","")] />
                      <label for="rblSSLMode_0">[lang.ftpPartner_SSLType_none]</label>
                    </td>
                    <td>
                      <input type="radio" value="Explicit" name="ftpssltype" id="rblSSLMode_1" [partner.a2p:ftpssltype | def('None') | toupper | equals("EXPLICIT","checked='checked'","")] />
                      <label for="rblSSLMode_1">[lang.ftpPartner_SSLType_explicit]</label>
                    </td>
                    <td>
                      <input type="radio" value="Implicit" name="ftpssltype" id="rblSSLMode_2" [partner.a2p:ftpssltype | def('None') | toupper | equals("IMPLICIT","checked='checked'","")] />
                      <label for="rblSSLMode_2">[lang.ftpPartner_SSLType_implicit]</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table>
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>          
          <tr>
            <td colspan="2">
              <rsb:check item="ftpsslservercertinfo" attr="fa:subject">
                <span class="correct hiddenlabel"><span class='correct' id='CertSubject'>[lang.certificateSubject]</span>  [ftpsslservercertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="ftpsslservercertinfo" attr="fa:error">
                <span class="error hiddenlabel">[ftpsslservercertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="formlabel" id="ftppartner_lsslservercert">
                [lang.ftpPartner_SSLAcceptCert]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.ftpPartner_SSLAcceptCertInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="ftpsslservercert" id="ftppartner_cert_sslKey">[partner.a2p:ftpsslservercert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td class="last">
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#ftppartner_cert_sslKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>    

  <div id="padvanced" class="config-section" style="display: none;">
    
    <rsb:check item="update" attr="a2p:warning#">
      <rsb:enum item="update" attr="a2p:warning#">
        <span class="error">[_value]</span>
      </rsb:enum>
      
      <rsb:else>
        <rsb:check attr="update.rss:title">
          <br/>
          <div class="correct" id="PartnerSuccess">[lang.partner_successSaved]</div>
        </rsb:check>
      </rsb:else>
    </rsb:check>
        
    <rsb:include file="[view.saveChanges]"/>
    
    <!--fips-->
    <rsb:equals attr="site.java" value="false">
      <div id="fips" class="configInfo">
        <h3>
          [lang.ftpPartnerTitle_FIPSCompliance]
          <rsb:set attr="tooltip.message" value="[lang.ftpPartner_FIPSComplianceInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        
        <table class="ca-props">
          <tbody>
            <tr>
              <td class="wholerow" colspan="3">
                <input type="checkbox" name="forcefipscompliance" id="cDynControl_chkForceFIPSCompliance" [partner.a2p:forcefipscompliance | def('') | toupper | equals("TRUE","checked='checked'","")]/>
                <label for="cDynControl_chkForceFIPSCompliance">[lang.ftpPartner_chkForceFIPSCompliance]</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </rsb:equals>
    
    <!--ssl client-->
    <div id="sslclient" class="configInfo">
      <h3>  
        [lang.ftpPartnerTitle_SSLClientAuthentication]
        <rsb:set attr="tooltip.message" value="[lang.ftpPartner_SSLClientAuthenticationInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      <table id="cpSSLClientCert">
        <colgroup>
          <col width="250px"/>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <rsb:check item="sslclientcertinfo" attr="fa:expdays">
                <rsb:check item="sslclientcertinfo" attr="fa:subject">
                  <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [sslclientcertinfo.fa:subject | def('')]</span>
                </rsb:check>
                <span class="correct">[lang.certificateExpires | replace('{0}', '[sslclientcertinfo.fa:expdays]')]</span>
              </rsb:check>
              <rsb:check item="sslclientcertinfo" attr="fa:error">
                <span class="error">[sslclientcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="requiredParam"><span class='formlabel'>[lang.ftpPartner_privateCertificate]</span></span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="sslclientcertfile" id="partner_ssl_privKey">[partner.a2p:sslclientcertfile | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_ssl_privKey', '');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.ftpPartner_certificatePassword]</span></td>
            <td>
              <input type="password" class="infoInput" name="sslclientcertpwd" value="[partner.a2p:sslclientcertpwd | def('','[site.passwordMask]')]" autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--sync-->
    <rsb:include file="[view.sync]"/>
    
    <!--commands-->
    <rsb:include file="[view.commands]"/>

    <!--Advanced Configurations-->
    <div id="configs" class="configInfo">
      <h3 class='configInfo'>
        [lang.ftpPartnerTitle_otherSettings]
        <rsb:set attr="tooltip.message" value="[lang.ftpPartner_otherSettingsInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      
      <rsb:set attr="info.name" value="[pubservice.SetFTPHost]"/>
      <rsb:set attr="info.type" value="input"/>
      <rsb:call op="rsbGetInfo" in="info" save="partnerfeed">
        <span id="desc-[info:name]" class="hide">[info:description]</span>
      </rsb:call>
      <rsb:set attr="sort.feed" value="[_feeds.partnerfeed]"/>
      <rsb:set attr="sort.sort" value="info:name"/>
      <rsb:call op="feedSort" in="sort" save="sortfeed"/>
      <rsb:set attr="search.feed" value="[_feeds.sortfeed]"/>
      <rsb:set attr="search.scheme" value="REGEX"/>
      <rsb:set attr="search.attrs" value="info:name"/>
      <rsb:set attr="search.query" value="Active|ActiveModePORTAddress|AfterConnect|AfterGet|AfterPut|BeforeGet|BeforePut|LocalFileScheme|PortRange|TempDownloadExtension|TempDownloadPath|TempExtension|TempPath|UseClearDataChannel|UseClearChannel|UseEPSV|UseFSwitch|UseProtWhenImplicit|UseRemoteHostAddressForPassive|UseSimpleDirList|RecurseSubDirectories"/>
      <rsb:call op="feedSearch" in="search" save="searchfeed"/>
      
      <table class="ca-props">
        <colgroup>
          <col width="250px" />
          <col width="200px" />
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
                <rsb:check attr="info:value#">
                  <rsb:unset item="renderSelect" />
                  <rsb:set attr="renderSelect.values#" />
                  <rsb:set attr="renderSelect.options#" value="[lang.ftpPartner_notSpecified]" />
                  
                  <rsb:enum attr="info:value">
                    <rsb:set attr="renderSelect.values#"  value="[_value]" /> 
                    <rsb:set attr="renderSelect.options#" value="[_value]" /> 
                  </rsb:enum>
                  
                  <rsb:set attr="renderSelect.id" value="[info:name | replace(':','_')]" />
                  <rsb:set attr="renderSelect.name" value="[info:name | tolower]" />
                  <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:[info:name | tolower] | def('')]" />
                  
                  <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
                  
                  <rsb:else>
                    <rsb:check attr="info:style">
                      <rsb:select value="[info:style | tolower]">
                        <rsb:case value="textarea">
                          <textarea class="infoInput" name="[info:name | tolower]">[partner.a2p:[info:name | tolower] | def('')]</textarea>
                        </rsb:case>
                      </rsb:select>
    
                      <rsb:else>
                        <input type="text" class="infoInput" value="[partner.a2p:[info:name | tolower] | def('')]" name="[info:name | tolower]">
                      </rsb:else>
                    </rsb:check>
                  </rsb:else>
                </rsb:check>
              </td>
            </tr>
          </rsb:call>
        </tbody>
      </table>
    </div>
    
  </div>
  
</form>
