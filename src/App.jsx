import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from './authentication/Header';
import SignUp from './authentication/SignUp';
import LandingPage from './components/LandingPage';
import NotFound from './authentication/NotFound';

function App() {
  
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <Router>
      <Routes>
        {/* Unauthenticated routes */}
        <Route path="/" element={<Header/>} />
        <Route path="/signup" element={<SignUp/>} />

        {/* Protected route */}
        <Route 
          path="/auth"
          element={isAuthenticated ? <LandingPage/> : <Navigate to="/" />}
        />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
