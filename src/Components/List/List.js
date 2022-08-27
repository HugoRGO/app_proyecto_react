import { Button } from "react-bootstrap";

const List = ( { datos, editarReserva, deletReservacion } ) => {
    const onClicked = (id) => {
        const updatedReserva = {
            name: prompt('Nuevo nombre.'),
            hora: prompt('Nueva hora'),
        };
        editarReserva(id, updatedReserva);
    };

    const onClicked2 =(id)=>{
        deletReservacion(id, deletReservacion);}

    return datos.map((ordenes, key)=>{
        return <li key={key} className="my-2">
            {ordenes.name} - {ordenes.hora} 
            <Button variant="warning"onClick={() => onClicked(ordenes.id)} className="mx-3 col-2">Editar</Button>
            <Button variant="danger"onClick={() => onClicked2(ordenes.id)} className="mx-2 col-2">Eliminar</Button>
        </li>
    })
};

export default List;