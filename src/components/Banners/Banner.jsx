import { Parallax } from "react-parallax";
import './Banners.css'




export function Banner(){

    return(
        <Parallax bgImage={"/images/Banner.jpg"} strength={300}>
        <div style={{ height: 600 }}>
        </div>
        </Parallax>
    )
    
}