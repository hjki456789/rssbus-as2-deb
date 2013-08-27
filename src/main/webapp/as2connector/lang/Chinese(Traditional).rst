<rsb:include file="~/shared/lang/Chinese(Traditional).rst"/>

<!-- AS2 Chinese (Traditional) -->
<rsb:set attr="site.language" value="Chinese (Traditional)"/>

<!-- about.rst -->
<rsb:set attr="lang.aboutTitle_about" value="關於 RSSBus AS2 Connector 連接器"/>
<rsb:set attr="lang.aboutTitle_thankYou" value="謝謝"/>
<rsb:set attr="lang.about_thankYouContent1" value="感謝您選取了AS2連接器。 AS2連接器是使用領先的AS2協議進行安全乙太網路上電子資料交換(EDI)的最佳解決專案。"/>
<rsb:set attr="lang.about_thankYouContent2" value="我們瞭解到您需要一個電子資料交換(EDI)的解決專案。 請選取RSSBus作為您業務的關鍵部份並讓我們來提供您更多的產品改進, 技術支援和創新產品。 我們將盡力滿足您的期望！"/>
<rsb:set attr="lang.about_thankYouContent3" value="請拜訪我們的網站來獲取AS2連接器及其更新"/>
<rsb:set attr="lang.aboutTitle_drummondCertification" value="Drummond&trade; 認證"/>
<rsb:set attr="lang.about_drummondCertificationContent" value="本產品已經通過了嚴格詳盡的測試並獲得了Drummond&trade; 認證， 來確保您能夠簡單的設定您的交易夥伴。"/>
<rsb:set attr="lang.aboutTitle_singleTradingPartner" value="1位交易夥伴 - 免費"/>
<rsb:set attr="lang.about_singleTradingPartnerContent" value="AS2連接器在和1位交易夥伴使用時完全免費， 並且沒有任何額外的費用而且無需每年的維護。 當您需要和多位交易夥伴使用時，您需要購買相關許可。"/>
<rsb:set attr="lang.aboutTitle_licensingInformation" value="許可訊息"/>
<rsb:set attr="lang.about_licensingInformationContent1" value="通過點擊下面的連結「升級您的使用許可」來購買多夥伴的使用許可。 我們提供了多種不同級別的許可包括無數量限制許可。"/>
<rsb:set attr="lang.about_licensingInformationContent2" value="目前本機使用許可："/>
<rsb:set attr="lang.about_maximumPartners" value="最多夥伴數："/>
<rsb:set attr="lang.about_upgradeLicense" value="升級您的使用許可"/>
<rsb:set attr="lang.about_installLicense" value="安裝許可"/>
<rsb:set attr="lang.about_serialNumber" value="序號："/>
<rsb:set attr="lang.about_licensingInformationContent3" value="線上購買支援多位夥伴的使用許可："/>
<rsb:set attr="lang.about_version" value="版本"/>

<!-- activate.rst -->
<rsb:set attr="lang.activate_demoname" value="1位夥伴免費許可"/>
<rsb:set attr="lang.activate_demodesc" value="免費許可可以使用本產品所有基本功能，進階功能使用需要多夥伴許可。"/>
<rsb:set attr="lang.activate_demobtn" value="使用免費許可"/>
<rsb:set attr="lang.activate_fullname" value="多夥伴許可"/>
<rsb:set attr="lang.activate_fulldesc" value="多夥伴許可可以使用本產品所有功能。 請在下面輸入方塊輸入您的產品序號並安裝啟用。"/>
<rsb:set attr="lang.activateTitle_licenseRequired" value="許可"/>

<!-- footer.rst -->
<rsb:set attr="lang.popup_addCertificate" value="匯入新證書"/>
<rsb:set attr="lang.popup_addCertificateContent1" value="請選取一個證書檔案，然後點擊「匯入證書」來匯入你指定的證書。 請注意，如果伺服器上已經存在此證書檔案，一旦您匯入了新的證書檔案，舊的將會被覆寫。"/>
<rsb:set attr="lang.popup_addCertificateContent2" value="支援的證書檔案格式有.cer，.pfx，.pem。"/>
<rsb:set attr="lang.popup_addCertificateFile" value="證書檔案："/>
<rsb:set attr="lang.popup_addCertificateFileBtn" value="匯入證書"/>
<rsb:set attr="lang.popup_createCertificate" value="建立新證書"/>
<rsb:set attr="lang.popup_createCertificateContent1" value="請為此證書指定一個通用名稱或組織。 剩下的欄位是必需的。"/>
<rsb:set attr="lang.popup_createCertificateContent2" value="下面欄位為可選，為了提供更多證書持有者的訊息。"/>
<rsb:set attr="lang.popup_createCertificateCommonname" value="通用名稱："/>
<rsb:set attr="lang.popup_createCertificateOrganization" value="組織："/>
<rsb:set attr="lang.popup_createCertificateFileName" value="檔案名："/>
<rsb:set attr="lang.popup_createCertificateSerialNumber" value="序號："/>
<rsb:set attr="lang.popup_createCertificateSerialPassword" value="密碼："/>
<rsb:set attr="lang.popup_createCertificateExpiration" value="有效期限（年）："/>
<rsb:set attr="lang.popup_createCertificateKeySize" value="鑰匙長度："/>
<rsb:set attr="lang.popup_createCertificateOrganizationalUnit" value="組織單位："/>
<rsb:set attr="lang.popup_createCertificateLocality" value="位置（城市）："/>
<rsb:set attr="lang.popup_createCertificateState" value="州\省："/>
<rsb:set attr="lang.popup_createCertificateCountry" value="國家："/>
<rsb:set attr="lang.popup_createCertificateEmail" value="電子郵件："/>
<rsb:set attr="lang.popup_createCertificateBtn" value="建立證書"/>
<rsb:set attr="lang.popup_cspTip" value="不能建立證書"/>
<rsb:set attr="lang.popup_cspTipContent" value="
  <p>系統不能獲取CSP. 如果您的AS2連接器正執行在IIS裡，請按下列步驟解決此問題。</p>
  <p>(1) 開啟IIS管理，為IIS新增一個新的application pool。</p>
  <p>(2) 變更新增加的application pool的identity為NetworkService。</p>
  <p>(3) 設定AS2連接器站台去使用新增加的application pool。</p>
  <p>(4) 重啟IIS，然後再次建立證書。</p>
