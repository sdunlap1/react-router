import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Candy from './components/Candy';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Vending Machine</Link>
      </nav>

      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </div>
  );
}

export default App;
