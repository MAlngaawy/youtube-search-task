import React from "react";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
// @ts-ignore
import Results from "./components/Results.tsx";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Results />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

const Home = () => {
  return <div className="home">Search In Youtube</div>;
};
