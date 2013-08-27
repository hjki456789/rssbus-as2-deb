var lang = function($hash, $plural, $values) {//Japanese
  var Language = { 
    "sending":"送信中",
    "deleting":"削除中",
    "transSuccess":"{0}件のファイルが送信に成功しました。",
    "transSuccess#":"{0}件のファイルが送信に成功しました。",
    "transFailed":"{0}件のファイルが送信に失敗しました。",
    "transFailed#":"{0}件のファイルが送信に失敗しました。",
    "changeUnsaved":"{0}件の変更が保存されませんでした。\r\n保存しなくて他のページに移しますか？",
    "changeUnsaved#":"{0}件の変更が保存されませんでした。\r\n保存しなくて他のページに移しますか？",
    "certificateSpecified":"証明書を指定しなくてはいけません。",
    "certCreateSuccessful":"証明書の作成に成功しました！",
    "deleteSelected":"この{0}件の指定されたファイルを削除しますか？",
    "sendSelected":"この{0}件の指定されたファイルを送信しますか？",
    "restartSelected":"この{0}件の指定されたファイルを再送信しますか？",
    "noFile":"送信するファイルなし。"
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

