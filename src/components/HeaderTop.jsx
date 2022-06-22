
import { SearchBar } from "./SearchBar";
import {Handbag, Person} from "react-bootstrap-icons"



export function HeaderTop() {
    return (
        <div className="headerTop">
            <SearchBar/>
            <img src="#!" alt="logotipo"/>
            <div id="iconos">
                <a href="#" ><Person className="icono" size={25}/></a>
                <a href="#" ><Handbag className="icono" size={25}/></a>  
            </div>
        </div>
    )
}