import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import generateBoard from "../methods";

const Bet = () => {
  const handleSpin = () => {
    const newBoard = generateBoard();
  };

  return (
    <>
      <div className="row">
        <div className="container-fluid col-6">
          <div className="row">
            <InputGroup className="mt-1">
              <InputGroup.Text>Balance: $0.00</InputGroup.Text>
              <Form.Control
                placeholder="Bet amount"
                aria-label="Dollar amount (with dot and two decimal places)"
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

export default Bet;
