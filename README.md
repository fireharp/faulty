# Faulty

Faulty is a simple Node.js project that emulates HTTP 4xx and 5xx errors for testing purposes. It helps developers test the resilience of their applications against various HTTP error responses.

## Features

- Supports the following error codes:
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 408 - Request Timeout
  - 500 - Internal Server Error
  - 501 - Not Implemented
  - 502 - Bad Gateway
  - 503 - Service Unavailable
  - 504 - Gateway Timeout

- Planned features:
  - Random errors: Receive a random error or a 200 response.
  - Configurable errors: Configure custom error responses based on specific conditions.

## Usage

To use Faulty, simply send a request to the desired error endpoint:

```
https://faulty.vercel.app/errors/<error_code>
```

For example, to get a 502 Bad Gateway response:

```
https://faulty.vercel.app/errors/502
```

## Deployment

You can deploy Faulty to your own Vercel instance, or you can use the public instance at https://faulty.vercel.app/.

### Vercel

1. Clone this repository.
2. Set up a new project on [Vercel](https://vercel.com/).
3. Connect the project to the cloned repository.
4. Deploy the project following Vercel's instructions.

### Docker (coming soon)

A Docker image for Faulty will be available soon. Stay tuned for updates.

## Contributing

We welcome contributions! If you'd like to help improve Faulty or add new features, please feel free to open a pull request or create an issue.
