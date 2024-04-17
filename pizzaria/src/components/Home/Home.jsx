import { useState } from 'react';
import { MyNavbar } from '../MyNavBar/MyNavBar';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/pizza-forna-lenha.png';
import slide2 from '../../assets/pizza2.png'
import '../Home/Home.css'

export function Home({ isLoggedIn, isAdmin, handleLogout }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <MyNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
                <Carousel.Item className="custom-carousel-item">
                    <img
                        src={slide1}
                        alt="First slide"
                        className="custom-carousel-image"
                    />
                    <Carousel.Caption className="custom-carousel-caption">
                        <h3><a href="/contato">Pizzas artesanais de qualidade</a></h3>
                        <p>Clique para fazer seu pedido agora.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="custom-carousel-item">
                    <img
                        className="custom-carousel-image"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="custom-carousel-caption">
                    <h3><a href="/cardapio">Grande variedade de sabores</a></h3>
                        <p>Clique para ver o cardápio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

