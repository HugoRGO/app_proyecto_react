import { Routes, Route } from "react-router-dom";
import DatosFirePage from "../pages/DatosFirePage";
import HomePage from "../pages/HomePage";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Datos" element={<DatosFirePage />} />
        </Routes>
    )
};

export default RoutesComponent;