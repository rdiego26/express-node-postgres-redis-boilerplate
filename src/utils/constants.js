const constants = {

  db: {
    host: process.env.DB_HOST || 'postgres',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'db',
    port: process.env.DB_PORT || 5432
  },

  app: {
    name: 'Node Boilerplate',
  },

  server: {
    port: 3000
  },

};

module.exports = constants;
