<rsb:include file="~/shared/lang/English.rst"/>

<rsb:select value="[site.supportPartnerType | tolower]">
  <rsb:case match="exact" value="as2">
    <rsb:set attr="tmp.partner" value="partner" />
    <rsb:set attr="tmp.cap_partner" value="Partner" />
    <rsb:set attr="tmp.trading_partner" value="trading partner" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the AS2 Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %AS2To%, %AS2From%, %MessageID%, %FileName%, %FileNameWritten%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="ftp">
    <rsb:set attr="tmp.partner" value="host" />
    <rsb:set attr="tmp.cap_partner" value="Host" />
    <rsb:set attr="tmp.trading_partner" value="host" />
    <rsb:set attr="tmp.demo_desc" value="This application is free for a single host configuration. All features are available for this application in the free version."/>
    <rsb:set attr="tmp.full_desc" value="To activate your Multi-Host License for FTP Connector, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="sftp">
    <rsb:set attr="tmp.partner" value="host" />
    <rsb:set attr="tmp.cap_partner" value="Host" />
    <rsb:set attr="tmp.trading_partner" value="host" />
    <rsb:set attr="tmp.demo_desc" value="This application is free for a single host configuration. All features are available for this application in the free version."/>
    <rsb:set attr="tmp.full_desc" value="To activate your Multi-Host License for SFTP Connector, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="oftp">
    <rsb:set attr="tmp.partner" value="partner" />
    <rsb:set attr="tmp.cap_partner" value="Partner" />
    <rsb:set attr="tmp.trading_partner" value="trading partner" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the OFTP Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="edi">
    <rsb:set attr="tmp.partner" value="partner" />
    <rsb:set attr="tmp.cap_partner" value="Partner" />
    <rsb:set attr="tmp.trading_partner" value="trading partner" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the EDI Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="s3">
    <rsb:set attr="tmp.partner" value="connection" />
    <rsb:set attr="tmp.cap_partner" value="Connection" />
    <rsb:set attr="tmp.trading_partner" value="Connection" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the Amazon S3 Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="gs">
    <rsb:set attr="tmp.partner" value="connection" />
    <rsb:set attr="tmp.cap_partner" value="Connection" />
    <rsb:set attr="tmp.trading_partner" value="Connection" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the Google Storage Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:case match="exact" value="scp">
    <rsb:set attr="tmp.partner" value="connection" />
    <rsb:set attr="tmp.cap_partner" value="Connection" />
    <rsb:set attr="tmp.trading_partner" value="Connection" />
    <rsb:set attr="tmp.demo_desc" value="Basic functionality of this application is free for a single trading partner.  Some features of the application are only available with a multiple trading partner license."/>
    <rsb:set attr="tmp.full_desc" value="A Multi-Partner License will enable all features of the SCP Connector application. To activate your Multi-Partner License, please enter the product key below."/>
    <rsb:set attr="tmp.commands_info" value="You can configure the application to run a batch file or shell script prior to sending data, after sending data, or after receiving data. The following macros are supported in arguments: %Server%, %FileName%, %Organization%, %ShortDate%, %LongDate%."/>
  </rsb:case>
  <rsb:default />
</rsb:select>

<!-- AS2 English -->
<rsb:set attr="site.language" value="English"/>

<!-- AS2 about.rst -->
<rsb:set attr="lang.as2_aboutTitle_about" value="About RSSBus AS2 Connector"/>
<rsb:set attr="lang.as2_about_thankYouContent1" value="Thank you for choosing AS2 Connector. You have selected one of the best solutions available for secure file transmission via AS2, the leading standard for secure Internet EDI communications."/>
<rsb:set attr="lang.as2_about_thankYouContent2" value="We realize that you have a choice among EDI solutions. By choosing RSSBus you are counting on us to be a key component in your business and expect us to provide you with ongoing enhancements, support, and innovative products. We will do our best to meet your expectations!"/>
<rsb:set attr="lang.as2_about_thankYouContent3" value="You will always find AS2 Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.as2_aboutTitle_drummondCertification" value="Drummond&trade; Certification"/>
<rsb:set attr="lang.as2_about_drummondCertificationContent" value="To ensure easy configuration with your trading partners, this application has undergone exhaustive interoperability testing to receive Drummond&trade; certification."/>
<rsb:set attr="lang.as2_aboutTitle_singleTradingPartner" value="Single Trading Partner - FREE"/>
<rsb:set attr="lang.as2_about_singleTradingPartnerContent" value="AS2 Connector is free to use with a single trading partner. There are absolutely no extra fees or annual maintenance requirements for using this application with a single trading partner. A license is required to use the application with multiple trading partners."/>
<rsb:set attr="lang.as2_about_licensingInformationContent1" value="Adding more partners is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-partner license. We provide several license levels including an unlimited trading partner license."/>
<rsb:set attr="lang.as2_about_maximumPartners" value="Maximum Partners:"/>
<rsb:set attr="lang.as2_about_licensingInformationContent3" value="Support for multiple additional trading partners can be purchased from our website at:"/>

<!-- FTP about.rst -->
<rsb:set attr="lang.ftp_aboutTitle_about" value="About RSSBus FTP Connector"/>
<rsb:set attr="lang.ftp_about_thankYouContent1" value="Thank you for choosing FTP Connector. You have selected one of the best solutions available for managed file transmission via FTP."/>
<rsb:set attr="lang.ftp_about_thankYouContent2" value="The FTP Connector will provide your organization with the ability to automate file transfer with advanced messaging capabilities and integration with your other business processes."/>
<rsb:set attr="lang.ftp_about_thankYouContent3" value="You will always find FTP Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.ftp_aboutTitle_drummondCertification" value="Drummond&trade; Certification"/>
<rsb:set attr="lang.ftp_about_drummondCertificationContent" value="To ensure easy configuration with your trading partners, this application has undergone exhaustive interoperability testing to receive Drummond&trade; certification."/>
<rsb:set attr="lang.ftp_aboutTitle_singleTradingPartner" value="Single Host Configuration - FREE"/>
<rsb:set attr="lang.ftp_about_singleTradingPartnerContent" value="FTP Connector is free to use with a single host configuration. There are absolutely no extra fees or annual maintenance requirements for using this application with a single host configuration. A license is required to use the application with multiple host configurations."/>
<rsb:set attr="lang.ftp_about_licensingInformationContent1" value="Adding more host configurations is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-host license. We provide several license levels including an unlimited host license."/>
<rsb:set attr="lang.ftp_about_maximumPartners" value="Maximum Hosts:"/>
<rsb:set attr="lang.ftp_about_licensingInformationContent3" value="Support for multiple additional hosts can be purchased from our website at:"/>

<!-- SFTP about.rst -->
<rsb:set attr="lang.sftp_aboutTitle_about" value="About RSSBus SFTP Connector"/>
<rsb:set attr="lang.sftp_about_thankYouContent1" value="Thank you for choosing SFTP Connector. You have selected one of the best solutions available for managed file transmission via SFTP."/>
<rsb:set attr="lang.sftp_about_thankYouContent2" value="The SFTP Connector will provide your organization with the ability to automate file transfer with advanced messaging capabilities and integration with your other business processes."/>
<rsb:set attr="lang.sftp_about_thankYouContent3" value="You will always find SFTP Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.sftp_aboutTitle_singleTradingPartner" value="Single Host Configuration - FREE"/>
<rsb:set attr="lang.sftp_about_singleTradingPartnerContent" value="SFTP Connector is free to use with a single host configuration. There are absolutely no extra fees or annual maintenance requirements for using this application with a single host configuration. A license is required to use the application with multiple host configurations."/>
<rsb:set attr="lang.sftp_about_licensingInformationContent1" value="Adding more host configurations is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-host license. We provide several license levels including an unlimited host license."/>
<rsb:set attr="lang.sftp_about_maximumPartners" value="Maximum Hosts:"/>
<rsb:set attr="lang.sftp_about_licensingInformationContent3" value="Support for multiple additional hosts can be purchased from our website at:"/>

<!-- OFTP about.rst -->
<rsb:set attr="lang.oftp_aboutTitle_about" value="About RSSBus OFTP Connector"/>
<rsb:set attr="lang.oftp_about_thankYouContent1" value="Thank you for choosing OFTP Connector. You have selected one of the best solutions available for secure file transmission via OFTP."/>
<rsb:set attr="lang.oftp_about_thankYouContent2" value="We realize that you have a choice among OFTP solutions. By choosing RSSBus you are counting on us to be a key component in your business and expect us to provide you with ongoing enhancements, support, and innovative products. We will do our best to meet your expectations!"/>
<rsb:set attr="lang.oftp_about_thankYouContent3" value="You will always find OFTP Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.oftp_aboutTitle_singleTradingPartner" value="Single Trading Partner - FREE"/>
<rsb:set attr="lang.oftp_about_singleTradingPartnerContent" value="OFTP Connector is free to use with a single trading partner. There are absolutely no extra fees or annual maintenance requirements for using this application with a single trading partner. A license is required to use the application with multiple trading partners."/>
<rsb:set attr="lang.oftp_about_licensingInformationContent1" value="Adding more partners is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-partner license. We provide several license levels including an unlimited trading partner license."/>
<rsb:set attr="lang.oftp_about_maximumPartners" value="Maximum Partners:"/>
<rsb:set attr="lang.oftp_about_licensingInformationContent3" value="Support for multiple additional trading partners can be purchased from our website at:"/>

