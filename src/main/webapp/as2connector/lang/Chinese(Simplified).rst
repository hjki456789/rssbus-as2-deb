<rsb:include file="~/shared/lang/Chinese(Simplified).rst"/>

<!-- AS2 Chinese (Simplified) -->
<rsb:set attr="site.language" value="Chinese (Simplified)"/>

<!-- about.rst -->
<rsb:set attr="lang.aboutTitle_about" value="关于 RSSBus AS2 Connector 连接器"/>
<rsb:set attr="lang.aboutTitle_thankYou" value="谢谢"/>
<rsb:set attr="lang.about_thankYouContent1" value="感谢您选择了AS2连接器。 AS2连接器是使用领先的AS2协议进行安全互联网上电子数据交换(EDI)的最佳解决方案。"/>
<rsb:set attr="lang.about_thankYouContent2" value="我们了解到您需要一个电子数据交换(EDI)的解决方案。 请选择RSSBus作为您业务的关键部分并让我们来提供您更多的产品改进, 技术支持和创新产品。 我们将尽力满足您的期望！"/>
<rsb:set attr="lang.about_thankYouContent3" value="请访问我们的网站来获取AS2连接器及其更新"/>
<rsb:set attr="lang.aboutTitle_drummondCertification" value="Drummond&trade; 认证"/>
<rsb:set attr="lang.about_drummondCertificationContent" value="本产品已经通过了严格详尽的测试并获得了Drummond&trade; 认证， 来确保您能够简单的配置您的交易伙伴。"/>
<rsb:set attr="lang.aboutTitle_singleTradingPartner" value="1位交易伙伴 - 免费"/>
<rsb:set attr="lang.about_singleTradingPartnerContent" value="AS2连接器在和1位交易伙伴使用时完全免费， 并且没有任何额外的费用而且无需每年的维护。 当您需要和多位交易伙伴使用时，您需要购买相关许可。"/>
<rsb:set attr="lang.aboutTitle_licensingInformation" value="许可信息"/>
<rsb:set attr="lang.about_licensingInformationContent1" value="通过点击下面的链接“升级您的使用许可”来购买多伙伴的使用许可。 我们提供了多种不同级别的许可包括无数量限制许可。"/>
<rsb:set attr="lang.about_licensingInformationContent2" value="当前本机使用许可："/>
<rsb:set attr="lang.about_maximumPartners" value="最多伙伴数："/>
<rsb:set attr="lang.about_upgradeLicense" value="升级您的使用许可"/>
<rsb:set attr="lang.about_installLicense" value="安装许可"/>
<rsb:set attr="lang.about_serialNumber" value="序列号："/>
<rsb:set attr="lang.about_licensingInformationContent3" value="在线购买支持多位伙伴的使用许可："/>
<rsb:set attr="lang.about_version" value="版本"/>

<!-- activate.rst -->
<rsb:set attr="lang.activate_demoname" value="1位伙伴免费许可"/>
<rsb:set attr="lang.activate_demodesc" value="免费许可可以使用本产品所有基本功能，高级功能使用需要多伙伴许可。"/>
<rsb:set attr="lang.activate_demobtn" value="使用免费许可"/>
<rsb:set attr="lang.activate_fullname" value="多伙伴许可"/>
<rsb:set attr="lang.activate_fulldesc" value="多伙伴许可可以使用本产品所有功能。 请在下面输入框输入您的产品序列号并安装激活。"/>
<rsb:set attr="lang.activateTitle_licenseRequired" value="许可"/>

<!-- footer.rst -->
<rsb:set attr="lang.popup_addCertificate" value="导入新证书"/>
<rsb:set attr="lang.popup_addCertificateContent1" value="请选择一个证书文件，然后点击“导入证书”来导入你指定的证书。 请注意，如果服务器上已经存在此证书文件，一旦您导入了新的证书文件，旧的将会被覆盖。"/>
<rsb:set attr="lang.popup_addCertificateContent2" value="支持的证书文件格式有.cer，.pfx，.pem。"/>
<rsb:set attr="lang.popup_addCertificateFile" value="证书文件："/>
<rsb:set attr="lang.popup_addCertificateFileBtn" value="导入证书"/>
<rsb:set attr="lang.popup_createCertificate" value="创建新证书"/>
<rsb:set attr="lang.popup_createCertificateContent1" value="请为此证书指定一个通用名称或组织。 剩下的字段是必需的。"/>
<rsb:set attr="lang.popup_createCertificateContent2" value="下面字段为可选，为了提供更多证书持有者的信息。"/>
<rsb:set attr="lang.popup_createCertificateCommonname" value="通用名称："/>
<rsb:set attr="lang.popup_createCertificateOrganization" value="组织："/>
<rsb:set attr="lang.popup_createCertificateFileName" value="文件名："/>
<rsb:set attr="lang.popup_createCertificateSerialNumber" value="序列号："/>
<rsb:set attr="lang.popup_createCertificateSerialPassword" value="密码："/>
<rsb:set attr="lang.popup_createCertificateExpiration" value="有效期限（年）："/>
<rsb:set attr="lang.popup_createCertificateKeySize" value="钥匙长度："/>
<rsb:set attr="lang.popup_createCertificateOrganizationalUnit" value="组织单位："/>
<rsb:set attr="lang.popup_createCertificateLocality" value="位置（城市）："/>
<rsb:set attr="lang.popup_createCertificateState" value="州\省："/>
<rsb:set attr="lang.popup_createCertificateCountry" value="国家："/>
<rsb:set attr="lang.popup_createCertificateEmail" value="电子邮件："/>
<rsb:set attr="lang.popup_createCertificateBtn" value="创建证书"/>
<rsb:set attr="lang.popup_cspTip" value="不能创建证书"/>
<rsb:set attr="lang.popup_cspTipContent" value="
  <p>系统不能获取CSP. 如果您的AS2连接器正运行在IIS里，请按下列步骤解决此问题。</p>
  <p>(1) 打开IIS管理，为IIS添加一个新的application pool。</p>
  <p>(2) 更改新增加的application pool的identity为NetworkService。</p>
  <p>(3) 设置AS2连接器站点去使用新增加的application pool。</p>
  <p>(4) 重启IIS，然后再次创建证书。</p>
