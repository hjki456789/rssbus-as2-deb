<rsb:set item="pg" attr="script">
  <!--external javascript-->
  <script type="text/javascript" src="../shared/js/app.js?#[site.buildno | def]"></script>
  
  <rsb:set attr="tmp.selectedItem" value=""/>
  <rsb:check attr="evt">
    <rsb:set attr="tmp.selectedItem" value="[evt]"/>
    <rsb:set attr="tmp.showInfo" value="rsbcall.showEventInfo({evt:'[evt]'});"/>
  </rsb:check>
  <rsb:check attr="svc">
    <rsb:set attr="tmp.selectedItem" value="[svc]"/>
    <rsb:set attr="tmp.showInfo" value="rsbcall.showServiceInfo({svc:'[svc]'});"/>
  </rsb:check>

  <script type="text/javascript">
    $(function() {
      rsbcall.init();
      
      [tmp.showInfo | def('')]
    });
  </script>
</rsb:set>

<rsb:match value="[pg.includeheader | def('true') | tolower]" pattern="true">
  <rsb:include file="header.rst"/>

      <!-- headline -->
      <div id="headline" class="trans">
        <span class='trans headline-right'>
          [pg.menuscript | def('')]
        </span>
      </div>

      <div class="xfluid">
</rsb:match>

      <div id="leftcolumn" class='portlet x3'>
        <div id="options">
          <rsb:set attr="list.type" value="rsb"/>
          <rsb:set attr="list.app" value="[pg.appdir]"/>
          <rsb:call op="priv/listAppFiles.rsb" in="list" output="out">
            <rsb:first>
              <h3 id="appServiceListBar" class="ca-header" onclick="javascript:rsbcall.showServiceIntro();rsbcall.showServicesToggle('appServicesList', this);">
                <span class="ui-icon"></span><a href="javascript:void(0);">[lang.services_services]</a>
              </h3>
              <ul id="appServicesList" class="ca-content">
            </rsb:first>
            <li id="svc_[_index]" class="listItem [tmp.selectedItem | equals('[out.name]', 'selectedItem','')]">
              <a href="?svc=[out.name]" class="itemName staticWidth" title="[out.name]">
              <span class='ca-treeitem app-icon app-icon-svc'></span>
              <span>[out.name]</span></a>
            </li>
            <rsb:last>
              </ul>
            </rsb:last>
          </rsb:call>
          <rsb:call op="priv/listAppEvents.rsb" in="list" output="out">
            <rsb:first>
              <h3 id="appEventListBar" class="ca-header" onclick="javascript:rsbcall.showEventIntro();rsbcall.showServicesToggle('appEventsList', this);">
                <span class="ui-icon"></span><a href="javascript:void(0);">[lang.services_events]</a>
              </h3>
              <ul id="appEventsList" class="ca-content">
            </rsb:first>
            <li id="evt_[_index]" class="listItem [tmp.selectedItem | equals('[out.name]', 'selectedItem','')]">
              <a href="?evt=[out.name]" class="itemName staticWidth" title="[out.name]">
              <span class='ca-treeitem app-icon app-icon-svc'></span>
              <span>[out.name]</span></a>
            </li>
            <rsb:last>
              </ul>
            </rsb:last>
          </rsb:call>
        </div>
      </div>
    
      <div id="contentwrapper" class='x9'>
        <div id="contentcolumn">
          <div id="servicesIntro" class="wrap-content">
            <rsb:include file="../shared/view/servicesIntro.rst" />
          </div>
          <div id="eventsIntro" class="wrap-content" style="display:none;">
            <rsb:include file="../shared/view/eventsIntro.rst" />
          </div>
          <div id="serviceInfo" class="wrap-content" style="display:none;">
            <rsb:include file="../shared/view/serviceInfo.rst" />
          </div>
          <div id="eventInfo" class="wrap-content" style="display:none;">
            <rsb:include file="../shared/view/eventInfo.rst" />
          </div>
        </div>
      </div>
  
  <!-- Save changes -->
  <div id="addMapInput" class="popup" style="height:100px;width:400px;">
    <a href="javascript:void(0);" onclick="javascript:$('#addMapInput').hide(50);$('#darkNight').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.servicesTitle_attrName]</h3>
    <input name="addNewAttrName" class="dialog-item" style="margin:0 0 8px 30px;width:85%;" />
    <div class="save">
      <a class="btn" href="javascript:void(0);" onclick="javascript:$('#addMapInput').hide(50);$('#darkNight').hide(50);$(window).trigger('addNewAttrName', $('#addMapInput input\[name=addNewAttrName\]').val());return false;" >
        <span>[lang.services_add]</span>
      </a>
      <a class="btn" href="javascript:void(0);" onclick="javascript:$('#addMapInput').hide(50);$('#darkNight').hide(50);return false;" >
        <span>[lang.services_cancel]</span>
      </a>
    </div>
  </div>
  
  <!-- Rich footer -->
  <rsb:match value="[pg.includeheader | def('true') | tolower]" pattern="true">
    </div>
    
    <rsb:include file="footer.rst"/>
  </rsb:match>
	