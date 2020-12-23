import React from "react";
import "./App.css";
import "./styles/main.css";
import Home from "./components/Home/Home";
import Summer from "./components/Summer/Summer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Summer />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
