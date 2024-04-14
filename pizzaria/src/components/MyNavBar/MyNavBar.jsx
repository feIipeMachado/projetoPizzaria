import './MyNavBar.css'
import Button from '@mui/material/Button';

import loginIcon from '../../assets/login-icon.svg'



export function MyNavbar() {

    
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>
                Pizzaria
            </a>
            <ul>
                <li>
                    <a href='/cardapio' className='nav-link'>Cardápio</a>
                </li>
                <li>
                    <a href='/contato' className='nav-link'>Contato</a>
                </li>
                <li>
                    <a href='/sobre-nos' className='nav-link'>Sobre nós</a>
                </li>
                <li>
                    <Button href='/login' className='buttonLogin' variant="outlined" 
                    startIcon={<img src={loginIcon} alt="Login" />}>
                        <span>Login</span>
                    </Button>
                </li>
            </ul>

        </nav>
    )
}