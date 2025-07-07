// src/components/EditTodo.jsx
import React, { useState, } from 'react';
import axios from 'axios';

function EditTodo({ todo, onSave }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTitle.trim()) {
      alert('El título no puede estar vacío');
      return;
    }

    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        ...todo,
        title: newTitle,
      })
      .then((response) => {
        onSave(response.data);
      })
      .catch((error) => {
        console.error('Error al actualizar el todo:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Nuevo título"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default EditTodo;
