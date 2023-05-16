import { useRef, useState } from "react"
import styles from './CheckOutForm.module.css'

const CheckOutForm = ({ onConfirm, onClose }) => {
    const inputNombre = useRef(null);
    const inputTelefono = useRef (null);
    const inputDireccion = useRef (null);
    const inputEmail = useRef (null);

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre: inputNombre.current.value,
            telefono: inputTelefono.current.value,
            direccion: inputDireccion.current.value,
            email: inputEmail.current.value,
        }
        onConfirm(userData, "orders");
        onClose();
    }

    return (
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className={styles.FormAddUser}>
                <label> Nombre: 
                <input type="text" ref= {inputNombre} placeholder="Ingrese nombre"/>
                </label>
                <label> Telefono:
                <input type="text" ref= {inputTelefono} placeholder="Ingrese telefono"/>
                </label>
                <label> Direccion: 
                <input type="text" ref= {inputDireccion} placeholder="Ingrese direccion" />
                </label>
                <label> Email: 
                <input type="text" ref= {inputEmail} placeholder="Ingrese e-mail"/>
                </label>
                <button className={styles.Button} type="submit">Finalizar</button>
            </form>
            <button className={styles.ButtonClose} onClick={onClose}>Cerrar</button>
        </div>
    )
}

const CheckOutPopUp = ({ onConfirm, onClose }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    const handleShowPopUp = () => {
        setShowPopUp(true);
    }

    const handleClosePopUp = () => {
        setShowPopUp(false);
    }

    return (
        <div>
            <button className={styles.Button} onClick={handleShowPopUp}>Finalizar compra</button>
            {showPopUp &&
                <div style={{position: 'fixed', top: 0, bottom: 0, left: 0, right: 0}}>
                    <CheckOutForm onConfirm={onConfirm} onClose={handleClosePopUp} />
                </div>
            }
        </div>
    )
}

export default CheckOutPopUp;
