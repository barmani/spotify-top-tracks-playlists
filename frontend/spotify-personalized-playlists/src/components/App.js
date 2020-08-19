import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
