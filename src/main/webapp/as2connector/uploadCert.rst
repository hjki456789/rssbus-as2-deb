<rsb:include file="config.rst"/>
<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
<rsb:set attr="in.inputname#1" value="certfile"/>
<rsb:check attr="_input.filename">
  <rsb:set attr="in.filename#1" value="[_input.filename]"/>
</rsb:check>
<rsb:set attr="in.path#1" value="[site.profilesPath]"/>
<rsb:try>
<rsb:call op="[site.supportPartnerType | tolower]connectorHttpReceive" in="in" output="out">
[out.filename]
</rsb:call>
<rsb:catch code="*">
[_message]
</rsb:catch>
</rsb:try>
</rsb:equals>