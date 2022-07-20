import React, {useContext} from "react"
import {contexto} from "../context/Contexto"
import {Link} from "react-router-dom"



function Carrito() {
    const {carrito, precioCarrito} = useContext(contexto)
    
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
                    {carrito.map(producto=> //CREAR UN COMPONENTE PARA PRODUCTO EN CARRITO
                    `
                    <div id="${producto.tipo}${producto.id}" class="card productoCarrito">
                        <div class="row g-0">
                            <div class="col-5 col-sm-4">
                                <img src="${producto.foto}" class="img-fluid w-100" alt=${producto.tipo}>
                            </div>
                            <div class="col-7 col-sm-8">
                                <div class="card-body productoCarritoBody">
                                    <h5 class="card-title productoCarritoPrecio">$${producto.precio}</h5>
                                    <p class="card-text productoCarritoModelo">${producto.modelo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `   
                    )}
                </div> 
                <div id="resumen">
                
                    <div class="card-header">
                        Resumen
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Total a pagar: {precioCarrito(carrito)} </h5>
                        <p class="card-text">Cantidad de productos: {carrito.length}</p>
                        <a href="#" class="btn btn-success">Comprar</a>
                    </div>
                    <div class="card-footer text-muted">
                        Tienda Muñoz S.A.
                    </div>
                    
                </div>  
            </section>
        
        )
    }
}

export {Carrito}