import './Login.css';
import logoPizzaria from '../../assets/logopizzaria.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export function Login({ onLogin }) {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const { email, password } = event.target;
        axios.post('http://localhost:8080/pizzaria-api/v1/users/login', {
            email: email.value,
            password: password.value,
        }).then(function (response) {
            console.log(response)
            alert("login feito com sucesso!")
            navigate('/')
            onLogin(response.data.adminStatus)
        })
            .catch(function (error) {
                console.log(error.toJSON());
                alert("Email ou senha inválidos")
            });

    }

    return (
        <Form onSubmit={handleSubmit} />

    )

}

function Form({ onSubmit }) {
    return (
        <form className='form' onSubmit={(event) => {
            event.preventDefault();
            onSubmit(event)
        }}>
            <img src={logoPizzaria} className='img'></img>
            <div class="form-group">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail"></input>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Senha"></input>
            </div>
            <Link to="/register" className="btn btn-primary shared-button-style" >Criar conta</Link>
            <button type="submit" class="btn btn-primary shared-button-style">Fazer Login</button>

        </form>
    )
}

