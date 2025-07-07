// src/components/TodoItem.jsx
import React, { useState } from 'react';
import EditTodo from './EditTodo';

function TodoItem({ todo, toggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedTodo) => {
    console.log('Todo actualizado (sin lógica real):', updatedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <EditTodo todo={todo} onSave={handleSave} />
      ) : (
        <>
          {todo.title} - {todo.completed ? 'Completado' : 'Pendiente'}
          <button onClick={() => toggleCompletion(todo.id)}>
            {todo.completed ? 'Marcar como Pendiente' : 'Marcar como Completado'}
          </button>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
