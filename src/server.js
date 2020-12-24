const dotenv = require("dotenv");
const server = require("./app")({
  logger: true,
});

dotenv.config();

const { PORT } = process.env || 3000;

server.listen(PORT, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`server running on ${address}`);
});
