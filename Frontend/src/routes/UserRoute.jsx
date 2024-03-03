import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../views/landing/landing.jsx";
import Info from "../views/secretary/Secretary.jsx";
import { UserHook } from "../context/UserContext.jsx";
import Patient from "../views/patient/Patient.jsx";
import Doctor from "../views/doctor/Doctor.jsx";
import Secretary from "../views/secretary/Secretary.jsx";

export const UserRoute = () => {
  const { status } = UserHook(); //Utilizo el hook personalizado

  return (
    <>
      <Routes>
        <Route path="/login" element={status ? <Navigate to="/info" /> : <Navigate to="/login" />} />
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/paciente" element={<Patient />} />
        <Route path="/secretario" element={<Doctor />} />
        <Route path="/doctor" element={<Secretary />} />
      </Routes>
    </>
  );
};
