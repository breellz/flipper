import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Buy from './components/screens/Buy'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Sell from './components/screens/Sell'
import SignUp from './components/screens/SignUp'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
      <Route path="/" element = {<Buy/ >} />
      <Route path="/profile" element = {<Profile/ >} />
      <Route path="/sell" element = {<Sell/ >} />
      <Route path="/signup" element = {<SignUp/ >} />
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
