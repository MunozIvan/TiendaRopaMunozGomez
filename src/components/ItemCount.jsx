import { useState } from "react"
import {Dash, Plus} from "react-bootstrap-icons"
import { Link } from "react-router-dom";

export function ItemCount({product,agregarAlCarrito}){ 
    
    const [contador, SetContador]= useState(1)

    const añadirProducto= () =>{
        if(contador<product.stock){
            SetContador(contador+1)
        }
    }
    const quitarProducto = () =>{
        if(contador===1){
        }
        else{
            SetContador(contador-1)
        }
    }

    function sumarCarrito(contador){
        if(contador>0){
            agregarAlCarrito(contador)    
        }
        
    }


    return(
        <div className="card " >
                
                <div className="card-body">

                    <div className="card " >
                        <button onClick={quitarProducto}><Dash className="icono" size={25}/> </button>
                        <div className="contador">{contador}</div>
                        <button onClick={añadirProducto} ><Plus className="icono" size={25}/> </button>
                        <h6 className="disponibles">Disponibles: {product.stock}</h6>
                    </div>
                    <button type="button" onClick={sumarCarrito} className="btn btn-outline-primary">
                        <Link className="icono" to={`/carrito`}>
                            Agregar al Carrito
                        </Link>
                    </button>
                </div>
        </div>

    )
    

    
}