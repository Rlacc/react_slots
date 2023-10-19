import React, { useState, useRef } from "react";
import Game from "./game";
import Output from "./output";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import generateBoard from "../methods";

const Machine = () => {
  const defaultBoard = generateBoard();
  const [board, setBoard] = useState(defaultBoard);
  const [bet, setBet] = useState(0);
  const [balance, setBalance] = useState(1000);
  const betRef = useRef(null);

  const handleSpin = () => {
    const betAmount = betRef.current.value;
    setBet(betAmount);
    if (betAmount >= 0.01 && balance >= betAmount) {
      setBalance(balance - betAmount);
      const newBoard = generateBoard();
      setBoard(newBoard);
    } else {
      alert(
        "Please check your bet amount. You may not have enough balance or you are betting below the minimum."
      );
    }
  };

  return (
    <>
      <Game board={board} />
      <Output />
      <div className="row">
        <div className="container-fluid col-6">
          <div className="row">
            <InputGroup className="mt-1">
              <InputGroup.Text>Balance: ${balance}</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Bet amount"
                aria-label="Dollar amount (with dot and two decimal places)"
                ref={betRef}
              />
              <button
                className="btn btn-success"
                type="button"
                id="spin-button"
                onClick={handleSpin}
              >
                Spin
              </button>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Machine;