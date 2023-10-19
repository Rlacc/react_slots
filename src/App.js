import React from "react";
import Row from "./components/rows";
import Bet from "./components/bet";
import Output from "./components/output";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="container-fluid custom-border col-9 slot-background">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </div>
        </div>
        <div className="row">
          <Output />
        </div>
        <div className="row">
          <div className="container-fluid col-6">
            <div className="row">
              <Bet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
