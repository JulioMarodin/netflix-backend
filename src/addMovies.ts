import Movie from "./Movie";
import User from "./user";

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

export default addMovies;