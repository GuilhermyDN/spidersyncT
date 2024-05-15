import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Missao from './Missao';
import Valores from './Valores';
import QuemSomos from './QuemSomos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
