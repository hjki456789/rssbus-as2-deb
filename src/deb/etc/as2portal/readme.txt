RSSBus AppServer Installation Instructions

This readme will provide instructions for installing the RSSBus Service-Enabled 
Apps on Java web servers. 

RSSBus Apps can be hosted in any Java servlet container. The installation package 
includes a .war file, which can be deployed to the Java web server. This document 
provides instructions for 5 of the most common Java servers (Tomcat, Jboss, WebSphere, 
WebLogic, and Jetty), but if you need assistance installing to a server not 
discussed here, please email support@rssbus.com and we will be happy to assist you.


*******************************
* Installing to Tomcat        *
*******************************

There are multiple ways you can deploy a war to Tomcat. You can explode the rssbus.war 
file and copy the expanded rssbus directory into the webapps folder, or you can deploy 
the war from within the management console in Tomcat. You can find more information 
about deploying war's through the management console in the Tomcat documentation for 
the version of Tomcat that you are using.

Note: Before installing to Tomcat, please make sure your Tomcat server has the option 
set to unpack wars (this option is enabled by default).

Next, you will need to grant your Tomcat user access to the RSSBus application(s) you 
are deploying.  

You can do this by assigning the roles of "rssbus_appuser" and "rssbus_admin" to the 
user you want as the application administrator of the RSSBus application.  If you're 
using the default user realm for Tomcat, you can add these roles by editing the 
tomcat-users.xml file located in '$CATALINA_BASE/conf/tomcat-users.xml'.  In this 
example, the "admin" user has been given the necessary roles for administrative access 
to RSSBus applications:

<user name="admin" password="admin" roles="rssbus_appuser,rssbus_admin,admin-gui,
  manager-gui,manager-status,manager-script,manager-jmx" />

For more information about roles, please see the inline documentation for security in 
the RSSBus administration console.

After configuring the user roles, you will need to restart your Tomcat server in order 
for the changes to take effect.

You are now ready to login to the RSSBus application. By default, all application data 
will be managed in a data directory created for the RSSBus applications in the 'WEB-INF' 
folder of the web application. If you would like to use a different directory, the first 
thing you will want to do after logging in is set the data directory for the RSSBus 
applications by clicking on the 'Welcome!' link on the top right of the page and 
selecting the option "Admin Settings".  You will then be redirected to a page where you 
can configure various administrator settings for your RSSBus applications, including 
the Data Directory. Choose a location outside of the web application where the RSSBus 
applications can store sensitive information relating to profile configuration.


*******************************
* Installing to JBoss         *
*******************************

There are multiple ways you can deploy a war to JBoss. You can manually unpack the 
rssbus.war to a directory named 'rssbus.war' in the '/server/default/deploy/' directory 
of JBoss, or you can use the JBoss Administration Console to install the war (be sure 
to select the Deploy Exploded option). 

Note: Explode the rssbus.war before deploying it, or the RSSBus AppServer will not be 
able to save your settings. In version 6, JBoss will not automatically deploy exploded 
war files. You must set an option or manually create an empty file named 
'rssbus.war.dodeploy' in the deploy directory for JBoss to deploy the web application.

Next, you will need to grant your JBoss user access to the RSSBus application(s) you are 
deploying. You can do this by assigning the roles of "rssbus_appuser" and "rssbus_admin" 
to the user you want as the application administrator of the RSSBus application.  If 
you're using the default user realm for JBoss, you can add these roles using the 
add-user.bat file which comes with the JBoss server.

You are now ready to login to the RSSBus application. By default, all application data 
will be managed in a data directory created for the RSSBus applications in the 'WEB-INF' 
folder of the web application. If you would like to use a different directory, the first 
thing you will want to do after logging in is set the data directory for the RSSBus 
applications by clicking on the 'Welcome!' link on the top right of the page and 
selecting the option "Admin Settings".  You will then be redirected to a page where you 
can configure various administrator settings for your RSSBus applications, including the 
Data Directory. Choose a location outside of the web application where the RSSBus 
applications can store sensitive information relating to profile configuration.


*******************************
* Installing to WebSphere     *
*******************************

In order to deploy the rssbus.war to WebSphere, you must first create a plan, because 
the RSSBus application(s) require specific user roles to be enabled in order to access 
the application. Create a plan which assigns the roles "rssbus_appuser" and 
"rssbus_admin" to the user or group that you would like to set up as the administrator 
of your RSSBus applications.  WebSphere has a wizard which helps you create a plan for 
a war located at 'Applications->Plan Creator'.  Here's an example of a plan created for 
the rssbus.war application:

    <web-app xmlns="http://geronimo.apache.org/xml/ns/j2ee/web-2.0.1">
      <dep:environment xmlns:dep="http://geronimo.apache.org/xml/ns/deployment-1.2">
        <dep:moduleId>
          <dep:groupId>default</dep:groupId>
          <dep:artifactId>rssbus</dep:artifactId>
          <dep:version>1371673558693</dep:version>
          <dep:type>war</dep:type>
        </dep:moduleId>
        <dep:dependencies/>
      </dep:environment>
      <context-root>rssbus</context-root>
      <security-realm-name>geronimo-admin</security-realm-name>
      <app:security xsi:type="sec:securityType" 
                    xmlns:sec="http://geronimo.apache.org/xml/ns/security-2.0" 
                    xmlns:app="http://geronimo.apache.org/xml/ns/j2ee/application-2.0" 
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <sec:role-mappings>
          <sec:role role-name="rssbus_admin">
            <sec:principal name="system" 
                           class="org.apache.geronimo.security.realm.providers.GeronimoUserPrincipal"/>
          </sec:role>
          <sec:role role-name="admin"/>
          <sec:role role-name="rssbus_appuser">
            <sec:principal name="system" 
                           class="org.apache.geronimo.security.realm.providers.GeronimoUserPrincipal"/>
          </sec:role>
          <sec:role role-name="appuser"/>
        </sec:role-mappings>
      </app:security>
    </web-app>

