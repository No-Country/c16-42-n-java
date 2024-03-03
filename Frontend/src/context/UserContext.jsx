import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [status, setStatus] = useState(null);
  
  useEffect(() => {
    const storedStatus = sessionStorage.getItem('st');
    if (storedStatus !== null) {
      setStatus(JSON.parse(storedStatus)); //JSON.parse(storedStatus): storedStatus se convierte de cadena a su representación de objeto JavaScript utilizando JSON.parse(). Esto es necesario porque los valores almacenados en sessionStorage son siempre cadenas.
    } else {
      // Estado inicial si no se encuentra en sessionStorage
      setStatus(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ status, setStatus }}>
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
