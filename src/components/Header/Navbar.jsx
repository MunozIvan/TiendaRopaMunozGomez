import {Link} from "react-router-dom"


function Navbar() {
/*SUBIR PRODUCTOS DESDE EL JSON
  function subirProductos(){
    fetch("/products.json")
    .then(response => response.json())
    .then(data => {
        const addCollection = collection(db,"productos")
        data.forEach((producto)=> {
        let {id,modelo, marca, precio, stock,foto,foto1,genero,tipo,ventas} = producto
        producto.id= id;
        producto.modelo = modelo;
        producto.marca = marca.toUpperCase();
        producto.precio = new Intl.NumberFormat().format(precio);
        producto.stock = stock;
        producto.foto = foto;
        producto.foto1 = foto1;
        producto.genero = genero.toUpperCase();
        producto.tipo = tipo.toUpperCase();
        producto.ventas = ventas;
        
            addDoc(addCollection,{
                id: producto.id,
                modelo: producto.modelo,
                marca: producto.marca,
                precio: producto.precio,
                stock: producto.stock,
                foto: producto.foto,
                foto1: producto.foto1,
                genero: producto.genero,
                tipo: producto.tipo,
                ventas: producto.ventas
            })

            console.log("producto subido")
        })
    })
}*/


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
                {/*<li className="nav-item">
                      <button type="button" onClick={subirProductos} className="btn btn-outline-primary">
                            Subir Productos
                        </button>
                </li>*/ }
                
              </ul>
            </div>
          </div>
        </nav>
    )
}

export {Navbar}