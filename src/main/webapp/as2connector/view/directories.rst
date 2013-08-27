<!--suppress ALL -->
<div class="configInfo">
  <h3>
    [lang.directoriesTitle]
  </h3>
  
  <table>
    <colgroup>
      <col width="250px">
      <col width="200px">
    </colgroup>
    <tbody>
      <tr>
        <td>
          [lang.directories_Incoming]
          <rsb:set attr="tooltip.message" value="[lang.directories_Incoming_info]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </td>
        <td>
          <input type="text" class="infoInput long" name="dirincoming" value="[partner.a2p:dirincoming | def('')]" [page.isPaid] />
        </td>
      </tr>
      <tr>
        <td>
          [lang.directories_Outgoing]
          <rsb:set attr="tooltip.message" value="[lang.directories_Outgoing_info]"/>
          <rsb:include file="[ui.toolTips:bubble]" />
        </td>
        <td>
          <input type="text" class="infoInput long" name="diroutgoing" value="[partner.a2p:diroutgoing | def('')]" [page.isPaid] />
        </td>
      </tr>
    </tbody>
  </table>
</div>
