import React from "react";

const Cell = ({ symbol }) => {
  return (
    <div className="col-2 d-flex justify-content-center align-items-center">
      <p className="emoji">{symbol}</p>
    </div>
  );
};

export default Cell;
