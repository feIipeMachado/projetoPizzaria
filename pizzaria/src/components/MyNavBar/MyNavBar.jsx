import './MyNavBar.css'
import Button from '@mui/material/Button';

import loginIcon from '../../assets/login-icon.svg'



export function MyNavbar() {


    return (
        <nav className='nav'>
            <input type='checkbox' id='check'></input>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <a href='/' className='site-title'>
                Pizzaria
            </a>
            <ul>
                <li>
                    <a href='/' class='active'>Home</a>
                </li>
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
                <li>
                    <a href='/login' className='nav-link' class='inactive'>Login</a>
                </li>
            </ul>

        </nav>
    )
}