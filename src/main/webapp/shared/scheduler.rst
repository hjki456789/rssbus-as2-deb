<rsb:include file='config.rst' />
<rsb:include file='managementHeader.rst' />

<rsb:equals attr="_request.server:REQUEST_METHOD" value="POST" case="ignore">
  <rsb:check attr="savetask">
    <rsb:set attr="save.name" value='[name]' />
    <rsb:check attr="OldName">
      <rsb:set attr="save.oldname" value='[oldname]' />
    </rsb:check>
    <rsb:set attr="save.url" value='[url | def("")]' />
    <rsb:set attr="save.cron" value='[cron | def("")]' />
    <rsb:check attr="running">
      <rsb:set attr="save.runcount" value="-1"/>
      <rsb:else>
        <rsb:set attr="save.runcount" value="0"/>
      </rsb:else>
    </rsb:check>
    <rsb:set attr="save.user" value='[_request.server:AUTH_USER]' />
    
    <rsb:call op="[service.setScheduledTask]" in="save"/>
  </rsb:check>
</rsb:equals>

<rsb:set item="tmp"/>

<div class="xfluid">
  <div id="contentwrapper" class="x11 abscenter">
    <div id="tabs" class="ui-tabs">
      <h3 class="infoNameDiv">
        <span>Scheduler</span>
      </h3>
      
      <div class="trans tabs-container">
        <div class="ui-notabs"></div>
      </div>
      
      <div id="task-body">
        <rsb:check attr="addnew">
          <rsb:else>
            <div style="margin:10px 0px;" class="configInfo">
              <a class="btn" id="add-task" href="javascript:void(0);" onclick="javascript:showAdd();return false;"><span>Add Task</span></a>
            </div>
            
            <rsb:call op="schedulerListTasks" in="tmp" save="tasksfeed" />
            
            <link href="../shared/templates/table/table.css?#[site.buildno | def]" type="text/css" rel="stylesheet" />
            <script type="text/javascript" src="../shared/templates/table/table.js?#[site.buildno | def]"></script>
            <table class="app-table">
              <colgroup>
                <col width="160px"/>
                <col width="300px"/>
                <col width="160px"/>
                <col width="120px"/>
                <col width="120px"/>
                <col width="*"/>
                <col width="80px"/>
                <col width="22px"/>
              </colgroup> 
              <thead>
                <tr>
                  <th><span>Name</span></th>
                  <th><span>URL</span></th>
                  <th><span>Cron Schedule</span></th>
                  <th><span>Next Run Time</span></th>
                  <th><span>Last Run Time</span></th>
                  <th><span>Last Run Result</span></th>
                  <th><span>Status</span></th>
                  <th class="deleteRow">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <rsb:set attr="tmp.OrderBy" value="Name"/>
                <rsb:call op="[service.getScheduledTasks]" in="tmp" out="tasks">
                  <rsb:call op="[_feeds.tasksfeed]" out="curr">
                    <rsb:equals attr="curr.scheduler:name" value="[tasks.name]">
                      <rsb:set attr="tasks.LastResult" value="[curr.scheduler:status]"/>
                      <rsb:set attr="tasks.LastRun" value="[curr.scheduler:lastrun]"/>
                      <rsb:set attr="tasks.NextRun" value="[curr.scheduler:nextrun]"/>
                    </rsb:equals>
                  </rsb:call>
                  
                  <tr onclick="javascript:showEdit('[tasks.Name]');return false;">
                    <td>
                      [tasks.Name]
                    </td>
                    <td>
                      [tasks.URL]
                    </td>
                    <td>
                      [tasks.Cron]
                    </td>
                    <td>
                      <rsb:check attr="tasks.NextRun">
                        [tasks.NextRun | todate('yyyy-MM-dd HH:mm:ss')]
                      </rsb:check>
                    </td>
                    <td>
                      <rsb:check attr="tasks.LastRun">
                        [tasks.LastRun | todate('yyyy-MM-dd HH:mm:ss')]
                      </rsb:check>
                    </td>
                    <td>
                      [tasks.LastResult | def]
                    </td>
                    <td>
                      [tasks.RunCount | equals('-1','Ready','Disabled')]
                    </td>
                    <td onclick="javascript:event.cancelBubble=true;deleteTask('[tasks.Name]');return false;" class="deleteRow"><div><span>X</span></div></td>
                  </tr>
                </rsb:call>
              </tbody>
            </table>
          </rsb:else>
        </rsb:check>  
      </div>
    </div>
  </div>
</div>

<script>
  <rsb:check attr="addnew">
    $(document).ready(function() {
      showAdd('[URL | def | urlencode]');
    });
  </rsb:check>
  
  function showAdd(url) {
    if (!url) {
      url = "";
    }
    $.get("view/showTask.rst?newtask=newtask&url=" + url, function(data) {
      $("#task-body").html(data);
    });
  }
  function showEdit(name) {
    $.get("view/showTask.rst?name=" + name, function(data) {
      $("#task-body").html(data);
    });
  }
  function deleteTask(name) {
    if (confirm('Are you sure you want to delete this task?')) {
      var args = {};
      args\["name"\] = name;
      $.get("../shared/priv/admin/deleteScheduledTask.rsb", args, function(data) {
        location.reload();
      });
    }
  }
</script>

<rsb:include file='footer.rst' />
