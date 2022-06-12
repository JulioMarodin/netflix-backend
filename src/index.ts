import MenuOptions from "./enums/MenuOptions";
import Movie from "./interfaces/Movie";
import User from "./interfaces/User";
import MovieService from "./services/MovieService";
import addMovies from "./utils/addMovies";
import calculateMoviesAverage from "./utils/calculateMoviesAverage";
import inquirerAsk from "./utils/inquirerAsk";

const users: User[] = [
  {
    id: 1,
    name: "Julio",
    age: 23,
    myList: []
  }
]

let loggedUserId: number;
let movies: Movie[];

async function run() {
  const movieService = new MovieService();
  try {
    console.log("Carregando filmes...");
    movies = await movieService.listAll();
    movies.map(movie => console.log(`${movie.id} - ${movie.title}`));
    console.log("Download concluído");
  } catch (e) {
    console.log("Erro ao baixar filmes");
  } 

  users.map(user => console.log(`${user.id} - ${user.name}`));
  const userInfo = await inquirerAsk("number", "Selecione um usuário para continuar: ");

  loggedUserId = users.findIndex(user => user.id === userInfo.option);

  const answers = await inquirerAsk("input", "Digite uma opção: \n 1 - Dar avaliação \n 2 - Mostrar com média \n 3 - Adicionar filme a lista \n 0 - Sair \n");

  switch (answers.option) {    
    case MenuOptions.RATE_MOVIE:
      let movieId: number;
      let rate: number;

      const chooseMovieAnswer = await inquirerAsk("number", "Qual o filme?");
      movieId = chooseMovieAnswer.option;

      const rateAnswer = await inquirerAsk("number", "Qual avaliação de 0 a 5?");
      rate = rateAnswer.option;

      movies.forEach(movie => {
        if(movie.id === movieId) {
          movie.ratings.push(rate)
        }
      })

      run();
    break;
    
    case MenuOptions.SHOW_WITH_AVERAGE:
      const moviesWithAverage = calculateMoviesAverage(movies);
      moviesWithAverage.map(movie => console.log(`${movie.title}, Média: ${movie.average}`));
      run();
    break;

    case MenuOptions.ADD_MOVIE_TO_LIST:
      const answers = await inquirerAsk("input", "Digite o(s) ID(s) do(s) filme(s): (Ex: 1, 2, 3)");
      const ids = answers.option.split(",").map((id: string) => Number(id));
      console.log(ids.map((id: any) => typeof id));

      users[loggedUserId] =  addMovies(users[loggedUserId], movies, ...ids);
      console.log(users[loggedUserId]);
      break;

    case MenuOptions.EXIT:
      return;
    
    default:
      break;
  }
}

run();