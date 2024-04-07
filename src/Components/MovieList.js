import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, deleteFunction, handleEdit }) => {
  return (
    <div className="movie-list">
      {React.Children.toArray(
        movies.map((el) => (
          <MovieCard
            movie={el}
            functionDelete={deleteFunction}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
