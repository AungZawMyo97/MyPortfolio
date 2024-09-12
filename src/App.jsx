import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './navigation/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Bio from './sections/Bio'
import YtNoApi from './sections/YtNoApi'
import Footer from './navigation/Footer'

import './App.css'

function App() {

  return(
    <>
    <div className="container mx-auto w-full max-w-none bg-custom-gray-black">
      <Header />
      <Hero />
    </div>
    <Bio />
    <Services />
    <YtNoApi />
    <Footer />
    </>
  )
}

export default App