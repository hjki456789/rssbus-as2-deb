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

<rsb:set attr="tabin.desc" value="[tabin.desc | def('true')]"/>
<rsb:set attr="tabin.pagesize" value="[tabin.pagesize | def('20')]"/>
<rsb:set attr="tabin.startindex" value="[tabin.startindex | def('0')]"/>

<rsb:set attr="tab.id" value="[tab.id | def('tab-[null | randomtext]')]"/>
<rsb:set attr="tab.css" value="[tab.css | def('app-table')]"/>
<rsb:set attr="tab.name" value="_[tab.id | replace('-', '_')]"/>
<rsb:set attr="tab.allowDeleteRow" value="[tab.allowDeleteRow | def('false')]"/>
<rsb:set attr="tab.colcount" value="0"/>
<rsb:set attr="tabout.name" value="[tab.name]"/>

<rsb:set attr="tab.args" value="{"/>
<rsb:set attr="tab.args" value="[tab.args] tabservice:'[tab.service]', allowDeleteRow:'[tab.allowDeleteRow]',"/>
<rsb:enum attr="tab.service:*">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:check attr="tab.filtercolumn">
  <rsb:set attr="tab.args" value="[tab.args] filtercolumn:'[tab.filtercolumn]',"/>
</rsb:check>
<rsb:enum attr="tab.filter:*">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:enum attr="tab.filtercolor:*">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:enum attr="tab.columnname">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
  <rsb:set attr="isinput" value="[_value | startswith('$')]"/>
  <rsb:equals attr="isinput" value="true">
    <rsb:enum attr="[_value | replace('$', '')][_index]:*">
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
<rsb:enum item="tabin">
  <rsb:set attr="tab.args" value="[tab.args] '[_attr]':'[_value]',"/>
</rsb:enum>
<rsb:set attr="tmp.length" value="[tab.args | getlength | subtract(1)]"/>
<rsb:set attr="tab.args" value="[tab.args | substring(0, [tmp.length])]}"/>

<script type="text/javascript">
  var [tab.name] = null;
  $(function() {
    [tab.name] = new RSBTable('[tab.id]', [tab.args]);
    [tab.name].init(); // Init Table
  });
</script>

<div id="[tab.id]-btnbar" class="btnbar">
  <span id="[tab.id]-loading" class="loading hide"><img src="[tabresc.shared | urlresolve]/img/loading2_20px.gif" alt="Loading..."></span>
  [tab.leftbuttons | def('')]
  <a class="btn" href="javascript:void(0);" onclick="[tab.name].refresh();"><span><span class="refresh">Refresh</span></span></a>
  [tab.rightbuttons | def('')]
</div>

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
            <rsb:set attr="tmp.sort" value=""/>
            <rsb:equals attr="tabin.sort" value="[_value]">
              <rsb:equals attr="tabin.desc" value="true">
                <rsb:set attr="tmp.sort" value="desc"/>
                <rsb:else>
                  <rsb:set attr="tmp.sort" value="asc"/>
                </rsb:else>
              </rsb:equals>
            </rsb:equals>

            <th onclick="[tab.name].sort('[_value]', this);"><span class="sort [tmp.sort]">[tab.columheader#[_index]]</span></th>
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

<div id="[tab.id]-paging" class="paging">
  <a class="[tabin.pagesize | equals('10', 'paging-selected')]" href="javascript:void(0);" onclick="[tab.name].paging('10', this);">10</a>
  <a class="[tabin.pagesize | equals('20', 'paging-selected')]" href="javascript:void(0);" onclick="[tab.name].paging('20', this);">20</a>
  <a class="[tabin.pagesize | equals('50', 'paging-selected')]" href="javascript:void(0);" onclick="[tab.name].paging('50', this);">50</a>
</div>
  
<rsb:enum attr="tab.filter:*">
  <rsb:first>
    <select id="[tab.id]-filter" class="filter" onchange="[tab.name].filter(this);">
      <option value="All" selected="selected">ALL</option>
  </rsb:first>
  <option value="[_attr | replace('filter:', '')]">[_value]</option>
  <rsb:last>
    </select>
  </rsb:last>
</rsb:enum>

<div id="[tab.id]-pagenav" class="page"></div>

<rsb:unset item="tab"/>
<rsb:unset item="tabin"/>

</div>
