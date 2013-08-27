<rsb:include file="../config.rst"/>
<rsb:call op="[service.getSelf]">
  <rsb:set item='self' copyfrom='_out1'/>
</rsb:call>

<rsb:check value="[self.a2p:enablepublicprofile]">
  <rsb:check attr="download">
    <rsb:equals attr="download" value="cert">
      <rsb:set attr="file" value="[site.profilesPath | pathcombine([self.a2p:publiccert | filename])]"/>
      <rsb:set attr="fileName" value="[self.a2p:publiccert | filename]"/>            
      <rsb:include file="../view.rst"/>
      <rsb:break/>
    </rsb:equals>
  </rsb:check>
</rsb:check>

<rsb:set item="pg" attr="script">
  <link type="text/css" href="../css/app.css?#[app.buildno | def]" rel="stylesheet" />  
</rsb:set>
<rsb:set item="pg" attr="level" value="../../"/>
<rsb:set item="pg" attr="appname" value="AS2 Connector"/>
<rsb:set item="pg" attr="applink" value=""/>
<rsb:include file="../../shared/header.rst"/>

  <div id="container">
    <rsb:equals attr="self.a2p:enablepublicprofile" value="True" case="ignore">
      <rsb:call op="[service.getLocalSettings]">
        <rsb:set item='local' copyfrom='_out1'/>
      </rsb:call>
      <rsb:set attr="tmp.publicdomain" value="[_request.server:HTTP_HOST | split(':', '1')]"/>
      <rsb:set attr="tmp.publicdomain" value="[local.fa:publicdomain | def('[tmp.publicdomain]')]"/>
      <rsb:set attr="page.receiveurl" value="[site.as2ReceiveFile | tourl(false,'[tmp.publicdomain]')]" />
      <rsb:set attr="page.banner" value="[self.a2p:publicprofilebanner | def('')]" />
      <rsb:set attr="page.orgname" value="[self.a2p:orgname | htmlencode]" />
      <rsb:set attr="page.asyncmdnurl" value="[self.a2p:asyncmdnurl | def('')]" />
      <rsb:check item="self" attr="a2p:publiccert">
        <rsb:set attr="tmpcert.store" value="[self.a2p:publiccert]"/>
        <rsb:call op="[service.verifyCert]" input="tmpcert">
          <rsb:set attr="page.subject" value="[fa:subject | def('')]" />
          <rsb:set attr="page.download" value="public.rst?download=cert" />
        </rsb:call>
        <rsb:unset item="tmpcert"/>
      </rsb:check>
      <rsb:else>
        <rsb:set attr="page.receiveurl" value="[lang.public_unpublished]" />
        <rsb:set attr="page.banner" value="[lang.public_unpublishedInfo]" />
        <rsb:set attr="page.orgname" value="[lang.public_unpublished]" />
        <rsb:set attr="page.asyncmdnurl" value="[lang.public_unpublished]" />
        <rsb:set attr="page.subject" value="[lang.public_unpublished]" />
        <rsb:set attr="page.download" value="#" />
      </rsb:else>
    </rsb:equals>

    <div id="content">
      <h3 class="configInfo">[lang.publicTitle_partnerProfile]</h3>
      <div class="hline"></div>
      <div class="publicInfo">
        <pre><p>[page.banner]</p></pre>
        <table class="ca-params">
          <thead>
            <tr>
              <th colspan="2"><b><span>[lang.public_tradingPartnerInfo]</span></b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="right"><span>[lang.public_as2Identifier]</span></td>
              <td>
                [page.orgname]
              </td>
            </tr>
            <tr>
              <td align="right"><strong><span>[lang.public_partnerURL]</span></strong></td>
              <td>[page.receiveurl]</td>
            </tr>
            <tr>
              <td align="right">
                <strong><span>[lang.public_asynchronousMDNURL]</span></strong></td>
              <td>[page.asyncmdnurl]</td>
            </tr>
            <tr>
              <td align="right">
                [lang.public_encryptionAlgorithm] </td>
              <td><span disabled="disabled">
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" checked="checked" value="3DES" id="RadioButtonList1_0"/>
                  <label for="RadioButtonList1_0">3DES</label>
                </span>
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" value="RC2" id="RadioButtonList1_1"/>
                  <label for="RadioButtonList1_1">RC2</label>
                </span>
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" value="DES" id="RadioButtonList1_2"/>
                  <label for="RadioButtonList1_2">DES</label>
                </span>
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" value="AES" id="RadioButtonList1_3"/>
                  <label for="RadioButtonList1_3">AES</label>
                </span>
              </span></td>
            </tr>
            <tr>
              <td align="right"><strong>[lang.public_signingAlgorithm] </strong></td>
              <td><span disabled="disabled">
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" checked="checked" value="SHA1" id="RadioButtonList2_0"/>
                  <label for="RadioButtonList2_0">SHA1</label>
                </span>
                <span disabled="disabled">
                  <input type="radio" disabled="disabled" value="MD5" id="RadioButtonList2_1"/>
                  <label for="RadioButtonList2_1">MD5</label>
                </span>
              </span></td>
            </tr>
            <tr>
              <td align="right">
                <strong><span>[lang.public_publicCertificate]</span></strong></td>
              <td>
                [page.subject | def('')]
                \[<a href="[page.download | def('#')]"><span>[lang.public_download]</span></a>\]
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 class='configInfo'>[lang.publicTitle_as2connector]</h3>
      <div class="hline"></div>
      <div class="publicInfo">
        <img class="trans" alt="" hspace="80" src="../img/seal.png" align="right" />
        <p>
          <span>[lang.public_as2connectorInfo1]</span>
          <span>[lang.public_as2connectorInfo2]</span>
        </p>
        <p>
          <span>[lang.public_as2connectorInfo3]</span>
          <a href="http://www.freeas2.com" target="_blank">www.freeas2.com</a>.
        </p>
      </div>
    </div>
  </div>
<!--footer-->
<rsb:include file="../footer.rst"/>
