import React from "react";
import { Route } from 'react-router-dom';
import Home from "pages/Home";
import Login from "pages/Login";
import Notice from "pages/Notice";

function App() {
  return (
    <div className="App" >
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/notice" component={Notice}/>
    </div>
  );
}

export default App;
