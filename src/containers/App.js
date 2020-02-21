import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Timer from "../components/Timer";
import Countdown from "../components/Countdown";
import Nav from "../components/Nav";
import "../styles/app.scss";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/timer" component={Timer} />
      </Switch>
    </Router>
  );
}
