/*BORRAR LUEGO
{productos.map((product) => <Item key={product.id} products={product}/>)}
*/



let arrayProductosFetch = []

function fetchProductos(){
    fetch("https://src/products.json",{
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        data.forEach((producto)=> {
            let {id,modelo, marca, precio, stock,foto,foto1,genero,ventas} = producto
            producto.id= id;
            producto.modelo = modelo;
            producto.marca = marca.toUpperCase();
            producto.precio = new Intl.NumberFormat().format(precio);
            producto.stock = stock;
            producto.foto = foto;
            producto.foto1 = foto1;
            producto.genero = genero.toUpperCase();
            producto.ventas = ventas;
            /*arrayProductosFetch.push(producto)*/
        })
    })/*.then(()=>{
        return arrayProductosFetch
    })*/
    /*.then(()=> {
        arrayProductosFetch.sort((a,b) =>{
            return (b.ventas - a.ventas)
        }).forEach((producto)=>{
            cartasProductos.innerHTML+=`
            <div id="${producto.tipo}${producto.id}" class="card mb-3 producto">
                <img src="${producto.foto}" class="card-img-top imagen" alt=${producto.tipo}>
                <div class="card-body descripcion">
                    <h5 class="card-title">$${producto.precio}</h5>
                    <p class="card-text">${producto.modelo}</p>
                    <button id="comprar${producto.id}" type="button" class="btn btn-info">Comprar</button>
                </div>
            </div>
            ` 
        })
    })*/
}

