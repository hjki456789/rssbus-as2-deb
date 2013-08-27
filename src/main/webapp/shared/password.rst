<rsb:include file="config.rst"/>
<rsb:include file="header.rst"/>

<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
  <rsb:check attr="changePassword">
    <rsb:check attr="j_old_password">
      <rsb:else>
        <rsb:set attr="pg.error" value="[lang.password_changeFailed1]"/>
      </rsb:else>
    </rsb:check>

    <rsb:check attr="j_new_password">
      <rsb:else>
        <rsb:set attr="pg.error" value="[lang.password_changeFailed2]"/>
      </rsb:else>
    </rsb:check>

    <rsb:equals attr="j_new_password" value="[j_confirm_password]">
      <rsb:else>
        <rsb:set attr="pg.error" value="[lang.password_changeFailed1]"/>
      </rsb:else>
    </rsb:equals>
    
    <rsb:check attr="pg.error">
      <rsb:else>
        <rsb:set attr="in.username" value="[_request.server:REMOTE_USER]"/>
        <rsb:set attr="in.password" value="[j_old_password]"/>
        <rsb:call op="priv/verifyUser.rsb" input="in">
          <rsb:check attr="status">
            <rsb:notequals attr="status" value="true">
              <rsb:set attr="pg.error" value="[lang.password_changeFailed1]"/>
            </rsb:notequals>
            <rsb:else>
              <rsb:set attr="pg.error" value="[lang.password_changeFailed1]"/>
            </rsb:else>
          </rsb:check>
        </rsb:call>
      </rsb:else>
    </rsb:check>
    
    <rsb:check attr="pg.error">
      <rsb:else>
        <rsb:set attr="in.username" value="[_request.server:REMOTE_USER]"/>
        <rsb:set attr="in.password" value="[j_new_password]"/>
        <rsb:call op="priv/admin/changePassword.rsb" input="in"/>
        <rsb:set attr="pg.success" value="true"/>
      </rsb:else>
    </rsb:check>
  </rsb:check>
</rsb:equals>

  <form id="loginform" method="POST" class="portlet">
    <div class="_title"><span>[lang.password_changePassword]</span></div>
    <rsb:check attr="pg.error">
      <div class="error">[pg.error]</div>
    </rsb:check>
    <rsb:check attr="pg.success">
      <div class="correct">[lang.password_successfullyChanged]</div>
    </rsb:check>
    <div class="clear">&nbsp;</div>
    <table cellspacing="0" cellpadding="0" border="0" class="ca-props-narrow">
      <colgroup>
        <col width="120"/>
        <col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <td>[lang.password_oldPassword]</td>
          <td><input type="password" name="j_old_password" class="infoInput"/></td>
        </tr>
        <tr>
          <td>[lang.password_newPassword]</td>
          <td><input type="password" name="j_new_password" class="infoInput"/></td>
        </tr>
        <tr>
          <td>[lang.password_confirmPassword]</td>
          <td><input type="password" name="j_confirm_password" class="infoInput"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td align="left">
            <div id="submitbtn">
              <input type="hidden" name="changePassword" value="true"/>
              <span class="btn-input"><input type="submit" value="[lang.password_update]" /></span>
              <a class="btn" href="[_input.returnurl | def('default.rst')]">
                <span><b class="trans app-icon-btn app-icon-btn-back"></b>[lang.password_return]</span>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
      
<rsb:include file="footer.rst"/>
