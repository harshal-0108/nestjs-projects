import {
  PipeTransform,
  Injectable,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class RatingValidationPipe
  implements PipeTransform {

  transform(value: any) {

    const rating = Number(value);

    if (
      rating < 1 ||
      rating > 5
    ) {
      throw new BadRequestException(
        'Rating must be between 1 and 5',
      );
    }

    return rating;
  }
}