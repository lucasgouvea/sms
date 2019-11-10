# SMS

A proposed challenge to apply for a NodeJS developer position.

## Getting Started

There are 2 proposed ways to get started with the application. One is **manual configuring**, and the other is using **docker compose**.

### Manual Configuring

In this case, you will connect to a mongo instance running on Google Cloud Platform.

#### API

Create a **.env** file containing

* API_PORT=8080
* MONGO_HOST=35.203.39.237
* MONGO_PORT=27017
* MONGO_DB=sms
* MONGO_USER=root
* MONGO_PASSWORD=1q2w3e

then

```
npm install
```

to run

```
node app/index.js
```

You should expect to see

```
API Up on 8080
```
```
Connected to Mongo
```

You can check your **Client** running on

[http://localhost:8080/#!](http://localhost:8080/#!)


or remotely on

[http://35.203.39.237:8080/#!/logs]
(http://35.203.39.237:8080/#!/logs)


### Docker Compose

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

Considering that the API is up, execute:

```
npm run test
```

If the application is running via **docker compose** execute the following snippet:

```
docker exec sms sh -c "npm run test"
```


## Deployment

The application is deployed to [Google Cloud Platform](http://35.203.39.237:8080/#!/) considering these 2 docker images

```
gcr.io/steel-math-257901/sms
```

```
gcr.io/steel-math-257901/mongo
```