"/>
<rsb:set attr="lang.popup_cspTipBtn" value="確定"/>
<rsb:set attr="lang.popup_actionStatus" value="動作狀態"/>
<rsb:set attr="lang.popup_actionStatusMsg" value="請不要關閉此視窗並執行其他動作。"/>

<!-- header.rst -->
<rsb:set attr="lang.menu_partners" value="夥伴"/>
<rsb:set attr="lang.menu_profile" value="設定"/>
<rsb:set attr="lang.menu_help" value="說明"/>
<rsb:set attr="lang.menu_about" value="關於"/>
<rsb:set attr="lang.menu_services" value="服務"/>
<rsb:set attr="lang.js_checkUnsave" value="有設定變更未儲存。\\r\\n確定要離開此頁面而不儲存設定？"/>

<!-- help.rst -->
<rsb:set attr="lang.help" value="說明"/>
<rsb:set attr="lang.helpOnline" value="線上資源"/>
<rsb:set attr="lang.helpOnlineContent" value="當您開始設定AS2連接器並與交易夥伴建立通信，可以參考以下說明資源。"/>
<rsb:set attr="lang.helpOnlineStart" value="從這裡開始"/>
<rsb:set attr="lang.helpOnlineFAQ" value="常見問題"/>
<rsb:set attr="lang.helpTechnicalSupport" value="技術支援"/>
<rsb:set attr="lang.helpTechnicalSupportContent" value="請提交其他技術問題給我們的<a href='http://rssbus.com/support/submit.aspx'>技術支援小組</a>。 同時請提供關於您問題的詳盡描述以及使用本產品得到的結果和期望的結果，這將有利於我們更為快速準確的解決您的問題。"/>

<!-- partners.rst -->
<rsb:set attr="lang.partners" value="夥伴清單"/>
<rsb:set attr="lang.checkBeforeSave" value="You are changing the AS2 Identifier of this partner. This will delete the old partner stored as \[{0}\] and create a new partner named \[{1}\]. Any logs and incoming/outgoing files for \[{0}\] will also be deleted. Please backup any required files before changing this partner. \\r\\n\\r\\nDo you wish to proceed?"/>

<!-- Common -->
<rsb:set attr="lang.required" value="* 必填"/>
<rsb:set attr="lang.certificateSubject" value="證書主題："/>
<rsb:set attr="lang.importCertificate" value="匯入證書"/>
<rsb:set attr="lang.certificateExpires" value="此證書將在{0}天後過期。"/>
<rsb:set attr="lang.partner_successSaved" value="夥伴設定儲存成功。"/>
<rsb:set attr="lang.partnerTitle_addNew" value="新交易夥伴"/>
<rsb:set attr="lang.partnerTitle_tradingPartner" value="交易夥伴訊息"/>
<rsb:set attr="lang.partner_organizationName" value="組織名稱："/>
<rsb:set attr="lang.partner_failure" value="失敗："/>
<rsb:set attr="lang.partner_category" value="類別"/>
<rsb:set attr="lang.partner_generalError" value="一般訊息"/>
<rsb:set attr="lang.partner_specificError" value="細節錯誤"/>
<rsb:set attr="lang.partner_tip" value="提示"/>

