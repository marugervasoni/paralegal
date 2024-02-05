import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {routes} from '../routes'
import styles from '../Styles/Menu.module.css'

const Menu = () => {

    return (
    <div className={styles.menu}>
        <section className={styles.contenido}>
          <Link to={routes.home}> Inicio </Link>
          <Link to={routes.clientes}> Clientes </Link>
          <Link to={routes.agenda}> Agenda </Link>
          <Link to={routes.audiencias}> Audiencias </Link>
          <Link to={routes.expedientes}> Expedientes </Link>
          <Link to={routes.contacto}> Contacto </Link>
          <Outlet/>
        </section>
    </div>
  )
}

export default Menu