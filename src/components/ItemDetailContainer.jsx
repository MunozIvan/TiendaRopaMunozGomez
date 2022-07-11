import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer() {

    const [producto, setProducto]= useState([])
    const {itemId} = useParams()
    console.log(itemId)

    useEffect(()=>{
        fetch("/products.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((producto)=> {
            let {id,modelo, marca, precio, cantidad,foto,foto1,genero,tipo,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.cantidad = cantidad;
            producto.foto = foto;
            producto.foto1 = foto1;
            producto.genero = genero.toUpperCase();
            producto.tipo = tipo.toUpperCase();
            producto.ventas = ventas;
            })
            setProducto(data.filter(product => (product.id == itemId) ))
        }) 
    },[itemId])

    return (
        
        <ItemDetail productDetail={producto}/>
        
    )
}