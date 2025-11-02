import React from "react";
import { VITE_API_KEY, VITE_API_URL } from "./api.js";
import MovieCard from "./MovieCard.jsx";
import "./styles.css/Home&Favorites.css";

const Home = () => {

// Estado para manejar la carga, las películas y la consulta de búsqueda
  const [loading, setLoading] = React.useState(true);
  const [peliculas, setPeliculas] = React.useState([]);
  const [query, setQuery] = React.useState("");

  // Función para llamar a la API y obtener películas
  const llamar_api = async (query = "") => {
    try {
      setLoading(true); 
      
      const isSearching = query.trim() !== '';
      let endpoint = isSearching ? '/search/movie' : '/movie/popular';


      let url = `${VITE_API_URL}${endpoint}?api_key=${VITE_API_KEY}&language=es-ES&page=1`;

      if (isSearching) {
          url += `&query=${encodeURIComponent(query)}`;
      } 

      const response = await fetch(url);
      const data = await response.json();
      setPeliculas(data.results);
      setLoading(false);
    
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  };

  // Llamar a la API
  React.useEffect(() => {
    llamar_api();
  }, []);

  // Función para manejar la busqueda
  const busqueda = (e) => { 
    e.preventDefault();
    llamar_api(query);
  }

  if (loading) {
    return <div>Cargando películas...</div>;
  }

  return (
      <div class='contenido'>
        
        <form onSubmit={busqueda} className='formulario'>
          <input type="text" name="buscador" id="buscador" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Introduce la película"/>
          <button type="submit">Buscar</button>
        </form>

        <div className='lista_peliculas'>
          {peliculas.map((pelicula) => (
            <MovieCard key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </div>

    );
}

export default Home;