import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";


export default function Login(){

    return(
        <div className={styles.container}>
            
            <div className={styles.main}>

                <h1>Ingresa tu usuario y contraseña</h1>
                <form action="">
                    <label>
                        Usuario
                    </label>
                    <br></br>
                    <input placeholder="Pepitoperez123..."></input>
                    <br></br>
                    <label>
                        Contraseña
                    </label>
                    <br></br>
                    <input placeholder="********"></input>
                </form>

            </div>
        </div>
    )
}