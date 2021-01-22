const fastify = require('fastify');

const build = (opts = {}) => {
  const app = fastify(opts);

  app.get('/', (request, reply) => {
    reply.send({ message: 'Hello World!' });
  });

  return app;
};

module.exports = build;