"/>
<rsb:set attr="lang.popup_cspTipBtn" value="确定"/>
<rsb:set attr="lang.popup_actionStatus" value="动作状态"/>
<rsb:set attr="lang.popup_actionStatusMsg" value="请不要关闭此窗口并执行其他动作。"/>

<!-- header.rst -->
<rsb:set attr="lang.menu_partners" value="伙伴"/>
<rsb:set attr="lang.menu_profile" value="配置"/>
<rsb:set attr="lang.menu_help" value="帮助"/>
<rsb:set attr="lang.menu_about" value="关于"/>
<rsb:set attr="lang.menu_services" value="服务"/>
<rsb:set attr="lang.js_checkUnsave" value="有配置更改未保存。\\r\\n确定要离开此页面而不保存配置？"/>

<!-- help.rst -->
<rsb:set attr="lang.help" value="帮助"/>
<rsb:set attr="lang.helpOnline" value="在线资源"/>
<rsb:set attr="lang.helpOnlineContent" value="当您开始配置AS2连接器并与交易伙伴建立通信，可以参考以下帮助资源。"/>
<rsb:set attr="lang.helpOnlineStart" value="从这里开始"/>
<rsb:set attr="lang.helpOnlineFAQ" value="常见问题"/>
<rsb:set attr="lang.helpTechnicalSupport" value="技术支持"/>
<rsb:set attr="lang.helpTechnicalSupportContent" value="请提交其他技术问题给我们的<a href='http://rssbus.com/support/submit.aspx'>技术支持小组</a>。 同时请提供关于您问题的详尽描述以及使用本产品得到的结果和期望的结果，这将有利于我们更为快速准确的解决您的问题。"/>

<!-- partners.rst -->
<rsb:set attr="lang.partners" value="伙伴列表"/>
<rsb:set attr="lang.checkBeforeSave" value="You are changing the AS2 Identifier of this partner. This will delete the old partner stored as \[{0}\] and create a new partner named \[{1}\]. Any logs and incoming/outgoing files for \[{0}\] will also be deleted. Please backup any required files before changing this partner. \\r\\n\\r\\nDo you wish to proceed?"/>

<!-- Common -->
<rsb:set attr="lang.required" value="* 必填"/>
<rsb:set attr="lang.certificateSubject" value="证书主题："/>
<rsb:set attr="lang.importCertificate" value="导入证书"/>
<rsb:set attr="lang.certificateExpires" value="此证书将在{0}天后过期。"/>
<rsb:set attr="lang.partner_successSaved" value="伙伴配置保存成功。"/>
<rsb:set attr="lang.partnerTitle_addNew" value="新交易伙伴"/>
<rsb:set attr="lang.partnerTitle_tradingPartner" value="交易伙伴信息"/>
<rsb:set attr="lang.partner_organizationName" value="组织名称："/>
<rsb:set attr="lang.partner_failure" value="失败："/>
<rsb:set attr="lang.partner_category" value="类别"/>
<rsb:set attr="lang.partner_generalError" value="一般信息"/>
<rsb:set attr="lang.partner_specificError" value="详细错误"/>
<rsb:set attr="lang.partner_tip" value="提示"/>

