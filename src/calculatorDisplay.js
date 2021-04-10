import React from "react";

const CalculatorDisplay = ({ calcDisplay }) => {
  return (
    <>
      <textarea
        rows="3"
        cols="28"
        id="calcInputValue"
        type="number"
        defaultValue={calcDisplay}
      />
    </>
  );
};

export default CalculatorDisplay;
