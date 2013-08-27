<rsb:include file="[_about.approot | pathcombine('shared/about.rst')]"/>
<rsb:include file="app.rst"/>
<!-- constants -->
<rsb:set attr="app.prefix" value="as2connector" />

<!--path config-->
<rsb:set item="site" attr="appname" value="AS2 Connector" />
<rsb:set item="site" attr="root" value="as2connector" />
<rsb:set item="site" attr="rootPath" value="[_about.approot]/[site.root]" />
<rsb:check attr="_testitem.istest">
  <rsb:set item="site" attr="rootUrl" value="[site.rootPath]"/>
  <rsb:else>
    <rsb:set item="site" attr="rootUrl" value="~/[site.root]"/>
  </rsb:else>
</rsb:check>

<rsb:check attr="_profile.[site.root]_datadir_global">
  <rsb:set item="site" attr="dataPath" value="[_profile.[site.root]_datadir_global]"/>
  <rsb:else>
    <rsb:set item="site" attr="dataPath" value="[_profile.default_datadir_global | pathcombine('[site.root]/')]"/>
  </rsb:else>
</rsb:check>

<rsb:set item="site" attr="profilesPath" value="[site.dataPath | pathcombine('profiles/')]"/>

<rsb:match pattern="[site.profilesPath | fileexists | tolower]" type="exact" value="false">
  <rsb:set attr="createProfile.path" value="[site.profilesPath]"/>
  <rsb:call op="fileMakeDir" in="createProfile"/>
</rsb:match>

<rsb:set item="site" attr="eventsPath" value="[site.rootUrl]/events"/>
<rsb:set item="site" attr="servicePath" value="[site.rootUrl]/services"/>
<rsb:set item="site" attr="viewPath" value="[site.rootUrl]/view"/>
<rsb:set item="site" attr="privatePath" value="[site.rootUrl]/priv"/>
<rsb:set item="site" attr="publicPath" value="[site.rootUrl]/pub"/>
<rsb:set item="site" attr="langPath" value="[site.rootPath]/lang"/>

<!--partner type config-->
<rsb:set item="site" attr="supportPartnerType" value="AS2"/>

<!--files -->
<rsb:set item="site" attr="statusdb" value="[site.dataPath | pathcombine('status.db')]"/>
<rsb:set item="site" attr="tasksfile" value="[site.profilesPath | pathcombine('LocalSettings.xml')]"/>
<rsb:set item="site" attr="tasksroot" value="/LocalSettings/Tasks/"/>

<!--AS2 receive http handler-->
<rsb:set item="site" attr="as2ReceiveFile" value="[site.rootUrl]/pub/ReceiveFile.rsb"/>
<rsb:set item="site" attr="as2ReceiveMDN" value="[site.rootUrl]/pub/ReceiveMDN.rsb"/>

<!--service config-->

<!--private service config-->
<rsb:set item="service" attr="writeSysLog" value="[site.privatePath]/writeSysLog.rsb"/>
<rsb:set item="service" attr="sendAllLock" value="[site.privatePath]/sendAllLock.rsb"/>
<rsb:set item="service" attr="runTasks" value="[site.privatePath]/runTasks.rsb"/>
<rsb:set item="service" attr="queuePartnerWork" value="[site.privatePath]/QueuePartnerWork.rsb"/>
<rsb:set item="service" attr="cleanAllLocks" value="[site.privatePath]/cleanAllLocks.rsb"/>
<rsb:set item="service" attr="archiveLogs" value="[site.privatePath]/archiveLogs.rsb"/>
<rsb:set item="service" attr="clearLogs" value="[site.privatePath]/clearLogs.rsb"/>

<rsb:set item="service" attr="getSelf" value="[site.privatePath]/getSelf.rsb"/>
<rsb:set item="service" attr="setSelf" value="[site.privatePath]/admin/setSelf.rsb"/>
<rsb:set item="service" attr="getPartner" value="[site.privatePath]/getPartner.rsb"/>
<rsb:set item="service" attr="setPartner" value="[site.privatePath]/admin/setPartner.rsb"/>
<rsb:set item="service" attr="createPartner" value="[site.privatePath]/admin/createPartner.rsb"/>
<rsb:set item="service" attr="deletePartner" value="[site.privatePath]/deletePartner.rsb"/>
<rsb:set item="service" attr="listPartners" value="[site.privatePath]/listPartners.rsb"/>
<rsb:set item="service" attr="getTask" value="[site.privatePath]/getTask.rsb"/>
<rsb:set item="service" attr="setTask" value="[site.privatePath]/admin/setTask.rsb"/>

<rsb:set item="service" attr="getLocalSettings" value="[site.privatePath]/getLocalSettings.rsb"/>
<rsb:set item="service" attr="setLocalSettings" value="[site.privatePath]/admin/setLocalSettings.rsb"/>

