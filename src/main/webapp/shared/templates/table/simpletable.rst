<rsb:exists item="tabresc">
  <rsb:else>
    <rsb:set attr="tabresc.shared" value="~/shared"/>
    <rsb:set attr="tabresc.js" value="[tabresc.shared | urlresolve]/templates/table/table.js?#[site.buildno | def]"/>
    <rsb:set attr="tabresc.css" value="[tabresc.shared | urlresolve]/templates/table/table.css?#[site.buildno | def]"/>
    <script type="text/javascript" src="[tabresc.js]"></script>
    <link rel="stylesheet" type="text/css" href="[tabresc.css]" />
  </rsb:else>
</rsb:exists>

<div class="app-table-box"> <!-- TODO: Languages -->

<rsb:set attr="tab.id" value="[tab.id | def('tab-[null | randomtext]')]"/>
<rsb:set attr="tab.css" value="[tab.css | def('app-table')]"/>
<rsb:set attr="tab.name" value="_[tab.id | replace('-', '_')]"/>
<rsb:set attr="tab.allowDeleteRow" value="[tab.allowDeleteRow | def('false')]"/>
<rsb:set attr="tab.colcount" value="0"/>
<rsb:set attr="tabout.name" value="[tab.name]"/>

<rsb:set attr="tab.args" value="{"/>
<rsb:set attr="tab.args" value="[tab.args] tabservice:'[tab.service]', allowDeleteRow:'[tab.allowDeleteRow]',"/>
<rsb:enum attr="tab.service:*">
  <rsb:set attr="value" value="[_value | replace('\'', '\\\'')]" />
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[value]',"/>
</rsb:enum>
<rsb:enum attr="tab.columnname">
  <rsb:set attr="value" value="[_value | replace('\'', '\\\'')]" />
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[value]',"/>
  <rsb:set attr="isinput" value="[value | startswith('$')]"/>
  <rsb:equals attr="isinput" value="true">
    <rsb:enum attr="[value | replace('$', '')][_index]:*">
      <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
    </rsb:enum>
  </rsb:equals>
</rsb:enum>
<rsb:enum attr="tab.columnclass">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:enum attr="tab.columninput">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:check attr="tab.wraptext">
  <rsb:set attr="tab.args" value="[tab.args] 'wraptext':'[tab.wraptext]',"/>
</rsb:check>
<rsb:set attr="tmp.length" value="[tab.args | getlength | subtract(1)]"/>
<rsb:set attr="tab.args" value="[tab.args | substring(0, [tmp.length])]}"/>

<script type="text/javascript">
  var [tab.name] = null;
  $(function() {
    [tab.name] = new RSBTable('[tab.id]', [tab.args]);
    [tab.name].init(); // Init Table
  });
</script>

<table id="[tab.id]" class="[tab.css]">
  <colgroup>
    <rsb:enum attr="tab.columnwidth">
      <col width="[_value]" />
    </rsb:enum>
    <rsb:equals attr="tab.allowDeleteRow" value="true">
      <col width="22px"/>
    </rsb:equals>
  </colgroup>
  <thead id="[tab.id]-head">
    <tr>
      <rsb:enum attr="tab.columnname">
        <rsb:set attr="isinput" value="[_value | startswith('$')]"/>
        <rsb:equals attr="isinput" value="true">
          <rsb:equals attr="_value" value="$checkbox">
            <th><span>[tab.columheader#[_index] | replace('$', '<input id="chk-[tab.checkbox[_index]:value]" type="checkbox"/>')]</span></th>
          </rsb:equals>
          
          <rsb:else>
            <th><span>[tab.columheader#[_index]]</span></th>
          </rsb:else>
        </rsb:equals>
        <rsb:set attr="tab.colcount" value="[_index]"/>
      </rsb:enum>
      <rsb:equals attr="tab.allowDeleteRow" value="true">
        <th class="deleteRow">&nbsp;</th>
      </rsb:equals>
    </tr>
  </thead>
  <tbody id="[tab.id]-body">
    <tr>
      <td class="loading center" colspan="[tab.colcount]">
        <input name="[tab.id]_unload" value="true" type="hidden" />
        <img src="[tabresc.shared | urlresolve]/img/loading.gif" alt="Loading..."/>
      </td>
    </tr>
  </tbody>
</table>

<rsb:unset item="tab"/>
<rsb:unset item="tabin"/>

</div>
