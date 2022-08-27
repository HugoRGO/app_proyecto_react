import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faKitchenSet, faIdBadge, faMagnifyingGlass, faSquareCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import IconoP from "../assets/IconoP.png";
import './style.css';


const Header = () =>  {
    return (
        <Navbar collapseOnSelect expand="lg" bg="myColor" className="bg-gradient py-2">
            <Container>
                <Navbar.Brand href="/">
                <img
                src= {IconoP}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="TodoPelis logo"
                />
                </Navbar.Brand>
                <Navbar.Brand href="/" className="fw-bold">TuCosina</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={Link} className="mx-2">
                        <FontAwesomeIcon icon={faHouse} />&nbsp;
                        Inicio
                    </Nav.Link>
                    <NavDropdown title={
                        <span>
                            <FontAwesomeIcon icon={faKitchenSet} />&nbsp;
                            <i className='fad fa-newspaper'></i> Acciones
                        </span>
                    } id="collasible-nav-dropdown" className="mx-2">
                    <NavDropdown.Item to="/datos" as={Link}>
                        <FontAwesomeIcon icon={faSquareCheck} />&nbsp;
                        Reservar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="/info" as={Link}>
                    <FontAwesomeIcon icon={faCircleInfo} />&nbsp;
                        Información
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar Platillo"
                        className="me-4 px-4 fst-italic"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary" className="me-4">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                    </Form>
                    <Nav.Link href="/" className="mx-3">
                        <FontAwesomeIcon icon={faIdBadge} />&nbsp;
                        Iniciar Sesión
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;