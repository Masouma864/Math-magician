import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.operationHandeler = this.operationHandeler.bind(this);
  }

    operationHandeler = (e) => {
      this.setState((state) => calculate(state, e.target.textContent));
    }

    render() {
      const { total, next, operation } = this.state;
      return (
        <div className="container">
          <button type="button" onClick={this.operationHandeler} className="screen">
            {total || ''}
            {operation || ''}
            {next || ''}
          </button>
          <button type="button" onClick={this.operationHandeler} className="btn">AC</button>
          <button type="button" onClick={this.operationHandeler} className="btn">+/-</button>
          <button type="button" onClick={this.operationHandeler} className="btn">%</button>
          <button type="button" onClick={this.operationHandeler} className="btn operator">&#xf7;</button>
          <button type="button" onClick={this.operationHandeler} className="btn">7</button>
          <button type="button" onClick={this.operationHandeler} className="btn">8</button>
          <button type="button" onClick={this.operationHandeler} className="btn">9</button>
          <button type="button" onClick={this.operationHandeler} className="btn operator">x</button>
          <button type="button" onClick={this.operationHandeler} className="btn">4</button>
          <button type="button" onClick={this.operationHandeler} className="btn">5</button>
          <button type="button" onClick={this.operationHandeler} className="btn">6</button>
          <button type="button" onClick={this.operationHandeler} className="btn operator">-</button>
          <button type="button" onClick={this.operationHandeler} className="btn">1</button>
          <button type="button" onClick={this.operationHandeler} className="btn">2</button>
          <button type="button" onClick={this.operationHandeler} className="btn">3</button>
          <button type="button" onClick={this.operationHandeler} className="btn operator">+</button>
          <button type="button" onClick={this.operationHandeler} className="btn span-2">0</button>
          <button type="button" onClick={this.operationHandeler} className="btn">.</button>
          <button type="button" onClick={this.operationHandeler} className="btn operator">=</button>
        </div>
      );
    }
}

export default Calculator;
