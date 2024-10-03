import React from 'react'
import './App.css'
import LandingPage from './screens/LandingPage'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ListView from './screens/ListView'
import DetailsView from './screens/DetailsView'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <LandingPage/>
      {/* SAP */}
      <ListView/>
      <Footer/>
    </div>
  )
}

export default App
