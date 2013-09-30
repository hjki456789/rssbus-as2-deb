AS2Portal
=========

RSSBus AS2 Web Application with Debian packager.

###Minimum System Requirements and Dependencies###
* Debian GNU/Linux 7
* JDK >= 1.7
* Git
  * http://git-scm.com/
* Apache Maven 3.0.3 +
  * http://maven.apache.org
* Apache Tomcat 7
  * http://tomcat.apache.org/

###Web Application Description###
* AS2 Connector (Cross-Platform Unix/Linux/Java Setup) V3
* Version: 3.2.4961
* URL: http://www.rssbus.com/solutions/as2/default.aspx

###JDeb Plugin Description###
* This library provides an Ant task and a Maven plugin to create Debian packagesfrom Java builds in a truly cross platform manner. 
* Version: 1.0
* URL: https://github.com/tcurdt/jdeb

###Build and Install###

You will need to install the application with tomcat7 and add a tomcat user with roles specified in the documentation.

Something like this in **tomcat-users.xml** will do:
~~~
  <user username="admin" password="admin" roles="rssbus_appuser,rssbus_admin,admin-gui,
  manager-gui,manager-status,manager-script,manager-jmx" />
~~~

To install run:
~~~
$ mvn clean install
$ sudo dpkg -i target/as2portal_0.0.1+SNAPSHOT_all.deb
~~~
If tomcat7 was not installed on the system before running these commands:
~~~
$ sudo apt-get -f install
~~~
You can then access the portal at http://hostname:port.
