import React from 'react'
import styles from '../styles/Configuracion.module.css'
import HeaderGeneral from './HeaderGeneral'
import Menu from "./Menu"

export default function Configuracion(){
  return (
    <>
      <div className='circulo-verde04'></div>
      <div className='circulo-morado03'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-verde05'></div>
      <div className='circulo-morado03'></div>
      <HeaderGeneral encabezado="Configuracion"></HeaderGeneral>
      <Menu></Menu>
    </>
  )
}
