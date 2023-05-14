import { createContext, useState, useEffect } from "react";
import { getProducts } from "../Services/FirestoreData";

export const ProductContext = createContext ({ products : []});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        setLoading(true);

        getProducts()
        .then ((products) => {
            setProducts(products);
        })
        .catch ((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    const handleChangeProductsState = (id) => {
        const updatedProducts = products.map ((product) => {
            if (product.id === id) {
                return {...product, completed: product.completed}
            } else {
                return product;
            }
        });

        setProducts(updatedProducts)
    };

    return (
        <ProductContext.Provider value= {{
            loading,
            products,
            handleChangeProductsState
        }}>{children}</ProductContext.Provider>
        )}

