import { Parallax } from "react-parallax";
import './Banners.css'




export function BannerADN(){


    return(
        <Parallax bgImage={"/images/BannerADN.jpg"} strength={200}>
        <div style={{ height: 500 }}>
        </div>
        </Parallax>
    )
    
}