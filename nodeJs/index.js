const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./conexion");
const {body, param, validationResult} = require ("express-validator");
const app = express();
//Definir rutas


//Rutas para libros

const ruta_usuario = require("./rutas/ruta-leer");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", ruta_usuario);

connection.connect((err, res) => {
  if (err) {
    console.log(err);
    console.log("Error de conexion con sql");
    return;
  }
  console.log("Conexion exitosa a la base de datos");
});
app.listen(3000, (err, res) => {
  if (err) {
    console.log("Error al levantar servidor");
    return;
  }
  console.log("Apis escuchando en el puerto 3000");
});
