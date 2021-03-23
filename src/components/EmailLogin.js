import React, { useState, useHistory } from "react";
import { Link, withRouter } from "react-router-dom";
// import validation from './Validation'
import "./EmailLogin.css";

import axios from "axios";
axios.defaults.withCredentials = true;

const EmailLogin = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    // axios
    //   .post("https://test.projectb1.com:5000/user/login", {
    //     email: details.email,
    //     password: details.password,
    //   })
    //   .then(() => {
    //     history.push("/mainpage");
    //   });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>이메일로 시작하고 감정을 쉽게 기록해 보세요.</h2>

        <div className="form-group">
          <label className="email">이메일</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="password">비밀번호</label>
          <input
            type="text"
            name="password"
            id="email"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <input type="submit" value="로그인" />
      </div>
    </form>
  );
};

export default EmailLogin;
