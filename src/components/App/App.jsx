import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Specialities from "../Specialities/Specialities";
import About from "../About/About";
import Team from "../Team/Team";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Specialities />
      <About />
      <Team />
    </>
  );
}

export default App;
