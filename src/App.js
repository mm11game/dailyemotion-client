import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Validation from './components/Validation'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Mainpage from './components/Mainpage'
import List from './components/List'
import Modified from './components/Modified'
import EmailLogin from './components/EmailLogin'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {


  const userInfo = {
        // name: "brandon",
        email: "test@gmail.com",
        password: "test123"
      }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if ( details.email === userInfo.email && details.password === userInfo.password ) {
      console.log("정상적으로 로그인")
      setUser({
        // name: details.name,
        email: details.email,
        password: details.password
      })
    } else {
      console.log("이메일과 비밀번호를 입력해 주세요")
      setError("이메일과 비밀번호를 입력해주세요.") 
    }
  }

  const Logout = () => {
    console.log("로그아웃");
    setUser({ email: "", password: "" })
  }

  return (
    <div className = "app">

      <Router>
        <Navbar />

        <Switch>
          <Route path='/emaillogin' component={EmailLogin} exact>
            <EmailLogin />
          </Route>

          <Route path='/mainpage' component={Mainpage} exact>
            <Mainpage />
          </Route>

          <Route path='/list' component={List} exact>
            <List />
          </Route>

          <Route path='/modified' component={Modified} exact>
            <Modified />
          </Route>
        </Switch>
      </Router>
      {(user.email !="") ? (
        <div className = "welcome">
          <h2>환영합니다.<span>{(user.name)}</span></h2>
          <button onClick={Logout}>로그아웃</button>
        </div>
          ) : (
          <EmailLogin Login={Login} error={error} />
          )}
          <Footer />
    </div>
  )
}

export default App;
