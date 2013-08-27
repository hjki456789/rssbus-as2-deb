<rsb:set attr="page.about" value="selected"/>
<!--header-->
<rsb:include file='header.rst' />

<rsb:try>
  <rsb:call op="[site.supportPartnerType | tolower]connectorGetLicenseInfo">
    <rsb:set item='local' copyfrom='_out1'/>
  </rsb:call>

  <div class="xfluid">
    <div id="leftcolumn" class="x2">
      <img alt="" src="img/seal.png" class="trans center"/>
    </div>
    <div id="contentwrapper" class="x10">
      <div id="tabs" class="ui-tabs">
        <h3 class="infoNameDiv">
          <span>[lang.as2_aboutTitle_about]</span>
        </h3>
        <div class="trans tabs-container">
          <div class="ui-notabs"></div>
        </div>

        <div class="configInfo">
          <h3>[lang.aboutTitle_thankYou]</h3>
          <p><span>[lang.as2_about_thankYouContent1]</span></p>
          <p><span>[lang.as2_about_thankYouContent2]</span></p> 
          <p><span>[lang.as2_about_thankYouContent3] - <a target="_blank" href="http://www.rssbus.com">www.rssbus.com</a></span></p>
        </div>

        <div class="configInfo">
          <h3>[lang.as2_aboutTitle_drummondCertification]</h3>
          <p><span>[lang.as2_about_drummondCertificationContent]</span></p>
        </div>

        <div class="configInfo">
          <h3>[lang.as2_aboutTitle_singleTradingPartner]</h3>
          <p><span>[lang.as2_about_singleTradingPartnerContent]</span></p>
        </div>

        <div class="configInfo">
          <h3>[lang.aboutTitle_licensingInformation]</h3>
          <p><span>[lang.as2_about_licensingInformationContent1]</span></p>

          <p><span>[lang.about_licensingInformationContent2]</span></p>
          <table id="license" border="0" cellpadding="10" cellspacing="0">
            <tbody>
              <tr>
                <td align="right">
                  <span>[lang.as2_about_maximumPartners]</span>
                </td>
                <rsb:check attr="local.license:serialnumber">
                  <rsb:equals attr="local.license:serialnumber" value="BETA">
                    <td>UNLIMITED</td>
                    <rsb:else>
                      <td>[local.license:maxpartners | isless(1,1,[local.license:maxpartners])]&nbsp;
                        <a href="activate.rst"><span>[lang.about_upgradeLicense]</span></a>
                      </td>
                    </rsb:else>
                  </rsb:equals>
                
                  <rsb:else>
                    <td>0&nbsp;
                      <a href="activate.rst"><span>[lang.about_installLicense]</span></a>
                    </td>
                  </rsb:else>
                </rsb:check>
              </tr>
              <tr>
                <td align="right">
                  <span>[lang.about_serialNumber]</span>
                </td>
                <td>
                  <rsb:check attr="local.license:serialnumber">
                    <rsb:equals attr="local.license:serialnumber" value="BETA">
                      \[ TIME-LIMITED-BETA \]
                      <rsb:else>
                        [local.license:serialnumber | def('')]
                      </rsb:else>
                    </rsb:equals>
                  </rsb:check>
                </td>
              </tr>
            </tbody>
          </table>
          <p><span>[lang.as2_about_licensingInformationContent3] <a target='_blank' href='http://www.rssbus.com'>www.rssbus.com</a></span></p>
        </div>
          
        <div class="configInfo">
          <h3>[lang.about_version]</h3>
          <p>[site.appname] - [app.version]</p>
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
