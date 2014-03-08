# Cristian's Site

Hello Hello, friends. Our beautiful app is build with [Yeoman](http://yeoman.io/). 

#Install

First off, you have the _app_ folder where the source of our application lies. Yet all this commands are to be executed from the root folder of our app.

To begin we need to set up our dependencies. You'll need to install [Node](http://nodejs.org/) with NPM to get everything working.

```
npm install -g yo
npm install
```

That's it for the dependencies. This installs all the tools you need. Now let's fetch all of our JS libraries.

```
bower install
```

Good, we now have everything we need. Now we need to run our server and see how our client looks like.

```
grunt serve
```

## Build

Grunt builds everything for us: compiles to css, minimizes js and also copies everything into the _dist_ folder.

We deploy to Heroku, so there's a little bit of code there in our gruntfile to get things going.
We have a Procfile and a simple server with a static web server to put it online.

Done.
