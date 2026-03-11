import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
