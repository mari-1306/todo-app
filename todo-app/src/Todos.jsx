// src/components/Todos.jsx (actualización para filtros)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Filters from './Filters';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true; // 'all' filter
  });

  if (loading) return <h2>Cargando...</h2>;
  if (!todos.length) return <h2>No hay tareas disponibles.</h2>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <Filters onFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos} toggleCompletion={toggleCompletion} />
    </div>
  );
}

export default Todos;
