<rsb:include file="../config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:set attr="input.orgname" value="[orgname]" />
<rsb:set attr="input.logType" value="Received"/>
<rsb:set attr="input.sort" value="[sort]"/>
<rsb:set attr="input.desc" value="[desc]"/>
<rsb:set attr="input.type" value="[type]"/>
<rsb:set attr="input.first" value="[first]"/>
<rsb:set attr="input.last" value="[last]"/>
<rsb:set attr="input.filter" value="[filter]"/>

<rsb:call op="[service.getPartner]" in="input">
  <rsb:set item='partner' copyfrom='_out1'/>
</rsb:call>

<rsb:call op="[service.listReceivedLogs]" in="input" save="loglist"/>

<rsb:set attr="tmp.count" value="0"/>
<rsb:set attr="tmp.items" value=""/>
<rsb:call op="[_feeds.loglist]" output="out">
  <rsb:equals attr="_index" value="1">
    <rsb:set attr="tmp.count" value="[out.count]"/>
    <rsb:set attr="tmp.item" value="{filename:'[out.filename]', timestamp:'[out.timestamp]', filesize:[out.filesize], status:'[out.status]'}"/>
    <rsb:else>
      <rsb:set attr="tmp.item" value=",{filename:'[out.filename]', timestamp:'[out.timestamp]', filesize:[out.filesize], status:'[out.status]'}"/>
    </rsb:else>
  </rsb:equals>
  <rsb:set attr="tmp.items" value="[tmp.items][tmp.item]"/>
</rsb:call>

<tr>
  <td class="hide">
    <input id="in-cb-count" type="hidden" value="[tmp.count]"/>
    <input id="in-cb-items" type="hidden" value="var items = \[[tmp.items]\];"/>
  </td>
</tr>

<rsb:call op="[_feeds.loglist]" output="out">
  <rsb:set attr="subname" value="[out.id | urlencode]"/>
  
  <rsb:set attr="tmp.deleteAttachment" value=""/>
  <rsb:equals attr="partner.a2p:type" value="as2" case="ignore">
    <rsb:check attr="service.deleteAttachmentFile">
      <rsb:set attr="tmp.deleteAttachment" value=",[service.deleteAttachmentFile | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[subname]&logType=[input.logType]"/>
    </rsb:check>
  </rsb:equals>

  <tr class="file" onclick="javascript:toggleLogTable('in-cb','[view.listReceivedLogsSubTable | urlresolve]?orgname=[input.orgname | urlencode]&dir=[out.id | urlencode]', this, event);">
    <td>
      <input class="in-cb" type="checkbox" value="[service.deleteLog | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[subname]&logType=[input.logType],[service.deleteReceivedFile | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[out.filename | urlencode][tmp.deleteAttachment]"/>
    </td>
    <td class="first" nowrap="nowrap">[out.timestamp]</td>
    
    <rsb:set attr="tmp.color" value="green"/>
    <rsb:equals attr="out.status" value="Received Error">
      <rsb:set attr="tmp.color" value="red"/>
    </rsb:equals>
    <td style='color: [tmp.color];' class="center">[lang.listLogsTable_[out.status | replace(' ', '')]]</td>
    <td>
      <rsb:set attr="tmp.fexists" value="[partner.a2p:dirincoming | pathcombine('[out.filename]') | fileexists('true','false')]"/>
      <rsb:equals attr="tmp.fexists" value="true">
        <a title="[partner.a2p:dirincoming | pathcombine('[out.filename]')]" href="view.rst?file=[partner.a2p:dirincoming | pathcombine('[out.filename]')]&fileName=[out.filename | filename | urlencode]">[out.filename]</a>
        <rsb:else>
          <rsb:equals attr="out.filename" value="No files downloaded">
            [lang.listLogsTable_noFilesDownloaded]
            <rsb:else>
              [out.filename]
            </rsb:else>
          </rsb:equals>
        </rsb:else>
      </rsb:equals>
    </td>
    <td class="center">[out.filesize | readablesize()]</td>
  </tr>
  
  <tr class="tlog" style="display:none;">
    <td></td>
    <td colspan="3" style="padding:0">
      <table class="log" style="width:100%;">
        <colgroup>
          <col width="150px"/>
          <col width="150px"/>
          <col width="*"/>
        </colgroup>
        <thead>
          <tr>
            <th colspan="3" class="center">
              [lang.table_logMessages]
            </th>
          </tr>
          <tr>
            <th>[lang.table_creationTime]</th>
            <th>[lang.table_logType]</th>
            <th>[lang.table_fileName]</th>
          </tr>
        </thead>
        <tbody class="in-cb-logtable">
          <tr><td colspan="3" align="center" style="height: 80px;"><img src="../shared/img/loading.gif"  alt="Loading..."/></td></tr>
        </tbody>
      </table>
    </td>
    <td></td>
  </tr>
</rsb:call>

