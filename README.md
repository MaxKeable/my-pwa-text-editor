# My-PWA-Text-Area

  
## Description:

This is a coding text area that can be downloaded as a pwa or used online. The provided download button in the top left allows the user to download the application as a pwa. 

## Table of Contents:
- [My-PWA-Text-Area](#my-pwa-text-area)
  - [Description:](#description)
  - [Table of Contents:](#table-of-contents)
- [Overview](#overview)
  - [The Task](#the-task)
  - [The Challenge:](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Usage Instructions](#usage-instructions)
  - [Repository Link:](#repository-link)
  - [Deployed Applicaiton](#deployed-applicaiton)
  - [Screenshots.](#screenshots)
    - [Figure 1 Application text editor](#figure-1-application-text-editor)
  - [Installation Process](#installation-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Author](#author)

# Overview

## The Task

## The Challenge:
As you have progressed through this course, you have put together a number of impressive projects that you can show off to potential employers. This project is no exception; in fact, it features some of the most impressive expressions of the concepts you have learned so far.

Your task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor, you will start with an existing application and implement methods for getting and storing data to an IndexedDB database. You will use a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Usage Instructions

1. Use the URL to naviage to the deployed applicaiton on heroku
2. then the user can either stay on the web and use the application 
3. Or the user can use the download button to download the applicaiton and use it as a PWA


## Repository Link:
[Repository Link 'Click Here'.](https://github.com/MaxKeable/my-pwa-text-editor)

## Deployed Applicaiton 
[Click Here to view deployed app.](https://my-pwa-text-editor1-494dcc0ffcd1.herokuapp.com/)

## Screenshots.
### Figure 1 Application text editor
![screen shot 1](./images/Screenshot%202023-06-29%20at%207.37.12%20pm.png)

![screen shot 2](./images/Screenshot%202023-06-29%20at%207.38.36%20pm.png)

## Installation Process
1. Navigate to the URL
2. click the install link in the top of the page
3. then use it as a PWA!

## Built With

- Webpack
- JavaScript
- Node.js: [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
1. How to create a PWA
2. How to deploy a PWA on heroku

## Author

Follow me on Github at [MaxKeable](https://github.com/MaxKeable)! Additional questions or concerns? feel free to contact me at keabledev@gmail.com


© 2023 [MaxKeable](https://github.com/MaxKeable). Confidential and Proprietary. All Rights Reserved.