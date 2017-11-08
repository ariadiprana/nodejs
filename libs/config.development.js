import logger from "./logger.js";

module.exports = {
  host: "localhost",
  database: "trave",
  username: "root",
  password: "Ad1pr4n4",
  jwtSecret: "Ad1pr4n4",
  jwtSession: {session: false},
  params: {
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    }
  }
}
