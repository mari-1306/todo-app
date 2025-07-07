// src/components/EditTodo.jsx
import React, { useState, useEffect } from 'react';

function EditTodo({ todo, onSave }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  // Este effect se usa para inicializar el título cuando el todo cambia
  useEffect(() => {
    setNewTitle(todo.title);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí no hacemos nada por ahora, solo simulamos que guardamos el cambio
    onSave({ ...todo, title: newTitle });
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
