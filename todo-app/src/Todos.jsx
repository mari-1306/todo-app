// src/components/Todos.jsx
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

  if (loading) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completado' : 'Pendiente'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
