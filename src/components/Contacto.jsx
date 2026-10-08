import { useState } from "react"

function Contacto() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [alerta, setAlerta] = useState({ tipo: '', texto: '' })

    const validarFormulario = (e) => {
        e.preventDefault()

        if (nombre === '' || email === '' || mensaje === '') {
            setAlerta({ tipo: 'danger', texto: 'Por favor, completa todos los campos.' })
            return
        }

        setAlerta({ tipo: 'success', texto: '¡Mensaje enviado con éxito! Te contactaremos pronto.' })

        setNombre('')
        setEmail('')
        setMensaje('')
    }

    return (
        <section id="contacto" className="container mt-5 mb-5 p-5 border border-primary bg-body">
            <h3 className="mb-4">Contactanos</h3>
            <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>

            {alerta && (
                <div className={`alert alert-${alerta.tipo}`} role="alert">
                    {alerta.texto}
                </div>
            )}

            <form id="formulario" onSubmit={validarFormulario}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingrese su nombre" />
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese su correo electronico" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su correo electronico con
                        nadie mas.</small>
                    <label>Mensaje</label>
                    <textarea type="text" className="form-control" value={mensaje} onChange={(e) => setMensaje(e.target.value)}
                        placeholder="Ingrese su mensaje" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
        </section>
    )
}

export default Contacto