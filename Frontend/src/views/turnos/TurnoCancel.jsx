import { Navbar } from "../../components/navbar/NavBar";
import styles from "./turno.module.css";
import { UserHook } from "../../context/UserContext";
import { getDoctorDni, getPatientDni } from "../../data/HttpClient";
import { useState } from "react";

export default function TurnoCancel() {
  const [] = useState("");
  const [] = useState("");

  const [patientFindDni, setPatientFindDni]   = useState();
  const [patientDni, setPatientDni]   = useState();

  const enviarDoctor = (event) => {
    getDoctorDni(doctorDni)
      .then((data) => {
        setDoctorFindDni(data);
        console.log("El doctor es: ", data);

        // Maneja la respuesta del servidor aquí
      })
      .catch((error) => {
        // setMessage("Usuario o Contraseña inválidos");
        // console.error("Error al crear el usuario en login:", error);
        // Maneja el error aquí
      });

    event.preventDefault();
    setDoctorFindDni([]);
    console.log("El doctorFindDni: :" + doctorFindDni);
    // setUser(userInitial);
  };

  //Doctor
  const handleDoctorOnChange = (event) => {
    setDoctorDni(event.target.value);
    // console.log("El doctor en el handler es: ", doctorDni);
  };

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.sContainer}>
          <div className={`${styles.form} "row g-3"`}>
            <div className={styles.tittle}>
              <h1>CANCELAR TURNO</h1>
            </div>
            <div className="row">
              <div className="col">
                <form className={styles["form-list"]} onSubmit={enviarDoctor}>
                  <div>
                  <div className={styles["form-search"]}>
                  Ingrese DNI del Paciente
                  </div>
                  <div className={`${styles.input} m-0`}>
                    <input
                      type="number"
                      placeholder="Ingrese DNI (sin puntos)"
                      id="patientDni"
                      name="patientDni"
                      value={patientDni}
                      onChange={handleDoctorOnChange}
                    />
                    <button type="submit">
                      <img src="/public/img/search.png" />
                    </button>
                  </div>
                  </div>
                  <div>
                  <div className={styles["form-search"]}>
                    Ingrese fecha del turno
                  </div>
                  <div className={`${styles.input} m-0`}>
                    <input
                      type="text"
                      placeholder="Ingrese DNI (sin puntos)"
                      id="patientDate"
                      name="patientDate"
                      value={patientDate}
                      onChange={handleDoctorOnChange}
                    />
                    <button type="submit">
                      <img src="/public/img/search.png" />
                    </button>
                  </div>
                  </div>
                  <div>
                  <div className={styles["form-search"]}>
                    ingrese hora del turno
                  </div>
                  <div className={`${styles.input} m-0`}>
                    <input
                      type="text"
                      placeholder="Ingrese hora del turno (Formato 09:00:00)"
                      id="patientTime"
                      name="patientTime"
                      value={patientTime}
                      onChange={handleDoctorOnChange}
                    />
                    <button type="submit">
                      <img src="/public/img/search.png" />
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
