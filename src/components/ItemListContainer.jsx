import { ItemList } from "./ItemList"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"


export function ItemListContainer() {

    const [productos, setProductos]= useState([])
    const {categoryName} = useParams()

    useEffect(()=>{
        const productCollection = collection(db, "productos")
        const qHombre = query(productCollection,where("genero", "==", "HOMBRE"));
        const qMujer = query(productCollection,where("genero", "==", "MUJER"));
        const qAccesorios = query(productCollection,where("tipo", "==", "ACCESORIOS"));

        if(categoryName==="hombre"){
            getDocs(qHombre).then( result =>{
                const lista = result.docs.map(doc=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(lista)
            })
        }else if(categoryName==="mujer"){
            getDocs(qMujer).then( result =>{
                const lista = result.docs.map(doc=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(lista)
            })
        }else if(categoryName==="accesorios"){
            getDocs(qAccesorios).then( result =>{
                const lista = result.docs.map(doc=>{
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(lista)
            })
        }
        else{
            getDocs(productCollection).then( result =>{
                const lista = result.docs.map(doc=>{
                    return {
                        id: doc.id,
                        ...doc.data()}
                })
                setProductos(lista)
            })
        }

        



        /*
        if(categoryName){
            fetch("/products.json")
            .then(response => response.json())
            .then(data => {
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
            })
            setProductos(data.filter(el => el.genero.includes(categoryName.toLocaleUpperCase()) || el.tipo.includes(categoryName.toLocaleUpperCase()) ))
        })
        }else{
            fetch("/products.json")
            .then(response => response.json())
            .then(data => {
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
            })
            setProductos(data)
        })

        }*/
         
    },[categoryName])

    return (

        <section className="cuerpo">

                <ItemList productos={productos}/>

        </section>
        
    )
}



