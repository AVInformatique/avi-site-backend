# avi-site-backend

This app is a backend for the AVI main site project. It is a REST API developed in NodeJS and deployed to Firebase Hosting.
The data are stored in Firestore Database. Firestore is a schemaless NoSQL database that stores data in documents (similar to MongoDB but schemaless).

## Requirements

-   NodeJS
-   ExpressJS
-   NPM
-   Firebase CLI

## Packages and Configurations

### routes

-   Path in project: `./src/routes`
-   Description (like Controller): This package contains all routes of the API. Each route is a file in this package. <br />
    The routes are grouped by the resource they are related to. For example, all routes related to users are in the `userRouter.js` file.

### models

-   No models in this project because we use a NoSQL database (Firestore) that is schemaless.

### services

-   Path in project: `./src/services`
-   Description: This package contains all functionalities of the API (like Create, Read, Update, Delete ...). <br />
    Each service is a file in this package.
-   Example: `./src/services/userService.js`

### firebase config

-   Path in project: `./src/firebaseConfig.js`
-   Description: This file contains the configuration of the Firebase project.

## API Documentation

-   Host: `https://{host}/api/v1`

### Users

| Endpoint     | HTTP Method | Description         |
| ------------ | ----------- | ------------------- |
| `/users`     | GET         | Get all users data  |
| `/users`     | POST        | Create a new user   |
| `/users/:id` | GET         | Get a user by id    |
| `/users/:id` | PUT         | Update a user by id |
| `/users/:id` | DELETE      | Delete a user by id |

### Events

| Endpoint                     | HTTP Method | Description                                                   |
| ---------------------------- | ----------- | ------------------------------------------------------------- |
| `/events`                    | GET         | Get all events data                                           |
| `/events`                    | POST        | Create a new event                                            |
| `/events/:id`                | GET         | Get an event by id                                            |
| `/events/:id`                | PUT         | Update an event by id                                         |
| `/events/:id`                | DELETE      | Delete an event by id                                         |
| `/events/time?m=_&?y=_`      | GET         | Get events by month (using params m, y to select month, year) |
| `/events/time?y=_`           | GET         | Get events by year (using params y to select year)            |
| `/events/keywords/:keywords` | GET         | Get events by keywords                                        |

## How to run

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000` in your browser
5. Enjoy!

## How to deploy

1. Run `npm run build`
2. Run `firebase deploy`
3. Enjoy!

## How to contribute

1. Fork this repository
2. Clone your repository
3. Run `npm install`
4. Run `npm start`
5. Open `http://localhost:3000` in your browser
6. Create a new branch
7. Make some changes
8. Push your branch and create a pull request
9. Enjoy!

## Contributors

-   [Avi](https://www.facebook.com/aviinsalyon)
