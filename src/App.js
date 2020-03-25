import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
function App() {
  const [startState, setStartState] = useState(false)
  const getStartedHandler= ()=>{
    setStartState(true);
  }
  return (
    <div>
      <Header />
      {startState ? <Form /> : <Banner getStartedHandler={getStartedHandler} />}
    </div>
  );
}

export default App;
