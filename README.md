# Go

**Go** is a minimalist framework that provides a starting point for coding front end web development projects, such as small static web sites, prototype template constuction and 'design in the browser' sessions.

It utilises Grunt to parse SASS, Mustache templates and carry out some basic tasks such as image optimisation and code minification in a logical directory structure.

**Important:** Currently **Go** is very unfinished and subject to bugs, changes and all kinds of fun stuff. If you must use it, then in the words of Captain McAllister 'fairly warned be thee says i' :)

## Installation

Node and the Node Package Manager are the easiest way to set up Grunt and its dependencies for **Go**.

These instructions currently apply to OS X Mavericks 10.9.5 and are not tested on any other platform.

1.  Install Node.js using the instructions [here](http://nodejs.org/).
2.  Install Grunt using the command `npm install -g grunt-cli`. More detailed instructions are available at [gruntjs.com](http://gruntjs.com/getting-started).
3.  Download the latest version of **Go** from [here](https://github.com/Frobitz/go/archive/master.zip) and unzip it into your projects directory root.
4.  Install **Go** dependencies by running `npm install`.
5.  Once all dependencies are downloaded you can begin monitoring the SASS, Jade and image directories by running the command `grunt serve` in the project root.
  
