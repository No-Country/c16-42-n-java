import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../components/navbar/NavBar";
import { UserHook } from "../../../context/UserContext";
import styles from "./doctor.module.css";
import { createPatient, getSecretary } from "../../../data/HttpClient";
import { useEffect, useState } from "react";

const doctorInitial = {
  dni: 0,
  name: "",
  email: "",
  address: "",
  phoneNumber: "",
  speciality: "",
  office: "",
  schedule: "",
  licenseNumber: "",
  secretaryId: 0,
};

export default function Create() {
  const { doctor, setDoctor } = UserHook(); //Utilizo el hook personalizado
  const {
    dni,
    name,
    email,
    address,
    phoneNumber,
    speciality,
    office,
    schedule,
    licenseNumber,

  } = doctor;

  const [secretary, setSecretary] = useState([]); //Cargo la lista de Secretarios

  const [secretaryId, setSecretaryId] = useState(); //Guardo el Secretario Seleccionado

  useEffect(() => {
    const fetchSecretary = () => {
      getSecretary()
        .then((data) => {
          // Maneja la respuesta del servidor aquí
          setSecretary(data);
          console.log("Lista de Secretarios:", secretary);
        })
        .catch((error) => {
          console.error("Error al Listar los secretarios:", error);
          // Maneja el error aquí
        });
    };

    // Llama a la función que obtiene los roles
    fetchSecretary();
  }, []);


  const create = (event) => {
    event.preventDefault();
    doctor.secretaryId = secretaryId
    createDoctor(doctor)
      .then((data) => {
        console.log("Patient create:", data);
        // window.location.reload();
      })
      .catch((error) => {
        setDoctor(patientInitial);
        console.error("Error al crear el doctor:", error);
        // Maneja el error aquí
      });

    const {
      target: { name, value },
    } = event;

    setDoctor({
      [name]: value,
    });
    // setUser(userInitial);
  };


  const doctorOnchange = ({ target: { name, value } }) => {
    setDoctor({
      ...doctor,
      [name]: value,
      //
    });
  };

  const handleSecretaryChange = (event) => {
    const selectedSecretaryId = event.target.value;
    setSecretaryId(selectedSecretaryId);
  };


  console.log("El id del secretario elegido es :" + secretaryId)

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.sContainer}>
          <form onSubmit={create} className="row g-3">
            <div className={styles.tittle}>
              <h1>CREAR DOCTOR</h1>
            </div>
            <div className="col-md-6">
              <label htmlFor="dni" className="form-label">
                DNI
              </label>
              <input
                type="number"
                className="form-control"
                id="dni"
                name="dni"
                value={dni}
                required
                placeholder="22222222"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Francisco Alenda"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="nombre@nombre.com"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-6">
              <label htmlFor="address" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                placeholder="Calle Siempre Viva - 2200 - Prov. de San Juan - Argentina"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="2644123833"
                onChange={doctorOnchange}
              />
              <div className={styles.help}>
                * Télefono con Cod. de área sin 0 ni 15
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="speciality" className="form-label">
                Especialidad
              </label>
              <input
                type="text"
                className="form-control"
                id="speciality"
                name="speciality"
                value={speciality}
                placeholder="Traumatología, clínica, fonodio..."
                onChange={doctorOnchange}
              />
              <div className={styles.help}>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="office" className="form-label">
                Consultorio
              </label>
              <input
                type="text"
                className="form-control"
                id="office"
                name="office"
                value={office}
                placeholder="1, 2, 3.."
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="schedule" className="form-label">
                Horario
              </label>
              <input
                type="text"
                className="form-control"
                id="schedule"
                name="schedule"
                value={schedule}
                placeholder="15-20"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="licenseNumber" className="form-label">
                Matrícula
              </label>
              <input
                type="text"
                className="form-control"
                id="licenseNumber"
                name="licenseNumber"
                value={licenseNumber}
                placeholder="1234"
                onChange={doctorOnchange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="secretaryId" className="form-label">
                Secretario
              </label>
              <select
                onChange={handleSecretaryChange}
                value={secretaryId}
                required
                className="form-select"
              >
                <option value="">Seleccionar ...</option>
                {Array.isArray(secretary) &&
                  secretary.map((r) => (
                    <option key={r.dni} value={r.dni}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
