<!--suppress ALL -->
<div class="configInfo">
  <h3>
    [lang.automationTitle]
    <rsb:set attr="tooltip.message" value="[lang.automation_info]"/>
    <rsb:include file="[ui.toolTips:bubble]" />
  </h3>
  <rsb:set attr="site.type" value="[partnerType | tolower]"/>
  <table class="ca-props">
    <colgroup>
      <col width="200px"/>
      <col width="*"/>
    </colgroup>
    <tbody>
      <tr>
        <td class="wholerow" colspan="2">
          <input type="checkbox" name="automationenabled" id="chkAutomateSend" [partner.a2p:automationenabled | def('') | toupper | equals("TRUE","checked='checked'","")] />
          <label for="chkAutomateSend"><span>[lang.automation_enableAutomation]</span></label>
        </td>
      </tr>
      <rsb:notequals attr="site.type" value="as2">
        <rsb:notequals attr="site.type" value="oftp">
          <tr>
            <td colspan="2">
              <input type="checkbox" name="ftpuploadfiles" id="chkUpload" [partner.a2p:ftpuploadfiles | def('') | toupper | equals("TRUE","checked='checked'","")]/>
              <label for="chkUpload">[lang.ftpUpload_chkUpload]</label>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="checkbox" name="ftpdownloadfiles" id="chkDownload" [partner.a2p:ftpdownloadfiles | def('False') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkDownload">[lang.ftpDownload_chkDownload]</label>
            </td>
          </tr>
        </rsb:notequals>
      </rsb:notequals>
    </tbody>
  </table>
  
  <table class="ca-props">
    <colgroup>
      <col width="200px"/>
      <col width="200px"/>
      <col width="*"/>
    </colgroup>
    <tbody>
      <rsb:notequals attr="site.type" value="as2">
        <rsb:notequals attr="site.type" value="oftp">
          <tr>
            <td><span class="formlabel">[lang.ftpDownload_pollInterval]</span></td>
            <td>
              <input type="text" class="infoInput" value="[partner.a2p:ftppollinginterval | def('60')]" name="ftppollinginterval" />
            </td>
            <td></td>
          </tr>
        </rsb:notequals>
      </rsb:notequals>
      <tr>
        <td>
          <span class='formlabel'>[lang.automation_retryInterval]</span>
          <rsb:set attr="tooltip.message" value="[lang.automation_retryIntervalInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </td>
        <td class="last">
          <input type="text" class="infoInput" value="[partner.a2p:retryinterval | def('60')]" name="retryinterval" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
  
  <table class="ca-props">
    <colgroup>
      <col width="200px"/>
      <col width="200px"/>
      <col width="*"/>
    </colgroup>
    <tbody>
      <tr>
        <td>
          <span class='formlabel'>[lang.automation_maximumAttempts]</span>
          <rsb:set attr="tooltip.message" value="[lang.automation_info2]<br>[lang.automation_maximumAttemptsInfo]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </td>
        <td class="last">
          <input type="text" class="infoInput" value="[partner.a2p:maxattempts | def('5')]" name="maxattempts" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
