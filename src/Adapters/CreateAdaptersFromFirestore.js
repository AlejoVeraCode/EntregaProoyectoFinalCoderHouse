export const createProductsAdaptedFromFirestore = (doc) => {
 // Se recibe data sin adaptar desde Firebase
  const id = doc.id;
  const fields = doc.data();
  //La data ya esta adaptada para ser utilizada en mi aplicacion

  const productsAdapted = {
    id: id,
    categoria: fields.categoria,
    descripcion: fields.descripcion,
    precio: fields.precio,
    stock: fields.stock,
    titulo: fields.titulo,
    pictureUrl: fields.pictureUrl,
  };

  return {
    id,
    fields}
};
