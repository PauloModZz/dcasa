const express = require("express");
const cors = require("cors");
require("dotenv").config();
const conectarDB = require("./database/conexion");

const app = express();

// Conectar a la base de datos
conectarDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando con MongoDB Atlas.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
