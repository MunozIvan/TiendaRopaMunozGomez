import { Link } from "react-router-dom";


export function Item ({productoProps}){

    return(

            <div className="card producto" id={`${productoProps.tipo}${productoProps.id}`}>
                <img src={productoProps.foto} className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <Link to={`/item/${productoProps.id}`}>
                        <h4 className="card-title">{productoProps.modelo}</h4>
                        <h5>${productoProps.precio}</h5>
                    </Link>
                </div>
            </div>
      
        
    )

}




