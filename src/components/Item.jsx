import { useState } from "react"

export function Item (ident, nombre,precio,link,descripcion){

    return(

        <div className="card " id={ident+nombre}>
                <img src={link} className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    <h5>{precio}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
        </div>
    )

}




