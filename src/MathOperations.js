// Import React and useState hook from 'react'
import React, { useState } from 'react';

// Define the MathOperations component
function MathOperations() {
  // State variables for input numbers and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Math operation functions
  const performOperation = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch(op) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }
    
    setResult(res.toString());
  };

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  // Render the component
  return (
    <div className="calculator-container">
      <div className="calculator-layout">
        {/* Row 1: Input Numbers */}
        <div className="input-row">
          <div className="input-group">
            <label className="input-label">First Number</label>
            <input 
              type="number" 
              value={num1} 
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
              className="number-input"
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">Second Number</label>
            <input 
              type="number" 
              value={num2} 
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
              className="number-input"
            />
          </div>
        </div>

        {/* Row 2: Operation Buttons */}
        <div className="operations-row">
          <button className="operation-btn add-btn" onClick={() => performOperation('+')}>
            Add
          </button>
          <button className="operation-btn subtract-btn" onClick={() => performOperation('-')}>
            Subtract
          </button>
          <button className="operation-btn multiply-btn" onClick={() => performOperation('*')}>
            Multiply
          </button>
          <button className="operation-btn divide-btn" onClick={() => performOperation('/')}>
            Divide
          </button>
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        </div>

        {/* Row 3: Result Display */}
        <div className="result-row">
          <div className="result-container">
            <div className="result-label">Result</div>
            <div className={`result-value ${result && (result.includes('Please') || result.includes('Cannot')) ? 'error' : ''}`}>
              {result || 'No result yet'}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Export the MathOperations component
export default MathOperations;