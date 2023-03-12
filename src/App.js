import React, { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/pages/Calculator';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';
import './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<Quotes />} />
          </Routes>
        </main>
      </>
    );
  }
}
