import "./App.css";
import { useState } from "react";

import Display from "./components/display";
import Board from "./components/board";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("");

  const handleDigitClick = (digit) => {
    if (digit === "," && currentValue.includes(",")) return;
    setCurrentValue(currentValue + digit);
  };

  const handleOperatorClick = (operator) => {
    if (currentValue === "" && previousValue === "") return;

    if (previousValue !== "" && currentValue !== "") {
      calculateResult();
    }

    setOperation(operator);
    setPreviousValue(currentValue || previousValue);
    setCurrentValue("");
  };

  const calculateResult = () => {
    if (previousValue === "" || currentValue === "" || !operation) return;

    const prev = parseFloat(previousValue.replace(",", "."));
    const current = parseFloat(currentValue.replace(",", "."));
    let calculatedResult = 0;

    switch (operation) {
      case "+":
        calculatedResult = prev + current;
        break;
      case "-":
        calculatedResult = prev - current;
        break;
      case "×":
        calculatedResult = prev * current;
        break;
      case "÷":
        calculatedResult = current !== 0 ? prev / current : "Erro";
        break;
      case "%":
        calculatedResult = prev % current;
        break;
      default:
        return;
    }

    const formattedResult = typeof calculatedResult === "number" 
      ? calculatedResult.toString().replace(".", ",")
      : calculatedResult;

    setResult(formattedResult);
    setCurrentValue(formattedResult);
    setPreviousValue("");
    setOperation(null);
  };

  const handleClear = () => {
    setCurrentValue("");
    setPreviousValue("");
    setOperation(null);
    setResult("");
  };

  const handleBackspace = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };

  const handlePlusMinus = () => {
    if (currentValue === "") return;
    if (currentValue.startsWith("-")) {
      setCurrentValue(currentValue.substring(1));
    } else {
      setCurrentValue("-" + currentValue);
    }
  };

  return (
    <div className="app-container">
      <div className="calculator-container">
        <Display 
          currentValue={currentValue}
          previousValue={previousValue}
          operation={operation}
          result={result}
        />
        <Board 
          onDigitClick={handleDigitClick}
          onOperatorClick={handleOperatorClick}
          onEquals={calculateResult}
          onClear={handleClear}
          onBackspace={handleBackspace}
          onPlusMinus={handlePlusMinus}
        />
      </div>
    </div>
  )
}

export default App