import { Routes, Route } from "react-router-dom";
import DatosFirePage from "../pages/DatosFirePage";
import HomePage from "../pages/HomePage";
import InfoDatos from "../pages/Info";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/datos" element={<DatosFirePage />} />
            <Route path="/info" element={<InfoDatos />} />
        </Routes>
    )
};

export default RoutesComponent;