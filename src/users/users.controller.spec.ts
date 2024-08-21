import { Test, TestingModule } from '@nestjs/testing';
import { readFileSync } from 'fs';
import { join } from 'path';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './interfaces';

describe('UserController', () => {
  let userService: UsersService;
  let userController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userService = app.get<UsersService>(UsersService);
    userController = app.get<UsersController>(UsersController);
  });

  describe('test user controller functionality', () => {
    let users: User[] = [];

    beforeAll(async () => {
      const content = await readFileSync(
        join(__dirname, '../assets/mock-users.json'),
        'utf8',
      );
      users = JSON.parse(content);
    });

    it('should return all users list"', async () => {
      jest
        .spyOn(userService, 'getUsersAsync')
        .mockImplementation(async () => users);

      const result = await userController.getUsersAsync();

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      expect(result).toEqual(users);
    });

    it('should return user by id', async () => {
      jest
        .spyOn(userService, 'getUserByIdAsync')
        .mockImplementation(async () => users[0]);

      const user = await userController.getUsersByIdAsync('1');

      expect(user).toBeDefined();
      expect(user).toBe(users[0]);
    });

    it('should handle failure to get user list', async () => {
      jest
        .spyOn(userController, 'getUsersAsync')
        .mockRejectedValue(new Error('Failed to get user list'));

      try {
        await userController.getUsersAsync();
      } catch (error) {
        expect(error.message).toBe('Failed to get user list');
      }
    });

    it('should handle failure to get user list', async () => {
      jest
        .spyOn(userController, 'getUsersByIdAsync')
        .mockRejectedValue(new Error('Failed to get user list'));

      try {
        await userController.getUsersByIdAsync('1');
      } catch (error) {
        expect(error.message).toBe('Failed to get user list');
      }
    });
  });
});
