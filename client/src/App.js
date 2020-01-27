import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Navbar";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Profile from "./components/ProfilePage/ProfilePage";
import Rules from "./components/Rules";


function App() {
  return (
    <Router>
      <div>
      <Nav />
      </div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/chat" component={Chat} />   
          <Route exact path="/rules" component={Rules} />       
          <Route path = "*" component={NoMatch} /> 
          {/* correct if I'm wrong but should it not be * for the one above? */}
        </Switch>
    </Router>
  );
}

export default App;