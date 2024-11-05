import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/ItemList/ItemList";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import Computacion from "./components/Computacion/Computacion";
import Videojuegos from "./components/Videojuegos/Videojuegos";
import Seguridad from "./components/Seguridad/Seguridad";
import Telefonia from "./components/Telefonia/Telefonia";
import Audio from "./components/Audio/Audio";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Computacion" element={<Computacion/>} />
          <Route path="/Videojuegos" element={<Videojuegos/>} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/ItemList" element={<ItemList />} />
          <Route path="/Seguridad" element={<Seguridad />} />
          <Route path="/Telefonia" element={<Telefonia />} />
          <Route path="/Audio" element={<Audio/>} />
          <Route path="/products/product:id" element={<ItemDetail />} />
          <Route path="/products/:categoria" element={<ItemList />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}