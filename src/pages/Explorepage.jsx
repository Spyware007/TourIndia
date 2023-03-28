import React from "react";
import { Destinations, Featured } from "../components";
import { Button } from "../components/common";
import Movies from "../components/Filter/Movies";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import ButtonFilters from "../components/Filter/ButtonFilters";

// Create context
export const MovieContext = createContext();

const Explorepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const fetchPopularMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const movies = await response.json();
    setPopularMovies(movies.results);
    setFilteredMovie(movies.results);
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  const value = {
    popularMovies,
    filteredMovie,
    setFilteredMovie,
  };
  return (
    <>
      <MovieContext.Provider value={value}>
        <div className="app">
          <ButtonFilters />
          <div className="image-container">
            <AnimatePresence>
              <Movies />
            </AnimatePresence>
          </div>
        </div>
      </MovieContext.Provider>
      <Destinations />
      <Featured />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          margin: "100px 0",
        }}
      >
        <Button label="Show More" />
      </div>
    </>
  );
};

export default Explorepage;
