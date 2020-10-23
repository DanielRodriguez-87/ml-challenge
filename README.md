# Mercado Libre Challenge - React.js

Client and Server developed in Reactjs (Javascript)

## Installation

```bash
# Install dependencies for server (Execute command in the server directory)
npm install

# Install dependencies for client (Execute command in the client directory)
npm install
```

## Config .env

### Server (File .env in the server directory)

| Variable        | Description           | Values                       |
| --------------- | --------------------- | ---------------------------- |
| PORT            | API Port              | 3001                         |
| HOST            | API Host              | localhost                    |
| ML_API_BASE_URL | Mercado Libre API URL | https://api.mercadolibre.com |

### Client (File .env in the client directory)

| Variable          | Description | Values                    |
| ----------------- | ----------- | ------------------------- |
| REACT_APP_API_URL | API URL     | http://localhost:3001/api |

## Run server and client

```bash
# Run server (Execute command in the server directory)
npm run dev:server

# Run client (Execute command in the client directory)
npm run dev:client

# Server runs on http://localhost:3001 and client on http://localhost:3000
```

## Run server with Docker

```bash
# Build image (Execute command in the server directory)
docker build -t danielrodriguez/server-ml .

# Run image (Execute command in the server directory)
docker run -p 3001:3001 --network='host' -d danielrodriguez/server-ml

# Run test
http://localhost:3001/api/items/MLA884642669
```

## Run tests

```bash
# Run server [unit test] (Execute command in the server directory)
npm run test:server

# Run client [unit test] (Execute command in the client directory)
npm run test:client

# Run client [e2e] (Execute command in the client directory)
npm run e2e:client
```

## Built With

### Setup With

- [npm](https://www.npmjs.com/) - as package manager
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) - as a boilerplate for react
- [reactjs](https://reactjs.org/) - as JavaScript library for building user interfaces
- [material-ui](https://material-ui.com/) - as UI framework
- [express](https://expressjs.com/) - as a light-weight web application framework
- [docker](https://www.docker.com/) - as a container creation

### Testing

- [mocha](https://mochajs.org) - as JavaScript test framework running in the browser
- [chai](https://www.chaijs.com/) - as a BDD / TDD assertion library
- [enzyme](https://github.com/airbnb/enzyme) - as JavaScript Testing utility for React
- [cypress](https://www.cypress.io/) - as end-to-end test framework

## Author

Daniel Rodriguez
