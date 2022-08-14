import {Link} from "react-router-dom"
import { SearchBar } from "./SearchBar";
import {Handbag} from "react-bootstrap-icons"



export function HeaderTop() {
    return (
        <div className="headerTop">
            <SearchBar/>
            <div className="logo">
                <Link  className="nav-link" to={"/"}>Muñoz Gomez</Link>
            </div>
            <div id="iconos">
                <Link to={"/carrito"} ><Handbag className="icono" size={25}/></Link>  
            </div>
        </div>
    )
}