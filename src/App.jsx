import { useState } from 'react'
import Home from './assets/components/Home'
import './App.css'
import Navbar from './assets/components/Navbar'
import About from './assets/components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <About />
     
    </>
  )
}

export default App