Once your plan is created, you can deploy the war along with the plan using the 
'Applications->Deployer' utility in WebSphere.

You are now ready to login to the RSSBus application. By default, all application data 
will be managed in a data directory created for the RSSBus applications in the 'WEB-INF' 
folder of the web application. If you would like to use a different directory, the first 
thing you will want to do after logging in is set the data directory for the RSSBus 
applications by clicking on the 'Welcome!' link on the top right of the page and 
selecting the option "Admin Settings".  You will then be redirected to a page where you 
can configure various administrator settings for your RSSBus applications, including the 
Data Directory. Choose a location outside of the web application where the RSSBus 
applications can store sensitive information relating to profile configuration.


*******************************
* Installing to WebLogic      *
*******************************

Unpack the rssbus.war to a directory named 'rssbus' to deploy the RSSBus AppServer to 
WebLogic. If you do not explode the war before deploying it to WebLogic, the RSSBus 
application will not function properly.

Once you have unpacked the rssbus.war, you are ready to deploy the application to your 
WebLogic server using the Deployment wizard in WebLogic. The wizard will prompt you to 
configure the security model for the application and to determine how you want to manage 
the RSSBus application's roles and policies. The roles and policies are defined in the 
RSSBus application, but you must map the roles to a user in your WebLogic server.  The 
recommended selection here is: 'Custom Roles: Use roles that are defined in the 
Administration Console; use policies that are defined in the deployment descriptor.'  
Selecting this option will allow you to manage the roles and users in WebLogic's 
administration console, while the policies definitions are found in the RSSBus AppServer 
application.

When the deployment is complete, you will need to configure the Administrator for your 
RSSBus application(s). The administrator will need to be given the roles "rssbus_appuser" 
and "rssbus_admin".  You can configure these roles by clicking on the 
'Security->Application Scope->Roles' tab for the rssbus application in the administration 
console of WebLogic. Here, you will need to add the two Web Application Scoped Roles and 
assign them to a user or group who will administer the RSSBus application(s).  For more 
information about roles, please see the inline help documentation on security in the 
RSSBus administration console. 

You are now ready to login to the RSSBus application. By default, all application data 
will be managed in a data directory created for the RSSBus applications in the 'WEB-INF' 
folder of the web application. If you would like to use a different directory, the first 
thing you will want to do after logging in is set the data directory for the RSSBus 
applications by clicking on the 'Welcome!' link on the top right of the page and 
selecting the option "Admin Settings".  You will then be redirected to a page where you 
can configure various administrator settings for your RSSBus applications, including the 
Data Directory. Choose a location outside of the web application where the RSSBus 
applications can store sensitive information relating to profile configuration.


*******************************
* Installing to Jetty         *
*******************************

Unpack the rssbus.war to a directory named 'rssbus' to deploy the RSSBus application(s) 
to Jetty.  If you do not explode the war before deploying to Jetty, the application will 
not function properly.

Configure the RSSBus application administrator before starting Jetty.  To do this, you 
will need to give your admin user(s) the roles "rssbus_admin" and "rssbus_appuser".  If 
you have not changed any of the default settings for your Jetty server, you can add 
these roles to the admin user by opening the file '%JETTY_HOME%/etc/realm.properties'.  
Here you can edit the user roles.  You will want to change the password for the admin 
user as well as add the roles "rssbus_admin" and "rssbus_appuser".  When you edit the 
admin user it should look something like this:

admin: test,server-administrator,content-administrator,admin,user,rssbus_admin,rssbus_appuser

In the above example, "test" has been configured as the password for the admin user and 
all of the values separated by commas after that are the admin user's roles.

A login service must be configured for the Java realm used by the RSSBus AppServer 
(RSSBusRealm).  See Jetty's documentation on configuring realms or you can edit the 
existing '%JETTY_HOME%/etc/test-realm.xml' configuration file that comes with Jetty if 
you have not changed the default settings of the Jetty server. To configure the 
LoginService for the 'RSSBusRealm', simply add the following to the 'Configure' section 
of the test-realm.xml file:

<Call name="addBean">
  <Arg>
    <New class="org.eclipse.jetty.security.HashLoginService">
      <Set name="name">RSSBusRealm</Set>
      <Set name="config"><Property name="jetty.home" default="."/>/etc/realm.properties</Set>
      <Set name="refreshInterval">0</Set>
    </New>
  </Arg>
</Call>

Once you have exploded the war, configured your admin user, and configured the login 
service for the 'RSSBusRealm', you can start the Jetty server.  You can then deploy the 
war by copying the exploded war directory into Jetty's 'webapps' folder.

You are now ready to login to the RSSBus application. By default, all application data 
will be managed in a data directory created for the RSSBus applications in the 'WEB-INF' 
folder of the web application. If you would like to use a different directory, the first 
thing you will want to do after logging in is set the data directory for the RSSBus 
applications by clicking on the 'Welcome!' link on the top right of the page and 
selecting the option "Admin Settings".  You will then be redirected to a page where you 
can configure various administrator settings for your RSSBus applications, including the 
Data Directory. Choose a location outside of the web application where the RSSBus 
applications can store sensitive information relating to profile configuration.



Thank You!

If you have any further questions, please check the inline help files for additional 
information, or contact us at support@rssbus.com. Your feedback is appreciated, and 
customer comments and suggestions are the most important drivers behind new features 
and improvements in our products.


RSSBus Apps - Copyright (c) 2013 RSSBus Inc. - All rights reserved. - For more 
information, please visit our website at www.rssbus.com.

