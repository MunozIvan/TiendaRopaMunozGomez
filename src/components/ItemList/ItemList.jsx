import "./ItemList.css"

import { Item } from "./Item"

export function ItemList({productos}) {



    return (
            
        <>
            {productos.map( (producto)=>
            <Item key={producto.id} productoProps={producto}/>
            )}        
        </>

        
    )
}