<rsb:include file="../config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>
<rsb:call op="[service.restartFile]">
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
            <td><span>[lang.partner_category]</span></td>
            <td><span title="[ex:categorytip|def('')]">[ex:category|def('')]</span></td>
          </tr>
          <tr>
            <td><span>[lang.partner_generalError]</span></td>
            <td>[ex:generalmsg|def('')]</td>
          </tr>
          <tr>
            <td><span>[lang.partner_specificError]</span></td>
            <td>[ex:specificmsg|def('')]</td>
          </tr>
          <tr>
            <td><span>[lang.partner_tip]</span></td>
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
