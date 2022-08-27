import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormP = ({agregarReserva}) => {
    /* const [newReserva, setNewReserva] = useState({
        name: "",
        hora: "",
    });

    const onChanged = (event) => {
        setNewReserva({
            ...newReserva,
            [event.target.name]: event.target.value
        })
    }  */

    const onSubmited = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newReserva = Object.fromEntries(formData)
        agregarReserva(newReserva);
    };

    return (<Form onSubmit = {onSubmited}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Introdusca Nombre" name="name" />
                <Form.Text className="text-muted">
                    Recomendado introducir uno o mas apellidos.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Hora de Reservación</Form.Label>
                <Form.Control type="time" min="09:00" max="22:00" placeholder="Hora" name="hora" />
                <Form.Text className="text-muted">
                    Horario de atención 09:00 a.m. - 22:00 p.m.
                </Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit" className="mx-3 col-2 bg-gradient">
                Submit
            </Button>
            </Form>);    
};  

export default FormP;