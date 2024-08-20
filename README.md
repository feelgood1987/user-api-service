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

### Get all users
This endpoint returns a list of all users, it accepts no parameters.
```bash
GET /v1/users
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
