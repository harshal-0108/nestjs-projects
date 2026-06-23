import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver';
import { NotificationsService } from './notification.service';

@Module({
  providers: [
    NotificationResolver,
    NotificationsService,
  ],
})
export class NotificationModule {}