<rsb:set item="service" attr="addReceivedCache" value="[site.privatePath]/addReceivedCache.rsb"/>
<rsb:set item="service" attr="addSentCache" value="[site.privatePath]/addSentCache.rsb"/>
<rsb:set item="service" attr="buildReceivedCache" value="[site.privatePath]/buildReceivedCache.rsb"/>
<rsb:set item="service" attr="buildSentCache" value="[site.privatePath]/buildSentCache.rsb"/>

<rsb:set item="service" attr="restartFile" value="[site.privatePath]/restartFile.rsb"/>
<rsb:set item="service" attr="as2SendAllFiles" value="[site.privatePath]/sendAllFiles.rsb"/>
<rsb:set item="service" attr="as2SendFile" value="[site.privatePath]/sendFile.rsb"/>

<rsb:set item="service" attr="deleteAttachmentFile" value="[site.privatePath]/deleteAttachmentFile.rsb"/>
<rsb:set item="service" attr="listReceivedFiles" value="[site.privatePath]/listReceivedFiles.rsb"/>
<rsb:set item="service" attr="deleteReceivedFile" value="[site.privatePath]/deleteReceivedFile.rsb"/>
<rsb:set item="service" attr="viewReceivedFile" value="[site.privatePath]/viewReceivedFile.rsb"/>
<rsb:set item="service" attr="listOutgoingFiles" value="[site.privatePath]/listOutgoingFiles.rsb"/>
<rsb:set item="service" attr="deleteOutgoingFiles" value="[site.privatePath]/deleteOutgoingFiles.rsb"/>
<rsb:set item="service" attr="viewOutgoingFile" value="[site.privatePath]/viewOutgoingFile.rsb"/>
<rsb:set item="service" attr="listRestartFiles" value="[site.privatePath]/listRestartFiles.rsb"/>
<rsb:set item="service" attr="deleteRestartFile" value="[site.privatePath]/deleteRestartFile.rsb"/>
<rsb:set item="service" attr="listPendingFiles" value="[site.privatePath]/listPendingFiles.rsb"/>
<rsb:set item="service" attr="listSentFiles" value="[site.privatePath]/listSentFiles.rsb"/>
<rsb:set item="service" attr="deleteSentFile" value="[site.privatePath]/deleteSentFile.rsb"/>
<rsb:set item="service" attr="viewSentFile" value="[site.privatePath]/viewSentFile.rsb"/>
<rsb:set item="service" attr="listLogs" value="[site.privatePath]/listLogs.rsb"/>
<rsb:set item="service" attr="viewLog" value="[site.privatePath]/viewLog.rsb"/>
<rsb:set item="service" attr="deleteLog" value="[site.privatePath]/deleteLog.rsb"/>

<rsb:set item="service" attr="listReceivedLogs" value="[site.privatePath]/listReceivedLogs.rsb"/>
<rsb:set item="service" attr="listSentLogs" value="[site.privatePath]/listSentLogs.rsb"/>
<rsb:set item="service" attr="listUnsentLogs" value="[site.privatePath]/listUnsentLogs.rsb"/>

<rsb:set item="service" attr="listBatchFiles" value="[site.privatePath]/listBatchFiles.rsb"/>
<rsb:set item="service" attr="createTestFile" value="[site.privatePath]/createTestFile.rsb"/>
<rsb:set item="service" attr="verifyCert" value="[site.privatePath]/verifyCert.rsb"/>
<rsb:set item="service" attr="createCert" value="[site.privatePath]/createCert.rsb"/>
<rsb:set item="service" attr="checkCert" value="[site.privatePath]/checkCert.rsb"/>
<rsb:set item="service" attr="verifyAutoSendURL" value="[site.privatePath]/verifyAutoSendURL.rsb"/>
<rsb:set item="service" attr="viewPublicCert" value="[site.privatePath]/viewPublicCert.rsb"/>
<rsb:set item="service" attr="startTimer" value="[site.privatePath]/startTimer.rsb"/>
<rsb:set item="service" attr="sendMail" value="[site.privatePath]/sendMail.rsb"/>

<!--public service config -->
<rsb:set item="pubservice" attr="GetLocalSettings" value="[site.servicePath]/GetLocalSettings.rsb"/>
<rsb:set item="pubservice" attr="GetPersonalProfile" value="[site.servicePath]/GetPersonalProfile.rsb"/>
<rsb:set item="pubservice" attr="SetAS2Partner" value="[site.servicePath]/SetPartner.rsb"/>
<rsb:set item="pubservice" attr="SetLocalSettings" value="[site.servicePath]/SetLocalSettings.rsb"/>
<rsb:set item="pubservice" attr="SetPersonalProfile" value="[site.servicePath]/SetPersonalProfile.rsb"/>

<!--pub config -->
<rsb:set item="pub" attr="heartbeat" value="[site.publicPath]/heartbeat.rsb"/>

<rsb:check attr="_profile.[site.supportPartnerType | tolower]_heartbeaturl_global">
  <rsb:else>
    <rsb:set attr="_profile.[site.supportPartnerType | tolower]_heartbeaturl_global" value="[pub.heartbeat]"/>
    <rsb:set attr="input.url" value="[_profile.[site.supportPartnerType | tolower]_heartbeaturl_global]?[method | def('@schedule')]" />
    <rsb:set attr="input.interval" value="1" />
    <rsb:call op="timerStart" in="input"/>
  </rsb:else>
