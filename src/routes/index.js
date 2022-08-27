import { Routes, Route } from "react-router-dom";
import DatosFirePage from "../pages/DatosFirePage";
import HomePage from "../pages/HomePage";
import InfoDatos from "../pages/Info";
import MenuTC from "../pages/Menu";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/datos" element={<DatosFirePage />} />
            <Route path="/info" element={<InfoDatos />} />
            <Route path="/menu" element={<MenuTC />} />
        </Routes>
    )
};

export default RoutesComponent;