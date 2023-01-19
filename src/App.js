import React, { PureComponent } from 'react';
import Calculator from './components/Calculator';
import './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <Calculator />
      </main>
    );
  }
}
