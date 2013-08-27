<rsb:check attr="returl">
  <rsb:set attr="_session.returl" value="[returl]"/>
</rsb:check>
<rsb:set attr="contentroot" value="~/"/>
<rsb:set attr="_response.redirect" value="[contentroot | urlresolve]"/>