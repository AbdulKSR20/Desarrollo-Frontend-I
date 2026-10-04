//Funcion que crea el carrito
function Carrito(props) {
    //Calcula el total de dinero sumando los precios de los productos
    const totalDinero = props.listaCarrito.reduce((suma, juego) => suma + juego.precioOferta, 0);
    //Cuenta la cantidad de productos
    const cantidadProductos = props.listaCarrito.length;
    return (
        //Carrito
        <div className="bg-dark text-white p-4 rounded position-sticky" style={{ top: '20px' }}>
            <h3 className="mb-4">🛒 Tu Carrito</h3>
            {/*Boton para vaciar el carrito si el carrito tiene productos*/}
            <button
                className={`btn mb-4 w-100 ${props.listaCarrito.length === 0 ? 'btn-secondary' : 'btn-danger'}`}
                onClick={props.vaciarCarrito}
                disabled={props.listaCarrito.length === 0}
            >
                {props.listaCarrito.length === 0 ? 'El carrito ya está vacío' : 'Vaciar todo el carrito 🗑️'}
            </button>
            {/*Agregar texto si el carrito esta vacio*/}
            {props.listaCarrito.length === 0 ? (
                <p align="center">El carrito está vacío. ¡Agrega algunos juegos!</p>
            ) : (
                //Carga de productos en el carrito
                <ul className="list-group mb-3">
                    {props.listaCarrito.map((juego, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center text-dark">
                            <span>{juego.nombre}</span>
                            {/*Total del producto*/}
                            <div>
                                <span className="fw-bold">${juego.precioOferta}</span>
                                {/*Boton para eliminar del carrito*/}
                                <button className="btn btn-danger btn-sm ms-3" onClick={() => props.eliminarDelCarrito(index)}>
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {/*Total del carrito*/}
            <div className="mt-5 p-3 bg-light text-dark rounded">
                <h5>Total de productos: {cantidadProductos}</h5>
                <h4>Total a Pagar: ${totalDinero}</h4>
            </div>
        </div>
    )
}


export default Carrito;