import { useState, useEffect } from 'react'
import Producto from './components/Producto'
import baseDeDatos from '../public/productos.json'
import Carrito from './components/Carrito'

function App() {
  //Agregamos el estado del carrito
  const [carrito, setCarrito] = useState([])

  //Funcion para agregar al carrito
  const agregarAlCarrito = (juego) => {
    setCarrito([...carrito, juego])
  }

  //Funcion para eliminar del carrito
  const eliminarDelCarrito = (indice) => {
    const nuevoCarrito = carrito.filter((juego, index) => index !== indice)
    setCarrito(nuevoCarrito)
  }

  return (
    //Container principal
    <div className="container-fluid p-0 bg-secondary d-flex flex-column" style={{ minHeight: '100vh' }}>
      <header className="text-center bg-primary text-white m-0">
        <h1 className="pt-4 pb-4 mb-0">Tienda de Videojuegos </h1>
      </header>

      <div className="container-fluid px-3 px-lg-5 mt-5 flex-grow-1">
        <h2 className="text-center fw-bold text-white mb-4">Catálogo de Productos</h2>
        <div className="row align-items-start">
          <div className="col-12 col-lg-8 row mb-4 mb-lg-0">
            {/*Carga de productos desde json a cards*/}
            {baseDeDatos.map((p) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={p.id}>
                <Producto
                  nombre={p.nombre}
                  descripcion={p.descripcion}
                  precioNormal={p.precioNormal}
                  precioOferta={p.precioOferta}
                  imagen={p.imagen}
                  //Agregamos el evento al presionar el boton
                  alAgregar={() => agregarAlCarrito(p)}
                />
              </div>
            ))}
          </div>

          {/*Carga del carrito*/}
          <div className="col-12 col-lg-4">
            {/*Pasamos la lista del carrito y la funcion de eliminar*/}
            <Carrito listaCarrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">Tienda de Videojuegos &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
