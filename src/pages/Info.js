import { Container } from "react-bootstrap";
import IconoP from "../Components/assets/IconoP.png";
import './style.css';


const InfoDatos = () =>  {
    return <div className="bgCustom bg-gradient">
        <Container>
            <br/>
            <br/>
            <div className="text-center">
            <img
                src= {IconoP}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="TodoPelis logo"
                />
            </div>
            <h1 className="text-center mt-5 fst-italic textCustomColor">
                ¿Por qué "TuCosina"?
            </h1>
            <br/>
            <div className="text-center mt-4 fst-italic fs-5">
                En esta franquicia estamos comprometidos en atender de la mejor forma posible cada una de tus comidas, teniendo en mente las necesidades de cada persona, además de cuidando y promover las buenas prácticas alimenticias.
            </div>
            <div className="text-center fst-italic fs-5">
                Recuerda comer saludable y balanceado todos los días, en especial durante las comidas en las que no tines un compromiso.
            </div>
            <div className="text-center fst-italic fw-bold textCustomColor fs-5">
                -TuCosina❤️-
            </div>
            <br/>
            <br/>
            <h1 className="text-center mt-5 fst-italic textCustomColor">Contactos</h1>
            <br/>
            <div className="text-center fw-bold">
                - Pedidos a domicilio: +52 (33) 36842982 -
            </div>
            <div className="text-center fw-bold">
                - Atención al cliente: +52 (33) 36842983 -
            </div>
            <br/>
            <br/>
            <h1 className="text-center mt-5 fst-italic textCustomColor">Domicilio</h1>
            <br/>
            <div className="text-center fw-bold">
                Calle: Prol. López Mateos Sur 2997 <br/>
                Ciudad: Guadalajara<br/>
                Estado: Jalisco<br/>
                Codigo telefonico de país: +52<br/>
                País: México
            </div>
            <br/>
            <br/>
        </Container>
        </div>;
};

export default InfoDatos;