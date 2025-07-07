// src/components/Registro.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('El título es obligatorio');
      return;
    }

    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then((response) => {
        console.log('Todo creado:', response.data);
        setTitle('');
        setError('');
      })
      .catch((error) => {
        console.error('Error al crear el todo:', error);
      });
  };

  return (
    <div>
      <h2>Nuevo Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe una tarea"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Registro;
