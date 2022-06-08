import filterMoviesByIndicativeRating from "./filterMoviesWithIndicativeRating";
import IndicativeRating from "./IndicativeRating";
import Movie from "./Movie" 
import orderByAverageRate from "./orderByAverageRate";
import removeMovieWithoutRatings from "./removeMovieWithoutRating";
import User from "./user";


function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const movies: Movie[] = [
  {
    id: getRandomInt(0, 1000),
    name: 'Spider Man',
    ratings: [1, 5, 3],
    indicativeRating: IndicativeRating.AL
  },
  {
    id: getRandomInt(0, 1000),
    name: 'Doctor Strange',
    ratings: [5, 5, 3],
    indicativeRating: IndicativeRating.A18
  },
  {
    id: getRandomInt(0, 1000),
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
