import "../styles/Headers.module.css"
import "../styles/Index.module.css"
import React, { Component } from "react"
import Link from "next/link"

export default function HeaderGeneral(props) {
  return (
    <>
      <div className="contenedorHeader">
        <header>
        <div className='paginaHeader'>{props.encabezado}</div>
        <div className="logoHeader"></div>
        </header>
      </div>
    </>
  );
}