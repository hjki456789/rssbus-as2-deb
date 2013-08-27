<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
  <rsb:check attr="deletePartner">
    <rsb:set attr="deletePartner" value="[deletePartner | htmldecode]"/>
    <rsb:equals attr="deletePartner" value="[_session.[site.supportPartnerType]currentpartner | def('')]">
      <rsb:set attr="_session.[site.supportPartnerType]currentpartner" value=""/>
      <rsb:set attr="_session.[site.supportPartnerType]currentfriendlyname" value=""/>
      <rsb:set attr="_session.[site.supportPartnerType]currenttype" value=""/>
    </rsb:equals>
    <rsb:set attr="orgname" value="[deletePartner]"/>
    <rsb:call op="[service.deletePartner]" />
    <rsb:unset attr="orgname"/>
  </rsb:check>

  <rsb:check attr="newPartner">
    <rsb:set attr="_session.[site.supportPartnerType]currentpartner" value=""/>
    <rsb:set attr="_session.[site.supportPartnerType]currentfriendlyname" value=""/>
    <rsb:set attr="_session.[site.supportPartnerType]currenttype" value=""/>
  </rsb:check>

  <rsb:check attr="changePartner">
    <rsb:check attr="current">
      <rsb:set attr="_session.[site.supportPartnerType]currentpartner" value="[current | htmldecode]"/>
      <rsb:else>
        <rsb:set attr="_session.[site.supportPartnerType]currentpartner" value=""/>
        <rsb:set attr="_session.[site.supportPartnerType]currentfriendlyname" value=""/>
        <rsb:set attr="_session.[site.supportPartnerType]currenttype" value=""/>
      </rsb:else>
    </rsb:check>
  </rsb:check>
</rsb:equals>

<ul id="serviceList" class="ca-content">
  <rsb:set attr="tmp.partnercount" value="0"/>
  <rsb:call op="[service.listPartners]">
    <rsb:set attr="tmp.partnercount" value="[_index]"/>
    <rsb:set attr="tmp.isPaid" value=""/>
    <rsb:notequals attr="a2p:type" value="AS2">
      <rsb:set attr="tmp.isPaid" value="*"/>
    </rsb:notequals>
    
    <rsb:check attr="newPartner">
      <rsb:else>
        <rsb:check attr="_session.[site.supportPartnerType]currentpartner">
          <rsb:else>
            <rsb:check attr="save">
              <rsb:set attr="tmp.newPartner" value="True" />
              <rsb:set attr="tmp.partnerType" value="[type | def('AS2')]" />
              <rsb:else>
                <rsb:set attr="_session.[site.supportPartnerType]currentpartner" value="[a2p:orgname]"/>
              </rsb:else>
            </rsb:check>
          </rsb:else>
        </rsb:check>
      </rsb:else>
    </rsb:check>
      
    <rsb:set item="tmp" attr="selected" value=""/>
    <rsb:equals attr="a2p:orgname" value="[_session.[site.supportPartnerType]currentpartner | def('')]">
      <rsb:set item="tmp" attr="selected" value="selectedItem" />
      <rsb:set attr="_session.[site.supportPartnerType]currenttype" value="[a2p:type]"/>
      <rsb:set attr="_session.[site.supportPartnerType]currentfriendlyname" value="[a2p:friendlyname]"/>
    </rsb:equals>

    <li id="[a2p:orgname]" class="listItem [tmp.selected]">
      <form method="post">
        <input type="hidden" name="urlHash" value=""/>
        <input type="hidden" name="deletePartner" value="[a2p:orgname | htmlencode]"/>
        <rsb:set attr="tmp.friendlynameencode" value="[a2p:friendlyname | htmlencode | replace('\'', '\\\'')]"/>
        <a class="small right" title="Delete [a2p:friendlyname | htmlencode]" href="javascript:void(0);" onclick="javascript:if(confirm('[lang.listPartners_deleteConfirm | replace('{0}','[tmp.friendlynameencode]')]')){ $(this).parent('form').submit();} return false;">\[x\]</a>
      </form>
      
      <form method="post">
        <input type="hidden" name="urlHash" value=""/>
        <input type="hidden" name="current" value="[a2p:orgname | htmlencode]"/>
        <input type="hidden" name="changePartner" value="True"/>
        <a href="javascript:void(0);" onclick="javascript:$(this).parent('form').submit();return false;" class="itemName staticWidth" >
          <span class="ca-treeitem app-icon app-icon-partner"></span>
          <span>[a2p:friendlyname | htmlencode]</span>
        </a>
      </form>
    </li>
    
    <rsb:last>
      <li><hr /></li>
    </rsb:last>
  </rsb:call>
  
  <rsb:call op="[site.supportPartnerType | tolower]connectorGetLicenseInfo">
    <rsb:set attr="tmp.canaddpartner" value="false"/>
    <rsb:check attr="license:serialnumber">
      <rsb:check attr="license:maxhosts">
        <rsb:set attr="tmp.canaddpartner" value="[tmp.partnercount | isless('[license:maxhosts]','true','false')]"/>
      </rsb:check>
      <rsb:check attr="license:maxpartners">
        <rsb:set attr="tmp.canaddpartner" value="[tmp.partnercount | isless('[license:maxpartners]','true','false')]"/>
      </rsb:check>
      <rsb:check attr="license:maxconnections">
        <rsb:set attr="tmp.canaddpartner" value="[tmp.partnercount | isless('[license:maxconnections]','true','false')]"/>
      </rsb:check>
      <rsb:equals attr="tmp.partnercount" value="0">
        <rsb:set attr="tmp.canaddpartner" value="true"/>
      </rsb:equals>
    </rsb:check>
  </rsb:call>
  
  <rsb:check attr="tmp.newPartner">
    <rsb:set attr="newPartner" value="True"/>
    <rsb:set attr="partnerType" value="[tmp.partnerType]"/>
  </rsb:check>
  <rsb:set item="tmp" attr="selected" value=""/>
  <rsb:check attr="newPartner">
    <rsb:set attr="tmp.selected" value="selectedItem" />
  </rsb:check>
  
  <script type="text/javascript">
    function addNew() {
      if("[tmp.canaddpartner | tolower]" == "true"){
        <rsb:equals attr="site.supportPartnerType" value="edi" case="ignore">
          popupWindow('#partnerTypeChooser');
          <rsb:else>
          $('#fmPartners-new').submit();
          </rsb:else>
        </rsb:equals>
      } else {
        alert("[lang.listPartners_upgradelicense]");
      }
    }
  </script>
  
  <li id="templateList" class="listItem [tmp.selected]">
    <form method="post" id="fmPartners-new">
      <input type="hidden" name="urlHash" value="#settings"/>
      <input type="hidden" name="newPartner" value="True"/>
      <input type="hidden" name="partnerType" value="[site.supportPartnerType]"/>
      <rsb:call op="~/shared/priv/isAdmin.rsb">
        <rsb:equals attr="isadmin" value="true">
          <a title="Create a new partner" href="javascript:void(0);" onclick="javascript:addNew();return false;" class="itemName staticWidth">
            <span class="ca-treeitem app-icon app-icon-plus"></span>
            <span>[lang.listPartners_addPartner]</span>
          </a>
        </rsb:equals>
      </rsb:call>
    </form>
  </li>
</ul>