<!-- EDI about.rst -->
<rsb:set attr="lang.edi_aboutTitle_about" value="About RSSBus EDI Connector"/>
<rsb:set attr="lang.edi_about_thankYouContent1" value="Thank you for choosing EDI Connector. You have selected one of the best solutions available for secure file transmission via OFTP/AS2/FTP/SFTP."/>
<rsb:set attr="lang.edi_about_thankYouContent2" value="We realize that you have a choice among EDI solutions. By choosing RSSBus you are counting on us to be a key component in your business and expect us to provide you with ongoing enhancements, support, and innovative products. We will do our best to meet your expectations!"/>
<rsb:set attr="lang.edi_about_thankYouContent3" value="You will always find EDI Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.edi_aboutTitle_singleTradingPartner" value="Single Trading Partner - FREE"/>
<rsb:set attr="lang.edi_about_singleTradingPartnerContent" value="EDI Connector is free to use with a single trading partner. There are absolutely no extra fees or annual maintenance requirements for using this application with a single trading partner. A license is required to use the application with multiple trading partners."/>
<rsb:set attr="lang.edi_about_licensingInformationContent1" value="Adding more partners is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-partner license. We provide several license levels including an unlimited trading partner license."/>
<rsb:set attr="lang.edi_about_maximumPartners" value="Maximum Partners:"/>
<rsb:set attr="lang.edi_about_licensingInformationContent3" value="Support for multiple additional trading partners can be purchased from our website at:"/>

<!-- S3 about.rst -->
<rsb:set attr="lang.s3_aboutTitle_about" value="About RSSBus Amazon S3 Connector"/>
<rsb:set attr="lang.s3_about_thankYouContent1" value="Thank you for choosing the Amazon S3 Connector. You have selected one of the best solutions available for managed file transmission via Amazon S3."/>
<rsb:set attr="lang.s3_about_thankYouContent2" value="The Amazon S3 Connector will provide your organization with the ability to automate file transfer with advanced messaging capabilities and integration with your other business processes."/>
<rsb:set attr="lang.s3_about_thankYouContent3" value="You will always find Amazon S3 Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.s3_aboutTitle_singleTradingPartner" value="Single Connection Configuration - FREE"/>
<rsb:set attr="lang.s3_about_singleTradingPartnerContent" value="The Amazon S3 Connector is free to use with a single connection configuration. There are absolutely no extra fees or annual maintenance requirements for using this application with a single connection configuration. A license is required to use the application with multiple bucket configurations."/>
<rsb:set attr="lang.s3_about_licensingInformationContent1" value="Adding more connection configurations is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-connection license. We provide several license levels including an unlimited connection license."/>
<rsb:set attr="lang.s3_about_maximumPartners" value="Maximum Connections:"/>
<rsb:set attr="lang.s3_about_licensingInformationContent3" value="Support for multiple additional connections can be purchased from our website at:"/>

<!-- GS about.rst -->
<rsb:set attr="lang.gs_aboutTitle_about" value="About RSSBus Google Storage Connector"/>
<rsb:set attr="lang.gs_about_thankYouContent1" value="Thank you for choosing the Google Storage Connector. You have selected one of the best solutions available for managed file transmission via Google Storage."/>
<rsb:set attr="lang.gs_about_thankYouContent2" value="The Google Storage Connector will provide your organization with the ability to automate file transfer with advanced messaging capabilities and integration with your other business processes."/>
<rsb:set attr="lang.gs_about_thankYouContent3" value="You will always find Google Storage Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.gs_aboutTitle_singleTradingPartner" value="Single Connection Configuration - FREE"/>
<rsb:set attr="lang.gs_about_singleTradingPartnerContent" value="The Google Storage Connector is free to use with a single connection configuration. There are absolutely no extra fees or annual maintenance requirements for using this application with a single connection configuration. A license is required to use the application with multiple bucket configurations."/>
<rsb:set attr="lang.gs_about_licensingInformationContent1" value="Adding more connection configurations is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-connection license. We provide several license levels including an unlimited connection license."/>
<rsb:set attr="lang.gs_about_maximumPartners" value="Maximum Connections:"/>
<rsb:set attr="lang.gs_about_licensingInformationContent3" value="Support for multiple additional connections can be purchased from our website at:"/>

<!-- SCP about.rst -->
<rsb:set attr="lang.scp_aboutTitle_about" value="About RSSBus SCP Connector"/>
<rsb:set attr="lang.scp_about_thankYouContent1" value="Thank you for choosing SCP Connector. You have selected one of the best solutions available for managed file transmission via SCP."/>
<rsb:set attr="lang.scp_about_thankYouContent2" value="The SCP Connector will provide your organization with the ability to automate file transfer with advanced messaging capabilities and integration with your other business processes."/>
<rsb:set attr="lang.scp_about_thankYouContent3" value="You will always find SCP Connector and any updates to the product at our web site"/>
<rsb:set attr="lang.scp_aboutTitle_singleTradingPartner" value="Single Connection Configuration - FREE"/>
<rsb:set attr="lang.scp_about_singleTradingPartnerContent" value="SCP Connector is free to use with a single connection configuration. There are absolutely no extra fees or annual maintenance requirements for using this application with a single connection configuration. A license is required to use the application with multiple connection configurations."/>
<rsb:set attr="lang.scp_about_licensingInformationContent1" value="Adding more connection configurations is as simple as clicking on the &quot;UPGRADE YOUR LICENSE&quot; link below and purchasing a multiple-connection license. We provide several license levels including an unlimited connection license."/>
<rsb:set attr="lang.scp_about_maximumPartners" value="Maximum Connections:"/>
<rsb:set attr="lang.scp_about_licensingInformationContent3" value="Support for multiple additional connections can be purchased from our website at:"/>

<!-- about.rst -->
<rsb:set attr="lang.aboutTitle_thankYou" value="Thank You"/>
<rsb:set attr="lang.aboutTitle_licensingInformation" value="Licensing Information"/>
<rsb:set attr="lang.about_licensingInformationContent2" value="This machine is currently licensed for:"/>
<rsb:set attr="lang.about_upgradeLicense" value="\[UPGRADE YOUR LICENSE\]"/>
<rsb:set attr="lang.about_installLicense" value="INSTALL LICENSE"/>
<rsb:set attr="lang.about_serialNumber" value="Product Key:"/>
<rsb:set attr="lang.about_version" value="Version"/>

<!-- activate.rst -->
<rsb:set attr="lang.activate_demoname" value="Free Single [tmp.cap_partner] License"/>
<rsb:set attr="lang.activate_demodesc" value="[tmp.demo_desc]"/>
<rsb:set attr="lang.activate_demobtn" value="Use Free License"/>
<rsb:set attr="lang.activate_fullname" value="Multi-[tmp.cap_partner] License"/>
<rsb:set attr="lang.activate_fulldesc" value="[tmp.full_desc]"/>
<rsb:set attr="lang.activateTitle_licenseRequired" value="License Required"/>

<!-- footer.rst -->
<rsb:set attr="lang.popup_addCertificate" value="Import A New Certificate"/>
<rsb:set attr="lang.popup_addCertificateContent1" value="To specify a certificate, select a certificate file to upload and press the Import button."/>
<rsb:set attr="lang.popup_addCertificateContent2" value="Supported certificate file formats are .cer, .pfx, and .pem."/>
<rsb:set attr="lang.popup_addCertificateFile" value="Certificate File:"/>
<rsb:set attr="lang.popup_addCertificateFileBtn" value="Import Certificate"/>
<rsb:set attr="lang.popup_createCertificate" value="Create A New Certificate"/>
<rsb:set attr="lang.popup_createCertificateContent1" value="Please specify either a Common Name or Organization for the certificate. The other fields in this section are required."/>
<rsb:set attr="lang.popup_createCertificateContent2" value="The following details are optional, and provide additional information about the certificate holder."/>
<rsb:set attr="lang.popup_createCertificateCommonname" value="Common Name:"/>
<rsb:set attr="lang.popup_createCertificateOrganization" value="Organization:"/>
<rsb:set attr="lang.popup_createCertificateFileName" value="File Name:"/>
<rsb:set attr="lang.popup_createCertificateSerialNumber" value="Serial Number:"/>
<rsb:set attr="lang.popup_createCertificateSerialPassword" value="Password:"/>
<rsb:set attr="lang.popup_createCertificateExpiration" value="Validity Period (Years):"/>
<rsb:set attr="lang.popup_createCertificateKeySize" value="Key Size:"/>
<rsb:set attr="lang.popup_createCertificateOrganizationalUnit" value="Organizational Unit:"/>
<rsb:set attr="lang.popup_createCertificateLocality" value="Locality (City):"/>
<rsb:set attr="lang.popup_createCertificateState" value="State/Province:"/>
<rsb:set attr="lang.popup_createCertificateCountry" value="Country:"/>
<rsb:set attr="lang.popup_createCertificateEmail" value="Email:"/>
<rsb:set attr="lang.popup_createCertificateBtn" value="Create Certificate"/>
<rsb:set attr="lang.popup_cspTip" value="Could Not Create Certificate"/>
<rsb:set attr="lang.popup_cspTipContent" value="
  <p>System could not acquire CSP. If [site.supportPartnerType] Connector is running in IIS, follow these steps below.</p>
  <p>(1) Open IIS Manager, and add a new application pool to IIS.</p>
  <p>(2) Change the identity of the new application pool to be NetworkService.</p>
  <p>(3) Set the [site.supportPartnerType] Connector site to use the new application pool.</p>
  <p>(4) Restart IIS and create the certificate again.</p>
