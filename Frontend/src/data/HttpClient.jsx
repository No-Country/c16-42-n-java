    
    
    const API = "http://localhost:8080/admin";
    const API_ROLES = "http://localhost:8080/roles";
    const API_SECRETARY = "http://localhost:8080/secretaries";
    const API_PATIENT = "http://localhost:8080/patients";
    
    export const Get = async () => {
      const result = await fetch(API , {
        headers: {
         // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNMU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return await result.json();
};


export const createUser = async (userData) => {

  try {
    const result = await fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userData) // Convertimos el objeto de usuario a JSON
      
    });
    if (!result.ok) {
      throw new Error('Error al crear el usuario');
    }
    // console.log("Estoy se envia al servidor " + JSON.stringify(await result.json()));
    return await result.json(); // Devolvemos los datos obtenidos del servidor

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error; // Lanzamos el error para que sea manejado por el código que llama a esta función
  }
};


export const loginUser = async (userData) => {
  try {
    const result = await fetch(API + "/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userData) // Convertimos el objeto de usuario a JSON
    });

    if (!result.ok) {
      throw new Error('Error al crear el usuario');
    }
    return await result.json(); // Devolvemos los datos obtenidos del servidor
  } catch (error) {
    console.error('Error al crear el usuario:');
    throw error; // Lanzamos el error para que sea manejado por el código que llama a esta función
  }
};

export const getRoles = async () => {
  const result = await fetch(API_ROLES , {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return await result.json();
};


/*SECRETARIO */
export const createSecretary = async (secretaryData) => {

  try {
    const result = await fetch(API_SECRETARY + "/create-secretary", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(secretaryData) // Convertimos el objeto de usuario a JSON
      
    });
    if (!result.ok) {
      throw new Error('Error al crear el usuario');
    }
    // console.log("Estoy se envia al servidor " + JSON.stringify(await result.json()));
    return await result.json(); // Devolvemos los datos obtenidos del servidor

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error; // Lanzamos el error para que sea manejado por el código que llama a esta función
  }
};

export const getSecretary = async () => {
  const result = await fetch(API_SECRETARY + "/get-secretaries" , {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return await result.json();
};

/*PACIENTE */
export const createPatient = async (patientData) => {

  try {
    const result = await fetch(API_PATIENT + "/create-patient", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(patientData) // Convertimos el objeto de usuario a JSON
      
    });
    if (!result.ok) {
      throw new Error('Error al crear el usuario');
    }
    // console.log("Estoy se envia al servidor " + JSON.stringify(await result.json()));
    return await result.json(); // Devolvemos los datos obtenidos del servidor

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error; // Lanzamos el error para que sea manejado por el código que llama a esta función
  }
};