</rsb:check>

<!--events config-->
<rsb:set item="service" attr="afterReceive" value="[site.eventsPath]/AfterReceive.rsb"/>
<rsb:set item="service" attr="afterSend" value="[site.eventsPath]/AfterSend.rsb"/>
<rsb:set item="service" attr="beforeSend" value="[site.eventsPath]/BeforeSend.rsb"/>

<!--view config-->
<rsb:set item="view" attr="showSelf" value="[site.viewPath]/self.rst"/>
<rsb:set item="view" attr="listPartners" value="[site.viewPath]/listPartners.rst"/>
<rsb:set item="view" attr="listReceivedFiles" value="[site.viewPath]/listReceivedFiles.rst"/>
<rsb:set item="view" attr="listOutgoingFiles" value="[site.viewPath]/listOutgoingFiles.rst"/>
<rsb:set item="view" attr="listPendingFiles" value="[site.viewPath]/listPendingFiles.rst"/>
<rsb:set item="view" attr="listSentFiles" value="[site.viewPath]/listSentFiles.rst"/>
<rsb:set item="view" attr="listRestartFiles" value="[site.viewPath]/listRestartFiles.rst"/>
<rsb:set item="view" attr="listReceivedLogs" value="[site.viewPath]/listReceivedLogs.rst"/>
<rsb:set item="view" attr="listReceivedLogsTable" value="[site.viewPath]/listReceivedLogsTable.rst"/>
<rsb:set item="view" attr="listReceivedLogsSubTable" value="[site.viewPath]/listReceivedLogsSubTable.rst"/>
<rsb:set item="view" attr="listAS2ReceivedLogs" value="[site.viewPath]/listAS2ReceivedLogs.rst"/>
<rsb:set item="view" attr="listSentLogs" value="[site.viewPath]/listSentLogs.rst"/>
<rsb:set item="view" attr="listSentLogsTable" value="[site.viewPath]/listSentLogsTable.rst"/>
<rsb:set item="view" attr="listSentLogsSubTable" value="[site.viewPath]/listSentLogsSubTable.rst"/>
<rsb:set item="view" attr="listAS2SentLogs" value="[site.viewPath]/listAS2SentLogs.rst"/>
<rsb:set item="view" attr="listAsyncLogs" value="[site.viewPath]/listAsyncLogs.rst"/>
<rsb:set item="view" attr="showPartner" value="[site.viewPath]/partner.rst"/>
<rsb:set item="view" attr="as2Partner" value="[site.viewPath]/as2Partner.rst"/>
<rsb:set item="view" attr="automation" value="[site.viewPath]/automation.rst"/>
<rsb:set item="view" attr="commands" value="[site.viewPath]/commands.rst"/>
<rsb:set item="view" attr="directories" value="[site.viewPath]/directories.rst"/>
<rsb:set item="view" attr="saveChanges" value="[site.viewPath]/saveChanges.rst"/>
<rsb:set item="view" attr="sendFile" value="[site.viewPath]/sendFile.rst"/>
<rsb:set item="view" attr="as2RestartFile" value="[site.viewPath]/as2RestartFile.rst"/>
<rsb:set item="view" attr="notification" value="[site.viewPath]/notification.rst"/>

<!--op config-->
<rsb:set item="op" attr="getPartner" value="[app.prefix]As2profileGetPartner"/>
<rsb:set item="op" attr="getSelf" value="[app.prefix]As2profileGetSelf"/>

<rsb:set item="site" attr="login_url" value="../shared/login.rst"/>
<rsb:set item="site" attr="logout_url" value="../shared/login.rst"/>
<rsb:equals attr="site.java" value="true">
  <rsb:set item="site" attr="login_action" value="j_security_check"/>
  <rsb:set item="site" attr="login_url" value="../shared/glogin.rst"/>
  <rsb:set item="site" attr="logout_url" value="../logout.jsp"/>
</rsb:equals>
<rsb:equals attr="site.net" value="true">
  <rsb:set item="site" attr="login_action" value="Login.aspx"/>
</rsb:equals>

<rsb:set item="site" attr="os" value="windows"/>
<rsb:check value="[site.java]">
  <rsb:set attr="propname" value="os.name"/>
  <rsb:call op="sysGetProperty">
    <rsb:match pattern="Windows*" type="glob" value="[sys:propvalue]">
      <rsb:else>
        <rsb:set item="site" attr="os" value="unix"/>
      </rsb:else>
    </rsb:match>
  </rsb:call>
</rsb:check>

<rsb:set item="site" attr="passwordMask" value="***************" />

<rsb:set item="ui" attr="toolTips:bubble" value="[_about.approot | pathcombine('shared/view/toolTipsBubble.rst')]" />
<rsb:set item="ui" attr="input:dropdown" value="[_about.approot | pathcombine('shared/view/inputDropdown.rst')]" />