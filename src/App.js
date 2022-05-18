import React from "react";
import "./App.css";
import { Article, Brand, Cta, Feature, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGPT3,
} from "./containers/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
