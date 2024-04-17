import './MyNavBar.css'
import Button from '@mui/material/Button';

import loginIcon from '../../assets/login-icon.svg'



export function MyNavbar({ isLoggedIn, handleLogout }) {


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
                    <a href='/contato' className='nav-link'>Faça seu pedido</a>
                </li>
        

                <li>
                    {isLoggedIn ? (
                        <li>
                            <Button onClick={handleLogout}
                                className='buttonLogin'
                                variant="outlined"
                                startIcon={<img src={loginIcon} alt="Logout" />}>
                                <span>Logout</span>
                            </Button>
                        </li>
                    ) : (
                        <li>
                            <Button href='/login' className='buttonLogin' variant="outlined"
                                startIcon={<img src={loginIcon} alt="Logout" />}>
                                <span>Login</span>
                            </Button>
                        </li>
                    )}
                </li>
                <li>
                    {isLoggedIn ? (
                        <li>
                            <a href="/" onClick={(event) => { handleLogout(); event.preventDefault(); }} className='nav-link' class='inactive'>Logout</a>
                        </li>
                    ) : (
                        <li>
                            <a href='/login' className='nav-link' class='inactive'>Login</a>
                        </li>
                    )}
                </li>
            </ul>

        </nav>
    )
}