<!-- view/as2Partner.rst -->
<rsb:set attr="lang.as2Partner_as2Identifier" value="AS2标识："/>
<rsb:set attr="lang.as2Partner_partnerURL" value="伙伴 URL："/>
<rsb:set attr="lang.as2PartnerTitle_connection" value="连接信息"/>
<rsb:set attr="lang.as2Partner_outgoingMsgSecurity" value="传出消息安全："/>
<rsb:set attr="lang.as2Partner_signOutgoingData" value="签名发出的数据"/>
<rsb:set attr="lang.as2Partner_encryptOutgoingData" value="加密发出的数据"/>
<rsb:set attr="lang.as2Partner_IncomingMsgSecurity" value="传入消息安全："/>
<rsb:set attr="lang.as2Partner_requireSignature" value="需要签名"/>
<rsb:set attr="lang.as2Partner_requireEncryption" value="需要加密"/>
<rsb:set attr="lang.as2Partner_compression" value="压缩："/>
<rsb:set attr="lang.as2Partner_compressOutgoingData" value="压缩发出的数据"/>
<rsb:set attr="lang.as2Partner_connectionTimeout" value="连接超时（秒）："/>
<rsb:set attr="lang.as2PartnerTitle_mdn" value="MDN回执"/>
<rsb:set attr="lang.as2Partner_requestMDNReceipt" value="需要MDN回执"/>
<rsb:set attr="lang.as2Partner_security" value="安全："/>
<rsb:set attr="lang.as2Partner_signed" value="已签名"/>
<rsb:set attr="lang.as2Partner_unsigned" value="未签名"/>
<rsb:set attr="lang.as2Partner_delivery" value="投递："/>
<rsb:set attr="lang.as2Partner_synchronous" value="同步"/>
<rsb:set attr="lang.as2Partner_asynchronous" value="异步"/>
<rsb:set attr="lang.as2PartnerTitle_tradingCertificates" value="交易伙伴证书 (PEM/CER 格式)"/>
<rsb:set attr="lang.as2Partner_encryptionCertificatesInfo" value="需要证书来验证签名，加密发出的信息和建立安全连接（SSL）。您的交易伙伴可能针对不同的目的选择不同的证书，也可以使用同一份证书。"/>
<rsb:set attr="lang.as2Partner_encryptionCertificate" value="加密证书："/>
<rsb:set attr="lang.as2Partner_verificationCertificateInfo" value="一般交易伙伴将使用同样的证书来加密和签名数据，所以大多数情况可以忽略此项。 如果没有指定此证书，本应用程序将使用加密证书来验证签名。"/>
<rsb:set attr="lang.as2Partner_verificationCertificate" value="验证证书："/>
<rsb:set attr="lang.as2Partner_SSLServerCertificateInfo" value="此项为可选，只有在您的交易伙伴使用一个安全连接（SSL）的URL才需要指定此证书。&nbsp;请使用“*”来接受所有来自服务器的证书。如果不能正确的使用，您可能会留下一个安全漏洞，请谨慎使用。"/>
<rsb:set attr="lang.as2Partner_SSLServerCertificate" value="SSL服务器证书："/>
<rsb:set attr="lang.as2Partner_publicProfile" value="公开配置"/>
<rsb:set attr="lang.as2Partner_publicProfileEnabled" value="您的公开配置设置已经公开。"/>
<rsb:set attr="lang.as2Partner_publicProfileDisabled" value="
<b>注意</b>&nbsp;<i>您的公开配置设置还未公开。 为了让您的交易伙伴能够获得相关连接参数，请到<a href='profile.rst#pubprofile'>配置</a>页面允许公开配置设置。</i>
"/>
<rsb:set attr="lang.as2PartnerTitle_VLM" value="超大文件支持 (VLM)"/>
<rsb:set attr="lang.as2Partner_streamingInfo" value="开启此功能后，本应用程序将使用分块传输编码（Chunked transfer encoding）来发送您的文件，这将支持传送超大文件到您的交易伙伴。 请谨慎使用此功能，可能您的交易伙伴不支持接收此类文件。"/>
<rsb:set attr="lang.as2Partner_streaming" value="Streaming - (分块传输编码 Chunked transfer encoding)"/>
<rsb:set attr="lang.as2Partner_logStreamingRequests" value="Log streaming requests"/>
<rsb:set attr="lang.as2Partner_logStreamingRequestsInfo" value="When left unchecked, the payload and request logs will not be written when sending and receiving files. This will conserve disk space for sending and receiving large files. Note that this is only valid when streaming is turned on."/>
<rsb:set attr="lang.as2Partner_as2RestartInfo" value="开启此功能，将允许应用程序在传输中断后重新发送文件。 这在传输大文件时非常有用。 注意：有些伙伴可能不支持此功能。"/>
<rsb:set attr="lang.as2Partner_as2Restart" value="AS2 重新发送"/>
<rsb:set attr="lang.as2PartnerTitle_FIPSCompliance" value="FIPS 准则"/>
<rsb:set attr="lang.as2Partner_FIPSComplianceInfo" value="开启此功能后，将限制加密和签名算法，只允许符合FIPS 140-2 的算法。 注意：大部分标准算法都已经符合FIPS准则。"/>
<rsb:set attr="lang.as2Partner_ForceFIPScompliant" value="强制使用符合FIPS准则的算法"/>
<rsb:set attr="lang.as2PartnerTitle_alternateLocalProfile" value="特殊本地配置"/>
<rsb:set attr="lang.as2Partner_alternateLocalProfileInfo" value="您可能需要给此交易伙伴使用另一个本地AS2标识以及私钥证书。 这将允许您使用多个AS2标识和特别的私钥证书来跟同一个伙伴通信。 配置这些将会覆盖您在配置页面设置的AS2标识及私钥证书。"/>
<rsb:set attr="lang.as2Partner_localAS2Identifier" value="本地AS2标识："/>
<rsb:set attr="lang.as2Partner_privateCertificate" value="私钥证书："/>
<rsb:set attr="lang.as2Partner_certificatePassword" value="证书密码："/>
<rsb:set attr="lang.as2PartnerTitle_SSLClientAuthentication" value="SSL客户端验证"/>
<rsb:set attr="lang.as2Partner_SSLClientAuthenticationInfo" value="此项设置为可选，只用于当您的交易伙伴需要SSL客户端验证时。"/>
<rsb:set attr="lang.as2PartnerTitle_httpAuthentication" value="HTTP验证"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationInfo" value="此项设置为可选，只用于当您的交易伙伴需要HTTP验证时。"/>
<rsb:set attr="lang.as2Partner_useHTTPAuthentication" value="使用HTTP验证"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationType" value="HTTP验证类型："/>
<rsb:set attr="lang.as2Partner_httpAuthenticationBasic" value="基础"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationDigest" value="摘要"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationUser" value="用户名："/>
<rsb:set attr="lang.as2Partner_httpAuthenticationPassword" value="密码："/>
<rsb:set attr="lang.as2PartnerTitle_otherSettings" value="其他"/>
<rsb:set attr="lang.as2Partner_otherSettingsInfo" value="以下为其他高级设置。"/>
<rsb:set attr="lang.as2Partner_notSpecified" value="未指定"/>

<!-- view/automation.rst -->
<rsb:set attr="lang.automationTitle" value="自动控制设置"/>
<rsb:set attr="lang.automation_info" value="当发送和接收没有通过管理控制台初始化时，自动控制设置可以控制应用程序的行为。 当此功能被激活，本程序将尝试每分钟发送传出（Outgoing）文件夹中的文件。"/>
<rsb:set attr="lang.automation_enableAutomation" value="允许自动控制"/>
<rsb:set attr="lang.automation_info2" value="当发送传输失败时，失败的文件会被加上“.failed.?”扩展名。“?”代表发送尝试的次数。经过指定的重试间隔后，应用程序会再次尝试发送文件。如果失败，会增加重试的计数器。如果已经超出了指定的重试次数，应用程序将不再继续尝试发送文件。"/>
<rsb:set attr="lang.automation_retryInterval" value="重试间隔（分钟）："/>
<rsb:set attr="lang.automation_retryIntervalInfo" value="如果0值被指定，应用程序会每间隔0-30秒重新尝试发送一次文件。"/>
<rsb:set attr="lang.automation_maximumAttempts" value="最多尝试："/>
<rsb:set attr="lang.automation_maximumAttemptsInfo" value="如果0值被指定，应用程序会无限次数尝试发送文件。"/>
<rsb:set attr="lang.automation_chkEmailOnFail" value="当自动控制发生错误时，向应用程序管理员发送邮件通知*"/>

