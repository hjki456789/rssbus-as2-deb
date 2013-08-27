<rsb:check attr="evt">
  <rsb:set attr="tmp.rInCount" value="0"/>
  <rsb:set attr="tmp.oInCount" value="0"/>
  <rsb:set attr="tmp.nsCount" value="0"/>
  <rsb:set attr="tmp.outCount" value="0"/>
  <rsb:set attr="tmp.noInfo" value=""/>
  <rsb:set attr="tmp.evtId" value="[site.eventsPath | pathcombine('[evt]')]"/>
  <rsb:set attr="info.id" value="[tmp.evtId]"/>
  <rsb:call op="../priv/getInfo.rsb" in="info">
    <rsb:check attr="rsb:emessage">
      <rsb:set attr="tmp.noInfo" value="true"/>
    </rsb:check>
    <rsb:check attr="type">
      <rsb:select value="[type]">
        <rsb:case match="exact" value="summary">
          <rsb:set attr="summary.description" value="[description]"/>
        </rsb:case>
        <rsb:case match="exact" value="input">
          <rsb:equals attr="required" value="true">
            <rsb:set attr="tmp.rInCount" value="[tmp.rInCount | add('1')]"/>
            <rsb:set attr="reqInput.default#[tmp.rInCount]" value="[default | def('')]"/>
            <rsb:set attr="reqInput.defaultdesc#[tmp.rInCount]" value="[defaultdesc | def('')]"/>
            <rsb:set attr="reqInput.description#[tmp.rInCount]" value="[description | def('')]"/>
            <rsb:set attr="reqInput.name#[tmp.rInCount]" value="[name]"/>
            <rsb:set attr="reqInput.required#[tmp.rInCount]" value="[required]"/>
            <rsb:set attr="reqInput.sourcedesc#[tmp.rInCount]" value="[sourcedesc]"/>
            <rsb:set attr="reqInput.style#[tmp.rInCount]" value="[style | def('input')]"/>
            <rsb:set attr="reqInput.options#[tmp.rInCount]" value=""/>
            <rsb:check attr="value#1">
              <rsb:set attr="reqInput.style#[tmp.rInCount]" value="select"/>
              <rsb:set attr="tmp.options" value=""/>
              <rsb:enum attr="value">
                <rsb:equals attr="reqInput.default#[tmp.rInCount]" value="[_value]">
                  <rsb:set attr="tmp.options" value="[tmp.options]<option selected='selected'>[_value]</option>"/>
                  <rsb:else>
                    <rsb:set attr="tmp.options" value="[tmp.options]<option>[_value]</option>"/>
                  </rsb:else>
                </rsb:equals>
              </rsb:enum>
              <rsb:set attr="reqInput.options#[tmp.rInCount]" value="[tmp.options]"/>
            </rsb:check>
            <rsb:else>
              <rsb:set attr="tmp.oInCount" value="[tmp.oInCount | add('1')]"/>
              <rsb:set attr="optInput.default#[tmp.oInCount]" value="[default | def('')]"/>
              <rsb:set attr="optInput.defaultdesc#[tmp.oInCount]" value="[defaultdesc | def('')]"/>
              <rsb:set attr="optInput.description#[tmp.oInCount]" value="[description | def('')]"/>
              <rsb:set attr="optInput.name#[tmp.oInCount]" value="[name]"/>
              <rsb:set attr="optInput.required#[tmp.oInCount]" value="[required]"/>
              <rsb:set attr="optInput.sourcedesc#[tmp.oInCount]" value="[sourcedesc]"/>
              <rsb:set attr="optInput.style#[tmp.oInCount]" value="[style | def('input')]"/>
              <rsb:set attr="optInput.options#[tmp.oInCount]" value=""/>
              <rsb:check attr="value#1">
                <rsb:set attr="optInput.style#[tmp.oInCount]" value="select"/>
                <rsb:set attr="tmp.options" value=""/>
                <rsb:enum attr="value">
                  <rsb:equals attr="optInput.default#[tmp.oInCount]" value="[_value]">
                    <rsb:set attr="tmp.options" value="[tmp.options]<option selected='selected'>[_value]</option>"/>
                    <rsb:else>
                      <rsb:set attr="tmp.options" value="[tmp.options]<option>[_value]</option>"/>
                    </rsb:else>
                  </rsb:equals>
                </rsb:enum>
                <rsb:set attr="optInput.options#[tmp.oInCount]" value="[tmp.options]"/>
              </rsb:check>
            </rsb:else>
          </rsb:equals>
        </rsb:case>
        <rsb:case match="exact" value="namespace">
          <rsb:set attr="tmp.nsCount" value="[tmp.nsCount | add('1')]"/>
          <rsb:set attr="namespace.prefix#[tmp.nsCount]" value="[prefix]"/>
          <rsb:set attr="namespace.namespace#[tmp.nsCount]" value="[namespace]"/>
        </rsb:case>
        <rsb:case match="exact" value="output">
          <rsb:set attr="tmp.outCount" value="[tmp.outCount | add('1')]"/>
          <rsb:set attr="output.name#[tmp.outCount]" value="[name]"/>
          <rsb:set attr="output.description#[tmp.outCount]" value="[description]"/>
        </rsb:case>
      </rsb:select>
    </rsb:check>
  </rsb:call>

  <div class="trans tabs-container">
    <h3 class="infoTitle">
      <span class="evtName">[evt]</span>
    </h3>
  </div>
  
  <rsb:check attr="tmp.noInfo">
    <div id="evtInfoError">
      <p class="noinfoError ui-state-error">
        [lang.evtinfo_noInfo]
      </p>
    </div>
    <rsb:else>
      <div class="configInfo">
        <h3>[lang.svcinfoTitle_description]</h3>
        <p id="evtDescription">[summary.description | def()]</p>
      </div>
      
      <div class="configInfo evtInfo">
        <h3>[lang.evtinfoTitle_eventParameters]</h3>
        <p class="tips">[lang.evtinfo_eventParametersInfo]</p>
        <rsb:exists item="optInput">
          <table id="evtOptional" class="ca-props">
            <colgroup>
              <col width="15%" />
              <col width="20" />
              <col width="*" />
            </colgroup>
            <tbody>
              <rsb:enum range="1..[tmp.oInCount]">
                <rsb:set attr="para.default" value="[optInput.default#[_value]]"/>
                <rsb:set attr="para.defaultdesc" value="[optInput.defaultdesc#[_value]]"/>
                <rsb:set attr="para.description" value="[optInput.description#[_value]]"/>
                <rsb:set attr="para.name" value="[optInput.name#[_value]]"/>
                <rsb:set attr="para.required" value="[optInput.required#[_value]]"/>
                <rsb:set attr="para.sourcedesc" value="[optInput.sourcedesc#[_value]]"/>
                <rsb:set attr="para.style" value="[optInput.style#[_value]]"/>
                <rsb:set attr="para.options" value="[optInput.options#[_value]]"/>
                <rsb:set attr="para.multiplename" value="[para.name | regex('#|\*')]"/>
                <tr>
                  <td>[para.name]</td>
                  <td />
                  <td>[para.description]</td>
                </tr>
                <rsb:unset item="para"/>
              </rsb:enum>
            </tbody>
          </table>
          <rsb:else>
            <p id="evtNoOptional">&lt; [lang.evtinfo_noParameters] &gt;</p>
          </rsb:else>
        </rsb:exists>
      </div>
      
      <div class="configInfo evtInfo">
        <h3>[lang.evtinfoTitle_configuration]</h3>
        <p>[lang.eventIntro_info2]</p>
          
        <p>
          [lang.eventIntro_info3]
          [site.eventsPath | toabsolutepath].
        </p>

        <p>[lang.eventIntro_info4]</p>
      </div>
      
    </rsb:else>
  </rsb:check>

</rsb:check>