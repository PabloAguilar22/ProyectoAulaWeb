import "../styles/Headers.module.css"
import "../styles/Index.module.css"
import React, { Component } from "react";
import Link from "next/link"

export default function HeaderMaterias(props) {
  return (
    <>
      <div className="contenedorHeader">
        <header>
          <div className='paginaHeader'>{props.encabezado}</div>
          <Link href={props.link}><div className="posicionVideos">Videos</div></Link>
          <Link href="DocumentosQuimica"><div className="posicionDocumentos">Documentos</div></Link>
          <Link href="MinijuegosQuimica"><div className="posicionMinijuegos">Minijuegos</div></Link>
          
        <div className="logoHeader"></div>
        </header>
      </div>
    </>
  );
}
