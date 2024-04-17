import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login/Login'
import { Home } from './components/Home/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Menu }  from './components/Menu/Menu'
import { useState, useEffect } from 'react'
import { Contact } from './components/Contact/Contact'
import { Register } from './components/Register/Register'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  
  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const adminStatus = sessionStorage.getItem('isAdmin')
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
    if (adminStatus === 'true') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false); 
    }
  }, []);

  const handleLogin = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus)
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('isAdmin', adminStatus ? 'true' : 'false'); // Armazena o status de admin como string 'true' ou 'false'
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false); // Reinicia o estado de isAdmin ao fazer logout
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isAdmin');
    window.location.reload();

  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleLogout={handleLogout}/>}/>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
        <Route path="/cardapio" element={<Menu isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}/>
        <Route path="/contato" element={<Contact isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}/>
        <Route path="/register" element={<Register onLogin={handleLogin}/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
