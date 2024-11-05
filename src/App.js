import React, { useState } from 'react';
import ListaProyectos from "./ListaProyectos";
import FormularioIngreso from "./FormularioIngreso";

function AppPrincipal() {
  const [proyectos, setproyectos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const newProyecto = (proyectos) => {
    setproyectos([...proyectos, proyectos]);
  };

  return (
    <div>
      <h1>Gestión de Proyecto</h1>

      <ListaProyectos proyectos={proyectos} />

      <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
        {mostrarFormulario ? 'Ocultar Formulario' : 'Agregar Proyecto'}
      </button>
      {mostrarFormulario && <FormularioIngreso addProyecto={newProyecto} />}
    </div>
  );
}

export default AppPrincipal;
