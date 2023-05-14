import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import { getProducts } from "../../Services/FirestoreData";
import { getProductsByCategory } from "../../Services/GetProductsByCategory";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = categoryID ? await getProductsByCategory(categoryID) : await getProducts();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [categoryID]);

  return (
    <div>
      <Categories />
      <h1>{greeting}</h1>
      <ItemList products={products} categoryID={categoryID} />
    </div>
  );
};

export default ItemListContainer;