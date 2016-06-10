## Code camp 2016-06-16 - 2016-06-17
#"Javascript web apps with components and one-way data flow" 

## Prerequisites
1. Up-to-date Chrome (for Ecma-script 2015 support)
2. GIT
3. Node 6.x (for the build process)
4. Your IDE of choice - why not try VSCode?

## What are we learning?
 * Modules
 * ES2015 (string templates, spread, arrow functions etc)
 * Rendering a web page from application state (the one-way data flow)
 * Updating the state and triggering re-render
 * Single-Page-Application routing
 * Javascript tests (with Tape)
 * Fetch api

## What are we doing?
We will be building a basic web application using javascript, as vanilla as possible. The application will consist of:
1. Back-end API: AlfaLaval items in json-format
2. A javascript state & render engine
3. A Single-Page-Application start page (index.html) containing:
    1. A div tag with id="main", where all HTML will be rendered
    2. A script tag including "app.js", which will take care of the rendering

## Getting started
1. Clone repo: https://github.com/jsannerstedt/code-camp
2. Run npm install
3. Start API (the "json-server" package) using data from db.json: npm run backend
4. Start build watcher: npm run watch
5. Start web server: npm run server
6. if on osx or -nix, npm run dev should do it all
           
The backend and the start page are provided, so we can focus on the js parts. Have a look at:

* Index.html
* /src/app.js
* /src/components/component1.js
* /test/component1.js

... and start coding!



## What do I do if I'm done in 5 minutes and bored? [TODO]
* Transpiling and Babel
* One-way data flow frameworks (reacts, riot etc)
* Isomorphism
* ... ?