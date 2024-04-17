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
                <h1 className='whatsapptext'>Faça seu pedido via WhatsApp</h1>
            </div>

            <a
                aria-label="Chat on WhatsApp" href="https://wa.me/555193348443">
                <img alt="Chat on WhatsApp" src={logoWhatsapp} className='logowhatsapp' />
            </a>

            <div><h1 className='prices'>Nossos preços:</h1></div>

            <div className='container'>
                <ul className='list'>
                    <li>
                        <h2>Pizzas</h2>
                    </li>
                    <li>
                        Média (35cm - 8 fatias) R$49,90
                    </li>
                    <li>
                        Grande (40cm - 12 fatias) R$64,90
                    </li>
                    <li>
                        Família (45cm - 16 fatias) R$79,90
                    </li>
                </ul>

                <ul className='list'>
                    <li>
                        <h2>Bebidas</h2>
                    </li>
                    <li>
                        Refrigerante 2 litros  R$10,00
                    </li>
                    <li>
                        Água mineral 500ml R$3,00
                    </li>
                    <li>
                        Água mineral 1 litro R$6,00
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='cardstext'>Horário de funcionamento:</h1>
                <h2> Das 18:30 as 23:30</h2>
            </div>

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