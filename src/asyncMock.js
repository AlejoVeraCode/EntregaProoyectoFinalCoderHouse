import Mozzarella from "./Components/Imagenes/Item-Pizza-Mozzarella.jpg";
import Calabresa from "./Components/Imagenes/Item-Pizzas-Calabresa.jpg";
import Huevo from "./Components/Imagenes/Item-Pizza-Huevo.jpg";
import Napolitana from "./Components/Imagenes/Item-Pizza-Napolitana.jpg";
import Choclo from "./Components/Imagenes/Item-Pizzas-ChocloNapolitana.jpg";
import PapasALoPablo from "./Components/Imagenes/Item-Pizza-PapasALoPablo.jpg";
import Capresse from "./Components/Imagenes/Item-Pizzas-PapasALoPabloCaprese.jpg";
import MilanesaNapolitana from "./Components/Imagenes/Item-Milanesas-Napolitana.jpg";
import SandwichMilanesa from "./Components/Imagenes/Item-Milanesas.jpg";
import PizzaPremium from "./Components/Imagenes/Item-Pizza-Premium.jpg";
import MilanesaFugazzeta from "./Components/Imagenes/Item-Milanesas-Fugazzeta.jpg";
import MilanesaPremium from "./Components/Imagenes/Item-Milanesas-SupremaPremium.jpg";
import Hamburguesa from "./Components/Imagenes/Item-Hamburguesas.jpg";
import HamburguersaPremium from "./Components/Imagenes/Item-HamburguesasPremium.jpg";
import HamburguesaCaesar from "./Components/Imagenes/Item-HamburguesasRuculaTomate.jpg";
import HamburguesaBarbacoa from "./Components/Imagenes/Item-HamburguesasBarbacoa.jpg";
import EmpanadaJamonYQueso from "./Components/Imagenes/Item-Empanadas6.jpg";
import EmpanadaPollo from "./Components/Imagenes/Item-Empanadas4.jpg";
import EmpanadaCarne from "./Components/Imagenes/Item-Empanadas.jpg";
import TortillaRellena from "./Components/Imagenes/Item-MenuDelDia-TortillaRellena.jpg";
import PolloFrito from "./Components/Imagenes/Item-PolloFritoP6.jpg";
import Promocion1 from "./Components/Imagenes/Promociones-1.jpg";
import Promocion2 from "./Components/Imagenes/Promociones-2.jpg";
import Promocion3 from "./Components/Imagenes/Promociones-4.jpg";
import Promocion4 from "./Components/Imagenes/Promociones-5.jpg";
import Promocion5 from "./Components/Imagenes/Promociones-6.jpg";
import Promocion6 from "./Components/Imagenes/Promociones-7.jpg";
import Promocion7 from "./Components/Imagenes/Promociones-9.jpg";
import Promocion8 from "./Components/Imagenes/Promociones-13.jpg";
import Promocion9 from "./Components/Imagenes/Promociones-14.jpg";
import Promocion10 from "./Components/Imagenes/Promociones-15.jpg";

