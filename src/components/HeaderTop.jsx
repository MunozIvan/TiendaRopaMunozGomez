import {Link} from "react-router-dom"
import { SearchBar } from "./SearchBar";
import {Handbag, Person} from "react-bootstrap-icons"



export function HeaderTop() {
    return (
        <div className="headerTop">
            <SearchBar/>
            <img src="#!" alt="logotipo"/>
            <div id="iconos">
                <Link to={"/carrito"} ><Handbag className="icono" size={25}/></Link>  
            </div>
        </div>
    )
}