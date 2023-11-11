import React, { useState, useRef } from "react";
import Game from "./game";
import Output from "./output";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import methods from "../methods";

const Machine = () => {
  const defaultBoard = methods.generateBoard();
  const [board, setBoard] = useState(defaultBoard);
  const [bet, setBet] = useState(0);
  const [balance, setBalance] = useState(1000);
  const [winAmount, setWinAmount] = useState(0);
  const betRef = useRef(null);

  const handleSpin = () => {
    const betAmount = betRef.current.value;
    setBet(betAmount);
    if (betAmount >= 0.01 && balance >= betAmount) {
      setBalance(balance - betAmount);
      const newBoard = methods.generateBoard();
      setBoard(newBoard);
      const counts = methods.generateCounts(newBoard);
      const winningSyms = methods.winningSymbols(counts);
      const winMultiplier = methods.calculateWin(winningSyms);
      const win = Number((winMultiplier * betAmount).toFixed(2));
      if (win == 0) {
        setWinAmount(0);
      } else {
        setWinAmount(win);
        setBalance(balance + win);
      }
    } else {
      alert(
        "Please check your bet amount. You may not have enough balance or you are betting below the minimum."
      );
    }
  };

  return (
    <>
      <Game board={board} />
      <Output winAmount={winAmount} />
      <div className="betting-input">
        <div className="custom-input-group">
          <span className="input-group-label">Balance: ${balance}</span>
          <input
            type="number"
            className="custom-form-control"
            placeholder="Bet Amount"
            aria-label="Bet Amount"
            ref={betRef}
          />
          <button className="custom-button" type="button" onClick={handleSpin}>
            Spin Me!
          </button>
        </div>
      </div>
    </>
  );
};

export default Machine;
