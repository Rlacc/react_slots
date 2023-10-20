import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Rules = () => {
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
              <li>🧝 25% chance | 60% multiplier</li>
              <li>🎄 20% chance | 80% multiplier</li>
              <li>⛄ 17.5% chance | 95% multiplier</li>
              <li>🎅 15% chance | 110% multiplier</li>
              <li>🔔 10% chance | 175% multiplier</li>
              <li>🍪 7.5% chance | 225% muliplier</li>
              <li>🦌 3.5% chance | 400% multiplier</li>
              <li>🧑‍🎄 1% chance | 1000% muliplier</li>
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
