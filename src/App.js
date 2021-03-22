import "./App.css";
import MainPage from "./components/MainPage";
import Modified from "./components/Modified";
import Delete from "./components/Delete";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Delete />
      <MainPage />
      <Modified />
    </div>
  );
}
export default App;
