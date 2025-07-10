import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async test(): Promise<string> {
    return 'test';
  }

  async getUser(userId: string): Promise<any> {
    return {
      name: userId,
      email: 'user@email.com',
      password: '0000',
    };
  }
}
