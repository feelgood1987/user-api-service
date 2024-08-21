import { Controller, Get, Header, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  public async getUsersAsync(): Promise<User[]> {
    return await this.userService.getUsersAsync();
  }

  @Get('/:id')
  @Header('Content-Type', 'application/json')
  public async getUsersByIdAsync(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserByIdAsync(parseInt(id));
  }
}