<!-- view/as2Partner.rst -->
<rsb:set attr="lang.as2Partner_as2Identifier" value="AS2標識："/>
<rsb:set attr="lang.as2Partner_partnerURL" value="夥伴 URL："/>
<rsb:set attr="lang.as2PartnerTitle_connection" value="連接訊息"/>
<rsb:set attr="lang.as2Partner_outgoingMsgSecurity" value="傳出訊息安全："/>
<rsb:set attr="lang.as2Partner_signOutgoingData" value="簽名發出的資料"/>
<rsb:set attr="lang.as2Partner_encryptOutgoingData" value="加密發出的資料"/>
<rsb:set attr="lang.as2Partner_IncomingMsgSecurity" value="傳入訊息安全："/>
<rsb:set attr="lang.as2Partner_requireSignature" value="需要簽名"/>
<rsb:set attr="lang.as2Partner_requireEncryption" value="需要加密"/>
<rsb:set attr="lang.as2Partner_compression" value="壓縮："/>
<rsb:set attr="lang.as2Partner_compressOutgoingData" value="壓縮發出的資料"/>
<rsb:set attr="lang.as2Partner_connectionTimeout" value="連接逾時（秒）："/>
<rsb:set attr="lang.as2PartnerTitle_mdn" value="MDN回執"/>
<rsb:set attr="lang.as2Partner_requestMDNReceipt" value="需要MDN回執"/>
<rsb:set attr="lang.as2Partner_security" value="安全："/>
<rsb:set attr="lang.as2Partner_signed" value="已簽名"/>
<rsb:set attr="lang.as2Partner_unsigned" value="未簽名"/>
<rsb:set attr="lang.as2Partner_delivery" value="投遞："/>
<rsb:set attr="lang.as2Partner_synchronous" value="同步"/>
<rsb:set attr="lang.as2Partner_asynchronous" value="異步"/>
<rsb:set attr="lang.as2PartnerTitle_tradingCertificates" value="交易夥伴證書 (PEM/CER 格式)"/>
<rsb:set attr="lang.as2Partner_encryptionCertificatesInfo" value="需要證書來驗證簽名，加密發出的訊息和建立安全連接（SSL）。您的交易夥伴可能針對不同的目的選取不同的證書，也可以使用同一份證書。"/>
<rsb:set attr="lang.as2Partner_encryptionCertificate" value="加密證書："/>
<rsb:set attr="lang.as2Partner_verificationCertificateInfo" value="一般交易夥伴將使用同樣的證書來加密和簽名資料，所以大多數情況可以忽略此項。 如果沒有指定此證書，本應用程式將使用加密證書來驗證簽名。"/>
<rsb:set attr="lang.as2Partner_verificationCertificate" value="驗證證書："/>
<rsb:set attr="lang.as2Partner_SSLServerCertificateInfo" value="此項為可選，只有在您的交易夥伴使用一個安全連接（SSL）的URL才需要指定此證書。&nbsp;請使用「*」來接受所有來自伺服器的證書。如果不能正確的使用，您可能會留下一個安全漏洞，請謹慎使用。"/>
<rsb:set attr="lang.as2Partner_SSLServerCertificate" value="SSL伺服器證書："/>
<rsb:set attr="lang.as2Partner_publicProfile" value="公開設定"/>
<rsb:set attr="lang.as2Partner_publicProfileEnabled" value="您的公開設定設定已經公開。"/>
<rsb:set attr="lang.as2Partner_publicProfileDisabled" value="
<b>注意</b>&nbsp;<i>您的公開設定設定還未公開。 為了讓您的交易夥伴能夠獲得相關連接參數，請到<a href='profile.rst#pubprofile'>設定</a>頁面允許公開設定設定。</i>
"/>
<rsb:set attr="lang.as2PartnerTitle_VLM" value="超大檔案支援 (VLM)"/>
<rsb:set attr="lang.as2Partner_streamingInfo" value="開啟此功能後，本應用程式將使用分區塊傳輸編碼（Chunked transfer encoding）來傳送您的檔案，這將支援傳送超大檔案到您的交易夥伴。 請謹慎使用此功能，可能您的交易夥伴不支援接收此類別檔案。"/>
<rsb:set attr="lang.as2Partner_streaming" value="Streaming - (分區塊傳輸編碼 Chunked transfer encoding)"/>
<rsb:set attr="lang.as2Partner_logStreamingRequests" value="Log streaming requests"/>
<rsb:set attr="lang.as2Partner_logStreamingRequestsInfo" value="When left unchecked, the payload and request logs will not be written when sending and receiving files. This will conserve disk space for sending and receiving large files. Note that this is only valid when streaming is turned on."/>
<rsb:set attr="lang.as2Partner_as2RestartInfo" value="開啟此功能，將允許應用程式在傳輸中斷後重新傳送檔案。 這在傳輸大檔案時非常有用。 注意：有些夥伴可能不支援此功能。"/>
<rsb:set attr="lang.as2Partner_as2Restart" value="AS2 重新傳送"/>
<rsb:set attr="lang.as2PartnerTitle_FIPSCompliance" value="FIPS 準則"/>
<rsb:set attr="lang.as2Partner_FIPSComplianceInfo" value="開啟此功能後，將限制加密和簽名算法，只允許符合FIPS 140-2 的算法。 注意：大部份標準算法都已經符合FIPS準則。"/>
<rsb:set attr="lang.as2Partner_ForceFIPScompliant" value="強制使用符合FIPS準則的算法"/>
<rsb:set attr="lang.as2PartnerTitle_alternateLocalProfile" value="特殊本機設定"/>
<rsb:set attr="lang.as2Partner_alternateLocalProfileInfo" value="您可能需要給此交易夥伴使用另一個本機AS2標識以及私鑰證書。 這將允許您使用多個AS2標識和特別的私鑰證書來跟同一個夥伴通信。 設定這些將會覆寫您在設定頁面設定的AS2標識及私鑰證書。"/>
<rsb:set attr="lang.as2Partner_localAS2Identifier" value="本機AS2標識："/>
<rsb:set attr="lang.as2Partner_privateCertificate" value="私鑰證書："/>
<rsb:set attr="lang.as2Partner_certificatePassword" value="證書密碼："/>
<rsb:set attr="lang.as2PartnerTitle_SSLClientAuthentication" value="SSL用戶端驗證"/>
<rsb:set attr="lang.as2Partner_SSLClientAuthenticationInfo" value="此項設定為可選，只用於當您的交易夥伴需要SSL用戶端驗證時。"/>
<rsb:set attr="lang.as2PartnerTitle_httpAuthentication" value="HTTP驗證"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationInfo" value="此項設定為可選，只用於當您的交易夥伴需要HTTP驗證時。"/>
<rsb:set attr="lang.as2Partner_useHTTPAuthentication" value="使用HTTP驗證"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationType" value="HTTP驗證類型："/>
<rsb:set attr="lang.as2Partner_httpAuthenticationBasic" value="基礎"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationDigest" value="概觀"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationUser" value="使用者："/>
<rsb:set attr="lang.as2Partner_httpAuthenticationPassword" value="密碼："/>
<rsb:set attr="lang.as2PartnerTitle_otherSettings" value="其他"/>
<rsb:set attr="lang.as2Partner_otherSettingsInfo" value="以下為其他進階設定。"/>
<rsb:set attr="lang.as2Partner_notSpecified" value="未指定"/>

