<rsb:info title="" description="">
  <input name="required" values="true,false" default="false"/>
  <input name="default" />
  <input name="defaultdesc" />
  <input name="description" />
  <input name="sourcedesc" />
  <input name="name" />
  <input name="style" default="input"/>
  <input name="options" />
  <input name="multiple" values="true,false" default="false" />
  <input name="multiplename" default=""/>
</rsb:info>

<rsb:include file="config.rst" />

<rsb:set attr="passwordStyle" value="[name | find('password')]"/>
<rsb:notequals attr="passwordStyle" value="-1">
  <rsb:set attr="style" value="password"/>
</rsb:notequals>

<rsb:check attr="options">
  <rsb:set attr="style" value="select"/>
</rsb:check>

<rsb:set attr="reqParaStyleH" value="reqParameterHide"/>
<rsb:set attr="reqParaStyleS" value="reqParameterShow"/>
<rsb:set attr="optParaStyleH" value="optParameterHide"/>
<rsb:set attr="optParaStyleS" value="optParameterShow"/>
<rsb:equals attr="required" value="true">
  <rsb:set attr="optParaStyleH" value=""/>
  <rsb:set attr="optParaStyleS" value=""/>
  <rsb:else>
    <rsb:set attr="reqParaStyleH" value=""/>
    <rsb:set attr="reqParaStyleS" value=""/>
  </rsb:else>
</rsb:equals>

<rsb:set attr="sname" value="[name | regexreplace('#|\*', '')]"/>

<tr>
  <td class="top-align">
    <rsb:equals attr="required" value="true">
      <span class="requiredParam">
        <rsb:equals attr="multiple" value="true">
          <a href="javascript:void(0);" class="[reqParaStyleS]" onclick="javascript:rsbcall.addInput({elem:this, sname:'[sname]', multipleName:'[multiplename]'});">[name]</a>
          <span name="[sname]" class="[reqParaStyleH]">[sname]</span>
          <rsb:else>
            <span class="[reqParaStyleS]">[name]</span>
            <span name="[sname]" class="[reqParaStyleH]">[sname]</span>
          </rsb:else>
        </rsb:equals>
      </span>
      <rsb:else>
        <span class="optionalParam">
          <a href="javascript:void(0);" class="[optParaStyleS]" onclick="javascript:rsbcall.addInput({elem:this, sname:'[sname]', multipleName:'[multiplename]'});" class="small">\[+\]</a>
          <span class="[optParaStyleS]">[name]</span>
          <span name="[sname]" class="[optParaStyleH]">[sname]</span>
        </span>
      </rsb:else>
    </rsb:equals>
  </td>
  <td class="top-align">
    <rsb:equals attr="required" value="true">
      <rsb:equals attr="multiple" value="true">
        <a href="javascript:void(0);" class="[reqParaStyleH]" onclick="javascript:rsbcall.removeInput({elem:this});" class="small">\[x\]</a>
      </rsb:equals>
      <rsb:else>
        <a href="javascript:void(0);" class="[optParaStyleH]" onclick="javascript:rsbcall.removeInput({elem:this});" class="small">\[x\]</a>
      </rsb:else>
    </rsb:equals>
  </td>
  <td class="bottom-align">
    <rsb:equals attr="multiple" value="true">
      <span class="[reqParaStyleS]">(click '[name]' link to add multiple inputs)</span>
      <rsb:else>
        <rsb:set attr="reqParaStyleH" value=""/>
      </rsb:else>
    </rsb:equals>
    <div class="up-layer [reqParaStyleH] [optParaStyleH]">
      <rsb:select attr="style">
        <rsb:case value="password">
          <input name="[sname]" class="infoInput" value="[default]" type="password" />
        </rsb:case>
        <rsb:case value="multi-line">
          <textarea name="[sname]" class="infoInput">[default]</textarea>
        </rsb:case>
        <rsb:case value="multiline">
          <textarea name="[sname]" class="infoInput">[default]</textarea>
        </rsb:case>
        <rsb:case value="select">
          <span class="themedSelect">
            <span>
              <select id="[sname]" name="[sname]">
                [options]
              </select>
            </span>
          </span>
        </rsb:case>
        <rsb:default>
          <input name="[sname]" class="infoInput" value="[default]"/>
        </rsb:default>
      </rsb:select>  
    </div>
    <div class="down-layer">
      <span>[description]</span> <i>[defaultdesc]</i> <i>[sourcedesc]</i>
    </div>
  </td>
</tr>