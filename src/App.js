import React from "react";
import "./App.css";
import "./styles/main.css";
import Home from "./components/Home/Home";
import Summer from "./components/Summer/Summer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Summer />
      <Skills />
    </div>
  );
}

export default App;
