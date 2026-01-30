import "./App.css";
import { useState, useEffect } from "react";

import Display from "./components/display";
import Board from "./components/board";

function App() {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <Display />
        <Board />
      </div>
    </div>
  )
}

export default App
