// import React, { useState, useEffect } from "react";
// import styles from "../css/Modified.module.css";

// const axios = require("axios");
// axios.defaults.withCredentials = true;

// const Modified = () => {
//   //db에서 userinfo.nickname을 가져와서 9번 input테그에 넣는다
//   //만약 수정하기 버튼을 눌럿을때, 위패스워드와, 아래패스워드가 다르면 catch
//   //만약 두개가 같으면 post요청을 한다.
//   //만약 닉네임, 비밀번호, 비밀번호2 이 중에 한개라도 빠지면 모두 다 써달라는 말을 출력한다.
//   const [form, setForm] = useState({
//     changeNickname: "",
//     password: "",
//     passwordTwo: "",
//   });
//   const [errMessage, setErrMessage] = useState("");
//   const { changeNickname, password, passwordTwo } = form;
//   const handleChange = (e) => {
//     const nextForm = {
//       ...form,
//       [e.target.name]: e.target.value,
//     };
//     setForm(nextForm);
//   };

//   const handleModify = () => {
//     if (changeNickname === "" || password === "" || passwordTwo === "") {
//       setErrMessage("빈칸을 모두 적어주세요.");
//     } else if (changeNickname !== "" && password === passwordTwo) {
//       axios
//         .post("https://projectb1.com/user/change", {
//           password: password,
//           nickname: changeNickname,
//         })
//         .then((data) => console.log(data)); //만약에 닉네임을 수정하게 되면? 어디로 이동해야하나?
//     } else {
//       setErrMessage("두 비번이 일치하지 않습니다.");
//     }
//   };

//   useEffect(() => {
//     setErrMessage("");
//   }, [password, passwordTwo, changeNickname]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.box}>
//         <h3 className={styles.h3}>닉네임 또는 패스워드를 수정해주세요.</h3>
//       <div/>
//         <h5 className={styles.h5}>닉네임을 입력해주세요</h5>
//         <input
//         className={styles.input}
//         value="현재닉네임"
//         type="nickname"
//         ></input>
//         <br></br>
//         <input
//           className={styles.input}
//           name="changeNickname"
//           placeholder="수정할 닉네임을 입력해주세요."
//           value={changeNickname}
//           onChange={handleChange}
//           type="text"
//         ></input>
//         <h5 className={styles.h5}>수정할 패스워드를 입력해주세요.</h5>
//         <input
//           className={styles.input}
//           name="password"
//           placeholder="패스워드를 입력해주세요."
//           value={password}
//           onChange={handleChange}
//           type="password"
//         ></input>
//         <br></br>
//         <input
//           className={styles.input}
//           name="passwordTwo"
//           placeholder="패스워드를 다시 한번 입력해주세요."
//           value={passwordTwo}
//           onChange={handleChange}
//           type="password"
//         ></input>
//         <br></br>
//         <button className={styles.button} onClick={handleModify}>
//           수정하기
//         </button>
//         <div className={styles.error}>
//           {password !== passwordTwo ||
//           changeNickname === "" ||
//           password === "" ||
//           passwordTwo === ""
//             ? errMessage
//             : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modified;

import React, { useState, useEffect } from "react";
import "../css/Modified.css";

const axios = require("axios");
axios.defaults.withCredentials = true;

const Modified = () => {
  //db에서 userinfo.nickname을 가져와서 9번 input테그에 넣는다
  //만약 수정하기 버튼을 눌럿을때, 위패스워드와, 아래패스워드가 다르면 catch
  //만약 두개가 같으면 post요청을 한다.
  //만약 닉네임, 비밀번호, 비밀번호2 이 중에 한개라도 빠지면 모두 다 써달라는 말을 출력한다.

  const [form, setForm] = useState({
    changeNickname: "",
    password: "",
    passwordTwo: "",
  });

  const [errMessage, setErrMessage] = useState("");
  const { changeNickname, password, passwordTwo } = form;
  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleModify = () => {
    if (changeNickname === "" || password === "" || passwordTwo === "") {
      setErrMessage("빈칸을 모두 적어주세요.");
    } else if (changeNickname !== "" && password === passwordTwo) {
      axios
        .post("https://localhost:5000/user/change", {
          password: password,
          nickname: changeNickname,
        })
        .then((data) => console.log(data)); //만약에 닉네임을 수정하게 되면? 어디로 이동해야하나?
    } else {
      setErrMessage("두 비번이 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    setErrMessage("");
  }, [password, passwordTwo, changeNickname]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="h2"> 💖 닉네임 또는 패스워드를 수정해주세요.</h2>
          <div />
          <form className="form-wrapper">
            <div className="nickName">
              {" "}
              😁 닉네임을 수정해 주세요.
              <input className="input" value="현재닉네임" type="nickname" />
            </div>
            {/* <br></br> */}
            <input
              className="input"
              name="changeNickname"
              placeholder="수정할 닉네임을 입력해 주세요."
              value={changeNickname}
              onChange={handleChange}
              type="text"
            ></input>
            <div className="passwordmodified">
              {" "}
              🔐 비밀번호를 변경해 주세요.
              <input
                className="input"
                name="password"
                placeholder="패스워드를 입력해 주세요."
                value={password}
                onChange={handleChange}
                type="password"
              />
            </div>
            <br></br>
            <input
              className="input"
              name="passwordTwo"
              placeholder="패스워드를 다시 한번 입력해주세요."
              value={passwordTwo}
              onChange={handleChange}
              type="password"
            ></input>
            <br></br>
            <button className="button" onClick={handleModify}>
              수정하기
            </button>
            <div className="error-modified">
              {password !== passwordTwo ||
              changeNickname === "" ||
              password === "" ||
              passwordTwo === ""
                ? errMessage
                : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modified;
