import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class FakeAuthGuard
  implements CanActivate {

  canActivate(
    context: ExecutionContext,
  ): boolean {

    const request =
      context.switchToHttp().getRequest();

    request.user = {
      id: 1,
      name: 'Harshal',
      role: 'admin',
    };

    return true;
  }
}