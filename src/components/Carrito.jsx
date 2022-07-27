import React, {useContext} from "react"
import {contexto} from "../context/Contexto"
import {Link} from "react-router-dom"
import {ItemCarrito} from "./ItemCarrito"
import { db } from "../firebase/firebase"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useState } from "react"



function Carrito() {
    const {carrito, precioCarrito,} = useContext(contexto)
    const [idVenta, setIdVenta] = useState("")

    function precioTotal(){
        precioCarrito()
    }


    const DatosComprador = {//CREAR FORM Y GUARDAR LOS DATOS EN BASE DE DATOS        
        nombre: "Pedro",
        apellido:"Messi",
        email: "futbol@gmail.com"
    }

    const finalizarCompra = () =>{
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            DatosComprador,
            items:carrito,
            date: serverTimestamp(),
            total: precioTotal()
        }).then((result)=>{
            setIdVenta(result.id)//GENERAR SWEETALERT CON IDVENTA Y LINK AL HOME
        })
        carrito.forEach(producto=>{
            const updateCollection = doc(db,"productos",producto.id)
            updateDoc(updateCollection,{
                stock:(producto.stock-producto.cantidad)
            })  
        })

    }


    if(carrito.length===0){
        return(
            <div id="canasta" className="carritoVacio">
                <div className="card">
                    <div className="card-header">
                        Carrito vacío
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Ups...</h5>
                        <p className="card-text">Pacece que todavía no has agregado productos al carrito</p>
                        <button type="button" className="btn btn-outline-primary">
                            <Link className="icono"to={`/`}>
                                Volver al inicio
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <section>
                <div className="carritoConProductos">
                    {carrito.map(producto=>
                        <ItemCarrito key={producto.id} product={producto}/>
                    )}
                </div> 
                <div id="resumen">
                
                    <div className="card-header">
                        Resumen
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Total a pagar: {precioTotal} </h5>
                        <p className="card-text">Cantidad de productos: {carrito.length}</p>
                        <button type="button" onClick={finalizarCompra} className="btn btn-outline-primary">
                            Finalizar compra
                        </button>
                    </div>
                    <div className="card-footer text-muted">
                        Tienda Muñoz S.A.
                    </div>
                    
                </div>  
            </section>
        
        )
    }
}

export {Carrito}