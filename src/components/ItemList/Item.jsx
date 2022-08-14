import { Link } from "react-router-dom";
import "./ItemList.css"


export function Item ({productoProps}){

    return(
            <div className="card producto" id={`${productoProps.tipo}${productoProps.id}`}>
                
                <div id={`carouselExampleControls${productoProps.id}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000000">
                            <img src={productoProps.foto} className="d-block w-100" alt="ropa"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1000000">
                            <img src={productoProps.foto1} className="d-block w-100" alt="ropa"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${productoProps.id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${productoProps.id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="card-body descripcion">
                    <Link className="icono" to={`/item/${productoProps.id}`}>
                        <h4 className="card-title">{productoProps.modelo}</h4>
                        <h5>${productoProps.precio}</h5>
                    </Link>
                </div>
            </div>
      
        
    )

}




