import React, { useEffect, useState } from "react";
import ItemProyecto from "./ItemProyecto";
import { firestore } from './firebaseConfig';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

function ListaProyectos() {
    const [proyectos, setProyecto] = useState([]);

    const fetchProyectos = async () => {
        try {
            const colleccionP = collection(firestore, 'proyectos');
            const snapshot = await getDocs(colleccionP);
            const proyectosData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProyecto(proyectosData);
        } catch (error) {
            console.error('Error al obtener Proyectos:', error);
        }
    };

    useEffect(() => {
        fetchProyectos();
    }, []);

    const handleDelete = async (IdP) => {
        try {
            const proyectoDoc = doc(firestore, 'proyectos', IdP);
            await deleteDoc(proyectoDoc);
            setProyecto(proyectos.filter((proyecto) => proyecto.id !== IdP));
        } catch (error) {
            console.error('Error al eliminar proyecto:', error);
        }
    };

    return (
        <div>
            <h3>Lista de Proyectos</h3>
            {proyectos.length > 0 ? (
                <ul>
                    {proyectos.map((proyecto) => (
                        <ItemProyecto key={proyecto.id} proyecto={proyecto} onDelete={handleDelete} />
                    ))}
                </ul>
            ) : (
                <p>No hay Proyectos</p>
            )}
        </div>
    );
}

export default ListaProyectos;