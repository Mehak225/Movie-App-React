import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  const handleMovieClick = (movie) => {
    window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank");
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3" key={index}>
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
            <img src={movie.Poster} alt='movie' onClick={() => handleMovieClick(movie)}></img>
          </a>
          <div 
            onClick={() => props.handleFavouriteClick(movie)} 
            className="overlay d-flex align-items-center justify-content-center">
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
