// import React, { useState, createContext, useMemo, useEffect } from 'react';
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import EmailSignUp from './components/EmailSignUp';
// import LandingPage from './components/LandingPage';
// import List from './components/List';
// import axios from 'axios';

// import Test from './components/Test';

// import { initialState } from '../src/assets/state';

// // textContext
// export const AppContext = createContext()

// /**
//  * 1. createContext 를 사용해서 context 생성 <- 네이밍 규칙은 그 안에 담기는 데이터를 참고
//  * 2. 생성된 context 를 사용해서 Provider 로 자식 컴포넌트에 value 전달
//  * 3. 자식 컴포넌트에서 useContext 를 사용해서 Provider 가 전해달해준 value 접근
//  */

// function App() {

// const [items, setItems] = useState(initialState.items);
// const removeItem = (itemId) => {
//     setItems(items.filter(el => el.id !== itemId))
//   }

// // const [deletedItems, setDeletedItems] = useState("")

// // const goToGarbage = (itemId) => {
// //   setDeletedItem(items.filter(el => el.id === itemId))  
// // }

// // const deletedItem =(itemId) => {
// //   setItems(items.filter(el => el.id === itemId))
// // }


// // useEffect (()=> {
// //   axios
// //    .post("https://projectb1.com/text/garbage", {
// //      text_status: items.text_status,
// //      text_id: items.text_id
// //    })
// //    .then(res => {

// //      setDeletedItems(res.data.emotionlist_id)
// //    })
// // }, [setDeletedItems])


// const removeValue = useMemo(() => ({items, removeItem}), [removeItem])

//   return (
//     <AppContext.Provider value={removeValue}>

//       <Router>
//         <Switch>
//           <Route exact path="/test" component={Test} />
//           <Route path="/signup" component={EmailSignUp} />
//           <Route path="/login" component={LandingPage} />
//           <Route path="/list" component={List}/>
//           <Redirect path="*" to="/login" />
//         </Switch>
//       </Router>
//     </AppContext.Provider>
//   )


import "./App.css";
import MainPage from "./components/MainPage";
import Modified from "./components/Modified";
import Delete from "./components/Delete";
import EmailSignUp from './components/EmailSignUp';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Validation from "./components/Validation";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Mainpage";
import List from "./components/List";
import Modified from "./components/Modified";
import EmailLogin from "./components/EmailLogin";
import Footer from "./components/Footer";

function App() {
  const userInfo = {
    // name: "brandon",
    email: "test@gmail.com",
    password: "test123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === userInfo.email &&
      details.password === userInfo.password
    ) {
      console.log("정상적으로 로그인");
      setUser({
        // name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("이메일과 비밀번호를 입력해 주세요");
      setError("이메일과 비밀번호를 입력해주세요.");
    }
  };

  const Logout = () => {
    console.log("로그아웃");
    setUser({ email: "", password: "" });
  };

  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/emaillogin" component={EmailLogin} exact>
            <EmailLogin />
          </Route>

          <Route path="/mainpage" component={Mainpage} exact>
            <Mainpage />
          </Route>
         <Route path="/signup" component={EmailSignUp} />
        <Route path="/login" component={LandingPage} />
          <Route path="/list" component={List} exact>
            <List />
          </Route>
          <Route path="/modified" component={Modified} exact>
            <Modified />
          </Route>
          <Redirect path="*" to="/login" />
        </Switch>
      </Router>
      
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            환영합니다.<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>로그아웃</button>
        </div>
      ) : (
        <EmailLogin Login={Login} error={error} />
      )}
      <Footer />
    </div>
  );
}
export default App;


