<rsb:include file="config.rst"/>
<rsb:include file="~/shared/view/loadLanguage.rst"/>

<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
  <rsb:check attr="urlHash">
    <rsb:set item="pg" attr="urlHash" value="[urlHash]"/>
  </rsb:check>
</rsb:equals>

<rsb:set item="pg" attr="script">
  <link type="text/css" href="css/app.css?#[app.buildno | def]" rel="stylesheet" />
  <script type="text/javascript" src="lang/[_session.site_language].js?#[app.buildno | def]"></script>
  <script type="text/javascript" src="js/ajaxfileupload.js?#[app.buildno | def]"></script>
  <script type="text/javascript" src="js/app.js?#[app.buildno | def]"></script>
  
  &lt;!--\[if lte IE 6\]&gt;
  <link type="text/css" href="css/app-ie6.css?#[app.buildno | def]" rel="stylesheet" />
  <script type="text/javascript">
    $(function() {
      $("#serviceList .listItem").bind("mouseenter mouseleave", function(e){
        var x = $($(e.currentTarget).children("form")\[0\]).children(".small");
        if(x.css("display") == "none")
          x.css("display", "block");
        else x.css("display", "none");
      });
      
      $(".table-sort").bind("mouseenter mouseleave", function(e){
        var s = $($(e.currentTarget).children("span")\[0\]);
        
        if(s.hasClass("hover"))
          s.removeClass("hover");
        else s.addClass("hover");
      });
    });
  </script>
  &lt;!\[endif\]--&gt;
  
  <!--javascript-->
  <script language="javascript">
    <rsb:check attr="pg.urlHash">
      location.hash = '[pg.urlHash]';
    </rsb:check>

    $(function() {
      updateTab();
      
      saveInputs("settings");
      saveInputs("advanced");
      
      //Unload check unsave.
      window.onbeforeunload = function() {
        var page = location.hash.substring(1);
        if(page == "settings" || page == "advanced") 
          if(!checkUnsave(page, true))
            return "[lang.js_checkUnsave]";
      }
      
      $(window).hashchange(updateTab);
    });
  </script>
</rsb:set>
<rsb:set item="pg" attr="appname" value="[site.supportPartnerType] Connector"/>
<rsb:include file="../shared/header.rst"/>

    <!-- headline -->
    <div id="headline" class="trans">
      <span class='trans headline-right'>
        <div id="menu">
          <ul class="navigation level1" id="tab-partners">
            <li>
              <a href="partners.rst" class="trans [page.partners | def('')]">[lang.menu_partners]</a>
            </li>
            <li>
              <a href="profile.rst" class="trans [page.profile | def('')]">[lang.menu_profile]</a>
            </li>
            <li>
              <a href="help.rst" class="trans [page.help | def('')]">[lang.menu_help]</a>
            </li>
            <li>
              <a href="about.rst" class="trans [page.about | def('')]">[lang.menu_about]</a>
            </li>
          </ul>
        </div>
        
        <div class="services">
          <a href="services.rst">
            <span class="trans app-icon app-icon-svc_w"></span>&nbsp;<span>[lang.menu_services]</span> 
          </a>
        </div>
      </span>
    </div>
