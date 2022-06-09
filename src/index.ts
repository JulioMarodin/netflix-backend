import axios from "axios";

import IndicativeRating from "./enums/IndicativeRating";
import Movie from "./interfaces/Movie" 
import orderByAverageRate from "./utils/orderByAverageRate";
import removeMovieWithoutRatings from "./utils/removeMovieWithoutRating";
import User from "./interfaces/User";
import filterMoviesByIndicativeRating from "./utils/filterMoviesWithIndicativeRating";


const movies: Movie[] = [
  {
    id: 1,
    name: 'Spider Man',
    ratings: [1, 5, 3],
    indicativeRating: IndicativeRating.AL
  },
  {
    id: 2,
    name: 'Doctor Strange',
    ratings: [5, 5, 3],
    indicativeRating: IndicativeRating.A18
  },
  {
    id: 3,
    name: 'Avengers',
    ratings: [],
    indicativeRating: IndicativeRating.A12
  }
];

const user: User = {
  name: "Julio",
  age: 23,
  myList: []
}

const orderedMovies = orderByAverageRate(movies);

const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(orderedMovies, user)
