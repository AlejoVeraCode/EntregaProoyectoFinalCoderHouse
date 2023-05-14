import styles from "./ItemDetail.module.css";
import Contador from "../Contador/Contador";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({
  titulo,
  categoria,
  precio,
  pictureUrl,
  descripcion,
  stock,
  id,
}) => {
  
  const [quantityAdded, setQuantityAdded] = useState(0);

  const {addItem} = useContext (CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    
    const item = {
      id, titulo, precio
    }
    addItem(item, quantity);
  };

  return (
    <div className={styles.Contenedor}>
      <main  className={styles.CardItem}>
        <article>
          <header className={styles.ProductHeader}>
            <h2 >{titulo}</h2>
            <p className={styles.ProductHeader}>${precio}</p>
          </header>
          <picture className={styles.image}>
            <img src={pictureUrl} alt={titulo} className={styles.ProductImage} />
          </picture>
          <section>
            <p className={styles.ProductInfo}>
              Categoria:{categoria}
              <br></br>
              Descripcion:{descripcion}
            </p>
          </section>
          <footer className={styles.ProductFooter}>
            {quantityAdded > 0 ? (
              <Link to="/cart" className={styles.Agregar}>
                Terminar compra
              </Link>
            ) : (
              <Contador
                initial={0}
                stock={stock}
                onAdd={handleOnAdd}
              />
            )}
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ItemDetail;
