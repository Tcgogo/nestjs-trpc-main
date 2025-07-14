import { Injectable } from '@nestjs/common'

interface User {
  name: string
  email: string
  password: string
}

@Injectable()
export class HealthService {
  async test(): Promise<string> {
    return 'test'
  }

  async getUser(userId: string): Promise<User> {
    return {
      name: userId,
      email: 'user@email.com',
      password: '0000',
    }
  }
}
