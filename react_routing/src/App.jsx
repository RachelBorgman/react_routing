import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.jsx'
import Number from './components/Number'
import Phrase from './components/Phrase'
import Pick from './components/Pick'
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      {/* <p><Link to='/num/4'>4</Link></p> */}
      <p>Type in /num/(your number here) for a number route</p>
      <p>Type in /(your word here) for a word route</p>
      <p>Type in /(your number here)/(your font color here)/(your background color here) for a you-pick-all route</p>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/num/:number" element={<Number />}/>
        <Route path="/:word" element={<Phrase />}/>
        <Route path="/:word/:fontcolor/:backgroundcolor" element={<Pick />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
