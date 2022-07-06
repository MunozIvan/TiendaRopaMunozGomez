import { useEffect,useState } from "react"
import { Item } from "./Item"

export function ItemList() {

    const [productos, setProductos]= useState([])

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
            setProductos(data)
        }) 
    },[])

    return (
        <section className="cuerpo">
            
            {productos.map((producto)=> <Item key={producto.id} productoProps={producto}></Item>)}

        </section>
        
    )
}