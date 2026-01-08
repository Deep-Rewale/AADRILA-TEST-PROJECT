import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Products from './components/products'
import Blog from './components/Blog'


function App() {
  return (
    <div className='w-full h-screen'>
     <Navbar />
     <Hero />
     <Industries />
     <Products />
     <Blog />
    </div>
  )
}

export default App