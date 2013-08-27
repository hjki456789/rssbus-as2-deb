<rsb:include file="config.rst"/>

<rsb:info desc='Returns an [site.supportPartnerType] file for download'>
  <input name='file' desc='The file to retrieve.' required='true'/>
  <input name='fileName' desc='The name of the file.' required='true'/>
</rsb:info>

<rsb:set attr='_httpheaders.Pragma' value='no-cache'/>
<rsb:set attr='_httpheaders.Connection' value='close'/>

<rsb:set attr='_httpheaders.Content-Type' value='application/force-download; charset=utf-8'/>

<rsb:set attr='page.contentdisp' value="inline"/>
<rsb:select value="[fileName | fileext | tolower]">
  <rsb:case match="exact" value="pdf">
    <rsb:set attr='page.contentdisp' value="application/pdf"/>
  </rsb:case>
  <rsb:default/>
</rsb:select>
<rsb:set attr='_httpheaders.Content-Disposition' value="[page.contentdisp]; filename=[fileName | urlencode]"/>

<rsb:set attr="_response.writefile" value="[file]"/>
