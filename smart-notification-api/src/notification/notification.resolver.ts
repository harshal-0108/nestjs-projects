import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { Notification } from './entities/notification.entity';
import { NotificationsService } from './notification.service';

import { CreateNotificationInput } from './dto/create-notification.input';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(
    private readonly notificationsService: NotificationsService,
  ) {}

  @Query(() => [Notification])
  notifications() {
    return this.notificationsService.findAll();
  }

  @Mutation(() => Notification)
  createNotification(
    @Args('input')
    input: CreateNotificationInput,
  ) {
    return this.notificationsService.create(input);
  }
}