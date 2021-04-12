import React from "react";

const CalculatorDisplay = ({ calcDisplay, answer }) => {
  const inputStyle = {
    resize: "none"
  };

  const answerInput = {
    position: "absolute",
    top: "155px",
    right: "372px",
    border: "none",
    direction: "rtl"
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
      <input style={answerInput} defaultValue={answer} />
    </>
  );
};

export default CalculatorDisplay;
