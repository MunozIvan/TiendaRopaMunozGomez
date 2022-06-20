

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navfondo">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html"><i class="bi bi-cart3 fill=white"></i> Muñoz S.A.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav ">
              <li  class="nav-item">
                <a  class="nav-link" aria-current="page" href="#" ><i class="bi bi-house fill=white" /> Inicio </a>
              </li>
              <li  class="nav-item">
                <a  class="nav-link" href="#" ><i class="bi bi-phone fill=white" /> Hombres</a>
              </li>
              <li class="nav-item">
                <a  class="nav-link" href="#" ><i class="bi bi-camera fill=white" /> Mujeres </a>
              </li>
              <li class="nav-item">
                <a  class="nav-link" href="#"><i class="bi bi-bag fill=white" /> Deportes </a>
              </li> 
            </ul>
          </div>
          <div class="container-fluid justify-content-center buscador">
            <input class="form-control me-2" type="text" placeholder="Buscar producto..." aria-label="Search" id="formBuscador" />
          </div>
        </div>
      </nav>
    )
}

export {Navbar}