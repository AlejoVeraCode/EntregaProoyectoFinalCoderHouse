import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Router,} from "react-router-dom";
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros";
import Eventos from "./Components/Eventos/Eventos";
import Contacto from "./Components/Contacto/Contacto";
import Cart from "./Components/Cart/Cart"
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import CrudProductsContainer from "./Components/CrudProducts/CrudProduct";
import Checkout from "./Components/Checkout/CheckOut";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<ProductProvider><ItemListContainer /></ProductProvider>} />
          <Route path="/category/:categoryID" element={<ProductProvider><ItemListContainer /></ProductProvider>} />
          <Route path="/item/:itemId" element={<ProductProvider><ItemDetailContainer /></ProductProvider>} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<ProductProvider><Checkout/></ProductProvider>}/>
          <Route path="/agregarproductos" element={<CrudProductsContainer/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
