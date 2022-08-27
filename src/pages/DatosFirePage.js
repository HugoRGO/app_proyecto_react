import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
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
                lasOrdenes.push(orden.data());
            });
            setDatos(lasOrdenes);
        })
    }

    useEffect(()=>{
        listenOrdenes();
    }, [] );

    listenOrdenes();

    return (
        <>
            <Container>
                <FormP />
                <List datos={datos} />
            </Container>
        </>
        );
};

export default DatosFirePage;