import React from 'react'
import styles from '../Styles/Clientes.module.css'


const Clientes = () => {
  return (
    <div className={styles.clientes}>
      <h1>Clientes</h1>
      <button>Nuevo cliente</button>
      <h3> Mis Clientes </h3>
    </div>
  )
}

export default Clientes