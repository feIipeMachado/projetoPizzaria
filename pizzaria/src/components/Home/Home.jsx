import { MyNavbar } from '../MyNavBar/MyNavBar';


export function Home({ isLoggedIn, handleLogout }) {
    return (
        <div>
            <MyNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            {isLoggedIn && <div>Olá, usuário</div>}
        </div>
    )
}
