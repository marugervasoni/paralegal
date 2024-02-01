import React from 'react'
import styles from '../Styles/Footer.module.css'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();
  
    return (
    <>
        <h5 className={styles.footer}> {currentYear} &copy;MRG - All rights reserved. </h5>
    </>
  )
}

export default Footer