import React, { Component } from 'react';
import './calculator.css';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
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
                <div onClick={this.operationHandeler} className="screen"> {total || operation || next} </div>
                <div onClick={this.operationHandeler} className="btn">Ac</div>
                <div onClick={this.operationHandeler} className="btn">+/-</div>
                <div onClick={this.operationHandeler} className="btn">%</div>
                <div onClick={this.operationHandeler} className="btn operator">&#xf7;</div>
                <div onClick={this.operationHandeler} className="btn">7</div>
                <div onClick={this.operationHandeler} className="btn">8</div>
                <div onClick={this.operationHandeler} className="btn">9</div>
                <div onClick={this.operationHandeler} className="btn operator">x</div>
                <div onClick={this.operationHandeler} className="btn">4</div>
                <div onClick={this.operationHandeler} className="btn">5</div>
                <div onClick={this.operationHandeler} className="btn">6</div>
                <div onClick={this.operationHandeler} className="btn operator">-</div>
                <div onClick={this.operationHandeler} className="btn">1</div>
                <div onClick={this.operationHandeler} className="btn">2</div>
                <div onClick={this.operationHandeler} className="btn">3</div>
                <div onClick={this.operationHandeler} className="btn operator">+</div>
                <div onClick={this.operationHandeler} className="btn span-2">0</div>
                <div onClick={this.operationHandeler} className="btn">.</div>
                <div onClick={this.operationHandeler} className="btn operator">=</div>
            </div>
        );
    }
}

export default Calculator;
