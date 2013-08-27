var lang = function($hash, $plural, $values) {//Korean
  var Language = { 
    "sending":"보내는 중",
    "deleting":"삭제하는 중",
    "transSuccess":"{0} 전송 완료",
    "transSuccess#":"{0} 전송 완료",
    "transFailed":"{0} 전송 실패",
    "transFailed#":"{0} 전송 실패",
    "changeUnsaved":"{0} 변경된 사항이 저장되지 않았습니다.\r\n저장하지 않고 이 페이지에서 나가시겠습니까?",
    "changeUnsaved#":"{0} 변경된 사항이 저장되지 않았습니다.\r\n저장하지 않고 이 페이지에서 나가시겠습니까?",
    "certificateSpecified":"인증서 파일이 반드시 지정되어야 합니다.",
    "certCreateSuccessful":"인증서 만들기 성공!",
    "deleteSelected":"선택한 {0} 파일을 삭제하시겠습니까?",
    "sendSelected":"선택한 {0} 파일을 보내시겠습니까?",
    "restartSelected":"선택한 {0} 파일을 다시 시작하시겠습니까?",
    "noFile":"보낼 파일이 없습니다."
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

