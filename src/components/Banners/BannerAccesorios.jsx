import { Parallax } from "react-parallax";
import './Banners.css'




export function BannerAccesorios(){


    return(
        <Parallax bgImage={"/images/BannerAccesorios1.jpg"} strength={100}>
        <div style={{ height: 500 }}>
            <div className="accesorios" >Accesorios</div>
        </div>
        </Parallax>
    )
    
}
