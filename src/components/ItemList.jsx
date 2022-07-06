import { useEffect,useState } from "react"
import { Item } from "./Item"


const InitialProducts= [
    {id:0,nombre:"Fila Racer Grid",precio:22000,link:"/src/images/FilaRacerGrid.png",descripcion:"hola soy una descripción"},
    {id:1,nombre:"Fila Rush",precio:16000,link:"/src/images/FilaRush.png",descripcion:"hola soy una descripción"},
    {id:2,nombre:"Adidas Duramo SL",precio:18000,link:"/src/images/AdidasDuramoSL.png",descripcion:"hola soy una descripción"},
    {id:3,nombre:"Adidas EQ21",precio:21000,link:"/src/images/AdidasEQ21.png",descripcion:"hola soy una descripción"},
    {id:4,nombre:"Adidas Solustride",precio:22000,link:"/src/images/AdidasSoulstride.png",descripcion:"hola soy una descripción"},
]


export function ItemList() {

    

    const [productos, setProductos]= useState([])

    const promesa = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(InitialProducts)
        },2000)
        
    })

    useEffect(()=>{
        promesa.then((data)=>{
            setProductos(data)
            
        }).catch(()=>{
            console.log("Algo salio mal")
        })
    },[])

    return (
        <section className="cuerpo">

            {productos.map((product) => <Item key={product.id} products={product}/> )}
            

        </section>
        
    )
}