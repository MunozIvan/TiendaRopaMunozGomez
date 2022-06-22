

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navfondo">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav ">
                <li  className="nav-item">
                  <h5>
                    <a  className="nav-link" href="#!">Novedades</a>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <a  className="nav-link" href="#!">Mujeres</a>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <a  className="nav-link" href="#!">Hombres</a>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <a  className="nav-link" href="#!">Joyería</a>
                  </h5>
                </li> 
                <li className="nav-item">
                  <h5>
                    <a  className="nav-link" href="#!">Acerca de nosotros</a>
                  </h5>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
    )
}

export {Navbar}