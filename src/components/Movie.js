import React from "react";
import '../styles/Movie.css';


const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="MovieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="CoverImage" src={Poster} alt={Title} />
      <span className="MovieName">{Title}</span>
      <div className="InfoColumn">
        <span className="MovieInfo">Year : {Year}</span>
        <span className="MovieInfo">Type : {Type}</span>
      </div >
    </div>
  );
};
export default Movie;