import React from "react";
import { Link } from "react-router-dom";
import styles from './EmptyCart.module.css'


const EmptyCart = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}> No hay Items en el carrito</h1>
      <Link to="/" className={styles.Button}>
        Productos
      </Link>
    </div>
  );
};

export default EmptyCart;