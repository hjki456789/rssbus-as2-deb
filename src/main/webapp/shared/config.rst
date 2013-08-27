<rsb:include file="[_about.approot]/shared/about.rst"/>

<!--path config-->
<rsb:set item="site" attr="rootPath" value="~/shared" />
<rsb:set item="site" attr="rootPathA" value="[_about.approot]/shared" />

<rsb:set item="site" attr="servicePath" value="[site.rootPath]/service"/>
<rsb:set item="site" attr="privatePath" value="[site.rootPath]/priv"/>
<rsb:set item="site" attr="adminPath" value="[site.rootPath]/priv/admin"/>
<rsb:set item="site" attr="langPath" value="[site.rootPathA]/lang"/>

<rsb:check value="[site.java]">
  <rsb:set item="site" attr="appdatadir" value="[_about.approot | pathcombine('WEB-INF')]"/>
  <rsb:else>
    <rsb:set item="site" attr="appdatadir" value="[_about.approot | pathcombine('app_data')]"/>
  </rsb:else>
</rsb:check>

<rsb:set item="site" attr="profiledb" value="[site.appdatadir | pathcombine('Profile.db')]"/>
<rsb:set item="site" attr="userdb" value="[site.appdatadir | pathcombine('Users.db')]"/>
<rsb:set item="site" attr="logdb" value="[site.appdatadir | pathcombine('Logs.db')]"/>

<!--service config-->

<!--private service config-->

<!--private admin service config-->
<rsb:set item="service" attr="addRole" value="[site.adminPath]/addRole.rsb"/>
<rsb:set item="service" attr="createUser" value="[site.adminPath]/createUser.rsb"/>
<rsb:set item="service" attr="changePassword" value="[site.adminPath]/changePassword.rsb"/>
<rsb:set item="service" attr="deleteRoles" value="[site.adminPath]/deleteRoles.rsb"/>
<rsb:set item="service" attr="deleteUser" value="[site.adminPath]/deleteUser.rsb"/>
<rsb:set item="service" attr="getRoles" value="[site.adminPath]/getRoles.rsb"/>
<rsb:set item="service" attr="getScheduledTasks" value="[site.adminPath]/getScheduledTasks.rsb"/>
<rsb:set item="service" attr="setScheduledTask" value="[site.adminPath]/setScheduledTask.rsb"/>
<rsb:set item="service" attr="updateUser" value="[site.adminPath]/updateUser.rsb"/>
<rsb:set item="service" attr="duplicateConnector" value="[site.adminPath]/duplicateConnector.rsb"/>
<rsb:set item="service" attr="renameConnector" value="[site.adminPath]/renameConnector.rsb"/>
<rsb:set item="service" attr="deleteConnector" value="[site.adminPath]/deleteConnector.rsb"/>

<rsb:set item="site" attr="root" value="~/"/>

<rsb:set item="site" attr="login_url" value="login.rst"/>
<rsb:set item="site" attr="logout_url" value="login.rst"/>
<rsb:equals attr="site.java" value="true">
  <rsb:set item="site" attr="login_action" value="j_security_check"/>
  <rsb:set item="site" attr="login_url" value="glogin.rst"/>
  <rsb:set item="site" attr="logout_url" value="../logout.jsp"/>
</rsb:equals>
<rsb:equals attr="site.net" value="true">
  <rsb:set item="site" attr="login_action" value="Login.aspx"/>
</rsb:equals>

<rsb:set item="ui" attr="toolTips:bubble" value="[site.rootPath]/view/toolTipsBubble.rst" />
<rsb:set item="ui" attr="input:dropdown" value="[site.rootPath]/view/inputDropdown.rst" />