import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../Styles/Home.module.css'
import Guide from '../Components/Guide';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.maincontent}>
        <h1>TU ESTUDIO JURÍDICO VIRTUAL</h1>
        <p>En este estudio, nos dedicamos a brindarle la tranquilidad que necesita en sus asuntos legales. Gracias a nuestra plataforma centralizada, tendrá acceso rápido y seguro a toda la información relacionada con sus expedientes, clientes, audiencias, gastos y recordatorios. Simplificamos la gestión legal para que pueda enfocarse en lo que realmente importa: su práctica jurídica.</p>
      </section>
      <Guide/>
      <Outlet/>
    </div>
  )
}

export default Home