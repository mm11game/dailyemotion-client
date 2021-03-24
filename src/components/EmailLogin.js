import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
// import validation from './Validation'
import "./EmailLogin.css";
import axios from "axios";
axios.defaults.withCredentials = true;

function EmailLogin({ error, isLogin, handleResponseSuccess, text }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("이메일과 패스워드", details);
    console.log("로그인상태", isLogin);

    axios
      // .post("https://test.projectb1.com:5000/user/login", {
      .post("https://localhost:5000/user/login", {
        email: details.email,
        password: details.password,
      })
      .then((res) => {
        console.log("유저로그인 포스트 요청후 오는것", res);
        handleResponseSuccess();
        // history.push("/");
      })
      .catch((err) => {
        alert("에러가남");
      });
  };

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
