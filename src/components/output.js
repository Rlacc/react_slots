import React, { useState } from "react";

const Output = ({ winAmount }) => {
  return (
    <>
      <div className="win-total">
        <p className="scoreboard-font">Amount Won ${winAmount}</p>
      </div>
    </>
  );
};

export default Output;
