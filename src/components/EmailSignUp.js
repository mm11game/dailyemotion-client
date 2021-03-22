import React, { useState } from 'react';
import validation from './validation'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/EmailSignUp.css'

export default function EmailSignUp() {

  const [values, setValues] = useState({
  nickName: "",
  email: "",
  password: "",
  confirmPassword: ""
});

const [errors, setErrors] = useState({});

const handleChange = (key) => (e) => {
  setValues({
    ...values,
    [key]: e.target.value
  })
  setErrors(validation(values))
}

const history = useHistory();

const handleSignup = (e) => {
  e.preventDefault(); 
  
  const { nickName, email, password } = values;

  const res = 
    axios
      .post("https://projectb1.com/user/signup", {
        nickName,
        email,
        password
      },
      {
        headers: {
          'Content-Type':'application/json'
        },
      })
      .then(res => {
        console.log(res)
        if(res.status === 200) {
          history.push("/main-page") 
        }
      })
      .catch(err => {
        console.log(err)
        alert("가입 실패 - 관리자에게 문의하세요.")
        history.push("/login")
      })
}


return (
  <div className="container">
    <div className="app-wrapper">
      <div>
        <h2 className="title">회원가입 하기</h2>
      </div>
      <form className="form-wrapper">
        <div className="nickName">
          <input 
            className="input" 
            type="text" 
            placeholder="닉네임을 입력해주세요"
            onChange={handleChange("nickName")}
          />
          {errors.nickName && <p className="error">{errors.nickName}</p>}
        </div>
        <div className="email">
          <input 
          className="input" 
          type="text" 
          placeholder="이메일를 입력해주세요"
          onChange={handleChange("email")}
          />
          {errors.email && <p className="error">{errors.email}</p>}          
        </div>
        <div className="password">
          <input className="input" 
          type="password" 
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange("password")}
          />
          {errors.password && <p className="error">{errors.password}</p>}          
        </div>
        <div className="confirmPassword">
          <input className="input" 
          type="password" 
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange("confirmPassword")}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div>
          <button className="btn-singup" onClick={handleSignup}>회원가입하기</button>
        </div>                        
      </form>
    </div>
  </div>
  )
};
