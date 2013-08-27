<rsb:check attr="_session.[site.supportPartnerType]currentpartner">
  <rsb:else>
    <script language="javascript">
      uncheckUnsave= true;
    </script>
  </rsb:else>
</rsb:check>

<form id="infoForm" method="post">
  <input type="hidden" name="urlHash" value=""/>
  <input type="hidden" name="save" value="True" />
  <input type="hidden" name="type" value="AS2" />
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
          <h3>[lang.as2_partnerTitle_tradingPartner]</h3>
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
              <span class='requiredParam formlabel'>[lang.as2Partner_as2Identifier]</span>
            </td>
            <td>
              <rsb:check attr="_session.[site.supportPartnerType]currentpartner">
                <input type="hidden" value="[partner.a2p:orgname | def('') | htmlencode]" name="neworgname" />
                <input type="text" class="infoInput" value="[partner.a2p:as2identifier | def('[partner.a2p:orgname]') | def('') | htmlencode]" name="as2identifier"/>
                <rsb:else>
                  <input type="text" class="infoInput" value="[partner.a2p:orgname | def('') | htmlencode]" name="neworgname" />
                </rsb:else>
              </rsb:check>
            </td>
            <td><i>[lang.required]</i></td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2_partner_organizationName]</span>
            </td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:friendlyname | def('[partner.a2p:orgname | def(\'\')]') | htmlencode]" name="friendlyname" />
            </td>
          </tr>
          <tr>
            <td>
              <span class='requiredParam formlabel'>[lang.as2Partner_partnerURL]</span>
            </td>
            <td colspan="2">
              <input type="text" class="infoInput long" value="[partner.a2p:url | def('')]" name="url"/>
            </td>
          </tr>
        </tbody>  
      </table>
    </div>
    
    <!--connection info-->
    <div id="connectioninfo" class="configInfo">
      <h3>[lang.as2PartnerTitle_connection]</h3>
      <table id="tblConnInfo" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_outgoingMsgSecurity]</span></td>
            <td>
              <input type="checkbox" name="signoutgoing" id="chkSign" [partner.a2p:signoutgoing | def('True') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkSign"><span>[lang.as2Partner_signOutgoingData]</span></label>
            </td>
            <td class="last">
              <input type="checkbox" name="encryptoutgoing" id="chkEncrypt" [partner.a2p:encryptoutgoing | def('True') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkEncrypt"><span>[lang.as2Partner_encryptOutgoingData]</span></label>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_IncomingMsgSecurity]</span></td>
            <td>
              <input type="checkbox" name="signincoming" id="chkReqSign" [partner.a2p:signincoming | def('TRUE') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkReqSign"><span>[lang.as2Partner_requireSignature]</span></label>
            </td>
            <td class="last">
              <input type="checkbox" name="encryptincoming" id="chkReqEncrypt" [partner.a2p:encryptincoming | def('TRUE') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkReqEncrypt"><span>[lang.as2Partner_requireEncryption]</span></label>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_compression]</span></td>
            <td class="last" colspan="2">
              <input type="checkbox" name="compressoutgoing" id="chkCompression" [partner.a2p:compressoutgoing | def('') | toupper | equals("TRUE","checked='checked'","")] />
            <label for="chkCompression"><span>[lang.as2Partner_compressOutgoingData]</span></label>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_connectionTimeout]</span></td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:connectiontimeout | def('600')]" name="connectiontimeout" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--mdn receipts-->
    <div id="mdnreceipts" class="configInfo">
      <h3>[lang.as2PartnerTitle_mdn]</h3>
      <table id="tblMDN" class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <script type="text/javascript">
            $(function() {
              $("#chkRequestMdn").parent().bind("click", function(e){
                e.stopPropagation();
                if(e.target.tagName == "INPUT" && !e.target.checked)
                  alert("WARNING: Failing to request an MDN receipt may cause failing transmissions to appear successful. Do not disable this setting unless you are only testing network connectivity.");
              });
            });
          </script>
          <rsb:set attr="tmp.requestmdn" value="[partner.a2p:requestmdn | def('True')]"/>
          <rsb:equals attr="tmp.requestmdn" value="false" case="ignore">
            <tr><td class="wholerow" colspan="3">
              <span class="red">WARNING: Failing to request an MDN receipt may cause failing transmissions to appear successful. Do not disable this setting unless you are only testing network connectivity.</span>
            </td></tr>
          </rsb:equals>
          <tr>
            <td class="wholerow" colspan="2">
              <input type="checkbox" name="requestmdn" id="chkRequestMdn" [partner.a2p:requestmdn | def('True') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkRequestMdn"><span>[lang.as2Partner_requestMDNReceipt]</span></label>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.as2Partner_security]</span>
            </td>
            <td>
              <input type="radio" value="True" name="reqmdnsigned" id="rblMdnSecurity_0" [partner.a2p:reqmdnsigned | def('') | toupper | notequals("FALSE","checked='checked'","")] />
              <label for="rblMdnSecurity_0"><span>[lang.as2Partner_signed]</span></label>
            </td>
            <td>
              <input type="radio" value="False" name="reqmdnsigned" id="rblMdnSecurity_1" [partner.a2p:reqmdnsigned | def('') | toupper | equals("FALSE","checked='checked'","")] />
              <label for="rblMdnSecurity_1"><span>[lang.as2Partner_unsigned]</span></label>
            </td>
          </tr>
          <tr>
            <td>
              <span class='formlabel'>[lang.as2Partner_delivery]</span>
            </td>
            <td>
              <input type="radio" value="True" name="reqmdnsync" id="rblMdnDelivery_0" [partner.a2p:reqmdnsync | def('') | toupper | notequals("FALSE","checked='checked'","")] />
              <label for="rblMdnDelivery_0"><span>[lang.as2Partner_synchronous]</span></label>
            </td>
            <td>
              <input type="radio" value="False" name="reqmdnsync" id="rblMdnDelivery_1" [partner.a2p:reqmdnsync | def('') | toupper | equals("FALSE","checked='checked'","")] />
              <label for="rblMdnDelivery_1"><span>[lang.as2Partner_asynchronous]</span></label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--certificates-->
    <div id="certificates" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_tradingCertificates]
      </h3>
      
      <table>
        <colgroup>
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
              <span class='requiredParam formlabel'>
                [lang.as2Partner_encryptionCertificate]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.as2Partner_encryptionCertificatesinfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="encryptcert" id="partner_cert_encrKey">[partner.a2p:encryptcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td class="last">
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_encrKey');return false;"><span>[lang.importCertificate]</span></a>
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
              <span class='requiredParam formlabel'>
                [lang.as2Partner_verificationCertificate]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.as2Partner_verificationCertificateInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="signcert" id="partner_cert_verKey">[partner.a2p:signcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td class="last">
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_verKey');return false;"><span>[lang.importCertificate]</span></a>
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
              <span class="formlabel requiredParam">[lang.as2Partner_SSLServerCertificate]</span>
              <rsb:set attr="tooltip.message" value="[lang.as2Partner_SSLServerCertificateinfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <textarea class="infoInput long" name="sslacceptcert" id="partner_cert_sslKey">[partner.a2p:sslacceptcert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td class="last">
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_cert_sslKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--automation-->
    <rsb:include file="[view.automation]"/>
    
    <!-- public profile -->
    <div id="pubprofile" class="configInfo">
      <h3>[lang.as2Partner_publicProfile]</h3>
      <span>
        <rsb:set attr="self.a2p:enablepublicprofile" value="[self.a2p:enablepublicprofile | def('false')]"/>
        <rsb:equals attr="self.a2p:enablepublicprofile" value="true" case="ignore">
          <span id='PublicProfileEnabled'>[lang.as2Partner_publicProfileEnabled]</span>
          <rsb:else>
            <span id='PublicProfileDisabled'>[lang.as2Partner_publicProfileDisabled]</span>
          </rsb:else>
        </rsb:equals>
      </span>
    </div>
  </div>

  <div id="padvanced" class="config-section" style="display: none;">
    <span class="small"><i>[lang.self_not_available_free]</i></span>

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
    
    <!--very large messages-->
    <div class="configInfo" id="cpChunkedEncoding">
      <h3>[lang.as2PartnerTitle_VLM]*</h3>
      
      <table class="ca-props">
        <tbody>
          <tr>
            <td class="wholerow" colspan="3">
              <input type="checkbox" name="supportchunkedencoding" id="cDynControl_chkSupportChunkedEncoding" [partner.a2p:supportchunkedencoding | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid]/>
              <label for="cDynControl_chkSupportChunkedEncoding">[lang.as2Partner_streaming]
                <rsb:set attr="tooltip.message" value="[lang.as2Partner_streaminginfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </label>
            </td>
          </tr>
          <tr>
            <td class="wholerow" colspan="3">
              <input type="checkbox" name="logchunkedrequest" id="cDynControl_chkLogChunkedRequest" [partner.a2p:logchunkedrequest | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid]/>
              <label for="cDynControl_chkLogChunkedRequest">[lang.as2Partner_logStreamingRequests]
                <rsb:set attr="tooltip.message" value="[lang.as2Partner_logStreamingRequestsInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </label>
            </td>
          </tr>
          <tr>
            <td class="wholerow" colspan="3">
              <input type="checkbox" name="supportrestart" id="cDynControl_chkSupportRestart" [partner.a2p:supportrestart | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid]/>
              <label for="cDynControl_chkSupportRestart">
                [lang.as2Partner_as2Restart]
                <rsb:set attr="tooltip.message" value="[lang.as2Partner_as2Restartinfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--directories-->
    <rsb:include file="[view.directories]"/>

    <!--commands-->
    <rsb:include file="[view.commands]"/>

    <!--fips-->
    <rsb:equals attr="site.java" value="false">
      <div id="fips" class="configInfo">
        <h3>[lang.as2PartnerTitle_FIPSCompliance]*</h3>
        
        <table class="ca-props">
          <tbody>
            <tr>
              <td class="wholerow" colspan="3">
                <input type="checkbox" name="forcefipscompliance" id="cDynControl_chkForceFIPSCompliance" [partner.a2p:forcefipscompliance | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid]/>
                <label for="cDynControl_chkForceFIPSCompliance">
                  [lang.as2Partner_ForceFIPScompliant]
                  <rsb:set attr="tooltip.message" value="[lang.as2Partner_FIPSComplianceinfo]"/>
                  <rsb:include file="[ui.toolTips:bubble]" />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </rsb:equals>

    <!--alternate-->
    <div id="alternate" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_alternateLocalProfile]*
        <rsb:set attr="tooltip.message" value="[lang.as2Partner_alternateLocalProfileinfo]"/>
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
            <td colspan="3">
              <rsb:check item="alternatecertinfo" attr="fa:expdays">
                <rsb:check item="alternatecertinfo" attr="fa:subject">
                  <span class="correct"><span id='CertSubject'>[lang.certificateSubject]</span> [alternatecertinfo.fa:subject | def('')]</span>
                </rsb:check>
                
                <rsb:match pattern="[alternatecertinfo.fa:expdays | greaterthan(0,'true')]" value="true">
                  <span class="correct">[lang.certificateExpires | replace('{0}', '[alternatecertinfo.fa:expdays]')]</span>
                </rsb:match>
              </rsb:check>
              <rsb:check item="alternatecertinfo" attr="fa:error">
                <span class="error">[alternatecertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_localAS2Identifier]</span></td>
            <td>
              <input name="localas2identifier" class="infoInput" type="text" value="[partner.a2p:localas2identifier | def('') | htmlencode]" [page.isPaid] autocomplete="off"/>
            </td>
          </tr>
          <tr>
            <td>
              <span class="requiredParam"><span class='formlabel'>[lang.as2Partner_privateCertificate]</span></span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="alternatecert" id="partner_alternate_privKey" [page.isPaid]>[partner.a2p:alternatecert | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_alternate_privKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_certificatePassword]</span></td>
            <td>
              <input name="alternatecertpassword" class="infoInput" type="password" value="[partner.a2p:alternatecertpassword | def('','[site.passwordMask]')]" [page.isPaid] autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--ssl client-->
    <div id="sslclient" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_SSLClientAuthentication]*
        <rsb:set attr="tooltip.message" value="[lang.as2Partner_SSLClientAuthenticationinfo]"/>
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
                
                <rsb:match pattern="[sslclientcertinfo.fa:expdays | greaterthan(0,'true')]" value="true">
                  <span class="correct">[lang.certificateExpires | replace('{0}', '[sslclientcertinfo.fa:expdays]')]</span>
                </rsb:match>
              </rsb:check>
              <rsb:check item="sslclientcertinfo" attr="fa:error">
                <span class="error">[sslclientcertinfo.fa:error]</span>
              </rsb:check>
            </td>
          </tr>
          <tr>
            <td>
              <span class="requiredParam"><span class='formlabel'>[lang.as2Partner_privateCertificate]</span></span>
            </td>
            <td colspan="2">
              <textarea class="infoInput long" name="sslclientcertfile" id="partner_ssl_privKey" [page.isPaid]>[partner.a2p:sslclientcertfile | def('') | replace('[site.profilesPath]', '')]</textarea>
            </td>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:showCert('#partner_ssl_privKey');return false;"><span>[lang.importCertificate]</span></a>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_certificatePassword]</span></td>
            <td>
              <input type="password" class="infoInput" name="sslclientcertpwd" value="[partner.a2p:sslclientcertpwd | def('','[site.passwordMask]')]" [page.isPaid] autocomplete="off"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--http auth-->
    <div id="httpauth" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_httpAuthentication]*
        <rsb:set attr="tooltip.message" value="[lang.as2Partner_httpAuthenticationinfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      <table class="ca-props">
        <colgroup>
          <col width="250px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td class="wholerow" colspan="3">
              <input type="checkbox" name="usehttpauth" id="chkHTTPAuth" [partner.a2p:usehttpauth | def('') | toupper | equals("TRUE","checked='checked'","")] [page.isPaid]/>
              <label for="chkHTTPAuth"><span>[lang.as2Partner_useHTTPAuthentication]</span></label>
            </td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_httpAuthenticationType]</span></td>
            <td>
              <input type="radio" value="Basic" name="httpauthtype" id="rblHTTPAuthType_0" [partner.a2p:httpauthtype | def('') | toupper | notequals("DIGEST","checked='checked'","")] [page.isPaid]/>
              <label for="rblHTTPAuthType_0"><span>[lang.as2Partner_httpAuthenticationBasic]</span></label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" value="Digest" name="httpauthtype" id="rblHTTPAuthType_1" [partner.a2p:httpauthtype | def('') | toupper | equals("DIGEST","checked='checked'","")] [page.isPaid]/>
              <label for="rblHTTPAuthType_1"><span>[lang.as2Partner_httpAuthenticationDigest]</span></label>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_httpAuthenticationUser]</span></td>
            <td>
              <input type="text" class="infoInput" name="httpauthuser" value="[partner.a2p:httpauthuser | def('')]" [page.isPaid]/>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><span class='formlabel'>[lang.as2Partner_httpAuthenticationPassword]</span></td>
            <td>
              <input type="password" class="infoInput" name="httpauthpwd" value="[partner.a2p:httpauthpwd | def('')]" [page.isPaid] autocomplete="off"/>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--Advanced Configurations-->
    <div id="configs" class="configInfo">
      <h3>
        [lang.as2PartnerTitle_otherSettings]
        <rsb:set attr="tooltip.message" value="[lang.as2Partner_otherSettingsinfo]"/>
        <rsb:include file="[ui.toolTips:bubble]" />
      </h3>
      
      
      <rsb:set attr="info.name" value="[pubservice.SetAS2Partner]"/>
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
      <rsb:set attr="search.query" value="AS2Version|AllowSSLv2Protocol|DecodeQuotedPrintable|SignatureAlgorithm|EncryptionAlgorithm|MDNOptions|DirSent|DirDecodeTemp|DirEncodeTemp|MessageId|SendFilenameInContentType"/>
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
                  <rsb:set attr="renderSelect.options#" value="[lang.as2Partner_notSpecified]" />
                  
                  <rsb:enum attr="info:value">
                    <rsb:set attr="renderSelect.values#"  value="[_value]" /> 
                    <rsb:set attr="renderSelect.options#" value="[_value]" /> 
                  </rsb:enum>
                  
                  <rsb:set attr="renderSelect.id" value="[info:name | replace(':','_')]" />
                  <rsb:set attr="renderSelect.name" value="[info:name | tolower]" />
                  <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:[info:name | tolower] | def('')]" />
                  
                  <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
                  
                  <rsb:else>
                    <input type="text" class="infoInput" value="[partner.a2p:[info:name | tolower] | def('')]" name="[info:name | tolower]">
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




