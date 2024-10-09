import { useState } from 'react'

import './App.css';

const colorCodes = {
  negro: 0,
  marron: 1,
  rojo: 2,
  naranja: 3,
  amarillo: 4,
  verde: 5,
  azul: 6,
  violeta: 7,
  gris: 8,
  blanco: 9,
};

const multiplierCodes = {
  negro: 1,
  marron: 10,
  rojo: 100,
  naranja: 1000,
  amarillo: 10000,
  verde: 100000,
  azul: 1000000,
  violeta: 10000000,
  gris: 100000000,
  blanco: 1000000000,
};

const toleranceCodes = {
  marron: 1,
  rojo: 2,
  verde: 0.5,
  azul: 0.25,
  violeta: 0.1,
  gris: 0.05,
  dorado: 5,
  plateado: 10,
};

function ResistanceCalculator() {
  const [band1, setBand1] = useState('negro');
  const [band2, setBand2] = useState('negro');
  const [multiplier, setMultiplier] = useState('negro');
  const [tolerance, setTolerance] = useState('marron');
  const [resistance, setResistance] = useState(null);

  const calculateResistance = () => {
    const value = (colorCodes[band1] * 10 + colorCodes[band2]) * multiplierCodes[multiplier];
    setResistance(`${value} Ω ±${toleranceCodes[tolerance]}%`);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Calculadora de Resistencias</h1>
        <div className="input-section">
          <div>
            <label>Band 1: </label>
            <select value={band1} onChange={(e) => setBand1(e.target.value)}>
              {Object.keys(colorCodes).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Band 2: </label>
            <select value={band2} onChange={(e) => setBand2(e.target.value)}>
              {Object.keys(colorCodes).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Multiplier: </label>
            <select value={multiplier} onChange={(e) => setMultiplier(e.target.value)}>
              {Object.keys(multiplierCodes).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Tolerance: </label>
            <select value={tolerance} onChange={(e) => setTolerance(e.target.value)}>
              {Object.keys(toleranceCodes).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <button onClick={calculateResistance}>Calcular</button>
        </div>
      </div>
      
      <div className="result">
        <h2>Selected Colors</h2>
        <ul>
          <li>Band 1: {band1}</li>
          <li>Band 2: {band2}</li>
          <li>Multiplier: {multiplier}</li>
          <li>Tolerance: {tolerance}</li>
        </ul>
        {resistance && <h2>Resistencia: {resistance}</h2>}
      </div>
      <div className="image-container">
          <img
            src="https://th.bing.com/th/id/OIP.EJfm2gsYo-il4fzOVnntTgHaEc?rs=1&pid=ImgDetMain"
            alt="Resistor example"
            className="resistor-image"
          />
        </div>
    </div>
    
  );
}

export default ResistanceCalculator;