<rsb:set item="save" />
<rsb:set attr="save.formid" value="[save.formid | def('infoForm')]" />

<div class="saveT">
  <a class="btn" href="javascript:void(0);" onclick="javascript:uncheckUnsave=true;if(typeof checkBeforeSave == 'function'){checkBeforeSave();}else{$('#[save.formid]').submit();};return false;">
    <span id='SaveChanges'>[lang.saveChanges_saveChanges]</span>
  </a>
</div>

<a class="btn saveB" href="javascript:void(0);" onclick="javascript:uncheckUnsave=true;if(typeof checkBeforeSave == 'function'){checkBeforeSave();}else{$('#[save.formid]').submit();};return false;">
  <span id='SaveChanges'>[lang.saveChanges_saveChanges]</span>
</a>
