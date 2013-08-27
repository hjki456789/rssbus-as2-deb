<rsb:include file="../config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:select value="[_session.[site.supportPartnerType]currenttype | def('as2') | tolower]">
  <rsb:case match="exact" value="ftp">
    <rsb:set item="page1" attr="execute" value="[service.ftpSendFile | def('')]" />
  </rsb:case>
  <rsb:case match="exact" value="sftp">
    <rsb:set item="page1" attr="execute" value="[service.sftpSendFile | def('')]" />
  </rsb:case>
  <rsb:case match="exact" value="oftp">
    <rsb:set item="page1" attr="execute" value="[service.oftpSendFile | def('')]" />
  </rsb:case>
  <rsb:case match="exact" value="as2">
    <rsb:set item="page1" attr="execute" value="[service.as2SendFile | def('')]" />
  </rsb:case>
  <rsb:default>
    <rsb:set item="page1" attr="execute" value="[service.sendFile | def('')]" />
  </rsb:default>
</rsb:select>
    
<rsb:call op="[page1.execute]">
  <rsb:check attr="ex:ecode">
    <div style="border:1px solid #2A83C5; margin:0 10px 10px; width:90%;">
      <table cellspacing="1" cellpadding="3" border="0" class="errorTable">
        <colgroup>
          <col width="20%"/>
          <col width="*"/>
        </colgroup>
        <thead>
          <tr style="background-color: WhiteSmoke;">
            <th colspan="2"><span style="color: Red;"><span id='Failure'>[lang.partner_failure]</span>[ex:ecode]</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:bold;"><span>[lang.partner_category]</span></td>
            <td><span title="[ex:categorytip|def('')]">[ex:category|def('')]</span></td>
          </tr>
          <tr>
            <td style="font-weight:bold;"><span>[lang.partner_generalError]</span></td>
            <td>[ex:generalmsg|def('')]</td>
          </tr>
          <tr>
            <td style="font-weight:bold;"><span>[lang.partner_specificError]</span></td>
            <td>[ex:specificmsg|def('')|htmlencode]</td>
          </tr>
          <tr>
            <td style="font-weight:bold;"><span>[lang.partner_tip]</span></td>
            <td>[ex:tip|def('')|htmlencode]</td>
          </tr>
        </tbody>
      </table>
      <rsb:else>
        <span class="correct">[result]</span>
      </rsb:else>
    </div>
  </rsb:check>
</rsb:call>
