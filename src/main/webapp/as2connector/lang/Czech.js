var lang = function($hash, $plural, $values) {//English
  var Language = { 
    "sending":"Odesílání ",
    "deleting":"Mazání ",
    "transSuccess":"{0} Úspěšný přenos.",
    "transSuccess#":"{0} Úspěšné přenosy.",
    "transFailed":"{0} Přenos selhal.",
    "transFailed#":"{0} Přenosy selhaly.",
    "changeUnsaved":"{0} neuložená změna.\r\nOpravdu chcete opustit stránku bez uložení?",
    "changeUnsaved#":"{0} neuložené změny.\r\nOpravdu chcete opustit stránku bez uložení?",
    "certificateSpecified":"Musíte zadat název souboru certifikátu.",
    "certCreateSuccessful":"Certifikát úspěšně vytvořen!",
    "deleteSelected":"Opravdu chcete smazat {0} vybraných souborů?",
    "sendSelected":"Opravdu chcete odeslat {0} vybraných souborů?",
    "restartSelected":"Opravdu chcete restartovat přenos {0} vybraných souborů?",
    "noFile":"Žádný soubor k přenosu."
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

