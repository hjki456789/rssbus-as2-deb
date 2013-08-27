<rsb:set attr="access.error" value="false"/>
<rsb:try>
  <rsb:call op="~/shared/priv/admin/getAllRoles.rsb" save="rolelist"/>
  
  <rsb:catch code="*">
    <rsb:set attr="access.error" value="true"/>
  </rsb:catch>
</rsb:try>

<rsb:match pattern="[access.error]" value="false">

  <script type="text/javascript">
    function addUser(user, roles, dialogMsg) {
      if (confirm(dialogMsg)) {
        $.get("../shared/priv/admin/updateUser.rsb?@json&@fmtoptions=exparen&username=" + user + "&roles=" + roles+ ",rssbus_[app.prefix]_user", 
          function($data){
            window.location.reload();
          }
        );
      }
    };
    
    function deleteUser(user, roles) {
      roles = roles.replace(/,[app.prefix]_user/g,"");
      roles = roles.replace(/[app.prefix]_user,/g,"");
      roles = roles.replace(/,rssbus_[app.prefix]_user/g,"");
      roles = roles.replace(/rssbus_[app.prefix]_user,/g,"");
      $.get("../shared/priv/admin/updateUser.rsb?@json&@fmtoptions=exparen&username=" + user + "&roles=" + roles, 
        function($data){
          window.location.reload();
        }
      );
    };
  </script>
  <div id="users" class="configInfo">
    <h3 class="configInfo">
      [lang.svcinfoTitle_security]
      <rsb:set attr="tooltip.message" value="[lang.appaccess_securityInfo1]"/>
      <rsb:include file="[ui.toolTips:bubble]" />
    </h3>
    
    <table id="svcSecurity" class='ca-params'>
      <colgroup>
        <col width="200px" />
        <col width="150px" />
      </colgroup>
      <thead>
        <tr>
          <th>[lang.svcinfo_user]</th>
          <th>[lang.appaccess_accessLevel]</th>
        </tr>
      </thead>
      <tbody>
        <rsb:call op="[_feeds.rolelist]" out="out">
          <rsb:check attr="roles">
            <rsb:enum list="[roles]" separator=",">
              <rsb:set attr="tmp.hasaccess" value="false"/>
              <rsb:equals attr="_value" value="rssbus_[app.prefix]_user">
                <rsb:set attr="tmp.hasaccess" value="true"/>
              </rsb:equals>
              <rsb:equals attr="_value" value="[app.prefix]_user">
                <rsb:set attr="tmp.hasaccess" value="true"/>
              </rsb:equals>
              <rsb:equals attr="_value" value="rssbus_admin">
                <rsb:set attr="tmp.hasaccess" value="true"/>
              </rsb:equals>
              <rsb:equals attr="_value" value="admin">
                <rsb:set attr="tmp.hasaccess" value="true"/>
              </rsb:equals>

              <rsb:equals attr="tmp.hasaccess" value="true">
                <tr id="user_[out.username]">
                  <td>
                    [out.username]
                  </td>
                  <td>
                    <rsb:match pattern="admin|rssbus_admin" value="[roles]" type="regex">
                      <span>[lang.appaccess_administrator]</span>
                      <rsb:else>
                        <span style="float:left;">[lang.appaccess_user]</span>
                        <a href="javascript:void(0);" onclick="javascript:deleteUser('[out.username]', '[roles]');" class="remove-user small">\[X\]</a>
                      </rsb:else>
                    </rsb:match>
                  </td>
                </tr>
              </rsb:equals>
            </rsb:enum>
          </rsb:check>
        </rsb:call>
      </tbody>
    </table>
    
    <rsb:call op="[_feeds.rolelist]" out="out">
      <rsb:first>
        <span id="security-new-user-list">
          <a href="javascript:void(0);" title="New User."><span class="small">\[+\] [lang.svcinfo_addUser]</span></a>
          <span id="security-new-user">
      </rsb:first>
      <rsb:set attr="tmp.noaccess" value="true"/>
      <rsb:check attr="roles">
        <rsb:enum list="[roles]" separator=",">
          <rsb:equals attr="_value" value="rssbus_[app.prefix]_user">
            <rsb:set attr="tmp.noaccess" value="false"/>
          </rsb:equals>
          <rsb:equals attr="_value" value="[app.prefix]_user">
            <rsb:set attr="tmp.noaccess" value="false"/>
          </rsb:equals>
          <rsb:equals attr="_value" value="rssbus_admin">
            <rsb:set attr="tmp.noaccess" value="false"/>
          </rsb:equals>
          <rsb:equals attr="_value" value="admin">
            <rsb:set attr="tmp.noaccess" value="false"/>
          </rsb:equals>

        </rsb:enum>
      </rsb:check>
      
        <rsb:equals attr="tmp.noaccess" value="true">
          <a href='javascript:void(0);' onclick="javascript:addUser('[out.username | def]', '[roles | def]', '[lang.appaccess_giveAccess | replace('{0}', '[out.username | def]')]');">[out.username | def]</a>
        </rsb:equals>
      <rsb:last>
          </span>
        </span>
        |&nbsp;&nbsp;<a href="../shared/users.rst"><span class="small">[lang.svcinfo_manageUsers]</span></a>
      </rsb:last>
    </rsb:call>
    
  </div>
</rsb:match>  
