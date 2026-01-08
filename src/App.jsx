import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Products from './components/products'


function App() {
  return (
    <div className='w-full h-screen'>
     <Navbar />
     <Hero />
     <Industries />
     <Products />
    </div>
  )
}

export default App