import User from "./interfaces/User";
import MovieService from "./services/MovieService";


const user: User = {
  name: "Julio",
  age: 23,
  myList: []
}

new MovieService().listAll().then((result) => console.log(result))