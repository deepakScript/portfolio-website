import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
// import ExampleComponent from './components/ExampleComponent'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <section id='home' className='min-h-screen'/>
      <section id='services' className='min-h-screen bg-amber-900'/>
    </div>
    // <>
    //   <ExampleComponent />
    // </>
  )
}

export default App
