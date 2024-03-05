import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const userInitial = {
  name: "",
  lastname: "",
  username: "",
  password: "",
  rol: "",
};

const secretaryInitial = {
  dni: "",
  name: "",
  email: "",
  address: "",
  phoneNumber: "",
  area: "",
};

const patientInitial = {
  dni: 0,
  name: "",
  email: "",
  address: "",
  phoneNumber: "",
  birthDate: "000-00-00",
  emergencyNumber: "",
  secretaryId: 0,  
};

const doctorInitial = {
  dni: 0,
  name: "",
  email: "",
  address: "",
  phoneNumber: "",
  speciality:"",
  office:"",
  schedule:"",
  licenseNumber:"",
  secretaryId: 0,
};

const appointmentsInitial = {
  appointmentDate: "",
  appointmentTime: "",
  doctorId: 0,
  patientId: 0,
  description: ""
};

const UserProvider = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(userInitial);
  const [secretary, setSecretary] = useState(secretaryInitial);
  const [patient, setPatient] = useState(patientInitial);
  const [doctor, setDoctor] = useState(doctorInitial);
  const [ appointments, setAppointments ] = useState(appointmentsInitial);

  useEffect(() => {
    const storedStatus = sessionStorage.getItem("st");
    if (storedStatus !== null) {
      setStatus(JSON.parse(storedStatus)); //JSON.parse(storedStatus): storedStatus se convierte de cadena a su representación de objeto JavaScript utilizando JSON.parse(). Esto es necesario porque los valores almacenados en sessionStorage son siempre cadenas.
    } else {
      // Estado inicial si no se encuentra en sessionStorage
      setStatus(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ status, setStatus, user, setUser, secretary, setSecretary, patient, setPatient, doctor, setDoctor, appointments, setAppointments }}
    >
      {status === null ? (
        <div>Cargando...</div> // Indicador de carga mientras se carga el estado
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

const UserHook = () => {
  //Defino un hook para utilizar el conexto
  return useContext(UserContext);
};

export { UserProvider, UserHook };
