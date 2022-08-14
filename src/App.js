import './App.css';
import { Header } from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { Carrito } from './components/Carrito/Carrito';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import {ComponenteContexto} from "./context/Contexto"
import { Footer } from './components/Footer/Footer';
import { Empresa } from './components/Empresa/Empresa';


function App() {
  return (
    <BrowserRouter>
      <ComponenteContexto>
          <Header/>
            <Routes>
              <Route excact path="/" element={<ItemListContainer/>} />
              <Route path="/categoria/:categoryName" element={<ItemListContainer/>} />
              <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="/acerca_de_nosotros" element={<Empresa/>} />
            </Routes>
          <Footer/>
      </ComponenteContexto>
    </BrowserRouter>
  );
}

export default App;
