import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { db } from "../../firebase/firebase"
import { getDoc, collection, doc } from "firebase/firestore"

export function ItemDetailContainer() {

    const [productoDetail, setProductoDetail]= useState({})
    const {itemId} = useParams()

    useEffect(()=>{

        const productSCollection = collection(db, "productos");
        const refDoc = doc(productSCollection,itemId)
        getDoc(refDoc)
        .then((result)=>{
            setProductoDetail(result.data());
        })

        /*
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
            if(producto.id==parseInt(itemId)){
                setProductoDetail(producto)
            }
            })
        }) */
    },[itemId])

    return (
        
        <ItemDetail productDetail={productoDetail}/>
        
    )
}