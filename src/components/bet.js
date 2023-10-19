import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Bet = () => {
  return (
    <>
      <InputGroup className="mt-1">
        <InputGroup.Text>Balance: $0.00</InputGroup.Text>
        <Form.Control
          placeholder="Bet amount"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
        <button class="btn btn-success" type="button" id="spin-button">
          Spin
        </button>
      </InputGroup>
    </>
  );
};

export default Bet;
