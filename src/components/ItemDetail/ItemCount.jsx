import { useState } from "react"
import {Dash, Plus} from "react-bootstrap-icons"
import "./ItemDetail.css"



export function ItemCount({stock,onAdd}){ 
    
    const [contador, SetContador]= useState(1)

    const añadirProducto= () =>{
        if(contador<stock){
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

    function sumarCarrito(){
        onAdd(contador)    
        
    }


    return(
                
                <div className="cantidad card-body">
                    <h6 className="disponibles">Disponibles: {stock}</h6>
                    <div className="card elegirCantidad" >
                        <button onClick={quitarProducto}><Dash className="icono sumar" size={25}/> </button>
                        <div className="contador">{contador}</div>
                        <button onClick={añadirProducto} ><Plus className="icono restar" size={25}/> </button>
                    </div>    
                        
                    
                    <button type="button" onClick={sumarCarrito} className="btn btn-outline-primary">
                        Agregar al Carrito
                    </button>
                </div>


    )
    

    
}