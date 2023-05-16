import styles from './CartItem.module.css'


const CartItem =  ({id, precio, titulo})  => {
    return <div className={styles.Container}>
      <div className={styles.CardItem}>      <article className={styles.ProductCard}>
      <header>
        <h2>{titulo}</h2>
      </header>
      <section>
        <p>Precio: ${precio}</p>
      </section>
    </article>
    </div>
    </div> 
    
}


export default CartItem
