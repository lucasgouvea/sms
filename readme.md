# SMS

A proposed challenge to apply for a NodeJS developer work.

## Getting Started

There are 2 proposed ways to get started with the application. One is **manual configuring**, and the other is using **docker compose**.

### Manual Configuring

In this case, you will need a mongo instance running either on localhost or on a container.


#### API

Create a **.env** file containing

* API_PORT=8080
* MONGO_HOST=localhost
* MONGO_DB=sms
* MONGO_USER=root
* MONGO_PASSWORD=1q2w3e

#### Client

Configure the API port on the **env.js** file inside the **client** root folder.

```
window.env.PORT = 8080;
```

#### Mongo

Create a database named **sms** and 2 collections, one named **decodeLog** and the other named **encodeLog**.

If necessary, give admin permission to the database as following:

```
db.createUser({ user: 'root', pwd: '1q2w3e', roles: [ { role: 'root', db: 'admin' } ] })
```

After all run

```
node app/index.js
```

### Docker Compose

This is a much easier way to run the application.
Go to the project's root folder.
Build the app image running:

```
docker build -t sms .
```

Build the mongo image running:

```
docker build -t mongo:sms ./mongo/
```

Then run:

```
docker-compose up
```

And the API, Client, and Mongo should be working properly.


## Running the tests

Considering that the API and Mongo are up, execute:

```
npm run test
```

If the application is running via **docker compose** execute the following snippet:

```
docker exec sms sh -c "npm run test"
```


## Deployment

The application is deployed to Google Cloud Platform considering these 2 docker images

```
gcr.io/steel-math-257901/sms
```

```
gcr.io/steel-math-257901/mongo
```

To deploy, push them to GCP and then pull on the cloud host machine. On the host machine switch the **docker-compose.yaml** to **docker-compose-prod.yaml**, then run

```
docker-compose up
```
