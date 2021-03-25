import React, { useState, createContext, useMemo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Modal from "./components/Modal";
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
// import { Modal } from 'bootstrap';
axios.defaults.withCredentials = true;
export const AppContext = createContext();
export const garbageContext = createContext();
function App() {
  const [items, setItems] = useState(initialState.items);
  const [deletedItems, setDeletedItems] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

// const [items, setItems] = useState(initialState.items);


// const [editItem, setEditItem] = useState(null)

useEffect(() => {
  axios
    .get("https://localhost:5000/text/textList")
    .then((res) => {
      console.log(res.data)
      setItems(res.data)
    })
    .catch(err =>{
      console.log(err)  
    })
})




// const findItem = itemId => {
//   const item = items.find(item => item.id === itemId)
  
//   setEditItem(item)
// }





// const deletedItem = (itemId) => {
//   setDeletedItems(items.filter(el => el.id === itemId))
// }

  const history = useHistory();
  const removeItem = (itemId) => {
    if (items.id !== itemId) {
      setItems(items.filter((el) => el.id !== itemId));
    } else {
      setDeletedItems(items.map((el) => el.id === itemId));
      console.log(setDeletedItems(itemId));
    }
  };
  // const removeValue = useMemo(() => ({ items, removeItem }), [removeItem]);
  const text = () => {
    setIsLogin(true);
  };
  const handleResponseSuccess = () => {
    console.log("로그인버튼작동");
    axios
      .get("https://localhost:5000/user/")
      .then((res) => {
        setIsLogin(true);
        setUserInfo({
          email: res.data.data.email,
          nickName: res.data.data.nickName,
        });
      })
      .then(() => {
        history.push("/mainpage");
      })
      .catch((err) => {
        alert("여기서 오류가 왜 낫는가?");
      });
  };
  const handleLogOut = () => {
    console.log("로그아웃버튼작동");
    axios
      .post("https://localhost:5000/user/signout")
      .then(() => {
        console.log("로그아웃 axios가 잘작동함");
        setIsLogin(false);
        setUserInfo(null);
      })
      .catch((err) => {
        alert("로그아웃이 실패");
      });
  };
  const removeValue = useMemo(() => ({items, removeItem}), [removeItem])
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
          <Route exact path="/" component={EmailLogin} />
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
            />
          </Route>
          <Route path="/mainpage" component={MainPage} />
          <Route path="/login" component={LandingPage} />
          <Route path="/list" component={List} />
          <Route path="/delete" component={Delete} />
          <Route path="/modified" component={Modified} />
          {/* <Redirect path="*" to="/login" /> */}
        </Switch>
        <Modal />
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}
export default App;