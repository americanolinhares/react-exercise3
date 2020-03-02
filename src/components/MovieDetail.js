import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";

export const MovieDetail = (props) => {
  const [movie, setMovieDetail] = useState({});

  const requestMovieDetail = async (id) => {
    const moviesResult = await MoviesService.getMovieById(id);
    setMovieDetail(moviesResult.data);
  };

  useEffect(() => {
    requestMovieDetail(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <ul>
        <li>Título: {movie.title}</li>
        <li>Lingua Original: {movie.original_language}</li>
        <li>Site: {movie.homepage}</li>
        <li>Lançamento: {movie.release_date}</li>      
    </ul>
  );
};
