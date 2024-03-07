import { UserHook } from "../../context/UserContext";

export const TurnoFindPatient = () => {
  const {patientFindDni} = UserHook();

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
                {/* {patientFindDni.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.id}</th>
                    <td>{p.appointmentDate}</td>
                    <td>{p.appointmentTime}</td>
                    <td>{p.doctor}</td>
                    <td>{p.patient}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
  </>
   )
}