import { ItemCount } from "./ItemCount"
import React, {useContext} from 'react'
import { contexto } from "../../context/Contexto"
import "./ItemDetail.css"
import { ItemInfo } from "./ItemInfo"
import Swal from 'sweetalert2'



export function ItemDetail({productDetail}){

    const {agregarCarrito} = useContext(contexto)

    const onAdd = (contador) =>{
        agregarCarrito({item: productDetail, quantity: contador})
        Swal.fire({
            title: `producto agregado al carrito`,
            text: "¿Desea proceder a comprar?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ir al carrito',
            cancelButtonText:`Seguir comprando`
          }).then((result) => {
            if (result.isConfirmed) {
              document.location.href="/carrito"
            }
          })
    }

    return(//MEJORAR LA VIEW DEL PRODUCTO
        <div className="productoDetail" id={`${productDetail.tipo}${productDetail.id}`}>
            <div className="detail1">
                <div className="foto">
                    <img src={productDetail.foto} className="card-img-top imagen" alt="ropa"/>
                </div>
                <div className="foto">
                    <img src={productDetail.foto1} className="card-img-top imagen" alt="ropa"/>
                </div>
            </div>
            <div className="card-body detail2">
                <h4 className="card-title">{productDetail.modelo}</h4>
                <h5>${productDetail.precio}</h5>
                <ItemCount stock={productDetail.stock} onAdd={onAdd}/>
                <ItemInfo productDetail={productDetail}/>
            </div>
                
        </div>

    )
}