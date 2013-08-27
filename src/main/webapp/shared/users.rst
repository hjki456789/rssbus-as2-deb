<rsb:include file='config.rst' />
<rsb:include file='managementHeader.rst' />
<rsb:set attr="page.currentuser" value="[_request.server:REMOTE_USER]"/>

<rsb:set attr="path" value=".."/>
<rsb:set attr="fileordir" value="dirs"/>
<rsb:call op="fileListDir">
  <rsb:try>
    <rsb:call op="../[file:name]/about.rsb" out="out">
      <rsb:check attr="rolename#">
        <rsb:enum attr="rolename" expand="true">
          <rsb:set attr="roles.[_value]" value="[roledesc#[_index]]"/>
        </rsb:enum>
      </rsb:check>
    </rsb:call>
    <rsb:catch code="*"/>
  </rsb:try>
</rsb:call>

<rsb:check attr="_request.server:REQUEST_METHOD">
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST">
    <rsb:try>
      <rsb:check attr="current">
        <rsb:set attr="page.currentuser" value="[current]"/>
      </rsb:check>
    
      <rsb:check attr="winuseronly">
        <rsb:set attr="in1.winuseronly" value="true"/>
        <rsb:set attr="in2.winuseronly" value="true"/>
      </rsb:check>

      <rsb:check attr="newUser">
        <rsb:set attr="in1.username" value="[new_username]" />
        <rsb:set attr="in1.password" value="[password]" />
        <rsb:set attr="in1.email" value="[email | def]" />
        <rsb:set attr="in1.roles" value="rssbus_appuser" />
        <rsb:call op="[service.createUser]" input="in1"/>
        <rsb:set attr="page.currentuser" value="[new_username]"/>
        <rsb:set attr="_input.username" value="[new_username]"/>
      </rsb:check>

      <rsb:check attr="saveChanges">
        <rsb:set item="site" attr="isadmin" value="false"/>
        <rsb:set attr="in.username" value="[_input.username]"/>
        <rsb:call op="[service.getRoles]" input="in">
          <rsb:equals attr="role" value="admin">
            <rsb:set item="site" attr="isadmin" value="true"/>
          </rsb:equals>
          <rsb:equals attr="role" value="rssbus_admin">
            <rsb:set item="site" attr="isadmin" value="true"/>
          </rsb:equals>
        </rsb:call>
        
        <rsb:set attr="user.roles" value=""/>
        <rsb:exists item="roles">
          <rsb:enum item="roles">
            <rsb:exists attr="_input.chk[_attr]">
              <rsb:set attr="user.roles" value="[user.roles],[_attr]"/>
            </rsb:exists>
          </rsb:enum>
        </rsb:exists>

        <rsb:check attr="_input.isadmin">
          <rsb:set attr="user.roles" value="[user.roles],admin"/>
        </rsb:check>

        <rsb:check attr="_input.password">
          <rsb:set attr="in2.password" value="[_input.password]"/>
        </rsb:check>

        <rsb:check attr="_input.authtoken">
          <rsb:set attr="in2.authtoken" value="[_input.authtoken]"/>
        </rsb:check>

        <rsb:set attr="in2.roles" value="rssbus_appuser[user.roles]"/>
        <rsb:set attr="in2.username" value="[_input.username]"/>
        <rsb:set attr="in2.email" value="[email | def]"/>

        <rsb:call op="[service.updateUser]" input="in2"/>
      </rsb:check>

      <rsb:check attr="deleteUser">
        <rsb:set attr="in.username" value="[del_username]" />
        <rsb:call op="[service.deleteUser]" input="in"/>
      </rsb:check>
      <rsb:catch code="*">
        <rsb:set attr="page.ex" value="[_description]"/>
      </rsb:catch>
    </rsb:try>
  </rsb:equals>
</rsb:check>

<rsb:try>
  <rsb:call op="~/shared/priv/admin/getAllRoles.rsb" save="rolelist"/>
  <rsb:call op="~/shared/priv/admin/listUsers.rsb" save="listusersfeed" />
  
  <rsb:catch code="*">
    <rsb:set attr="page.error" value="Database not recognized: [_description]"/>
  </rsb:catch>
</rsb:try>

<script language="javascript">
  function deleteUser(user) {
    $('#fmUsers input\[name=\'deleteUser\'\]').val("true");
    $('#fmUsers input\[name=\'del_username\'\]').val(user);
    $("#fmUsers").submit();
  }

  $(function() {
    $("#users-table").find("tr").die("mouseenter mouseleave").live("mouseenter", function(e) {
      var obj = $(e.target);
      while(!obj.is("tr"))
        obj = obj.parent();
      obj = obj.find(".deleteRow div");
      obj.stop(true, true).fadeIn(220);
    }).live("mouseleave", function(e) {
      var obj = $(e.target);
      while(!obj.is("tr"))
        obj = obj.parent();
      obj = obj.find(".deleteRow div");
      obj.stop(true, true).fadeOut(260);
    });
  });
