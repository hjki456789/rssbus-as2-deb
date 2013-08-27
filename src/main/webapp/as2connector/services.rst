<rsb:set attr="page.services" value="selected"/>

<rsb:include file="config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>
<rsb:set item="pg" attr="menuscript">
  <div id="menu">
    <ul class="navigation level1" id="tab-partners">
      <li>
        <a href="partners.rst" class="[page.partners | def('')]">[lang.menu_partners]</a>
      </li>
      <li>
        <a href="profile.rst" class="[page.profile | def('')]">[lang.menu_profile]</a>
      </li>
      <li>
        <a href="help.rst" class="[page.help | def('')]">[lang.menu_help]</a>
      </li>
      <li>
        <a href="about.rst" class="[page.about | def('')]">[lang.menu_about]</a>
      </li>
    </ul>
  </div>
  
  <div class="services">
    <a href="services.rst">
      <span class="trans app-icon app-icon-svc_w"></span>&nbsp;<span>[lang.menu_services]</span> 
    </a>
  </div>
</rsb:set>

<rsb:set item="pg" attr="appshortname" value="[site.supportPartnerType | tolower]"/>
<rsb:set item="pg" attr="appdir" value="[site.supportPartnerType | tolower]connector"/>
<rsb:set item="pg" attr="appname" value="[site.supportPartnerType] Connector"/>
<rsb:include file="../shared/services.rst"/>





