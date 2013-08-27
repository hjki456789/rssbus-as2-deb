var lang = function($hash, $plural, $values) {//Spanish
  var Language = { 
    "sending":"Sending ",
    "deleting":"Deleting ",
    "transSuccess":"{0} Transmission Successful.",
    "transSuccess#":"{0} Transmissions Successful.",
    "transFailed":"{0} Transmission Failed.",
    "transFailed#":"{0} Transmissions Failed.",
    "changeUnsaved":"{0} change unsaved.\r\nAre you sure you want to leave without saving?",
    "changeUnsaved#":"{0} changes unsaved.\r\nAre you sure you want to leave without saving?",
    "certificateSpecified":"Certificate File must be specified.",
    "certCreateSuccessful":"Cert create successful!",
    "deleteSelected":"Are you sure you want to delete the {0} selected files?",
    "sendSelected":"Are you sure you want to send the {0} selected files?",
    "restartSelected":"Are you sure you want to restart the {0} selected files?",
    "noFile":"No files are ready to be sent."
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

