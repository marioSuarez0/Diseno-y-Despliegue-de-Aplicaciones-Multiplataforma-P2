import { useMovieContext } from "./MovieContext";
import "./styles.css/MovieCard.css";

const MovieCard = ({ pelicula }) => {

    // Obtener las películas favoritas y la función para añadir una película favorita
    const { peliculasFavoritas, añadirPeliculaFavorita } = useMovieContext();
    const esFavorita = peliculasFavoritas.some(peliculaFavorita => peliculaFavorita.id === pelicula.id);
    
    // Construir la URL de la imagen y obtener el año de lanzamiento
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    const image = `${IMAGE_URL}${pelicula.poster_path}`;

    const añoLanzamiento = pelicula.release_date ? pelicula.release_date.split("-")[0] : "N/A";

    // Renderizar la tarjeta de la película
    return (
        <div className="movie-card">
            <img src={image} alt={pelicula.title}/>
            <h3>{pelicula.title}</h3>
            <p className="year">{añoLanzamiento}</p>
            <button onClick={() => añadirPeliculaFavorita(pelicula)}>
                {esFavorita ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
        </div>
    );
};

export default MovieCard;