//funcion que crea la tarjeta del producto
function Producto(props) {
    return (
        <div className="card text-bg-dark mb-3 h-100">
            <img src={props.imagen} className="card-img-top " style={{ height: '250px', objectFit: 'cover' }} alt={props.nombre} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="precio mt-auto text-decoration-line-through">Precio: ${props.precioNormal} CLP</p>
                <p className="precio-oferta">Oferta: ${props.precioOferta} CLP</p>
                <p className="descripcion">Descripción: {props.descripcion}</p>
                {/*Agregamos un boton para agregar al carrito*/}
                <button className="btn btn-primary mt-2" onClick={props.alAgregar}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Producto