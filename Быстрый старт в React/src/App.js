import React, { useState } from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1); // Начальное значение

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="app-container">
      <h1>Dice Roller</h1>
      <Dice value={diceValue} />
      <button onClick={rollDice} className="roll-button">Roll the Dice!</button>
    </div>
  );
}

export default App;