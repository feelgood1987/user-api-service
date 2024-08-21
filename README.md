 # NestJS User API service
This is a simple user API service built with NestJS. This service provides a simple api in it's initial version to fetch users list from a `JSON` file.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## API Endpoints
Here are the available endpoints for this service. also you could find the swagger documentation at `http://localhost:3000/swagger` after running the service.

### Get all users
This endpoint returns a list of all users, it accepts no parameters.
```bash
GET /v1/users
```

### Get user by id
This endpoint returns a single user by id, it accepts a single parameter `id` which is the user id.
```bash
GET /v1/users/:id
```


## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
