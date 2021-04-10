import React, { useState } from "react";
import "./styles.css";
import CalculatorDisplay from "./calculatorDisplay";
import CalculatorButtons from "./calculatorButtons";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (btnValue) => {
    setInputValue(btnValue);
  };

  const renderCalcButtons = (btnValue) => {
    return <CalculatorButtons value={btnValue} onClick={handleClick} />;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CalculatorDisplay calcDisplay={inputValue} />
      <>
        <div>
          {renderCalcButtons(7)}
          {renderCalcButtons(8)}
          {renderCalcButtons(9)}
          {renderCalcButtons("+")}
        </div>
        <div>
          {renderCalcButtons(4)}
          {renderCalcButtons(5)}
          {renderCalcButtons(6)}
          {renderCalcButtons("-")}
        </div>
        <div>
          {renderCalcButtons(1)}
          {renderCalcButtons(2)}
          {renderCalcButtons(3)}
          {renderCalcButtons("x")}
        </div>
        <div>
          {renderCalcButtons("C")}
          {renderCalcButtons(0)}
          {renderCalcButtons(".")}
          {renderCalcButtons("/")}
          {renderCalcButtons("=")}
        </div>
      </>
    </div>
  );
}
