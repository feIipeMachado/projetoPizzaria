import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Menu }  from './components/Menu/Menu'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cardapio" element={<Menu/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
