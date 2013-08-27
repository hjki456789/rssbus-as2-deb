<rsb:include file="../config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:set attr="input.orgname" value="[orgname]" />
<rsb:set attr="input.logType" value="Sent"/>
<rsb:set attr="input.sort" value="[sort]"/>
<rsb:set attr="input.desc" value="[desc]"/>
<rsb:set attr="input.type" value="[type]"/>
<rsb:set attr="input.filter" value="[filter]"/>

<rsb:call op="[service.getPartner]" in="input">
  <rsb:set item='partner' copyfrom='_out1'/>
</rsb:call>

<rsb:set attr="tmp.unsentcount" value="0"/>
<rsb:call op="[service.listUnsentLogs]" in="input" save="unsentlist">
  <rsb:set attr="tmp.unsentcount" value="[_index]"/>
</rsb:call>

<rsb:set attr="tmp.count" value="[first | expr('[tmp.unsentcount] - 1')]"/>
<rsb:set attr="tmp.setfirst" value="[first | greaterthan([tmp.count])]"/>
<rsb:equals attr="tmp.setfirst" value="true">
  <rsb:set attr="tmp.sentfirst" value="[first | expr('[first] - [tmp.unsentcount]')]"/>
  <rsb:else>
    <rsb:set attr="tmp.sentfirst" value="0"/>
  </rsb:else>
</rsb:equals>
<rsb:set attr="tmp.sentlast" value="[first | expr('[last] - [tmp.unsentcount]')]"/>

<rsb:set attr="tmp.hasSent" value="[tmp.sentlast | greaterthan(0)]"/>
<rsb:equals attr="tmp.hasSent" value="true">
  <rsb:set attr="input.first" value="[tmp.sentfirst]"/>
  <rsb:set attr="input.last" value="[tmp.sentlast]"/>
  <rsb:else>
    <rsb:set attr="input.first" value="0"/>
    <rsb:set attr="input.last" value="0"/> <!-- Always get one item to get the total count -->
  </rsb:else>
</rsb:equals>
<rsb:call op="[service.listSentLogs]" in="input" save="sentlist"/>

<rsb:set attr="tmp.sentcount" value="0"/>
<rsb:call op="[_feeds.sentlist]" output="out">
  <rsb:set attr="tmp.sentcount" value="[out.count]"/>
  <rsb:break/>
</rsb:call>

<rsb:equals attr="tmp.setfirst" value="true">
  <rsb:call op="feedConcat?feed=[_feeds.sentlist | urlencode]" save="loglistConcat"/>
  <rsb:else>
    <rsb:call op="feedConcat?feed=[_feeds.unsentlist | urlencode]&feed=[_feeds.sentlist | urlencode]" save="loglistConcat"/>
  </rsb:else>
</rsb:equals>

<rsb:check attr="first">
  <rsb:check attr="last">
    <rsb:set attr="pagingParameters" value="&first=0&last=[last | expr('[last] - [first]')]"/>
  </rsb:check>
</rsb:check>

<rsb:call op="feedRange?feed=[_feeds.loglistConcat | urlencode][pagingParameters | def('')]" save="loglistRange"/>

<rsb:set attr="tmp.items" value=""/>
<rsb:call op="[_feeds.loglistRange]" output="out">
  <rsb:equals attr="_index" value="1">
    <rsb:set attr="tmp.item" value="{filename:'[out.filename]', timestamp:'[out.timestamp]', filesize:[out.filesize], status:'[out.status]'}"/>
    <rsb:else>
      <rsb:set attr="tmp.item" value=",{filename:'[out.filename]', timestamp:'[out.timestamp]', filesize:[out.filesize], status:'[out.status]'}"/>
    </rsb:else>
  </rsb:equals>
  <rsb:set attr="tmp.items" value="[tmp.items][tmp.item]"/>
</rsb:call>

<tr>
  <td class="hide">
    <input id="out-cb-count" type="hidden" value="[count | expr('[tmp.sentcount] + [tmp.unsentcount]')]"/>
    <input id="out-cb-items" type="hidden" value="var items = \[[tmp.items]\];"/>
  </td>
</tr>

<rsb:check item="partner" attr="a2p:dirrestart">
  <rsb:set attr="restart.path" value="[partner.a2p:dirrestart]"/>
  <rsb:set attr="restart.mask" value="*.headers"/>
  <rsb:check value="[restart.path | direxists]">
    <rsb:call op="fileListDir" in="restart" save="as2restartetags"/>
  </rsb:check>
</rsb:check>