<!-- view/automation.rst -->
<rsb:set attr="lang.automationTitle" value="自動控制設定"/>
<rsb:set attr="lang.automation_info" value="當傳送和接收沒有通過管理主控台初始化時，自動控制設定可以控制應用程式的行為。 當此功能被啟用，本程式將嘗試每分鐘傳送傳出（Outgoing）資料夾中的檔案。"/>
<rsb:set attr="lang.automation_enableAutomation" value="允許自動控制"/>
<rsb:set attr="lang.automation_info2" value="當傳送傳輸失敗時，失敗的檔案會被加上「.failed.?」副檔名。「?」代表傳送嘗試的次數。經過指定的重試間隔後，應用程式會再次嘗試傳送檔案。如果失敗，會增加重試的計數器。如果已經超出了指定的重試次數，應用程式將不再繼續嘗試傳送檔案。"/>
<rsb:set attr="lang.automation_retryInterval" value="重試間隔（分鐘）："/>
<rsb:set attr="lang.automation_retryIntervalInfo" value="如果0值被指定，應用程式會每間隔0-30秒重新嘗試傳送一次檔案。"/>
<rsb:set attr="lang.automation_maximumAttempts" value="最多嘗試："/>
<rsb:set attr="lang.automation_maximumAttemptsInfo" value="如果0值被指定，應用程式會無限次數嘗試傳送檔案。"/>
<rsb:set attr="lang.automation_chkEmailOnFail" value="當自動控制發生錯誤時，向應用程式管理員傳送郵件通知*"/>

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
<rsb:set attr="lang.ftpUpload" value="上傳"/>
<rsb:set attr="lang.ftpUpload_chkUpload" value="上傳Outgoing目錄中的檔案到目前位置。"/>
<rsb:set attr="lang.ftpUpload_remotePath" value="上傳的遠端路徑："/>
<rsb:set attr="lang.ftpDownload" value="下載"/>
<rsb:set attr="lang.ftpDownload_chkDownload" value="從這個位置下載檔案到Incoming目錄"/>
<rsb:set attr="lang.ftpDownload_ftpGetPaid" value="現在下載*"/>
<rsb:set attr="lang.ftpDownload_ftpGet" value="現在下載"/>
<rsb:set attr="lang.ftpDownload_remotePathsInfo" value="設定一個或多個檔案路徑。絕對路徑前使用路徑分隔符號。最後一個路徑分隔符號後的字串作為檔案遮罩（*.*，/docs/*.doc， /imgs/pic*）。"/>
<rsb:set attr="lang.ftpDownload_remotePaths" value="下載的遠端路徑："/>
<rsb:set attr="lang.ftpDownload_chkOverwriteDownload" value="覆寫本機檔案"/>
<rsb:set attr="lang.ftpDownload_chkDelete" value="下載後刪除檔案"/>
<rsb:set attr="lang.ftpDownload_pollInterval" value="輪詢間隔（分）："/>

<!-- view/ftpPartner.rst -->
<rsb:set attr="lang.ftpPartner_remoteHost" value="遠端主機："/>
<rsb:set attr="lang.ftpPartner_port" value="通訊埠："/>
<rsb:set attr="lang.ftpPartner_user" value="使用者："/>
<rsb:set attr="lang.ftpPartner_password" value="密碼："/>
<rsb:set attr="lang.ftpPartnerTitle_SSLSettings" value="SSL設定*"/>
<rsb:set attr="lang.ftpPartner_SSLType" value="SSL類型："/>
<rsb:set attr="lang.ftpPartner_SSLType_none" value="無（明文）"/>
<rsb:set attr="lang.ftpPartner_SSLType_explicit" value="顯式"/>
<rsb:set attr="lang.ftpPartner_SSLType_implicit" value="隱式"/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCertInfo" value="SSL伺服器證書。只有當和FTPS伺服器通信時需要設定。使用「*」來接受所有來自伺服器的證書。如果不能正確的使用，您可能會留下一個安全漏洞，請謹慎使用。"/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCert" value="SSL伺服器證書"/>
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
<rsb:set attr="lang.listPartners_addPartner" value="新增夥伴..."/>
<rsb:set attr="lang.listPartners_deleteConfirm" value="確定您需要刪除&amp;quot;{0}&amp;quot;？\\r\\n\\r\\n警告： 刪除此夥伴同時將會刪除所有跟此夥伴相關聯的資料。 請在刪除此夥伴前備份相關資料。"/>

<!-- Table Common -->
<rsb:set attr="lang.table_refresh" value="更新"/>
<rsb:set attr="lang.table_delete" value="刪除"/>
<rsb:set attr="lang.table_exportExcel" value=" 匯出Excel"/>
<rsb:set attr="lang.table_dateTime" value="日期/時間"/>
<rsb:set attr="lang.table_status" value="狀態"/>
<rsb:set attr="lang.table_fileName" value="檔案名"/>
<rsb:set attr="lang.table_fileSize" value="檔案大小"/>
<rsb:set attr="lang.table_logMessages" value="日誌訊息"/>
<rsb:set attr="lang.table_creationTime" value="建立時間"/>
<rsb:set attr="lang.table_logType" value="日誌類型"/>
<rsb:set attr="lang.table_receiveInfo1" value="Incoming files will be received to the "/>
<rsb:set attr="lang.table_receiveInfo2" value="directory."/>
<rsb:set attr="lang.table_sendInfo1" value="請把需要傳送到檔案放置"/>
<rsb:set attr="lang.table_sendInfo2" value="資料夾中。"/>
<rsb:set attr="lang.table_automationInfo" value="您可以為此夥伴啟用自動控制設定來自動傳送此資料夾中的檔案。"/>
<rsb:set attr="lang.table_createTestFiles" value=" 建立測試檔案"/>
<rsb:set attr="lang.table_send" value="傳送"/>
<rsb:set attr="lang.table_restart" value="重新傳送"/>

