import React from "react";

function ItemProyecto({ proyecto, onDelete }) {

    return (
        <React.Fragment>
            <li>
                <h3>{proyecto.nombreP}</h3>
                <p>{proyecto.descripcionP}</p>
                <button onClick={() => onDelete(proyecto.id)}>Eliminar</button>
            </li>
        </React.Fragment>
    );
}

export default ItemProyecto;
