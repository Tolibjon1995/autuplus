import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contactus from './components/Contactus'
import Galireya from './components/Galireya'
import About from './components/About'
import Home from './components/Home'
import Navbars from './components/Navbars'
import Foters from './components/Foters'
import './sass/style.scss'


function App() {
      return (
            <div>
                  <Navbars />
                  <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/galireya' element={<Galireya />} />
                        <Route path='/contact' element={<Contactus />} />
                  </Routes>
                  <Foters />
            </div>
      )
}

export default App
