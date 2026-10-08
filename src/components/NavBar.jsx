
//Funcion que crea el NavBar
function NavBar({ setCategoriaActual }) {

    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#"></a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#catalogo">Catálogo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu bg-primary text-white">
                                <li><a className="dropdown-item text-white filtro-consola" href="#" onClick={() => setCategoriaActual('VideoJuegos')}>VideoJuegos</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-white filtro-consola" href="#" onClick={() => setCategoriaActual('Consolas')}>Consolas</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item text-white filtro-consola" href="#" onClick={() => setCategoriaActual('Todas')}>Todas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contacto">Contacto</a>
                        </li>
                    </ul>

                    <form className="d-flex" role="search" id="buscador">
                        <input className="form-control me-2" type="search" id="inputBusqueda" placeholder="Buscar juego..."
                            aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