<rsb:call op="[_feeds.loglistRange]" output="out">
  <rsb:set attr="subname" value="[out.id | urlencode]"/>
  
  <rsb:set attr="tmp.atpCount" value=""/>
  <rsb:set attr="tmp.orgFilename" value="[out.filename]"/>
  <rsb:set attr="tmp.posFail" value="[out.filename | find('.failed.')]"/>
  <rsb:notequals attr="tmp.posFail" value="-1">
    <rsb:set attr="tmp.orgFilename" value="[out.filename | substring(0, [tmp.posFail])]"/>
    <rsb:set attr="tmp.atpCount" value=" (Attempts: [out.filename | getfileext | substring(1)])"/>
  </rsb:notequals>
  
  <rsb:equals attr="out.status" value="Unsent">
    <tr class="file unsent">
      <td>
        <input class="out-cb out-cb-send" type="checkbox" value="[service.deleteOutgoingFiles | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[out.filename | urlencode]"/>
        <input class="out-cb-send-url" type="hidden" value="[view.sendFile | urlresolve]?orgname=[input.orgname | urlencode]&file=[out.filename | urlencode]"/>
        <input class="out-cb-send-id" type="hidden" value="[out.filename]"/>
      </td>
      <td class="first">[out.timestamp]</td>
      <td class="center">[lang.listLogsTable_[out.status | replace(' ', '')]][tmp.atpCount]</td>
      <td style="white-space: nowrap"><a style="float:left" href="view.rst?file=[partner.a2p:diroutgoing | pathcombine('[out.filename]')]&fileName=[out.filename | filename | urlencode]">[tmp.orgFilename]</a></td>
      <td style="white-space: nowrap" class="center">[out.filesize | readablesize()]</td>
    </tr>
    
    <rsb:else>
      <tr class="file" onclick="javascript:toggleLogTable('out-cb','[view.listSentLogsSubTable | urlresolve]?orgname=[input.orgname | urlencode]&dir=[out.id | urlencode]', this, event);">
        <rsb:set attr="tmp.color" value="green"/>
        <rsb:equals attr="out.status" value="Send Error">
          <rsb:set attr="tmp.color" value="red"/>
        </rsb:equals>
        <rsb:equals attr="out.status" value="Pending MDN">
          <rsb:set attr="tmp.color" value="goldenrod"/>
        </rsb:equals>
        <rsb:equals attr="out.status" value="Pending Receipt">
          <rsb:set attr="tmp.color" value="goldenrod"/>
        </rsb:equals>
        <rsb:equals attr="out.status" value="MDN Error">
          <rsb:set attr="tmp.color" value="red"/>
        </rsb:equals>
      
        <!-- Restart Check -->
        <rsb:set attr="tmp.canRestart" value=""/>
        <rsb:set attr="tmp.etag" value="[out.etag | def('')]"/>
        <rsb:check value="[partner.a2p:supportrestart | def('false')]">
          <rsb:check attr="out.etag">
            <rsb:check attr="_feeds.as2restartetags">
              <rsb:call op="[_feeds.as2restartetags]" output="out">
                <rsb:equals attr="out.file:name" value="[tmp.etag].headers">
                  <rsb:equals attr="tmp.color" value="red">
                    <rsb:set attr="tmp.fexists" value="[partner.a2p:diroutgoing | pathcombine('[tmp.orgFilename]') | fileexists('true','false')]"/>
                    <rsb:set attr="tmp.orgFullFilename" value="[tmp.orgFilename]"/>
                    <rsb:equals attr="tmp.fexists" value="false">
                      <rsb:call op="[_feeds.unsentlist]" output="out">
                        <rsb:set attr="tmp.fexists" value="[out.filename | startswith([tmp.orgFilename],'true','false')]" />
                        <rsb:equals attr="tmp.fexists" value="true">
                          <rsb:set attr="tmp.orgFullFilename" value="[out.filename]"/>
                          <rsb:break/>
                        </rsb:equals>
                      </rsb:call>
                    </rsb:equals>
                    <rsb:equals attr="tmp.fexists" value="true">
                      <rsb:set attr="tmp.canRestart" value=" \[R\]"/>
                    </rsb:equals>
                  </rsb:equals>
                </rsb:equals>
              </rsb:call>
            </rsb:check>
          </rsb:check>
        </rsb:check>

        <rsb:set attr="tmp.deleteAttachment" value=""/>
        <rsb:equals attr="partner.a2p:type" value="as2" case="ignore">
          <rsb:check attr="service.deleteAttachmentFile">
            <rsb:set attr="tmp.deleteAttachment" value=",[service.deleteAttachmentFile | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[subname]&logType=[input.logType]"/>
          </rsb:check>
        </rsb:equals>
        
        <td>
          <rsb:equals attr="tmp.canRestart" value="">
            <input class="out-cb" type="checkbox" value="[service.deleteLog | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[subname]&logType=[input.logType]&logType2=AsyncMDN,[service.deleteSentFile | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[out.fullname | filename | urlencode][tmp.deleteAttachment]"/>
            <rsb:else>
              <input class="out-cb out-cb-restart" type="checkbox" value="[service.deleteLog | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[subname]&logType=[input.logType]&logType2=AsyncMDN,[service.deleteRestartFile | urlresolve]?orgname=[input.orgname | urlencode]&etag=[tmp.etag],[service.deleteSentFile | urlresolve]?orgname=[input.orgname | urlencode]&fileName=[tmp.orgFilename | urlencode][tmp.deleteAttachment]"/>
              <input class="out-cb-restart-url" type="hidden" value="[view.as2RestartFile | urlresolve]?orgname=[input.orgname | urlencode]&etag=[tmp.etag | urlencode]&fileName=[tmp.orgFullFilename | urlencode]"/>
              <input class="out-cb-restart-id" type="hidden" value="[out.id]"/>
            </rsb:else>
          </rsb:equals>
        </td>
        <td class="first" style="white-space: nowrap">[out.timestamp]</td>
        <td class="center" style="color:[tmp.color];">[lang.listLogsTable_[out.status | replace(' ', '')]][tmp.canRestart]</td>
        <td>
          <rsb:set attr="tmp.fexists" value="[out.fullname | fileexists('true','false')]"/>
          <rsb:equals attr="tmp.fexists" value="true">
            <a title="[out.fullname]" href="view.rst?file=[out.fullname]&fileName=[tmp.orgFilename | filename | urlencode]">[tmp.orgFilename]</a>
            <rsb:else>
              [tmp.orgFilename]
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
              <col width="150px" />
              <col width="150px" />
              <col width="*" />
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
            <tbody class="out-cb-logtable">
              <tr><td colspan="3" align="center" style="height: 80px;"><img src="../shared/img/loading.gif"  alt="Loading..."/></td></tr>
            </tbody>
          </table>
        </td>
        <td></td>
      </tr>
    </rsb:else>
  </rsb:equals>
</rsb:call>
