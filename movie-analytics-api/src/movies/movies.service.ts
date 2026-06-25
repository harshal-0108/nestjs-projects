import { Injectable } from '@nestjs/common';
import { MoviesGateway } from './movies.gateway';

@Injectable()
export class MoviesService {

  private movies: any[] = [];
  
  constructor(
  private readonly moviesGateway: MoviesGateway,
) {}

  create(movie: any) {

    this.movies.push(movie);

this.moviesGateway.notifyMovieAdded(
  movie,
);

    return {
      message: 'Movie Added',
      movie,
    };
  }

  findAll(
  page = 1,
  limit = 10,
  genre?: string,
  sort?: string,
  order = 'asc',
) {
  let result = [...this.movies];

  // Filtering
  if (genre) {
    result = result.filter(
      movie => movie.genre === genre,
    );
  }

  // Sorting
  if (sort) {
    result.sort((a, b) => {
      if (order === 'desc') {
        return b[sort] - a[sort];
      }
      return a[sort] - b[sort];
    });
  }

  // Pagination
  const start = (page - 1) * limit;
  const end = start + limit;

  return result.slice(start, end);
}

getAnalytics() {

  const totalMovies =
    this.movies.length;

  const averageRating =
    totalMovies > 0
      ? this.movies.reduce(
          (sum, movie) =>
            sum + movie.rating,
          0,
        ) / totalMovies
      : 0;

  const actionMovies =
    this.movies.filter(
      movie =>
        movie.genre === 'Action',
    ).length;

  const romanceMovies =
    this.movies.filter(
      movie =>
        movie.genre === 'Romance',
    ).length;

  return {
    totalMovies,
    averageRating,
    actionMovies,
    romanceMovies,
  };
}
}