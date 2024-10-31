const mysql = require("mysql2");
// Create the connection to database
// Una conexion a la base de datos es un vinculo entre nuestra aplicacion y nuestro servicio de base de datos
// para poder hacer operaciones mientras este activo

// Existe algo llamado connection pool, son conexiones que se mantienen abiertas para poder ser utilizadas
// en cualquier momento, y se cierran cuando ya no son necesarias

// Las conexiones a una base de datos no son infinitas, por lo que es importante cerrarlas cuando ya no se necesiten
const connectionObject = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "Books",
};
module.exports = {
  getBooks: (req, res) => {
    let books = [];
    try {
      const connection = mysql.createConnection(connectionObject);
      connection.query("SELECT * FROM Books", (err, results, fields) => {
        if (!err) {
          books = results;
          res.json(books);
        } else {
          res.json({ message: "Error al obtener los libros" });
        }
        connection.end();
      });
    } catch (e) {
      console.log(e);
      res.json({ message: "Error al obtener los libros" });
    }
  },
};