<!-- view/directories.rst -->
<rsb:set attr="lang.directoriesTitle" value="Local Directories*"/>
<rsb:set attr="lang.directories_Incoming" value="Incoming Directory:"/>
<rsb:set attr="lang.directories_Incoming_info" value="All files being received for this profile will be written to this directory."/>
<rsb:set attr="lang.directories_Outgoing" value="Outgoing Directory:"/>
<rsb:set attr="lang.directories_Outgoing_info" value="The outgoing directory is where the application will look for files to send during automation. In addition, any unsent files in this folder will be shown when viewing the Outgoing tab for this profile."/>

<!-- view/commands.rst -->
<rsb:set attr="lang.commandsTitle" value="Script Configuration*"/>
<rsb:set attr="lang.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %AS2To%, %AS2From%, %MessageID%, %FileName%, %FileNameWritten%, %Organization%, %ShortDate%, %LongDate%."/>
<rsb:set attr="lang.commands_BeforeSend" value="Before Sending:"/>
<rsb:set attr="lang.commands_AfterSend" value="After Sending:"/>
<rsb:set attr="lang.commands_AfterRecv" value="After Receiving:"/>
<rsb:set attr="lang.commands_BatchFile" value="Batch File (.bat)"/>
<rsb:set attr="lang.commands_ShellScript" value="Shell Script (.sh)"/>
<rsb:set attr="lang.commands_Arguments" value="Arguments"/>

<!-- view/ftpActions.rst -->
<rsb:set attr="lang.ftpUpload" value="上传"/>
<rsb:set attr="lang.ftpUpload_chkUpload" value="上传Outgoing目录中的文件到当前位置。"/>
<rsb:set attr="lang.ftpUpload_remotePath" value="上传的远程路径："/>
<rsb:set attr="lang.ftpDownload" value="下载"/>
<rsb:set attr="lang.ftpDownload_chkDownload" value="从这个位置下载文件到Incoming目录"/>
<rsb:set attr="lang.ftpDownload_ftpGetPaid" value="现在下载*"/>
<rsb:set attr="lang.ftpDownload_ftpGet" value="现在下载"/>
<rsb:set attr="lang.ftpDownload_remotePathsInfo" value="设置一个或多个文件路径。绝对路径前使用路径分隔符。最后一个路径分隔符后的字符串作为文件掩码（*.*，/docs/*.doc， /imgs/pic*）。"/>
<rsb:set attr="lang.ftpDownload_remotePaths" value="下载的远程路径："/>
<rsb:set attr="lang.ftpDownload_chkOverwriteDownload" value="覆盖本地文件"/>
<rsb:set attr="lang.ftpDownload_chkDelete" value="下载后删除文件"/>
<rsb:set attr="lang.ftpDownload_pollInterval" value="轮询间隔（分）："/>

<!-- view/ftpPartner.rst -->
<rsb:set attr="lang.ftpPartner_remoteHost" value="远程主机："/>
<rsb:set attr="lang.ftpPartner_port" value="端口："/>
<rsb:set attr="lang.ftpPartner_user" value="用户名："/>
<rsb:set attr="lang.ftpPartner_password" value="密码："/>
<rsb:set attr="lang.ftpPartnerTitle_SSLSettings" value="SSL设置*"/>
<rsb:set attr="lang.ftpPartner_SSLType" value="SSL类型："/>
<rsb:set attr="lang.ftpPartner_SSLType_none" value="无（明文）"/>
<rsb:set attr="lang.ftpPartner_SSLType_explicit" value="显式"/>
<rsb:set attr="lang.ftpPartner_SSLType_implicit" value="隐式"/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCertInfo" value="SSL服务器证书。只有当和FTPS服务器通信时需要设置。使用“*”来接受所有来自服务器的证书。如果不能正确的使用，您可能会留下一个安全漏洞，请谨慎使用。"/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCert" value="SSL服务器证书"/>
<rsb:set attr="lang.ftpPartnerTitle_FIPSCompliance" value="[lang.as2PartnerTitle_FIPSCompliance]*"/>
<rsb:set attr="lang.ftpPartner_FIPSComplianceInfo" value="[lang.as2Partner_FIPSComplianceInfo]"/>
<rsb:set attr="lang.ftpPartner_chkForceFIPSCompliance" value="[lang.as2Partner_ForceFIPScompliant]"/>
<rsb:set attr="lang.ftpPartnerTitle_SSLClientAuthentication" value="[lang.as2PartnerTitle_SSLClientAuthentication]*"/>
<rsb:set attr="lang.ftpPartner_SSLClientAuthenticationInfo" value="[lang.as2Partner_SSLClientAuthenticationInfo]"/>
<rsb:set attr="lang.ftpPartner_privateCertificate" value="[lang.as2Partner_privateCertificate]"/>
<rsb:set attr="lang.ftpPartner_certificatePassword" value="[lang.as2Partner_certificatePassword]"/>
<rsb:set attr="lang.ftpPartnerTitle_otherSettings" value="[lang.as2PartnerTitle_otherSettings]"/>
<rsb:set attr="lang.ftpPartner_otherSettingsInfo" value="[lang.as2Partner_otherSettingsInfo]"/>
<rsb:set attr="lang.ftpPartner_notSpecified" value="[lang.as2Partner_notSpecified]"/>

<!-- view/listPartners.rst -->
<rsb:set attr="lang.listPartners_upgradelicense" value="The current license for this application has reached the maximum amount of allowed trading partner configurations. You must upgrade your license to add additional trading partners."/>
<rsb:set attr="lang.listPartners_addPartner" value="添加伙伴..."/>
<rsb:set attr="lang.listPartners_deleteConfirm" value="确定您需要删除&amp;quot;{0}&amp;quot;？\\r\\n\\r\\n警告： 删除此伙伴同时将会删除所有跟此伙伴相关联的数据。 请在删除此伙伴前备份相关数据。"/>

