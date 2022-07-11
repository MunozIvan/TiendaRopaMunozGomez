import './App.css';
import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Carrito } from './components/Carrito';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route excact path="/" element={<ItemList/>} />
        <Route path="/categoria/:categoryName" element={<ItemList/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
