<rsb:include file='config.rst' />
<rsb:include file='managementHeader.rst' />

<rsb:set attr="page.emailstatus" value=""/>

<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:check attr="default_datadir">
      <rsb:set attr="_profile.default_datadir_global" value="[default_datadir | def('')]"/>
    </rsb:check>
    
    <rsb:set attr="_profile.smtpserver_global" value="[smtpserver | def('')]"/>
    <rsb:set attr="_profile.smtpuser_global" value="[smtpuser | def('')]"/>
    <rsb:set attr="_profile.smtppassword_global" value="[smtppassword | def('')]"/>
    <rsb:set attr="_profile.smtpport_global" value="[smtpport | def('')]"/>
    <rsb:set attr="_profile.smtpsslstartmode_global" value="[smtpsslstartmode | def('')]"/>
    
    <rsb:check attr="SendTestEmail">
      <rsb:try>
        <rsb:set attr="smtp.smtpserver" value="[_profile.smtpserver_global | def('')]"/>
        <rsb:set attr="smtp.smtpport" value="[_profile.smtpport_global | def('')]"/>
        <rsb:set attr="smtp.user" value="[_profile.smtpuser_global | def('')]"/>
        <rsb:set attr="smtp.password" value="[_profile.smtppassword_global | def('')]"/>
        <rsb:set attr="smtp.sslmode" value="[_profile.smtpsslstartmode_global | def('')]"/>
        <rsb:set attr="smtp.sslcert" value="*"/>
        
        <rsb:set attr="smtp.from" value='"RSSBus AppServer" <noreply@rssbus.com>'/>
        <rsb:set attr="smtp.to" value="[SendTestEmail]"/>
        <rsb:set attr="smtp.subject" value="RSSBus AppServer Test"/>
        <rsb:set attr="smtp.text" value="This is a test email sent from the RSSBus AppServer application."/>
        
        <rsb:call op="smtpSendMessage" in="smtp"/>
        <rsb:set attr="page.emailstatus" value="<span class='correct'>The test email was sent successfully.</span>"/>

        <rsb:catch code="*">
          <rsb:set attr="page.emailstatus" value="<span class='error'>The test email failed to send: [_description]</span>"/>
        </rsb:catch>
      </rsb:try>
    </rsb:check>
    
    <rsb:set attr="_profile.license_type_global" value="[license_type | def('')]"/>
    
  </rsb:equals>
</rsb:check>

