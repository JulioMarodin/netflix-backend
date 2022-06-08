let userId: string | number | boolean;

userId = 0;
userId = "0"

enum IndicativeRating {
  AL = 0,
  A10 = 10,
  A12 = 12,
  A14 = 14,
  A16 = 16,
  A18 = 18,
}

interface Movie {
  id: number;

  name: string;

  ratings: number[];

  indicativeRating: IndicativeRating;
}

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

interface Average {
  average: number;
}

type MovieWithAverage = Movie & Average;

function removeMovieWithoutRatings(movies: Movie[]) {
    return movies.filter(movie => movie.ratings.length !== 0)
}

function calculateMoviesAverage(movies: Movie[]): MovieWithAverage[] {
  const sanitizedMovies = removeMovieWithoutRatings(movies);

  return sanitizedMovies.map(movie => {
    const initialValue = 0;
    const length = movie.ratings.length;
    const sumFn = (previous: number, current: number) => previous + current

    const average = movie.ratings.reduce(sumFn, initialValue) / length;
    
    return {
      ...movie,
      average,
    }
  });
}

function orderByAverageRate(movies: Movie[]) {
  const moviesWithAverage = calculateMoviesAverage(movies);
  
  const moviesOrdered = moviesWithAverage.sort((a, b) => {
    if(a.average > b.average) {
      return 1
    }

    if(a.average < b.average) {
      return -1
    }

    return 0;
  })

  return moviesOrdered;
}

interface User {
  name: string;
  age: number;
  myList: Movie[]
}

const user: User = {
  name: "Bruno Benicio",
  age: 17,
  myList: []
}

class User {
  name;
  age;
  myList;

  constructor(name: string, age: number, myList: Movie[]) {
    this.name = name;
    this.age = age;
    this.myList = myList;
  }
}

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
  return movies.filter((movie) => {
    return movie.indicativeRating <= user.age
  })
}

const orderedMovies = orderByAverageRate(movies);

const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(orderedMovies, user)

function addMovieToUserList(movie: Movie, user: User): void {
  user.myList = [
    ...user.myList,
    movie,
  ]
}

function addMovies(user: User, movies: Movie[], ...ids: number[]): User {
  const newList: Movie[] = [];

  movies.forEach(movie => {
    const isMovieInList = ids.includes(movie.id)

    if(isMovieInList) {
      newList.push(movie)
    }
  })

  return {
    ...user,
    myList: [
      ...user.myList,
      ...newList
    ]
  }
}

/*

Problema 2

Adicionar uma propriedade ID ao filme
Adicionar um método que passados os ids por rest parameter, podemos adicioná-los a lista do usuário

*/