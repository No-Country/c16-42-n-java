import { Route, Routes } from "react-router-dom";
import Landing from "../views/landing/landing.jsx";
import Info from "../views/buscar/secretary/Secretary.jsx";
import { UserHook } from "../context/UserContext.jsx";
import Patient from "../views/buscar/patient/Patient.jsx";
import Doctor from "../views/buscar/doctor/Doctor.jsx";
import Secretary from "../views/buscar/secretary/Secretary.jsx";
import Login from "../views/Login/login.jsx";
import Search from "../views/turnos/buscar/Buscar.jsx";
import Update from "../views/turnos/modificar/Modificar.jsx";
import Request from "../views/turnos/solicitar/Solicitar.jsx";
// import SecretaryAdministrar from "../views/administrar/secretary/Secretary.jsx";
import SecretaryCreate from "../views/administrar/secretary/SecretaryCreate.jsx";
import SecretaryUpdate from "../views/administrar/secretary/SecretaryUpdate.jsx";
import SecretaryDelete from "../views/administrar/secretary/SecretaryDelete.jsx";
// import PatientAdministrar from "../views/administrar/patient/PatientAdministrar.jsx";
import PatientCreate from "../views/administrar/patient/PatientCreate.jsx";
import PatientUpdate from "../views/administrar/patient/PatientUpdate.jsx";
import PatientDelete from "../views/administrar/patient/PatientDelete.jsx";
// import PatientAdministrar from "../views/administrar/patient/DoctorAdministrar.jsx";
import DoctorCreate from "../views/administrar/doctor/DoctorCreate.jsx";
import DoctorUpdate from "../views/administrar/doctor/DoctorUpdate.jsx";
import DoctorDelete  from "../views/administrar/doctor/DoctorDelete.jsx";


export const UserRoute = () => {
  const { status } = UserHook(); //Utilizo el hook personalizado
console.log("Este es el satus en SUerRoute " + status)
  return (
    <>
      <Routes>
        <Route path="/login" element={status ? <Info /> : <Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/buscar/paciente" element={<Patient />} />
        <Route path="/buscar/secretario" element={<Secretary />} />
        <Route path="/buscar/doctor" element={<Doctor />} />
        <Route path="/turnos/buscar" element={<Search />} />
        <Route path="/turnos/solicitar" element={<Update />} />
        <Route path="/turnos/modificar" element={<Request />} />
        
        {/* ADMINISTRAR SECRETARIA */}
        {/* <Route path="/administrar/secretaria" element={<SecretaryAdministrar />} /> */}
        <Route path="/administrar/secretaria/crear" element={<SecretaryCreate />} />
        <Route path="/administrar/secretaria/actualizar" element={<SecretaryUpdate />} />
        <Route path="/administrar/secretaria/eliminar" element={<SecretaryDelete />} />

        {/* ADMINISTRAR PACIENTE */}
        {/* <Route path="/administrar/paciente" element={<SecretaryAdministrar />} /> */}
        <Route path="/administrar/paciente/crear" element={<PatientCreate />} />
        <Route path="/administrar/paciente/actualizar" element={<PatientUpdate />} />
        <Route path="/administrar/paciente/eliminar" element={<PatientDelete />} />

         {/* ADMINISTRAR DOCTOR */}
        {/* <Route path="/administrar/doctor" element={<SecretaryAdministrar />} /> */}
        <Route path="/administrar/doctor/crear" element={<DoctorCreate />} />
        <Route path="/administrar/doctor/actualizar" element={<DoctorUpdate />} />
        <Route path="/administrar/doctor/eliminar" element={<DoctorDelete />} />
      </Routes>
    </>
  );
};
