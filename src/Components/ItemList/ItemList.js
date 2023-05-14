import styles from "./ItemList.module.css";
import Item from "../Item/Item";
import { getProducts } from "../../Services/FirestoreData";
import { useState, useEffect } from "react";

const ItemList = ({ categoryID = null }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const filteredProducts = categoryID
    ? products.filter((prod) => prod.categoria === categoryID)
    : products;

  return (
    <div className={styles.ListGroup}>
      {filteredProducts.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;