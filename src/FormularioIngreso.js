import React, { useState, useRef } from 'react';
import { firestore } from "./firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
import SimpleReactValidator from 'simple-react-validator';

function FormularioIngreso({ addProyecto }) {
    const [proyecto, setProyecto] = useState({ nombreP: '', descripcionP: '' });
    const validador = useRef(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProyecto({ ...proyecto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validador.current.allValid()) {
            try {
                const newProyecto = { nombreP: proyecto.nombreP, descripcionP: proyecto.descripcionP };
                const docRef = await addDoc(collection(firestore, 'proyectos'), newProyecto);

                addProyecto({ id: docRef.id, ...newProyecto });
                setProyecto({ nombreP: '', descripcionP: '' });

            } catch (error) {
                console.error('Error al agregar Proyecto:', error);
            }
        } else {
            validador.current.showMessages();

            setProyecto({ ...proyecto });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombreP"
                value={proyecto.nombreP}
                onChange={handleChange}
                placeholder="Nombre del Proyecto"
            />
            {validador.current.message('nombreP', proyecto.nombreP, 'required', { className: 'text-danger' })}
            <textarea
                name="descripcionP"
                value={proyecto.descripcionP}
                onChange={handleChange}
                placeholder="Descripción del Proyecto"
            />
            {validador.current.message('descripcionP', proyecto.descripcionP, 'required|min:10', { className: 'text-danger' })}
            <button type="submit">Guardar nuevo proyecto</button>
        </form>
    );
}

export default FormularioIngreso; 
