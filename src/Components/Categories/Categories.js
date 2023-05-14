import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div>
      <center>
        <Link to={`/category/Pizzas`} className={styles.button}>
          Pizzas
        </Link>
        <Link to={`/category/Milanesas`} className={styles.button}>
          Milanesas
        </Link>
        <Link to={`/category/Hamburguesas`} className={styles.button}>
          Hamburguesas
        </Link>
        <Link to={`/category/Empanadas`} className={styles.button}>
          Empanadas
        </Link>
        <Link to={`/category/MenuDelDia`} className={styles.button}>
          Menu del dia
        </Link>
        <Link to={`/category/Promociones`} className={styles.button}>
          Promociones
        </Link>
      </center>
    </div>
  );
};

export default Categories;
