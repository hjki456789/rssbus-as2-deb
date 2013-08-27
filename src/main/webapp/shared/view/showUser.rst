<rsb:include file="../config.rst"/>
<rsb:include file="loadLanguage.rst"/>
<rsb:check attr="newuser">
  <h3 class="blue">[lang.showUser_addUser]</h3>
  <form id="newUserForm" class="configInfo" method="POST">

  <rsb:else>
    <h3 class="blue">[lang.showUser_editUser] - [username]</h3>
    <form id="userForm" class="configInfo" method="POST">
  </rsb:else>
</rsb:check>

  <rsb:set attr="selected.roles" value=""/>
  <rsb:set attr="selected.isadmin" value="false"/>
  <rsb:set attr="selected.username" value="[username | def('')]"/>
  <rsb:set attr="selected.winuseronly" value="false"/>
  <rsb:equals attr="site.java" value="true" case="ignore">
    <rsb:set attr="selected.winuseronly" value="true"/>
    <input type="hidden" name="winuseronly" value="True"/>
    <input type="hidden" name="password" value=""/>
  </rsb:equals>
  <rsb:set attr="selected.authtoken" value=""/>

  <rsb:check attr="newuser">
    <rsb:set attr="selected.authtoken" value="[foo | randomtext('20')]"/>
    <input type="hidden" name="newUser" value="True"/>

    <rsb:else>
      <rsb:set attr="in.username" value="[username]" />
      <rsb:set attr="tmp.comma" value=""/>
      <rsb:call op="~/shared/priv/admin/getRoles.rsb" input="in">
        <rsb:set attr="selected.roles" value="[selected.roles][tmp.comma][role]"/>
        <rsb:set attr="tmp.comma" value=","/>
        <rsb:equals attr="role" value="admin">
          <rsb:set attr="selected.isadmin" value="true"/>
        </rsb:equals>
        <rsb:equals attr="role" value="rssbus_admin">
          <rsb:set attr="selected.isadmin" value="true"/>
        </rsb:equals>
      </rsb:call>

      <rsb:call op="~/shared/priv/admin/isWinUserOnly.rsb" input="in">
        <rsb:set attr="selected.winuseronly" value="[winuseronly]"/>
      </rsb:call>
      
      <rsb:call op="~/shared/priv/admin/getAuthToken.rsb" input="in">
        <rsb:set attr="selected.authtoken" value="[authtoken]"/>
      </rsb:call>
      
      <rsb:call op="~/shared/priv/admin/getEmail.rsb" input="in">
        <rsb:set attr="selected.email" value="[email]"/>
      </rsb:call>
    </rsb:else>
  </rsb:check>
  
  <input type="hidden" name="saveChanges" value="True"/>
  <input type="hidden" name="current" value="[selected.username | htmlencode]"/>
  <input type="hidden" name="username" value="[selected.username | htmlencode]"/>
  
  <table>
    <colgroup>
      <col width="120px" />
      <col width="190px" />
      <col width="*" />
    </colgroup>
    <tbody>
      <rsb:check attr="newuser">
        <tr>
          <td>
            <span class="formlabel">[lang.showUser_user]</span>
          </td>
          <td class="last">
            <input type="text" class="infoInput" value="" name="new_username" />
          </td>
        </tr>
      </rsb:check>
      <tr>
        <td>
          <span class="formlabel">[lang.showUser_email]</span>
        </td>
        <td>
          <input type="text" class="infoInput" value="[selected.email | def]" name="email" />
        </td>
      </tr>
      <tr>
        <td>
          <span class="formlabel">[lang.showUser_administrator]</span>
        </td>
        <td>
          <input type="checkbox" class="infoInput" [selected.isadmin | equals('true','checked="checked"','')] name="isadmin" style="width:13px;" [selected.username | equals('admin', 'disabled=&quot;disabled&quot;')] />
        </td>
      </tr>
      <rsb:equals attr="site.java" value="false" case="ignore">
        <tr>
          <script language="javascript">
            $(function() {
              $("#winUserOnly").click(function(){
                var target = $(this);
                var pwd = $("#pwdSection");
                if(target.is(':checked')) 
                  pwd.hide();
                else pwd.show();
              });
            });
          </script>
          <td>
            <span class="formlabel">Windows User Only</span>
          </td>
          <td>
            <input id="winUserOnly" type="checkbox" class="infoInput" [selected.winuseronly | equals('true','checked="checked"','')] name="winuseronly" style="width:13px;" />
          </td>
        </tr>
        <tr id="pwdSection" [selected.winuseronly | equals('true','style="display:none"','')]>
          <td>
            <span class="formlabel">[lang.showUser_password]</span>
          </td>
          <td class="last">
            <rsb:check attr="newuser">
              <rsb:else>
                <rsb:equals attr="selected.winuseronly" value="false">
                  <script language="javascript">
                    $(function(){
                      $("#usrPassword").hide();
                      $("#pass-action").hide();
                    });
                  </script>
                  <input onfocus="$(this).hide();$('#usrPassword').show().focus();$('#pass-action').show()" type="password" value="password" class="infoInput" />
                </rsb:equals>
              </rsb:else>
            </rsb:check> 
            <input id="usrPassword" onfocus="$(this).select().mouseup(function(e){e.preventDefault();$(this).unbind('mouseup');});" type="password" name="password" class="infoInput" value=""/>
          </td>
          <td>
            <script language="javascript">
              function togglePassword() {
                var $oldPassword = $("#usrPassword");
                
                if ($oldPassword.attr('type') == 'password') {
                  var $newPassword = $("<input type='text' onfocus=\"$(this).select().mouseup(function(e){e.preventDefault();$(this).unbind('mouseup');});\" />").val($oldPassword.val()).appendTo($oldPassword.parent());
                  $oldPassword.remove();
                  $newPassword.attr('id','usrPassword');
                  $newPassword.attr('name','password');
                  $newPassword.attr('class','infoInput');
                  $newPassword.attr('onfocus','$(this).select().mouseup(function(e){e.preventDefault();$(this).unbind("mouseup");});');
                  $("#pass-action").html('<span>[lang.showUser_hide]</span>');
                } else {
                  var $newPassword = $("<input type='password' />").val($oldPassword.val()).appendTo($oldPassword.parent());
                  $oldPassword.remove();
                  $newPassword.attr('id','usrPassword');
                  $newPassword.attr('name','password');
                  $newPassword.attr('class','infoInput');
                  $newPassword.attr('onfocus','$(this).select().mouseup(function(e){e.preventDefault();$(this).unbind("mouseup");});');
                  $("#pass-action").html('<span>[lang.showUser_show]</span>');
                }
              }
            </script>
            <a id="pass-action" class="btn" href="javascript:void(0);" onclick="javascript:togglePassword();return false;"><span>[lang.showUser_show]</span></a>
          </td>
        </tr>
      </rsb:equals>
      <tr>
        <td>
          <span class="formlabel">[lang.showUser_authtoken]</span>
        </td>
        <td class="last">
          <input type="text" id="usrAuthToken" class="infoInput" value="[selected.authtoken]" name="authtoken" readonly='readonly' />
        </td>
        <td>
          <a class="btn" href="javascript:void(0);" onclick="javascript:if(confirm('[lang.showUser_generate]')) { generateNewToken(); } return false;"><span>[lang.showUser_new]</span></a>
        </td>
      </tr>
      <rsb:equals attr="site.java" value="false" case="ignore">
        <tr>
          <td valign="top">
            <span class="formlabel">[lang.showUser_allowedApps]</span>
          </td>
          <td>
            <table width="100%" class='applist' style="margin: 0">
              <colgroup>
                <col width="26px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <script language="javascript">
                  function toggleapp(element, expandelem) {
                    if ($("." + element).is(":visible")) {
                      $("." + element).hide();
                      $("#" + expandelem).html("\[+\]");
                    } else {
                      $("." + element).show();
                      $("#" + expandelem).html("\[-\]");
                    }
                  }
                  
                  function changeApp(element, toremove, def) {
                    if ($("#" + element).is(":checked")) {
                      $("#" + def).prop("checked", "checked");
                    } else {
                      $("." + toremove).removeAttr("checked");
                    }
                  }
                  function changeUser(element, app) {
                    if ($("." + element).is(":checked")) {
                      $("#" + app).prop("checked", "checked");
                    } else {
                      $("#" + app).removeAttr("checked");
                    }
                  }
                </script>
                <rsb:call op="fileListDir?path=../..&fileordir=dirs">
                  <rsb:try>
                    <rsb:set attr='appindex' value='app[_index]'/>
                    <rsb:set attr='expandindex' value='expand[_index]'/>
                  
                    <rsb:call op="../../[file:name]/about.rsb" out="out">
                      <rsb:check attr="rolename#">
                        <rsb:set attr="item.checked" value=""/>
                        <rsb:set attr="item.rolecount" value="0"/>
                        <rsb:enum attr="rolename" expand="true">
                          <rsb:first>
                            <rsb:set attr="item.default" value="ch[rolename#[_index]]"/>
                          </rsb:first>
                          <rsb:match pattern="*,[rolename#[_index]]*" value="[selected.roles]" type="glob">
                            <rsb:set attr="item.checked" value="checked='checked'"/>
                          </rsb:match>
                          <rsb:set attr="item.rolecount" value="[item.rolecount | add('1')]"/>
                        </rsb:enum>
                        <tr>
                          <rsb:match pattern="true" value="[item.rolecount | isgreater('1')]">
                            <td>
                            <a href="javascript:void(0);" onclick="toggleapp('[appindex]','[expandindex]');" id='[expandindex]' class="small">\[+\]</a>
                            </td>
                          </rsb:match>
                          <td colspan="2" style="padding-left: 0">
                            <rsb:equals attr="selected.username" value="admin">
                              <input type="checkbox" checked="checked" disabled="disabled" id="[appindex]" onclick="changeApp('[appindex]','chk[appindex]','[item.default]');"/>
                              <rsb:else>
                                <input type="checkbox" [item.checked] id="[appindex]" onclick="changeApp('[appindex]','chk[appindex]','[item.default]');"/>
                              </rsb:else>
                            </rsb:equals>
                            <label>[name]</label>
                          </td>
                        </tr>
                      
                        <rsb:enum attr="rolename" expand="true">
                          <tr class='[appindex]' style="display:none">
                            <td></td>
                            <td>
                              <input type="checkbox" name="chk[rolename#[_index]]" id="ch[rolename#[_index]]" class='chk[appindex]' onclick='changeUser("chk[appindex]","[appindex]");' [selected.roles | contains('[rolename#[_index]]','checked="checked"','')]/>
                              <label for="ch[rolename#[_index]]">[roledesc#[_index]]</label>
                            </td>
                          </tr>
                        </rsb:enum>
                      </rsb:check>
                    </rsb:call>
                    <rsb:catch code="*"/>
                  </rsb:try>
                </rsb:call>

              </tbody>
            </table>
          </td>
        </tr>
      </rsb:equals>
    </tbody>
  </table>
</form>
