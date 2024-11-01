import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Dashboard from './views/dashboard';
import Login from './views/login';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={localStorage.getItem('token') ? <Dashboard /> : <Login />} />
            </Routes>
    </Router>

    
  )
}

export default App
