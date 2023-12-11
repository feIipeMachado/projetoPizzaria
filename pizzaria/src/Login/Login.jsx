import "./Login.css";
import logoPizzaria from '../assets/logopizzaria.png'

export function Login() {
  return (
    <div className="Login">
      <form
        onSubmit={(event) => {
          event.preventDefault;
          alert("login feito com sucesso");
        }}
      >
        <img src={logoPizzaria} />
        <input type="text" placeholder="usuário" id="usuario" />
        <input type="password" placeholder="senha" id="senha" />
        <input type="submit" placeholder="Login"></input>
      </form>
    </div>
  );
}
