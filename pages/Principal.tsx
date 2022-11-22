import React from "react";
import Menu from "./Menu"

export default function Principal(){
  return (
    <>
      <div className="circulo-verde05"></div>
      <div className="circulo-morado03"></div>
      <div className="textoP">Bienvenido</div>
      <div className="imagenFondo"></div>
      <Menu></Menu>
      <div className="somos">
        <h4>¿Quiénes somos?</h4>
        <div className="definicion">
          Somos una empreza dedicada al apoyo en el aprendizaje de Química I y Química II.
        </div>
      </div>
      <div className="proposito">
        <h4>¿Cuál es el propósito?</h4>
        <div className="definicion">
          Nuestro propósito es dar apoyo a los estudiantes que tengan 
          dificultades para poder aprender sobre la Química I y Química II.
        </div>
      </div>
      <div className="softQuimic">
        <h4>¿Qué es SoftQuimic?</h4>
        <div className="definicion">
          Es un programa el cual te dará apoyo en los temas de Química I y Química II,
          los cuales tu no puedas comprender; para ello se tienen implementados métodos
          para un aprendizaje distinto al habitual, en el que hay minijuegos, videos, 
          datos curiosos, una calculadora de moles al igual que para balancear, incluimos 
          también una tabla periódica interactiva.
        </div>
      </div>
    </>
  );
};
