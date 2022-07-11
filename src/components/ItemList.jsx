import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Item } from "./Item"

export function ItemList() {

    const [productos, setProductos]= useState([])
    const {categoryName} = useParams()

    useEffect(()=>{

        if(categoryName){
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
            setProductos(data.filter(el => el.genero.includes(categoryName.toLocaleUpperCase()) || el.tipo.includes(categoryName.toLocaleUpperCase()) ))
        })
        }else{
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
            setProductos(data)
        })

        }
         
    },[categoryName])

    return (
        <section className="cuerpo">
            

            {productos.map((producto)=><Item key={producto.id} productoProps={producto}></Item> )}

        </section>
        
    )
}