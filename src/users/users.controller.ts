import { Controller, Get, Header } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  public async getUsersAsync(): Promise<string[]> {
    return await this.userService.fetchUsersAsync();
  }
}
