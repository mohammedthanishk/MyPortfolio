import { useState } from 'react'
import Home from './assets/components/Home'
import './App.css'
import Navbar from './assets/components/Navbar'
import About from './assets/components/About'
import Project from './assets/components/Project'
import Contact from './assets/components/contact'
import Footer from './assets/components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Project />
     <Contact />
     <Footer />
     
    </>
  )
}

export default App
