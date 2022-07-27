import React, {useState, createContext} from 'react'


export const contexto = createContext([])
const {Provider} = contexto

export function ComponenteContexto({children}){

    const [carrito, setCarrito ]= useState([])
    const [total, setTotal ]= useState(0)

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
            console.log("nuevo/s producto/s agregado/s")
            console.log(carrito)

          }else{
            setCarrito([...carrito,nuevoProducto]);
            console.log("primer/os producto/ss agregado/s")
            console.log(carrito)
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