import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import Post from "./pages/Post";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user" exact component={User}></Route>
        <Route path="/post/:userId" exact component={Post}></Route>
        
      </Switch>
    </Router>
  );
}

export default App;
