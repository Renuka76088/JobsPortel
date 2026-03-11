import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import IndustriesPage from './Components/IndustriesPage'
import BlogPage from './Pages/BlogPage'
import CaseStudiesPage from './Pages/CaseStudiesPage'
import CareerPage from './Pages/CareerPage'
import ContactPage from './Pages/ContactPage'
import JobDetailsPage from './Pages/JobDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/industries' element={<IndustriesPage/>}/>
      <Route path='/insights/blogs' element={< BlogPage/>}/>
      <Route path='/insights/case-studies' element={< CaseStudiesPage/>}/>
      <Route path='/careers' element={< CareerPage/>}/>
      <Route path='/contact' element={< ContactPage/>}/>
      <Route path="/job-details/:id" element={<JobDetailsPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
