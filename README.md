# ts-http-server

A minimal HTTP server implementation in TypeScript without any framework dependencies. Built for learning and as a foundation for custom server applications.

## Features

- Pure TypeScript implementation
- ES modules support

## Prerequisites

- Node.js 22.14.0 or higher
- npm 10.0.0 or higher

## Installation

### Using NVM (Node Version Manager)

We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage Node.js versions. If you don't have NVM installed, follow the [installation guide](https://github.com/nvm-sh/nvm#installing-and-updating).

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ts-http-server
   ```
2. Install Node.js version specified in `.nvmrc`:

   ```bash
   nvm install
   nvm use
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

### TypeScript Setup

This project uses TypeScript with strict type checking enabled. The configuration is defined in `tsconfig.json`:

- **target**: esnext - Targets the latest JavaScript features
- **module**: nodenext - Uses the latest Node.js module system
- **rootDir**: ./src - Source files are located in the `src` directory
- **outDir**: ./dist - Compiled JavaScript files are generated in the `dist` directory
- **strict**: true - Enables all strict type checking options
- **esModuleInterop**: true - Allows ES module syntax compatibility

### Package Configuration

The `package.json` includes:

- **type**: "module" - Enables ES module syntax (`import`/`export`)
- **build**: Compiles TypeScript to JavaScript
- **start**: Runs the compiled server
- **dev**: Builds and runs the server in one command

## Usage

### Development Mode

For development, use the `dev` script which compiles TypeScript and starts the server:

```bash
npm run dev
```

### Production Mode

First, build the project:

```bash
npm run build
```

Then start the server:

```bash
npm start
```

The server will start and listen on the configured port.

## Project Structure

## Dependencies

### Production

- **express**: ^5.2.1 - Fast, unopinionated web framework for Node.js

### Development

- **typescript**: ^6.0.3 - TypeScript compiler
- **@types/node**: ^25.9.1 - Type definitions for Node.js
- **@types/express**: ^5.0.6 - Type definitions for Express.js

## License

MIT
