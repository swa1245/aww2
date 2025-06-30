import React from 'react'
import Nvabar from './components/Nvabar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturePeoject from './components/FeaturePeoject'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900  text-white'>
        <Nvabar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eyes/>
        <FeaturePeoject/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App
