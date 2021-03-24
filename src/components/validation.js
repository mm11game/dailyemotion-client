const validation = (values) => {

  let errors={};
  
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  
  if(!values.nickName){
    errors.nickName="Nickname is required."
  }
  if(!values.email){
    errors.email="Email is required."
  } else if(!regExp.test(values.email)){
    errors.email="Email is invalid."
  }
  if(!values.password){
    errors.password="Password is required."
  } else if(values.password.length < 5){
    errors.password="Password must be more then five characters."
  }
  if(!values.confirmPassword){
    errors.confirmPassword="Confirm your password" 
  } 

  // if(values.confirmPassword !== values.password){
  //    errors.confirmPassword="You entered an incorrect password"
  // } 
  return errors;
}

export default validation;

