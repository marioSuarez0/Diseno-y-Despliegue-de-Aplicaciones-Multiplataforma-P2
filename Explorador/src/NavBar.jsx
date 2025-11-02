import { Link } from 'react-router-dom';
import './styles.css/NavBar.css';

const NavBar = () => {

  return (
    <nav className="navbar"> 
      <p className="nav-logo">Explorador de Películas</p>
      <div className="nav-links"> 
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </nav>
  );
};

export default NavBar;