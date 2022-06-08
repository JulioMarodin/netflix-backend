import Movie from "./Movie";
import User from "./user";

function addMovieToUserList(movie: Movie, user: User): void {
  user.myList = [
    ...user.myList,
    movie,
  ]
}

export default addMovieToUserList;