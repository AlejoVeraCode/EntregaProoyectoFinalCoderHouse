import { createContext, useState, useEffect } from "react";

export const CartContext = createContext ({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])
    const [loading, setLoading] = useState (true)
    
   // console.log (cart)

    useEffect(() => {
        setLoading(false)
    }, [cart])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (itemID) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemID)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (ItemID) => {
        return cart.some(prod => prod.id === ItemID)
    }

    const total = cart.reduce(
        (prev, current) => prev + current.quantity * current.precio,
        0
      );

    const totalQuantity = () => {
        let quantity = 0;
        cart.forEach(item => {
          if (!isNaN(item.quantity)) {
            quantity += item.quantity;
          }
        });
        return quantity;
      }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity, loading}}>
            { children }
        </CartContext.Provider>
    )

}
