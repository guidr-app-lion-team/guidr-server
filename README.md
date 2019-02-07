# Guidr App

![Guidr App](https://i.imgur.com/479OBJ5.png)

## By The Guidr Team
- UI team: Steven Jefferson, James Goodnight, Itel Domingo
- Lead Frontend Developer: Matt Basile
- Lead Backend Developer: Asa Shalom
- Scrum Master: Timothy Hoang

## To view this app online

- To view deployed app, visit: [Guidr Home](https://guidr2.netlify.com/)
- Info at the end to edit the source code

## About

- [Guidr](https://guidr2.netlify.com/) is an app that helps backcountry guides of all types log their private/professional trips.
- Sign up for an account, add adventure, see a guide's profile
- Currently: Stable Version v1.0 -- updates are possible, not currently planned (as of 2/7/2019)

## Features

- A powerful front-end platform built with React, Redux, React Router, Greensock, and Tailwind CSS
- Sign up and log into your own account
- Ability to add full name, location, and bio to a user's account
- Add/update/delete adventures
- Check out adventures in the Newsfeed
- Check out user's profiles

### As a guest

1. Register an account as normal
2. Log into the Mongo database and grant admin permissions with `db.<your user database>.update({ username: "<username>" }, { $set: { isAdmin: true }})` if using command line or log into [mLAB](https://mlab.com/) and edit directly
3. Now admins should have all special abilities and user abilities
4. Feel free to add new cities and administrate

### As a user

1. Register a new account
2. Set up your profile by clicking your name on the top right
3. Don't forget to fill out your profile by click on the your name at the top right
4. Check out the available cities or request a new one from the admins via the contact form on home page
5. Post a new story under a city
6. Post comments on other stories
7. Enjoy learning about new places and making friends
8. Character limits are as follows: 1000 character limit for story body, 500 for user bio, 280 for user comments

## Front End Technologies for this project

- [React](https://reactjs.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://redux.js.org/)
- [Greensock](https://www.npmjs.com/package/gsap)
- [Web Font Loader](https://www.npmjs.com/package/webfontloader)

## Back End Technologies for this project
- [Nodejs](https://nodejs.org/en/)
- [Express - Nodejs](https://expressjs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [knex.js](https://knexjs.org/)
- [morgan](https://www.npmjs.com/package/morgan/v/1.1.1)
- [helmet](https://helmetjs.github.io/)
- [sqlite3](https://www.npmjs.com/package/sqlite3)

## Possible Updates

1. CRUD operations for users
2. Ability to upload photos

## To edit the source code

- Github Repo: [Guidr Client Repo](https://github.com/guidr-app-lion-team/guidr-client-deploy)
1. Have stable NPM and NodeJS versions installed on your computer
2. Navigate to the directory of choice and type `git clone https://github.com/guidr-app-lion-team/guidr-client-deploy.git`
3. Install necessary packages either with `npm install` or `yarn`
4. Run the client with `npm start` or `yarn start`, then navigate to `http://localhost:3000/` to see the client
5. Open up the package with your favorite editor and hack away!

## More pictures

### Login Page for App
![Guidr App](https://i.imgur.com/479OBJ5.png)
