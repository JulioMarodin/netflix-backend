import IndicativeRating from "./IndicativeRating";

interface Movie {
  id: number;

  name: string;

  ratings: number[];

  indicativeRating: IndicativeRating;
}

export default Movie;