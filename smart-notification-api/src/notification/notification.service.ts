import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private notifications = [
    {
      id: 1,
      title: 'Welcome',
      message: 'NestJS GraphQL Demo',
    },
  ];

  findAll() {
    return this.notifications;
  }

  create(notification: any) {
    const newNotification = {
      id: this.notifications.length + 1,
      ...notification,
    };

    this.notifications.push(newNotification);

    return newNotification;
  }
}