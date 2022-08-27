import { Button } from "react-bootstrap";

const List = ( { datos, editarReserva } ) => {
    const onClicked = (id) => {
        const updatedReserva = {
            name: prompt('Nombre'),
            hora: prompt('Hora'),
        };
        editarReserva(id, updatedReserva);
    };

    return datos.map((ordenes, key)=>{
        return <li key={key}>
            {ordenes.name} - {ordenes.hora} 
            <Button variant="warning"onClick={() => onClicked(ordenes.id)}>Editar</Button>
        </li>
    })
};

export default List;