import { ItemCount } from "./ItemCount"
import React, {useContext} from 'react'
import { contexto } from "../context/Contexto"



export function ItemDetail({productDetail}){

    const {agregarCarrito} = useContext(contexto)

    const onAdd = (contador) =>{
        agregarCarrito({item: productDetail, quantity: contador})
    }

    return(//MEJORAR LA VIEW DEL PRODUCTO
        <div className="card productoDetail" id={`${productDetail.tipo}${productDetail.id}`}>
            <div style={{width:"20vw"}}>
                <img src={productDetail.foto} className="card-img-top imagen" alt="ropa"/>
                <img src={productDetail.foto1} className="card-img-top imagen" alt="ropa"/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{productDetail.modelo}</h4>
                <h5>{productDetail.precio}</h5>
                <p className="card-text">{productDetail.descripcion}</p>
                <ItemCount stock={productDetail.stock} onAdd={onAdd}/>
            </div>
                
        </div>

    )
}