import { Navbar, Container} from "react-bootstrap";
import IconoFB from "../assets/facebook_icon.png";
import IconoIG from "../assets/IG_icon.png";
import IconoGH from "../assets/Gh_icon.png";

const Footer = () =>  {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bg-gradient">
            <Container className="w-50 justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center py-2">
                    <div className="col-lg d-flex justify-content-center align-items-center">
                        <a href="#"> <img src= {IconoFB} alt="Facebook-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                        <a href="#"> <img src= {IconoIG} alt="IG-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                        <a href="#"> <img src= {IconoGH} alt="Github-Logo" width="40" height="35" className="d-inline-block align-text-top m-4" /></a>
                    </div>
                    <div className="row text-center fw-semibold text-white">
                        <p>© 2022 Tucosina.</p>
                        <p>Todos los derechos reservados.</p>
                        <p>Esta es una APP ficticia para fines académicos.</p>
                    </div>
                </div>
            </Container>
        </Navbar>
        );
};

export default Footer;