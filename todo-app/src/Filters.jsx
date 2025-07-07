// src/components/Filters.jsx
import React from 'react';

function Filters({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>Todos</button>
      <button onClick={() => onFilterChange('completed')}>Completados</button>
      <button onClick={() => onFilterChange('pending')}>Pendientes</button>
    </div>
  );
}

export default Filters;
