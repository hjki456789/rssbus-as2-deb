<rsb:check value="[page.disablePath | def('false')]">
  <rsb:else>
    <div class="configInfo">
      <h3>[lang.ftpUpload]</h3>
      <table class="ca-props">
        <colgroup>
          <col width="200px"/>
          <col width="200px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>
              [lang.ftpUpload_Outgoing]
              <rsb:set attr="tooltip.message" value="[lang.ftpUpload_Outgoing_info]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <input type="text" class="infoInput long" name="diroutgoing" value="[partner.a2p:diroutgoing | def('')]" />
            </td>
          </tr>
          <tr>
            <td>
              <span class="formlabel">
                [lang.ftpUpload_remotePath]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.ftpUpload_remotePathsInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <input type="text" class="infoInput" name="ftpuploaddir" value="[partner.a2p:ftpuploaddir | def('')]"/>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </rsb:else>
</rsb:check>

<div class="configInfo">
  <h3>[lang.ftpDownload]</h3>
  <rsb:check value="[page.disablePath | def('false')]">
    <rsb:else>
        <table class="ca-props">
          <colgroup>
            <col width="200px"/>
            <col width="200px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>
                [lang.ftpDownload_Incoming]
                <rsb:set attr="tooltip.message" value="[lang.ftpDownload_Incoming_info]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <input type="text" class="infoInput long" name="dirincoming" value="[partner.a2p:dirincoming | def('')]" />
              </td>
            </tr>
            <tr>
              <td>
                <span class="formlabel">
                  [lang.ftpDownload_remotePaths]
                </span>
                <rsb:set attr="tooltip.message" value="[lang.ftpDownload_remotePathsInfo]"/>
                <rsb:include file="[ui.toolTips:bubble]" />
              </td>
              <td>
                <input type="text" class="infoInput" name="ftpdownloaddir" value="[partner.a2p:ftpdownloaddir | def('') | htmlencode()]" />
              </td>
              <td class="last">
              </td>
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
              <span class="formlabel">
                [lang.ftpDownload_fileMask]
              </span>
              <rsb:set attr="tooltip.message" value="[lang.ftpDownload_fileMaskInfo]"/>
              <rsb:include file="[ui.toolTips:bubble]" />
            </td>
            <td>
              <input type="text" class="infoInput" name="ftpdownloadfilemask" value="[partner.a2p:ftpdownloadfilemask | def('')]" />
            </td>
            <td class="last">
            </td>
          </tr>
        </tbody>
      </table>
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
        <td colspan="3">
          <input type="checkbox" name="ftpoverwritelocal" id="chkOverwriteDownload" [partner.a2p:ftpoverwritelocal | def('False') | toupper | equals("TRUE","checked='checked'","")]/>
          <label for="chkOverwriteDownload">[lang.ftpDownload_chkOverwriteDownload]</label>
        </td>
      </tr>
      <rsb:check value="[page.disablePath | def('false')]">
        <rsb:else>
          <tr>
            <td colspan="3">
              <input type="checkbox" name="ftpdeldownloaded" id="chkDelete" [partner.a2p:ftpdeldownloaded | def('False') | toupper | equals("TRUE","checked='checked'","")] />
              <label for="chkDelete">[lang.ftpDownload_chkDelete]</label>
            </td>
          </tr>
        </rsb:else>
      </rsb:check>
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
        <rsb:match pattern="[site.supportPartnerType | tolower]" value="oftp">
          <rsb:else>
            <td>
              <a class="btn" href="javascript:void(0);" onclick="javascript:uncheckUnsave=true;$(this).children('input\[name=download\]').val('Download Now');$('#infoForm').submit();return false;">
                <input type="hidden" name="download" value=""/>
                <span>[lang.ftpDownload_ftpGet]</span>
              </a>
            </td>
            <td colspan="2">
              <rsb:check item="receive" attr="ex:emessage">
                <span class="error hiddenlabel">[receive.ex:emessage]</span>
                <rsb:else>
                  <rsb:check item="receive" attr="result">
                    <span class="correct hiddenlabel">[receive.result]</span>
                  </rsb:check>
                </rsb:else>
              </rsb:check>
            </td>
          </rsb:else>
        </rsb:match>
      </tr>
    </tbody>
  </table>
</div>