<!-- Table Common -->
<rsb:set attr="lang.table_refresh" value="刷新"/>
<rsb:set attr="lang.table_delete" value="删除"/>
<rsb:set attr="lang.table_exportExcel" value=" 导出Excel"/>
<rsb:set attr="lang.table_dateTime" value="日期/时间"/>
<rsb:set attr="lang.table_status" value="状态"/>
<rsb:set attr="lang.table_fileName" value="文件名"/>
<rsb:set attr="lang.table_fileSize" value="文件大小"/>
<rsb:set attr="lang.table_logMessages" value="日志信息"/>
<rsb:set attr="lang.table_creationTime" value="创建时间"/>
<rsb:set attr="lang.table_logType" value="日志类型"/>
<rsb:set attr="lang.table_receiveInfo1" value="Incoming files will be received to the "/>
<rsb:set attr="lang.table_receiveInfo2" value="directory."/>
<rsb:set attr="lang.table_sendInfo1" value="请把需要发送到文件放置"/>
<rsb:set attr="lang.table_sendInfo2" value="文件夹中。"/>
<rsb:set attr="lang.table_automationInfo" value="您可以为此伙伴激活自动控制设置来自动发送此文件夹中的文件。"/>
<rsb:set attr="lang.table_createTestFiles" value=" 创建测试文件"/>
<rsb:set attr="lang.table_send" value="发送"/>
<rsb:set attr="lang.table_restart" value="重新发送"/>

<!-- view/oftpPartner.rst -->
<rsb:set attr="lang.oftpPartner_version" value="版本："/>
<rsb:set attr="lang.oftpPartner_clientSSID" value="客户端SSID："/>
<rsb:set attr="lang.oftpPartner_clientPassword" value="客户端密码"/>
<rsb:set attr="lang.oftpPartner_serverSSID" value="服务器SSID："/>
<rsb:set attr="lang.oftpPartner_serverPassword" value="服务器密码："/>
<rsb:set attr="lang.oftpPartnerTitle_connectionInfo" value="连接信息"/>
<rsb:set attr="lang.oftpPartner_connectionInfo" value="以下连接设置只能用于2.0或更高版本的OFTP协议。"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat" value="虚拟文件格式："/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_unstructured" value="非结构化"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_text" value="文本"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_fixed" value="固定"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_variable" value="变动"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity" value="虚拟文件安全："/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_signOutgoing" value="签名发出的数据"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_encryptOutgoing" value="加密发出的数据"/>
<rsb:set attr="lang.oftpPartner_compression" value="压缩："/>
<rsb:set attr="lang.oftpPartner_compression_compressOutgoing" value="压缩发出的数据"/>
<rsb:set attr="lang.oftpPartner_chkUseSSL" value="使用安全连接（SSL）访问伙伴远程主机"/>
<rsb:set attr="lang.oftpPartner_secureAuthInfo" value="此安全验证包括加密解密发送至服务器和从服务器接收到文件，并验证是否成功。 安全验证可能运行在文本或安全连接（SSL）模式，这需要指定加密和签名的证书。"/>
<rsb:set attr="lang.oftpPartner_chkSecureAuthentication" value="Odette安全验证"/>
<rsb:set attr="lang.oftpPartner_signedReceiptInfo" value="当您发送文件给交易伙伴，如果文件需要服务器签名回执，请开启此功能。 当接收到此回执，应用程序会处理并验证。"/>
<rsb:set attr="lang.oftpPartner_chkSignedReceipt" value="需要签名回执"/>
<rsb:set attr="lang.oftpPartnerTitle_tradingPartnerCertificates" value="交易伙伴证书(PEM/CER 格式)"/>
<rsb:set attr="lang.oftpPartner_tradingPartnerCertificatesInfo" value="需要证书来验证签名，加密发出的信息。 您的交易伙伴可能针对不同的目的选择不同的证书，也可以使用同一份证书。 这些证书只能用于2.0版本的OFTP协议。"/>
<rsb:set attr="lang.oftpPartner_encryptionCertificate" value="加密证书："/>
<rsb:set attr="lang.oftpPartner_verificationCertificate" value="验证证书："/>
<rsb:set attr="lang.oftpPartner_tradingSSLInfo" value="可选的字段，只有您的交易伙伴使用SSL类型的URL时才需要输入。&nbsp;请使用“*”来接受所有来自服务器的证书。如果不能正确的使用，您可能会留下一个安全漏洞，请谨慎使用。"/>
<rsb:set attr="lang.oftpPartner_SSLServerCertificate" value="SSL服务器证书："/>

<!-- view/partner.rst -->
<rsb:set attr="lang.partner_createNewPartner" value="创建新{0}伙伴"/>
<rsb:set attr="lang.partner_advanced" value="高级"/>
<rsb:set attr="lang.partner_settings" value="基础"/>
<rsb:set attr="lang.partner_outgoing" value="传出"/>
<rsb:set attr="lang.partner_incoming" value="传入"/>
<rsb:set attr="lang.partner_noSelected" value="没有选定的伙伴，请从左侧伙伴列表中选定一个伙伴。"/>
<rsb:set attr="lang.partner_noPartner" value="欢迎使用AS2连接器， 请从左边栏中选择添加伙伴来添加您的伙伴。"/>

<!-- view/saveChanges.rst -->
<rsb:set attr="lang.saveChanges_showTips" value="显示提示"/>
<rsb:set attr="lang.saveChanges_hideTips" value="隐藏提示"/>
<rsb:set attr="lang.saveChanges_saveChangesPaid" value="保存*"/>
<rsb:set attr="lang.saveChanges_saveChanges" value="保存"/>