</script>

        <div class="xfluid">
          <div class="x10" id="users-section">
            <div class="error">[page.ex | def('')]</div>
            
            <form method="post" id="fmUsers">
              <input type="hidden" name="urlHash" value=""/>
              <input type="hidden" name="newUser" value=""/>
              <input type="hidden" name="deleteUser" value=""/>
              <input type="hidden" name="new_username" value=""/>
              <input type="hidden" name="new_password" value=""/>
              <input type="hidden" name="del_username" value=""/>
            </form>

            <rsb:check attr="page.error">
              [page.error]
              <rsb:else>
                <div>[lang.users_info]</div>
                
                <div style="margin:10px 0px;" class="configInfo">
                  <a class="btn" id="add-user" href="javascript:void(0);" onclick="javascript:$.get('view/showUser.rst?newuser=newuser',function(data){$('#user-new').html(data);popupWindow('#createUser');});"><span>[lang.users_addUser]</span></a>
                </div>
                
                <link href="templates/table/table.css?#[site.buildno | def]" type="text/css" rel="stylesheet" />
                <table width="100%" id="users-table" class="app-table" border="0">
                  <colgroup>
                    <col width="150px"/>
                    <col width="150px"/>
                    <col width="200px"/>
                    <col width="500px"/>
                    <col width="22px"/>
                  </colgroup> 
                  <thead>
                    <tr>
                      <th><span>[lang.users_user]</span></th>
                      <th><span>[lang.users_authtoken]</span></th>
                      <th><span>[lang.users_allowedApps]</span></th>
                      <th><span>[lang.users_allowedServices]</span></th>
                      <th class="deleteRow"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <rsb:call op="[_feeds.listusersfeed]" out="out">
                      <rsb:match pattern="true" value="[_index | modulus('2') | equals('0','true','false')]">
                        <rsb:set attr="style" value="separate"/>
                        <rsb:else>
                          <rsb:set attr="style" value=""/>
                        </rsb:else>
                      </rsb:match>
                      <tr class='full [style]'>
                        <td valign="top"><a href="javascript:void(0);" onclick='$.get("view/showUser.rst?username=[username | urlencode]",function(data){$("#user-selected").html(data);popupWindow("#editUser");});'><b>[username]</b></a></td>
                        <td valign="top">[authtoken]</td>
                        <td valign="top">
                          <rsb:set attr="allowed.user" value="[username]"/>
                          <rsb:call op="~/shared/priv/admin/getAllowedApps.rsb" in="allowed">
                            <rsb:set attr="allowed.apps#" value="[app]" />
                            <p><a href="[appLocation]">[app]</a></p>
                          </rsb:call>
                        </td>
                        <td valign="top">
                          <rsb:set attr="scripts.user" value="[username]"/>
                          <rsb:set attr="tmp.comma" value=""/>
                          <rsb:call op="~/shared/priv/admin/getAllowedScripts.rsb" in="scripts">
                            <p><a href="[scriptURL]">[script]</a></p>
                          </rsb:call>
                        </td>
                        <td class="deleteRow">
                          <rsb:equals attr="username" value="admin">
                            <rsb:else>
                              <div onclick="if(confirm('[lang.showUser_confirm]')){deleteUser('[username | htmlencode | replace(\\, \\\\)]');}return false;" style="display: none;">
                                <span>X</span>
                              </div>
                            </rsb:else>
                          </rsb:equals>
                        </td>
                      </tr>
                    </rsb:call>
                  </tbody>
                </table>
            
                <div style="margin:10px 0px;" class="configInfo">
                  <a class="btn" id="add-user" href="javascript:void(0);" onclick="javascript:$.get('view/showUser.rst?newuser=newuser',function(data){$('#user-new').html(data);popupWindow('#createUser');});"><span>[lang.users_addUser]</span></a>
                </div>
              </rsb:else>
            </rsb:check>
          </div>
        </div>
      
  <rsb:set attr="pg.popup">
    <script>
      // = popup window ===============================
      function popupWindow(pwindow) {
        var sTop = $(document).scrollTop();
        var wHeight = $(window).height();
        var wrapHeight = $('#wrapper').height();
        
        var offsetTop = sTop + wHeight/2;
        var maxTop = - parseInt($(pwindow).css("margin-top"));
        offsetTop = offsetTop < maxTop ? maxTop : offsetTop;
        $('#darkNight').css('height', wrapHeight + 'px').show(50);
        $(pwindow).css('top', offsetTop + 'px').show(50);  
      }

      function generateNewToken() {
        $.post("[foo | def('~/shared/priv/generateNewToken.rsb') | urlresolve]?@json&@fmtoptions=exparen",
          null, 
          function($data){
            $("#usrAuthToken").val($data.items\[0\]\["authtoken"\]);
          }
        );
      }
    </script>
    <div id="darkNight" class="trans"></div>
    <!-- Edit user popup -->
    <div id="editUser" class="popup">
      <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#editUser').hide(50);return false;" class="closeCM">x</a>
      <div id="user-selected"></div>
      <br/>
      <div class="save">
        <a class="btn" href="javascript:void(0);" onclick="javascript:$('#userForm').submit();return false;">
          <span id="SaveChanges">[lang.users_saveChanges]</span>
        </a>
      </div>
      <br/>
    </div>
    
    <!-- Add new user popup -->
    <div id="createUser" class="popup">
      <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#createUser').hide(50);return false;" class="closeCM">x</a>
      <div id="user-new"></div>
      <br/>
      <div class="save">
        <a class="btn" href="javascript:void(0);" onclick="javascript:$('#newUserForm').submit();return false;">
          <span id="SaveChanges">[lang.users_saveChanges]</span>
        </a>
      </div>
      <br/>
    </div>
  </rsb:set>
  
  <rsb:include file='footer.rst' />
