import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import styles from ".//Navbar.module.css";
import logo from "./assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.img} src={logo} alt="logo" width={120} />
          </Link>
        </div>
        <ul className={styles.navlinks}>
          <NavLink to="/sobrenosotros" className={styles.button}>
            {" "}
            Sobre nosotros
          </NavLink>
          <NavLink to="/eventos" className={styles.button}>
            Eventos
          </NavLink>
          <NavLink to="/contacto" className={styles.button}>
            Contacto
          </NavLink>
        </ul>

        <CartWidget />
      </nav>
    </div>
  );
};

export default Navbar;
