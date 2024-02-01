import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import {routes} from '../routes'
import styles from '../Styles/Menu.module.css'

const Menu = () => {

    const navigate = useNavigate()

    return (
    <div className={styles.menu}>
        <h4 onClick={() => navigate(-1)}>⬅Back</h4>
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