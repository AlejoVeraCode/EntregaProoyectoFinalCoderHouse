import { useState } from "react"
import styles from './CheckOutForm.module.css'


const CheckOutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState ('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventeDefault()

        const userData = {
            nombre, telefono, direccion, email
        }

        onConfirm(userData)
    }

    return (
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className={styles.FormAddUser}>
                <label> Nombre: 
                <input type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} />
                </label>
                <label> Telefono:
                <input type="text" value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </label>
                <label> Direccion: 
                <input type="text" value={direccion} onChange={({ target }) => setDireccion(target.value)} />
                </label>
                <label> Email: 
                <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <button type="submit">Finalizar</button>
            </form>
        
        </div>
    )
}

export default CheckOutForm