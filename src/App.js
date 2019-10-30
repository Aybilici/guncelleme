import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form1 from "./form1";
import Form2 from "./form2";
import FormMain from "./main";
import header from "./header";


export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/form" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/header" component={header} />
        <Route exact path="/" component={FormMain}/>
        <Route component={FormMain}/>
      </Switch>
    </Router>
  );
}
