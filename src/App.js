import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'
import About from './About'
import Footer from './Footer'

import Nami from './Nami'
import Bikcraft from './Bikcraft'

export default function App() {
  return (
    <body>
      <Navbar/>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />

          {/* Projects */}
          <Route path='/nami' element={<Nami />} />
          <Route path='/bikcraft' element={<Bikcraft />} /> 
        </Routes>
      </div>

      <Footer />
    </body>
  );
}
