<rsb:try>
  <rsb:set attr="input.table" value="[table | def('')]"/>
  <rsb:set attr="input.sort" value="[sort | def('')]"/>
  <rsb:set attr="input.desc" value="[desc | def('true')]"/>
  <rsb:set attr="input.filter" value="[filter | def('All')]"/>
  <rsb:set attr="input.startindex" value="[startindex | def('0')]"/>
  <rsb:set attr="input.pagesize" value="[pagesize | def('20')]"/>
  <rsb:set attr="input.wraptext" value="[wraptext | def('')]"/>

  <rsb:enum attr="_input.service:*">
    <rsb:set attr="input.[_attr | substring(8)]" value="[_value]" />
  </rsb:enum>
  
  <rsb:set attr="tmp.count" value="0"/>
  <rsb:set attr="tmp.deleteBtn" value="<div class='delete'>X</div>"/>
  <rsb:set attr="tmp.rowClass" value="separate"/>
  <rsb:call op="[_input.tabservice]" in="input" output="out">
    <rsb:first>
      <rsb:set attr="tmp.count" value="[out.count | def('0')]"/>
    </rsb:first>
    <rsb:equals attr="tmp.rowClass" value="">
      <rsb:set attr="tmp.rowClass" value="separate"/>
      <rsb:else>
        <rsb:set attr="tmp.rowClass" value=""/>
      </rsb:else>
    </rsb:equals>
    <rsb:check attr="input.wraptext">
      <rsb:set attr="tmp.rowClass" value="[tmp.rowClass] wraptext full"/>
    </rsb:check> 
    <tr class="[tmp.rowClass]">
      <rsb:enum attr="_input.columnname">
        <rsb:first>
          <rsb:set attr="tmp.first" value="first"/>
        </rsb:first>
        
        <rsb:set attr="tmp.isinput" value="[_value | startswith('$')]"/>
        <rsb:equals attr="tmp.isinput" value="true">
          <rsb:equals attr="_value" value="$checkbox">
            <td class="[_input.columnclass#[_index] | def('')]">
              <rsb:set attr="tmp.value" value="[out.[checkbox[_index]:value] | htmlencode]"/>
              <rsb:set attr="tmp.value2" value="[tmp.value]"/>
              <rsb:check attr="checkbox[_index]:checkedval">
                <rsb:set attr="tmp.value2" value="[out.[checkbox[_index]:checkedval] | htmlencode]"/>
              </rsb:check>
              <rsb:set attr="tmp.checked" value=""/>
              <rsb:enum list="[checkbox[_index]:checked]" separator=",">
                <rsb:equals attr="_value" value="[tmp.value2]">
                  <rsb:set attr="tmp.checked" value="checked='checked'"/>
                  <rsb:break />
                </rsb:equals>
              </rsb:enum>
              <input type="checkbox" name="[checkbox[_index]:name | def('')]" class="chk-[checkbox[_index]:value | def('')]" value="[tmp.value]" [tmp.checked] />
            </td>
          </rsb:equals>
          
          <rsb:else>
            <rsb:set attr="tmp.value" value="[out.[_value] | htmlencode]"/>
        
            <rsb:set attr="tmp.color" value=""/>
            <rsb:check attr="_input.filtercolumn">
              <rsb:equals attr="_input.filtercolumn" value="[_value]">
                <rsb:enum attr="_input.filter:*">
                  <rsb:equals attr="tmp.value" value="[_value]">
                    <rsb:set attr="tmp.color" value="color:[_input.[_attr | replace('filter:', 'filtercolor:')] | def('')]"/>
                    <rsb:break/>
                  </rsb:equals>
                </rsb:enum>
              </rsb:equals>
            </rsb:check>
            
            <td class="[tmp.first | def('')] [_input.columnclass#[_index] | def('')]" style="[tmp.color]"><span>[tmp.value]</span></td>
            <rsb:set attr="tmp.first" value=""/>
            <rsb:check attr="_input.columninput#[_index]">
              <input type="hidden" value="[tmp.value]" name="[_input.columninput#[_index]]"/>
            </rsb:check>
          </rsb:else>
        </rsb:equals>
      </rsb:enum>
      <rsb:equals attr="_input.allowDeleteRow" value="true">
        <td class="deleteRow"><div><span>X</span></div></td>
      </rsb:equals>
    </tr>
  </rsb:call>
  
  <rsb:set item="_httpheaders" attr="count" value="[tmp.count]"/>
  
  <rsb:catch code="*">
    <rsb:set attr="_response.statuscode" value="500"/>
    <div style="color:red;white-space: pre;">ERROR: [_code]: [_description]</div>
  </rsb:catch>
</rsb:try>