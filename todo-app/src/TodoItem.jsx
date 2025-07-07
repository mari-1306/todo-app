// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ todo, toggleCompletion }) {
  return (
    <li>
      {todo.title} - {todo.completed ? 'Completado' : 'Pendiente'}
      <button onClick={() => toggleCompletion(todo.id)}>
        {todo.completed ? 'Marcar como Pendiente' : 'Marcar como Completado'}
      </button>
    </li>
  );
}

export default TodoItem;
