import React, { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext();

//  Obtengo las películas favoritas del localStorage
const obtenerPeliculasFavoritas = () => {
    const favoritasGuardadas = localStorage.getItem("peliculasFavoritasAlmacenadas"); 
    return favoritasGuardadas ? JSON.parse(favoritasGuardadas) : [];
};

// Proveedor del contexto
export const MovieProvider = ({ children }) => {

    const [peliculasFavoritas, setPeliculasFavoritas] = useState(obtenerPeliculasFavoritas());

    // Función para agregar una película a favoritas
    const añadirPeliculaFavorita = (pelicula) => {
        if (!peliculasFavoritas.find(peliculaFavorita => peliculaFavorita.id === pelicula.id)) {
            setPeliculasFavoritas([...peliculasFavoritas, pelicula]);
        } else {
            setPeliculasFavoritas(peliculasFavoritas.filter(peliculaFavorita => peliculaFavorita.id !== pelicula.id));
        }
    };

    // Función para guardar las película favoritas en localStorage
    useEffect(() => {localStorage.setItem("peliculasFavoritasAlmacenadas", JSON.stringify(peliculasFavoritas));}
    , [peliculasFavoritas]);

    const value = {
        peliculasFavoritas,
        añadirPeliculaFavorita
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};

// Hook para usar el contexto
export const useMovieContext = () => {
    return useContext(MovieContext);
};