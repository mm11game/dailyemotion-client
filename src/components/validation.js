const validation = (values) => {

  let errors={};
  
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  
  if(!values.nickName){
    errors.nickName="닉네임을 입력해 주세요."
  }
  if(!values.email){
    errors.email="이메일을 입력해 주세요."
  } else if(!regExp.test(values.email)){
    errors.email="이메일이 유효하지 않습니다."
  }
  if(!values.password){
    errors.password="비밀번호를 입력해 주세요."
  } else if(values.password.length < 5){
    errors.password="비밀번호는 5자리 이상 입력해 주세요."
  }
  if(values.confirmPassword !== values.password){
    errors.confirmPassword="비밀번호가 맞지 않습니다"
  } 

  // if(values.confirmPassword !== values.password){
  //    errors.confirmPassword="You entered an incorrect password"
  // } 
  return errors;
}

export default validation;

