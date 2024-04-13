import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Menu }  from './components/Menu/Menu'
import { AddPizzaFlavour } from './components/AddPizzaFlavour/AddPizzaFlavour'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cardapio" element={<Menu/>}/>
        <Route path="/add" element={<AddPizzaFlavour/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
