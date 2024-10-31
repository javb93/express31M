//require,, palabra para utilizar librerias en nuestro proyecto
const publicacionesController = require("./controllers/publicaciones");
const userController = require("./controllers/user");
const booksController = require("./controllers/books");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const express = require("express");
const app = express();
//Crear un servidor, para escuchar peticiones en la ruta /, y devolver un mensaje
// CORS
// Cross origin request service, nos permite restringir de donde pueden venir las peticiones
// PLACEHOLDER ROUTES
app.get("/", (req, res) => {
  res.send("EN CONSTRUCCION");
});
app.get("/user/:id", userController.getUser);
//publicaciones
app.get("/publicaciones", publicacionesController.getPublicaciones);
app.get("/publicaciones/:id", publicacionesController.getPublicacion);
app.post("/publicacion", jsonParser, publicacionesController.postPublicacion);
app.get("/books", booksController.getBooks);

//Escuchar peticiones en el puerto 3000
app.listen(3050, () => {
  console.log("Servidor corriendo en el puerto 3050 para el area ");
});

// INSTALAR
// instalar nodemon como dependencia de desarrollo, para salvarnos de tener que prender y apagar el server
// npm install nodemon -D
// agregar script de inicio en el package.json
// "start": "nodemon index.js"
// instalar body-parser para poder leer los datos que enviamos en el body de la peticion
// npm install body-parser
