import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import '../styles/Modal.css';


const Modal = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  const movieList = props.movieList;
  const movieArray = [];

  movieList.forEach(element => {
    movieArray.push(element);
  });
  

  useEffect(() => {

    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data))
    },[selectedMovie]);


  const  prevData = () => {
    if(movieInfo === 0){ 
      return
    }
    else{
    setMovieInfo(movieInfo - 1);
    console.log(movieArray);
  }
}

  const nextData = () => {
    if(movieInfo === movieArray.length -1){
      setMovieInfo(0);
    }
    else{
      setMovieInfo(movieInfo + 1);
    }
  }

  return (

    
    <div className="Modalbox">
    <div className="Container">

      {movieInfo ? (
        <>
        <div className="Parent">
        <div className="child1">
        <img className="CoverImage" src={movieInfo?.Poster} alt={movieInfo?.Title} />
        </div>
        <div className="child2">
            <h2>
            <span className="MovieName">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Released: <span>{movieInfo?.Released}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Genre: <span>{movieInfo?.Genre}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Director: <span>{movieInfo?.Director}</span>
            </span>
            <br/>
            <span className="MovieInfo">
              Actors: <span>{movieInfo?.Actors}</span>
            </span>
            <br/>   
            <button type="button" onClick={nextData}>NEXT</button>
            <button type="button" onClick={prevData}>PREVIOUS</button>
            </h2>
    
        </div>
    </div> 
          <span className="Close" onClick={() => props.onMovieSelect()}>X</span>
         
        </>
      ) : (
        "Loading..."
      )}
    </div>
    </div>
  );
};
export default Modal;