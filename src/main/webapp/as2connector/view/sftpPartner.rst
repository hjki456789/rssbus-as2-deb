<rsb:check attr="_session.[site.supportPartnerType]currentpartner">
<rsb:else>
  <script language="javascript">
    uncheckUnsave= true;
  </script>
</rsb:else>
</rsb:check>

<!--download files-->
<rsb:check attr="download">
  <rsb:call op="[service.sftpReceiveFile]">
    <rsb:set item="receive" copyfrom="_out1"/>
  </rsb:call>
</rsb:check>

<form id="infoForm" method="post">
  <input type="hidden" name="urlHash" value=""/>
  <input type="hidden" name="save" value="True" />
  <input type="hidden" name="type" value="SFTP" />
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
        <h3>[lang.partnerTitle_addNew]</h3>
        <rsb:else>
          <h3>[lang.sftp_partnerTitle_tradingPartner]</h3>
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
              <span class='requiredParam formlabel'>[lang.sftp_partner_organizationName]</span>
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
            <td><span class='requiredParam formlabel'>[lang.sftpPartner_remoteHost]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpremotehost | def('')]" name="ftpremotehost"/>
            </td>
            <td><i>[lang.required]</i></td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.sftpPartner_port]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpport | def('22')]" name="ftpport"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <!-- authentication -->
    <div id="authentication" class="configInfo">
      <h3>[lang.sftpPartnerTitle_clientAuthentication]</h3>
      <table class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td><span class="formlabel translatable" id="SFTPPartnerForm.lAuthMode">[lang.sftpPartner_authenticationMode]</span></td>
            <td>
              <rsb:unset item="renderSelect" />
              <rsb:set attr="renderSelect.values#">2</rsb:set>
              <rsb:set attr="renderSelect.values#">3</rsb:set>
              <rsb:set attr="renderSelect.values#">1</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.sftpPartner_authenticationMode_password]</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.sftpPartner_authenticationMode_publicKey]</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.sftpPartner_authenticationMode_multipleFactor]</rsb:set>
              <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:authmode | def(2)]" />
              <rsb:set attr="renderSelect.id" value="authmode" />
              <rsb:set attr="renderSelect.name" value="authmode" />
              
              <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span class="formlabel translatable" id="SFTPPartnerForm.lUser">[lang.sftpPartner_user]</span></td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftpuser | def('')]" name="ftpuser"/>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span class="formlabel translatable" id="SFTPPartnerForm.lPass">[lang.sftpPartner_password]</span></td>
            <td>
              <input type="password" value="[partner.a2p:ftppassword | def('','[site.passwordMask]')]" class="infoInput" maxlength="128" name="ftppassword" autocomplete="off"/>
            </td>
            <td class="last"></td>
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
            <td colspan="3">
              <rsb:check item="sshclientcertinfo" attr="fa:expdays">
                <rsb:check item="sshclientcertinfo" attr="fa:subject">
                  <span class="correct"><span class='translatable' id='CertSubject'>[lang.certificateSubject]</span> [sshclientcertinfo.fa:subject | def('')]</span>
                </rsb:check>
                <span class="correct">[lang.certificateExpires1 | def('')][sshclientcertinfo.fa:expdays][lang.certificateExpires2 | def('')]</span>
              </rsb:check>
              <rsb:check item="sshclientcertinfo" attr="fa:error">
                <span class="error">[sshclientcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="formlabel translatable" id="SFTPPartnerForm.lSSHPublicKeyFile">
                [lang.sftpPartner_privateCertificate]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.sftpPartner_SSHPublicKeyInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="sshclientcert" id="partner_ssh_privKey">[partner.a2p:sshclientcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_ssh_privKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td><span class="formlabel translatable" id="SFTPPartnerForm.lSSHPublicKeyPassword">[lang.sftpPartner_certificatePassword]</span></td>
            <td>
              <input type="password" value="[partner.a2p:sshclientcertpassword | def('','[site.passwordMask]')]" class="infoInput" name="sshclientcertpassword" autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="configInfo">
      <h3>[lang.sftpPartnerTitle_serverAuthentication]</h3>
      
      <table>
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <rsb:check item="serverhostkeyinfo" attr="fa:subject">
                <span class="correct hiddenlabel">[serverhostkeyinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="serverhostkeyinfo" attr="fa:error">
                <span class="error hiddenlabel">[serverhostkeyinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="formlabel requiredParam">
                [lang.sftpPartner_serverPublicKey]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.sftpPartner_serverAuthenticationInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="serverhostkey" id="sftppartner_cert_sslKey">[partner.a2p:serverhostkey | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#sftppartner_cert_sslKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <!--action-->
    <rsb:include file="[view.ftpActions]"/>

    <!--automation-->
    <rsb:include file="[view.automation]"/>
    
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
        <h3>[lang.ftpPartnerTitle_FIPSCompliance]</h3>
        
        <table class="ca-props">
          <tbody>
            <tr>
              <td class="wholerow" colspan="3">
                <input type="checkbox" name="forcefipscompliance" id="cDynControl_chkForceFIPSCompliance" [partner.a2p:forcefipscompliance | def('') | toupper | equals("TRUE","checked='checked'","")] />
                <label for="cDynControl_chkForceFIPSCompliance">
                  [lang.ftpPartner_chkForceFIPSCompliance]
                </label>
                <rsb:set attr="tooltip.message" value="[lang.ftpPartner_FIPSComplianceInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </rsb:equals>

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
      
      
      <rsb:set attr="info.name" value="[pubservice.SetSFTPHost]"/>
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
      <rsb:set attr="search.query" value="AfterConnect|AfterGet|AfterPut|BeforeGet|BeforePut|LocalFileScheme|TempDownloadExtension|TempDownloadPath|TempExtension|TempPath|RecurseSubDirectories|SSHEncryptionAlgorithms"/>
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