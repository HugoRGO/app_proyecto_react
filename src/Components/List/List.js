import { Button, Container, Card } from "react-bootstrap";

const List = ( { datos, editarReserva, deletReservacion } ) => {
    const onClicked = (id) => {
        const updatedReserva = {
            name: prompt('Nuevo nombre.'),
            hora: prompt('Nueva hora'),
        };
        editarReserva(id, updatedReserva);
    };

    const onClicked2 =(id)=>{
        const confirmDelReserva = alert('Se eliminó la reservación.');
        deletReservacion(id, deletReservacion);}

    return datos.map((ordenes, key)=>{
        return <Container key={key} className="my-2">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title className="mb-3 fst-italic">
                            {ordenes.name} - {ordenes.hora} 
                        </Card.Title>
                        <Card.Text>
                            <Button variant="dark" onClick={() => onClicked(ordenes.id)} className="mx-3 col-2 bg-gradient">Editar</Button>
                            <Button variant="danger" onClick={() => onClicked2(ordenes.id)} className="mx-2 col-2 bg-gradient">Eliminar</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        

    })
};

export default List;