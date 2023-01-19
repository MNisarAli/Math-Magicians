import React, { PureComponent } from 'react';

export default class Calculator extends PureComponent {
  render() {
    return (
      <section className="calc-app">
        <input className="calc-result" type="text" value={0} />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operator">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator">+</button>
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="operator">=</button>
      </section>
    );
  }
}
