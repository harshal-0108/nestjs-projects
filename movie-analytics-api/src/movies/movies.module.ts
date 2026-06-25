import { Module } from '@nestjs/common';

import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesGateway } from './movies.gateway';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesGateway],
})
export class MoviesModule {}