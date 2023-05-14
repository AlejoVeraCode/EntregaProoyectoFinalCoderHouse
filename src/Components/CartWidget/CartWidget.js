import styles from ".//CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const {totalQuantity} = useContext (CartContext)

  return (
      <Link to='/cart' style = {{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className={styles.img} src="https://i.postimg.cc/vBXNx1pz/carrito.png" alt="Carrito" width={30} />{totalQuantity}
      </Link>
  );
};

export default CartWidget;