<!-- view/oftpPartner.rst -->
<rsb:set attr="lang.oftpPartner_version" value="版本："/>
<rsb:set attr="lang.oftpPartner_clientSSID" value="用戶端SSID："/>
<rsb:set attr="lang.oftpPartner_clientPassword" value="用戶端密碼"/>
<rsb:set attr="lang.oftpPartner_serverSSID" value="伺服器SSID："/>
<rsb:set attr="lang.oftpPartner_serverPassword" value="伺服器密碼："/>
<rsb:set attr="lang.oftpPartnerTitle_connectionInfo" value="連接訊息"/>
<rsb:set attr="lang.oftpPartner_connectionInfo" value="以下連接設定只能用於2.0或更高版本的OFTP協議。"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat" value="虛擬檔案格式："/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_unstructured" value="非結構化"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_text" value="文字"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_fixed" value="固定"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_variable" value="變動"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity" value="虛擬檔案安全："/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_signOutgoing" value="簽名發出的資料"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_encryptOutgoing" value="加密發出的資料"/>
<rsb:set attr="lang.oftpPartner_compression" value="壓縮："/>
<rsb:set attr="lang.oftpPartner_compression_compressOutgoing" value="壓縮發出的資料"/>
<rsb:set attr="lang.oftpPartner_chkUseSSL" value="使用安全連接（SSL）存取夥伴遠端主機"/>
<rsb:set attr="lang.oftpPartner_secureAuthInfo" value="此安全驗證包括加密解密傳送至伺服器和從伺服器接收到檔案，並驗證是否成功。 安全驗證可能執行在文字或安全連接（SSL）模式，這需要指定加密和簽名的證書。"/>
<rsb:set attr="lang.oftpPartner_chkSecureAuthentication" value="Odette安全驗證"/>
<rsb:set attr="lang.oftpPartner_signedReceiptInfo" value="當您傳送檔案給交易夥伴，如果檔案需要伺服器簽名回執，請開啟此功能。 當接收到此回執，應用程式會處理並驗證。"/>
<rsb:set attr="lang.oftpPartner_chkSignedReceipt" value="需要簽名回執"/>
<rsb:set attr="lang.oftpPartnerTitle_tradingPartnerCertificates" value="交易夥伴證書(PEM/CER 格式)"/>
<rsb:set attr="lang.oftpPartner_tradingPartnerCertificatesInfo" value="需要證書來驗證簽名，加密發出的訊息。 您的交易夥伴可能針對不同的目的選取不同的證書，也可以使用同一份證書。 這些證書只能用於2.0版本的OFTP協議。"/>
<rsb:set attr="lang.oftpPartner_encryptionCertificate" value="加密證書："/>
<rsb:set attr="lang.oftpPartner_verificationCertificate" value="驗證證書："/>
<rsb:set attr="lang.oftpPartner_tradingSSLInfo" value="可選的欄位，只有您的交易夥伴使用SSL類型的URL時才需要輸入。&nbsp;請使用「*」來接受所有來自伺服器的證書。如果不能正確的使用，您可能會留下一個安全漏洞，請謹慎使用。"/>
<rsb:set attr="lang.oftpPartner_SSLServerCertificate" value="SSL伺服器證書："/>

<!-- view/partner.rst -->
<rsb:set attr="lang.partner_createNewPartner" value="建立新{0}夥伴"/>
<rsb:set attr="lang.partner_advanced" value="進階"/>
<rsb:set attr="lang.partner_settings" value="基礎"/>
<rsb:set attr="lang.partner_outgoing" value="傳出"/>
<rsb:set attr="lang.partner_incoming" value="傳入"/>
<rsb:set attr="lang.partner_noSelected" value="沒有選擇的夥伴，請從左側夥伴清單中選擇一個夥伴。"/>
<rsb:set attr="lang.partner_noPartner" value="歡迎使用AS2連接器， 請從左資訊看板中選取新增夥伴來新增您的夥伴。"/>

<!-- view/saveChanges.rst -->
<rsb:set attr="lang.saveChanges_showTips" value="顯示提示"/>
<rsb:set attr="lang.saveChanges_hideTips" value="隱藏提示"/>
<rsb:set attr="lang.saveChanges_saveChangesPaid" value="儲存*"/>
<rsb:set attr="lang.saveChanges_saveChanges" value="儲存"/>