"/>
<rsb:set attr="lang.popup_cspTipBtn" value="Continue"/>
<rsb:set attr="lang.popup_actionStatus" value="Action Status"/>
<rsb:set attr="lang.popup_actionStatusMsg" value="Please do not close this window."/>
<rsb:set attr="lang.popup_selectPartner" value="Select A New Host Type:"/>
<rsb:set attr="lang.popup_selectPartnerContinue" value="Continue"/>

<!-- header.rst -->
<rsb:set attr="lang.menu_connections" value="Connections"/>
<rsb:set attr="lang.menu_hosts" value="Hosts"/>
<rsb:set attr="lang.menu_partners" value="Partners"/>
<rsb:set attr="lang.menu_profile" value="Profile"/>
<rsb:set attr="lang.menu_help" value="Help"/>
<rsb:set attr="lang.menu_about" value="About"/>
<rsb:set attr="lang.menu_services" value="Services"/>
<rsb:set attr="lang.js_checkUnsave" value="One or more changes unsaved.\\r\\nAre you sure you want to leave without saving?"/>

<!-- help.rst -->
<rsb:set attr="lang.help" value="Getting Help"/>
<rsb:set attr="lang.helpOnline" value="Online Resources"/>
<rsb:set attr="lang.as2_helpOnlineContent" value="To get started configuring the AS2 Connector application to communicate with your trading partners, see the help resources below."/>
<rsb:set attr="lang.ftp_helpOnlineContent" value="To get started configuring the FTP Connector application to communicate with your FTP sites, see the help resources below."/>
<rsb:set attr="lang.sftp_helpOnlineContent" value="To get started configuring the SFTP Connector application to communicate with your SFTP sites, see the help resources below."/>
<rsb:set attr="lang.oftp_helpOnlineContent" value="To get started configuring the OFTP Connector application to communicate with your trading partners, see the help resources below."/>
<rsb:set attr="lang.edi_helpOnlineContent" value="To get started configuring the EDI Connector application to communicate with your trading partners, see the help resources below."/>
<rsb:set attr="lang.s3_helpOnlineContent" value="To get started configuring the Amazon S3 Connector application to communicate with your S3 sites, see the help resources below."/>
<rsb:set attr="lang.gs_helpOnlineContent" value="To get started configuring the Google Storage Connector application to communicate with your Google Storage sites, see the help resources below."/>
<rsb:set attr="lang.scp_helpOnlineContent" value="To get started configuring the SCP Connector application to communicate with your SSH Server, see the help resources below."/>
<rsb:set attr="lang.helpOnlineStart" value="Getting Started Guide"/>
<rsb:set attr="lang.helpOnlineFAQ" value="Frequently Asked Questions"/>
<rsb:set attr="lang.helpTechnicalSupport" value="Technical Support"/>
<rsb:set attr="lang.helpTechnicalSupportContent" value="Please direct all other technical questions to our <a href='http://rssbus.com/support/submit.aspx'>Technical Support Team</a>. You will speed up a response to your question if you provide an accurate description of your problem, the results you expected and the results you received when using our product."/>

<!-- partners.rst -->
<rsb:set attr="lang.hosts" value="Hosts"/>
<rsb:set attr="lang.partners" value="Partners"/>
<rsb:set attr="lang.checkBeforeSave" value="You are changing the AS2 Identifier of this partner. This will delete the old partner stored as \[{0}\] and create a new partner named \[{1}\]. Any logs and incoming/outgoing files for \[{0}\] will also be deleted. Please backup any required files before changing this partner. \\r\\n\\r\\nDo you wish to proceed?"/>

<!-- Common -->
<rsb:set attr="lang.gsappname" value="Google Storage Connector"/>
<rsb:set attr="lang.s3appname" value="Amazon S3 Connector"/>
<rsb:set attr="lang.required" value="* Required"/>
<rsb:set attr="lang.certificateSubject" value="Certificate Subject:"/>
<rsb:set attr="lang.importCertificate" value="Import Certificate"/>
<rsb:set attr="lang.certificateExpires" value="This certificate expires in {0} days."/>
<rsb:set attr="lang.partner_successSaved" value="Partner profile was successfully saved."/>
<rsb:set attr="lang.partnerTitle_addNew" value="Add New"/>
<rsb:set attr="lang.as2_partnerTitle_tradingPartner" value="Trading Partner Info"/>
<rsb:set attr="lang.as2_partner_organizationName" value="Organization Name:"/>
<rsb:set attr="lang.ftp_partnerTitle_tradingPartner" value="Host Configuration"/>
<rsb:set attr="lang.ftp_partner_organizationName" value="Host Name:"/>
<rsb:set attr="lang.sftp_partnerTitle_tradingPartner" value="Host Configuration"/>
<rsb:set attr="lang.sftp_partner_organizationName" value="Host Name:"/>
<rsb:set attr="lang.oftp_partnerTitle_tradingPartner" value="Trading Partner Info"/>
<rsb:set attr="lang.oftp_partner_organizationName" value="Organization Name:"/>
<rsb:set attr="lang.s3_partnerTitle_tradingPartner" value="Connection Configuration"/>
<rsb:set attr="lang.s3_partner_organizationName" value="Bucket Name:"/>
<rsb:set attr="lang.scp_partnerTitle_tradingPartner" value="Connection Configuration"/>
<rsb:set attr="lang.scp_partner_organizationName" value="Connection Name:"/>
<rsb:set attr="lang.partner_failure" value="Failure: "/>
<rsb:set attr="lang.partner_category" value="Category"/>
<rsb:set attr="lang.partner_generalError" value="General Error"/>
<rsb:set attr="lang.partner_specificError" value="Specific Error"/>
<rsb:set attr="lang.partner_tip" value="Tip"/>

