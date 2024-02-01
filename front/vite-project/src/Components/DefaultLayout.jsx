import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import styles from '../Styles/Menu.module.css'

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
        <Header />
        <Menu/>
        <div className={styles.content}>{children}</div>
        <Footer/>
    </div>
  );
};

export default DefaultLayout;