<div class="xfluid">
  <div id="contentwrapper" class="x11 abscenter">
    <div id="tabs" class="ui-tabs">
      <h3 class="infoNameDiv">
        <span>[lang.settings_title]</span>
      </h3>
      
      <div class="trans tabs-container">
        <div class="ui-notabs"></div>
      </div>
  
      <form id="infoForm" method="post">
        <input type="hidden" name="urlHash" value="#settings" />
        <div class="saveT">
          <script>
            function checkDataDir() {
              var datadir = "[_profile.default_datadir_global | def('') | replace('\\','\\\\')]";
              if ($("#default_datadir").val() != datadir) {
                if (confirm('WARNING! Changing the data directory will result in a loss of settings for existing apps. You will need to manually copy over any existing settings for installed applications.\\r\\nWould you like to continue?')) {
                  $('#infoForm').submit();
                }
              } else {
                $('#infoForm').submit();
              }
            }
          </script>
          <a class="btn" href="javascript:void(0);" onclick="javascript:checkDataDir();return false;">
            <span id="SaveChanges">[lang.users_saveChanges]</span>
          </a>
        </div>

        <a class="btn saveB" href="javascript:void(0);" onclick="javascript:checkDataDir();return false;">
          <span id="SaveChanges">[lang.users_saveChanges]</span>
        </a>
        
        <div class="config-section">
          <div class="configInfo">
            <h3>General Settings</h3>
            <table>
              <colgroup>
                <col width="250px">
                <col width="500px">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <span class="formlabel">Data Directory:</span>
                    <rsb:set attr="tooltip.message" value="This directory is where all apps will store their app-specific data. Note that if you change this setting you will need to copy any existing data from the old directory to the new one."/>
                    <rsb:include file="[ui.toolTips:bubble]" />
                  </td>
                  <td nowrap="">
                    <input class="infoInput extralong" value="[_profile.default_datadir_global | def('')]" id="default_datadir" name="default_datadir" />
                  </td>
                  <td nowrap=""><em><span>*Required</span></em></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="configInfo">
            <h3>Outgoing Mail Server (SMTP)</h3>
            <table>
              <colgroup>
                <col width="250px">
                <col width="250px">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <td><span class="formlabel">Mail Server:</span></td>
                  <td nowrap="">
                    <input class="infoInput" value="[_profile.smtpserver_global | def('')]" name="smtpserver" />
                  </td>
                  <td nowrap=""><em><span>*Required</span></em></td>
                </tr>
                <tr>
                  <td><span class="formlabel">User Name:</span></td>
                  <td nowrap="">
                    <input class="infoInput" value="[_profile.smtpuser_global | def('')]" id="smtpuser" name="smtpuser" />
                  </td>
                </tr>
                <tr>
                  <td><span class="formlabel">User Password:</span></td>
                  <td nowrap="">
                    <input type="password" class="infoInput" value="[_profile.smtppassword_global | def('')]" name="smtppassword" />
                  </td>
                </tr>
                <tr>
                  <td><span class="formlabel">Mail Port:</span></td>
                  <td nowrap="">
                    <input class="infoInput extrashort" value="[_profile.smtpport_global | def('25')]" name="smtpport" />
                  </td>
                </tr>
                <tr>
                  <td><span class="formlabel">SSL Start Mode:</span></td>
                  <td nowrap="">
                    <rsb:unset item="renderSelect" />
                    <rsb:set attr="renderSelect.options#" value="None"/>
                    <rsb:set attr="renderSelect.options#" value="Explicit (TLS)"/>
                    <rsb:set attr="renderSelect.options#" value="Implicit (SSL)"/>
                    <rsb:set attr="renderSelect.values#" value="NONE"/>
                    <rsb:set attr="renderSelect.values#" value="EXPLICIT"/>
                    <rsb:set attr="renderSelect.values#" value="IMPLICIT"/>
                    
                    <rsb:set attr="renderSelect.id" value="selSMTPSSLStartmode" />
                    <rsb:set attr="renderSelect.name" value="smtpsslstartmode" />
                    <rsb:set attr="renderSelect.selectedValue" value="[_profile.smtpsslstartmode_global | def('None')]" />
                    <rsb:render template="view/inputDropdown.rst" in="renderSelect" onerror="clear" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="hidden" id="SendTestEmail" name="SendTestEmail" value="" />
                    <script>
                      function sendEmail() {
                        var p = prompt('Send an email to the address:',$('#smtpuser').val());
                        if (p != null && p != "") {
                          $('#SendTestEmail').val(p);
                          $('#infoForm').submit();
                        }
                      }
                    </script>
                    <a class="btn" href="javascript:void(0);" onclick="javascript:sendEmail();return false;">
                      <span>Send Test Email</span>
                    </a>
                  </td>
                  <td colspan="2">
                    [page.emailstatus | def('')]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>          

          <div class="configInfo">
            <h3>License</h3>
            <table>
              <colgroup>
                <col width="250px">
                <col width="250px">
              </colgroup>
              <tbody>
                <tr>
                  <td><span class="formlabel">License Type:</span></td>
                  <td nowrap="">
                    <rsb:unset item="renderSelect" />
                    <rsb:set attr="renderSelect.options#" value="Machine"/>
                    <rsb:set attr="renderSelect.options#" value="Cloud (Amazon EC2)"/>
                    <rsb:set attr="renderSelect.values#" value="machine"/>
                    <rsb:set attr="renderSelect.values#" value="ec2"/>
                    
                    <rsb:set attr="renderSelect.id" value="license_type" />
                    <rsb:set attr="renderSelect.name" value="license_type" />
                    <rsb:set attr="renderSelect.selectedValue" value="[_profile.license_type_global | def('Machine')]" />
                    <rsb:render template="view/inputDropdown.rst" in="renderSelect" onerror="clear" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</div>
  
<rsb:include file='footer.rst' />
