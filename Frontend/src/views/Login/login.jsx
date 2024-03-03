import { Link, useNavigate } from "react-router-dom";
import "./login.css";
// import "./login.css";
import { useEffect, useState } from "react";
import { createUser, loginUser } from "../../data/HttpClient";
import { UserHook } from "../../context/UserContext";

const userInitial = {
  name: "",
  lastname: "",
  username: "",
  password: "",
};

export default function Login() {
  const [user, setUser] = useState(userInitial);
  const { name, lastname, username, password } = user;

  const [message, setMessage] = useState("");

  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const { status, setStatus } = UserHook(); //Utilizo el hook personalizado


  const navigate = useNavigate();

  const enviar = (event) => {
    loginUser(user)
      .then((data) => {
        console.log("Usuario creado:", data);
        sessionStorage.setItem("st", "true");
        setStatus(sessionStorage.getItem("st"));
        navigate("/info");
        // Maneja la respuesta del servidor aquí
      })
      .catch((error) => {
        setUser(userInitial);
        setMessage("Usuario o Contraseña inválidos");
        console.error("Error al crear el usuario en login:", error);
        // Maneja el error aquí
      });
    const {
      target: { name, value },
    } = event;
    event.preventDefault();
    setUser({
      [name]: value,
    });
    // setUser(userInitial);
    console.log(event.target);
  };

  const create = (event) => {
    createUser(user)
      .then((data) => {
        console.log("Usuario creado:", data);
        sessionStorage.setItem("st", "true");
        setStatus(sessionStorage.getItem("st"));
        navigate("/login");
        // Maneja la respuesta del servidor aquí
      })
      .catch((error) => {
        setUser(userInitial);
        setMessage("Usuario o Contraseña inválidos");
        console.error("Error al crear el usuario en login:", error);
        // Maneja el error aquí
      });
    const {
      target: { name, value },
    } = event;
    event.preventDefault();
    setUser({
      [name]: value,
    });
    // setUser(userInitial);
    console.log(event.target);
  };

  console.log("El estado es " + status);

  useEffect(() => {}, [user]);

  const userOnchange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsSignupVisible(false);
  };

  const handleSignupClick = () => {
    setIsLoginVisible(false);
    setIsSignupVisible(true);
  };

  console.log(user);

 

  return (
    <>
      <div className="form-structor">
        <form onSubmit={create}>
          <div className={`signup ${isSignupVisible ? "slide-up" : ""}`}>
            <h2 className="form-title" id="signup" onClick={handleLoginClick}>
              BIENVENIDO
            </h2>
            <div className="form-holder">
              <input
                type="text"
                className="input"
                onChange={userOnchange}
                placeholder="Nombre"
                id="name"
                name="name"
                value={name}
                required
              />
              <input
                type="text"
                className="input"
                onChange={userOnchange}
                placeholder="Apellido"
                id="lastname"
                name="lastname"
                value={lastname}
                required
              />
              <input
                type="text"
                className="input"
                onChange={userOnchange}
                placeholder="Usuario"
                id="username"
                name="username"
                value={username}
                required
              />
              <input
                type="password"
                className="input"
                onChange={userOnchange}
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                required
              />
            </div>
            <button className="submit-btn">Registrate</button>
          </div>
        </form>

        <form onSubmit={enviar}>
          <div className={`login ${isLoginVisible ? "slide-up" : ""}`}>
            <div className="center">
              <h2 className="form-title" id="login" onClick={handleSignupClick}>
                ¿Estás registrado? Ingresa acá
              </h2>
              <div className="form-holder">
                <input
                  type="text"
                  className="input"
                  onChange={userOnchange}
                  placeholder="Usuario"
                  id="username"
                  name="username"
                  value={username}
                  required
                />
                <input
                  type="password"
                  className="input"
                  onChange={userOnchange}
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  required
                />
              </div>
              <button className="submit-btn">Loguearse</button>
              <div className="msgErrorLogin">{message}</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
