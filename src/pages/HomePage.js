import { Container, Carousel } from "react-bootstrap";
import comida1 from "../Components/assets/comida1.png";
import comida2 from "../Components/assets/comida2.png";
import comida3 from "../Components/assets/comida3.png";
import './style.css';


const HomePage = () =>  {
    return <div className="bgCustom bg-gradient">
        <Container className="d-flex justify-content-center align-items-center">
            <Carousel variant="dark" className="w-75 h-75">
                <Carousel.Item>
                    <img
                    className="d-block  w-100"
                    src= {comida1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white text-shadow">Desayuno Continental</h2>
                    <h3 className="text-shadow">Nos complase atenderte para iniciar tu día.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {comida2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white text-shadow">Comidas Completas</h2>
                    <h3 className="text-shadow">Quedaras satisfecho y agusto.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {comida3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-white text-shadow">Cenas Para Todos</h2>
                    <h3 className="text-shadow">Para terminar el día con una sonriza.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        <Container>
            <br/>
            <br/>
            <h1 className="text-center mt-5 fst-italic textCustomColor">¿Sabías Qué?</h1>
            <br/>
            <div className="text-center mt-4 fst-italic">
                Una alimentación adecuada es la que nos proporciona los requerimientos del organismo, en cuanto a energía y nutrientes, para cubrir sus necesidades y para que pueda funcionar correctamente. No existe una dieta universal adecuada, sino que debe adaptarse a cada persona atendiendo a sus características personales y su estilo de vida: una dieta equilibrada no será la misma para una niño que para un adulto o una embarazada, ni para una persona que practica habitualmente deporte o para una persona sedentaria.
            </div>
            <div className="text-center fst-italic">
                Recuerda comer saludable y balanceado todos los días, en especial durante las comidas en las que no tines un compromiso.
            </div>
            <div className="text-center fst-italic fw-bold textCustomColor">
                -TuCosina❤️-
            </div>
            <br/>
            <br/>
        </Container>
        </div>;
};

export default HomePage;