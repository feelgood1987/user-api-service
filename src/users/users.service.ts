import { Injectable, Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { User } from './interfaces';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);
  private readonly USERS_FILE_PATH = join(
    __dirname.replace('dist', 'src').replace('users', ''),
    '/assets/users.json',
  );

  public async getUsersAsync(): Promise<User[]> {
    return await this.fetchUsersAsync();
  }

  public async getUserByIdAsync(id: number): Promise<User> {
    const users = await this.fetchUsersAsync();
    return users.find((user) => user.id === id);
  }

  private async fetchUsersAsync(): Promise<User[]> {
    try {
      this.logger.verbose('Fetching users...');
      const data = await readFileSync(this.USERS_FILE_PATH, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      this.logger.error('Failed to fetch users.', error);

      // TODO: Here could we send the error to Sentry
      throw new Error('Failed to fetch users.');
    }
  }
}
