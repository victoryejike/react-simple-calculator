import React from "react";

const CalculatorDisplay = ({ calcDisplay }) => {
  const displayStyle = {
    border: "1px solid black",
    height: "30px",
    width: "130px"
  };
  return (
    <>
      <div type="number" style={displayStyle}>
        {calcDisplay}
      </div>
    </>
  );
};

export default CalculatorDisplay;
