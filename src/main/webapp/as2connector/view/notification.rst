<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:match value="[save_notification | def('') | tolower]" pattern="true">
      <rsb:set attr="_profile.[site.root]_emailto_global" value="[[site.root]_emailto | def('')]"/>
      <rsb:set attr="_profile.[site.root]_emailfrom_global" value="[[site.root]_emailfrom | def('')]"/>
      <rsb:set attr="_profile.[site.root]_emailsubject_global" value="[[site.root]_emailsubject | def('')]"/>
      <rsb:set attr="_profile.[site.root]_notifyemail_global" value="[[site.root]_notifyemail | def('')]"/>

      <rsb:set attr="_profile.[site.root]_notifyappname_global" value="[site.appname]"/>
      <rsb:set attr="_profile.[site.root]_notifyeventlog_global" value="[[site.root]_notifyeventlog | def('')]"/>
    </rsb:match>
  </rsb:equals>
</rsb:check>

<div class="configInfo">
  <h3>
    Notifications
  </h3>
  
  <rsb:check attr="_profile.smtpserver_global">
    <rsb:else>
      <span class="error">The outgoing mail server has not been configured!</span>
    </rsb:else>
  </rsb:check>
  <input type="hidden" name="save_notification" value="true" />
  
  <table>
    <colgroup>
      <col width="250px"/>
      <col width="250px"/>
      <col width="*"/>
    </colgroup>
    <tbody id="columns">
      <tr>
        <td>
          <span class="formlabel">Email From:</span>
        </td>
        <td colspan="2">
          <rsb:check attr="_profile.[site.root]_emailfrom_global">
            <rsb:else>
              <rsb:set attr="_profile.[site.root]_emailfrom_global">noreply@rssbus.com</rsb:set>
            </rsb:else>
          </rsb:check>        
          <input type="text" class="infoInput extralong" name="[site.root]_emailfrom" value="[_profile.[site.root]_emailfrom_global | def("") | htmlencode]" />
        </td>
      </tr>
      <tr>
        <td>
          <span class="formlabel">Email To:</span>
        </td>
        <td colspan="2">
          <input type="text" class="infoInput extralong" name="[site.root]_emailto" value="[_profile.[site.root]_emailto_global | def('') | htmlencode]" />
        </td>
      </tr>
      <tr>
        <td>
          <span class="formlabel">Email Subject:</span>
        </td>
        <td colspan="2">
          <input type="text" class="infoInput extralong" name="[site.root]_emailsubject" value="[_profile.[site.root]_emailsubject_global | def('[site.appname]: Error Occured')]" />
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <input type="checkbox" name="[site.root]_notifyemail" id="chkNotifyEmail" value="True" [_profile.[site.root]_notifyemail_global | def('false') | tolower | equals('true','checked=checked','')] />
          <label for="chkNotifyEmail"><span>Send an email to the above email addresses when an error is encountered</span></label>
        </td>
      </tr>
      <rsb:equals attr="site.net" value="true">
        <tr>
          <td colspan="3">
            <input type="checkbox" name="[site.root]_notifyeventlog" id="chkNotifyEventLog" value="True" [_profile.[site.root]_notifyeventlog_global | def('false') | tolower | equals('true','checked=checked','')] />
            <label for="chkNotifyEventLog"><span>Write error messages to the Windows Application Event Log</span></label>
          </td>
        </tr>
      </rsb:equals>
      <rsb:check attr="pg.notification">
        [pg.notification]
      </rsb:check>
      <tr>
        <td colspan="3">
          <a href="../shared/settings.rst" target="_blank"><span class="small">\[Configure Outgoing Mail Server\]</span></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
