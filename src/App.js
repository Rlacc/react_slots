import React from "react";
import Header from "./components/header";
import Rules from "./components/rules";
import Machine from "./components/Machine";
import Snowfall from "react-snowfall";

const App = () => {
  return (
    <>
      <Snowfall />
      <Header />
      <Machine />
      <Rules />
    </>
  );
};

export default App;