const products = [
  {
    id: 1,
    titulo: "Mozzarella",
    categoria: "Pizzas",
    precio: 2200,
    imagen: Mozzarella,
    descripcion: "Salsa de tomate, mozzarella, oregano, aji molido y aceitunas",
    stock: 10,
  },

  {
    id: 2,
    titulo: "Calabresa",
    categoria: "Pizzas",
    precio: 3200,
    imagen: Calabresa,
    descripcion: "Salsa de tomate, mozzarella, longaniza en rodajas",
    stock: 10,
  },

  {
    id: 3,
    titulo: "Capresse",
    categoria: "Pizzas",
    precio: 2650,
    imagen: Capresse,
    descripcion:
      "Salsa de tomate, mozzarella, tomate en rodajas, albahaca en aceite",
    stock: 10,
  },

  {
    id: 4,
    titulo: "Choclo",
    categoria: "Pizzas",
    precio: 2650,
    imagen: Choclo,
    descripcion: "Salsa de tomate, mozzarella, choclo en granos",
    stock: 10,
  },

  {
    id: 5,
    titulo: "Huevo Duro",
    categoria: "Pizzas",
    precio: 2750,
    imagen: Huevo,
    descripcion: "Salsa de tomate, mozzarella, huevo duro rallado",
    stock: 10,
  },

  {
    id: 6,
    titulo: "Napolitana",
    categoria: "Pizzas",
    precio: 2750,
    imagen: Napolitana,
    descripcion:
      "Salsa de tomate, mozzarella, tomate en rodajas, opcional con o sin ajo picado",
    stock: 10,
  },
  {
    id: 7,
    titulo: "Premium",
    categoria: "Pizzas",
    precio: 4200,
    imagen: PapasALoPablo,
    descripcion:
      "Salsa de tomate, mozzarella, papas fritas, panceta, salchicha parrillera, verdeo",
    stock: 10,
  },

  {
    id: 8,
    titulo: "Premium",
    categoria: "Pizzas",
    precio: 4200,
    imagen: PizzaPremium,
    descripcion:
      "Salsa de tomate, mozzarella, papas fritas, panceta, huevo frito",
    stock: 10,
  },

  {
    id: 9,
    titulo: "Sandwich de Milanesa",
    categoria: "Milanesas",
    precio: 2700,
    imagen: SandwichMilanesa,
    descripcion:
      "Suprema de pollo, lechuga, tomate, huevo duro y jamon con guarnicion de papas fritas",
    stock: 10,
  },

  {
    id: 10,
    titulo: "Suprema napolitana para 2 con fritas",
    categoria: "Milanesas",
    precio: 2700,
    imagen: MilanesaNapolitana,
    descripcion:
      "Suprema de pollo, salsa , mozzarella, jamon, tomate, huevo duro y provenzal con guarnicion de papas fritas",
    stock: 10,
  },
  {
    id: 11,
    titulo: "Suprema premium para 2 con fritas",
    categoria: "Milanesas",
    precio: 3300,
    imagen: MilanesaPremium,
    descripcion:
      "Suprema de pollo, panceta y cheddar con guarnicion de papas fritas",
    stock: 10,
  },
  {
    id: 12,
    titulo: "Suprema Fugazzeta para 2 con fritas",
    categoria: "Milanesas",
    precio: 3300,
    imagen: MilanesaFugazzeta,
    descripcion:
      "Suprema de pollo, mozzarella y cebolla con guarnicion de papas fritas",
    stock: 10,
  },

  {
    id: 13,
    titulo: "Milanesa napolitana para 2 con fritas",
    categoria: "Milanesas",
    precio: 3400,
    imagen: MilanesaNapolitana,
    descripcion:
      "Milanesa de carne, salsa , mozzarella, jamon, tomate, huevo duro y provenzal con guarnicion de papas fritas",
    stock: 10,
  },
  {
    id: 14,
    titulo: "Milanesa premium para 2 con fritas",
    categoria: "Milanesas",
    precio: 3850,
    imagen: MilanesaPremium,
    descripcion:
      "Milanesa de carne, panceta y cheddar con guarnicion de papas fritas",
    stock: 10,
  },
  {
    id: 15,
    titulo: "Milanesa Fugazzeta para 2 con fritas",
    categoria: "Milanesas",
    precio: 3300,
    imagen: MilanesaFugazzeta,
    descripcion:
      "Milanesa de carne, mozzarella y cebolla con guarnicion de papas fritas",
    stock: 10,
  },
  {
    id: 16,
    titulo: "Hamburguesa Tasty",
    categoria: "Hamburguesas",
    precio: 1800,
    imagen: Hamburguesa,
    descripcion:
      "Hamburguesa de carne o pollo crispy, salsa tasty, jamon, queso, tomate, lechuga y huevo frito",
    stock: 10,
  },
  {
    id: 17,
    titulo: "Hamburguesa Tasty Premium",
    categoria: "Hamburguesas",
    precio: 1800,
    imagen: HamburguersaPremium,
    descripcion:
      "Hamburguesa de carne o pollo crispy, salsa tasty, tomate, cebolla caramelizada, panceta y cheddar",
    stock: 10,
  },
  {
    id: 18,
    titulo: "Hamburguesa Caesar",
    categoria: "Hamburguesas",
    precio: 1800,
    imagen: HamburguesaCaesar,
    descripcion:
      "Hamburguesa de carne o pollo crispy, salsa caesar, tomate, rucula, pepinos en vinagre, morrones panceta y cheddar",
    stock: 10,
  },
  {
    id: 19,
    titulo: "Hamburguesa Barbacoa",
    categoria: "Hamburguesas",
    precio: 1800,
    imagen: HamburguesaBarbacoa,
    descripcion:
      "Hamburguesa de carne o pollo crispy, salsa barbacoa casera, cebolla caramelizada, morrones en ajo, cheddar y panceta",
    stock: 10,
  },
  {
    id: 20,
    titulo: "Empanada de carne individual",
    categoria: "Empanadas",
    precio: 500,
    imagen: EmpanadaCarne,
    descripcion:
      "Empanada de carne cortada a cuchillo, cebolla de verdeo, aceitunas en rodaja y huevo duro",
    stock: 10,
  },

  {
    id: 21,
    titulo: "Empanada de carne por docena",
    categoria: "Empanadas",
    precio: 3750,
    imagen: EmpanadaCarne,
    descripcion:
      "Empanada de carne cortada a cuchillo, cebolla de verdeo, aceitunas en rodaja y huevo duro",
    stock: 10,
  },
  {
    id: 22,
    titulo: "Empanada de pollo individual",
    categoria: "Empanadas",
    precio: 500,
    imagen: EmpanadaPollo,
    descripcion:
      "Empanada de pechuga de pollo, cebolla de verdeo, aceitunas en rodaja y huevo duro",
    stock: 10,
  },
  {
    id: 23,
    titulo: "Empanada de pollo por docena",
    categoria: "Empanadas",
    precio: 3750,
    imagen: EmpanadaPollo,
    descripcion:
      "Empanada de pechuga de pollo, cebolla de verdeo, aceitunas en rodaja y huevo duro",
    stock: 10,
  },
  {
    id: 24,
    titulo: "Empanada de jamon y queso",
    categoria: "Empanadas",
    precio: 500,
    imagen: EmpanadaJamonYQueso,
    descripcion: "Empanada de mozzarella y jamon",
    stock: 10,
  },
  {
    id: 25,
    titulo: "Empanada de jamon y queso por docena",
    categoria: "Empanadas",
    precio: 3750,
    imagen: EmpanadaJamonYQueso,
    descripcion: "Empanada de mozzarella y jamon",
    stock: 10,
  },

  {
    id: 26,
    titulo: "Pollo Frito para 2 personas",
    categoria: "MenuDelDia",
    precio: 3800,
    imagen: PolloFrito,
    descripcion:
      "Pollo frito a la Kentucky acompañado de Papas fritas con cheddar, verdeo y panceta",
    stock: 10,
  },
  {
    id: 27,
    titulo: "Tortilla de papas rellena",
    categoria: "MenuDelDia",
    precio: 1350,
    imagen: TortillaRellena,
    descripcion: "Tortilla de papas rellena con jamon y mozzarella",
    stock: 10,
  },

  {
    id: 28,
    titulo: "Promocion 1",
    categoria: "Pizzas",
    precio: 2450,
    imagen: Promocion1,
    descripcion:
      "Pizza redonda mitad papas a lo pablo mitad mozzarella con anchoas",
    stock: 10,
  },

  {
    id: 29,
    titulo: "Promocion 2",
    categoria: "Promociones",
    precio: 3200,
    imagen: Promocion2,
    descripcion: "Pizza de medio metro mitad jamon y morrones mitad panceta",
    stock: 10,
  },

  {
    id: 30,
    titulo: "Promocion 3",
    categoria: "Promociones",
    precio: 2800,
    imagen: Promocion3,
    descripcion:
      "Pizza de medio metro con 3 gustos, Napolitana, huevo duro y champignones",
    stock: 10,
  },

  {
    id: 32,
    titulo: "Promocion 4",
    categoria: "Promociones",
    precio: 3350,
    imagen: Promocion4,
    descripcion:
      "Pizza de medio metro con 3 gustos, Jamon crudo rucula y parmesano, mozzarella y panceta",
    stock: 10,
  },
  {
    id: 33,
    titulo: "Promocion 5",
    categoria: "Promociones",
    precio: 2600,
    imagen: Promocion5,
    descripcion: "Pizza de medio metro mitad huevo frito mitad mozzarella",
    stock: 10,
  },
  {
    id: 34,
    titulo: "Promocion 6",
    categoria: "Promociones",
    precio: 2200,
    imagen: Promocion6,
    descripcion: "Pizza redonda mitad napolitana mitad panceta",
    stock: 10,
  },
  {
    id: 35,
    titulo: "Promocion 7",
    categoria: "Promociones",
    precio: 3100,
    imagen: Promocion7,
    descripcion: "Pizza de medio metro mitad huevo frito mitad panceta",
    stock: 10,
  },
  {
    id: 36,
    titulo: "Promocion 8",
    categoria: "Promociones",
    precio: 3200,
    imagen: Promocion8,
    descripcion:
      "Pizza de medio metro con 3 gustos, Jamon crudo rucula y parmesano, mozzarella y calabresa",
    stock: 10,
  },
  {
    id: 37,
    titulo: "Promocion 9",
    categoria: "Promociones",
    precio: 2800,
    imagen: Promocion9,
    descripcion:
      "Pizza de medio metro con 3 gustos, choclo, rucula y parmesano, y jamon",
    stock: 10,
  },
  {
    id: 38,
    titulo: "Promocion 10",
    categoria: "Promociones",
    precio: 2950,
    imagen: Promocion10,
    descripcion: "Pizza de medio metro mitad choclo mitad fugazzeta",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsById = (productID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(productID)));
    }, 2000);
  });
};

export const getProductsByCategory = (productCategory) => {
  // console.log(productCategory);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.categoria === productCategory));
    }, 2000);
  });
};
