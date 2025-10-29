import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ />}/>
        <Route path='/jobs' element={<Jobs />}/>
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