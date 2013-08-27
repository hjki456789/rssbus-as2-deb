<!-- check to see if the partner type is supported -->
<rsb:check attr="_session.[site.supportPartnerType]currenttype">
  <rsb:check attr="view.[_session.[site.supportPartnerType]currenttype]Partner">
    <rsb:else>
      <rsb:throw code="PartnerType" description="The [_session.[site.supportPartnerType]currenttype | def('[site.supportPartnerType]')] partner type is not supported in this application."/>
    </rsb:else>
  </rsb:check>
</rsb:check>

<!--call service to fetch partner info-->
<rsb:check attr="newPartner">
  <rsb:set item="partner" attr="isNew" value='True'/>
  <rsb:else>
    <rsb:check attr="orgname">
      <rsb:unset item='partner'/>
      <rsb:call op="[service.getPartner]">
        <rsb:set item='partner' copyfrom='_out1'/>
      </rsb:call>
    </rsb:check>
  </rsb:else>
</rsb:check>

<rsb:call op="~/shared/priv/isAdmin.rsb">
  <rsb:set attr="page.isadmin" value="[isadmin | tolower]"/>
</rsb:call>

<rsb:check attr="newPartner">
  <div id="tabs" class="ui-tabs ui-widget ui-widget-content">
    <h2 class="infoNameDiv">
      <rsb:set attr="partnerType" value="[partnerType | def('[site.supportPartnerType]')]"/>
      <span>[lang.partner_createNewPartner | replace('{0}', '[partnerType | toupper]')]</span>
    </h2>
    
    <script language="javascript">
      var tabs = new Array('settings','advanced');
      
      var tabContent = new Array('psettings','padvanced');
    </script>
    
    <div class="trans tabs-container">
      <ul id="tabs-caption" class="ui-tabs-nav ui-widget-header">
        <li id="tabs-advanced" class="ui-state-default"><a href="#advanced">[lang.partner_advanced]</a></li>
        <li id="tabs-settings" class="ui-state-default ui-tabs-selected ui-state-active"><a href="#settings">[lang.partner_settings]</a></li>
      </ul>
    </div>

    <rsb:equals attr="site.supportPartnerType" value="edi" case="ignore">
      <rsb:include file="[partnerType | tolower]Partner.rst"/>
      <rsb:else>
        <rsb:include file="[view.[partnerType | def('[site.supportPartnerType]')]Partner]"/>
      </rsb:else>
    </rsb:equals>
  </div>
  
  <rsb:else>
    <rsb:check attr="_session.[site.supportPartnerType]currentpartner">
      <rsb:check attr="page.isPaid">
        <rsb:notequals attr="_session.[site.supportPartnerType]currenttype" value="AS2">
          <rsb:set attr="tmp.isPaidPartner" value="true"/>
        </rsb:notequals>
      </rsb:check>
    

      <rsb:set attr="orgname" value="[_session.[site.supportPartnerType]currentpartner]"/>
      <rsb:set attr="fridendlyorgname" value="[_session.[site.supportPartnerType]currentfriendlyname | def('[orgname]')]"/>
      <div id="tabs" class="ui-tabs ui-widget ui-widget-content">
        <h2 class="infoNameDiv">
          <span>[_session.[site.supportPartnerType]currentpartner | htmlencode]</span>
        </h2>
        
        <rsb:equals attr="page.isadmin" value="true">
          <script language="javascript">
            var tabs = new Array('incoming','outgoing','settings','advanced');
            var tabContent = new Array('pincoming','poutgoing','psettings','padvanced');
          </script>
          <rsb:else>
            <script language="javascript">
              var tabs = new Array('incoming','outgoing');
              var tabContent = new Array('pincoming','poutgoing');
            </script>
          </rsb:else>
        </rsb:equals>
        
        <div class="trans tabs-container">
          <ul id="tabs-caption" class="ui-tabs-nav ui-widget-header">
            <rsb:equals attr="page.isadmin" value="true">
              <li id="tabs-advanced" class="ui-state-default"><a href="#advanced">[lang.partner_advanced]</a></li>
              <li id="tabs-settings" class="ui-state-default"><a href="#settings">[lang.partner_settings]</a></li>
            </rsb:equals>
            <li id="tabs-outgoing" class="ui-state-default"><a href="#outgoing">[lang.partner_outgoing]</a></li>
            <li id="tabs-incoming" class="ui-state-default"><a href="#incoming">[lang.partner_incoming]</a></li>
          </ul>
        </div>

        <div id="pincoming" class="plog">
          <rsb:include file="[view.listReceivedLogs]" />
        </div>
        <div id="poutgoing" class="plog" style="display: none;">
          <rsb:include file="[view.listSentLogs]" />
        </div>
        
        <rsb:equals attr="page.isadmin" value="true">
          <rsb:set attr="partnerType" value="[partner.a2p:type]"/>
          <rsb:equals attr="site.supportPartnerType" value="edi" case="ignore">
            <rsb:include file="[partnerType | tolower]Partner.rst"/>
            <rsb:else>
              <rsb:include file="[view.[partnerType | def('[site.supportPartnerType]')]Partner]"/>
            </rsb:else>
          </rsb:equals>
        </rsb:equals>
      </div>

      <rsb:else>
        <rsb:set attr="temp.hasPartners" value="false" />
        <rsb:call op="[service.listPartners]">
          <rsb:set attr="temp.hasPartners" value="true"/>
        </rsb:call>

        <rsb:equals attr="temp.hasPartners" value="true">
          [lang.partner_noSelected]
          <rsb:else>
            [lang.partner_noPartner | def('[lang.partner_noSelected]')]
          </rsb:else>
        </rsb:equals>
      </rsb:else>
    </rsb:check>
  </rsb:else>
</rsb:check>

