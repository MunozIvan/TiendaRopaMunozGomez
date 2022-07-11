import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navfondo">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav ">
                <li  className="nav-item">
                  <h5>
                    <Link  className="nav-link" to={"/"}>Novedades</Link>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <Link  className="nav-link" to={"/categoria/mujer"}>Mujer</Link>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <Link  className="nav-link" to={"/categoria/hombre"}>Hombre</Link>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <Link  className="nav-link" to={"/categoria/accesorios"}>Accesorios</Link>
                  </h5>
                </li> 
                <li className="nav-item">
                  <h5>
                    <Link  className="nav-link" to={"/acerca_de_nosotros"}>Acerca de nosotros</Link>
                  </h5>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
    )
}

export {Navbar}