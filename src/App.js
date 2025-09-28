import React from 'react';
import MathOperations from './MathOperations';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">🧮 Math Calculator</h1>
        <p className="app-subtitle">Simple & Beautiful Calculator for Basic Operations</p>
      </div>
      <MathOperations />
    </div>
  );
}

export default App;