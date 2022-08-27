import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import comida1 from "../Components/assets/comida1.png";
import comida2 from "../Components/assets/comida2.png";
import comida3 from "../Components/assets/comida3.png";
import './style.css';


const MenuTC = () =>  {
    return <div className="bgCustom bg-gradient">
            <br/>
            <br/>
            <h1 className="text-center fst-italic fw-bold textCustomColor">
                ¡Disfruta!
            </h1>
        <Container className="d-flex justify-content-center align-items-center">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 py-5 justify-content-center align-items-center">
                <Card border="dark" className="m-3" style={{ width: '18rem' }}>
                    <Card.Img className="py-2" variant="top" src={comida1} />
                    <Card.Body>
                        <Card.Title>Desayuno Continental</Card.Title>
                        <Card.Text>
                        Huevos estrellados con pan frances, 2 salchichas cocidas, porción de frijoles y baso de jugo o cafe.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="">$70.00 MNX.</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="dark" to="/info" as={Link} className="bg-gradient">Ordenar</Button>
                    </Card.Body>
                </Card>
                <Card border="dark" className="m-3" style={{ width: '18rem' }}>
                    <Card.Img className="py-2" variant="top" src={comida2} />
                    <Card.Body>
                        <Card.Title>Ensalada de Pollo</Card.Title>
                        <Card.Text>
                        Ensalada de pollo acompañada de un huevo frito o hervido, aguacate, lechuga y jitomate rojo.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>$80.00 MNX.</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="dark" to="/info" as={Link} className="bg-gradient">Ordenar</Button>
                    </Card.Body>
                </Card>
                <Card border="dark" className="m-3" style={{ width: '18rem' }}>
                    <Card.Img className="py-2" variant="top" src={comida3} />
                    <Card.Body>
                        <Card.Title>Molletes de frijol</Card.Title>
                        <Card.Text>
                            Molletes de frijoles refritos con queso gouda, crema, cebolla, jitomate, pollo desebrado y salsa.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>$75.00 MNX.</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="dark" to="/info" as={Link} className="bg-gradient">Ordenar</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
        </div>;
};

export default MenuTC;