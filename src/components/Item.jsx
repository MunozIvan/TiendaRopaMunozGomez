

export function Item ({productoProps}){

    return(

        <div className="card producto" id={`${productoProps.tipo}${productoProps.id}`}>
                <img src={productoProps.foto} className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">{productoProps.modelo}</h4>
                    <h5>{productoProps.precio}</h5>
                </div>
        </div>
    )

}




