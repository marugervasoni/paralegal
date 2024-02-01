import React from 'react'
import styles from '../Styles/Guide.module.css'

const Guide = () => {
  return (
    <>
        <div className={styles.guide}>
            <article>
                <h2>CLIENTES</h2>
                <h3>Relaciones Personales, Resultados Profesionales</h3>
                <p> Cada cliente es único, y nosotros valoramos esas diferencias. Con nuestra plataforma, puede gestionar la información de sus clientes de manera segura y eficiente. Estamos comprometidos a proporcionar un servicio personalizado y a construir relaciones duraderas basadas en la confianza y la transparencia.</p>
            </article>
            <article>
                <h2>AGENDA</h2>
                <h3>Organice su Tiempo de Manera Práctica</h3>
                <p> En el mundo legal, el tiempo es un recurso invaluable. Nuestra sección de Agenda está diseñada para ayudarle a gestionar su tiempo de manera efectiva, brindándole un panorama claro de sus compromisos y eventos importantes.</p>
            </article>
            <article>
                <h2>AUDIENCIAS</h2>
                <h3>Preparación previa sin estrés</h3>
                <p> Nuestra plataforma le brinda la tranquilidad de estar completamente preparado para cada audiencia. Desde calendarios actualizados hasta información detallada sobre procedimientos, le ofrecemos las herramientas necesarias para enfrentar cada situación con confianza y profesionalismo.</p>
            </article>
            <article>
                <h2>EXPEDIENTES</h2>
                <h3>Gestión Eficiente de Expedientes Legales</h3>
                <p> Acceda fácilmente a todos sus expedientes en un solo lugar. Desde detalles clave hasta actualizaciones en tiempo real. La organización eficiente de la información garantiza que usted esté siempre un paso adelante en sus compromisos legales.</p>
            </article>
            <article>
                <h2>GASTOS</h2>
                <h3>Gestión Financiera Simplificada</h3>
                <p> Deje que nuestra plataforma le ayude a realizar un seguimiento detallado de los gastos relacionados con sus casos. Con informes claros y herramientas intuitivas, mantenemos sus finanzas organizadas para que pueda centrarse en sus responsabilidades legales.</p>
            </article>
        </div>
    </>
  )
}

export default Guide