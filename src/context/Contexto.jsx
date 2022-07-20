import React, {useState, createContext} from 'react'


export const contexo = createContext([])
const {Provider} = contexo

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
            setCarrito([...carrito,nuevoProducto]);//SIRVE setCarrito([carrito.push(newProducto)])
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
        setCarrito(carrito.filter((product) => product.id != id))
    }

    function estaEnCarrito(id){
        return false
    }


    return(
        <Provider value={{carrito,agregarCarrito,quitarCarrito,vaciarCarrito}}>
            {children}
        </Provider>
        
    )
}