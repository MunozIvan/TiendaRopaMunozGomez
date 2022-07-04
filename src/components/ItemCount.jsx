import { useState } from "react"
import {Dash, Plus} from "react-bootstrap-icons"

export function ItemCount(stock, initial){ 
    
    const [contador, SetContador]= useState(initial)

    const añadirProducto= () =>{
        if(contador<stock){
            SetContador(contador+1)
            console.log(contador.value)
        }
    }
    const quitarProducto = () =>{
        if(contador===1){
        }
        else{
            SetContador(contador-1)
            console.log(contador)
        }
    }


    return(
        <div className="card " >
                
                <div className="card-body">

                    <div className="card " >
                        <button onClick={quitarProducto}><Dash className="icono" size={25}/> </button>
                        <div>dada</div>
                        <button onClick={añadirProducto} ><Plus className="icono" size={25}/> </button>
                    </div>
                    <button type="button" className="btn btn-outline-primary">Comprar</button>
                </div>
        </div>

    )
    

    
}