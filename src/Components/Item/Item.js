import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, pictureUrl, stock }) => {
  return (
    <article className={styles.CardItem}>
      <header className={styles.ProductCard}>
        <h2 className={styles.ProductHeader}>{titulo}</h2>
      </header>
      <picture>
        <img src={pictureUrl} alt={titulo} className={styles.ProductImage} />
      </picture>
      <section className={styles.ProductInfo}>
        <p className={styles.ProductInfoPrice}>Precio: ${precio}</p>
        <p className={styles.productInfoDescription}>
          Stock disponible: {stock}
        </p>
      </section>
      <footer>
        <Link to={`/item/${id}`} className={styles.Detail}>
          Ver detalle
        </Link>
        <br></br>
      </footer>
    </article>
  );
};

export default Item;
