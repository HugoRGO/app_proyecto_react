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
                    <h2 className="text-white text-shadow">Desayunos Continentales</h2>
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
        </div>;
};

export default HomePage;