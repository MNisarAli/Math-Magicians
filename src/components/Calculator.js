import React, { PureComponent } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      operation: null,
      next: null,
    };
  }

  newOperation = (event) => {
    const targetButton = event.target.innerText;
    const getResult = calculate(this.state, targetButton);
    this.setState(getResult);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="calc-app">
        <input className="calc-result" type="text" value={`${total || ''} ${operation || ''} ${next || ''}`} />
        <button type="button" onClick={this.newOperation}>AC</button>
        <button type="button" onClick={this.newOperation}>+/-</button>
        <button type="button" onClick={this.newOperation}>%</button>
        <button type="button" className="operator" onClick={this.newOperation}>÷</button>
        <button type="button" onClick={this.newOperation}>7</button>
        <button type="button" onClick={this.newOperation}>8</button>
        <button type="button" onClick={this.newOperation}>9</button>
        <button type="button" className="operator" onClick={this.newOperation}>x</button>
        <button type="button" onClick={this.newOperation}>4</button>
        <button type="button" onClick={this.newOperation}>5</button>
        <button type="button" onClick={this.newOperation}>6</button>
        <button type="button" className="operator" onClick={this.newOperation}>-</button>
        <button type="button" onClick={this.newOperation}>1</button>
        <button type="button" onClick={this.newOperation}>2</button>
        <button type="button" onClick={this.newOperation}>3</button>
        <button type="button" className="operator" onClick={this.newOperation}>+</button>
        <button type="button" className="zero" onClick={this.newOperation}>0</button>
        <button type="button" onClick={this.newOperation}>.</button>
        <button type="button" className="operator" onClick={this.newOperation}>=</button>
      </section>
    );
  }
}
