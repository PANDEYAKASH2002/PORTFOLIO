import React from 'react'
import Navbar from './Components/Navbar'
import Mainpage from './Components/Mainpage'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>

            <Route path="/" element={<Mainpage/>} ></Route>
            <Route path="/Mainpage" element={<Mainpage/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
