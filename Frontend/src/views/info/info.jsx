import React from "react";
import styles from "./info.module.css";

//importamoS el menu inicial
import Menu from "../../components/menu/menuInicial/menuInicial";

export default function Info(){


    return(
        
        <div className={styles.container}>
            <Menu />
            <div className={styles.sContainer}>
                <div className={styles.mContainer}>
                    <p>Aqui se supone que va informacion</p>
                </div>
            </div>
        </div>
    )




}







