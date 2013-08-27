<rsb:include file="../config.rst"/>
<rsb:include file="loadLanguage.rst"/>

<rsb:set attr="task.URL" value="[_input.URL | def('')]" />
<rsb:set attr="task.user" value="" />
<rsb:set attr="task.cron" value="0 * * * *" />

<rsb:check attr="Name">
  <rsb:set attr="gettask.Name" value="[Name]"/>
  <rsb:call op="[service.getScheduledTasks]" in="gettask" out="outtask">
    <rsb:map from="outtask" to="task" map="* = *"/>

    <rsb:call op="schedulerGet" in="task" out="outtask2">
      <rsb:map from="outtask2" to="task" map="* = scheduler:*"/>
    </rsb:call>
  </rsb:call>
</rsb:check>

<form id="return-task" style="display:inline">
  <a class="btn" href="javascript:void(0);" onclick="javascript:$('#return-task').submit();return false;">
    <span><b class="trans app-icon-btn app-icon-btn-back"></b>Return</span>
  </a>
</form>

<form id="edit-task" style="display:inline" method="post" action="scheduler.rst" >
  <input type="hidden" name="savetask" value="savetask"/>
  <rsb:check attr="Name">
    <input type="hidden" name="oldname" value="[Name]"/>
  </rsb:check>
  
  <rsb:exists attr="task.user">
    <rsb:equals attr="task.user" value="SYSTEM">
      <rsb:else>
        <a class="btn [task.user | def | equals('SYSTEM','graybtn','')]" href="javascript:void(0);" onclick="javascript:saveTask();return false;">
          <span id="SaveChanges">Save Changes</span>
        </a>
      </rsb:else>
    </rsb:equals>
  </rsb:exists>

  <a class="btn" href="javascript:void(0);" onclick="javascript:runTask();return false;">
    <span id="Return">Run Now</span>
  </a>

  <span id="form-error"></span>
  
  <script>
    function saveTask() {
      if (checkTask()) {
        $('#edit-task').submit();
      }
    }
    
    function runTask() {
      if (checkTask()) {
        var args = {};
        args\["name"\] = document.forms\["edit-task"\]\["name"\].value;
        args\["url"\] = document.forms\["edit-task"\]\["url"\].value;
        $.get("../shared/priv/admin/runTask.rsb", args, function(data) { });
        $("#form-error").html("<span class='correct'>Started.</span>").fadeOut(2000);
      }
    }
    
    function checkTask() {
      $("#form-error").show();
      $("#name-error").addClass("hide");
      $("#url-error").addClass("hide");
      var valid = true;

      if (document.forms\["edit-task"\]\["name"\].value == null || document.forms\["edit-task"\]\["name"\].value == "") {
        $("#form-error").html("<span class='error' style='padding:6px 0px 0px 0px'>Required fields are missing for this task.</span>");
        $("#name-error").removeClass("hide");
        valid = false;
      }
      
      if (document.forms\["edit-task"\]\["url"\].value == null || document.forms\["edit-task"\]\["url"\].value == "") {
        $("#form-error").html("<span class='error' style='padding:6px 0px 0px 0px'>Required fields are missing for this task.</span>");
        $("#url-error").removeClass("hide");
        valid = false;
      }
      
      return valid;
    }
  </script>
  
  <div class="configInfo">
    <h3>Configuration</h3>
    
    <table>
      <colgroup>
        <col width="250px" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Name:</span>
          </td>
          <td>
            <input type="text" class="infoInput medium" name="name" value='[task.name | def("")]' [task.user | def | equals('SYSTEM','DISABLED','')]/>
            <span id="name-error" class="hide error">* Required</span>
          </td>
        </tr>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">URL:</span>
          </td>
          <td>
            <input type="text" class="infoInput extralong" name="url" value='[task.url | def("")]' [task.user | def | equals('SYSTEM','DISABLED','')]/>
            <span id="url-error" class="hide error">* Required</span>
          </td>
        </tr>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Cron Schedule:</span>
          </td>
          <td>
            <input type="text" class="infoInput extralong" name="cron" value='[task.cron | def("")]' [task.user | def | equals('SYSTEM','DISABLED','')]/>
          </td>
        </tr>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Running:</span>
          </td>
          <td>
            <input type="checkbox" name="running" id="chkRunning" [task.RunCount | def('0') | equals('-1','checked="checked"','')] [task.user | def | equals('SYSTEM','DISABLED','')]/>
            <label for="chkRunning"><span>Enabled</span></label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="configInfo">
    <h3>Status</h3>

    <table>
      <colgroup>
        <col width="250px" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Next Run Time:</span>
          </td>
          <td>
            [task.nextrun | def("")]
          </td>
        </tr>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Last Run Time:</span>
          </td>
          <td>
            [task.lastrun | def("")]
          </td>
        </tr>
        <tr>
          <td class="formLabelWrapper">
            <span class="formlabel">Last Run Result:</span>
          </td>
          <td>
            [task.status | def("")]
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</form>
