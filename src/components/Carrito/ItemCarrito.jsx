

export function ItemCarrito({producto}){


    return(

        <div id="${producto.tipo}${producto.id}" className="card productoCarrito">
            <div className="row g-0">
                <div className="col-5 col-sm-4">
                    <img src={producto.foto} className="img-fluid w-100" alt={producto.tipo}/>
                </div>
                <div className="col-7 col-sm-8">
                    <div className="card-body productoCarritoBody">
                        <h5 className="card-title productoCarritoPrecio">${producto.precio}</h5>
                        <p className="card-text productoCarritoModelo">${producto.modelo}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}