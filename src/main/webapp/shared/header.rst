<rsb:include file="view/loadLanguage.rst"/>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
    <rsb:exists item="pg">
      <rsb:else>
        <rsb:set item="pg"/>
      </rsb:else>
    </rsb:exists>
    
    <rsb:check attr="pg.title">
      <title>[pg.title]</title>
      <rsb:else>
        <title>RSSBus [pg.appname | def('Applications')]</title>
      </rsb:else>
    </rsb:check>
    
    <!--css-->
    <link type="text/css" href="[pg.level | def('../')]shared/css/app.css?#[site.buildno | def]" rel="stylesheet" />

    <!--external javascript-->
    <script type="text/javascript" src="[pg.level | def('../')]shared/js/jquery-1.8.3.min.js?#[site.buildno | def]"></script>
    <script type="text/javascript" src="[pg.level | def('../')]shared/js/hashchange.min.js?#[site.buildno | def]"></script>
    <script type="text/javascript" src="[pg.level | def('../')]shared/js/app.js?#[site.buildno | def]"></script>
    
    &lt;!--\[if lte IE 6\]&gt;
    <script type="text/javascript" src="[pg.level | def('../')]shared/js/ie6-png.min.js?#[site.buildno | def]"></script>
    <script type="text/javascript">
      $(function() {
        DD_belatedPNG.fix('.trans');
      });
    </script>
    &lt;!\[endif\]--&gt;

    [pg.script | def('')]
    
    <style type="text/css">
      [lang.customCSS | def('')]
    </style>
    
    <rsb:set attr="date.format" value="MM/dd/yy"/>
    
    <rsb:try>
      <rsb:check attr="_request.server:REMOTE_USER">
        <rsb:set attr="register.postdata" value=""/>
        <rsb:check attr="reg_name">
          <rsb:set attr="register.postdata" value="name=[reg_name]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_email">
          <rsb:set attr="register.postdata" value="[register.postdata]&email=[reg_email]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_phone">
          <rsb:set attr="register.postdata" value="[register.postdata]&phone=[reg_phone]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_title">
          <rsb:set attr="register.postdata" value="[register.postdata]&title=[reg_title]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_company">
          <rsb:set attr="register.postdata" value="[register.postdata]&company=[reg_company]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_address">
          <rsb:set attr="register.postdata" value="[register.postdata]&address=[reg_address]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_city">
          <rsb:set attr="register.postdata" value="[register.postdata]&city=[reg_city]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_state">
          <rsb:set attr="register.postdata" value="[register.postdata]&state=[reg_state]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_zip">
          <rsb:set attr="register.postdata" value="[register.postdata]&zip=[reg_zip]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        <rsb:check attr="reg_country">
          <rsb:set attr="register.postdata" value="[register.postdata]&country=[reg_country]"/>
          <rsb:else>
            <rsb:set attr="registererror" value="[lang.footer_register_error]"/>
          </rsb:else>
        </rsb:check>
        
        <rsb:check attr="registererror">
          <rsb:else>
            <rsb:set attr="register.url" value="http://www.rssbus.com/scripts/log.rsb"/>
            <rsb:set attr="register.proxy_auto" value="TRUE"/>
            <rsb:try>
              <rsb:call op="httpPost" in="register">
                <rsb:set attr="_profile.register_ask_global" value="REGISTERED"/>
              </rsb:call>
              <rsb:catch code="*">
                <rsb:set attr="_profile.register_ask_global" value="[register | now | dateadd('Month', '6') | todate('[tmp.format]')]"/>
              </rsb:catch>
            </rsb:try>
          </rsb:else>
        </rsb:check>
      </rsb:check>

      <rsb:check attr="notnow">
        <rsb:set attr="_session.register_ask" value="true"/>
      </rsb:check>
      
      <rsb:check attr="_session.register_ask">
        <rsb:else>
          <rsb:check attr="_profile.register_ask_global">
            <rsb:notequals attr="_profile.register_ask_global" value="REGISTERED">
              <rsb:match pattern="[_profile.register_ask_global | todate('file', '[date.format]') | datediff | lessthan('0') | tolower]" value="true">
                <script type="text/javascript">
                  $(function() {
                    popupWindow('#register');
                  });
                </script>
                <rsb:else>
                  <rsb:set attr="_session.register_ask" value="true"/>
                </rsb:else>
              </rsb:match>
            </rsb:notequals>
            <rsb:else>
              <rsb:set attr="_profile.register_ask_global" value="[register | now | dateadd('Day', '7') | todate('[date.format]')]"/>
              <rsb:set attr="_session.register_ask" value="true"/>
            </rsb:else>
          </rsb:check>
        </rsb:else>
      </rsb:check>
    
      <rsb:catch code="*"/>
    </rsb:try>
    
  </head>
  <body>
    <div id="wrapper">
      <!-- header -->
      <div id="header">
        <!-- logo -->
        <rsb:check attr="pg.appname">
          <h1 class="trans logo se"><a href="[pg.applink | def('default.rst')]">[pg.appname]</a></h1>
          <rsb:else>
            <h1 class="trans logo"><a href="[pg.applink | def('default.rst')]">RSSBus AppServer</a></h1>
          </rsb:else>
        </rsb:check>
        
        <rsb:check attr="_request.server:REMOTE_USER">
          <span class="logout">
            <script type="text/javascript">
              function popupoptions(){
                var mouse_is_inside = false;
                $('#useroptions').bind("mouseover mouseout", function(event) {
                  if (event.type == "mouseover")
                    mouse_is_inside = true;
                  else
                    mouse_is_inside = false;
                });
                
                $('body').bind("mouseup", function(event) {
                  if (!mouse_is_inside) {
                    $('#useroptions').addClass('hide');
                    $('#useroptions').unbind();
                    $('body').unbind('mouseup');
                  }
                });
                $('#useroptions').removeClass('hide');
              }
            </script>
            <a href="javascript:void(0);" onclick="javascript:popupoptions();">[lang.header_welcome] [_request.server:REMOTE_USER]!<span id="welsign">&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
            |
            <a href="[pg.level | def('../')]shared/default.rst">[lang.header_apps]</a>
          </span>
        </rsb:check>
      </div>
      
      <rsb:check attr="_request.server:REMOTE_USER">
        <div id="useroptions" class="portlet hide">
          <ul>
            <rsb:check attr="_request.server:AUTH_USER">
              <rsb:call op="../shared/priv/isAdmin.rsb">
                <rsb:equals attr="isadmin" value="true">
                  <li class="first">
                    <a href="../shared/users.rst">[lang.header_manageUsers]</a>
                  </li>
                  <li>
                    <a href="../shared/settings.rst">[lang.header_adminSettings]</a>
                  </li>
                </rsb:equals>
              </rsb:call>
            </rsb:check>
            <li>
              <a href="../shared/password.rst?returnurl=[_request.server:URL]">[lang.header_changePassword]</a>
            </li>
            <!--li>
              <a href="#">[lang.header_setLanguage] <span class="more">&raquo;</span></a>
              <form id="langSelectForm" method="POST">
                <input type="hidden" name="site_language" value=""/>
                <ul>
                  <rsb:set attr="langs.path" value="[site.langPath]"/>
                  <rsb:set attr="langs.mask" value="*.rst"/>
                  <rsb:call op="fileListDir" input="langs" output="out">
                    <rsb:set attr="langName" value="[out.name | replace('.rst', '')]"/>
                    
                    <rsb:set attr="tmp.first" value=""/>
                    <rsb:first>
                      <rsb:set attr="tmp.first" value="class='first'"/>
                    </rsb:first>
  
                    <rsb:equals attr="langName" value="[_session.site_language]">
                      <li [tmp.first] style="background: #EEE;">
                      <a href="#"><b>[langName]</b></a>
                      <rsb:else>
                        <li [tmp.first]>
                        <a href="javascript:void(0);" onclick="javascript:$('#langSelectForm input').val('[langName]');$('#langSelectForm').submit();">[langName]</a>
                      </rsb:else>
                    </rsb:equals>
                    </li>
                  </rsb:call>
                </ul>
              </form>
            </li-->
            <li>
              <a href="[pg.level | def('../')]shared/[site.logout_url]?action=logoff">[lang.header_signOut]</a>
            </li>
          </ul>
        </div>
      </rsb:check>
      
      <div id="container">
        