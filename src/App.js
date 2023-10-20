import React from "react";
import Bet from "./components/bet";
import Output from "./components/output";
import Header from "./components/header";
import Rules from "./components/rules";
import Game from "./components/game";
import Machine from "./components/Machine";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Machine />
      </div>
      <Rules />
    </>
  );
};

export default App;
