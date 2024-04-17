import { MyNavbar } from '../MyNavBar/MyNavBar';
import logoWhatsapp from '../../assets/whatsapp-svgrepo-com.svg'
import '../Contact/Contact.css'
import logoVisa from '../../assets/visa-svgrepo-com.svg'
import logoPix from '../../assets/pix-svgrepo-com.svg'
import logoMastercard from '../../assets/mastercard-svgrepo-com.svg'
import logoElo from '../../assets/elo-svgrepo-com.svg'
import logoAmex from '../../assets/amex-svgrepo-com.svg'
import logoHipercard from '../../assets/hipercard-3-svgrepo-com.svg'

export function Contact({ isLoggedIn, handleLogout }) {
    return (
        <div>
            <MyNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <div>
                <h1 className='whatsapptext'>Faça seu pedido via WhatsApp</h1></div>
            <a
                aria-label="Chat on WhatsApp" href="https://wa.me/555193348443">
                <img alt="Chat on WhatsApp" src={logoWhatsapp} className='logowhatsapp' />
            </a>
            <div>
                <h1 className='cardstext'>Aceitamos:</h1></div>
            <a
                aria-label="visaSvg">
                <img alt="Cartões aceitos" src={logoVisa} className='logoVisa' />
            </a>
            <a
                aria-label="mastercardSvg">
                <img alt="Cartões aceitos" src={logoMastercard} className='logoMastercard' />
            </a>
            <a
                aria-label="pixSvg">
                <img alt="Cartões aceitos" src={logoPix} className='logoPix' />
            </a>
            <a
                aria-label="eloSvg">
                <img alt="Cartões aceitos" src={logoElo} className='logoPix' />
            </a>
            <a
                aria-label="amexSvg">
                <img alt="Cartões aceitos" src={logoAmex} className='logoAmex' />
            </a>
            <a
                aria-label="amexSvg">
                <img alt="Cartões aceitos" src={logoHipercard} className='logoAmex' />
            </a>
        </div>
    )
}