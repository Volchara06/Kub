import React from 'react';
import '../App.css'; // Импортируем стили, чтобы использовать их

function Dice({ value }) {
  const imageUrl = `/images/dice${value}.png`;

  return (
    <div className="dice-container">
      <img src={imageUrl} alt={`Dice with value ${value}`} className="dice-image" />
    </div>
  );
}

export default Dice;