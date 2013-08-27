<rsb:include file="../config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:set attr="input.orgname" value="[orgname]" />
<rsb:set attr="input.logType" value="Received"/>
<rsb:set attr="input.logname" value="[dir]"/>
<rsb:set attr="input.addtocache" value="false"/>

<rsb:call op="[service.addReceivedCache]" in="input" output="out">
  <rsb:enum attr="out.rss:mtime#">
    <tr>
      <td>[_value]</td>
      <td class="center">[lang.listLogsSubTable_[out.rss:type#[_index]]]</td>
      <td><a title="[out.rss:fullname#[_index]]" href="view.rst?file=[out.rss:fullname#[_index] | urlencode]&fileName=[out.rss:name#[_index] | urlencode]">[out.rss:name#[_index]]</a></td>
    </tr>
  </rsb:enum>
</rsb:call>
