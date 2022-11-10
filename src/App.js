import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
