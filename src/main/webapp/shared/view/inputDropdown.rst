<rsb:info>
  <input name="options#" required="true" />
  <input name="values#" required="true" />
  <input name="selectedValue" desc="Selected value" />
  <input name="isPaid" />
  <input name="isDisabled" default="false" />
  <input name="id"  />
  <input name="name"  />
  <input name="class" default=""/>
  <input name="other" default=""/>
  
  <!--  Here's a host of attributes for the SELECT tag which
        we can implement later:
        *  class
        *  dir
        *  ltr
        *  lang
        *  style
        *  tabindex
        *  title
        *  xml:lang
    -->
</rsb:info>

<span class="themedSelect [_input.class]">
  <span>
    <rsb:set attr="selectAttributes" />
    <rsb:exists attr="_input.id">
      <rsb:set attr="selectAttributes#" value="id=&quot;[_input.id]&quot;" />
    </rsb:exists>
      
      
    <rsb:match pattern="[_input.isDisabled]" value="true">
      <rsb:set attr="selectAttributes#">disabled="disabled"</rsb:set>
    </rsb:match>

    <rsb:exists attr="_input.name">
      <rsb:set attr="selectAttributes#">name="[_input.name]"</rsb:set>
    </rsb:exists>
    
    <rsb:check attr="_input.isPaid">
      <rsb:set attr="selectAttributes#">"[_input.isPaid]"</rsb:set>
    </rsb:check>
    
    <rsb:check attr="_input.other">
      <rsb:set attr="selectAttributes#">[_input.other]</rsb:set>
    </rsb:check>

    <select [selectAttributes | join(' ')]>
      <rsb:enum attr="options#">
        <rsb:set attr="optionAttributes#">value="[_input.values#[_index]]"</rsb:set>
        <rsb:exists attr="_input.selectedValue">
          <rsb:equals attr="_input.selectedValue" value="[_input.values#[_index]]" case="ignore">
            <rsb:set attr="optionAttributes#">selected="selected"</rsb:set>
          </rsb:equals>
        </rsb:exists>
        
        <option [optionAttributes | join(' ')]>[_input.options#[_index]]</option>

        <rsb:unset attr="optionAttributes"/>
      </rsb:enum>
    </select>
  </span>
</span>