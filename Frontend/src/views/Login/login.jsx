import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { loginUser } from "../../data/HttpClient";

const userInitial = {
  username: "",
  password: ""
}

export default function Login() {

  const [user, setUser] = useState(userInitial);

  const { username, password } = user;

  const enviar = (event) => {
    loginUser(user)
    .then(data => {
      console.log('Usuario creado:', data);
      // Maneja la respuesta del servidor aquí
    })
    .catch(error => {
      console.error('Error al crear el usuario:', error);
      // Maneja el error aquí
    });
    const {target:{name, value}} = event;
    event.preventDefault();
    setUser({
      [name]: value
    });
    // setUser(userInitial);
    console.log(event.target)
  };

  useEffect(() => {
    
  }, [user]);

  const userOnchange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  }

  console.log(user);



  return (
    <div className={styles.container}>
      <div className="abrir-modal animacion fadeIn">
        <div
          className="modal bg-opacity-25"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className={styles.sContainer}>
            <div className="modal-dialog w-50">
              <div
                className={`${styles.m} modal-content bg-opacity-30 form-control`}
                id="m"
              >
                <div className="modal-content bg-opacity-30 form-control p-0 border border-0">
                  <div className={styles.modalContent}>
                    <form onSubmit={enviar}>
                      <div className="text-center p-3">
                        <img
                          className="mt-5"
                          src="img/logo2.svg"
                          alt="login"
                          style={{ width: "30%", margin: "auto" }}
                        />

                        <h3 className="mt-3">BIENVENIDO</h3>
                      </div>
                      <div
                        className="modal-body text-center"
                        style={{ width: "70%", margin: "auto" }}
                      >
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            onChange={userOnchange}
                            aria-describedby="userNameHelp"
                            placeholder="Usuario"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={userOnchange}
                            aria-describedby="passwordHelp"
                            placeholder="Contraseña"
                          />
                        </div>
                        <div className={styles.link}>
                          <button
                            type="submit"
                            className={`${styles.buttonIngresar} btn btn-success btn-opacity-10`}
                          >
                            Ingresar
                          </button>
                        </div>
                      </div>
                      <div className="text-center">
                        <div>
                          <Link to="#" className="text-white mb-0">
                            ¿Perdiste tu contraseña?
                          </Link>
                        </div>
                        <div>
                          <Link to="#" className="text-white mb-5">
                            ¿No tienes cuenta? Registrate
                          </Link>
                        </div>
                      </div>
                    </form>
                    <div className="text-center mt-5" style={{ width: "100%" }}>
                      <Link to="/">
                        <button
                          type="submit"
                          className={`${styles.buttonVolver} btn btn-success btn-opacity-10 `}
                        >
                          Volver
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //    <div className={styles.container}>

    //         <div className={styles.main}>

    //             <h1>Ingresa tu usuario y contraseña</h1>
    //             <form action="">
    //                 <label>
    //                     Usuario
    //                 </label>
    //                 <br></br>
    //                 <input placeholder="Pepitoperez123..."></input>
    //                 <br></br>
    //                 <label>
    //                     Contraseña
    //                 </label>
    //                 <br></br>
    //             </form>

    //         </div>
    //     </div>
    //                 <input placeholder="********"></input>
  );
}
