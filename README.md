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
3. Start API (the "json-server" package) using data from db.json: npm run server db.json
4. Start build watcher: [TODO]
           
1 and 3 are provided in the repo, to allow us to focus on part 2. Have a look at:
* Index.html
* /src/app.js
* /src/components/component1.js
* tests [TODO]

... and start coding!



## What do I do if I'm done in 5 minutes and bored? [TODO]
* Transpiling and Babel
* One-way data flow frameworks (reacts, riot etc)
* Isomorphism
* ... ?