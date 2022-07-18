import React, {useState, createContext} from 'react'


export const contexo = createContext([])
const {Provider} = contexo

export function ComponenteContexto({children}){

    const [carrito, setCarrito ]= useState([])

    function agregarCarrito(id,cantidad){
        while(cantidad>0){
            //setCarrito(carrito.push())//HACER FETCH PARA BUSCAR ESE ITEM
            cantidad = cantidad -1
        }
    }

    function quitarCarrito(id){
        carrito.forEach(item=>{//BUSCAR OTRA LOGICA...
            if(item.id==id){
            //QUITAR ITEM //HACER FETCH PARA BUSCAR ESE ITEM
            }
        })
    }

    function vaciarCarrito(){
        setCarrito([])
    }

    function quitarCarrito(id){
        carrito.forEach(item=>{
            if(item.id==id){
                return true
            }
        })
        return false
    }




    return(
        <Provider value={{carrito,agregarCarrito,quitarCarrito,vaciarCarrito}}>
            {children}
        </Provider>
        
    )
}