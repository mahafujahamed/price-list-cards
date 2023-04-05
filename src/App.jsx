import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navbar/Navbar'
import PriceList from './components/Price/PriceList'

function App() {
 

  return (

    <div className="App">
      <Nav></Nav>
      <PriceList></PriceList>
    </div>
  )
}

export default App;
