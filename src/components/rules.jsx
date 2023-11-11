import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Rules = () => {
  const Symbols = Object.freeze({
    ELF: {
      symbol: "🧝",
      chance: 0.15,
      multiplier: 0.5,
      rangeStart: 1,
      rangeEnd: 225,
    },
    TREE: {
      symbol: "🎄",
      chance: 0.13,
      multiplier: 0.6,
      rangeStart: 226,
      rangeEnd: 425,
    },
    SNOWMAN: {
      symbol: "⛄",
      chance: 0.11,
      multiplier: 0.75,
      rangeStart: 426,
      rangeEnd: 595,
    },
    SANTA: {
      symbol: "🎅",
      chance: 0.09,
      multiplier: 1,
      rangeStart: 596,
      rangeEnd: 735,
    },
    BELL: {
      symbol: "🔔",
      chance: 0.07,
      multiplier: 1.5,
      rangeStart: 736,
      rangeEnd: 850,
    },
    COOKIE: {
      symbol: "🍪",
      chance: 0.05,
      multiplier: 2,
      rangeStart: 851,
      rangeEnd: 940,
    },
    REINDEER: {
      symbol: "🦌",
      chance: 0.03,
      multiplier: 3,
      rangeStart: 941,
      rangeEnd: 990,
    },
    MRSCLAUS: {
      symbol: "🧑‍🎄",
      chance: 0.02,
      multiplier: 5,
      rangeStart: 991,
      rangeEnd: 1190,
    },
    PRESENT: {
      symbol: "🎁",
      chance: 0.015,
      multiplier: 7,
      rangeStart: 1191,
      rangeEnd: 1340,
    },
    MILK: {
      symbol: "🥛",
      chance: 0.005,
      multiplier: 10,
      rangeStart: 1341,
      rangeEnd: 1500,
    },
  });

  const [rules, setRules] = useState(false);
  const toggleRules = () => {
    setRules(!rules);
  };

  return (
    <>
      <div className="ms-1">
        <Button variant="secondary" onClick={toggleRules}>
          ⓘ How to Play
        </Button>
        <Modal show={rules} onHide={toggleRules}>
          <Modal.Header closeButton>
            <Modal.Title>How to play</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center">
              Six or more symbols on the screen multiplies bet! Multipliers
              stack!
            </h4>
            <hr></hr>
            <ul>
              {Object.keys(Symbols).map((key, index) => {
                const symbol = Symbols[key];
                return (
                  <li>
                    {symbol.symbol} {(symbol.chance * 100).toFixed(0)}% chance |{" "}
                    {symbol.multiplier} Multiplier
                  </li>
                );
              })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleRules}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Rules;
