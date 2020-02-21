import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Timer from "../components/Timer";
import Countdown from "../components/Countdown";
import "../styles/app.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/countdown" component={Countdown} />
      </Switch>
    </Router>
  );
}
