

export function Item ({products}){

    return(

        <div className="card" id={products.id+products.nombre}>
                <img src={products.link} className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">{products.nombre}</h4>
                    <h5>{products.precio}</h5>
                    <p className="card-text">{products.descripcion}</p>
                </div>
        </div>
    )

}




