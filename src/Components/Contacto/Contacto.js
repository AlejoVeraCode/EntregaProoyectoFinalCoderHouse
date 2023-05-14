import styles from "./Contacto.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

function Contacto() {
  const [state, handleSubmit] = useForm("xjvdplgw");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state]);

  if (submitted) {
    return (
      <div className={styles.Contenedor}>
        <h1>Gracias por contactarnos</h1>
      </div>
    );
  }

  return (
    <div className={styles.Contenedor}>
      <div className={styles.FormularioContactoContenedor}>
        <div className={styles.Contacto}>
          <h2>Contactanos </h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.FormularioContacto}></div>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.email}
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Mensaje:</label>
            <textarea className={styles.textarea} id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className={styles.SubmitBoton}
              disabled={state.submitting}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contacto;

// Contacto con envio de Email por formspree hacia mi E-mail
