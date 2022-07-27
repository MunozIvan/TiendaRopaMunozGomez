import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"


export function subirProductos(){//UTILIZADO EN NAVBAR.JSX
    fetch("/products.json")
    .then(response => response.json())
    .then(data => {
        const addCollection = doc(db,"productos")
        data.forEach((producto)=> {
        let {id,modelo, marca, precio, stock,foto,foto1,genero,tipo,ventas} = producto
        producto.id= id;
        producto.modelo = modelo;
        producto.marca = marca.toUpperCase();
        producto.precio = new Intl.NumberFormat().format(precio);
        producto.stock = stock;
        producto.foto = foto;
        producto.foto1 = foto1;
        producto.genero = genero.toUpperCase();
        producto.tipo = tipo.toUpperCase();
        producto.ventas = ventas;
        
            addDoc(addCollection,{
                id: producto.id,
                modelo: producto.modelo,
                marca: producto.marca,
                precio: producto.precio,
                stock: producto.stock,
                foto: producto.foto,
                foto1: producto.foto1,
                genero: producto.genero,
                tipo: producto.tipo,
                ventas: producto.ventas
            })
        })
    })
}
    
       