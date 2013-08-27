      </div>
      <div class="clr2">&nbsp;</div>
    </div>
    
    [pg.popup | def('')]
    
    <!-- Register -->
    <rsb:check attr="_request.server:REMOTE_USER">
      <div id="darkNight" class="trans"></div>
      <div id="register" class="popup">
        <h3 class="blue">[lang.footer_register_title]</h3>
        <rsb:check attr="registererror">
          <div class="error">
            [registererror]
          </div>
        </rsb:check>
        <div>
          <p>
            [lang.footer_register_description | replace("{0}", "[pg.appname | def('RSSBus AppServer')]")]
          </p>
        </div>
        <form id="registerForm" method="post">
          <div class="configInfo">
            <table width="96%">
              <colgroup>
                <col width="130px">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <td>[lang.footer_register_name]</td>
                  <td><input class="infoInput" name="reg_name" value="[reg_name | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_email]</td>
                  <td><input class="infoInput" name="reg_email" value="[reg_email | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_phone]</td>
                  <td><input class="infoInput" name="reg_phone" value="[reg_phone | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_job]</td>
                  <td><input class="infoInput" name="reg_title" value="[reg_title | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_company]</td>
                  <td><input class="infoInput" name="reg_company" value="[reg_company | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_address]</td>
                  <td><input class="infoInput" name="reg_address" value="[reg_address | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_city]</td>
                  <td><input class="infoInput" name="reg_city" value="[reg_city | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_state]</td>
                  <td><input class="infoInput short" name="reg_state" value="[reg_state | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_zip]</td>
                  <td><input class="infoInput short" name="reg_zip" value="[reg_zip | def('')]"></td>
                </tr>
                <tr>
                  <td>[lang.footer_register_country]</td>
                  <td>
                    <rsb:unset item="renderSelect" />
                    <rsb:set attr="renderSelect.options#" value="United States"/>
                    <rsb:set attr="renderSelect.options#" value="Afghanistan"/>
                    <rsb:set attr="renderSelect.options#" value="Albania"/>
                    <rsb:set attr="renderSelect.options#" value="American Samoa"/>
                    <rsb:set attr="renderSelect.options#" value="Andorra"/>
                    <rsb:set attr="renderSelect.options#" value="Angola"/>
                    <rsb:set attr="renderSelect.options#" value="Anguilla"/>
                    <rsb:set attr="renderSelect.options#" value="Antigua"/>
                    <rsb:set attr="renderSelect.options#" value="Argentina"/>
                    <rsb:set attr="renderSelect.options#" value="Armenia"/>
                    <rsb:set attr="renderSelect.options#" value="Aruba"/>
                    <rsb:set attr="renderSelect.options#" value="Australia"/>
                    <rsb:set attr="renderSelect.options#" value="Austria"/>
                    <rsb:set attr="renderSelect.options#" value="Azerbaijan"/>
                    <rsb:set attr="renderSelect.options#" value="Bahamas"/>
                    <rsb:set attr="renderSelect.options#" value="Bahrain"/>
                    <rsb:set attr="renderSelect.options#" value="Bangladesh"/>
                    <rsb:set attr="renderSelect.options#" value="Barbados"/>
                    <rsb:set attr="renderSelect.options#" value="Belarus"/>
                    <rsb:set attr="renderSelect.options#" value="Belgium"/>
                    <rsb:set attr="renderSelect.options#" value="Benin"/>
                    <rsb:set attr="renderSelect.options#" value="Bermuda"/>
                    <rsb:set attr="renderSelect.options#" value="Belize"/>
                    <rsb:set attr="renderSelect.options#" value="Bolivia"/>
                    <rsb:set attr="renderSelect.options#" value="Bosnia-Herzegovina"/>
                    <rsb:set attr="renderSelect.options#" value="Botswana"/>
                    <rsb:set attr="renderSelect.options#" value="Brazil"/>
                    <rsb:set attr="renderSelect.options#" value="British Virgin Is."/>
                    <rsb:set attr="renderSelect.options#" value="Brunei"/>
                    <rsb:set attr="renderSelect.options#" value="Bulgaria"/>
                    <rsb:set attr="renderSelect.options#" value="Burkina Faso"/>
                    <rsb:set attr="renderSelect.options#" value="Burundi"/>
                    <rsb:set attr="renderSelect.options#" value="Cambodia"/>
                    <rsb:set attr="renderSelect.options#" value="Cameroon"/>
                    <rsb:set attr="renderSelect.options#" value="Canada"/>
                    <rsb:set attr="renderSelect.options#" value="Cape Verde"/>
                    <rsb:set attr="renderSelect.options#" value="Chad"/>
                    <rsb:set attr="renderSelect.options#" value="Cayman Islands"/>
                    <rsb:set attr="renderSelect.options#" value="Chile"/>
                    <rsb:set attr="renderSelect.options#" value="China"/>
                    <rsb:set attr="renderSelect.options#" value="Colombia"/>
                    <rsb:set attr="renderSelect.options#" value="Congo"/>
                    <rsb:set attr="renderSelect.options#" value="Congo, Democratic Republic of"/>
                    <rsb:set attr="renderSelect.options#" value="Cook Islands"/>
                    <rsb:set attr="renderSelect.options#" value="Croatia"/>
                    <rsb:set attr="renderSelect.options#" value="Costa Rica"/>
                    <rsb:set attr="renderSelect.options#" value="Cyprus"/>
                    <rsb:set attr="renderSelect.options#" value="Czech Republic"/>
                    <rsb:set attr="renderSelect.options#" value="Denmark"/>
                    <rsb:set attr="renderSelect.options#" value="Djibouti"/>
                    <rsb:set attr="renderSelect.options#" value="Dominica"/>
                    <rsb:set attr="renderSelect.options#" value="Dominican Republic"/>
                    <rsb:set attr="renderSelect.options#" value="East Timor"/>
                    <rsb:set attr="renderSelect.options#" value="Ecuador"/>
                    <rsb:set attr="renderSelect.options#" value="Egypt"/>
                    <rsb:set attr="renderSelect.options#" value="El Salvador"/>
                    <rsb:set attr="renderSelect.options#" value="Equatorial Guinea"/>
                    <rsb:set attr="renderSelect.options#" value="Eritrea"/>
                    <rsb:set attr="renderSelect.options#" value="Estonia"/>
                    <rsb:set attr="renderSelect.options#" value="Ethiopia"/>
                    <rsb:set attr="renderSelect.options#" value="Faeroe Islands"/>
                    <rsb:set attr="renderSelect.options#" value="Fiji"/>
                    <rsb:set attr="renderSelect.options#" value="Finland"/>
                    <rsb:set attr="renderSelect.options#" value="France"/>
                    <rsb:set attr="renderSelect.options#" value="French Guiana"/>
                    <rsb:set attr="renderSelect.options#" value="French Polynesia"/>
                    <rsb:set attr="renderSelect.options#" value="Gabon"/>
                    <rsb:set attr="renderSelect.options#" value="Gambia"/>
                    <rsb:set attr="renderSelect.options#" value="Georgia"/>
                    <rsb:set attr="renderSelect.options#" value="Germany"/>
                    <rsb:set attr="renderSelect.options#" value="Ghana"/>
                    <rsb:set attr="renderSelect.options#" value="Gibraltar"/>
                    <rsb:set attr="renderSelect.options#" value="Greece"/>
                    <rsb:set attr="renderSelect.options#" value="Greenland"/>
                    <rsb:set attr="renderSelect.options#" value="Grenada"/>
                    <rsb:set attr="renderSelect.options#" value="Guadeloupe"/>
                    <rsb:set attr="renderSelect.options#" value="Guam"/>
                    <rsb:set attr="renderSelect.options#" value="Guatemala"/>
                    <rsb:set attr="renderSelect.options#" value="Guinea"/>
                    <rsb:set attr="renderSelect.options#" value="Guyana"/>
                    <rsb:set attr="renderSelect.options#" value="Haiti"/>
                    <rsb:set attr="renderSelect.options#" value="Honduras"/>
                    <rsb:set attr="renderSelect.options#" value="Hong Kong"/>
                    <rsb:set attr="renderSelect.options#" value="Hungary"/>
                    <rsb:set attr="renderSelect.options#" value="Iceland"/>
                    <rsb:set attr="renderSelect.options#" value="India"/>
                    <rsb:set attr="renderSelect.options#" value="Indonesia"/>
                    <rsb:set attr="renderSelect.options#" value="Iraq"/>
                    <rsb:set attr="renderSelect.options#" value="Ireland"/>
                    <rsb:set attr="renderSelect.options#" value="Israel"/>
                    <rsb:set attr="renderSelect.options#" value="Italy"/>
                    <rsb:set attr="renderSelect.options#" value="Ivory Coast"/>
                    <rsb:set attr="renderSelect.options#" value="Jamaica"/>
                    <rsb:set attr="renderSelect.options#" value="Japan"/>
                    <rsb:set attr="renderSelect.options#" value="Jordan"/>
                    <rsb:set attr="renderSelect.options#" value="Kazakhstan"/>
                    <rsb:set attr="renderSelect.options#" value="Kenya"/>
                    <rsb:set attr="renderSelect.options#" value="Kuwait"/>
                    <rsb:set attr="renderSelect.options#" value="Kyrgyzstan"/>
                    <rsb:set attr="renderSelect.options#" value="Laos"/>
                    <rsb:set attr="renderSelect.options#" value="Latvia"/>
                    <rsb:set attr="renderSelect.options#" value="Lebanon"/>
                    <rsb:set attr="renderSelect.options#" value="Lesotho"/>
                    <rsb:set attr="renderSelect.options#" value="Liberia"/>
                    <rsb:set attr="renderSelect.options#" value="Liechtenstein"/>
                    <rsb:set attr="renderSelect.options#" value="Lithuania"/>
                    <rsb:set attr="renderSelect.options#" value="Luxembourg"/>
                    <rsb:set attr="renderSelect.options#" value="Macau"/>
                    <rsb:set attr="renderSelect.options#" value="Macedonia"/>
                    <rsb:set attr="renderSelect.options#" value="Madagascar"/>
                    <rsb:set attr="renderSelect.options#" value="Malaysia"/>
                    <rsb:set attr="renderSelect.options#" value="Malawi"/>
                    <rsb:set attr="renderSelect.options#" value="Maldives"/>
                    <rsb:set attr="renderSelect.options#" value="Mali"/>
                    <rsb:set attr="renderSelect.options#" value="Malta"/>
                    <rsb:set attr="renderSelect.options#" value="Marshall Islands"/>
                    <rsb:set attr="renderSelect.options#" value="Martinique"/>
                    <rsb:set attr="renderSelect.options#" value="Mauritania"/>
                    <rsb:set attr="renderSelect.options#" value="Mauritius"/>
                    <rsb:set attr="renderSelect.options#" value="Mexico"/>
                    <rsb:set attr="renderSelect.options#" value="Micronesia"/>
                    <rsb:set attr="renderSelect.options#" value="Moldova"/>
                    <rsb:set attr="renderSelect.options#" value="Monaco"/>
                    <rsb:set attr="renderSelect.options#" value="Mongolia"/>
                    <rsb:set attr="renderSelect.options#" value="Montserrat"/>
                    <rsb:set attr="renderSelect.options#" value="Morocco"/>
                    <rsb:set attr="renderSelect.options#" value="Mozambique"/>
                    <rsb:set attr="renderSelect.options#" value="Namibia"/>
                    <rsb:set attr="renderSelect.options#" value="Nepal"/>
                    <rsb:set attr="renderSelect.options#" value="Netherlands"/>
                    <rsb:set attr="renderSelect.options#" value="Netherlands Antilles"/>
                    <rsb:set attr="renderSelect.options#" value="New Caledonia"/>
                    <rsb:set attr="renderSelect.options#" value="New Zealand"/>
                    <rsb:set attr="renderSelect.options#" value="Nicaragua"/>
                    <rsb:set attr="renderSelect.options#" value="Niger"/>
                    <rsb:set attr="renderSelect.options#" value="Nigeria"/>
                    <rsb:set attr="renderSelect.options#" value="Norway"/>
                    <rsb:set attr="renderSelect.options#" value="Oman"/>
                    <rsb:set attr="renderSelect.options#" value="Pakistan"/>
                    <rsb:set attr="renderSelect.options#" value="Paraguay"/>
                    <rsb:set attr="renderSelect.options#" value="Palau"/>
                    <rsb:set attr="renderSelect.options#" value="Palestine Autonomous"/>
                    <rsb:set attr="renderSelect.options#" value="Panama"/>
                    <rsb:set attr="renderSelect.options#" value="Papua New Guinea"/>
                    <rsb:set attr="renderSelect.options#" value="Peru"/>
                    <rsb:set attr="renderSelect.options#" value="Philippines"/>
                    <rsb:set attr="renderSelect.options#" value="Poland"/>
                    <rsb:set attr="renderSelect.options#" value="Portugal"/>
                    <rsb:set attr="renderSelect.options#" value="Puerto Rico"/>
                    <rsb:set attr="renderSelect.options#" value="Qatar"/>
                    <rsb:set attr="renderSelect.options#" value="Reunion"/>
                    <rsb:set attr="renderSelect.options#" value="Romania"/>
                    <rsb:set attr="renderSelect.options#" value="Russian Federation"/>
                    <rsb:set attr="renderSelect.options#" value="Rwanda"/>
                    <rsb:set attr="renderSelect.options#" value="Saipan"/>
                    <rsb:set attr="renderSelect.options#" value="Saudi Arabia"/>
                    <rsb:set attr="renderSelect.options#" value="Senegal"/>
                    <rsb:set attr="renderSelect.options#" value="Seychelles"/>
                    <rsb:set attr="renderSelect.options#" value="Singapore"/>
                    <rsb:set attr="renderSelect.options#" value="Slovak Republic"/>
                    <rsb:set attr="renderSelect.options#" value="Slovenia"/>
                    <rsb:set attr="renderSelect.options#" value="South Africa"/>
                    <rsb:set attr="renderSelect.options#" value="South Korea"/>
                    <rsb:set attr="renderSelect.options#" value="Spain"/>
                    <rsb:set attr="renderSelect.options#" value="Sri Lanka"/>
                    <rsb:set attr="renderSelect.options#" value="St Kitts/Nevis"/>
                    <rsb:set attr="renderSelect.options#" value="St Lucia"/>
                    <rsb:set attr="renderSelect.options#" value="St Vincent"/>
                    <rsb:set attr="renderSelect.options#" value="Suriname"/>
                    <rsb:set attr="renderSelect.options#" value="Swaziland"/>
                    <rsb:set attr="renderSelect.options#" value="Sweden"/>
                    <rsb:set attr="renderSelect.options#" value="Switzerland"/>
                    <rsb:set attr="renderSelect.options#" value="Syria"/>
                    <rsb:set attr="renderSelect.options#" value="Taiwan"/>
                    <rsb:set attr="renderSelect.options#" value="Tanzania"/>
                    <rsb:set attr="renderSelect.options#" value="Thailand"/>
                    <rsb:set attr="renderSelect.options#" value="Togo"/>
                    <rsb:set attr="renderSelect.options#" value="Trinidad/Tobago"/>
                    <rsb:set attr="renderSelect.options#" value="Tunisia"/>
                    <rsb:set attr="renderSelect.options#" value="Turkey"/>
                    <rsb:set attr="renderSelect.options#" value="Turkmenistan"/>
                    <rsb:set attr="renderSelect.options#" value="Turks &amp; Caicos"/>
                    <rsb:set attr="renderSelect.options#" value="U.A.E."/>
                    <rsb:set attr="renderSelect.options#" value="U.S. Virgin Islands"/>
                    <rsb:set attr="renderSelect.options#" value="Uganda"/>
                    <rsb:set attr="renderSelect.options#" value="Ukraine"/>
                    <rsb:set attr="renderSelect.options#" value="United Kingdom"/>
                    <rsb:set attr="renderSelect.options#" value="United States"/>
                    <rsb:set attr="renderSelect.options#" value="Uruguay"/>
                    <rsb:set attr="renderSelect.options#" value="Uzbekistan"/>
                    <rsb:set attr="renderSelect.options#" value="Vanuatu"/>
                    <rsb:set attr="renderSelect.options#" value="Vatican City"/>
                    <rsb:set attr="renderSelect.options#" value="Venezuela"/>
                    <rsb:set attr="renderSelect.options#" value="Vietnam"/>
                    <rsb:set attr="renderSelect.options#" value="Wallis &amp; Futuna"/>
                    <rsb:set attr="renderSelect.options#" value="Yemen"/>
                    <rsb:set attr="renderSelect.options#" value="Yugoslavia"/>
                    <rsb:set attr="renderSelect.options#" value="Zambia"/>
                    <rsb:set attr="renderSelect.options#" value="Zimbabwe"/>
                    
                    <rsb:map to="renderSelect" from="renderSelect" map="values=options" />
                    <rsb:set attr="renderSelect.name" value="reg_country" />
                    <rsb:set attr="renderSelect.selectedValue" value="[reg_country | def('United States')]" />
                    
                    <rsb:render template="[ui.input:dropdown]" in="renderSelect" onerror="clear" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="save">
            <span class="btn-input">
              <input type="submit" name="register" value="[lang.footer_register_register]" />
            </span>
            <span class="btn-input">
              <input type="submit" name="notnow" value="[lang.footer_register_not_now]" />
            </span>
          </div>
        </form>
      </div>
    </rsb:check>
    
    <!-- Rich footer -->
    <div id="richfooter">
      <div class="content"> 
        <div id="powerby"><a href="http://www.rssbus.com/" class="nounderline"><span id="logo-small" class="trans">&nbsp;</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>[lang.footer_integration]&trade;</i></div>
        <div id="copyright"><span>&copy;&nbsp;2013&nbsp;[lang.footer_copyright]</span></div>
      </div>
    </div>
  </body>
</html>