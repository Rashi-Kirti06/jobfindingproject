import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/dashboard' element={< />}/>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App