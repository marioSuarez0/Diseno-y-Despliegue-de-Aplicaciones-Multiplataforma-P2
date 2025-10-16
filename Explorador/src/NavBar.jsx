import React from 'react';
// Debes importar el componente que te permite navegar sin recargar la página
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333', // Color de fondo oscuro para que se vea fija
    color: 'white',
    // Propiedad importante para que sea Fija
    position: 'sticky', 
    top: 0,
    zIndex: 100
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '15px'
  };

  return (
    <nav style={navStyle}>
      {/* Título/Logo de la aplicación [cite: 25] */}
      <Link to="/" style={{ ...linkStyle, fontWeight: 'bold', fontSize: '1.2em' }}>
        Explorador de Películas
      </Link>
      
      {/* Enlaces de navegación [cite: 26] */}
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/favorites" style={linkStyle}>
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;