<!-- view/self.rst -->
<rsb:set attr="lang.self" value="我的配置"/>
<rsb:set attr="lang.self_successSaved" value="个人配置保存成功。"/>
<rsb:set attr="lang.selfTitle_localSetup" value="本地设置"/>
<rsb:set attr="lang.self_organizationName" value="组织名称："/>
<rsb:set attr="lang.self_AS2Identifier" value="AS2标识"/>
<rsb:set attr="lang.self_emailAddress" value="电子邮箱："/>
<rsb:set attr="lang.self_required" value="*需要接收MDN回执"/>
<rsb:set attr="lang.selfTitle_personalCertificate" value="个人证书"/>
<rsb:set attr="lang.self_personalCertificateInfo" value="需要一个包含私钥的证书来签名发出的消息和解密传入的消息。此应用程序接受.pfx或者.p12文件格式的PKCS#12证书。"/>
<rsb:set attr="lang.self_privateCertificate" value="私钥证书："/>
<rsb:set attr="lang.self_createCertificate" value="创建证书"/>
<rsb:set attr="lang.self_certificatePassword" value="证书密码："/>
<rsb:set attr="lang.self_publicKeyInfo" value="配置一个和您的私钥匹配的公钥证书，您的伙伴会使用这个证书来验证您的签名，以及加密发送给您的消息。如果您允许伙伴查看Public.rst页面，这个证书文件就可以发布给您的伙伴进行下载。"/>
<rsb:set attr="lang.self_publicKey" value="公钥证书："/>
<rsb:set attr="lang.selfTitle_asynchronousReceipts" value="异步回执"/>
<rsb:set attr="lang.self_asynchronousReceiptsInfo" value="如果您希望异步接收回执，您必需提供可以接收POST操作的URL。默认页面<b>ReceiveMDN.rsb</b> 被配置用来接收异步的MDN回执。"/>
<rsb:set attr="lang.self_asynchronousMDNURL" value="异步MDN的URL："/>
<rsb:set attr="lang.selfTitle_applicationSettings" value="应用程序设置"/>
<rsb:set attr="lang.self_applicationSettingsInfo" value="传入的文件通过“ReceiveFile.rsb”进行接收。您需要将以下的URL提供给您的交易伙伴："/>
<rsb:set attr="lang.self_receivingURL" value="接收URL："/>
<rsb:set attr="lang.self_receivingURL_SSL" value="接收URL（SSL安全连接）："/>
<rsb:set attr="lang.self_SSL_unavailable" value="SSL安全连接功能在免费版中不可用。"/>
<rsb:set attr="lang.selfTitle_publicProfileSettings" value="公开配置设置"/>
<rsb:set attr="lang.self_publicProfileSettingsInfo" value="AS2连接器包含一个页面使您的交易伙伴可以在他们的AS2解决方案中查看您的AS2配置。如果您想发布给交易伙伴这个页面，请使用您的服务器名称替换掉下面URL的相应部分，并提供给他们。"/>
<rsb:set attr="lang.self_publicUrl" value="公开配置页面URL："/>
<rsb:set attr="lang.self_localUrl" value="本地URL："/>
<rsb:set attr="lang.self_chkPublishProfile" value="允许我的伙伴通过Public.rst查看我公开的配置信息。"/>
<rsb:set attr="lang.selfTitle_allowedUsers" value="允许的用户"/>
<rsb:set attr="lang.self_allowedUsersInfo" value="以下用户列表包含拥有访问权限的用户。"/>
<rsb:set attr="lang.self_user" value="用户名"/>
<rsb:set attr="lang.self_accessLevel" value="访问权限"/>
<rsb:set attr="lang.self_nUser" value="普通用户"/>
<rsb:set attr="lang.self_administrator" value="管理员"/>
<rsb:set attr="lang.self_addUser" value="授权用户"/>
<rsb:set attr="lang.selfTitle_reliability" value="可靠性"/>
<rsb:set attr="lang.self_reliabilityInfo" value="开启此功能后，每次尝试发送文件时将使用同一个信息ID。 这样伙伴只根据这个ID来处理信息，同一个文件将不会被处理两次。 注意：这项功能只适用于自动控制功能处于开启状态。"/>
<rsb:set attr="lang.self_chkIsReliability" value="AS2可靠性"/>
<rsb:set attr="lang.selfTitle_performance" value="性能"/>
<rsb:set attr="lang.self_maxFilesInfo" value="此项设置允许您增加每次给每个伙伴发送的文件数(每60秒)。 此项设置可能降低您应用程序整体性能，请谨慎使用。"/>
<rsb:set attr="lang.self_maxFiles" value="每个伙伴最大发送文件数："/>
<rsb:set attr="lang.self_maxThreadsInfo" value="此项设置允许您增加同时给一个伙伴发送的文件数。 此项设置可能降低您应用程序整体性能，请谨慎使用。"/>
<rsb:set attr="lang.self_maxThreads" value="每个伙伴最大线程数："/>
<rsb:set attr="lang.selfTitle_advancedNotifications" value="高级通知"/>
<rsb:set attr="lang.self_advancedNotificationsInfo" value="应用程序会使用这些设置向管理员发送通知。"/>
<rsb:set attr="lang.self_SMTPServer" value="SMTP服务器："/>
<rsb:set attr="lang.self_chkNotifyCertExpiry" value="当证书将要在30天后过期时用电子邮件通知我"/>
<rsb:set attr="lang.self_chkEventLog" value="向应用程序事件日志写出错误信息"/>
<rsb:set attr="lang.selfTitle_customHeaders" value="自定义头"/>
<rsb:set attr="lang.self_customHeadersInfo1" value="这个节可以被用来设置自定义头。但是AS2本身并不需要（例：主题、发送人、等等）。"/>
<rsb:set attr="lang.self_customHeadersInfo2" value="下面这些宏可以在头中使用："/>
<rsb:set attr="lang.self_customHeaders_name" value="名称"/>
<rsb:set attr="lang.self_customHeaders_value" value="值"/>
<rsb:set attr="lang.self_addHeader" value="添加自定义头"/>
<rsb:set attr="lang.selfTitle_firewallSettings" value="代理设置"/>
<rsb:set attr="lang.self_firewallType" value="代理类型："/>
<rsb:set attr="lang.self_firewallHost" value="代理主机："/>
<rsb:set attr="lang.self_firewallPort" value="代理端口："/>
<rsb:set attr="lang.self_firewallUser" value="代理用户名："/>
<rsb:set attr="lang.self_firewallPassword" value="代理密码："/>
<rsb:set attr="lang.self_proxyAuthScheme" value="代理验证模式："/>
<rsb:set attr="lang.selfTitle_otherSettings" value="[lang.as2PartnerTitle_otherSettings]"/>
<rsb:set attr="lang.self_otherSettings" value="[lang.as2Partner_otherSettingsInfo]"/>
<rsb:set attr="lang.self_notSpecified" value="[lang.as2Partner_notSpecified]"/>
<rsb:set attr="lang.self_not_available_free" value="带有*的功能为付费功能。请访问<a href='http://www.rssbus.com/order/' target='_blank'>此处</a> 来获取其他授权。"/>
<rsb:set attr="lang.self_not_available_popup" value="带有*的功能为付费功能。您愿意访问RSSBus官网来了解相关付费选项？"/>
<rsb:set attr="lang.self_autoarchive" value="Auto-Archive Options"/>
<rsb:set attr="lang.self_autoarchive_desc" value="Reduce incoming and outgoing logs by moving old items to an archive folder. The application will archive logs older than the specified number of days."/>
<rsb:set attr="lang.self_autoarchive_log" value="Archive Logs (Days):"/>

