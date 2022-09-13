# Hiring Task - Alice in Wonderland

## Overview

This application presents a web-based interface built with [React](https://reactjs.org/) to read _Alice in Wonderland_ by Lewis Carroll, in which the names of characters are equipped with rich tooltips providing information about the characters.

### Implementation Details

The application consists of two "services," an API and a UI. The UI is built with React and uses the [MUI](https://mui.com/) component library. The API has access to the full text of _Alice in Wonderland_ and a list of characters. {{ candidate completes implementation details }}

## Development

### Prerequisites

- Node v18.0.0
- NPM 8.6.0

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) is recommended.

### Installing Dependencies

Run `npm i` in the project root to install all necessary dependencies.

### Development Environment

Executing `npm start` in the project root will invoke [Concurrently](https://github.com/open-cli-tools/concurrently) to spin up both services:

- **nodemon** serves the API on port `3030`;
- **Webpack Dev Server** serves the UI on port `8080`.

With the above port configurations, the UI can be accessible in your browser at `http://localhost:8080`, and requests can be made from the UI, to the API, via `http://localhost:3030`.

### Adding New Dependencies

This project makes use of [webpack-workspace](https://www.npmjs.com/package/webpack-workspace). To add a dependency for the shell application, run `npm i` from the project root directory. To add an API dependency, run `npm i desired-package -w api`. To add a UI dependency, run `npm i desired-package -w ui`.

## Production

For the purposes of this task assessment, we won't concern ourselves with production details.

## References

This is a non-exhaustive list of tools used in this application.

- [Node.js](https://nodejs.org/en/)
    + [Concurrently](https://github.com/open-cli-tools/concurrently)
    + [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
    + [MUI](https://mui.com/)
- [Webpack](https://webpack.js.org/)
    + [webpack-workspace](https://www.npmjs.com/package/webpack-workspace)
