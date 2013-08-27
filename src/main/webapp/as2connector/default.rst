<rsb:set attr="page.redirect" value="partners.rst"/>

<rsb:try>
  <rsb:call op="as2connectorGetLicenseInfo">
    <rsb:check attr="_out1.license:serialnumber">
      <rsb:else>
        <rsb:set attr="page.redirect" value="activate.rst"/>
      </rsb:else>
    </rsb:check>
  </rsb:call>
  
  <rsb:catch code="*">
    <rsb:set attr="page.redirect" value="activate.rst"/>
  </rsb:catch>
</rsb:try>

<rsb:set attr="_response.redirect" value="[page.redirect]"/>

