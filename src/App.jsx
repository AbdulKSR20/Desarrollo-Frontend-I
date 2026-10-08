import { useState, useEffect } from 'react'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import NavBar from './components/NavBar'
import Contacto from './components/Contacto'

function App() {
  //Estado de los productos
  const [productos, setProductos] = useState([])

  //Estado de carga
  const [cargando, setCargando] = useState(true)

  const [categoriaActual, setCategoriaActual] = useState('Todas')

  //Effect que carga los productos desde la API(simulada) simula la latencia de una red paraa mostrar el estado de carga
  useEffect(() => {
    setTimeout(() => {
      fetch('./productos.json')
        .then(response => response.json())
        .then(data => {
          setProductos(data)
          setCargando(false)
        })
        .catch(error => console.error('Error al cargar productos:', error))
    }, 1500)
  }, [])

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

  const vaciarCarrito = () => {
    setCarrito([])
  }


  const productosFiltrados = categoriaActual === 'Todas'
    ? productos
    : productos.filter(p => p.categoria === categoriaActual)

  return (
    //Container principal
    <div className="container-fluid p-0 bg-secondary d-flex flex-column" style={{ minHeight: '100vh' }}>
      <header className="text-center bg-primary text-white m-0">
        <h1 className="pt-4 pb-4 mb-0">Tienda de Videojuegos </h1>
      </header>
      <NavBar setCategoriaActual={setCategoriaActual} />
      <div className="container-fluid px-3 px-lg-5 mt-5 flex-grow-1">

        <div className="row align-items-start">
          <div className="col-12 col-lg-8 row mb-4 mb-lg-0">
            <h2 className="text-center fw-bold text-white mb-4" id='catalogo'>Catálogo de Productos</h2>
            {/*Carga de productos desde json a cards*/}
            {cargando ? (
              <div className="col-12 text-center mt-5 mb-5">
                <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}>
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <h4 className="mt-4 text-white">Conectando con el servidor de juegos... 👾</h4>
              </div>
            ) : (

              productosFiltrados.map((p) => (
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
              ))
            )}
          </div>
          {/*Carga del carrito*/}
          <div className="col-12 col-lg-4">
            {/*Pasamos la lista del carrito y la funcion de eliminar*/}
            <Carrito listaCarrito={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />
          </div>
          <div className="col-12 mt-4">
            <Contacto />
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-4 mt-5" id='footer'>
        <div className="container">
          <p className="mb-0">Tienda de Videojuegos &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
