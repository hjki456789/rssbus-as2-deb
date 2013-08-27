var lang = function($hash, $plural, $values) {//Chinese(Traditional)
  var Language = {
    "sending":"傳送 ",
    "deleting":"刪除 ",
    "transSuccess":"{0}個檔案傳輸成功。",
    "transSuccess#":"{0}個檔案傳輸成功。",
    "transFailed":"{0}個檔案傳輸失敗。",
    "transFailed#":"{0}個檔案傳輸失敗。",
    "changeUnsaved":"{0}個變更未儲存。\r\n確定不儲存變更而離開此頁？",
    "changeUnsaved#":"{0}個變更未儲存。\r\n確定不儲存變更而離開此頁？",
    "certificateSpecified":"必須指定證書。",
    "certCreateSuccessful":"建立證書成功！",
    "deleteSelected":"確定你需要刪除這{0}個選擇的檔案？",
    "sendSelected":"確定你需要傳送這{0}個選擇的檔案？",
    "restartSelected":"確定你需要重新傳送這{0}個選擇的檔案？",
    "noFile":"沒有檔案準備傳輸。"
  };
  
  if($plural && $plural > 1) $hash += "#";
  var content = Language[$hash];
  if($values) {
    for(var i = 0; i < $values.length; i++) {
      content = content.replace("{" + i + "}", $values[i]);
    }
  }
  
  return content;
};

