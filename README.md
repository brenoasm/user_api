# User Api

## Techs

This projects uses Typescript with NestJS, Swagger, Prisma as ORM, Mysql and Adminer with Docker.

## Running the project

1. Install Docker from https://www.docker.com;
2. Clone this project and run **npm install**;
3. With docker ready, run **docker-compose up**;
4. Run **npm run prisma:up** if it is the first time, so Prisma can create the database;
5. Last run **npm run start:dev**.

The documentation can be accessed from http://localhost:2001/api. 

## Running the tests

Run **npm run test**.

## TODO

1. Setup ElasticSearch for logs;
2. Write more tests;
3. Start the API with the docker (Had problems with the migration from Prisma).