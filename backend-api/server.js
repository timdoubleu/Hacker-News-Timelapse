require('babel-register');
require('babel-polyfill');

const Hapi = require('hapi');
const AuthBearer = require('hapi-auth-bearer-token');

const { default: routes } = require('./server/routes/index-routes.js');
const { default: crons } = require('./server/crons.js');

const server = new Hapi.Server({port: 8080});

const main = async () => {
  try {
    await server.register(AuthBearer);
    await server.register(crons);

    server.auth.strategy('simple', 'bearer-access-token', {
      allowQueryToken: true,              // optional, false by default
      validate: async (request, token, h) => {

        // here is where you validate your token
        // comparing with token from your database for example
        const isValid = token === '1234';

        const credentials = { token };
        const artifacts = { test: 'info' };

        return { isValid, credentials, artifacts };
      }
    });

    server.route(routes);

    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

main();
