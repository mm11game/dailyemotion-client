
import React, { useState } from 'react'
// import { Link, withRouter } from "react-router-dom";
// import validation from './Validation'
import "./EmailLogin.css"
import axios from 'axios';

function EmailLogin({Login, error}) {
  const [details, setDetails] = useState({email: "", password:""});

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <div className="container">
      <div className="app-wrapper">
      <div>
        <h2 className="title"> 💖 이메일로 시작하고 감정을 쉽게 기록해 보세요.</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="email-form"> 📧 이메일
          <input className="input" 
          type="text" 
          name="email" 
          id="email" 
          placeholder="이메일을 입력해주세요"
          onChange={e => setDetails({...details, email: e.target.value})}
          />
          {/* {( error != "") ? (<div className="error"></div>) : "" } */}
        </div>
        <div className="password-form"> 🔐 비밀번호
          <input className="input" 
          type="text" 
          name="email" 
          id="email" 
          placeholder="비밀번호를 입력해주세요"
          onChange={e => setDetails({...details, password: e.target.value})}
          />  
          </div>
        <div>
          <button className="btn-singup" onClick={submitHandler}>시작하기</button>
        </div>
      </form>
    </div>
  </div>
  )
};

export default EmailLogin;


