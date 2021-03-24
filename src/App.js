import React, { useState, createContext, useMemo } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import EmailSignUp from "./components/EmailSignUp";
import LandingPage from "./components/LandingPage";
import List from "./components/List";
import EmailLogin from "./components/EmailLogin";
import MainPage from "./components/MainPage";
import Modified from "./components/Modified";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Delete from "./components/Delete";
import axios from "axios";
import { initialState } from "../src/assets/state";
axios.defaults.withCredentials = true;

export const AppContext = createContext();
export const garbageContext = createContext();

function App() {
  const [items, setItems] = useState(initialState.items);
  const [deletedItems, setDeletedItems] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const removeItem = (itemId) => {
    if (items.id !== itemId) {
      setItems(items.filter((el) => el.id !== itemId));
    } else {
      setDeletedItems(items.map((el) => el.id === itemId));
      console.log(setDeletedItems(itemId));
    }
  };
  const removeValue = useMemo(() => ({ items, removeItem }), [removeItem]);

  const text = () => {
    setIsLogin(true);
  };
  const handleResponseSuccess = () => {
    console.log("로그인버튼작동");
    axios
      .get("https://test.projectb1.com:5000/user/userInfo")
      .then((res) => {
        setIsLogin(true);
        console.log(
          "앱 45번줄, 핸들석세스 aixos get/user 요청 후 오는것",
          res.data
        );
        setUserInfo(res.data);
      })
      .catch((err) => {
        alert("실패");
      });
  };
  const handleLogOut = () => {
    console.log("로그아웃버튼작동");
    axios
      .post("https://test.projectb1.com:5000/user/signout")
      .then(() => {
        console.log("로그아웃 axios가 잘작동함");
        setIsLogin(false);
        setUserInfo(null);
      })
      .catch((err) => {
        alert("실패");
      });
  };

  return (
    <AppContext.Provider value={removeValue}>
      <Router>
        <Navbar
          handleResponseSuccess={handleResponseSuccess}
          handleLogOut={handleLogOut}
          isLogin={isLogin}
          userInfo={userInfo}
        />
        <Switch>
          <Route exact path="/" component={isLogin ? MainPage : LandingPage} />
          {/* <Route
            path="/"
            render={() => {
              isLogin ? <Redirect to="/mainpage" /> : <Redirect to="/login" />;
            }}
          /> */}
          <Route exact path="/signup" component={EmailSignUp} />
          <Route path="/emaillogin">
            <EmailLogin
              isLogin={isLogin}
              handleResponseSuccess={handleResponseSuccess}
              text={text}
            />
          </Route>
          <Route path="/mainpage" component={MainPage} />
          <Route path="/login" component={LandingPage} />
          <Route path="/list" component={List} />
          <Route path="/delete" component={Delete} />
          <Route path="/modified" component={Modified} />
          <Redirect path="*" to="/login" />
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}
// path='/'
//             render={() => {
//               if (isLogin) {
//                 return <Redirect to='/mypage' />;
//               }
//               return <Redirect to='/login' />;
//             }}
export default App;
