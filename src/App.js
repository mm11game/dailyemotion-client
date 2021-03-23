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
//import axios from 'axios';

import { initialState } from "../src/assets/state";

export const AppContext = createContext();

function App() {
  const [items, setItems] = useState(initialState.items);
  const removeItem = (itemId) => {
    setItems(items.filter((el) => el.id !== itemId));
  };
  const removeValue = useMemo(() => ({ items, removeItem }), [removeItem]);

  return (
    <AppContext.Provider value={removeValue}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={EmailSignUp} />
          <Route path="/emaillogin" component={EmailLogin} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/login" component={LandingPage} />
          <Route path="/list" component={List} />
          <Route path="/modified" component={Modified} />
          <Redirect path="*" to="/login" />
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
