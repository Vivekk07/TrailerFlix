import React, { useState, useEffect } from "react";
import axios from "../API/axios";
import style from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //link here
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          console.log(url);
          console.table(movie);
          console.log(movie?.name);
          const urlVar = new URL(url);
          const urlParams = new URLSearchParams(urlVar.search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) =>
          console.log(
            "Trailer cannot be fetched. Try clicking on other videos" + error
          )
        );
    }
  };

  return (
    <div className={style.row}>
      <h2>{props.title}</h2>

      <div className={style.row__posters}>
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`${style.row__poster} ${
                  props.isLargeRow && style.row__posterLarge
                }`}
                src={`${base_url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              ></img>
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
