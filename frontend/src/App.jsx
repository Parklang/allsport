import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Standings from './pages/Standings';
import News from './pages/News';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
