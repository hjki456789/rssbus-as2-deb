<rsb:set attr="page.help" value="selected"/>
<!--header-->
<rsb:include file='header.rst' />

<rsb:try>
  <div class="xfluid">
    <div id="contentwrapper" class="x11 abscenter">
      <div id="tabs" class="ui-tabs">
        <h3 class="infoNameDiv">
          <span>[lang.help]</span>
        </h3>
        <div class="trans tabs-container">
          <div class="ui-notabs"></div>
        </div>
      
        <div class="configInfo">
          <h3>[lang.helpOnline]</h3>
          <span>[lang.as2_helpOnlineContent]</span>
          <ul class="uldesc">
            <li>
              <a target="_blank" href="http://www.rssbus.com/app_files/AAY3-[site.lic_suffix]/?i=getstarted"><span>[lang.helpOnlineStart]</span></a>
            </li>
            <li>
              <a target="_blank" href="http://www.rssbus.com/app_files/AAY3-[site.lic_suffix]/?i=faq"><span>[lang.helpOnlineFAQ]</span></a>
            </li>

            <rsb:try> <!-- Get Additional Online Help Resources -->
              <rsb:call op="http://www.rssbus.com/app_files/AAY3-[site.lic_suffix]/default.rsb">
              <li>
                <a target="_blank" href='[link]'>[rss:title]</a>
              </li>
              </rsb:call>
              <rsb:catch></rsb:catch>
            </rsb:try>
          </ul>
        </div>

        <div class="configInfo">
          <h3>[lang.helpTechnicalSupport]</h3>
          <span>
            [lang.helpTechnicalSupportContent]
          </span>
        </div>
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
