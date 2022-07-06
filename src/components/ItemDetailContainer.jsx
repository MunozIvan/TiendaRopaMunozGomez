import { useEffect,useState } from "react"
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer(ItemId) {

    const [producto, setProducto]= useState([])

    useEffect(()=>{
        fetch("/products.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((producto)=> {
            let {id,modelo, marca, precio, cantidad,foto,foto1,genero,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.cantidad = cantidad;
            producto.foto = foto;
            producto.foto1 = foto1;
            producto.genero = genero.toUpperCase();
            producto.ventas = ventas;
            })
            setProducto(data).filter(producto => (producto.id == ItemId))
        }) 
    },[])

    return (
        
        <ItemDetail productDetail={producto}/>
        
    )
}