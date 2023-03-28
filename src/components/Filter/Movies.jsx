import { useContext } from "react";
import { MovieContext } from "../../pages/Explorepage";
import { FeaturedData } from "../../assets/FeaturedData";

import { motion } from "framer-motion";
import { Card } from "../common";

const Movies = () => {
  const { filteredMovie } = useContext(MovieContext);
  console.log(filteredMovie);

  return filteredMovie?.map((place, i) => (
    <motion.div
      className="image-card"
      key={place.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2> */}
      <Card data={place} show={true} imgPreview={place.image} />
    </motion.div>
  ));
};

export default Movies;
