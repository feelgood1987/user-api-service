import { Injectable, Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);
  private readonly USERS_FILE_PATH = join(
    __dirname.replace('dist', 'src').replace('users', ''),
    '/assets/users.jsons',
  );

  public async fetchUsersAsync(): Promise<string[]> {
    try {
      this.logger.verbose('Fetching users...');
      const data = await readFileSync(this.USERS_FILE_PATH, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      this.logger.error('Failed to fetch users.', error);

      // TODO: Send error to Sentry
      return [];
    }
  }
}
