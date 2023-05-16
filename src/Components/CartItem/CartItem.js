import styles from './CartItem.module.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartItem =  ({id, precio, titulo})  => {
  const { removeItem } = useContext(CartContext);

    return <div className={styles.Container}>
      <div className={styles.CardItem}>      <article className={styles.ProductCard}>
      <header>
        <h2>{titulo}</h2>
      </header>
      <section>
        <p>Precio: ${precio}</p>
      </section>
      <button className={styles.ClearButton} onClick={() => removeItem(id)}>
  X
</button>
    </article>
    </div>
    </div> 
    
}


export default CartItem
