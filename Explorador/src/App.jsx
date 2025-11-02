import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import NavBar from "./NavBar";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
    </MovieProvider>
  );
}

export default App;