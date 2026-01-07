import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'

function App() {
  return (
    <div className='w-full h-screen'>
     <Navbar />
     <Hero />
     <Industries/>
    </div>
  )
}

export default App