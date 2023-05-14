import styles from './CartItem.module.css'


const CartItem =  ({id, precio, titulo})  => {
    return  <div className={styles.CardItem}>      <article className={styles.ProductCard}>
      <header>
        <h2 className={styles.ProductHeader}>{titulo}</h2>
      </header>
      <section className={styles.ProductInfo}>
        <p className={styles.ProductInfoPrice}>Precio: ${precio}</p>
      </section>
      <footer>
        <br></br>
      </footer>
    </article>
    </div>
    
}


export default CartItem