import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();

  // Obtener la información de la orden usando el ID y mostrarla en la página

  return (
    <div>
      <h1>Orden {id}</h1>
      {/* Mostrar información de la orden */}
    </div>
  );
};

export default Order;