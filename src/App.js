import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'
import About from './About'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}
