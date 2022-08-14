import { Parallax } from "react-parallax";
import './Banners.css'




export function BannerMujer(){


    return(
        <Parallax className="banner" bgImage={"/images/BannerMujer1.jpg"} strength={400}>
        <div style={{ height: 500 }}>
            <div className="mujer" >Colección para Mujer</div>
        </div>
        </Parallax>
    )
    
}