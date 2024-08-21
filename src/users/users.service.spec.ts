import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', async () => {
    const users = await service.getUsersAsync();
    expect(users).toBeInstanceOf(Array);
    expect(users.length).toBeGreaterThan(0);
  });

  it('should return a user by id', async () => {
    const id = 1;
    const user = await service.getUserByIdAsync(id);
    expect(user).toBeDefined();
    expect(user.id).toBe(id);
  });

  it('should handle failure to fetch users', async () => {
    jest
      .spyOn(service, 'getUsersAsync')
      .mockRejectedValue(new Error('Failed to fetch users.'));
    await expect(service.getUsersAsync()).rejects.toThrowError(
      'Failed to fetch users.',
    );
  });

  it('should handle failure to fetch user by id', async () => {
    const id = -1;
    const user = await service.getUserByIdAsync(id);

    expect(user).toBeUndefined();
  });
});
