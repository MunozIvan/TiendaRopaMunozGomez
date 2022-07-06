import { ItemCount } from "./ItemCount"
/*OBSOLETO*/


export function ItemListContainer() {
    return (
        <section className="cuerpo">

            <div className="card " >
                <img src="./imagenes/casa13.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">LUXURY 4040</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis quae voluptatibus corrupti sit cupiditate at, ducimus, quisquam amet eveniet rerum magnam cor</p>
                </div>
                <div className="card-footer">
                    <ItemCount stock="5" initial="1"/>
                </div>
            </div>

            <div className="card" >
                <img src="./imagenes/casa16.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">LUXURY 4080</h4>
                    <p className="card-text">Diseño moderno y minimalista. Su exterior presenta un amplio garage. El camino vanguardista dirige hacia la entrada de la casa.</p>
                    <ItemCount stock="7" initial="1"/>
                </div>
            </div> 

            <div className="card " >
                <img scr="./imagenes/casa14.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">PALACE 5020</h4>
                    <p className="card-text">Impactante diseño moderno con una marcada personalidad. Este id de dos pisos con grandes ventanas invita a sus habitantes a disfrutar de buena iluminación y una excelente vista todos los días. </p>
                    <ItemCount stock="5" initial="1"/>
                </div>
            </div>

            <div className="card " >
                <img src="./imagenes/casa15.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">PALACE 6050</h4>
                    <p className="card-text">Amplitud y lujo son sinónimos de esta casa. Al recorrer la plata inferior, descubrimos un funcional estar comedor conectado con una gran cocina con barra desayunadora. </p>
                    <ItemCount stock="10"initial="1"/>
                </div>
            </div>

            <div className="card " >
                <img src="./imagenes/casa17.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">PALACE 5010</h4>
                    <p className="card-text">Este increíble diseño se destaca por sus amplios ventanales, ideales para lograr una excelente luminosidad en cada uno de sus ambientes.</p>
                    <ItemCount stock="3" initial="1"/>
                </div>
            </div>

            <div className="card " >
                <img src="./imagenes/casa12.jpg" className="card-img-top imagen" alt="ropa"/>
                <div className="card-body">
                    <h4 className="card-title">PALACE 5030</h4>
                    <p className="card-text">Moderno diseño minimalista de dos plantas. Su exterior dispone de cochera, galería y galería/balcón, ideal para disfrutar día a día.</p>
                    <ItemCount stock="2" initial="1"/>
                </div>
            </div>

        </section>
        
    )
}



