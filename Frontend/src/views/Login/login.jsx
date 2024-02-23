import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div
        className="modal bg-success bg-opacity-25"
        tabIndex="-1"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content bg-success bg-opacity-30 form-control">
            <form>
              <div className="text-center p-3">
                <img
                  className="mt-5"
                  src="img/pin.png"
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
                    id="userName"
                    name="username"
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
                    aria-describedby="passwordHelp"
                    placeholder="Contraseña"
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <button
                    type="submit"
                    className=" btn btn-success btn-opacity-10"
                    style={{
                      width: "inherit",
                      margin: "auto",
                      backgroundColor: "#7DCEA0 ",
                    }}
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
                  className=" btn btn-success btn-opacity-10 "
                  style={{
                    width: "auto",
                    margin: "auto",
                    backgroundColor: "#7DCEA0 ",
                  }}
                >
                  Volver
                </button>
              </Link>
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
