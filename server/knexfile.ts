interface KnexConfig {
  [key: string]: object;
};

const KnexConfig: KnexConfig = {
  development: {
    client: 'pg',
    connection: {
      database: 'stockchecker',
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: '5432'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/stockchecker',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}

export default KnexConfig;