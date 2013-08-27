<!--suppress ALL -->
<div class="configInfo">
  <h3>
    [lang.commandsTitle]
    <rsb:set attr="tooltip.message" value="[lang.commands_info]"/>
    <rsb:include file="[ui.toolTips:bubble]" />
  </h3>
  
  <table>
    <colgroup>
      <col width="250px">
      <col width="200px">
      <col width="200px">
    </colgroup>
    <tbody>
      <tr>
        <th>
        </th>
        <th>
          <rsb:equals attr="site.java" value="true">
            [lang.commands_ShellScript]
            <rsb:else>
              [lang.commands_BatchFile]
            </rsb:else>
          </rsb:equals>
        </th>
        <th>
          [lang.commands_Arguments]
        </th>
      </tr>
      <tr>
        <td>
          [lang.commands_BeforeSend]
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdbeforesend" value="[partner.a2p:cmdbeforesend | def('')]" [page.isPaid] />
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdbeforesendargs" value="[partner.a2p:cmdbeforesendargs | def('')]" [page.isPaid] />
        </td>
      </tr>
      <tr>
        <td>
          [lang.commands_AfterSend]
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdaftersend" value="[partner.a2p:cmdaftersend | def('')]" [page.isPaid] />
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdaftersendargs" value="[partner.a2p:cmdaftersendargs | def('')]" [page.isPaid] />
        </td>
      </tr>
      <tr>
        <td>
          After Send Failure:
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdaftersendfailure" value="[partner.a2p:cmdaftersendfailure | def('')]" [page.isPaid] />
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdaftersendfailureargs" value="[partner.a2p:cmdaftersendfailureargs | def('')]" [page.isPaid] />
        </td>
      </tr>
      <tr>
        <td>
          [lang.commands_AfterRecv]
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdafterrecv" value="[partner.a2p:cmdafterrecv | def('')]" [page.isPaid] />
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdafterrecvargs" value="[partner.a2p:cmdafterrecvargs | def('')]" [page.isPaid] />
        </td>
      </tr>
      <tr>
        <td>
          After Receive Failure:
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdafterrecvfailure" value="[partner.a2p:cmdafterrecvfailure | def('')]" [page.isPaid] />
        </td>
        <td>
          <input type="text" class="infoInput" name="cmdafterrecvfailureargs" value="[partner.a2p:cmdafterrecvfailureargs | def('')]" [page.isPaid] />
        </td>
      </tr>
    </tbody>
  </table>
</div>