<!-- view/as2Partner.rst -->
<rsb:set attr="lang.as2Partner_as2Identifier" value="AS2 Identifier:"/>
<rsb:set attr="lang.as2Partner_partnerURL" value="Partner URL:"/>
<rsb:set attr="lang.as2PartnerTitle_connection" value="Connection Info"/>
<rsb:set attr="lang.as2Partner_outgoingMsgSecurity" value="Outgoing Message Security:"/>
<rsb:set attr="lang.as2Partner_signOutgoingData" value="Sign Outgoing Data"/>
<rsb:set attr="lang.as2Partner_encryptOutgoingData" value="Encrypt Outgoing Data"/>
<rsb:set attr="lang.as2Partner_IncomingMsgSecurity" value="Incoming Message Security:"/>
<rsb:set attr="lang.as2Partner_requireSignature" value="Require Signature"/>
<rsb:set attr="lang.as2Partner_requireEncryption" value="Require Encryption"/>
<rsb:set attr="lang.as2Partner_compression" value="Compression:"/>
<rsb:set attr="lang.as2Partner_compressOutgoingData" value="Compress Outgoing Data"/>
<rsb:set attr="lang.as2Partner_connectionTimeout" value="Connection Timeout (sec):"/>
<rsb:set attr="lang.as2PartnerTitle_mdn" value="MDN Receipts"/>
<rsb:set attr="lang.as2Partner_requestMDNReceipt" value="Request MDN Receipt"/>
<rsb:set attr="lang.as2Partner_security" value="Security:"/>
<rsb:set attr="lang.as2Partner_signed" value="Signed"/>
<rsb:set attr="lang.as2Partner_unsigned" value="Unsigned"/>
<rsb:set attr="lang.as2Partner_delivery" value="Delivery:"/>
<rsb:set attr="lang.as2Partner_synchronous" value="Synchronous"/>
<rsb:set attr="lang.as2Partner_asynchronous" value="Asynchronous"/>
<rsb:set attr="lang.as2PartnerTitle_tradingCertificates" value="Trading Partner Certificates (PEM/CER Format)"/>
<rsb:set attr="lang.as2Partner_encryptionCertificatesInfo" value="Certificates are required to verify signatures, encrypt outgoing communications, and establish secure (SSL) connections. Your trading partner might choose to use different certificates for different purposes, or the same certificate for everything."/>
<rsb:set attr="lang.as2Partner_encryptionCertificate" value="Encryption Certificate:"/>
<rsb:set attr="lang.as2Partner_verificationCertificateInfo" value="This field may be ignored for most trading partners, since generally the same certificate is used for encrypting and signing data. If no certificate is specified, the application will use the encryption certificate for verifying signatures."/>
<rsb:set attr="lang.as2Partner_verificationCertificate" value="Verification Certificate:"/>
<rsb:set attr="lang.as2Partner_SSLServerCertificateInfo" value="This field is optional, and only needs to be set if your trading partner has an SSL URL. Use &quot*&quot to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.as2Partner_SSLServerCertificate" value="SSL Server Certificate:"/>
<rsb:set attr="lang.as2Partner_publicProfile" value="Public Profile"/>
<rsb:set attr="lang.as2Partner_publicProfileEnabled" value="Your public profile settings are published."/>
<rsb:set attr="lang.as2Partner_publicProfileDisabled" value="
<b>NOTE</b>&nbsp;<i>Your public profile settings are not published. To let your trading partner know what parameters they need to connect to you, enable your public profile in the <a href='profile.rst#pubprofile'>Profile</a> tab.</i>
"/>
<rsb:set attr="lang.as2PartnerTitle_VLM" value="Very Large Message Support (VLM)"/>
<rsb:set attr="lang.as2Partner_streamingInfo" value="When this functionality is selected, the application will send files using HTTP Chunked Transfer Encoding, which allows large files to be sent to a trading partner.  Use this with caution as not all partners may receive this type of file."/>
<rsb:set attr="lang.as2Partner_streaming" value="Streaming - (HTTP Chunked Transfer Encoding)"/>
<rsb:set attr="lang.as2Partner_logStreamingRequests" value="Log streaming requests"/>
<rsb:set attr="lang.as2Partner_logStreamingRequestsInfo" value="When left unchecked, the payload and request logs will not be written when sending and receiving files. This will conserve disk space for sending and receiving large files. Note that this is only valid when streaming is turned on."/>
<rsb:set attr="lang.as2Partner_as2RestartInfo" value="Setting this option allows the application to resume sending files that were interrupted during transmission.  This is useful when sending large files.  Note that some partners may not support this functionality."/>
<rsb:set attr="lang.as2Partner_as2Restart" value="AS2 Restart"/>
<rsb:set attr="lang.as2PartnerTitle_FIPSCompliance" value="FIPS Compliance"/>
<rsb:set attr="lang.as2Partner_FIPSComplianceInfo" value="This option will restrict the use of signing and encryption algorithms to FIPS 140-2 compliant algorithms. NOTE: Most standard algorithms are already FIPS compliant."/>
<rsb:set attr="lang.as2Partner_ForceFIPScompliant" value="Enforce FIPS compliant algorithms"/>
<rsb:set attr="lang.as2PartnerTitle_alternateLocalProfile" value="Alternate Local Profile"/>
<rsb:set attr="lang.as2Partner_alternateLocalProfileInfo" value="You may configure an alternate local AS2 Identifier and/or Private Key Certificate to use for this trading partner.  This will allow you send transmissions to the same trading partner from multiple identities and/or specific a unique private key certificate to use for this partner.  These will override the AS2 Identifier and/or Personal Certificate set in the setup tab of the application."/>
<rsb:set attr="lang.as2Partner_localAS2Identifier" value="Local AS2 Identifier:"/>
<rsb:set attr="lang.as2Partner_privateCertificate" value="Private Certificate:"/>
<rsb:set attr="lang.as2Partner_certificatePassword" value="Certificate Password:"/>
<rsb:set attr="lang.as2PartnerTitle_SSLClientAuthentication" value="SSL Client Authentication"/>
<rsb:set attr="lang.as2Partner_SSLClientAuthenticationInfo" value="These fields are optional, and only need to be set if your trading partner requires SSL client authentication."/>
<rsb:set attr="lang.as2PartnerTitle_httpAuthentication" value="HTTP Authentication"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationInfo" value="These fields are optional, and only need to be set if your trading partner requires HTTP authentication."/>
<rsb:set attr="lang.as2Partner_useHTTPAuthentication" value="Use HTTP Authentication"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationType" value="HTTP Authentication Type:"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationBasic" value="Basic"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationDigest" value="Digest"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationUser" value="User:"/>
<rsb:set attr="lang.as2Partner_httpAuthenticationPassword" value="Password:"/>
<rsb:set attr="lang.as2PartnerTitle_otherSettings" value="Other Settings"/>
<rsb:set attr="lang.as2Partner_otherSettingsInfo" value="Below are other advanced settings for the application."/>
<rsb:set attr="lang.as2Partner_notSpecified" value="Not Specified"/>

<!-- view/automation.rst -->
<rsb:set attr="lang.automationTitle" value="Automation Settings"/>
<rsb:set attr="lang.automation_info" value="Automation settings control the behavior of the application when sending and receiving is not initiated through the Admin Console. The application will automatically attempt to send files that are dropped in the outgoing folder for this connection."/>
<rsb:set attr="lang.automation_enableAutomation" value="Enable Automation"/>
<rsb:set attr="lang.automation_info2" value="When an error occurs during an automated send transmission, the failed file is appended with a &quot;.failed.?&quot; extension, where &quot;?&quot; is the number of send attempts. After the retry interval specified, the application will attempt to send the file again, incrementing the counter if unsuccessful. After the specified number of attempts, the application will no longer attempt to send the file."/>
<rsb:set attr="lang.automation_retryInterval" value="Retry Interval (minutes):"/>
<rsb:set attr="lang.automation_retryIntervalInfo" value="If a value of 0 is specified, the application will attempt to resend the file every interval."/>
<rsb:set attr="lang.automation_maximumAttempts" value="Maximum Attempts:"/>
<rsb:set attr="lang.automation_maximumAttemptsInfo" value="If a value of 0 is specified, the application will attempt to send the file indefinitely."/>
<rsb:set attr="lang.automation_chkEmailOnFail" value="Send an email to the application administrator when a failure is encountered during automation*"/>

<!-- view/directories.rst -->
<rsb:set attr="lang.directoriesTitle" value="Local Directories*"/>
<rsb:set attr="lang.directories_Incoming" value="Incoming Directory:"/>
<rsb:set attr="lang.directories_Incoming_info" value="All files being received for this profile will be written to this directory."/>
<rsb:set attr="lang.directories_Outgoing" value="Outgoing Directory:"/>
<rsb:set attr="lang.directories_Outgoing_info" value="The outgoing directory is where the application will look for files to send during automation. In addition, any unsent files in this folder will be shown when viewing the Outgoing tab for this profile."/>

<!-- view/commands.rst -->
<rsb:set attr="lang.commandsTitle" value="Script Configuration*"/>
<rsb:set attr="lang.commands_info" value="[tmp.commands_info]"/>
<rsb:set attr="lang.commands_BeforeSend" value="Before Sending:"/>
<rsb:set attr="lang.commands_AfterSend" value="After Sending:"/>
<rsb:set attr="lang.commands_AfterRecv" value="After Receiving:"/>
<rsb:set attr="lang.commands_BatchFile" value="Batch File (.bat)"/>
<rsb:set attr="lang.commands_ShellScript" value="Shell Script (.sh)"/>
<rsb:set attr="lang.commands_Arguments" value="Arguments"/>

<!-- view/ftpActions.rst -->
<rsb:set attr="lang.ftpUpload" value="Upload"/>
<rsb:set attr="lang.ftpUpload_chkUpload" value="Upload files placed in the outgoing directory to the remote path specified above"/>
<rsb:set attr="lang.ftpUpload_remotePathsInfo" value="This will set the remote path on the server to which the application will upload files."/>
<rsb:set attr="lang.ftpUpload_remotePath" value="Remote Path:"/>
<rsb:set attr="lang.ftpUpload_Outgoing" value="Local Path:"/>
<rsb:set attr="lang.ftpUpload_Outgoing_info" value="The local path is where the application will look for files to send during automation. In addition, any unsent files in this folder will be shown when viewing the Outgoing tab for this profile."/>
<rsb:set attr="lang.ftpDownload" value="Download"/>
<rsb:set attr="lang.ftpDownload_chkDownload" value="Download files from the above remote path to the incoming directory."/>
<rsb:set attr="lang.ftpDownload_ftpGetPaid" value="Download Now*"/>
<rsb:set attr="lang.ftpDownload_ftpGet" value="Download Now"/>
<rsb:set attr="lang.ftpDownload_remotePathsInfo" value="This will set the remote path on the server from which the application will download files. If you want to download from mutliple folders, use a comma to separate the specified folders."/>
<rsb:set attr="lang.ftpDownload_remotePaths" value="Remote Path:"/>
<rsb:set attr="lang.ftpDownload_Incoming" value="Local Path:"/>
<rsb:set attr="lang.ftpDownload_Incoming_info" value="All files being received for this profile will be written to this directory."/>
<rsb:set attr="lang.ftpDownload_fileMaskInfo" value="This will limit what kinds of files to download from the server. Only files matching the pattern specified in the file mask will be retrieved."/>
<rsb:set attr="lang.ftpDownload_fileMask" value="File Mask:"/>
<rsb:set attr="lang.ftpDownload_chkOverwriteDownload" value="Overwrite Local Files"/>
<rsb:set attr="lang.ftpDownload_chkDelete" value="Delete Files (after download)"/>
<rsb:set attr="lang.ftpDownload_pollInterval" value="Download Interval (minutes):"/>

