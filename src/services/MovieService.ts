import loadMovies from "../utils/loadMovies";
import BaseService from "./BaseService";

export interface MoviesFromApiDTO {
  id: number;
  title: string;
  ratings: number[];
  directedBy: string;
  duration: number;
}

interface ResponseApiMovies {
  data: MoviesFromApiDTO[]
}

class MovieService extends BaseService {
  constructor() {
    super()
  }

  async listAll() {
    const result = await this.getInstanse().get<ResponseApiMovies>("/movies")
    const movies = result.data.data;
    
    return loadMovies(movies);
  }
}

export default MovieService;