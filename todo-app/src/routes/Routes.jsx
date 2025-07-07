// src/routes/Routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from '../components/Todos';
import Registro from '../components/Registro';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Bienvenido a la App de Todos</h1>} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
