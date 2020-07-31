function checkUserId(id) {

  var idRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/; 
  if (!idRegExp.test(id)) {
      console.log("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
      return false;
  }
  return true;
}

function checkPassword(passw) {

var passwordRegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
if (!passwordRegExp.test(passw)) {
    console.log("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
    return false;
}

return true; //확인이 완료되었을 때
}   

function checkAll() {
if (!checkUserId($("form")[0].username.value)) {
    return false;
} else if (!checkPassword($("form")[0].password.value)) {
    return false;
} 
return true;
}