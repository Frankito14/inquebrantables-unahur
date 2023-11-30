import { Route, Routes } from "react-router-dom";
import TarjetaDescuento from "./TarjetaDescuentos";
import NuestroLocal from "./NuestroLocal";
import QuienesSomos from "./QuienesSomos";
import Home from "./Home";
import BancoDeApuntes from "./BancoDeApuntes";
import PreguntasFrecuentes from "./PreguntasFrecuentes";


export default function Main() {
  return (
    <main className="bg-gray-100">
      <Routes>
        <Route path="/Inicio" element={<Home></Home>}></Route>
        <Route path="/TarjetaDescuentos" element={<TarjetaDescuento></TarjetaDescuento>}></Route>
        <Route path="/NuestroLocal" element={<NuestroLocal></NuestroLocal>}></Route>
        <Route path="/QuienesSomos" element={<QuienesSomos></QuienesSomos>}></Route>
        <Route path="/BancoDeApuntes" element={<BancoDeApuntes></BancoDeApuntes>}></Route>
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>
        <Route path="/*" element={<Home></Home>}></Route>
      </Routes>
    </main>
  );
}
