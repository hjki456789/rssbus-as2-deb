<rsb:include file="../../shared/config.rst"/>

<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:check attr="name">
      <rsb:set attr="_session.activate_name" value="[name]"/>
      <rsb:check attr="email">
        <rsb:set attr="_session.activate_email" value="[email]"/>
        
        <rsb:set attr="install.licfile" value="[lic.licfile]" />
        <rsb:set attr="install.prod" value="[lic.prod]"/>
        <rsb:set attr="install.name" value="[name]"/>
        <rsb:set attr="install.email" value="[email]"/>
        <rsb:set attr="install.nodeid" value="[_about.nodeid]"/>

        <rsb:check attr="_profile.license_type_global">
          <rsb:equals attr="_profile.license_type_global" value="ec2" case="ignore">
            <rsb:check attr="_about.ec2nodeid">
              <rsb:set attr="install.nodeid" value="[_about.ec2nodeid]"/>
              <rsb:else>
                <rsb:set attr="install.nodeid" value=""/>
              </rsb:else>
            </rsb:check>
          </rsb:equals>
        </rsb:check>
        
        <rsb:check attr="install-free">
          <rsb:set attr="install.sno" value="[lic.freekey]"/>
        </rsb:check>
        
        <rsb:check attr="install-demo">
          <rsb:set attr="install.sno" value=""/>
        </rsb:check>
        
        <rsb:check attr="install-full">
          <rsb:set attr="install.sno" value="[productkey]"/>
        </rsb:check>
        
        <rsb:call op="../../shared/priv/admin/installLicense.rsb" in="install" out="out">
          <rsb:check attr="out.status">
            <rsb:set attr="result.status" value="[out.status]"/>
            <rsb:set attr="result.errorMessage" value="[out.errorMessage | def('')]"/>
          </rsb:check>
        </rsb:call>
      
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
                
                <rsb:match pattern="The trial license has already been installed for this application.*" value="[result.errorMessage]" type="glob">
                  <p>
                    You can manually install the license file for this application by following the steps below:
                  </p>
                  
                  <ol>
                    <li>
                      Follow the link to 
                      <rsb:check attr="install-demo">
                        <a href="http://www.rssbus.com/lic/?prod=[install.prod]&a=itrial&canemail=1&c=2&setup=true&nodeid=[install.nodeid]&f=[site.java | equals('true','[install.licfile | tolower]','[install.licfile]')]&plat=[site.java | equals('true','java','net')]" target="_blank">Manually Activate the Product License</a>
                        <rsb:else>
                          <a href="http://www.rssbus.com/lic/?prod=[install.prod]&a=vset&sno=[install.sno]&canemail=1&c=2&setup=true&nodeid=[install.nodeid]&f=[site.java | equals('true','[install.licfile | tolower]','[install.licfile]')]&plat=[site.java | equals('true','java','net')]" target="_blank">Manually Activate the Product License</a>
                        </rsb:else>
                      </rsb:check>
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
                </rsb:match>
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
    <p>A valid license is required to use this application. Please enter the following information and choose one of the activation options below:</p>
    
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
            <p>Name:</p>
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
            <p>Email:</p>
          </td>
          <td></td>
          <td colspan="2">
            <p>
              <input class="infoInput" type="text" name="email" value="[_session.activate_email | def('')]"/>
              <span class="red" style="color:red;display:none;">* Email Required</span>
              <span class="red" style="color:red;display:none;">* Not a valid Email Address</span>
            </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td colspan="2">
            <span class="small">Please supply a valid email address - we will email a copy of your license file for your records and send you ongoing product updates and news releases.</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class='configInfo'>Licensing Options</h3>
  <div class="hline"></div>
  <div class="configInfo">
    <table>
      <colgroup>
        <col width="100px"/>
        <col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <td colspan="2"><b>[lic.freename]</b></td>
        </tr>
        <tr>
          <td colspan="3">[lic.freedesc]</td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <span class="btn-input"><input value="[lic.demobtn | def('Install License')]" name="install-free" type="submit" /></span>
         </td>
        </tr>
      </tbody>
    </table>
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
            <span class="btn-input"><input value="[lic.demobtn | def('Install License')]" name="install-demo" type="submit" /></span>
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
          <td>Product Key:</td>
          <td>
            <input class="infoInput" type="text" name="productkey" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2">
            <span class="btn-input"><input value="[lic.fullbtn | def('Install License')]" name="install-full" type="submit" /></span>
         </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class='configInfo'>Purchase</h3>
  <div class="hline"></div>
  <div class="configInfo">A full license may be purchased on our website <a target='_blank' href='http://www.rssbus.com/app_files/[lic.prod]/?i=order'>here</a>.</div>
</form>
