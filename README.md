# Backend Stack For Bakergun

![Flow-Diagram-NodeJS-ExpressJS-EJS-WithoutDB](Flow_Diagram_NodeJS_ExpressJS_EJS_WithoutDB_sm.png)

Backend stack ini dibuat dengan [NodeJS](https://nodejs.org), [ExpressJS 🚀](https://expressjs.com) dan Templating Engine[EJS](https://ejs.co/)

Pelayanan (**_serving_**) apa yang ada di dalam project ini? file berextensi .json untuk keperluan **RestAPI**(**Re**presentational **S**tate **T**ransfer **A**pplication **P**rogramming **I**nterface) ke [Front-End](https://github.com/sanengineer/backergun)

## Build UI with Templating Engine EJS

![bakergun-ui-img](Public/assets/images/bakergun-landing-page.jpg)

Rendering html document secara terpisah menggunakan templating view engine EJS.

Figma Design UI link : [Bakergun UI Design](https://www.figma.com/file/LcJvUL3iMNdFZ9lsLu0XHq/Bakergun-UI-3D-Models-UI-UX?node-id=0%3A1)

## ReSTAPI endpoint

### Players List

- All Player

        localhost:3003/api/v1/players

- Player By Id

  example: Player Id 2

        localhost:3003/api/v1/players/2

### Game Board (Icon and Emoji)

- All Image

        localhost:3003/api/v1/gameboard

- Image By Id

  example: Image Id 2

        localhost:3003/api/v1/gameboard/2

## How To Run Server ?

        $ cd bakergun-backend

        $ npm start

## Development Guide

### Run Server Dev Mode:

        $ cd bakergun-backend

        $ npm run dev

### Required :

- [Watch Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) Plugin, to editing stylesheet.

---

#### Credit :

- Roy Thomas Fielding, [disertasi](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)nya.
