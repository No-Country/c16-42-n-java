import { useNavigate } from "react-router-dom";
import { UserHook } from "../../context/UserContext";
import "./NavBar.css";

export const Navbar = () => {
  const { status, setStatus } = UserHook();

  const navigate = useNavigate();

  console.log("Estoy en navbar " + status);

  const changeStatus = () => {
    if (status) {
      sessionStorage.setItem("st", "false");
      setStatus(false);
      navigate("/login");
  console.log("Estoy en changeStatus " + status);

    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="./img/logo2.svg" />

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
             {/* <li className="nav-item">
                <a className="nav-link" href="/paciente">
                  Paciente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/secretario">
                  Secretario
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/doctor">
                  Doctor
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Elegir ...
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
                    <a className="dropdown-item" href="/login">
                      Alta de usuario
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/modificar">
                      Modifcar usuario
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/eliminar">
                      Eliminar usuario
                    </a>
                  </li>
                </ul>
              </li>
              {/* <div className={styles.container}>
                  <li>
                    <a className="nav-link" aria-disabled="true">
                      Logout
                    </a>
                  </li>
                </div> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form> */}
          </div>
          <button
            className="nav-link"
            aria-disabled="true"
            onClick={changeStatus}
          > <img className="iconLogout" src="/img/logout.png" />
          </button>
        </div>
      </nav>
    </>
  );
};
