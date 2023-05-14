import { useRef } from "react";
import { saveProducts } from "./Services/Crud";
import styles from "./AddProductForm.module.css"


function AddUserForm() {
  
    const inputTitulo = useRef(null);
    const inputCategoria = useRef(null);
    const inputPrecio = useRef(null);
    const inputDescripcion = useRef(null);
    const inputStock = useRef(null);
    const inputPictureUrl = useRef(null);
  
    const handleAddProduct = (e) => {
        //console.log (inputTitulo.current.value)
        const data = {
          titulo: inputTitulo.current.value,
          categoria: inputCategoria.current.value,
          precio: inputPrecio.current.value,
          descripcion: inputDescripcion.current.value,
          stock: inputStock.current.value,
          pictureUrl: inputPictureUrl.current.value,
        };
         //console.log(data);
    saveProducts(data, "products");
    inputTitulo.current.value = "";
    inputCategoria.current.value = "";
    inputPrecio.current.value = 0;
    inputDescripcion.current.value = "";
    inputStock.current.value = "";
    inputPictureUrl.current.value = "";
  };
     

return (
    <div className={styles.Container}>
     <div className={styles.FormAddUser}> <h1>Agregar Productos</h1>
      <br></br>
      <label htmlFor="title">Titulo:</label>
      <input
        ref={inputTitulo}
        type="text"
        placeholder="Ingrese titulo"
      />
      <label htmlFor="category">Categoria</label>
      <input

        ref={inputCategoria}
        type="text"
        placeholder="Ingrese categoria"
      />
      <label htmlFor="price">Precio:</label>
      <input
        
        ref={inputPrecio}
        type="text"
        placeholder="Ingrese precio"
      />
      <label htmlFor="description">Decripcion:</label>
      <input
        
        ref={inputDescripcion}
        type="text"
        placeholder="Ingrese descripcion"
      />
      <label htmlFor="Stock">Stock:</label>
      <input
        
        ref={inputStock}
        type="text"
        placeholder="Ingrese stock"
      />
      <label htmlFor="pictureUrl">pictureUrl</label>
      <input
      
        ref={inputPictureUrl}
        type="text"
        placeholder="Ingrese pictureUrl"
      />
      <button className={styles.SubmitButton} onClick={handleAddProduct}>Agregar</button>
      </div>
      </div>
  );
}

export default AddUserForm;
