import { useState } from 'react'
//funcion que crea la tarjeta del producto
function Producto(props) {

    const [recientementeAgregado, setRecientementeAgregado] = useState(false)

    const agregarAlCarrito = () => {
        props.alAgregar()
        setRecientementeAgregado(true)
        setTimeout(() => setRecientementeAgregado(false), 400)
    }
    return (
        <div className="card text-bg-dark mb-3 h-100">
            <img src={props.imagen} className="card-img-top " style={{ height: '250px', objectFit: 'cover' }} alt={props.nombre} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="precio mt-auto text-decoration-line-through">Precio: ${props.precioNormal} CLP</p>
                <p className="precio-oferta">Oferta: ${props.precioOferta} CLP</p>
                <p className="descripcion">Descripción: {props.descripcion}</p>
                {/*Agregamos un boton para agregar al carrito si el boton es presionado se pondra de color verde y disabled para que no se pueda presionar dos veces
                despues de 400 milisegundos cambiara a azul y enabled*/}
                <button className={`btn mt-2 ${recientementeAgregado ? 'btn-success disabled' : 'btn-primary'}`}
                    onClick={agregarAlCarrito}>
                    {recientementeAgregado ? 'Producto agregado' : 'Agregar al Carrito'}
                </button>
            </div>
        </div>
    )
}

export default Producto