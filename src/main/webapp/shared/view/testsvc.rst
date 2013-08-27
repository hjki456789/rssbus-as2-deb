<rsb:include file="../config.rst"/>
<rsb:set attr="_response.buffer" value="false" />

<rsb:set item="pg" attr="level" value="../../"/>
<rsb:set item="pg" attr="title" value="[rsb:svcn | def('')] Service"/>
<rsb:set item="pg" attr="appname" value="[rsb:svcappname]"/>
<rsb:set item="pg" attr="applink" value="../../[rsb:svcp | getdirname | pathcombine('../') | torelativepath]default.rst"/>
<rsb:include file="../../shared/header.rst"/>

  <div id="workspacecontainer" style="min-height:400px;">
    <rsb:check attr="rsb:svcn">
      <h3>[rsb:svcn] Service</h3>
      <rsb:else>
        <h3>Error:</h3>
      </rsb:else>
    </rsb:check>
    <hr size="0" />
    <rsb:check attr="rsb:svcp">
      <form name="testsvcForm" id="testsvcForm" method="POST" action="testsvc.rst">
        <input name="rsb:svcp" type="hidden" value="[rsb:svcp]"/>
        <input name="rsb:svcn" type="hidden" value="[rsb:svcn]"/>
        <input name="rsb:svcappname" type="hidden" value="[rsb:svcappname]"/>
        <table style="table-layout:fixed;width:100%;" >
          <colgroup>
            <col width="300" />
            <col width="*"/>
          </colgroup>
          <rsb:enum item="_input">
            <rsb:notequal attr="_attr" value="rsb:svcp">
              <rsb:notequal attr="_attr" value="rsb:svcn">
                <rsb:notequal attr="_attr" value="rsb:svcappname">
                  <rsb:set attr="page.attr" value="[_attr]" />
                  <rsb:notequals attr="_count" value="1">
                    <!-- If value is multival, then iterate over item to list pairs  -->	
                    <rsb:enum item="_input" prefix="[_attr]#">
                      <tr>
                        <td style="overflow:hidden; height:38px;" title="[page.attr]"><b>[page.attr]</b></td>
                        <td><input type="[page.attr | ifmatches('*password*','password', 'text')]" name="[page.attr]" value="[_value | htmlencode]" style="width: 95%" class="infoInput"/></td>
                      </tr>
                    </rsb:enum>
                    
                    <!-- Otherwise just spit out name/value pair -->
                    <rsb:else>
                      <tr>
                        <td style="overflow:hidden; height:38px;" title="[page.attr]"><b>[page.attr]</b></td>
                        <td><input type="[page.attr | ifmatches('*password*','password', 'text')]" name="[page.attr]" value="[_value | htmlencode]" style="width: 95%" class="infoInput"/></td>
                      </tr>
                    </rsb:else>
                  </rsb:notequals>
                </rsb:notequal>
              </rsb:notequal>
            </rsb:notequal>
          </rsb:enum>
          <tr>
            <td />
            <td height="40">
            <a class="btn btn-call" href="javascript:$('#testsvcForm').submit();"><span>[lang.testsvc_callService]</span></a>
            </td>
          </tr>
        </table>
      </form>
      
      <table class="ca-outputs" width="100%" style="table-layout:fixed;">
        <colgroup>
          <col width="300"/>
          <col width="*"/>
        </colgroup>
        <rsb:set item="testsvc"/>
        <rsb:call op="[rsb:svcp]?[ _.* | urlencode ]" in="testsvc" out="output">
          <tr>
            <td colspan="2"><hr size="0" /></td>
          </tr>
          <rsb:enum item="output" expand='true'>
            <tr>
              <td style="font-weight: bold; color: gray; overflow:hidden;" title="[_attr]">[_attr | htmlencode]</td>
              <td style="padding-left:5px;word-wrap:break-word; word-break: keep-all; overflow: hidden; border-bottom:solid 1px #EFEFEF;">
              <pre style="white-space: pre-wrap;/* css-3 */ white-space: -moz-pre-wrap;/* Mozilla, since 1999 */ white-space: -pre-wrap; /* Opera 4-6 */ white-space: -o-pre-wrap;/* Opera 7 */">[_value | htmlencode]</pre>
              </td>
            </tr>
          </rsb:enum>
          
          <rsb:catch code="*">
            <rsb:set attr="_log.error" value="[_code]: [_description]"/>
            <tr>
              <td colspan="2"><hr size="0" /></td>
            </tr>
            <tr>
              <td style="color: red; font-weight: bold;">[lang.testsvc_error]</td>
              <td style="color: red;">[_code]: [_description]</td>
            </tr>
          </rsb:catch>
        </rsb:call>
      </table>
      
      <rsb:else>
        <div style="margin:20px;">
          <p class="noinfoError ui-state-error">[lang.testsvc_invalid]</p>
        </div>
      </rsb:else>
    </rsb:check>
  </div>

<rsb:include file='../footer.rst' />
