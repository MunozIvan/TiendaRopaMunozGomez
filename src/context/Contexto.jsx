import React, {useState, createContext} from 'react'


export const contexto = createContext([])
const {Provider} = contexto

export function ComponenteContexto({children}){

    const [carrito, setCarrito ]= useState([])

    function agregarCarrito(productDetail,cantidad){
        const nuevoProducto = {
            ...productDetail,
            cantidad
        };
        if(estaEnCarrito(productDetail.id)){
            const productFind = carrito.find(productDetail => productDetail.id === nuevoProducto.id);
            const index = carrito.indexOf(productFind);
            const aux = [...carrito];
            aux[index].cantidad += cantidad;//aux[index].qty = aux[index].qty + qty;
            setCarrito(aux);
          }else{
            setCarrito([...carrito,nuevoProducto]);
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

    function precioCarrito(carrito){
        let precioTotal=0
        carrito.array.forEach(producto => {
            precioTotal= precioTotal + (producto.precio * producto.cantidad)
        })
        return precioTotal
    }


    return(
        <Provider value={{carrito,agregarCarrito,quitarCarrito,vaciarCarrito,precioCarrito}}>
            {children}
        </Provider>
        
    )
}