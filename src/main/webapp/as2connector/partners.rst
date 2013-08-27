<rsb:set attr="page.partners" value="selected"/>

<!--header-->
<rsb:include file='header.rst' />

<div class="xfluid">

  <!--call service to fetch self info-->
  <rsb:set attr="page.show" value="true"/>
  <rsb:try>
    <rsb:call op="[service.getSelf]">
      <rsb:set item='self' copyfrom='_out1'/>
    </rsb:call>
    <rsb:call op="[service.getLocalSettings]">
      <rsb:set item='local' copyfrom='_out1'/>
    </rsb:call>
    
    <script type="text/javascript">
      function clickPaid() {
        var answer = confirm ("[lang.self_not_available_popup]");
        if (answer)	
          window.open('http://www.rssbus.com/order/'); 
      }
    </script>

    <rsb:set attr="tmp.alert" value="onclick='javascript:clickPaid();'"/>
    <rsb:set attr="page.isPaid" value="[local.fa:errorcode | isless(1,'[tmp.alert]','')]" />
    <rsb:catch code="*">
      <div class="x11 abscenter">
        <rsb:include file='errorHTML.rst'/>
      </div>
      <rsb:set attr="page.show" value="false"/>
    </rsb:catch>
  </rsb:try>
  
  <!-- Add/Update Partner -->
  <rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
    <rsb:check attr="save">
      <!--Process password mask firstly-->
      <rsb:check attr="AddPartner">
        <rsb:set item='partner'/>
        <rsb:else>
          <rsb:call op="[service.getPartner]">
            <rsb:set item='partner' copyfrom='_out1'/>
          </rsb:call>
          <rsb:check value="[sslclientcertpwd | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="sslclientcertpwd" value="[partner.a2p:sslclientcertpwd | def('')]"/>
          </rsb:check>
          <rsb:check value="[alternatecertpassword | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="alternatecertpassword" value="[partner.a2p:alternatecertpassword | def('')]"/>
          </rsb:check>
          <!-- ftppassword: Ftp/Sftp Partner -->
          <rsb:check value="[ftppassword | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="ftppassword" value="[partner.a2p:ftppassword | def('')]"/>
          </rsb:check>
          <!-- sshclientcertpassword: Sftp Partner -->
          <rsb:check value="[sshclientcertpassword | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="sshclientcertpassword" value="[partner.a2p:sshclientcertpassword | def('')]"/>
          </rsb:check>
          <!-- clientpassword&serverpassword: Oftp Partner -->
          <rsb:check value="[clientpassword | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="clientpassword" value="[partner.a2p:clientpassword | def('')]"/>
          </rsb:check>
          <rsb:check value="[serverpassword | def('') | equals('[site.passwordMask]')]">
            <rsb:set attr="serverpassword" value="[partner.a2p:serverpassword | def('')]"/>
          </rsb:check>
        </rsb:else>
      </rsb:check>

      <!--verify private and public cert-->
      <rsb:check attr="sslclientcertfile">
        <rsb:set attr="sslclientcertfile" value="[sslclientcertfile | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[sslclientcertfile]"/>
        <rsb:set attr="tmpcert.password" value="[sslclientcertpwd | def('')]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='sslclientcertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:set attr='sslclientcertsubject' value='[sslclientcertinfo.fa:subject | def()]'/>      
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:check attr="alternatecert">
        <rsb:set attr="alternatecert" value="[alternatecert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[alternatecert]"/>
        <rsb:set attr="tmpcert.password" value="[alternatecertpassword | def('')]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='alternatecertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:set attr="alternatecertsubject" value="[alternatecertinfo.fa:subject | def('')]"/>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:check attr="sshclientcert">
        <rsb:set attr="sshclientcert" value="[sshclientcert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[sshclientcert]"/>
        <rsb:set attr="tmpcert.password" value="[sshclientcertpassword | def('')]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='sshclientcertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:set attr="sshclientcertsubject" value="[sshclientcertinfo.fa:subject | def('')]"/>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:check attr="encryptcert">
        <rsb:set attr="encryptcert" value="[encryptcert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[encryptcert]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='encryptcertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:check attr="signcert">
        <rsb:set attr="signcert" value="[signcert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[signcert]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='signcertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:check attr="sslacceptcert">
        <rsb:set attr="sslacceptcert" value="[sslacceptcert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[sslacceptcert]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='sslacceptcertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <!--verify ftp public cert-->
      <rsb:check attr="ftpsslservercert">
        <rsb:set attr="ftpsslservercert" value="[ftpsslservercert | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[ftpsslservercert]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='ftpsslservercertinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <!--verify sftp public cert-->
      <rsb:check attr="serverhostkey">
        <rsb:set attr="serverhostkey" value="[serverhostkey | replace('[site.profilesPath]', '')]"/>
        <rsb:set attr="tmpcert.store" value="[serverhostkey]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set item='serverhostkeyinfo' copyfrom='_out1'/>
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      
      <rsb:check attr="AddPartner">
        <rsb:set attr="as2identifier" value="[neworgname]"/>
      </rsb:check>

      <!-- handle localas2identifier changes -->
      <rsb:check attr="localas2identifier">
        <rsb:equals attr="localas2identifier" value="[partner.a2p:localas2identifier | def('')]">
          <rsb:notequals attr="neworgname" value="[as2identifier].[localas2identifier]">
            <rsb:set attr="neworgname" value="[as2identifier].[localas2identifier]"/>
          </rsb:notequals>

          <rsb:else>
            <rsb:check attr="partner.a2p:localas2identifier">
              <rsb:set attr="tmp.flength" value="[friendlyname | rfind(' - [partner.a2p:localas2identifier]')]"/>
              <rsb:set attr="tmp.nlength" value="[neworgname | rfind('.[partner.a2p:localas2identifier]')]"/>
              <rsb:set attr="friendlyname" value="[friendlyname | substring(0, [tmp.flength])]"/>
              <rsb:set attr="neworgname" value="[neworgname | substring(0, [tmp.nlength])]"/>
            </rsb:check>
            <rsb:set attr="friendlyname" value="[friendlyname] - [localas2identifier]"/>
            <rsb:set attr="neworgname" value="[neworgname].[localas2identifier]"/>
          </rsb:else>
        </rsb:equals>

        <rsb:else>
          <rsb:check attr="partner.a2p:localas2identifier">
            <rsb:set attr="tmp.flength" value="[friendlyname | rfind(' - [partner.a2p:localas2identifier]')]"/>
            <rsb:set attr="friendlyname" value="[friendlyname | substring(0, [tmp.flength])]"/>
          </rsb:check>

          <rsb:notequals attr="neworgname" value="[as2identifier]">
            <rsb:set attr="neworgname" value="[as2identifier]"/>
          </rsb:notequals>
        </rsb:else>
      </rsb:check>

      <!--handle postbacks, save partner info-->
      <rsb:check attr="AddPartner"> 
        <rsb:call op="[service.createPartner]">
          <rsb:set item='update' copyfrom='_out1'/>
        </rsb:call>
        <rsb:else>
          <rsb:notequals attr="partner.a2p:orgname" value="[neworgname]">
            <rsb:set attr="dirincoming" value=""/>
            <rsb:set attr="diroutgoing" value=""/>
          </rsb:notequals>
          <rsb:call op="[service.setPartner]">
            <rsb:set item='update' copyfrom='_out1'/>
          </rsb:call>
          <rsb:notequals attr="partner.a2p:orgname" value="[neworgname]">
            <rsb:set attr="deletePartner.orgname" value="[partner.a2p:orgname]" />
            <rsb:call op="[service.deletePartner]" input="deletePartner" />
          </rsb:notequals>
          <rsb:unset item="partner"/>
          <rsb:set attr="getPartner.orgname" value="[neworgname]"/>
          <rsb:call op="[service.getPartner]" input="getPartner">
            <rsb:set item='partner' copyfrom='_out1'/>
          </rsb:call>
        </rsb:else>
      </rsb:check>
      
      <rsb:check item="update" attr="a2p:orgname">
        <rsb:set attr="orgname" value="[update.a2p:orgname]"/>
        <rsb:set item="_session" attr="[site.supportPartnerType]currentpartner" value="[update.a2p:orgname]"/>
      </rsb:check>
    </rsb:check>
  </rsb:equals>

  <script type="text/javascript">
    function checkBeforeSave() {
      if(settings\['as2identifier'\]) {
        var oas2identifier = settings\['as2identifier'\];
        var olocalas2identifier = advanced\['localas2identifier'\];
        var nas2identifier = $("#infoForm input\[name=as2identifier\]").val();
        var nlocalas2identifier = $("#infoForm input\[name=localas2identifier\]").val();

        var oldid = olocalas2identifier ?  oas2identifier + "." + olocalas2identifier : oas2identifier;
        var newid = nlocalas2identifier ?  nas2identifier + "." + nlocalas2identifier : nas2identifier;

        if((oas2identifier == nas2identifier && olocalas2identifier == nlocalas2identifier)
          || confirm("[lang.checkBeforeSave]".replace(/\{0\}/g, oldid).replace(/\{1\}/g, newid)))
          $('#infoForm').submit();
      } else $('#infoForm').submit();
    }
  </script>
    
  <rsb:equals attr="page.show" value="true">
    <rsb:try>
    <!-- Left -->
    <div id="leftcolumn" class='portlet x3'>
      <div id="options">
        <h3 class="ca-header"><span class="ui-icon"></span><a>[lang.partners]</a></h3>
        <rsb:include file="[view.listPartners]" />
      </div>
    </div>

    <div id="contentwrapper" class='x9'>
      <rsb:try>
        <rsb:include file="[view.showPartner]" />
        <rsb:catch code="*">
          <rsb:include file='errorHTML.rst'/>
        </rsb:catch>
      </rsb:try>
    </div>
    
      <rsb:catch code="*">
        </div></div></ul>
        <div class="x11 abscenter">
          <rsb:include file='errorHTML.rst'/>
        </div>
      </rsb:catch>
    </rsb:try>
  </rsb:equals>
</div>

<!--footer-->
<rsb:include file='footer.rst' />
