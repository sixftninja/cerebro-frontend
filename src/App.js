import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DbConnect from './components/DbConnect';
import './App.css'; // Assuming you have global styles you want to keep
import envConfig from './envConfig'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dbconnect" element={<DbConnect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