<!-- view/ftpPartner.rst & view/sftpPartner.rst -->
<rsb:set attr="lang.ftpPartner_remoteHost" value="Remote Host:"/>
<rsb:set attr="lang.ftpPartner_port" value="Port:"/>
<rsb:set attr="lang.ftpPartner_user" value="User:"/>
<rsb:set attr="lang.ftpPartner_password" value="Password:"/>
<rsb:set attr="lang.ftpPartnerTitle_SSLSettings" value="SSL Settings*"/>
<rsb:set attr="lang.ftpPartner_SSLType" value="SSL Type:"/>
<rsb:set attr="lang.ftpPartner_SSLType_none" value="None (Plain Text)"/>
<rsb:set attr="lang.ftpPartner_SSLType_explicit" value="Explicit"/>
<rsb:set attr="lang.ftpPartner_SSLType_implicit" value="Implicit"/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCertInfo" value="This field only needs to be set if you are communicating with an FTPS server. Use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.ftpPartner_SSLAcceptCert" value="SSL Server Certificate"/>
<rsb:set attr="lang.ftpPartnerTitle_FIPSCompliance" value="FIPS Compliance*"/>
<rsb:set attr="lang.ftpPartner_FIPSComplianceInfo" value="This option will restrict the use of signing and encryption algorithms to FIPS 140-2 compliant algorithms. NOTE: Most standard algorithms are already FIPS compliant."/>
<rsb:set attr="lang.ftpPartner_chkForceFIPSCompliance" value="Enforce FIPS compliant algorithms"/>
<rsb:set attr="lang.ftpPartnerTitle_SSLClientAuthentication" value="SSL Client Authentication*"/>
<rsb:set attr="lang.ftpPartner_SSLClientAuthenticationInfo" value="These fields are optional, and only need to be set if your trading partner requires SSL client authentication."/>
<rsb:set attr="lang.ftpPartner_privateCertificate" value="Private Certificate:"/>
<rsb:set attr="lang.ftpPartner_certificatePassword" value="Certificate Password:"/>
<rsb:set attr="lang.ftpPartnerTitle_otherSettings" value="Other Settings"/>
<rsb:set attr="lang.ftpPartner_otherSettingsInfo" value="Below are other advanced settings for the application."/>
<rsb:set attr="lang.ftpPartner_notSpecified" value="Not Specified"/>

<!-- view/sftpPartner.rst -->
<rsb:set attr="lang.sftpPartner_remoteHost" value="Remote Host:"/>
<rsb:set attr="lang.sftpPartner_port" value="Port:"/>
<rsb:set attr="lang.sftpPartnerTitle_clientAuthentication" value="Client Authentication"/>
<rsb:set attr="lang.sftpPartner_authenticationMode" value="Authentication Mode:"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_password" value="Password"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_publicKey" value="Public Key"/>
<rsb:set attr="lang.sftpPartner_authenticationMode_multipleFactor" value="Multiple Factor"/>
<rsb:set attr="lang.sftpPartner_user" value="User:"/>
<rsb:set attr="lang.sftpPartner_password" value="Password:"/>
<rsb:set attr="lang.sftpPartner_SSHPublicKeyInfo" value="If authenticating via public key or multifactor authentication, you can set your private key for authentication here."/>
<rsb:set attr="lang.sftpPartner_privateCertificate" value="Private Certificate:"/>
<rsb:set attr="lang.sftpPartner_certificatePassword" value="Certificate Password:"/>
<rsb:set attr="lang.sftpPartnerTitle_serverAuthentication" value="Server Authentication"/>
<rsb:set attr="lang.sftpPartner_serverAuthenticationInfo" value="This field is used to set the public key of the SFTP server you are connecting to. You can set this to the entire public key, a thumbprint of the public key (Ex: 27:23:82:5c:07:64:6c:bd:b6:d1:ae:0e:64:09:7c:f4), or use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.sftpPartner_serverPublicKey" value="Server Public Certificate:"/>

<!-- view/oftpPartner.rst -->
<rsb:set attr="lang.oftpPartner_version" value="Version:"/>
<rsb:set attr="lang.oftpPartner_clientSSID" value="My ODETTE Identifier:"/>
<rsb:set attr="lang.oftpPartner_clientPassword" value="My Password:"/>
<rsb:set attr="lang.oftpPartner_serverSSID" value="Partner ODETTE Identifier:"/>
<rsb:set attr="lang.oftpPartner_serverPassword" value="Partner Password:"/>
<rsb:set attr="lang.oftpPartnerTitle_connectionInfo" value="Connection Info"/>
<rsb:set attr="lang.oftpPartner_connectionInfo" value="These connection settings are only available in version 2.0 and above of the OFTP protocol."/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat" value="Virtual File Format:"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormatInfo" value="If Virtual File Security or Compression are enabled for this partner, the Virtual File Format will automatically become Unstructured during transmission."/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_unstructured" value="Unstructured"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_text" value="Text"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_fixed" value="Fixed"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_variable" value="Variable"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity" value="Virtual File Security:"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_signOutgoing" value="Sign Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_encryptOutgoing" value="Encrypt Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_compression" value="Compression:"/>
<rsb:set attr="lang.oftpPartner_compression_compressOutgoing" value="Compress Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_chkUseSSL" value="Use SSL to access the partner's remote host"/>
<rsb:set attr="lang.oftpPartner_secureAuthInfo" value="The secure authentication consists of encrypting and decrypting data sent to and from the server, and verifying that this occurred successfully.  Secure authentication may be performed in plaintext or SSL mode, and both a signing and encryption certificate must be specified to perform secure authentication."/>
<rsb:set attr="lang.oftpPartner_chkSecureAuthentication" value="Secure Odette Authentication"/>
<rsb:set attr="lang.oftpPartner_signedReceiptInfo" value="When sending a file to a trading partner, set this to true if the file receipt should be signed by the server. When this receipt is received by the application, it will be verified during processing."/>
<rsb:set attr="lang.oftpPartner_chkSignedReceipt" value="Request Signed Receipts"/>
<rsb:set attr="lang.oftpPartner_maxRecordSize" value="Max Record Size:"/>
<rsb:set attr="lang.oftpPartner_maxRecordSize_tips" value="This specifies the maximum length for a record in the outgoing virtual file when sending to your trading partner. This value is only used when the virtual file format is Fixed or Variable. The maximum value for this setting is 99999."/>
<rsb:set attr="lang.oftpPartnerTitle_tradingPartnerCertificates" value="Trading Partner Certificates (PEM/CER Format)"/>
<rsb:set attr="lang.oftpPartner_tradingPartnerCertificatesInfo" value="Certificates are required to verify signatures and encrypt outgoing communications with your trading partner. Your partner may choose to use different certificates for different purposes, or the same certificate for everything."/>
<rsb:set attr="lang.oftpPartner_encryptionCertificate" value="Data Encryption Certificate:"/>
<rsb:set attr="lang.oftpPartner_encryptionCertificateInfo" value="This certificate will be used for all security options except SSL. If your trading partner requires multiple certificates for various security options, those can be configured in the Advanced tab for this trading partner."/>
<rsb:set attr="lang.oftpPartner_authChallengeCertificate" value="Auth Challenge Certificate:"/>
<rsb:set attr="lang.oftpPartner_verificationCertificate" value="Data Verification Certificate:"/>
<rsb:set attr="lang.oftpPartner_receiptVerificationCertificate" value="Receipt Verification Certificate:"/>
<rsb:set attr="lang.oftpPartner_tradingSSLInfo" value="This field is optional, and only needs to be set if your trading partner has an SSL URL. Use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.oftpPartner_SSLServerCertificate" value="SSL Server Certificate:"/>
<rsb:set attr="lang.oftpPartner_routing" value="Routing"/>
<rsb:set attr="lang.oftpPartner_routingInfo" value="This setting is used when sending files to a trading partner that must be accessed via a gateway because a direct connection to the partner is not available. Specify the partner through which outgoing messages will be routed."/>
<rsb:set attr="lang.oftpPartner_useRouting" value="Use routing to access destination partner."/>
<rsb:set attr="lang.oftpPartner_routingGatewayPartner" value="Routing Partner:"/>
<rsb:set attr="lang.oftpPartner_matchPattern" value="Automatic Certificate Identification:"/>
<rsb:set attr="lang.oftpPartner_matchPatternDesc" value="This setting should be used to automatically configure received certificates from your trading partner. There are four fields the application can use to identify a certificate's usage : subject, issuer, usage, extusage. Multiple fields should be separated by a semi-colon. For example: 'subject=oftpconnector;issuer=rssbus;usage=Digital Signature;extusage=*'"/>
<rsb:set attr="lang.oftpPartner_alternateLocalProfileInfo" value="You may configure an alternate local ODETTE Identifier and/or Private Key Certificate to use for this trading partner.  This will allow you send transmissions to the same trading partner from multiple identities and/or specific a unique private key certificate to use for this partner.  These will override the ODETTE Identifier and/or Personal Certificate set in the setup tab of the application."/>

