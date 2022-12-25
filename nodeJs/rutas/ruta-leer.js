const express = require("express");
const info = require("../metodos/leer");
const connection = require("../conexion");

const { body, param, validationResult } = require("express-validator");
var router = express.Router();

//Ingresar autor
router.post("/ingresarCliente", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    let body = req.body;
    info.ingresarCliente(connection, body, (data) => {
      res.json(data);
    });
  });

  router.get("/clientes", [], (req, res) => {
    info.obtenerTodosClientes(connection,req, (data) => {
      res.json(data);
    });
  });

  router.get("/empleados", [], (req, res) => {
    info.obtenerClientes(connection,req, (data) => {
      res.json(data);
    });
  });

  router.get("/empresas", [], (req, res) => {
    info.obtenerEmpresas(connection,req, (data) => {
      res.json(data);
    });
  });


module.exports = router;