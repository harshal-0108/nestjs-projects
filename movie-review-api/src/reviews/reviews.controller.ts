import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { RatingValidationPipe }
from '../common/pipes/rating-validation.pipe';

@Controller('reviews')
export class ReviewsController {

  @Get(':rating')
  getReview(
    @Param(
      'rating',
      RatingValidationPipe,
    )
    rating: number,
  ) {
    return {
      rating,
      message:
        'Review accepted',
    };
  }
}