<!-- view/self.rst -->
<rsb:set attr="lang.self" value="我的設定"/>
<rsb:set attr="lang.self_successSaved" value="個人設定儲存成功。"/>
<rsb:set attr="lang.selfTitle_localSetup" value="本機設定"/>
<rsb:set attr="lang.self_organizationName" value="組織名稱："/>
<rsb:set attr="lang.self_AS2Identifier" value="AS2標識"/>
<rsb:set attr="lang.self_emailAddress" value="電子郵箱："/>
<rsb:set attr="lang.self_required" value="*需要接收MDN回執"/>
<rsb:set attr="lang.selfTitle_personalCertificate" value="個人證書"/>
<rsb:set attr="lang.self_personalCertificateInfo" value="需要一個包含私鑰的證書來簽名發出的訊息和解密傳入的訊息。此應用程式接受.pfx或者.p12檔案格式的PKCS#12證書。"/>
<rsb:set attr="lang.self_privateCertificate" value="私鑰證書："/>
<rsb:set attr="lang.self_createCertificate" value="建立證書"/>
<rsb:set attr="lang.self_certificatePassword" value="證書密碼："/>
<rsb:set attr="lang.self_publicKeyInfo" value="設定一個和您的私鑰符合的公鑰證書，您的夥伴會使用這個證書來驗證您的簽名，以及加密傳送給您的訊息。如果您允許夥伴檢視Public.rst頁面，這個證書檔案就可以發佈給您的夥伴進行下載。"/>
<rsb:set attr="lang.self_publicKey" value="公鑰證書："/>
<rsb:set attr="lang.selfTitle_asynchronousReceipts" value="異步回執"/>
<rsb:set attr="lang.self_asynchronousReceiptsInfo" value="如果您希望異步接收回執，您必需提供可以接收POST操作的URL。預設頁面<b>ReceiveMDN.rsb</b> 被設定用來接收異步的MDN回執。"/>
<rsb:set attr="lang.self_asynchronousMDNURL" value="異步MDN的URL："/>
<rsb:set attr="lang.selfTitle_applicationSettings" value="應用程式設定"/>
<rsb:set attr="lang.self_applicationSettingsInfo" value="傳入的檔案通過「ReceiveFile.rsb」進行接收。您需要將以下的URL提供給您的交易夥伴："/>
<rsb:set attr="lang.self_receivingURL" value="接收URL："/>
<rsb:set attr="lang.self_receivingURL_SSL" value="接收URL（SSL安全連接）："/>
<rsb:set attr="lang.self_SSL_unavailable" value="SSL安全連接功能在免費版中不可用。"/>
<rsb:set attr="lang.selfTitle_publicProfileSettings" value="公開設定設定"/>
<rsb:set attr="lang.self_publicProfileSettingsInfo" value="AS2連接器包含一個頁面使您的交易夥伴可以在他們的AS2解決專案中檢視您的AS2設定。如果您想發佈給交易夥伴這個頁面，請使用您的伺服器名稱替換掉下面URL的對應部份，並提供給他們。"/>
<rsb:set attr="lang.self_publicUrl" value="公開設定頁面URL："/>
<rsb:set attr="lang.self_localUrl" value="本機URL："/>
<rsb:set attr="lang.self_chkPublishProfile" value="允許我的夥伴通過Public.rst檢視我公開的設定訊息。"/>
<rsb:set attr="lang.selfTitle_allowedUsers" value="允許的使用者"/>
<rsb:set attr="lang.self_allowedUsersInfo" value="以下使用者清單包含擁有存取權限的使用者。"/>
<rsb:set attr="lang.self_user" value="使用者"/>
<rsb:set attr="lang.self_accessLevel" value="存取權限"/>
<rsb:set attr="lang.self_nUser" value="普通使用者"/>
<rsb:set attr="lang.self_administrator" value="管理員"/>
<rsb:set attr="lang.self_addUser" value="授權使用者"/>
<rsb:set attr="lang.selfTitle_reliability" value="可靠性"/>
<rsb:set attr="lang.self_reliabilityInfo" value="開啟此功能後，每次嘗試傳送檔案時將使用同一個訊息ID。 這樣夥伴只根據這個ID來處理訊息，同一個檔案將不會被處理兩次。 注意：這項功能只適用於自動控制功能處於開啟狀態。"/>
<rsb:set attr="lang.self_chkIsReliability" value="AS2可靠性"/>
<rsb:set attr="lang.selfTitle_performance" value="性能"/>
<rsb:set attr="lang.self_maxFilesInfo" value="此項設定允許您增加每次給每個夥伴傳送的檔案數(每60秒)。 此項設定可能降低您應用程式整體性能，請謹慎使用。"/>
<rsb:set attr="lang.self_maxFiles" value="每個夥伴最大傳送檔案數："/>
<rsb:set attr="lang.self_maxThreadsInfo" value="此項設定允許您增加同時給一個夥伴傳送的檔案數。 此項設定可能降低您應用程式整體性能，請謹慎使用。"/>
<rsb:set attr="lang.self_maxThreads" value="每個夥伴最大執行緒數："/>
<rsb:set attr="lang.selfTitle_advancedNotifications" value="進階通知"/>
<rsb:set attr="lang.self_advancedNotificationsInfo" value="應用程式會使用這些設定向管理員傳送通知。"/>
<rsb:set attr="lang.self_SMTPServer" value="SMTP伺服器："/>
<rsb:set attr="lang.self_chkNotifyCertExpiry" value="當證書將要在30天後過期時用電子郵件通知我"/>
<rsb:set attr="lang.self_chkEventLog" value="向應用程式事件日誌寫錯誤誤訊息"/>
<rsb:set attr="lang.selfTitle_customHeaders" value="自訂頭"/>
<rsb:set attr="lang.self_customHeadersInfo1" value="這個節可以被用來設定自訂頭。但是AS2本身並不需要（例：主題、傳送人、等等）。"/>
<rsb:set attr="lang.self_customHeadersInfo2" value="下面這些巨集可以在頭中使用："/>
<rsb:set attr="lang.self_customHeaders_name" value="名稱"/>
<rsb:set attr="lang.self_customHeaders_value" value="值"/>
<rsb:set attr="lang.self_addHeader" value="新增自訂頭"/>
<rsb:set attr="lang.selfTitle_firewallSettings" value="代理設置"/>
<rsb:set attr="lang.self_firewallType" value="代理類型："/>
<rsb:set attr="lang.self_firewallHost" value="代理主機："/>
<rsb:set attr="lang.self_firewallPort" value="代理端口："/>
<rsb:set attr="lang.self_firewallUser" value="代理用戶名："/>
<rsb:set attr="lang.self_firewallPassword" value="代理密碼："/>
<rsb:set attr="lang.self_proxyAuthScheme" value="代理驗證模式："/>
<rsb:set attr="lang.selfTitle_otherSettings" value="[lang.as2PartnerTitle_otherSettings]"/>
<rsb:set attr="lang.self_otherSettings" value="[lang.as2Partner_otherSettingsInfo]"/>
<rsb:set attr="lang.self_notSpecified" value="[lang.as2Partner_notSpecified]"/>
<rsb:set attr="lang.self_not_available_free" value="帶有*的功能為付費功能。請訪問<a href='http://www.rssbus.com/order/' target='_blank'>此處</a> 來獲取其他授權。"/>
<rsb:set attr="lang.self_not_available_popup" value="帶有*的功能為付費功能。您願意存取RSSBus官網來瞭解相關付費選項？"/>
<rsb:set attr="lang.self_autoarchive" value="Auto-Archive Options"/>
<rsb:set attr="lang.self_autoarchive_desc" value="Reduce incoming and outgoing logs by moving old items to an archive folder. The application will archive logs older than the specified number of days."/>
<rsb:set attr="lang.self_autoarchive_log" value="Archive Logs (Days):"/>

