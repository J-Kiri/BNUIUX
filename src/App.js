import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'
import About from './About'
import Footer from './Footer'

export default function App() {
  return (
    <body>
      <Navbar/>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

      <Footer />
    </body>
  );
}
