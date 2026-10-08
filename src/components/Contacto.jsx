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
        <div className="col-12 mt-4">
            <section className="mt-5 mb-5 p-5 border border-primary bg-body rounded" id="contacto">
                <h3 className="mb-2">Contactanos</h3>
                <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>

            {alerta && (
                <div className={`alert alert-${alerta.tipo}`} role="alert">
                    {alerta.texto}
                </div>
            )}

            <form id="formulario" onSubmit={validarFormulario}>
                <div className="form-group">
                    <div className="mb-3"><label>Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingrese su nombre" />
                    </div>
                    <div className="mb-3"><label>Correo Electronico</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su correo electronico" />
                    </div>
                    <div className="mb-3"><label>Mensaje</label>
                        <textarea type="text" className="form-control" value={mensaje} onChange={(e) => setMensaje(e.target.value)}
                            placeholder="Ingrese su mensaje" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 w-100 fw-bold">Enviar Mensaje</button>
                </div>
            </form>
        </section>
        </div>
    )
}

export default Contacto