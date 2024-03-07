import { useEffect, useState } from "react";
import { getAppointmentsListDetails } from "../../data/HttpClient";

export const TurnoFindAll = () => {
    const [appointmentsListDetails, setAppointmentsListDetails] = useState([]);

    useEffect(() => {
      const fetchSecretary = () => {
        getAppointmentsListDetails()
          .then((data) => {
            // Maneja la respuesta del servidor aquí
            setAppointmentsListDetails(data);
          })
          .catch((error) => {
            console.error("Error al Listar los Turnos con detalles:", error);
            // Maneja el error aquí
          });
      };
  
      // Llama a la función que obtiene los roles
      fetchSecretary();
    }, []);

    
  return (
  <>
     <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Hora</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Paciente</th>
                </tr>
              </thead>
              <tbody>
                {appointmentsListDetails.map((m) => (
                  <tr key={m.id}>
                    <th scope="row">{m.id}</th>
                    <td>{m.appointmentDate}</td>
                    <td>{m.appointmentTime}</td>
                    <td>{m.doctor}</td>
                    <td>{m.patient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
  </>
   )
}