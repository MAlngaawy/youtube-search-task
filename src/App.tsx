import React from "react";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
import "./App.scss";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        this is Parent
        <p className="App__child">This is Child</p>
      </div>
    </div>
  );
};

export default App;
