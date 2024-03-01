import { Link } from "react-router-dom";
import styles from "./landing.module.css";


export default function Landing(){

    return(
        <div className={styles.container}>
            <div className={styles.sContainer}>
                <div className={styles.s2Container}>
                    <div className={styles.words}>
                    <h1>Su sistema de salud</h1>
                    <h2>Simplificado!</h2>
                    </div>
                    <Link to={"/login"} className={styles.link}>Ingresar</Link>
                </div>
            </div>
        </div>
    )

}