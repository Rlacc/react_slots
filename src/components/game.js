import React, { useState } from "react";
import Row from "./rows";

const Game = ({ board }) => {
  return (
    <>
      <div className="board slot-background custom-border">
        <Row symbols={board[0]} />
        <Row symbols={board[1]} />
        <Row symbols={board[2]} />
        <Row symbols={board[3]} />
        <Row symbols={board[4]} />
      </div>
    </>
  );
};

export default Game;
