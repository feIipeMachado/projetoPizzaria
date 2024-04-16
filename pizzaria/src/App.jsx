import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Menu }  from './components/Menu/Menu'
import { useState, useEffect } from 'react'
import { Contact } from './components/Contact/Contact'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    window.location.reload()

  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}/>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
        <Route path="/cardapio" element={<Menu isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}/>
        <Route path="/contato" element={<Contact isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
