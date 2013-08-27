<rsb:set attr="pg.popup">
  <div id="darkNight" class="trans"></div>
  <!-- Files Upload -->
  <div id="uploadFiles" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#uploadFiles').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">Upload Files</h3>
    <div>
      <p>Select files to upload for sending, then press the Upload button.</p>
    </div>
    <div>
      <input type="hidden" id="orgname_id" value=""/>
      <form method="post" id="testfile" enctype="multipart/form-data">  
        <table class="ca-props">
          <colgroup>
            <col width="80px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>Upload files:</td>
              <td><input type="file" size="12" name="testfile"/><a class="addfileupload" href="javascript:void(0);" onclick="javascript:return addfileUpload();">\[+\]</a></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div class="save">
      <img class="hide" alt="Uploading..." src="../shared/img/loading2_20px.gif" style="vertical-align: middle;margin-right:2px;">
      <a class="btn" onclick="javascript:return filesUpload();" href="javascript:void(0);">
        <span>Upload</span>
      </a>
    </div>
  </div>
  <!-- Partner Type Chooser -->
  <div id ="partnerTypeChooser" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#partnerTypeChooser').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">Choose Partner Type</h3>
    <div>
      <p>Available types are: AS2, OFTP, FTP, SFTP.</p>
    </div>
    <div>
      <table class="ca-props">
        <colgroup>
          <col width="110px"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <td>Type:</td>
            <td>
              <rsb:unset item="renderSelect" />
              <rsb:set attr="renderSelect.options#" value="AS2"/>
              <rsb:set attr="renderSelect.options#" value="OFTP"/>
              <rsb:set attr="renderSelect.options#" value="FTP"/>
              <rsb:set attr="renderSelect.options#" value="SFTP"/>
              <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
              <rsb:set attr="renderSelect.name" value="partnertype" />
              <rsb:set attr="renderSelect.id" value="partnertype" />
              <rsb:set attr="renderSelect.other" value="class='infoInput'" />
              <rsb:set attr="renderSelect.selectedValue" value="AS2" />
              <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="save">
      <a class="btn" onclick="javascript:return partnerChooser();" href="javascript:void(0);">
        <span>Choose</span>
      </a>
    </div>
  </div>
  <!-- Cert Manager -->  
  <div id="addCertificate" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#addCertificate').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.popup_addCertificate]</h3>
    <div>
      <p>[lang.popup_addCertificateContent1]</p>
      <p>[lang.popup_addCertificateContent2]</p>
    </div>
    <div>
      <input type="hidden" id="certfile_id" value=""/>
      <form method="post" enctype="multipart/form-data">  
        <table class="ca-props">
          <colgroup>
            <col width="110px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>[lang.popup_addCertificateFile]</td>
              <td><input id="certfile" type="file" size="15" name="certfile"/></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div class="save">
      <a class="btn" onclick="javascript:return certUpload();" href="javascript:void(0);">
         <span>[lang.popup_addCertificateFileBtn]</span>
      </a>
    </div>
  </div>
  <!-- Cert Creater -->
  <div id="createCertificate" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#createCertificate').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.popup_createCertificate]</h3>
    <input type="hidden" id="createcert-priv" value=""/>
    <input type="hidden" id="createcert-priv-pwd" value=""/>
    <input type="hidden" id="createcert-pub" value=""/>
    <input type="hidden" id="createcert-url" value="[service.createCert | urlresolve]"/>
    <div id="createcert">
      <p>[lang.popup_createCertificateContent1]</p>
      <form id="createCert" method="post">
        <table class="ca-props">
          <colgroup>
            <col width="130px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>[lang.popup_createCertificateCommonname]</td>
              <td><input class="infoInput" name="commonname" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateOrganization]</td>
              <td><input class="infoInput" name="organization" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateFileName]</td>
              <td><input class="infoInput" value="test[site.supportPartnerType | tolower].pfx" name="filename" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateSerialNumber]</td>
              <td><input class="infoInput" name="serialnumber" value="1"/></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateSerialPassword]</td>
              <td><input class="infoInput" name="password" type="password"/></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateExpiration]</td>
              <td><input class="infoInput" name="expiration" value="5"/></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateKeySize]</td>
              <td>
                <rsb:unset item="renderSelect" />
                <rsb:set attr="renderSelect.options#" value="512"/>
                <rsb:set attr="renderSelect.options#" value="1024"/>
                <rsb:set attr="renderSelect.options#" value="2048"/>
                
                <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
                <rsb:set attr="renderSelect.name" value="keysize" />
                <rsb:set attr="renderSelect.id" value="keysize" />
                <rsb:set attr="renderSelect.other" value="class='infoInput'" />
                <rsb:set attr="renderSelect.selectedValue" value="1024" />
                
                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>[lang.popup_createCertificateContent2]</p>
        <table class="ca-props">
          <colgroup>
            <col width="130px"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <td>[lang.popup_createCertificateOrganizationalUnit]</td>
              <td><input class="infoInput" name="organizationalunit" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateLocality]</td>
              <td><input class="infoInput" name="locality" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateState]</td>
              <td><input class="infoInput" name="state" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateCountry]</td>
              <td><input class="infoInput" name="country" /></td>
            </tr>
            <tr>
              <td>[lang.popup_createCertificateEmail]</td>
              <td><input class="infoInput" name="email" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div class="save">
      <a class="btn" onclick="javascript:return certCreate('createcert');" href="javascript:void(0);">
        <span>[lang.popup_createCertificateBtn]</span>
      </a>
    </div>
  </div>
  <!--Partner Selector-->
  <div id="selectPartner" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#selectPartner').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.popup_selectPartner  | def('Select a Partner')]</h3>
    <div>
      <table id="partnerType" >
        <tbody>
          <rsb:enum list="[site.allPartnerTypes | def('')]" separator=",">
            <rsb:equals attr="_index" value="1">
              <rsb:set attr="initRadio" value="checked='checked'"/>
              <rsb:else>
                <rsb:set attr="initRadio" value=""/>
              </rsb:else>
            </rsb:equals>
            <tr>
              <td>
                <rsb:select attr="_value">
                  <rsb:case value="AS2">
                    <input type="radio" value="[_value]" name="partnerType" id="partnerType_[_index]" [initRadio | def('') ] />
                    <label for="partnerType_[_index]"><span class="translatable">[_value]</span></label>
                  </rsb:case>
                  <rsb:default>
                    <input type="radio" value="[_value]" name="partnerType" id="partnerType_[_index]" [initRadio | def('') ] />
                    <label for="partnerType_[_index]"><span class="translatable">[_value]</span></label>
                  </rsb:default>
                </rsb:select>
              </td>
            </tr>
          </rsb:enum>
        </tbody>
      </table>
    </div>
	<div class="save">
		<a class="btn" href="javascript:void(0);" onclick="javascript:$('#fmPartners-new input\[name=\'partnerType\'\]').val($('#partnerType input\[type=\'radio\'\]:checked').val());$('#fmPartners-new').submit();return false;" >
			<span>[lang.popup_selectPartnerContinue | def('Continue')]</span>
		</a>
	</div>
  </div>
  <!-- Could not acquire CSP Tip -->
  <div id="cspTip" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#cspTip').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.popup_cspTip]</h3>
    <div>[lang.popup_cspTipContent]</div>
    <div class="save">
      <a class="btn" href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#cspTip').hide(50);return false;" >
        <span>[lang.popup_cspTipBtn]</span>
      </a>
    </div>
  </div>
  <!-- Send/Restart/Delete Status -->
  <div id="actionStatus" class="popup">
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#actionStatus').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">[lang.popup_actionStatus]</h3>
    <div><img src="../shared/img/loading.gif" alt="Loading..."/><span><span id="actionStatusMsg"></span>[lang.popup_actionStatusMsg]</span></div>
  </div>
  <!-- Exchange Cert (OFTP) -->
  <div id="exchangeCert" class="popup">
    <input type="hidden" id="exchangeCert-url" value="[service.exchangeCert | def('') | urlresolve]"/>
	<rsb:exists item="partner">
      <input class="certInput" type="hidden" id="orgname" name="orgname" value="[partner.a2p:orgname | def('')]"/>
	</rsb:exists>
    <a href="javascript:void(0);" onclick="javascript:$('#darkNight').hide(50);$('#exchangeCert').hide(50);return false;" class="closeCM">x</a>
    <h3 class="blue">Exchange Certificate</h3>
    <div>
      <p>Please select the certificate to exchange.</p>
    </div>
    <div>
      <form method="post" enctype="multipart/form-data">  
        <table>
          <colgroup>
            <col width="110px"/>
            <col width="280px"/>
          </colgroup>
          <tbody>
            <tr>
              <td>Certificate:</td>
              <td>
                <rsb:unset item="renderSelect" />
                
                <rsb:check attr="self.a2p:publiccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:publiccert| filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:publiccert]"/>
                </rsb:check>
                
                <rsb:check attr="self.a2p:sslpubliccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:sslpubliccert | filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:sslpubliccert]"/>
                </rsb:check>
                
                <rsb:check attr="self.a2p:authchallengepubliccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:authchallengepubliccert | filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:authchallengepubliccert]"/>
                </rsb:check>
                
                <rsb:check attr="self.a2p:signpubliccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:signpubliccert | filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:signpubliccert]"/>
                </rsb:check>
                
                <rsb:check attr="self.a2p:receiptsignpubliccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:receiptsignpubliccert | filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:receiptsignpubliccert]"/>
                </rsb:check>
                
                <rsb:check attr="self.a2p:rolloverdecryptionpubliccert">
                  <rsb:set attr="renderSelect.options#" value="[self.a2p:rolloverdecryptionpubliccert | filename]"/>
                  <rsb:set attr="renderSelect.values#" value="[self.a2p:rolloverdecryptionpubliccert]"/>
                </rsb:check>
                
                
                <rsb:check attr="renderSelect.options#1">
                  <rsb:set attr="renderSelect.id" value="certificate" />
                  <rsb:set attr="renderSelect.name" value="certificate" />
                  <rsb:set attr="renderSelect.selectedValue" value="" />
                  <rsb:set attr="renderSelect.other" value="class='certInput'" />

                  <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
				  
                  <rsb:else>
                    No public certificates configured.
                  </rsb:else>
                </rsb:check>
              </td>
            </tr>
            <tr>
              <td>Exchange Type:</td>
              <td>
                <rsb:unset item="renderSelect" />
                
                <rsb:set attr="renderSelect.options#" value="Send Certificate"/>
                <rsb:set attr="renderSelect.values#" value="DELIVER"/>

                <rsb:set attr="renderSelect.options#" value="Request Certificate"/>
                <rsb:set attr="renderSelect.values#" value="REQUEST"/>

                <rsb:set attr="renderSelect.options#" value="Replace Certificate"/>
                <rsb:set attr="renderSelect.values#" value="REPLACE"/>

                <rsb:set attr="renderSelect.id" value="exchangetype" />
                <rsb:set attr="renderSelect.name" value="exchangetype" />
                <rsb:set attr="renderSelect.selectedValue" value="" />
                <rsb:set attr="renderSelect.other" value="class='certInput'" />

                <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <div class="save">
      <a class="btn" onclick="javascript:return certExchange('exchangeCert','[service.exchangeCert | def]');" href="javascript:void(0);">
         <span>Send Certificate</span>
      </a>
    </div>
  </div>
</rsb:set>
  <!-- Rich footer -->
  <rsb:include file="../shared/footer.rst"/>

