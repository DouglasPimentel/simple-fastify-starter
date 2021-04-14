function routes(app, options, next) {
  app.get('/', (req, reply) => {
    reply.send({ message: 'Hello World' });
  });
  next();
}

module.exports = routes;
