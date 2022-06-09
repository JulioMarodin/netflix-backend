import Movie from "../interfaces/Movie";

interface MoviesFromApiDTO {
  id: number;
  title: string;
  directed_by: string;
  duration: number;
}

function loadMovies(moviesFromApi: MoviesFromApiDTO[]): Partial<Movie>[] {
  return moviesFromApi.map((movie) => ({
    id: movie.id,
    name: movie.title,
    directed_by: movie.directed_by,
    duration: movie.duration
  }))
}

export default loadMovies