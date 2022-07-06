

export function ItemDetail({productDetail}){
    return(
        <div className="card productoDetail" id={`${productoProps.tipo}${productoProps.id}`}>
                <img src={productoProps.foto} className="card-img-top imagen" alt="ropa"/>
                <img src={productoProps.foto1} className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">{productoProps.modelo}</h4>
                    <h5>{productoProps.precio}</h5>
                    <p className="card-text">{productoProps.descripcion}</p>
                </div>
        </div>
    )
}