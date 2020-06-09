import React from "react";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <h1>My First Bootcamp Assignment!</h1>
      <Login name="Bilal" age="40" hobby="Coding" />
      <hr />
      <Login name="Umair" age="32" hobby="watching Ertugal" />
    </div>
  );
}

export default App;
