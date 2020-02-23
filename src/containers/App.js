import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./Timer";
import Countdown from "./Countdown";
import "../styles/app.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Timer} />
        <Route path="/countdown" component={Countdown} />
      </Switch>
    </Router>
  );
}
