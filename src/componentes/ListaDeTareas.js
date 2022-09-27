import React, {useState} from 'react'
import '../styles/ListaDeTareas.css'
import TareasFormulario from './TareaFormulario';
import Tarea from './Tarea';


function ListaDeTareas() {

    const [ stateTarea, setStateTarea ] = useState([]);

    const agregarTarea = (tarea) => {

        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...stateTarea];
            setStateTarea(tareasActualizadas);
        }
    }

    const completarTarea = (id) => {
        const tareasActualizadas = stateTarea.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = true;
            } 

            return tarea;
        });

        setStateTarea(tareasActualizadas);
    }

    const eliminarTarea = (id) => {
            const tareasActualizadas = stateTarea.filter((tarea) => tarea.id !== id);
            setStateTarea(tareasActualizadas);
    }


    return (
      <>
        <TareasFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                stateTarea.map( (tarea) => {
                   return <Tarea 
                   key={tarea.id}
                   id={tarea.id}
                   texto={tarea.texto}
                   completada={tarea.completada}
                   eliminarTarea={eliminarTarea}
                   completarTarea={completarTarea}
                    />
                })
            }
        </div>
      </>
    );    
  }
  
  export default ListaDeTareas;