import {
  Controller,
  Get,
  Post,
  Body,
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(
    private readonly moviesService: MoviesService,
  ) {}

  @Post()
  create(
    @Body() movie: any,
  ) {
    return this.moviesService.create(movie);
  }

  @Get()
findAll(
  @Query('page') page = '1',
  @Query('limit') limit = '10',
  @Query('genre') genre?: string,
  @Query('sort') sort?: string,
  @Query('order') order = 'asc',
) {
  return this.moviesService.findAll(
    Number(page),
    Number(limit),
    genre,
    sort,
    order,
  );
}

@Get('analytics')
getAnalytics() {
  return this.moviesService.getAnalytics();
}

}