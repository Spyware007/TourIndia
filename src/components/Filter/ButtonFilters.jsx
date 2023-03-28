import { useContext, useEffect } from "react";
import { useState } from "react";
import { MovieContext } from "../../pages/Explorepage";
import { genres } from "../../untils";
import { Button } from "../common";

const ButtonFilters = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovies, setFilteredMovie } = useContext(MovieContext);

  const handleClickFilter = (id) => {
    setTabActive(id);
    const filteredMovie = popularMovies.filter((movie) =>
      movie.id.includes(id)
    );
    if (id === 0) {
      setFilteredMovie(popularMovies);
    } else {
      setFilteredMovie(filteredMovie);
    }
  };

  return (
    <div className="button-wrapper">
      {genres.map((item) => (
        <Button
          label={item.name}
          key={item.id}
          className={tabActive === item.id ? "active" : undefined}
          onClick={() => handleClickFilter(item.id)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default ButtonFilters;
