const dotenv = require('dotenv');
const server = require('./app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

dotenv.config();

const PORT = process.env.PORT || 3000;

server.listen(PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server running on ${address}`);
});
