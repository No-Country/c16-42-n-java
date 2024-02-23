import React from "react";
import { Link } from "react-router-dom";
import styles from "./menuInicial.module.css";




export default function Menu(){


    return(
        <div>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <p>Aqui va el logo</p>
                </div>
                <div className={styles.Clinks}>
                    <Link to={"/"} className={styles.links}>Home</Link>
                    <Link to={"/info"} className={styles.links}>Info</Link>
                    <Link to={"/about"} className={styles.links}>About</Link>
                    <Link to={"/contact"} className={styles.links}>Contact</Link>
                </div>
            </nav>



        </div>
    )
}
