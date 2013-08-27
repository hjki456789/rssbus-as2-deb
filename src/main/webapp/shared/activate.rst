<rsb:include file="config.rst"/>

<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:check attr="name">
      <rsb:set attr="_session.activate_name" value="[name]"/>
      <rsb:check attr="email">
        <rsb:set attr="_session.activate_email" value="[email]"/>
        <rsb:check attr="install-demo">
          
          <rsb:set attr="install.licfile" value="[lic.licfile]" />
          <rsb:set attr="install.prod" value="[lic.prod]"/>
          <rsb:set attr="install.sno" value="[lic.demokey]"/>
          <rsb:set attr="install.nodeid" value="[_about.nodeid]"/>
          <rsb:set attr="install.name" value="[name]"/>
          <rsb:set attr="install.email" value="[email]"/>

          <rsb:call op="../shared/priv/admin/installLicense.rsb" in="install" out="outDemo">
            <rsb:check attr="outDemo.status">
              <rsb:set attr="result.status" value="[outDemo.status]"/>
              <rsb:set attr="result.errorMessage" value="[outDemo.errorMessage | def('')]"/>
            </rsb:check>
          </rsb:call>
        </rsb:check>
        
        <rsb:check attr="install-full">
          <rsb:set attr="install.licfile" value="[lic.licfile]" />
          <rsb:set attr="install.prod" value="[lic.prod]"/>
          <rsb:set attr="install.sno" value="[productkey]"/>
          <rsb:set attr="install.nodeid" value="[_about.nodeid]"/>
          <rsb:set attr="install.name" value="[name]"/>
          <rsb:set attr="install.email" value="[email]"/>

          <rsb:call op="../shared/priv/admin/installLicense.rsb" in="install" out="outFull">
            <rsb:check attr="outFull.status">
              <rsb:set attr="result.status" value="[outFull.status]"/>
              <rsb:set attr="result.errorMessage" value="[outFull.errorMessage | def('')]"/>
            </rsb:check>
          </rsb:call>
        </rsb:check>
        
        <rsb:check attr="result.status">
          <rsb:equals attr="result.status" value="Success">
            <rsb:check attr="lic.postinstallop">
              <rsb:call op="[lic.postinstallop]"/>
            </rsb:check>
            <rsb:set attr="_response.redirect" value="about.rst"/>
 
            <rsb:else>
              <div class="window window-blue" style="width:90%;margin:auto;">
                <div class="error">
                  <p>
                    <b>[result.errorMessage]</b>
                  </p>
                </div>

                <p>
                  You can manually install the license file for this application by following the steps below:
                </p>
                
                <ol>
                  <li>
                    Follow the link to 
                    <a href="http://www.rssbus.com/lic/?prod=[install.prod]&a=vset&sno=[install.sno]&canemail=1&c=2&setup=true&nodeid=[install.nodeid]&f=[site.java | equals('true','[install.licfile | tolower]','[install.licfile]')]" target="_blank">Manually Activate the Product License</a>
                  </li>
                  <li>
                    Once here, enter your Email and press download keys.
                  </li>
                  <li>
                    <rsb:equals attr="site.java" value="true">
                      Copy the downloaded file to the folder "%INSTALL_DIR%\RSSBusApps\www\WEB-INF\".
                      <rsb:else>
                        Copy the downloaded file to the folder "%INSTALL_DIR%\RSSBus Apps\www\app_data\".
                      </rsb:else>
                    </rsb:equals>
                  </li>
                </ol>
                <p>
                  If you continue to experience problems installing the license, please contact support at <a href='mailto:support@rssbus.com'>support@rssbus.com</a>.
                </p>
              </div>
            </rsb:else>
          </rsb:equals>
        </rsb:check>
      
        <rsb:else>
          <div class="configInfo error">[lang.activate_error1]</div>
        </rsb:else>
      </rsb:check>

      <rsb:else>
        <div class="configInfo error">[lang.activate_error2]</div>
      </rsb:else>
    </rsb:check>

  </rsb:equals>
</rsb:check>

<rsb:try>
  <rsb:match pattern="true" type="exact" value="[site.appdatadir | pathcombine('[lic.licfile]') | fileexists | tolower]">
    <rsb:call op="[lic.lic_check_op]"/>
  </rsb:match>

  <rsb:catch code="*">
    <div class="error">[_description]</div>
    <br/>
  </rsb:catch>
</rsb:try>
        
<form id="installLicense" method="post">
  <div class="configInfo">
    <p>[lang.activate_installLicense]</p>
    
    <table>
      <colgroup>
        <col width="100px"/>
        <col width="20px"/>
        <col width="300px"/>
        <col width="200px"/>
      </colgroup>
      <tbody>
        <tr>
          <td>
            <p>[lang.activate_installLicense_name]</p>
          </td>
          <td></td>
          <td>
            <p>
              <input class="infoInput" type="text" name="name" value="[_session.activate_name | def('')]"/>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>[lang.activate_installLicense_email]</p>
          </td>
          <td></td>
          <td colspan="2">
            <p>
              <input class="infoInput" type="text" name="email" value="[_session.activate_email | def('')]"/>
              <span class="red" style="color:red;display:none;">[lang.activate_installLicense_emailRequired]</span>
              <span class="red" style="color:red;display:none;">[lang.activate_installLicense_emailInvalid]</span>
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td colspan="2">
            <span class="small">[lang.activate_installLicenseInfo]</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class='configInfo'>[lang.activateTitle_licensingOptions]</h3>
  <div class="hline"></div>
  <div class="configInfo">
    <table>
      <colgroup>
        <col width="100px"/>
        <col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <td colspan="2"><b>[lic.demoname]</b></td>
        </tr>
        <tr>
          <td colspan="3">[lic.demodesc]</td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <span class="btn-input"><input value="[lic.demobtn | def('[lang.activate_installBtn]')]" name="install-demo" type="submit" /></span>
         </td>
        </tr>
      </tbody>
    </table>
    <table>
      <colgroup>
        <col width="100px"/>
        <col width="300px"/>
        <col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <td colspan="2"><b>[lic.fullname]</b></td>
        </tr>
        <tr>
          <td colspan="3">[lic.fulldesc]</td>
        </tr>
        <tr>
          <td>[lang.activate_productKey]</td>
          <td>
            <input class="infoInput" type="text" name="productkey" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <span class="btn-input"><input value="[lic.fullbtn | def('[lang.activate_installBtn]')]" name="install-full" type="submit" /></span>
         </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class='configInfo'>[lang.activateTitle_purchase]</h3>
  <div class="hline"></div>
  <div class="configInfo">[lang.activate_purchaseInfo | replace('{0}', '[lic.prod]')]</div>
</form>
