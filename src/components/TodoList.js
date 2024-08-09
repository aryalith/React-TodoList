import React, { useState } from 'react';

//const tareas = [];
export default function TodoList() {
    const [newTarea, setnewTarea] = useState('');
    const [newList, setnewList] = useState([]);
    const addTarea = (event) => {
        setnewTarea(event.target.value);
    }

    const agregarTarea = () => {
        if (newTarea) {
            const listItem = { name: newTarea }
            newList.push(listItem)
            setnewList(newList);
        }
        setnewTarea('');
    }

    const eliminarTarea = (name) => {
        setnewList(newList.filter(tarea => tarea.name !== name))
    }

    const borrarUltima = () => {
        setnewList(newList.slice(0, -1))
    }

    const listTareas = newList.map(tarea =>
        <li>
            {tarea.name} <button onClick={() => eliminarTarea(tarea.name)}>Eliminar</button>
        </li>
    )
    return (
        <div>
            <div>
                <input type='text' value={newTarea} onChange={addTarea} />
                <button onClick={agregarTarea}>Agregar tarea</button>
                <button onClick={borrarUltima}>Eliminar ultima</button>
            </div>
            <ul>{listTareas}</ul>
        </div>
    )
}
