import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import styles from './Cart.module.css'

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          {cart.map((prod) => (
            <CartItem key={prod.id} {...prod} />
          ))}
          <h3> Total: $ {total}</h3>
          <button className={styles.ClearButton} onClick={() => clearCart()}>
  Limpiar carrito
</button>

<Link to="/checkout" className={styles.CheckoutButton}>
  CheckOut
</Link>
        </div>
      )}
    </>
  );
};

export default Cart;