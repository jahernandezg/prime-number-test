# Prime Numbers List

This project is a technical test to qualify for the position of backend developer for FPay.

## Get started 🚀

_These instructions allow you to get a working copy of the project on your local machine for development and testing purposes._

View **Deployment** to learn how to deploy the project.

### Pre requirements 📋

_For a local environment, you can use nodejs v14, but you can also use docker from version 20, I leave general links depending on your operating system._

```
nodejs v14.x.x, https://nodejs.org/dist/v14.19.0/
```

```
docker engine v20.x.x, https://www.docker.com/get-started
```

### A typical top-level directory layout


    |-- .eslintrc.json'                                 #Eslint configuration file
    |-- .gitignore',                                    #Git ignore file
    |-- app.js',                                        #Entry point of app
    |-- babel.config.js',                               #Babel config file
    |-- docker-compose.yml',                            #Docker composer config file
    |-- Dockerfile',                                    #File containing the information for building the docker image
    |-- package-lock.json',                             #package-lock file
    |-- package.json',                                  #package.json file Contains script, dependencies and configurations of the pplication.
    |-- README.md',                                     #THIS FILE
    |-- server.js',                                     #Server instance
    |-- src',                                           #contain source of aplication
        |-- api',                                       #Contains the controllers and routes of the application
        |   |-- default.controller.js',                 #default controller
        |   |-- prime.controller.js',                   #Main controller containing the test solution
        |   |-- routes.js',                             #Contains the main routes bound to the controllers
        |-- middlewares',                               #Middleware folder
        |   |-- error-handler.js',                      #Error Handler middleware
        |   |-- parseIntProps.middleware.js',           #Custom middleware that parses to integer certain properties indicated in the routes
        |-- services',                                  #Service folder
        |   |-- prime.service.js',                      #Main service that has the business logic that solves the technical test.
        |-- validators',                                #Request Validators folder 
        |   |-- prime.validator.js',
        |-- __TEST__',                                  #Test Folder
            |-- app.spec.js',
            |-- default.controller.spec.js',
            |-- error-handler.spec.js',
            |-- parseIntProps.middleware.spec.js',
            |-- prime.controller.spec.js',
            |-- prime.service.spec.js',

### Installation 🔧

_Once nodejs is installed, you must go with your console to the project path and execute:_

```
npm i
```
_and run_

```
npm run start
```

_You may need to install nodemon to be able to edit and refresh the server if you want to change anything in the API._
```
npm i -g nodemon
```

_and run_

```
npm run start:dev
```

_In both cases, if everything goes well, you can go to your favorite browser and open the following link:_
[http://localhost:3000](http://localhost:3000)

## Running the tests ⚙️

_To run the tests from your console, run the following command:_

### Unit TESTS and Integration TEST 🔩

_We have unit and integration tests, combining JEST with SUPERTEST to fully test the API._
```
npm run test
```

_You can see the code coverage with the following command:_
```
npm run test:coverage
```

### ESLINT Configuration ⌨️

_ESLINT implemented with google coding styles._

## Deploy 📦

_You can create the app's docker image from the Dockerfile, and then create the container, with the following commands:_
```
docker build -t docker_prime_numbers_fpay_test .
```
_And if we create a container, giving it a name so that it doesn't have a random one._
```
docker run -d --name prime_numbers_container --publish 3000:3000 docker_prime_numbers_fpay_test
```

_To simplify this routine, a docker-composer file has been created that executes these tasks, for them it is necessary to install docker-composer and then use the command:_
```
docker-composer up --build -d
```
_In both cases, if everything goes well, you can go to your favorite browser and open the following link (local context):_
[http://localhost:3000](http://localhost:3000)

## built with 🛠️

_All technologies are open source_

* [express](https://www.npmjs.com/package/express) - minimalist web framework for node
* [celebrate](https://www.npmjs.com/package/celebrate) - celebrate is an express middleware function that wraps the joi validation library
* [jest](https://www.npmjs.com/package/jest) - for unit tests
* [supertest](https://www.npmjs.com/package/supertest) - for HTTP tests
* [doker](https://www.docker.com/get-started) - Docker for containers
* [nodejs](https://nodejs.org/dist/v14.19.0/) - nodejs 14.x.x

## Autor ✒️


* **José Armando Hernandez Guanare** - *Code, test, documentation* - [portfolio](https://www.alchemistsoft.com/) - [github -> jahernandezg](https://github.com/jahernandezg)


## Licencia 📄

This project is licensed under the License (Apache-2.0) - see the file [LICENSE.md](LICENSE.md) for details



---
⌨️ with ❤️ by [jahernandezg](https://github.com/jahernandezg) 😊


