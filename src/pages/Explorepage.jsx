import React from "react";
import { Destinations, Featured } from "../components";
import { Button } from "../components/common";
import Movies from "../components/Filter/Movies";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import ButtonFilters from "../components/Filter/ButtonFilters";
import { FeaturedData } from "../assets/FeaturedData";

// Create context
export const MovieContext = createContext();

const Explorepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);

  const fetchPopularMovie = async () => {
    const movies = FeaturedData;
    setPopularMovies(movies);
    setFilteredMovie(movies.id);
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
