<rsb:check attr="_session.[site.supportPartnerType]currentpartner">
<rsb:else>
  <script language="javascript">
    uncheckUnsave= true;
  </script>
</rsb:else>
</rsb:check>

<!--download files-->
<rsb:check attr="download">
  <rsb:call op="[service.receiveFile]">
    <rsb:set item="receive" copyfrom="_out1"/>
  </rsb:call>
</rsb:check>

<form id="infoForm" method="post">
  <rsb:set attr="page.disablePath" value="true"/>
  
  <input type="hidden" name="urlHash" value=""/>
  <input type="hidden" name="save" value="True" />
  <input type="hidden" name="type" value="OFTP" />
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
          <h3 class='configInfo'>[lang.oftp_partnerTitle_tradingPartner]</h3>
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
              <span class='requiredParam formlabel'>[lang.oftp_partner_organizationName]</span>
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
            <td>
              <span class='requiredParam formlabel'>[lang.ftpPartner_remoteHost]</span>
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
              <input type="text" class="infoInput" value="[partner.a2p:ftpport | def('3305')]" name="ftpport"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel' id='Version'>[lang.oftpPartner_version]</span>
            </td>
            <td>
              <rsb:unset item="renderSelect" />
              
              <rsb:set attr="renderSelect.id" value="oftpversion" />
              <rsb:set attr="renderSelect.name" value="oftpversion" />
              
              <rsb:set attr="renderSelect.values#">0</rsb:set>
              <rsb:set attr="renderSelect.options#">1.2</rsb:set>
              
              <rsb:set attr="renderSelect.values#">1</rsb:set>
              <rsb:set attr="renderSelect.options#">1.3</rsb:set>
              
              <rsb:set attr="renderSelect.values#">2</rsb:set>
              <rsb:set attr="renderSelect.options#">1.4</rsb:set>
              
              <rsb:set attr="renderSelect.values#">3</rsb:set>
              <rsb:set attr="renderSelect.options#">2.0</rsb:set>
              
              <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:oftpversion | def(3)]" />
              
              <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.oftpPartner_serverSSID]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:serverssidcode | def('')]" name="serverssidcode"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.oftpPartner_serverPassword]</span>
            </td>
            <td>
              <input type="password" value="[partner.a2p:serverpassword | def('','[site.passwordMask]')]" class="infoInput" maxlength="128" name="serverpassword" autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--connection info -->
    <div id="connectioninfo" class="configInfo">
      <h3>
        [lang.oftpPartnerTitle_connectionInfo]
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_connectionInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>

      <table id="tblConnInfo" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <span class='formlabel'>[lang.oftpPartner_virtualFileFormat]</span>
              <rsb:set attr="tooltip.message" value="[lang.oftpPartner_virtualFileFormatInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <rsb:unset item="renderSelect" />
              
              <rsb:set attr="renderSelect.id" value="virtualfileformat" />
              <rsb:set attr="renderSelect.name" value="virtualfileformat" />
              
              <rsb:set attr="renderSelect.values#">0</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.oftpPartner_virtualFileFormat_unstructured]</rsb:set>
              
              <rsb:set attr="renderSelect.values#">1</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.oftpPartner_virtualFileFormat_text]</rsb:set>
              
              <rsb:set attr="renderSelect.values#">2</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.oftpPartner_virtualFileFormat_fixed]</rsb:set>
              
              <rsb:set attr="renderSelect.values#">3</rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.oftpPartner_virtualFileFormat_variable]</rsb:set>
              
              <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:virtualfileformat | def(0)]" />
              
              <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
            </td>
            <td class="last"></td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.oftpPartner_virtualFileSecurity]</span></td>
            <td>
              <input type="checkbox" name="signoutgoing" id="chkSign" [partner.a2p:signoutgoing | def('True') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkSign"><span>[lang.oftpPartner_virtualFileSecurity_signOutgoing]</span></label>
            </td>
            <td class="last">
              <input type="checkbox" name="encryptoutgoing" id="chkEncrypt" [partner.a2p:encryptoutgoing | def('True') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkEncrypt"><span>[lang.oftpPartner_virtualFileSecurity_encryptOutgoing]</span></label>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.oftpPartner_compression]</span></td>
            <td class="last" colspan="2">
              <input type="checkbox" name="compressoutgoing" id="chkCompression" [partner.a2p:compressoutgoing | def('') | toupper | equals("TRUE","checked='checked'","")] />
            <label for="chkCompression"><span>[lang.oftpPartner_compression_compressOutgoing]</span></label>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <input type="checkbox" name="usessl" id="cDynControl_chkUseSSL" [partner.a2p:usessl | def('') | toupper | equals("TRUE","checked='checked'","")]/>
              <label for="cDynControl_chkUseSSL">[lang.oftpPartner_chkUseSSL]</label>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table id="tblConnInfo" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <input type="checkbox" name="secureauthentication" id="cDynControl_chkSecureAuthentication" [partner.a2p:secureauthentication | def('') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="cDynControl_chkSecureAuthentication">
                [lang.oftpPartner_chkSecureAuthentication]
              </label>
              <rsb:set attr="tooltip.message" value="[lang.oftpPartner_secureAuthInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
          </tr>						
        </tbody>
      </table>
      
      <table id="tblConnInfo" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <input type="checkbox" name="signedreceipt" id="cDynControl_chkSignedReceipt" [partner.a2p:signedreceipt | def('') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="cDynControl_chkSignedReceipt">
                [lang.oftpPartner_chkSignedReceipt]
              </label>
              <rsb:set attr="tooltip.message" value="[lang.oftpPartner_signedReceiptInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
          </tr>						
        </tbody>
      </table>

      <table id="tblConnInfo" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <input type="checkbox" name="ftpoverwritelocal" id="chkOverwriteDownload" [partner.a2p:ftpoverwritelocal | def('False') | toupper | equals("TRUE","checked='checked'","")]/>
              <label for="chkOverwriteDownload">[lang.ftpDownload_chkOverwriteDownload]</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
		
    <!--certificates-->
    <div id="certificates" class="configInfo">
      <h3>
        [lang.oftpPartnerTitle_tradingPartnerCertificates]
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_tradingPartnerCertificatesInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      <table>
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <rsb:check item="encryptcertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [encryptcertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="encryptcertinfo" attr="fa:error">
                <span class="error">[encryptcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.oftpPartner_encryptionCertificate]</span>
              <rsb:set attr="tooltip.message" value="[lang.oftpPartner_encryptionCertificateInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="encryptcert" id="partner_cert_encrKey">[partner.a2p:encryptcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_encrKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
      
          <tr>
            <td colspan="3">
              <rsb:check item="sslacceptcertinfo" attr="fa:subject">
                <span class="correct"><span class='correct' id='CertSubject'>[lang.certificateSubject]</span> [sslacceptcertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="sslacceptcertinfo" attr="fa:error">
                <span class="error">[sslacceptcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="formlabel requiredParam">
                [lang.oftpPartner_SSLServerCertificate]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.oftpPartner_tradingSSLInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="sslacceptcert" id="partner_cert_sslKey">[partner.a2p:sslacceptcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_sslKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- routing -->
    <div id="routing" class="configInfo">
      <h3>
        [lang.oftpPartner_Routing]
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_RoutingInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      <table class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <span class="formlabel requiredParam">
                [lang.oftpPartner_routingGatewayPartner]
              </span>
            </td>
            <td>
              <rsb:unset item="renderSelect" />
              <rsb:set attr="renderSelect.id" value="routingpartner" />
              <rsb:set attr="renderSelect.name" value="routingpartner" />
              <rsb:set attr="renderSelect.values#"></rsb:set>
              <rsb:set attr="renderSelect.options#">[lang.ftpPartner_notSpecified]</rsb:set>
              <rsb:call op="[service.listPartners]">
                <rsb:check attr="orgname">
                  <rsb:equals attr="a2p:orgname" value="[orgname]">
                    <rsb:else>
                      <rsb:set attr="check.canAdd" value="true"/>
                      <rsb:set attr="checkid.orgname" value="[a2p:orgname]"/>
                      <rsb:call op="[service.getPartner]" input="checkid" output="checkre">
                        <rsb:check attr="checkre.a2p:serverssidcode">
                          <rsb:equals attr="checkre.a2p:serverssidcode" value="[self.a2p:clientssidcode]">
                            <rsb:set attr="check.canAdd" value="false"/>
                          </rsb:equals>
                        </rsb:check>
                      </rsb:call>
                      <rsb:equals attr="check.canAdd" value="true">
                        <rsb:set attr="renderSelect.values#">[a2p:orgname | htmldecode]</rsb:set>
                        <rsb:set attr="renderSelect.options#">[a2p:orgname | htmldecode]</rsb:set>
                      </rsb:equals>
                    </rsb:else>
                  </rsb:equals>
                </rsb:check>
              </rsb:call>
              <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:routingpartner | def(0)]" />
              <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
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
    
    <!--optional certificates-->
    <div id="certificates" class="configInfo">
      <h3>
        Optional Certificates (PEM/CER Format)
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_tradingPartnerCertificatesInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      <table>
        <colgroup>
          <col width="250px"/>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td colspan="3">
              <rsb:check item="authchallengecertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [authchallengecertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="authchallengecertinfo" attr="fa:error">
                <span class="error">[authchallengecertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.oftpPartner_authChallengeCertificate]</span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="authchallengecert" id="partner_cert_authKey">[partner.a2p:authchallengecert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_authKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <rsb:check item="signcertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [signcertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="signcertinfo" attr="fa:error">
                <span class="error">[signcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.oftpPartner_verificationCertificate]</span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="signcert" id="partner_cert_verKey">[partner.a2p:signcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_verKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          
          <tr>
            <td colspan="3">
              <rsb:check item="receiptsigncertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [receiptsigncertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="receiptsigncertinfo" attr="fa:error">
                <span class="error">[receiptsigncertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.oftpPartner_receiptVerificationCertificate]</span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="receiptsigncert" id="partner_cert_receiptKey">[partner.a2p:receiptsigncert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_receiptKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>

          <tr>
            <td colspan="3">
              <rsb:check item="rollovercertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [rollovercertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="rollovercertinfo" attr="fa:error">
                <span class="error">[rollovercertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>Rollover Certificate:</span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="rollovercert" id="partner_cert_rolloverKey">[partner.a2p:rollovercert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_rolloverKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>

          <tr>
            <td colspan="3">
              <rsb:check item="rolloververifycertinfo" attr="fa:subject">
                <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [rolloververifycertinfo.fa:subject | def('')]</span>
              </rsb:check>
              <rsb:check item="rolloververifycertinfo" attr="fa:error">
                <span class="error">[rolloververifycertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>Rollover Verify Certificate:</span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="rolloververifycert" id="partner_cert_rolloververifyKey">[partner.a2p:rolloververifycert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_rolloververifyKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
    <!--alternate-->
    <div id="alternate" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_alternateLocalProfile]
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_alternateLocalProfileInfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      <table id="cpAlternate">
        <colgroup>
          <col width="250px"/>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              <span class='formlabel'>[lang.oftpPartner_clientSSID]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:alternatessidcode | def('')]" name="alternatessidcode"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.oftpPartner_clientPassword]</span>
            </td>
            <td>
              <input type="password" value="[partner.a2p:alternatepassword | def('','[site.passwordMask]')]" class="infoInput" maxlength="128" name="alternatepassword" autocomplete="off"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class="requiredParam"><span class='formlabel'>[lang.as2Partner_privateCertificate]</span></span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="alternatecert" id="partner_alternate_privKey">[partner.a2p:alternatecert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_alternate_privKey', '');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_certificatePassword]</span></td>
            <td>
              <input name="alternatecertpassword" class="infoInput" type="password" value="[partner.a2p:alternatecertpassword | def('','[site.passwordMask]')]" autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--fips-->
    <rsb:equals attr="site.java" value="false">
      <div id="fips" class="configInfo">
        <h3>
          [lang.ftpPartnerTitle_FIPSCompliance]
          <rsb:set attr="tooltip.message" value="[lang.ftpPartner_FIPSComplianceInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </h3>
        <div class="descInfo wholerow">[lang.ftpPartner_FIPSComplianceInfo]</div>
        <table class="ca-props">
          <tbody>
            <tr>
              <td class="wholerow" colspan="3">
                <input type="checkbox" name="forcefipscompliance" id="cDynControl_chkForceFIPSCompliance" [partner.a2p:forcefipscompliance | def('') | toupper | equals("TRUE","checked='checked'","")] />
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
    
    <!--directories-->
    <rsb:include file="[view.directories]"/>

    <!--commands-->
    <rsb:include file="[view.commands]"/>

    <!--match pattern-->
    <div id="certmatchpattern" class="configInfo">
      <h3>
        [lang.oftpPartner_matchPattern]
        <rsb:set attr="tooltip.message" value="[lang.oftpPartner_matchPatternDesc]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      <table class="ca-props">
        <colgroup>
          <col width="270px">
          <col width="200px">
          <col width="180px">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <td>
              <span class='formlabel'>Data Encryption Certificate Pattern:</span>
            </td>
            <td colspan="2">
              <input type="text" value="[partner.a2p:encryptcertmatchpattern | def('')]" class="infoInput" name="encryptcertmatchpattern"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>SSL Server Certificate Pattern:</span>
            </td>
            <td colspan="2">
              <input type="text" value="[partner.a2p:sslacceptcertmatchpattern | def('')]" class="infoInput" name="sslacceptcertmatchpattern"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>Auth Challenge Certificate Pattern:</span>
            </td>
            <td colspan="2">
              <input type="text" value="[partner.a2p:authchallengecertmatchpattern | def('')]" class="infoInput" name="authchallengecertmatchpattern"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>Data Verification Certificate Pattern:</span>
            </td>
            <td colspan="2">
              <input type="text" value="[partner.a2p:signcertmatchpattern | def('')]" class="infoInput" name="signcertmatchpattern"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>Receipt Verification Certificate Pattern:</span>
            </td>
            <td colspan="2">
              <input type="text" value="[partner.a2p:receiptsigncertmatchpattern | def('')]" class="infoInput" name="receiptsigncertmatchpattern"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--Advanced Configurations-->
    <div id="configs" class="configInfo">
      <h3>
        [lang.ftpPartnerTitle_otherSettings]
        <rsb:set attr="tooltip.message" value="[lang.ftpPartner_otherSettingsinfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      
      <rsb:set attr="info.name" value="[pubservice.SetOFTPPartner]"/>
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
      <rsb:set attr="search.query" value="EncryptionAlgorithm|FileDescriptionMap|VirtualFilenameMap|EnforceProtocolVersion|ConnectToReceive|MaxRecordSize"/>
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