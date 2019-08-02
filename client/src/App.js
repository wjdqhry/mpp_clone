import React from "react";
import { Route } from 'react-router-dom';
import Home from "pages/Home"
import Login from "pages/Login"

function App() {
  return (
    <div className="App" >
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;
