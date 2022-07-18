import './App.css';
import { Header } from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Carrito } from './components/Carrito';
import { ItemListContainer } from './components/ItemListContainer';
import {ComponenteContexto} from "./context/Contexto"


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
            </Routes>
      </ComponenteContexto>
    </BrowserRouter>
  );
}

export default App;
