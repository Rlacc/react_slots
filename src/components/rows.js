import React, { useState } from "react";
import Cell from "./cell.js";

const Row = ({ symbols }) => {
  return (
    <>
      <div className="row">
        <Cell symbol={symbols[0]} />
        <Cell symbol={symbols[1]} />
        <Cell symbol={symbols[2]} />
        <Cell symbol={symbols[3]} />
        <Cell symbol={symbols[4]} />
        <Cell symbol={symbols[5]} />
      </div>
    </>
  );
};

export default Row;
