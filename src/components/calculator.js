import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const operationHandeler = (e) => {
    const updatedObject = calculate(obj, e.target.textContent);
    setObj(updatedObject);
  };

  return (
    <div className="container">
      <button type="button" onClick={operationHandeler} className="screen">
        {obj.total || ''}
        {obj.operation || ''}
        {obj.next || ''}
      </button>
      <button type="button" onClick={operationHandeler} className="btn">AC</button>
      <button type="button" onClick={operationHandeler} className="btn">+/-</button>
      <button type="button" onClick={operationHandeler} className="btn">%</button>
      <button type="button" onClick={operationHandeler} className="btn operator">&#xf7;</button>
      <button type="button" onClick={operationHandeler} className="btn">7</button>
      <button type="button" onClick={operationHandeler} className="btn">8</button>
      <button type="button" onClick={operationHandeler} className="btn">9</button>
      <button type="button" onClick={operationHandeler} className="btn operator">x</button>
      <button type="button" onClick={operationHandeler} className="btn">4</button>
      <button type="button" onClick={operationHandeler} className="btn">5</button>
      <button type="button" onClick={operationHandeler} className="btn">6</button>
      <button type="button" onClick={operationHandeler} className="btn operator">-</button>
      <button type="button" onClick={operationHandeler} className="btn">1</button>
      <button type="button" onClick={operationHandeler} className="btn">2</button>
      <button type="button" onClick={operationHandeler} className="btn">3</button>
      <button type="button" onClick={operationHandeler} className="btn operator">+</button>
      <button type="button" onClick={operationHandeler} className="btn span-2">0</button>
      <button type="button" onClick={operationHandeler} className="btn">.</button>
      <button type="button" onClick={operationHandeler} className="btn operator">=</button>
    </div>
  );
}
export default Calculator;
