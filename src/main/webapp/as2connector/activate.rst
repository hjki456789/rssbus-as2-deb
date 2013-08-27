<rsb:set attr="page.about" value="selected"/>
<!--header-->
<rsb:include file='header.rst' />

<rsb:set attr="lic.licfile" value="RSSBus.[site.supportPartnerType | capitalize]connectorOps.lic"/>
<rsb:set attr="lic.lic_check_op" value="[site.supportPartnerType | tolower]connectorCheckLicense"/>

<rsb:set attr="lic.prod" value="AAY3-[site.lic_suffix]"/>

<rsb:set attr="lic.freename" value="[lang.activate_demoname]"/>
<rsb:set attr="lic.freedesc" value="[lang.activate_demodesc]"/>
<rsb:set attr="lic.freebtn" value="[lang.activate_demobtn]"/>
<rsb:set attr="lic.freekey" value="XAAY3-RSFRE-ES1NG-1ETP9-323P0"/>

<rsb:set attr="lic.demoname" value="30-Day Trial License"/>
<rsb:set attr="lic.demodesc" value="This option will enable a fully functional license which will expire after 30 days. After 30 days, this option will no longer be available."/>     

<rsb:set attr="lic.fullname" value="[lang.activate_fullname]"/>
<rsb:set attr="lic.fulldesc" value="[lang.activate_fulldesc]"/>     

<rsb:try>
  <div class="xfluid">
    <div id="contentwrapper" class="x11 abscenter">
      <div id="tabs" class="ui-tabs">
        <h2 class="infoNameDiv">
          <span>[lang.activateTitle_licenseRequired]</span>
        </h2>
        <div class="trans tabs-container">
          <div class="ui-notabs"></div>
        </div>
        
        <rsb:include file='view/activate.rst' />
      </div>
    </div>
  </div>
  
  <rsb:catch code="*">
    <div class="xfluid">
      <div class="x11 abscenter">
        <rsb:include file='errorHTML.rst'/>
      </div>
    </div>
  </rsb:catch>
</rsb:try>
    
<!--footer-->
<rsb:include file='footer.rst' />