<!-- view/sftpPartner.rst -->
<rsb:set attr="lang.sftpPartner_remoteHost" value="远程主机："/>
<rsb:set attr="lang.sftpPartner_port" value="端口："/>
<rsb:set attr="lang.sftpPartnerTitle_clientAuthentication" value="客户端验证"/>
<rsb:set attr="lang.sftpPartner_authenticationMode" value="验证模式："/>
<rsb:set attr="lang.sftpPartner_authenticationMode_password" value="密码"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_publicKey" value="公钥"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_multipleFactor" value="多重因子"/>
<rsb:set attr="lang.sftpPartner_user" value="用户名："/>
<rsb:set attr="lang.sftpPartner_password" value="密码："/>
<rsb:set attr="lang.sftpPartner_SSHPublicKeyInfo" value="如果使用使用公钥或者多重因子进行身份验证，您可以在这里设置私钥。"/>
<rsb:set attr="lang.sftpPartner_privateCertificate" value="私钥证书："/>
<rsb:set attr="lang.sftpPartner_certificatePassword" value="证书密码："/>
<rsb:set attr="lang.sftpPartnerTitle_serverAuthentication" value="服务器验证"/>
<rsb:set attr="lang.sftpPartner_serverAuthenticationInfo" value="这个字段用来设置连接的SFTP服务器的公钥。您可以设置整个公钥，公钥的指纹（Ex: 27:23:82:5c:07:64:6c:bd:b6:d1:ae:0e:64:09:7c:f4）或者“*”接受所有的服务器证书。&nbsp;如果不能正确的使用，您可能会留下一个安全漏洞，请谨慎使用。"/>
<rsb:set attr="lang.sftpPartner_serverPublicKey" value="服务器公钥证书："/>

<!-- view/listReceivedLogsTable.rst & listSentLogsTable.rst -->
<rsb:set attr="lang.listLogsTable_noFilesDownloaded" value="没有文件下载"/>
<rsb:set attr="lang.listLogsTable_All" value="所有"/>
<rsb:set attr="lang.listLogsTable_Sent" value="已发送"/>
<rsb:set attr="lang.listLogsTable_Unsent" value="未发送"/>
<rsb:set attr="lang.listLogsTable_SendError" value="发送失败"/>
<rsb:set attr="lang.listLogsTable_PendingMDN" value="等待MDN"/>
<rsb:set attr="lang.listLogsTable_MDNError" value="MDN错误"/>
<rsb:set attr="lang.listLogsTable_Received" value="已接收"/>
<rsb:set attr="lang.listLogsTable_ReceivedError" value="接收失败"/>

<!-- view/listReceivedLogsSubTable.rst & listSentLogsSubTable.rst -->
<rsb:set attr="lang.listLogsSubTable_Log" value="日志"/>
<rsb:set attr="lang.listLogsSubTable_Request" value="请求"/>
<rsb:set attr="lang.listLogsSubTable_MDN" value="MDN"/>
<rsb:set attr="lang.listLogsSubTable_Error" value="错误"/>
<rsb:set attr="lang.listLogsSubTable_Etag" value="Etag"/>
<rsb:set attr="lang.listLogsSubTable_Attachment" value="Attachment"/>
<rsb:set attr="lang.listLogsSubTable_AsyncLog" value="异步日志"/>
<rsb:set attr="lang.listLogsSubTable_AsyncMDN" value="异步MDN"/>
<rsb:set attr="lang.listLogsSubTable_AsyncError" value="异步错误"/>

<!-- pub/public.rst -->
<rsb:set attr="lang.publicTitle_partnerProfile" value="伙伴配置"/>
<rsb:set attr="lang.public_tradingPartnerInfo" value="交易伙伴信息"/>
<rsb:set attr="lang.public_as2Identifier" value="AS2标识："/>
<rsb:set attr="lang.public_partnerURL" value="伙伴URL："/>
<rsb:set attr="lang.public_asynchronousMDNURL" value="异步MDN的URL："/>
<rsb:set attr="lang.public_encryptionAlgorithm" value="加密算法："/>
<rsb:set attr="lang.public_signingAlgorithm" value="签名算法："/>
<rsb:set attr="lang.public_publicCertificate" value="公钥证书："/>
<rsb:set attr="lang.public_download" value="下载证书"/>
<rsb:set attr="lang.public_unpublished" value="未公开"/>
<rsb:set attr="lang.public_unpublishedInfo" value="此伙伴配置未公开。"/>
<rsb:set attr="lang.publicTitle_as2connector" value="RSSBus AS2 连接器 SE&trade;"/>
<rsb:set attr="lang.public_as2connectorInfo1" value="RSSBus AS2 连接器 SE&trade;是一个通过Drummond&trade;认证的使用领先的AS2协议进行安全互联网上电子数据交换(EDI)的应用程序。"/>
<rsb:set attr="lang.public_as2connectorInfo2" value="RSSBus AS2 连接器 SE&trade;在和1位交易伙伴使用时完全免费， 并且没有任何额外的费用而且无需每年的维护。 "/>
<rsb:set attr="lang.public_as2connectorInfo3" value="更多信息和免费版的AS2连接器，请访问我们网站"/>

