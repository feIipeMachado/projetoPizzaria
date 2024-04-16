import { MyNavbar } from '../MyNavBar/MyNavBar';

export function Contact({ isLoggedIn, handleLogout }) {
    return (
        <div>
            <MyNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <div>Faça seu pedido via WhatsApp</div>
            <a aria-label="Icone whatsapp"
                href="https://wa.me/1XXXXXXXXXX">
                <i class="fa-brands fa-whatsapp fa-xl"></i>
            </a>
        </div>
    )
}