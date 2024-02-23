import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";

//importamoS el menu inicial
import Menu from "../../components/menu/menuInicial/menuInicial";

export default function Landing(){

    return(
        <div className={styles.container}>
            <Menu className={styles.nav}/>
            <div className={styles.sContainer}>
            <h1>Su sistema de salud</h1>
            <h2>Simplificado</h2>
            <Link to={"/login"}>Ingresar</Link>
            </div>
        </div>
    )

}