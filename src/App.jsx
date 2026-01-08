import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Products from './components/products'
import Blog from './components/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <div className='w-full h-screen'>
     <Navbar />
     <Hero />
     <Industries />
     <Products />
     <Blog />
     <Footer/>
    </div>
  )
}

export default App