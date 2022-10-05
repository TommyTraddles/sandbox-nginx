# Microservices playground

> ## 👋 SETUP

Make sure you have installed `docker` >= 1.29.2

> ## 👋 SCRIPTS

### prod: `docker-compose up`

- client `localhost`
- api `localhost/api` (load balancing 4 servers)

### dev: `docker-compose -f docker-compose.dev up --build`

- client `localhost:8080`
- api `localhost:3000`
