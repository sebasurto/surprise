import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css'
function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/surprise', { state: { name } });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Escribe tu nombre <br/> alguien tiene  <br/>una sorpresa para ti</h1>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default HomePage;
