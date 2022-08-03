import React, {useState, createContext} from 'react'


export const contexto = createContext([])
const {Provider} = contexto

export function ComponenteContexto({children}){

    const [carrito, setCarrito ]= useState([])
    const [total, setTotal ]= useState(0)

    function agregarCarrito(item) {
        let list = [...carrito]
        if(list.some(e => e.item.id === item.item.id)){
            list.find(e => e.item.id === item.item.id).quantity += item.quantity
            setCarrito(list)
            console.log(carrito)
        }else{
            setCarrito([...carrito, item])
        }
    }

    function vaciarCarrito(){
        setCarrito([])
    }

    function quitarCarrito(id){
        setCarrito(carrito.filter((product) => product.id !== id))
    }

    function estaEnCarrito(id){
        return false
    }

    function precioCarrito(){
        let precioTotal=0
        carrito.forEach(producto => {
            precioTotal= precioTotal + (producto.precio * producto.cantidad)
        })
        setTotal(precioTotal)
        return total
    }


    return(
        <Provider value={{carrito,agregarCarrito,quitarCarrito,vaciarCarrito,precioCarrito}}>
            {children}
        </Provider>
        
    )
}