<!-- view/s3Partner.rst -->
<rsb:set attr="lang.connections" value="Connections"/>
<rsb:set attr="lang.self_organizationName" value="Connection Name:"/>
<rsb:set attr="lang.s3PartnerTitle_UseSSL" value="Use SSL when connecting with Amazon S3 servers"/>
<rsb:set attr="lang.s3PartnerTitle_UseSSLInfo" value="Use this property to determine whether the bean uses SSL to connect with Amazon S3 servers."/>
<rsb:set attr="lang.s3Partner_SSLAcceptCertInfo" value="This field only needs to be set if the S3 server certificate is not already trusted in your system store. Use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.s3PartnerTitle_Encryption" value="Encryption"/>
<rsb:set attr="lang.s3PartnerTitle_EncryptionInfo" value="When the password is set to an empty string, the application will encrypt and/or decrypt the object when uploading and/or downloading from the S3 server. The application uses an AES encryption algorithm using 256 bit keys. The application does not control determining which objects have and have not been encrypted, so all objects will assumed to be encrypted during downloads. NOTE: This is not part of the S3 protocol and other utilities may not be able to read these objects."/>
<rsb:set attr="lang.s3Partner_EncryptionPassword" value="Encryption Password:"/>
<rsb:set attr="lang.gsPartnerTitle_UseSSL" value="Use SSL when connecting with Google Storage servers"/>
<rsb:set attr="lang.gsPartnerTitle_UseSSLInfo" value="Use this property to determine whether the bean uses SSL to connect with Google Storage servers."/>
<rsb:set attr="lang.gsPartner_SSLAcceptCertInfo" value="This field only needs to be set if the Google Storage server certificate is not already trusted in your system store. Use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.gsPartnerTitle_Encryption" value="Encryption"/>
<rsb:set attr="lang.gsPartnerTitle_EncryptionInfo" value="When the password is set to an empty string, the application will encrypt and/or decrypt the object when uploading and/or downloading from the S3 server. The application uses an AES encryption algorithm using 256 bit keys. The application does not control determining which objects have and have not been encrypted, so all objects will assumed to be encrypted during downloads. NOTE: This is not part of the Google Storage protocol and other utilities may not be able to read these objects."/>
<rsb:set attr="lang.gsPartner_EncryptionPassword" value="Encryption Password:"/>

<!-- view/scpPratner.rst -->
<rsb:set attr="lang.scpPartner_serverAuthenticationInfo" value="This field is used to set the public key of the SCP server you are connecting to. You can set this to the entire public key, a thumbprint of the public key (Ex: 27:23:82:5c:07:64:6c:bd:b6:d1:ae:0e:64:09:7c:f4), or use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>


<!-- view/listPartners.rst -->
<rsb:set attr="lang.listPartners_upgradelicense" value="The current license for this application has reached the maximum amount of allowed [tmp.trading_partner] configurations. You must upgrade your license to add additional [tmp.trading_partner] configurations."/>
<rsb:set attr="lang.listPartners_addPartner" value="Add [tmp.cap_partner]..."/>
<rsb:set attr="lang.listPartners_deleteConfirm" value="Are you sure you want to delete the [tmp.partner] &amp;quot;{0}&amp;quot;?\\r\\n\\r\\nWARNING: Removing this [tmp.partner] will also remove all data associated with this [tmp.partner] from disk. Please backup any required files before removing the [tmp.partner]."/>

<!-- Table Common -->
<rsb:set attr="lang.table_refresh" value="Refresh"/>
<rsb:set attr="lang.table_delete" value="Delete"/>
<rsb:set attr="lang.table_exportExcel" value=" Export to Excel"/>
<rsb:set attr="lang.table_dateTime" value="Date/Time"/>
<rsb:set attr="lang.table_status" value="Status"/>
<rsb:set attr="lang.table_fileName" value="File Name"/>
<rsb:set attr="lang.table_fileSize" value="File Size"/>
<rsb:set attr="lang.table_logMessages" value="Log Messages"/>
<rsb:set attr="lang.table_creationTime" value="Creation Time"/>
<rsb:set attr="lang.table_logType" value="Log Type"/>
<rsb:set attr="lang.table_receiveInfo1" value="Incoming files will be received to the "/>
<rsb:set attr="lang.table_receiveInfo2" value="directory."/>
<rsb:set attr="lang.table_sendInfo1" value="Place files into the"/>
<rsb:set attr="lang.table_sendInfo2" value="directory to allow them to be sent."/>
<rsb:set attr="lang.table_automationInfo" value="You can send files from this directory automatically by configuring the Automation Settings for this partner."/>
<rsb:set attr="lang.table_createTestFiles" value=" Create Test Files"/>
<rsb:set attr="lang.table_send" value="Send"/>
<rsb:set attr="lang.table_restart" value="Restart"/>

<!-- view/oftpPartner.rst -->
<rsb:set attr="lang.oftpPartner_version" value="Version:"/>
<rsb:set attr="lang.oftpPartner_clientSSID" value="Client SSID:"/>
<rsb:set attr="lang.oftpPartner_clientPassword" value="Client Password:"/>
<rsb:set attr="lang.oftpPartner_serverSSID" value="Server SSID:"/>
<rsb:set attr="lang.oftpPartner_serverPassword" value="Server Password:"/>
<rsb:set attr="lang.oftpPartnerTitle_connectionInfo" value="Connection Info"/>
<rsb:set attr="lang.oftpPartner_connectionInfo" value="These connection settings are only available in version 2.0 and above of the OFTP protocol."/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat" value="Virtual File Format:"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_unstructured" value="Unstructured"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_text" value="Text"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_fixed" value="Fixed"/>
<rsb:set attr="lang.oftpPartner_virtualFileFormat_variable" value="Variable"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity" value="Virtual File Security:"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_signOutgoing" value="Sign Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_virtualFileSecurity_encryptOutgoing" value="Encrypt Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_compression" value="Compression:"/>
<rsb:set attr="lang.oftpPartner_compression_compressOutgoing" value="Compress Outgoing Data"/>
<rsb:set attr="lang.oftpPartner_chkUseSSL" value="Use SSL to access the partner's remote host"/>
<rsb:set attr="lang.oftpPartner_secureAuthInfo" value="The secure authentication consists of encrypting and decrypting data sent to and from the server, and verifying that this occurred successfully.  Secure authentication may be performed in plaintext or SSL mode, and both a signing and encryption certificate must be specified to perform secure authentication."/>
<rsb:set attr="lang.oftpPartner_chkSecureAuthentication" value="Secure Odette Authentication"/>
<rsb:set attr="lang.oftpPartner_signedReceiptInfo" value="When sending a file to a trading partner, set this to true if the file receipt should be signed by the server. When this receipt is received by the application, it will be verified during processing."/>
<rsb:set attr="lang.oftpPartner_chkSignedReceipt" value="Request Signed Receipts"/>
<rsb:set attr="lang.oftpPartnerTitle_tradingPartnerCertificates" value="Trading Partner Certificates (PEM/CER Format)"/>
<rsb:set attr="lang.oftpPartner_tradingPartnerCertificatesInfo" value="Certificates are required to verify signatures, encrypt outgoing communications. Your trading partner might choose to use different certificates for different purposes, or the same certificate for everything. These certificates are only used by version 2.0 of the OFTP specification."/>
<rsb:set attr="lang.oftpPartner_encryptionCertificate" value="Encryption Certificate:"/>
<rsb:set attr="lang.oftpPartner_verificationCertificate" value="Verification Certificate:"/>
<rsb:set attr="lang.oftpPartner_tradingSSLInfo" value="This field is optional, and only needs to be set if your trading partner has an SSL URL. Use &quot;*&quot; to accept any certificate presented by the server. If used improperly, this will create a security breach. Use it at your own risk."/>
<rsb:set attr="lang.oftpPartner_SSLServerCertificate" value="SSL Server Certificate:"/>

<!-- view/partner.rst -->
<rsb:set attr="lang.partner_createNewPartner" value="Create A New {0} [tmp.cap_partner]"/>
<rsb:set attr="lang.partner_advanced" value="Advanced"/>
<rsb:set attr="lang.partner_partnerType" value="Partner Type:&nbsp;"/>
<rsb:set attr="lang.partner_settings" value="Settings"/>
<rsb:set attr="lang.partner_outgoing" value="Outgoing"/>
<rsb:set attr="lang.partner_incoming" value="Incoming"/>
<rsb:set attr="lang.partner_noSelected" value="No partner selected.  Please select a partner from the table on the left."/>
<rsb:set attr="lang.partner_noPartner" value="Welcome to [site.appname]. Get started by adding a new [tmp.partner] using the link in the left column."/>

<!-- view/saveChanges.rst -->
<rsb:set attr="lang.saveChanges_showTips" value="Show Tips"/>
<rsb:set attr="lang.saveChanges_hideTips" value="Hide Tips"/>
<rsb:set attr="lang.saveChanges_saveChangesPaid" value="Save Changes*"/>
<rsb:set attr="lang.saveChanges_saveChanges" value="Save Changes"/>

