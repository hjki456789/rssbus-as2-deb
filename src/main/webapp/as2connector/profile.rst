<rsb:set attr="page.profile" value="selected"/>
<!--header-->
<rsb:include file='header.rst' />

  <div class="xfluid">
    <div id="contentwrapper" class="x11 abscenter">
      <rsb:try>
        <rsb:include file="[view.showSelf]" />
        <rsb:catch code="*">
          <rsb:include file='errorHTML.rst'/>
        </rsb:catch>
      </rsb:try>
    </div>
  </div>

<!--footer-->
<rsb:include file='footer.rst' />