<!-- view/sftpPartner.rst -->
<rsb:set attr="lang.sftpPartner_remoteHost" value="遠端主機："/>
<rsb:set attr="lang.sftpPartner_port" value="通訊埠："/>
<rsb:set attr="lang.sftpPartnerTitle_clientAuthentication" value="用戶端驗證"/>
<rsb:set attr="lang.sftpPartner_authenticationMode" value="驗證模式："/>
<rsb:set attr="lang.sftpPartner_authenticationMode_password" value="密碼"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_publicKey" value="公鑰"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_multipleFactor" value="多重因子"/>
<rsb:set attr="lang.sftpPartner_user" value="使用者："/>
<rsb:set attr="lang.sftpPartner_password" value="密碼："/>
<rsb:set attr="lang.sftpPartner_SSHPublicKeyInfo" value="如果使用使用公鑰或者多重因子進行身份驗證，您可以在這裡設定私鑰。"/>
<rsb:set attr="lang.sftpPartner_privateCertificate" value="私鑰證書："/>
<rsb:set attr="lang.sftpPartner_certificatePassword" value="證書密碼："/>
<rsb:set attr="lang.sftpPartnerTitle_serverAuthentication" value="伺服器驗證"/>
<rsb:set attr="lang.sftpPartner_serverAuthenticationInfo" value="這個欄位用來設定連接的SFTP伺服器的公鑰。您可以設定整個公鑰，公鑰的指紋（Ex: 27:23:82:5c:07:64:6c:bd:b6:d1:ae:0e:64:09:7c:f4）或者「*」接受所有的伺服器證書。&nbsp;如果不能正確的使用，您可能會留下一個安全漏洞，請謹慎使用。"/>
<rsb:set attr="lang.sftpPartner_serverPublicKey" value="伺服器公鑰證書："/>

<!-- view/listReceivedLogsTable.rst & listSentLogsTable.rst -->
<rsb:set attr="lang.listLogsTable_noFilesDownloaded" value="沒有檔案下載"/>
<rsb:set attr="lang.listLogsTable_All" value="所有"/>
<rsb:set attr="lang.listLogsTable_Sent" value="已傳送"/>
<rsb:set attr="lang.listLogsTable_Unsent" value="未傳送"/>
<rsb:set attr="lang.listLogsTable_SendError" value="傳送失敗"/>
<rsb:set attr="lang.listLogsTable_PendingMDN" value="等待MDN"/>
<rsb:set attr="lang.listLogsTable_MDNError" value="MDN錯誤"/>
<rsb:set attr="lang.listLogsTable_Received" value="已接收"/>
<rsb:set attr="lang.listLogsTable_ReceivedError" value="接收失敗"/>

<!-- view/listReceivedLogsSubTable.rst & listSentLogsSubTable.rst -->
<rsb:set attr="lang.listLogsSubTable_Log" value="日誌"/>
<rsb:set attr="lang.listLogsSubTable_Request" value="要求"/>
<rsb:set attr="lang.listLogsSubTable_MDN" value="MDN"/>
<rsb:set attr="lang.listLogsSubTable_Error" value="錯誤"/>
<rsb:set attr="lang.listLogsSubTable_Etag" value="Etag"/>
<rsb:set attr="lang.listLogsSubTable_Attachment" value="Attachment"/>
<rsb:set attr="lang.listLogsSubTable_AsyncLog" value="異步日誌"/>
<rsb:set attr="lang.listLogsSubTable_AsyncMDN" value="異步MDN"/>
<rsb:set attr="lang.listLogsSubTable_AsyncError" value="異步錯誤"/>

<!-- pub/public.rst -->
<rsb:set attr="lang.publicTitle_partnerProfile" value="夥伴設定"/>
<rsb:set attr="lang.public_tradingPartnerInfo" value="交易夥伴訊息"/>
<rsb:set attr="lang.public_as2Identifier" value="AS2標識："/>
<rsb:set attr="lang.public_partnerURL" value="夥伴URL："/>
<rsb:set attr="lang.public_asynchronousMDNURL" value="異步MDN的URL："/>
<rsb:set attr="lang.public_encryptionAlgorithm" value="加密算法："/>
<rsb:set attr="lang.public_signingAlgorithm" value="簽名算法："/>
<rsb:set attr="lang.public_publicCertificate" value="公鑰證書："/>
<rsb:set attr="lang.public_download" value="下載證書"/>
<rsb:set attr="lang.public_unpublished" value="未公開"/>
<rsb:set attr="lang.public_unpublishedInfo" value="此夥伴設定未公開。"/>
<rsb:set attr="lang.publicTitle_as2connector" value="RSSBus AS2 連接器 SE&trade;"/>
<rsb:set attr="lang.public_as2connectorInfo1" value="RSSBus AS2 連接器 SE&trade;是一個通過Drummond&trade;認證的使用領先的AS2協議進行安全乙太網路上電子資料交換(EDI)的應用程式。"/>
<rsb:set attr="lang.public_as2connectorInfo2" value="RSSBus AS2 連接器 SE&trade;在和1位交易夥伴使用時完全免費， 並且沒有任何額外的費用而且無需每年的維護。 "/>
<rsb:set attr="lang.public_as2connectorInfo3" value="更多訊息和免費版的AS2連接器，請拜訪我們網站"/>

