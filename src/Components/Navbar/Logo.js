import logo from "./assets/logo.svg";
import styles from ".//Logo.module.css";

const Logo = () => {
  return (
    <div>
      <a href="/index.html">
        <img className={styles.img} src={logo} alt="logo" width={120} />
      </a>
    </div>
  );
};

export default Logo;
