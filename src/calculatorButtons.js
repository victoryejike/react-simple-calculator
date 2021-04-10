import React from "react";

const CalculatorButtons = ({ value, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default CalculatorButtons;
