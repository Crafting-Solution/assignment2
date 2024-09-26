import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Slider - Hero */}
      <Slider />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App