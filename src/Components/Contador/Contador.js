import React, { useState } from "react";
import styles from "./Contador.module.css";

const Contador = ({ stock, initial, onAdd }) => {
  const [quantity, setquantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setquantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > initial) {
      setquantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity);
      setquantity(initial);
    }
  };
  //console.log (quantity)
  return (
    <div className={styles.Contador}>
      <div className={styles.Controles}>
        <button className={styles.Button} onClick={handleDecrement}>-</button><h4 className={styles.Number}>{quantity}</h4><button className={styles.Button} onClick={handleIncrement}>+</button>
        <button className={styles.Button} onClick={handleAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Contador;
