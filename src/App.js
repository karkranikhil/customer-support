import React, { useState } from "react";

import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Submission from "./components/Submission/Submission";
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Banner} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/submission" component={Submission} />
      </Switch>
    </div>
  );
};
export default App;
