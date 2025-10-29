import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";




const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element=/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/post/application/:jobId' element={<PostApplication />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App