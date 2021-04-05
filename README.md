# StocksChecker

## Instalation
```
cd client/
cp .env.example .env
npm i
npm run start

cd server/
# update database credentials in knexfile.ts
npm install knex -g
knex migrate:latest
knex seed:run
```
