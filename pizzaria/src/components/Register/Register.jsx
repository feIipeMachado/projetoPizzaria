import './Register.css';
import logoPizzaria from '../../assets/logopizzaria.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export function Register({ onLogin }) {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const { username, email, password } = event.target;
        axios.post('http://localhost:8080/pizzaria-api/v1/users', {
            username: username.value,
            email: email.value,
            password: password.value
        }).then(function (response) {
            console.log(response)
            alert("Conta criada com sucesso!")
            navigate('/')
            onLogin()
        })
            .catch(function (error) {
                console.log(error.toJSON());
                alert("Erro na criação de conta.")
            });

    }

    return (
        <Form  onSubmit={handleSubmit} />
        
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
                <input type="username" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Nome"></input>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail"></input>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Senha"></input>
            </div>
            <button type="submit" class="btn btn-primary shared-button-style">Criar conta</button>

        </form>
    )
}