<!-- as2SendFile.rsb & as2RestartFile.rsb & ftpSendFile.rsb & sftpSendFile.rsb & oftpSendFile.rsb -->
<rsb:set attr="lang.ex_category1" value="其他"/>
<rsb:set attr="lang.ex_category2" value="連接"/>
<rsb:set attr="lang.ex_category3" value="設定"/>
<rsb:set attr="lang.ex_generalmsg1" value="HTTP錯誤"/>
<rsb:set attr="lang.ex_generalmsg2" value="不能驗證此回執簽名"/>
<rsb:set attr="lang.ex_generalmsg3" value="MDN錯誤"/>
<rsb:set attr="lang.ex_generalmsg4" value="MDN錯誤：不可預知的處理錯誤"/>
<rsb:set attr="lang.ex_generalmsg5" value="MDN錯誤：不足的訊息安全"/>
<rsb:set attr="lang.ex_generalmsg6" value="MDN傳送錯誤"/>
<rsb:set attr="lang.ex_generalmsg7" value="未知的AS2標識"/>
<rsb:set attr="lang.ex_specificmsg1" value="404未找到"/>
<rsb:set attr="lang.ex_specificmsg2" value="解密失敗"/>
<rsb:set attr="lang.ex_specificmsg3" value="簽名驗證失敗：不能驗證此簽名者標識"/>
<rsb:set attr="lang.ex_specificmsg4" value="簽名驗證失敗：不能驗證此內容完整性"/>
<rsb:set attr="lang.ex_tip1" value="提示訊息未找到，請聯繫support@rssbus.com獲得更多訊息。"/>
<rsb:set attr="lang.ex_tip151" value="您存取的URL未找到，請向您的交易夥伴確認後嘗試。"/>
<rsb:set attr="lang.ex_tip531" value="這個錯誤可能是當您的交易夥伴要求一個簽名回執，但收到的回復不是一個簽名的MDN。 大多數情況，如果返回的不在是一個MDN回執，可能是一個伺服器錯誤。 請檢查MDN日誌，檢視本次傳輸的伺服器返回，有可能發現其他訊息。"/>
<rsb:set attr="lang.ex_tip532" value="無法驗證MDN回執裡的簽名。 請確認您設定的交易夥伴簽名公鑰是否正確。"/>
<rsb:set attr="lang.ex_tip611" value="您交易夥伴的應用程式遇到這個錯誤。 您的交易夥伴不能解密被他們公鑰證書加密的訊息。 請確認您設定的交易夥伴公鑰證書是否正確。"/>
<rsb:set attr="lang.ex_tip612" value="這個錯誤是您的交易夥伴的應用程式遇到的。 您的交易夥伴不能從傳輸簽名中驗證您的標識。 請確認他們正在使用您的正確公鑰，並與設定頁面設定的.pfx檔案對應。"/>
<rsb:set attr="lang.ex_tip613" value="您交易夥伴的應用程式遇到這個錯誤。 您的交易夥伴不能驗證您傳送的簽名。 請確認他們正在使用您的正確公鑰，並與設定頁面設定的.pfx檔案對應。"/>
<rsb:set attr="lang.ex_tip614" value="您交易夥伴遇到了一個不可預知的處理錯誤。 這個錯誤將包含可讀的MDN內容和可能導致錯誤的因素。"/>
<rsb:set attr="lang.ex_tip615" value="您的交易夥伴沒有得到必須的安全參數而拒絕了這個訊息。 有可能是需要簽名的訊息沒有簽名，或許有加密的訊息沒有加密，或兩者都有可能。"/>
<rsb:set attr="lang.ex_tip712" value="您交易夥伴傳送給您的訊息不能解密。 請確認他們正在使用您的正確公鑰，並與設定頁面設定的.pfx檔案對應。"/>
<rsb:set attr="lang.ex_tip731" value="無法驗證您交易夥伴傳送到簽名者標識。 請確定您的交易夥伴已經設定了正確的簽名公鑰。"/>
<rsb:set attr="lang.ex_tip732" value="無法驗證你交易夥伴的簽名。 請確定您的交易夥伴已經設定了正確的簽名公鑰。"/>
<rsb:set attr="lang.ex_tip762" value="無法返回一個異步MDN回執給您交易夥伴指定的URL。 這可能是由於傳送方指定了一個錯誤的URL，或者有防火牆或代理問題阻止了傳送回執，或者您交易夥伴的伺服器臨時關機。 其他原因也可能導致這個錯誤。"/>
<rsb:set attr="lang.ex_tip999" value="您交易夥伴傳送的AS2標識跟您自己的標識不符合。 請檢查您交易夥伴給您設定的AS2標識。 注意：AS2標識是大小寫敏感的。"/>
<rsb:set attr="lang.ex_tip10060" value="這個錯誤表示網路連接無法連接到您交易夥伴的URL。 可能由於錯誤的URL，或者有防火牆或您交易夥伴禁止了存取此通訊埠。 請檢查您交易夥伴的URL是否可以通過您的IP位址來存取，向您的網路管理員確認出站連接可以存取交易夥伴的位址。"/>
<rsb:set attr="lang.ex_tip32000" value="[lang.ex_tip10060]"/>

<!-- priv/ftpReceiveFile.rsb & sftpReceiveFile.rsb & oftpReceiveFile.rsb -->
<rsb:set attr="lang.ftpReceive_successful" value="FTP傳輸成功。"/>


