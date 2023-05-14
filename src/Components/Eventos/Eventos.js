import styles from "./Eventos.module.css";
import eventos1 from "../Imagenes/Eventos-1.jpg";
import eventos2 from "../Imagenes/Eventos-2.jpg";

const Eventos = () => {
  return (
    <div className={styles.Eventos}>
      <section className={styles.Presentacion}>
        <h1>Eventos</h1>
        <p>
          Bienvenidos a nuestra categoría de eventos familiares y empresariales.
          En nuestra empresa, sabemos que los eventos son ocasiones especiales
          que deben ser celebradas con comida deliciosa y de alta calidad. Ya
          sea que esté planeando una fiesta de cumpleaños, una reunión familiar,
          una boda, una cena de negocios o cualquier otro evento, estamos aquí
          para ayudarlo a hacer que su evento sea memorable. Ofrecemos una
          amplia variedad de opciones de comida, desde platos clásicos hasta
          opciones gourmet y personalizadas para satisfacer sus necesidades
          específicas. También ofrecemos opciones vegetarianas, veganas y sin
          gluten para satisfacer las necesidades dietéticas de sus invitados.
          Nuestro equipo de catering experimentado está aquí para ayudarlo a
          planificar y personalizar el menú para su evento y asegurarse de que
          todo sea perfecto en el día del evento. Nos encargamos de todos los
          detalles para que usted pueda disfrutar de su evento con tranquilidad.
          No importa cuál sea el tamaño de su evento, desde pequeñas reuniones
          familiares hasta grandes eventos empresariales, estamos aquí para
          brindarle la mejor comida y servicio. No dude en ponerse en contacto
          con nosotros para obtener más información sobre nuestros servicios de
          catering para eventos familiares y empresariales. ¡Estamos emocionados
          de trabajar con usted!
        </p>
        <img src="https://i.postimg.cc/25Gw2s2j/Eventos-1.jpg" alt="eventos" className={styles.Imagen}></img>
        <img src="https://i.postimg.cc/gJBKP3Cf/Eventos-2.jpg" alt="eventos" className={styles.Imagen}></img>
      </section>
    </div>
  );
};

export default Eventos;
