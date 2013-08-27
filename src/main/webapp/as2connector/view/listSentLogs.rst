<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:try>
  <rsb:call op="[site.supportPartnerType | tolower]connectorCheckLicense"/>

  <rsb:check item="partner" attr="a2p:diroutgoing">
    <p>
      <i>
        <span>[lang.table_sendInfo1]</span>
        <b>[partner.a2p:diroutgoing]</b>
        <span>[lang.table_sendInfo2]</span><br/>
        <span>[lang.table_automationInfo]</span>
      </i>
    </p>
    
    <div style="margin:10px">
      <a class="btn" href="javascript:void(0);" onclick="javascript:refreshLogsTable('out-cb');"><span><span class="tb-refresh">[lang.table_refresh]</span></span></a>
      
      <a class="btn btn-copy" href="javascript:void(0);" onclick="javascript:$.post('[service.createTestFile | urlresolve]?orgname=[orgname | urlencode]',null,function(){refreshLogsTable('out-cb')});">
        <span><b class='trans app-icon-btn app-icon-btn-copy'></b>[lang.table_createTestFiles]</span>
      </a>

      <a class="btn" href="javascript:void(0);" onclick="javascript:showUploadFiles('[orgname]');">
        <span><b class='trans app-icon-btn app-icon-btn-print'></b>Upload Files</span>
      </a>
      
      <rsb:match pattern="[site.supportPartnerType | tolower]" value="oftp">
        <a class="btn" href="javascript:void(0);" onclick="javascript:popupWindow('#exchangeCert');return false;"><span>Exchange Certificate</span></a>
        <rsb:else>
          <rsb:match pattern="[partner.a2p:type | tolower]" value="oftp">
            <a class="btn" href="javascript:void(0);" onclick="javascript:popupWindow('#exchangeCert');return false;"><span>Exchange Certificate</span></a>
          </rsb:match>
        </rsb:else>
      </rsb:match>
      
      <a class="btn" id="out-cb-delete" href="javascript:void(0);"><span>[lang.table_delete]</span></a>
      
      <a class="btn" id="out-cb-send" href="javascript:void(0);"><span>[lang.table_send]</span></a>
      
      <rsb:check value="[partner.a2p:supportrestart | def('false')]">
        <rsb:check item="partner" attr="a2p:dirrestart">
          <a class="btn" id="out-cb-restart" href="javascript:void(0);"><span>[lang.table_restart]</span></a>
        </rsb:check>
      </rsb:check>
      <span id="out-cb-load" style="display: none;margin:0 8px;vertical-align: top;"><img style="vertical-align: middle;" src="../shared/img/loading2_20px.gif" alt="Loading..."/></span>
      <a class="btn btn-download expExcel" href="[service.listSentLogs | urlresolve]?@csv&@fmtoptions=ex_non_rss&orgname=[_session.[site.supportPartnerType]currentpartner | urlencode]&logType=Sent&first="><span><b class='trans app-icon-btn app-icon-btn-download'></b>[lang.table_exportExcel]</span></a>
    </div>
    
    <div id="logResponseMsg" style="text-align: center;"></div>
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
        <th><input id="out-cb" onclick="javascript:toggleAllLogs('out-cb')" type="checkbox"/></th>
        <th class="out-cb-sort table-sort" onclick="javascript:tableSort('out-cb', 'sort=timestamp&desc=true&type=text', this);"><span class="table-sort-desc">[lang.table_dateTime]</span></th>
        <th class="out-cb-sort table-sort" onclick="javascript:tableSort('out-cb', 'sort=status&desc=true&type=text', this);"><span>[lang.table_status]</span></th>
        <th class="out-cb-sort table-sort" onclick="javascript:tableSort('out-cb', 'sort=filename&desc=true&type=text', this);"><span>[lang.table_fileName]</span></th>
        <th class="out-cb-sort table-sort" onclick="javascript:tableSort('out-cb', 'sort=filesize&desc=true&type=numeric', this);"><span>[lang.table_fileSize]</span></th>
      </tr>
    </thead>
    <input id="out-cb-refresh" type="hidden" value="[view.listSentLogsTable | urlresolve]?orgname=[_session.[site.supportPartnerType]currentpartner | urlencode]&sort=timestamp&desc=true&type=text&filter=All&first=0&last=19"/>
    <tbody id="out-cb-table"><tr><td colspan="5" align="center" style="height: 150px;"><img id="out-cb-loadtable" src="../shared/img/loading.gif" alt="Loading..."/></td></tr></tbody>
  </table>
  <div id="out-cb-paging-size-selecter" style="float:left; margin:10px 0;">
    <input id="out-cb-paging-size" type="hidden" value="20"/>
    <a class="paging paging-selected" href="javascript:void(0);" onclick="javascript:changePagingSize('20', 'out-cb', '&first=0&last=19', this);">20</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('50', 'out-cb', '&first=0&last=49', this);">50</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('100', 'out-cb', '&first=0&last=99', this);">100</a>
    <a class="paging" href="javascript:void(0);" onclick="javascript:changePagingSize('500', 'out-cb', '&first=0&last=499', this);">500</a>
  </div>
  
  <select id="out-cb-paging-filter" style="float:left; margin:10px 0 0 10px;" onchange="javascript:changeFilter('out-cb', this);">
    <option value="All" selected="selected">[lang.listLogsTable_All]</option>
    <option value="Sent">[lang.listLogsTable_Sent]</option>
    <option value="Unsent">[lang.listLogsTable_Unsent]</option>
    <option value="Send Error">[lang.listLogsTable_SendError]</option>
    <rsb:equals attr="partner.a2p:type" value="as2" case="ignore">
      <option value="Pending MDN">[lang.listLogsTable_PendingMDN]</option>
      <option value="MDN Error">[lang.listLogsTable_MDNError]</option>
    </rsb:equals>
  </select>

  <input id="out-cb-paging-current" type="hidden" value="1"/>
  <div id="out-cb-paging-num" style="float:right; margin:10px 3%;"></div>

  <rsb:catch code="*">
    <rsb:include file="../errorHTML.rst"/>
  </rsb:catch>
</rsb:try>


