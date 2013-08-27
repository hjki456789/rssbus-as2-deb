var lang = function($hash, $plural, $values) {//Chinese(Simplified)
  var Language = { 
    "sending":"发送 ",
    "deleting":"删除 ",
    "transSuccess":"{0}个文件传输成功。",
    "transSuccess#":"{0}个文件传输成功。",
    "transFailed":"{0}个文件传输失败。",
    "transFailed#":"{0}个文件传输失败。",
    "changeUnsaved":"{0}个更改未保存。\r\n确定不保存更改而离开此页？",
    "changeUnsaved#":"{0}个更改未保存。\r\n确定不保存更改而离开此页？",
    "certificateSpecified":"必须指定证书。",
    "certCreateSuccessful":"创建证书成功！",
    "deleteSelected":"确定你需要删除这{0}个选定的文件？",
    "sendSelected":"确定你需要发送这{0}个选定的文件？",
    "restartSelected":"确定你需要重新发送这{0}个选定的文件？",
    "noFile":"没有文件准备传输。"
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

