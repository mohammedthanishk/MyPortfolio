import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <h1 class="text-3xl text-red font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
