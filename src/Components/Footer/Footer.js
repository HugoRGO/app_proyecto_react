import { Navbar, Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import IconoFB from "../assets/facebook_icon.png";
import IconoIG from "../assets/IG_icon.png";
import IconoGH from "../assets/Gh_icon.png";
import './style.css';

const Footer = () =>  {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark" className="bg-gradient">
            <Container className="w-50 justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center py-2">
                    <div className="row text-center fw-semibold text-black fst-italic justify-content-center align-items-center">
                        <Button variant="dark" to="/info" as={Link} className="mx-3 mb-2 col-3 bg-gradient">Contacto</Button>
                    </div>
                    <div className="col-lg d-flex justify-content-center align-items-center">
                        <a href="#"> <img src= {IconoFB} alt="Facebook-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                        <a href="#"> <img src= {IconoIG} alt="IG-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                        <a href="https://github.com/HugoRGO/Dashboard-Peliculas"> <img src= {IconoGH} alt="Github-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                    </div>
                    <div className="row text-center fw-semibold text-black fst-italic justify-content-center align-items-center">
                        <p>© 2022 Tucosina.</p>
                        <p>Todos los derechos reservados.</p>
                        <p>Esta es una APP ficticia para fines académicos.</p>
                    </div>
                </div>
            </Container>
        </Navbar>
        </div>
        );
};

export default Footer;