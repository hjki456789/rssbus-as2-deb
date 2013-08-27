<!--suppress ALL -->
<div class="configInfo">
  <h3>
    [lang.sync_title]
  </h3>
  
  <table class="ca-props">
    <colgroup>
      <col width="250px"/>
      <col width="200px"/>
      <col width="*"/>
    </colgroup>
    <tbody>
      <tr>
        <td>
          <span class='formlabel'>[lang.sync_upload_model]</span>
        </td>
        <td>
          <rsb:set attr="renderSelect.values#1"  value="None" />
          <rsb:set attr="renderSelect.options#1" value="None" />
          <rsb:set attr="renderSelect.values#2"  value="Normal" />
          <rsb:set attr="renderSelect.options#2" value="Normal" />
          <rsb:set attr="renderSelect.values#3"  value="Mirror" />
          <rsb:set attr="renderSelect.options#3" value="Mirror" />
          <rsb:set attr="renderSelect.id" value="syncuploadmodel" />
          <rsb:set attr="renderSelect.name" value="syncuploadmodel" />
          <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:syncuploadmodel | def('None')]" />
          <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <span class='formlabel'>[lang.sync_download_model]</span>
        </td>
        <td>
          <rsb:set attr="renderSelect.values#1"  value="None" />
          <rsb:set attr="renderSelect.options#1" value="None" />
          <rsb:set attr="renderSelect.values#2"  value="Normal" />
          <rsb:set attr="renderSelect.options#2" value="Normal" />
          <rsb:set attr="renderSelect.values#3"  value="Mirror" />
          <rsb:set attr="renderSelect.options#3" value="Mirror" />
          <rsb:set attr="renderSelect.id" value="syncdownloadmodel" />
          <rsb:set attr="renderSelect.name" value="syncdownloadmodel" />
          <rsb:set attr="renderSelect.selectedValue" value="[partner.a2p:syncdownloadmodel | def('None')]" />
          <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>