# Backend Stack For Bakergun - NodeJS, ExpressJS and Data JSON Dummy

![Flow-Diagram-NodeJS-ExpressJS-EJS-WithoutDB](Flow_Diagram_NodeJS_ExpressJS_EJS_WithoutDB_sm.png)

Backend stack ini dibuat dengan [NodeJS](https://nodejs.org), [ExpressJS 🚀](https://expressjs.com) dan JSON Dummy (Tidak ada intergrasi ke Database Platform atau noDB)

Pelayanan (**_serving_**) apa yang ada di dalam project ini? file berextensi .json untuk keperluan **ReSTAPI**(**Re**presentational **S**tate **T**ransfer **A**pplication **P**rogramming **I**nterface) ke [Front-End](https://github.com/sanengineer/backergun-fronent-html-css-js)



## Feature

### View Engine Ready To Use
Penggunaan view engine dengan ejs ataupun hbs, sebenarnya kurang begitu penting. Namun di project ini sudah saya siapkan routing untuk merender tiap halaman, dari mulai halaman index sampi sub nya.

Stepnya, membuat folder baru (misal: Views) di directory root project ini, lalu pakai module export-import dan uncomment codingan yang ada di file server.js di project ini. 


misal :

- localhost:8008 (index)

- localhost:8008/page1 (sub)

- localhost:8008/page2 (sub)

### Data JSON Dummy
#### gameboard-urlimage.json
isinya json yang hanya memiliki value url image saja

#### gameboard-id-name-urlimage.json
isinya json yang memiliki nama key id, key name, dan key imageUrl. Value dari masing-masing key tersebut misal untuk key **name**, value nya bisa di pakai untuk menembak ke attribute **alt** di element img di html.

#### images.json
Isinya json untuk assets images yang ada di semua halaman.

#### players.json
Isinya json untuk list daftar nama para pemain, komentar tentang experience gamenya, avatar tiap tiap pemain, dan jobs decription tiap tiap pemain

#### blog.json
Isinya json untuk halaman blog page, mulai dari feature image post, title, descrtioon, nama authorny, avatar-author dan tanggal postingnya.

### Endpoint ReSTAPI

#### Players List 

- All Player

        localhost:8008/api/v1/players

- Player By Id

  example: Player Id 2

        localhost:8008/api/v1/players/2

#### Images Asset on Game Page

- Images

        localhost:8008/api/v1/gameboard

- Image By Id

  example: Image Id 2

        localhost:8008/api/v1/gameboard/2


#### Blog Page 
- All Blog Post
  
        localhost:8008/api/v1/blog

- Blog Post by Id

  example: Posy Id 2

        localhost:8008/api/v1/blog/2



## How To Run Server ?

        $ cd bakergun-backend

        $ npm start

## Development Guide

### Use Node Version 10.0.0 (Recomended)

### Run Server Dev Mode:

        $ cd bakergun-backend

        $ npm run dev