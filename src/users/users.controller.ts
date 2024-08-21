import { Controller, Get, Header, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users Controller')
@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  @ApiOperation({ summary: 'Get all users' })
  public async getUsersAsync(): Promise<User[]> {
    return await this.userService.getUsersAsync();
  }

  @Get('/:id')
  @Header('Content-Type', 'application/json')
  @ApiOperation({ summary: 'Get user by ID' })
  public async getUsersByIdAsync(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserByIdAsync(parseInt(id));
  }
}
