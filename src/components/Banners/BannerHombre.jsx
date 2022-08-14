import { Parallax } from "react-parallax";
import './Banners.css'




export function BannerHombre(){

    return(
        <Parallax bgImage={"/images/BannerHombre.jpg"} strength={400}>
        <div style={{ height: 500 }}>
            <div className="hombre" >Colección para hombre</div>
        </div>
        </Parallax>
    )
    
}