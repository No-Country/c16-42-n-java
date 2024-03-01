    
    
    const API = "http://localhost:8080/users";
    
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
    console.error('Error al crear el usuario:', error);
    throw error; // Lanzamos el error para que sea manejado por el código que llama a esta función
  }
};