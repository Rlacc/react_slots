import React, { useState } from "react";

const Output = ({ winAmount }) => {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="row justify-content-center mt-1">
            <div className="output-box col-md-4">
              <h2 className="text-center scoreboard-font">
                Amount Won ${winAmount}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
