import React from "react";

const CalculatorDisplay = ({ calcDisplay }) => {
  const inputStyle = {
    resize: "none"
  };
  return (
    <>
      <textarea
        rows="3"
        cols="28"
        id="calcInputValue"
        type="number"
        defaultValue={calcDisplay}
        style={inputStyle}
      />
    </>
  );
};

export default CalculatorDisplay;
