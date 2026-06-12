import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CampusTour from './pages/CampusTour';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:campusId" element={<CampusTour />} />
      </Routes>
      <AIAssistant />
    </Router>
  );
}

export default App;
