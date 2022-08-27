import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { doc, collection, getDocs, onSnapshot, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import FormP from "../Components/Form/Form";
import List from "../Components/List/List";

const DatosFirePage = () =>  {

    const [datos, setDatos] = useState ([]);

    const REF_COLLECTION = collection (db, 'Ordenes');

    const getAllDatos = async () => {
        const snapshot = await getDocs (REF_COLLECTION);
        snapshot.docs.forEach((orden) => console.log(orden.data()));
    };

    const listenOrdenes = () => {
        onSnapshot(REF_COLLECTION, (snapshot)=>{
            const lasOrdenes = [];
            snapshot.docs.forEach((orden) => {
                lasOrdenes.push({
                    ...orden.data(),
                    id: orden?.id,
                });
            });
            setDatos(lasOrdenes);
        })
    }

    const agregarReserva = async (Reservas) => addDoc(REF_COLLECTION, Reservas);
    const editarReserva = async (id, reservas) => setDoc(doc(db, 'Ordenes', id), reservas);
    const deletReservacion = async (id, reservas)=>  deleteDoc(doc(db, "Ordenes", id), reservas);


    useEffect(()=>{
        listenOrdenes();
    }, [] );

    return (
        <>
            <Container>
                <br /><br />
                <FormP agregarReserva={agregarReserva} />
                <br /><br />
                <List datos={datos} editarReserva={editarReserva} deletReservacion={deletReservacion} />
                <br /><br />
            </Container>
        </>
        );
};

export default DatosFirePage;