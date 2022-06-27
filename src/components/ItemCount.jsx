import { useState } from "react"
import {Dash, Plus} from "react-bootstrap-icons"

export function ItemCount({stock, initial}){ 
    
    const [contador, SetContador]= useState({initial})

    const añadirProducto= () =>{
        if(contador<{stock}){
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

    <div className="card " >
                
                <div className="card-body">

                    <div className="card " >
                        <button onClick={quitarProducto}><Dash className="icono" size={25}/> </button>
                        <div>{contador}</div>
                        <button onClick={añadirProducto} ><Plus className="icono" size={25}/> </button>
                    </div>
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                </div>
    </div>

    
}