<!-- view/sync.rst -->
<rsb:set attr="lang.sync_title" value="Sync Settings" />
<rsb:set attr="lang.sync_upload_model" value="Upload Sync Model:" />
<rsb:set attr="lang.sync_download_model" value="Download Sync Model:" />

<!-- view/self.rst -->
<rsb:set attr="lang.self" value="My Profile"/>
<rsb:set attr="lang.self2" value="Advanced Settings"/>
<rsb:set attr="lang.self_successSaved" value="Personal profile was successfully saved."/>
<rsb:set attr="lang.selfTitle_localSetup" value="Local Setup"/>
<rsb:set attr="lang.self_AS2Identifier" value="AS2 Identifier:"/>
<rsb:set attr="lang.self_emailAddress" value="Email Address:"/>
<rsb:set attr="lang.self_required" value="*Required to receive MDN receipts"/>
<rsb:set attr="lang.selfTitle_personalCertificate" value="Personal Certificate"/>
<rsb:set attr="lang.self_personalCertificateInfo" value="A certificate with a private key is required to sign outgoing messages and to decrypt incoming messages. This application accepts PKCS#12 certificates in a .pfx or .p12 format."/>
<rsb:set attr="lang.self_privateCertificate" value="Private Certificate:"/>
<rsb:set attr="lang.self_createCertificate" value="Create Certificate"/>
<rsb:set attr="lang.self_certificatePassword" value="Certificate Password:"/>
<rsb:set attr="lang.self_publicKeyInfo" value="A certificate with a public key matching the private key certificate configured above. Your partners will use this certificate to verify your signatures and encrypted messages for you. If you allow your partners to view your Public.rst page, this file will be published for your partners to download."/>
<rsb:set attr="lang.self_publicKey" value="Public Certificate:"/>
<rsb:set attr="lang.selfTitle_asynchronousReceipts" value="Asynchronous Receipts"/>
<rsb:set attr="lang.self_asynchronousReceiptsInfo" value="If you want to receive receipts asynchronously, you must specify the URL where they should be posted. By default the page <b>ReceiveMDN.rsb</b> in the current application is configured to receive asynchronous MDNs."/>
<rsb:set attr="lang.self_asynchronousMDNURL" value="Asynchronous MDN URL:"/>
<rsb:set attr="lang.selfTitle_applicationSettings" value="Application Settings"/>
<rsb:set attr="lang.self_applicationSettingsInfo" value="Incoming files are received on the &quot;ReceiveFile.rsb&quot; page. You will need to provide the following URL to your trading partner:"/>
<rsb:set attr="lang.self_receivingURL" value="Receiving URL (Plain):"/>
<rsb:set attr="lang.self_receivingURL_SSL" value="Receiving URL (SSL):"/>
<rsb:set attr="lang.self_SSL_unavailable" value="SSL is not available in the free version."/>
<rsb:set attr="lang.selfTitle_publicProfileSettings" value="Public Profile Settings"/>
<rsb:set attr="lang.self_publicProfileSettingsInfo" value="The AS2 Connector SE&trade; application includes a page where your trading partners can view your AS2 profile for configuration in their AS2 solution. If you publish this URL for your trading partners to see, provide them with the following URL, substituting the values with those of the server on which you are hosting the application."/>
<rsb:set attr="lang.self_publicUrl" value="Public URL:"/>
<rsb:set attr="lang.self_localUrl" value="Local URL:"/>
<rsb:set attr="lang.self_chkPublishProfile" value="Allow my partners to view my public profile at Public.rst"/>
<rsb:set attr="lang.selfTitle_allowedUsers" value="Access Control"/>
<rsb:set attr="lang.self_allowedUsersInfo" value="This is a list of users who have access to the application."/>
<rsb:set attr="lang.self_user" value="User"/>
<rsb:set attr="lang.self_accessLevel" value="Access Level"/>
<rsb:set attr="lang.self_nUser" value="User"/>
<rsb:set attr="lang.self_administrator" value="Administrator"/>
<rsb:set attr="lang.self_user" value="User"/>
<rsb:set attr="lang.self_addUser" value="Add User"/>
<rsb:set attr="lang.selfTitle_reliability" value="Reliability"/>
<rsb:set attr="lang.self_reliabilityInfo" value="This option ensures that each attempt to send a particular document will be processed using the same Message Id. This is important for partners who process messages based on their Id so that the same document is not processed twice. Note that this functionality only exists when the partner has automation enabled."/>
<rsb:set attr="lang.self_chkIsReliability" value="AS2 Reliability"/>
<rsb:set attr="lang.selfTitle_performance" value="Performance"/>
<rsb:set attr="lang.self_maxFilesInfo" value="This option allows you to increase the number of files that are sent each time the application polls a partner's outgoing directory (every 60 seconds) for files to be sent.  Use this configuration with caution, as it may decrease overall performance of your application."/>
<rsb:set attr="lang.self_maxFiles" value="Max Files Per Partner:"/>
<rsb:set attr="lang.self_maxThreadsInfo" value="This will increase the number of files the application can send simultaneously to one trading partner. Use this configuration with caution, as it may decrease overall performance of your application."/>
<rsb:set attr="lang.self_maxThreads" value="Max Threads Per Partner:"/>
<rsb:set attr="lang.selfTitle_advancedNotifications" value="Advanced Notifications"/>
<rsb:set attr="lang.self_advancedNotificationsInfo" value="The application will use these settings to send notifications to the administrator."/>
<rsb:set attr="lang.self_SMTPServer" value="SMTP Server:"/>
<rsb:set attr="lang.self_chkNotifyCertExpiry" value="Notify me by email 30 days before my certificate is about to expire"/>
<rsb:set attr="lang.self_chkEventLog" value="Write Error Messages to Application Event Log"/>
<rsb:set attr="lang.selfTitle_customHeaders" value="Custom Headers"/>
<rsb:set attr="lang.self_customHeadersInfo1" value="This section can be used to set custom headers that are not ordinarily required by AS2 standards (e.g. Subject, From, etc.)."/>
<rsb:set attr="lang.self_customHeadersInfo2" value="The following macros are supported in header values:"/>
<rsb:set attr="lang.self_customHeaders_name" value="Name"/>
<rsb:set attr="lang.self_customHeaders_value" value="Value"/>
<rsb:set attr="lang.self_addHeader" value="Add Header"/>
<rsb:set attr="lang.selfTitle_firewallSettings" value="Firewall Settings"/>
<rsb:set attr="lang.self_firewallType" value="Firewall Type:"/>
<rsb:set attr="lang.self_firewallHost" value="Firewall Host:"/>
<rsb:set attr="lang.self_firewallPort" value="Firewall Port:"/>
<rsb:set attr="lang.self_firewallUser" value="Firewall User:"/>
<rsb:set attr="lang.self_firewallPassword" value="Firewall Password:"/>
<rsb:set attr="lang.selfTitle_proxySettings" value="Proxy Settings"/>
<rsb:set attr="lang.self_proxyType" value="Proxy Type:"/>
<rsb:set attr="lang.self_proxyHost" value="Proxy Host:"/>
<rsb:set attr="lang.self_proxyPort" value="Proxy Port:"/>
<rsb:set attr="lang.self_proxyUser" value="Proxy User:"/>
<rsb:set attr="lang.self_proxyPassword" value="Proxy Password:"/>
<rsb:set attr="lang.self_proxyAuthScheme" value="Proxy Authentication Scheme:"/>
<rsb:set attr="lang.selfTitle_otherSettings" value="Other Settings"/>
<rsb:set attr="lang.self_otherSettings" value="Below are other advanced settings for the application."/>
<rsb:set attr="lang.self_notSpecified" value="[lang.as2Partner_notSpecified]"/>
<rsb:set attr="lang.self_not_available_free" value="*These features are not available in the FREE version.  Please click <a href='http://www.rssbus.com/order/' target='_blank'>here</a> for other licensing options."/>
<rsb:set attr="lang.self_not_available_popup" value="*This feature is not available in the FREE version. Would you like to go to the RSSBus website to learn about purchasing options?"/>
<rsb:set attr="lang.self_autoarchive" value="Auto-Archive Options"/>
<rsb:set attr="lang.self_autoarchive_desc" value="Reduce incoming and outgoing logs by moving old items to an archive folder. The application will archive logs older than the specified number of days."/>
<rsb:set attr="lang.self_autoarchive_log" value="Archive Logs (Days):"/>
<rsb:set attr="lang.self_s3AccountSettings" value="Amazon Account Settings"/>
<rsb:set attr="lang.self_gsAccountSettings" value="Google Storage Account Settings"/>
<rsb:set attr="lang.self_AccountAccessKey" value="Access Key:"/>
<rsb:set attr="lang.self_AccountSecretKey" value="Secret Key:"/>

