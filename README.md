# express-node-postgres-redis-boilerplate
> Boilerplate for Node.js with Express, Postgres and Redis

# Steps to run(for dev)
1. Resolve dependencies `npm install` .
2. UP container: `docker-compose up` .
3. Running app with live reload(nodemon) inside the container: `docker-compose run app npm run dev`


# Scripts
- To generate coverage report: `docker-compose run app npm run coverage`
- To only run tests: `docker-compose run app npm test`
