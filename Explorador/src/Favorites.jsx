import React from 'react';
import { useMovieContext } from './MovieContext';
import MovieCard from './MovieCard';
import "./styles.css/Home&Favorites.css";

const Favorites = () => {

  // Obtener las películas favoritas del contexto
  const { peliculasFavoritas } = useMovieContext();

  // Renderizar el contenido basado en si hay películas favoritas o no
  if (peliculasFavoritas.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Mis Películas Favoritas</h1>
        <p>No tienes peliculas favoritas.</p>
      </div>
    );
  } else {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Mis Películas Favoritas</h1>
        <div className='lista_peliculas'>
          {peliculasFavoritas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </div>
    );
  }
};

export default Favorites;