<!-- view/listReceivedLogsTable.rst & listSentLogsTable.rst -->
<rsb:set attr="lang.listLogsTable_noFilesDownloaded" value="No files downloaded"/>
<rsb:set attr="lang.listLogsTable_All" value="All"/>
<rsb:set attr="lang.listLogsTable_Sent" value="Sent"/>
<rsb:set attr="lang.listLogsTable_Unsent" value="Unsent"/>
<rsb:set attr="lang.listLogsTable_SendError" value="Send Error"/>
<rsb:set attr="lang.listLogsTable_PendingMDN" value="Pending MDN"/>
<rsb:set attr="lang.listLogsTable_MDNError" value="MDN Error"/>
<rsb:set attr="lang.listLogsTable_Received" value="Received"/>
<rsb:set attr="lang.listLogsTable_ReceivedError" value="Received Error"/>
<rsb:set attr="lang.listLogsTable_PendingReceipt" value="Pending Receipt"/>

<!-- view/listReceivedLogsSubTable.rst & listSentLogsSubTable.rst -->
<rsb:set attr="lang.listLogsSubTable_Log" value="Log"/>
<rsb:set attr="lang.listLogsSubTable_Request" value="Request"/>
<rsb:set attr="lang.listLogsSubTable_MDN" value="MDN"/>
<rsb:set attr="lang.listLogsSubTable_Error" value="Error"/>
<rsb:set attr="lang.listLogsSubTable_Etag" value="Etag"/>
<rsb:set attr="lang.listLogsSubTable_Attachment" value="Attachment"/>
<rsb:set attr="lang.listLogsSubTable_AsyncLog" value="Async Log"/>
<rsb:set attr="lang.listLogsSubTable_AsyncMDN" value="Async MDN"/>
<rsb:set attr="lang.listLogsSubTable_AsyncError" value="Async Error"/>
<rsb:set attr="lang.listLogsSubTable_EERP" value="EERP Log"/>
<rsb:set attr="lang.listLogsSubTable_NERP" value="NERP Log"/>

<!-- pub/public.rst -->
<rsb:set attr="lang.publicTitle_partnerProfile" value="Partner Profile"/>
<rsb:set attr="lang.public_tradingPartnerInfo" value="Trading Partner Info"/>
<rsb:set attr="lang.public_as2Identifier" value="AS2 Identifier:"/>
<rsb:set attr="lang.public_partnerURL" value="Partner URL:"/>
<rsb:set attr="lang.public_asynchronousMDNURL" value="Asynchronous MDN URL:"/>
<rsb:set attr="lang.public_encryptionAlgorithm" value="Encryption Algorithm:"/>
<rsb:set attr="lang.public_signingAlgorithm" value="Signing Algorithm:"/>
<rsb:set attr="lang.public_publicCertificate" value="Public Certificate:"/>
<rsb:set attr="lang.public_download" value="Download"/>
<rsb:set attr="lang.public_unpublished" value="Unpublished"/>
<rsb:set attr="lang.public_unpublishedInfo" value="The profile settings for this partner are unpublished."/>
<rsb:set attr="lang.publicTitle_as2connector" value="RSSBus AS2 Connector SE&trade;"/>
<rsb:set attr="lang.public_as2connectorInfo1" value="The RSSBus AS2 Connector SE&trade; application is a Drummond&trade; certified application for sending and receiving files via AS2, the leading standard for secure Internet EDI communications."/>
<rsb:set attr="lang.public_as2connectorInfo2" value="The RSSBus AS2 Connector SE&trade; application is FREE to use with a single trading partner. There are absolutely no extra fees or annual maintenance requirements for using this application with a SINGLE trading partner."/>
<rsb:set attr="lang.public_as2connectorInfo3" value="For more information or to download our FREE version, please visit our website at"/>

<!-- as2SendFile.rsb & as2RestartFile.rsb & ftpSendFile.rsb & sftpSendFile.rsb & oftpSendFile.rsb -->
<rsb:set attr="lang.ex_category1" value="Other"/>
<rsb:set attr="lang.ex_category2" value="Connectivity"/>
<rsb:set attr="lang.ex_category3" value="Configuration"/>
<rsb:set attr="lang.ex_generalmsg1" value="HTTP Error"/>
<rsb:set attr="lang.ex_generalmsg2" value="The receipt signature could not be verified"/>
<rsb:set attr="lang.ex_generalmsg3" value="MDN Error"/>
<rsb:set attr="lang.ex_generalmsg4" value="MDN Error: Unexpected processing error"/>
<rsb:set attr="lang.ex_generalmsg5" value="MDN Error: Insufficient Message Security"/>
<rsb:set attr="lang.ex_generalmsg6" value="MDN Delivery Error"/>
<rsb:set attr="lang.ex_generalmsg7" value="Unknown AS2 Identifier"/>
<rsb:set attr="lang.ex_specificmsg1" value="404 Not Found"/>
<rsb:set attr="lang.ex_specificmsg2" value="Decryption Failed"/>
<rsb:set attr="lang.ex_specificmsg3" value="Signature Authentication Failed: Could not authenticate signer's identity"/>
<rsb:set attr="lang.ex_specificmsg4" value="Signature Verification Failed: Could not verify content integrity"/>
<rsb:set attr="lang.ex_tip1" value="A tip for this description has not been found. Please contact support@rssbus.com for more details"/>
<rsb:set attr="lang.ex_tip151" value="The URL that you are using cannot be found. Please confirm the URL with your trading partner."/>
<rsb:set attr="lang.ex_tip531" value="This error message can occur when a signed receipt is requested from your trading partner, but the reply that was received was not a signed MDN. In most cases, the response is not an MDN receipt at all, but usually a server error. Please take a look at the .MDN log for this transmission to see the server response, which may provide additional details."/>
<rsb:set attr="lang.ex_tip532" value="The signature in the MDN receipt could not be verified. Please make sure that the public key that you have configured for your trading partner for signing is correct."/>
<rsb:set attr="lang.ex_tip611" value="The error condition listed here is one that is encountered by your trading partner's software. Your trading partner was unable to decrypt the message that was sent encrypted with their public key certificate. Make sure that you have the correct public key configured for your trading partner in the Trading Partner Certificate - Encryption section of the Trading Partner tab."/>
<rsb:set attr="lang.ex_tip612" value="The error condition listed here is one that is encountered by your trading partner's software. Your trading partner could not authenticate your identity in the signature in the transmission you sent them. Please make sure that they are using the correct public key for you, and that this key corresponds to the .pfx file configured in the setup tab of the application."/>
<rsb:set attr="lang.ex_tip613" value="The error condition listed here is one that is encountered by your trading partner's software. Your trading partner could not verify the signature in the transmission you sent them. Please make sure that they are using the correct public key for you, and that this key corresponds to the .pfx file configured in the setup tab of the application."/>
<rsb:set attr="lang.ex_tip614" value="Your trading partner has encountered an unexpected processing error. The Specific Error will contain the human readable MDN contents, and may indicate what occurred."/>
<rsb:set attr="lang.ex_tip615" value="Your trading partner rejected the message because the required security parameters were not met. Either the message was not signed when signing was required, not encrypted when encryption was required, or both."/>
<rsb:set attr="lang.ex_tip712" value="You were unable to decrypt the message sent by your trading partner. Please make sure that your trading partner has the correct public key configured for you, and that this key corresponds to the .pfx file configured in the Setup tab of the application."/>
<rsb:set attr="lang.ex_tip731" value="You were unable to authenticate the identity of the signer in the transmission your trading partner sent you. Please make sure that the public key that you have configured for your trading partner for signing is correct."/>
<rsb:set attr="lang.ex_tip732" value="You were unable to verify the signature in the transmission your trading partner sent you. Please make sure that the public key that you have configured for your trading partner for signing is correct."/>
<rsb:set attr="lang.ex_tip762" value="You were unable to return an asynchronous MDN receipt to the URL specified in your trading partner's request. This may indicate that the sender specified an incorrect URL, a firewall or proxy issue is preventing the successful delivery of the receipt, or that your trading partners server is temporarily down. The specific error will contain more details."/>
<rsb:set attr="lang.ex_tip999" value="The AS2 Identifier that the trading partner is sending to does not match your own. Check the specific description for the AS2 Identifier that your partner has configured for you. Remember that AS2 Identifiers are case sensitive."/>
<rsb:set attr="lang.ex_tip10060" value="This error indicates that a network connection could not be established to your trading partner's URL. This could be an indication that the URL is incorrect, or that a firewall on either your network or your partner's is blocking access to that port. Check with your trading partner to make sure that URL is accessible from your IP address and with your network administrator to make sure outbound connections to that address are allowed."/>
<rsb:set attr="lang.ex_tip32000" value="This error indicates that a network connection could not be established to your trading partner's URL. This could be an indication that the URL is incorrect, or that a firewall on either your network or your partner's is blocking access to that port. Check with your trading partner to make sure that URL is accessible from your IP address and with your network administrator to make sure outbound connections to that address are allowed."/>

<!-- priv/ftpReceiveFile.rsb & sftpReceiveFile.rsb & oftpReceiveFile.rsb & otherReceiveFile.rsb -->
<rsb:set attr="lang.ftpReceive_successful" value="Transmission Successful."/>




