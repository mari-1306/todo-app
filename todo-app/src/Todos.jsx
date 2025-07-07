// src/components/Todos.jsx (actualización)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';

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

  if (loading) return <h2>Cargando...</h2>;
  if (!todos.length) return <h2>No hay tareas disponibles.</h2>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <TodoList todos={todos} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default Todos;
