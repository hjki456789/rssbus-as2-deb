<!-- App I18N Config -->
<rsb:exists item="lang">
  <rsb:else>
    <rsb:check attr="_request.server:REQUEST_METHOD">
      <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
        <rsb:check attr="site_language">
          <rsb:set attr="_profile.site_language" value="[site_language]"/>
          <rsb:set attr="_session.site_language" value="[site_language]"/>
        </rsb:check>
      </rsb:equals>
    </rsb:check>

    <rsb:exists item="_session">
      <rsb:check attr="_session.site_language">
        <rsb:else>
          <rsb:check attr="_profile.site_language">
            <rsb:set attr="_session.site_language" value="[_profile.site_language]"/>
            <rsb:else>
              <rsb:set attr="_profile.site_language" value="English"/>
              <rsb:set attr="_session.site_language" value="English"/>
            </rsb:else>
          </rsb:check>
        </rsb:else>
      </rsb:check>
      <rsb:set attr="tmp.site_language" value="[_session.site_language]"/>
      <rsb:else>
        <rsb:check attr="_profile.site_language">
          <rsb:else>
            <rsb:set attr="_profile.site_language" value="English"/>
          </rsb:else>
        </rsb:check>
        <rsb:set attr="tmp.site_language" value="[_profile.site_language]"/>
      </rsb:else>
    </rsb:exists>

    <rsb:check attr="site.langPath">
      <rsb:else>
        <rsb:set attr="site.langPath" value="[_about.approot]/shared/lang"/>
      </rsb:else>
    </rsb:check>
  
    <rsb:try>
      <rsb:set attr="langFile" value="[site.langPath]/[tmp.site_language].rst"/>
      <rsb:set attr="langExists" value="[langFile | fileexists]"/>
      <rsb:equals attr="langExists" value="true">
        <rsb:include file="[langFile]"/>
      </rsb:equals>
      <rsb:catch code="*">
        [_details]
      </rsb:catch>
    </rsb:try>
    
  </rsb:else>
</rsb:exists>