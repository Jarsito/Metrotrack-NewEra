import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing/HomePage";
import RutaDetalle from "./pages/RutaDetalle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ruta/:id" element={<RutaDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
