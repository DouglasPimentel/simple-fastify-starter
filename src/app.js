const fastify = require('fastify');
const root = require('./routes/root');

const createApp = (opts = {}) => {
  const app = fastify(opts);

  app.register(root);

  return app;
};

module.exports = createApp;
