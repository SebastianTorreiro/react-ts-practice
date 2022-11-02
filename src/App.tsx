import { useState } from 'react' 
import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import { LayoutContainer } from './styled-Components'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <LayoutContainer>
        <Home/>
      </LayoutContainer>
    </div>
  )
}

export default App
