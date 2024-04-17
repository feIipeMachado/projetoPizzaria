import { MyNavbar } from '../MyNavBar/MyNavBar';


export function Home({ isLoggedIn, isAdmin, handleLogout }) {
    return (
        <div>
            <MyNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            {isLoggedIn && <div>Olá, usuário</div>}
            {isLoggedIn && isAdmin && <div>Olá, admin</div>}
        </div>
    )
}
