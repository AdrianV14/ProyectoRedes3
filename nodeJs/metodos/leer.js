
module.exports ={
//Mete a un nuevo empleado a la base de datos
    ingresarCliente: (connection, body, callback) => {
    var query =
      "INSERT INTO `cliente` (`tipo`, `nombre`, `prim_ape`, `seg_ape`, `ciudad`,`pais`,`edad`, `correo`, `grado`, `telefono`, `sexo`, `usuario`, `pass`, `id_video`) VALUES ('" +
      body.tipo +
      "','" +
      body.nombre +
      "','" +
      body.prim_ape +
      "','" +
      body.seg_ape +
      "','" +
      body.ciudad +
      "','" +
      body.pais +
      "'," +
      body.edad +
      ",'" +
      body.correo +
      "','" +
      body.grado +
      "'," +
      body.telefono +
      ",'" +
      body.sexo +
      "','" +
      body.usuario +
      "','" +
      body.pass +
      "','" +
      body.id_video +
      "');";
    //var query = "INSERT INTO `usuario` SET ?"
    connection.query(query, body, (err, results) => {
      if (err) {
        callback({
          array: body,
          id: null,
          success: false,
          err: JSON.stringify(err),
        });
        return;
      }
      callback({ array: null, id: null, success: true });
    });
  },



   //Leer todos los clientes
   obtenerTodosClientes: (connection, req, callback) => {
    const info = req.params;
    connection.query(
      "select * from `cliente`;",
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: results, success: "true" });
      }
    );
  },

  //Leer todos los clientes
  obtenerClientes: (connection, req, callback) => {
    const info = req.params;
    connection.query(
      "select * from `cliente` where `tipo`='Empleado' || `tipo`= 'empleado' ||`tipo`= 'EMPLEADO';",
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: results, success: "true" });
      }
    );
  },

  obtenerEmpresas: (connection, req, callback) => {
    const info = req.params;
    connection.query(
      "select * from `cliente` where `tipo`= 'Empresa' || `tipo`= 'empresa '||`tipo`= 'EMPRESA';",
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: results, success: "true" });
      }
    );
  },
};

