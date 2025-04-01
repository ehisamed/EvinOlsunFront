import React from 'react'
import './styleConfig/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App