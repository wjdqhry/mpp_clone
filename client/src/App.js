import React from "react";
import { Route } from 'react-router-dom';
import Home from "pages/Home";
import Login from "pages/Login";
import Notice from "pages/Notice";
import NoticeDetail from "./pages/NoticeDetail";

function App() {
  return (
    <div className="App" >
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/notice" component={Notice}/>
      <Route path="/noticedetail" component={NoticeDetail}/>
    </div>
  );
}

export default App;
