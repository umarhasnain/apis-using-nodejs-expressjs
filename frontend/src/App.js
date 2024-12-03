import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CodeBlock from './components/TryitSec'
import JsonPlaceholderInfo from './components/CodeBlock'
import Routes from './components/Routes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <CodeBlock/>
      <JsonPlaceholderInfo/>
      <Routes/>
      <Footer/>
    </div>
  )
}

export default App
