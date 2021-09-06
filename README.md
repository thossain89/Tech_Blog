# Tech-Blog

## A blog which created using model-view controller (MVC)


<a href="https://img.shields.io/badge/JavaScipt-100%25-yellow"><img alt="JavaScript use" src="https://img.shields.io/badge/JavaScipt-100%25-yellow"></a> <a href="https://img.shields.io/badge/Used-Node.js-red"><img alt="Node.js use" src="https://img.shields.io/badge/Used-Node.js-red"></a> <a href="https://img.shields.io/badge/Used-Express-orange"><img alt="Express" src="https://img.shields.io/badge/Used-Express-orange"></a> <a href="https://img.shields.io/badge/Used-Dotenv-blueviolet"><img alt="Dotenv" src="https://img.shields.io/badge/Used-Dotenv-blueviolet"></a> <a href="https://img.shields.io/badge/Used-Mysql2-informational"><img alt="Mysql2" src="https://img.shields.io/badge/Used-Mysql2-informational"></a> <a href="https://img.shields.io/badge/Used-Sequelize-success"><img alt="Sequelize" src="https://img.shields.io/badge/Used-Sequelize-success"></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Contact Information](#contact-information)

## Description

   Tech Blog uses the Model-View-Controller (MVC) paradigm to create a blog-style website where developers can create an account, edit their information, make posts, edit posts, and comment on other user's posts.

## Installation  

#### The application is deployed on heroku and can be used via clicking the link below.
[Tech-Blog on HEROKU !!!](https://limitless-depths-94721.herokuapp.com/)

### To run and test the source code you need to follow the steps below

#### Mysql is needed to create database. 
#### INSOMNIA to test routes and perform CRUD operations
To download INSOMNIA click [HERE!!!](https://insomnia.rest/)
#### To run this code repo in your computer, user must install Node.js. 
#### User also need the following dependencies

    * Express
    * mysql2 
    * Dotenv 
    * Sequelize
    * Nodemon
    * bcrypt
    * connect-session-sequelize
    * express-handlebars
    * express-session  
    * Jest (To run test)

- open terminal
- clone the repo: `https://github.com/thossain89/Tech_Blog.git`
- cd into new directory (Must be in directory to work) 
- Download all dependency package by entering `npm install`
- Create The database in Mysql shell by running `SOURCE db/schema.sql`
- Quit Mysql shell
- Then run `node seeds/index.js` to seed the database
- Run `node server.js` to start the server


## Usage

```
Simply run 'nodemon server.js' and in a browser run the url: 
http://localhost:3001/

To perform the crud operations separately use INSOMNIA an open source API client. 
```


## Demo of Tech Blog :

![DEMO Tech Blog](./assets/img/demo.gif)  


## Contribution

If you would like to contribute to this project reach out to me. Contact Information can be found below or by clicking on the 'Contact-Information' link provided in the Table of Contents.

## Test Instructions
#### For testing user must install Jest dependency in Node.js module
#### You must Download jest to conduct any test in this repo  
- Download jest in cmd by running the code `npm install jest`
- Then run: `npm run test` in console


## License

<a href="https://img.shields.io/badge/License-MIT-brightgreen"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen"></a>

## Contact Information

[Email Address](tanvirhossain2006@gmail.com)

[Github Repo ReadMe Generator](https://github.com/thossain89/Team_Profile_Generator.git)

## Authors   

<img src="./assets/img/tanvir.jpg" width="50">  


* **Tanvir hossain** [Git Hub Profile](https://github.com/thossain89)  

&copy; 2021 Tanvir Hossain, Coding Bootcamp ,University of Sydney and Trilogy Education
