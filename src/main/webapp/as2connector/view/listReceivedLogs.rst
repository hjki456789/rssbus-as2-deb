<rsb:include file="~/shared/view/loadLanguage.rst"/>
<!--get outgoing dir-->
<rsb:call op="[service.getPartner]">
  <rsb:set item='partner' copyfrom='_out1'/>
</rsb:call>

<rsb:try>
  <rsb:call op="[site.supportPartnerType | tolower]connectorCheckLicense"/>
  
  <rsb:check item="partner" attr="a2p:dirincoming">
    <p>
      <i>
        <span>[lang.table_receiveInfo1]</span>
        <b>[partner.a2p:dirincoming]</b>
        <span>[lang.table_receiveInfo2]</span><br/>
      </i>
    </p>

    <div style="margin:10px;">
      <a class="btn" href="javascript:void(0);" onclick="javascript:refreshLogsTable('in-cb');"><span><span class="tb-refresh">[lang.table_refresh]</span></span></a>
      <a class="btn" id="in-cb-delete" href="javascript:void(0);"><span>[lang.table_delete]</span></a>
      <span id="in-cb-load" style="display: none;margin:0 8px;vertical-align: top;"><img src="../shared/img/loading2_20px.gif" alt="Loading..."  style="vertical-align: middle;" /></span>
      <a class="btn btn-download expExcel" href="[service.listReceivedLogs | urlresolve]?@csv&@fmtoptions=ex_non_rss&orgname=[_session.[site.supportPartnerType]currentpartner | urlencode]&logType=Received"><span><b class='trans app-icon-btn app-icon-btn-download'></b>[lang.table_exportExcel]</span></a>
    </div>

    <div id="inlogResponseMsg" style="text-align: center;"></div>
  </rsb:check>

  <table width="100%" id="tblAttrReq" class="ca-params" border="0">
    <colgroup>
      <col width="28px"/>
      <col width="150px"/>
      <col width="150px"/>
      <col width="*"/>
      <col width="150px"/>
    </colgroup> 
    <thead>
      <tr>
        <th><input id="in-cb" onclick="javascript:toggleAllLogs('in-cb')" type="checkbox"/></th>
        <th class="in-cb-sort table-sort" onclick="javascript:tableSort('in-cb', 'sort=timestamp&desc=true&type=text', this);"><span class="table-sort-desc">[lang.table_dateTime]</span></th>
        <th class="in-cb-sort table-sort" onclick="javascript:tableSort('in-cb', 'sort=status&desc=true&type=text', this);"><span>[lang.table_status]</span></th>
        <th class="in-cb-sort table-sort" onclick="javascript:tableSort('in-cb', 'sort=filename&desc=true&type=text', this);"><span>[lang.table_fileName]</span></th>
        <th class="in-cb-sort table-sort" onclick="javascript:tableSort('in-cb', 'sort=filesize&desc=true&type=numeric', this);"><span>[lang.table_fileSize]</span></th>
      </tr>
    </thead>
    <input id="in-cb-refresh" type="hidden" value="[view.listReceivedLogsTable | urlresolve]?orgname=[_session.[site.supportPartnerType]currentpartner | urlencode]&sort=timestamp&desc=true&type=text&filter=All&first=0&last=19"/>
    <tbody id="in-cb-table"><tr><td colspan="5" align="center" style="height: 150px;"><img id="in-cb-loadtable" src="../shared/img/loading.gif" alt="Loading..."/></td></tr></tbody>
  </table>
  <div id="in-cb-paging-size-selecter" style="float:left; margin:10px 0;">
    <input id="in-cb-paging-size" type="hidden" value="20"/>
    <a class="paging paging-selected" href="javascript:void(0);" onclick="javascript:changePagingSize('20', 'in-cb', '&first=0&last=19', this);">20</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('50', 'in-cb', '&first=0&last=49', this);">50</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('100', 'in-cb', '&first=0&last=99', this);">100</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('500', 'in-cb', '&first=0&last=499', this);">500</a>
  </div>
  
  <select id="in-cb-paging-filter" style="float:left; margin:10px 0 0 10px;" onchange="javascript:changeFilter('in-cb', this);">
    <option value ="All" selected="selected">[lang.listLogsTable_All]</option>
    <option value ="Received">[lang.listLogsTable_Received]</option>
    <option value ="Received Error">[lang.listLogsTable_ReceivedError]</option>
  </select>

  <input id="in-cb-paging-current" type="hidden" value="1"/>
  <div id="in-cb-paging-num" style="float:right; margin:10px 3%;"></div>

  <rsb:catch code="*">
    <rsb:include file="../errorHTML.rst"/>
  </rsb:catch>
</rsb:try>
