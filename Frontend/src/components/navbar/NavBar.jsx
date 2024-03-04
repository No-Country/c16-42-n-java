import { useNavigate } from "react-router-dom";
import { UserHook } from "../../context/UserContext";
import "./NavBar.css";

export const Navbar = () => {
  const { status, setStatus, user } = UserHook();
  const { rol } = user;

  console.log("El rol rol  del NavBar es: " + user.rol)

  const navigate = useNavigate();

  console.log("Estoy en navbar " + status);

  const changeStatus = () => {
    if (status) {
      // sessionStorage.setItem("st", "false");
      sessionStorage.clear();
      setStatus(false);
      navigate("/login");
      console.log("Estoy en changeStatus " + status);
    }
  };
console.log("El rol actualizado es: " + JSON.parse(sessionStorage.getItem("rol")));
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="/public/img/logo2.svg" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Turnos ...
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/turnos/buscar">
                      Consultar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/turnos/solicitar">
                    Solicitar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/turnos/modificar">
                    Modificar
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Buscar ...
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/paciente">
                      Paciente
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/doctor">
                      Doctor
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/secretario">
                      Secretario
                    </a>
                  </li>
                </ul>
              </li>

              {rol == "ADMINISTRADOR" ? 
              (<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Administrar
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Secretario
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/administrar/secretaria/crear">
                          Crear Secretario
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/administrar/secretaria/actualizar">
                          Modificar Secretario
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/administrar/secretaria/eliminar">
                          Eliminar Secretario
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Doctor
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Crear Doctor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Modificar Doctor
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Eliminar Doctor
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Paciente
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Crear Paciente
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Modificar Paciente
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Eliminar Paciente
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Administrador
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Crear Administrador
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Modificar Administrador
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Eliminar Administrador
                        </a>
                      </li>
                    </ul>
                  </li>


                </ul>
              </li>)
              :
              ("")}
            </ul>
          </div>
          <button
            className="nav-link"
            aria-disabled="true"
            onClick={changeStatus}
          >
            {" "}
            <img className="iconLogout" src="/img/logout.png" />
          </button>
        </div>
      </nav>
    </>
  );
};
