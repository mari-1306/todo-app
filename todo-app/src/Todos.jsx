// src/components/Todos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Filters from './Filters'; // Importamos el nuevo componente de filtros

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
  if (!todos.length) return <h2>No hay tareas disponibles.</h2>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {/* Aquí se muestra el placeholder de los filtros */}
      <Filters />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;
