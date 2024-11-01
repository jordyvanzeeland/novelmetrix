import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Dashboard from './views/dashboard';
import Login from './views/login';
import Challenges from './views/challenges';
import ChallengeDetail from './views/challengedetails';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={localStorage.getItem('token') ? <Dashboard /> : <Login />} />
                <Route exact path="/challenges" element={<Challenges />} />
                <Route exact path="/challenges/:challengeid" element={<ChallengeDetail />} />
            </Routes>
    </Router>

    
  )
}

export default App
