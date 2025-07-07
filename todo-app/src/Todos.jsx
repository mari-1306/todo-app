// src/components/Todos.jsx (actualización)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los todos:', error);
        setLoading(false);
      });
  }, []);

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteAll = () => {
    setTodos([]);
  };

  if (loading) return <h2>Cargando...</h2>;
  if (!todos.length) return <h2>No hay tareas disponibles.</h2>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <button onClick={deleteAll}>Eliminar Todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completado' : 'Pendiente'}
            <button onClick={() => toggleCompletion(todo.id)}>
              {todo.completed ? 'Marcar como Pendiente' : 'Marcar como Completado'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
