<rsb:include file="config.rst"/>
<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
<rsb:check attr="orgname">
<rsb:call op="[service.getPartner]">
<rsb:set item='partner' copyfrom='_out1'/>
</rsb:call>
<rsb:check item="partner" attr="a2p:diroutgoing">
<rsb:set attr="in.inputname#1" value="testfile"/>
<rsb:set attr="in.path#1" value="[partner.a2p:diroutgoing]"/>
<rsb:call op="[site.supportPartnerType | tolower]connectorHttpReceive" in="in" output="out">
[out.filename]
</rsb:call>
</rsb:check>
</rsb:check>
</rsb:equals>