<!-- as2SendFile.rsb & as2RestartFile.rsb & ftpSendFile.rsb & sftpSendFile.rsb & oftpSendFile.rsb -->
<rsb:set attr="lang.ex_category1" value="其他"/>
<rsb:set attr="lang.ex_category2" value="连接"/>
<rsb:set attr="lang.ex_category3" value="配置"/>
<rsb:set attr="lang.ex_generalmsg1" value="HTTP错误"/>
<rsb:set attr="lang.ex_generalmsg2" value="不能验证此回执签名"/>
<rsb:set attr="lang.ex_generalmsg3" value="MDN错误"/>
<rsb:set attr="lang.ex_generalmsg4" value="MDN错误：不可预知的处理错误"/>
<rsb:set attr="lang.ex_generalmsg5" value="MDN错误：不足的信息安全"/>
<rsb:set attr="lang.ex_generalmsg6" value="MDN发送错误"/>
<rsb:set attr="lang.ex_generalmsg7" value="未知的AS2标识"/>
<rsb:set attr="lang.ex_specificmsg1" value="404未找到"/>
<rsb:set attr="lang.ex_specificmsg2" value="解密失败"/>
<rsb:set attr="lang.ex_specificmsg3" value="签名验证失败：不能验证此签名者标识"/>
<rsb:set attr="lang.ex_specificmsg4" value="签名验证失败：不能验证此内容完整性"/>
<rsb:set attr="lang.ex_tip1" value="提示信息未找到，请联系support@rssbus.com获得更多信息。"/>
<rsb:set attr="lang.ex_tip151" value="您访问的URL未找到，请向您的交易伙伴确认后尝试。"/>
<rsb:set attr="lang.ex_tip531" value="这个错误可能是当您的交易伙伴请求一个签名回执，但收到的回复不是一个签名的MDN。 大多数情况，如果返回的不在是一个MDN回执，可能是一个服务器错误。 请检查MDN日志，查看本次传输的服务器返回，有可能发现其他信息。"/>
<rsb:set attr="lang.ex_tip532" value="无法验证MDN回执里的签名。 请确认您配置的交易伙伴签名公钥是否正确。"/>
<rsb:set attr="lang.ex_tip611" value="您交易伙伴的应用程序遇到这个错误。 您的交易伙伴不能解密被他们公钥证书加密的信息。 请确认您配置的交易伙伴公钥证书是否正确。"/>
<rsb:set attr="lang.ex_tip612" value="这个错误是您的交易伙伴的应用程序遇到的。 您的交易伙伴不能从传输签名中验证您的标识。 请确认他们正在使用您的正确公钥，并与设置页面配置的.pfx文件对应。"/>
<rsb:set attr="lang.ex_tip613" value="您交易伙伴的应用程序遇到这个错误。 您的交易伙伴不能验证您发送的签名。 请确认他们正在使用您的正确公钥，并与设置页面配置的.pfx文件对应。"/>
<rsb:set attr="lang.ex_tip614" value="您交易伙伴遇到了一个不可预知的处理错误。 这个错误将包含可读的MDN内容和可能导致错误的因素。"/>
<rsb:set attr="lang.ex_tip615" value="您的交易伙伴没有得到必须的安全参数而拒绝了这个消息。 有可能是需要签名的信息没有签名，或许有加密的信息没有加密，或两者都有可能。"/>
<rsb:set attr="lang.ex_tip712" value="您交易伙伴发送给您的信息不能解密。 请确认他们正在使用您的正确公钥，并与设置页面配置的.pfx文件对应。"/>
<rsb:set attr="lang.ex_tip731" value="无法验证您交易伙伴发送到签名者标识。 请确定您的交易伙伴已经配置了正确的签名公钥。"/>
<rsb:set attr="lang.ex_tip732" value="无法验证你交易伙伴的签名。 请确定您的交易伙伴已经配置了正确的签名公钥。"/>
<rsb:set attr="lang.ex_tip762" value="无法返回一个异步MDN回执给您交易伙伴指定的URL。 这可能是由于发送方指定了一个错误的URL，或者有防火墙或代理问题阻止了发送回执，或者您交易伙伴的服务器临时关机。 其他原因也可能导致这个错误。"/>
<rsb:set attr="lang.ex_tip999" value="您交易伙伴发送的AS2标识跟您自己的标识不匹配。 请检查您交易伙伴给您配置的AS2标识。 注意：AS2标识是大小写敏感的。"/>
<rsb:set attr="lang.ex_tip10060" value="这个错误表示网络连接无法连接到您交易伙伴的URL。 可能由于错误的URL，或者有防火墙或您交易伙伴禁止了访问此端口。 请检查您交易伙伴的URL是否可以通过您的IP地址来访问，向您的网络管理员确认出站连接可以访问交易伙伴的地址。"/>
<rsb:set attr="lang.ex_tip32000" value="[lang.ex_tip10060]"/>

<!-- priv/ftpReceiveFile.rsb & sftpReceiveFile.rsb & oftpReceiveFile.rsb -->
<rsb:set attr="lang.ftpReceive_successful" value="FTP传输成功。"/>


