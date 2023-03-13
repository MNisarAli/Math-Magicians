import React, { useState } from 'react';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    operation: null,
    next: null,
  });

  const newOperation = (event) => {
    const targetButton = event.target.innerText;
    const getResult = calculate(state, targetButton);
    setState(getResult);
  };

  const { total, operation, next } = state;
  return (
    <>
      <h1>Let&apos;s do some math!</h1>
      <section className="calc-app">
        <input className="calc-result" type="text" value={`${total || ''} ${operation || ''} ${next || ''}`.trim()} readOnly />
        <button type="button" onClick={newOperation}>AC</button>
        <button type="button" onClick={newOperation}>+/-</button>
        <button type="button" onClick={newOperation}>%</button>
        <button type="button" className="operator" onClick={newOperation}>÷</button>
        <button type="button" onClick={newOperation}>7</button>
        <button type="button" onClick={newOperation}>8</button>
        <button type="button" onClick={newOperation}>9</button>
        <button type="button" className="operator" onClick={newOperation}>x</button>
        <button type="button" onClick={newOperation}>4</button>
        <button type="button" onClick={newOperation}>5</button>
        <button type="button" onClick={newOperation}>6</button>
        <button type="button" className="operator" onClick={newOperation}>-</button>
        <button type="button" onClick={newOperation}>1</button>
        <button type="button" onClick={newOperation}>2</button>
        <button type="button" onClick={newOperation}>3</button>
        <button type="button" className="operator" onClick={newOperation}>+</button>
        <button type="button" className="zero" onClick={newOperation}>0</button>
        <button type="button" onClick={newOperation}>.</button>
        <button type="button" className="operator" onClick={newOperation}>=</button>
      </section>
    </>
  );
};

export default Calculator;
