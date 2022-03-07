import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Buy from './components/screens/Buy'
import SignIn from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Sell from './components/screens/Sell'
import SignUp from './components/screens/SignUp'
import Home from './components/screens/Home'
import Footer from './components/screens/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
      <Route path="/" element = {<Home/ >} />
      <Route path="/buy" element = {<Buy/ >} />
      <Route path="/profile" element = {<Profile/ >} />
      <Route path="/sell" element = {<Sell/ >} />
      <Route path="/signup" element = {<SignUp/ >} />
      <Route path="/signin" element = {<SignIn/ >} />
      
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
