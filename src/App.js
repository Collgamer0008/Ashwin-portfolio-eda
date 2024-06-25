import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import SDG from './components/SDG';
import Empathy from './components/Empathy';
import EDA from './components/EDA';
import Problem1 from './components/problem1';
import Problem2 from './components/problem2';
import Cleaning from './components/cleaning';
import Analysis from './components/analysis';
import Learning from './components/Learning';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sdg" element={<SDG />} />
            <Route path="/empathy" element={<Empathy />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/problem1" element={<Problem1 />} />
            <Route path="/problem2" element={<Problem2 />} />
            <Route path="/eda/:id" element={<EDA />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
