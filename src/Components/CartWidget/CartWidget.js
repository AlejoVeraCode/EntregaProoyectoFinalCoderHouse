import styles from ".//CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const {totalQuantity, total} = useContext (CartContext)
  console.log(totalQuantity)

  return (
    <Link to="/cart" style={{ display: total> 0 ? "block" : "none" }}>
      <img className={styles.img} src="https://i.postimg.cc/vBXNx1pz/carrito.png" alt="Carrito" width={30} /><h3 className={styles.Quantity} >{totalQuantity()}</h3>
      </Link>
  );
};

export default CartWidget;
