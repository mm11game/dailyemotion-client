import React, { useState, createContext, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import EmailSignUp from './components/EmailSignUp';
import LandingPage from './components/LandingPage';
import List from './components/List';
import axios from 'axios';

import Test from './components/Test';

import { initialState } from '../src/assets/state';

// textContext
export const AppContext = createContext()

/**
 * 1. createContext 를 사용해서 context 생성 <- 네이밍 규칙은 그 안에 담기는 데이터를 참고
 * 2. 생성된 context 를 사용해서 Provider 로 자식 컴포넌트에 value 전달
 * 3. 자식 컴포넌트에서 useContext 를 사용해서 Provider 가 전해달해준 value 접근
 */

function App() {

const [items, setItems] = useState(initialState.items);
const removeItem = (itemId) => {
    setItems(items.filter(el => el.id !== itemId))
  }

// const [deletedItems, setDeletedItems] = useState("")

// const goToGarbage = (itemId) => {
//   setDeletedItem(items.filter(el => el.id === itemId))  
// }

// const deletedItem =(itemId) => {
//   setItems(items.filter(el => el.id === itemId))
// }


// useEffect (()=> {
//   axios
//    .post("https://projectb1.com/text/garbage", {
//      text_status: items.text_status,
//      text_id: items.text_id
//    })
//    .then(res => {

//      setDeletedItems(res.data.emotionlist_id)
//    })
// }, [setDeletedItems])


const removeValue = useMemo(() => ({items, removeItem}), [removeItem])

  return (
    <AppContext.Provider value={removeValue}>

      <Router>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route path="/signup" component={EmailSignUp} />
          <Route path="/login" component={LandingPage} />
          <Route path="/list" component={List}/>
          <Redirect path="*" to="/login" />
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}

export default App;


