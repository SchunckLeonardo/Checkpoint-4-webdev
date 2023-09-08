import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Produtos from './Produtos'
import Sobre from './Sobre'
import './assets/reset.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
