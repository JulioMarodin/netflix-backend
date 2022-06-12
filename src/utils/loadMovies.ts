import Movie from "../interfaces/Movie";
import { MoviesFromApiDTO } from "../services/MovieService";

function loadMovies(moviesFromApi: MoviesFromApiDTO[]): Movie[] {
  return moviesFromApi.map((movie: MoviesFromApiDTO) => ({
    id: movie.id,
    title: movie.title,
    directedBy: movie.directedBy,
    ratings: [],
    duration: movie.duration
  }))
}

export default loadMovies