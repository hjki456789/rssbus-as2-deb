<rsb:include file="config.rst"/>
<rsb:check attr="returl">
  <rsb:set attr="_session.returl" value="[returl]"/>
</rsb:check>
<rsb:set attr="action" value="[action | def('')]"/>
<rsb:equals attr="action" value="logoff">
  <rsb:set attr="_session.org.mortbay.jetty.Auth" value=""/>
  <rsb:set attr="_cookies.Login" value=""/>
  <rsb:set attr="_session.returl" value=""/>
  <rsb:set attr="contentroot" value="~/"/>
  <rsb:set attr="_response.redirect" value="[contentroot | urlresolve]"/>

  <rsb:else>
    <rsb:check attr="_request.auth:IsAuthenticated">
      <rsb:equals attr="_request.auth:IsAuthenticated" case="ignore" value="true">
        <rsb:set attr="_response.redirect" value="unauth.rst"/>
      </rsb:equals>
    </rsb:check>
  </rsb:else>
</rsb:equals>

<rsb:set item="pg" attr="user"/>
<rsb:check attr="_request.server:LOCAL_ADDR">
  <rsb:check attr="_request.server:REMOTE_ADDR">
    <rsb:notequals attr="_request.server:LOCAL_ADDR" value="">
      <rsb:equals attr="_request.server:LOCAL_ADDR" value="[_request.server:REMOTE_ADDR]">
        <rsb:set item="pg" attr="user" value="admin"/>
      </rsb:equals>
    </rsb:notequals>
  </rsb:check>
</rsb:check>

<rsb:set item="pg" attr="script">
  <script language="javascript">
    $(function() {
      $("input\[name='j_username'\]").focus();
    });
  </script>
</rsb:set>

<rsb:include file="../shared/header.rst"/>
      
  <!-- Don't change the form id -->
  <form id="loginform" method="POST" action="[site.login_action]" class="portlet" >
    <rsb:check attr="ReturnUrl">
      <input name="ReturnUrl" type="hidden" value="[ReturnUrl | urlencode]"/>
    </rsb:check>
    <div class="_title"><span>[lang.login_signIn]</span></div>    
    <rsb:equals attr="action" value="error">
      <p class="error">[lang.login_authenticationFailed]</p>
    </rsb:equals>
    <div class="clear">&nbsp;</div>
    <table class="ca-props-narrow">
      <colgroup>
        <col width="80"/>
        <col width="320"/>
      </colgroup>
      <tbody>
        <tr>
          <td>[lang.login_user]</td>
          <td><input type="text" name="j_username" class="infoInput" [pg.user | equals("admin", "value='admin'", "") | def()]/></td>
        </tr>
        <tr>
          <td>[lang.login_password]</td>
          <td><input type="password" name="j_password" class="infoInput"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td align="left">
            <span class="btn-input"><input type="submit" value="[lang.login_login]" /></span>
            <span class="btn-input"><input type="reset" value="[lang.login_reset]" /></span>
          </td>
        </tr>
      </tbody>
    </table>
    
    <rsb:check attr="_request.server:LOCAL_ADDR">
      <rsb:check attr="_request.server:REMOTE_ADDR">
        <rsb:notequals attr="_request.server:LOCAL_ADDR" value="">
          <rsb:notequals attr="_request.server:LOCAL_ADDR" value="[_request.server:REMOTE_ADDR]">
            <rsb:check attr="_request.server:HTTPS">
              <rsb:equals attr="_request.server:HTTPS" case="ignore" value="OFF">
                <div id="nossl">
                  [lang.login_ssl_not_enabled]
                </div>
              </rsb:equals>
            </rsb:check>
          </rsb:notequals>
        </rsb:notequals>
      </rsb:check>
    </rsb:check>
  </form>
  
<rsb:include file="footer.rst"/>
