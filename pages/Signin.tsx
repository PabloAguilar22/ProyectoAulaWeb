import React from "react";
import styles from "../styles/Signin.module.css";
import Link from "next/link";

export default function Signin() {
  return (
    <div className={styles.container}>
      <div className={styles.circuloVerde00}></div>
      <div className={styles.titulo}>Registro</div>
      <div className={styles.formularioPrimario}>
        <div className={styles.contenedorFormularioDatos}>
          <form className={styles.formulario}>
            <label className={styles.labelNombre}>
              Nombre
            </label>
            <input className={styles.inputNombre} type="text" required />
            <label className={styles.labelApellidoMaterno}>
              Apellido Materno
            </label>
            <input className={styles.inputApellidoMaterno} type="text" required/>
            <label className={styles.labelApellidoPaterno}>
              Apellido Paterno
            </label>
            <input className={styles.inputApellidoPaterno} type="text" required/>
            <label className={styles.labelNivelAcademico}>
              Nivel Académico
            </label>
            <select className={styles.selectNivel} name="" id="" required>
              <option className={styles.optionSelect} value="Quimica1">
                Quimica I
              </option>
              <option className={styles.optionSelect} value="Quimica2">
                Quimica II
              </option>
            </select>
            <label className={styles.labelCorreo}>
              Correo Electronico
            </label>
            <input className={styles.inputCorreo} type="email" required/>
            <label className={styles.labelContrasena}>
              Contraseña
            </label>
            <input className={styles.inputContrasena} type="password" required/>
            <button className={styles.botonSiguiente}>Signin</button>
          </form>
        </div>
      </div>
    </div>
  );
}
